import { mat4 } from "gl-matrix";
import { GlContext } from "./gl-context";
import { GlEntity } from "./gl-entity";

export class GlEntityRoot extends GlEntity {
  private readonly enableDepthSorting: boolean;

  constructor(enableDepthSorting: boolean) {
    super(null);
    this.enableDepthSorting = enableDepthSorting;
  }

  render(ctx: GlContext) {
    this.recalculateMatrices(mat4.create());

    if (!this.enableDepthSorting) {
      this.renderChild(ctx);
      return;
    }

    // TODO perform z-sorting AFTER recalcualting the matrices but BEFORE rendering the tree
    this.renderChild(ctx);
  }
}
