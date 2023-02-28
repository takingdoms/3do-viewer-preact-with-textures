import { mat4, ReadonlyVec4 } from "gl-matrix";
import { GlContext } from "./gl-context";
import { GlModel } from "./gl-model";
import { GlTexture } from "./gl-texture";
import { Vector3 } from "./types";

const WHITE = new Float32Array([1.0, 1.0, 1.0, 1.0]);
const HIGHLIGHT = new Float32Array([1.0, 1.0, 0.0, 1.0]); // yellow

type GlEntityStateOptions = Readonly<{
  visibile: boolean;
  highlighted: boolean;
  // rotate... translate... etc...
}>;

export class GlEntity {
  private model: GlModel | GlModel[] | null;
  private name: string | null;
  private children: GlEntity[];
  private modelViewMatrix: mat4;

  private stateOptions: GlEntityStateOptions;
  // private textureKey: string | null;

  constructor(model: GlModel | GlModel[] | null, name?: string) {
    this.model = model;
    this.name = name ?? null;
    this.children = [];
    this.modelViewMatrix = mat4.create();
    // this.textureKey = null;

    this.stateOptions = {
      visibile: true,
      highlighted: false,
    };
  }

  addChild(child: GlEntity) {
    this.children.push(child);
  }

  render(ctx: GlContext) {
    this.renderChild(ctx, mat4.create());
  }

  private renderChild(ctx: GlContext, relativeModelViewMatrix: mat4) {
    const localModelViewMatrix = mat4.create();
    mat4.mul(localModelViewMatrix, relativeModelViewMatrix, this.modelViewMatrix);

    const nextColor = this.color ?? WHITE;

    if (this.model !== null && this.stateOptions.visibile) {
      ctx.setUniformFloat4('entityColor', nextColor);
      ctx.setUniformMatrix4('modelViewMatrix', localModelViewMatrix);

      if (Array.isArray(this.model)) {
        for (const subModel of this.model) {
          this.renderModel(ctx, subModel, localModelViewMatrix);
        }
      }
      else {
        this.renderModel(ctx, this.model, localModelViewMatrix);
      }
    }

    for (const child of this.children) {
      child.renderChild(ctx, localModelViewMatrix);
    }
  }

  findChild(name: string, recursive: boolean): GlEntity | undefined {
    for (const child of this.children) {
      if (child.name === name) {
        return child;
      }

      if (recursive) {
        const result = child.findChild(name, recursive);
        if (result !== undefined) {
          return result;
        }
      }
    }

    return undefined;
  }

  private renderModel(ctx: GlContext, model: GlModel, modelViewMatrix: mat4) {
    if (model.usesNormals()) {
      const normalMatrix = mat4.create();
      mat4.invert(normalMatrix, modelViewMatrix);
      mat4.transpose(normalMatrix, normalMatrix);
      ctx.setUniformMatrix4('normalMatrix', normalMatrix);
    }

    model.draw(ctx);
  }

  translate(x: number, y: number, z: number) {
    mat4.translate(this.modelViewMatrix, this.modelViewMatrix, [x, y, z]);
  }

  scale(x: number, y: number, z: number) {
    mat4.scale(this.modelViewMatrix, this.modelViewMatrix, [x, y, z]);
  }

  rotate(rad: number, x: boolean, y: boolean, z: boolean) {
    const axis: Vector3 = [x ? 1 : 0, y ? 1 : 0, z ? 1: 0];
    mat4.rotate(this.modelViewMatrix, this.modelViewMatrix, rad, axis);
  }

  rotateX(rad: number) {
    mat4.rotateX(this.modelViewMatrix, this.modelViewMatrix, rad);
  }

  rotateY(rad: number) {
    mat4.rotateY(this.modelViewMatrix, this.modelViewMatrix, rad);
  }

  rotateZ(rad: number) {
    mat4.rotateZ(this.modelViewMatrix, this.modelViewMatrix, rad);
  }

  resetTransformations() {
    this.modelViewMatrix = mat4.create();
  }

  private get color(): ReadonlyVec4 | undefined {
    if (this.stateOptions.highlighted) {
      return HIGHLIGHT;
    }

    return undefined;
  }

  /*setTextureKey(textureKey: string) {
    this.textureKey = textureKey;
  }

  getTextureKey() {
    return this.textureKey;
  }

  removeTexture() {
    this.textureKey = null;
  }*/

  getStateOptions() {
    return this.stateOptions;
  }

  setStateOptions(stateOptions: GlEntityStateOptions) {
    this.stateOptions = stateOptions;
  }
}
