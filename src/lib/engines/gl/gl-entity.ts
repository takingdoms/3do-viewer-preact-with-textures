import { mat4 } from "gl-matrix";
import { GlContext } from "./gl-context";
import { GlModel } from "./gl-model";
import { Vector3 } from "./types";

export class GlEntity {
  private model: GlModel | null;
  private modelViewMatrix: mat4;
  private children: GlEntity[];

  constructor(model: GlModel | null) {
    this.model = model;
    this.modelViewMatrix = mat4.create();
    this.children = [];
  }

  addChild(child: GlEntity) {
    this.children.push(child);
  }

  render(ctx: GlContext) {
    this.renderChild(ctx, mat4.create());
  }

  private renderChild(ctx: GlContext, relativeModelViewMatrix: mat4) {
    mat4.mul(relativeModelViewMatrix, relativeModelViewMatrix, this.modelViewMatrix);

    if (this.model !== null) {
      ctx.setUniform('model', relativeModelViewMatrix);
      this.model.draw(ctx);
    }

    for (const child of this.children) {
      child.renderChild(ctx, relativeModelViewMatrix);
    }
  }

  translate(x: number, y: number, z: number) {
    mat4.translate(this.modelViewMatrix, this.modelViewMatrix, [x, y, z]);
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
