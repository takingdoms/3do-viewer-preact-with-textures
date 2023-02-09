import { mat4, ReadonlyVec4 } from "gl-matrix";
import { GlContext } from "./gl-context";
import { GlModel } from "./gl-model";
import { Vector3 } from "./types";

const WHITE = new Float32Array([1.0, 1.0, 1.0, 1.0]);

export class GlEntity {
  private model: GlModel | null;
  private name: string | null;
  private children: GlEntity[];
  private modelViewMatrix: mat4;
  private color?: ReadonlyVec4;

  constructor(model: GlModel | null, name?: string) {
    this.model = model;
    this.name = name ?? null;
    this.children = [];
    this.modelViewMatrix = mat4.create();
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
      ctx.setUniformFloat4('baseColor', nextColor);
      ctx.setUniformMatrix4('model', localModelViewMatrix);

      this.model.draw(ctx);
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
}

/*translate(x: number, y: number, z: number) {
  this.translation = [
    this.translation[0] + x,
    this.translation[1] + y,
    this.translation[2] + z,
  ];

  this.updateTransformations();
}

rotate(rad: number, rotateX: boolean, rotateY: boolean, rotateZ: boolean) {
  this.rotation = [
    rotateX ? (this.rotation[0] + rad) : this.rotation[0],
    rotateY ? (this.rotation[1] + rad) : this.rotation[1],
    rotateZ ? (this.rotation[2] + rad) : this.rotation[2],
  ];

  this.updateTransformations();
}

private updateTransformations() {
  const modelViewMatrix = mat4.create();

  const [translationX, translationY, translationZ] = this.translation;
  const [rotationX, rotationY, rotationZ] = this.rotation;

  mat4.translate(modelViewMatrix, modelViewMatrix, [
    translationX,
    translationY,
    translationZ,
  ]);

  mat4.rotate(modelViewMatrix, modelViewMatrix, rotationX, [1, 0, 0]);
  mat4.rotate(modelViewMatrix, modelViewMatrix, rotationY, [0, 1, 0]);
  mat4.rotate(modelViewMatrix, modelViewMatrix, rotationZ, [0, 0, 1]);

  this.modelViewMatrix = modelViewMatrix;
}*/
