import { mat4, ReadonlyVec4 } from "gl-matrix";
import { GlContext } from "./gl-context";
import { GlModel } from "./gl-model";
import { GlTexture } from "./gl-texture";
import { Vector3 } from "./types";

const WHITE = new Float32Array([1.0, 1.0, 1.0, 1.0]);

export class GlEntity {
  private model: GlModel | null;
  private name: string | null;
  private children: GlEntity[];
  private modelViewMatrix: mat4;
  private color?: ReadonlyVec4;

  private textureKey: string | null;

  constructor(model: GlModel | null, name?: string) {
    this.model = model;
    this.name = name ?? null;
    this.children = [];
    this.modelViewMatrix = mat4.create();
    this.textureKey = null;
  }

  addChild(child: GlEntity) {
    this.children.push(child);
  }

  render(ctx: GlContext) {
    this.renderChild(ctx, mat4.create(), this.color ?? WHITE);
  }

  private renderChild(ctx: GlContext, relativeModelViewMatrix: mat4, parentColor: ReadonlyVec4) {
    const localModelViewMatrix = mat4.create();
    mat4.mul(localModelViewMatrix, relativeModelViewMatrix, this.modelViewMatrix);

    const nextColor = this.color ?? parentColor; // use this entity's color or inherit from parent!

    if (this.model !== null) {
      ctx.setUniformFloat4('entityColor', nextColor);
      ctx.setUniformMatrix4('modelViewMatrix', localModelViewMatrix);

      if (this.model.usesNormals()) {
        const normalMatrix = mat4.create();
        mat4.invert(normalMatrix, localModelViewMatrix);
        mat4.transpose(normalMatrix, normalMatrix);
        ctx.setUniformMatrix4('normalMatrix', normalMatrix);
      }

      const textureOk = ctx.useTexture(this.textureKey);

      if (textureOk) {
        this.model.draw(ctx);
      }
    }

    for (const child of this.children) {
      child.renderChild(ctx, localModelViewMatrix, nextColor);
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

  setColor(color: ReadonlyVec4) {
    this.color = color;
  }

  /** Make this entity use its parent's color */
  removeColor() {
    this.color = undefined;
  }

  setTextureKey(textureKey: string) {
    this.textureKey = textureKey;
  }

  getTextureKey() {
    return this.textureKey;
  }

  removeTexture() {
    this.textureKey = null;
  }
}
