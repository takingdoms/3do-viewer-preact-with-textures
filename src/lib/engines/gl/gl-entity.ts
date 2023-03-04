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
  protected parent: GlEntity | null;

  private modelViewMatrix: mat4; // this is what receives transformation operations
  private relativeModelViewMatrix: mat4; // this inherits transformations from the parent tree

  private stateOptions: GlEntityStateOptions;

  constructor(model: GlModel | GlModel[] | null, name?: string) {
    this.model = model;
    this.name = name ?? null;

    this.children = [];
    this.parent = null;
    this.modelViewMatrix = mat4.create();
    this.relativeModelViewMatrix = mat4.create();

    this.stateOptions = {
      visibile: true,
      highlighted: false,
    };
  }

  addChild(child: GlEntity) {
    if (child.parent !== null) {
      throw new Error(`Can't add a child that already has a parent.`);
    }

    this.children.push(child);
    child.parent = this;
  }

  protected recalculateMatrices(parentViewMatrix: mat4) {
    this.relativeModelViewMatrix = mat4.mul(mat4.create(), parentViewMatrix, this.modelViewMatrix);

    for (const child of this.children) {
      child.recalculateMatrices(this.relativeModelViewMatrix);
    }
  }

  protected renderChild(ctx: GlContext) {
    const nextColor = this.color ?? WHITE;

    if (this.model !== null && this.stateOptions.visibile) {
      ctx.setUniformFloat4('entityColor', nextColor);
      ctx.setUniformMatrix4('modelViewMatrix', this.relativeModelViewMatrix);

      if (Array.isArray(this.model)) {
        for (const subModel of this.model) {
          this.renderModel(ctx, subModel);
        }
      }
      else {
        this.renderModel(ctx, this.model);
      }
    }

    for (const child of this.children) {
      child.renderChild(ctx);
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

  private renderModel(ctx: GlContext, model: GlModel) {
    if (model.usesNormals()) {
      const normalMatrix = mat4.create();
      mat4.invert(normalMatrix, this.relativeModelViewMatrix);
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

  getStateOptions() {
    return this.stateOptions;
  }

  setStateOptions(stateOptions: GlEntityStateOptions) {
    this.stateOptions = stateOptions;
  }
}
