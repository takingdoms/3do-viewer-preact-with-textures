import { mat4 } from "gl-matrix";
import { GlContext } from "./gl-context";
import { GlEntity } from "./gl-entity";

export class GlEntityRoot extends GlEntity {
  render(ctx: GlContext) {
    this.recalculateMatrices(mat4.create());
    // TODO perform z-sorting AFTER recalcualting the matrices but BEFORE rendering the tree
    this.renderChild(ctx);
  }
}
