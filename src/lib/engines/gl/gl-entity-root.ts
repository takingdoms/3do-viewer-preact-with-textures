import { mat4 } from "gl-matrix";
import { GlContext } from "./gl-context";
import { GlEntity } from "./gl-entity";
import { GlModel } from "./gl-model";

const WHITE = new Float32Array([1.0, 1.0, 1.0, 1.0]);

type RenderTarget = {
  target: GlModel; // used to render
  info: GlEntity; // used to get the transformation matrix
};

export class GlEntityRoot extends GlEntity {
  private readonly enableDepthSorting: boolean;

  private renderList: RenderTarget[] = [];
  private needsToRecreateRenderList = true;

  private sortedRenderList: RenderTarget[] = [];
  private needsToRecreateSortedRenderList = true;

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

    //:: All the code bellow is EXCLUSIVE to the 'regular' view mode

    this.updateRenderList();
    this.updateSortedRenderList();

    for (const nextTarget of this.sortedRenderList) {
      this.renderNextTarget(ctx, nextTarget);
    }
  }

  private updateRenderList(): void {
    if (!this.needsToRecreateRenderList) {
      return;
    }

    const result: RenderTarget[] = [];

    const next = (nextChild: GlEntity) => {
      const model = nextChild.getModel();

      if (Array.isArray(model)) {
        for (const subModel of model) {
          if (subModel.getTextureKey() !== null) {
            result.push({
              target: subModel,
              info: nextChild,
            });
          }
        }
      }
      else if (model !== null && model.getTextureKey() !== null) {
        result.push({
          target: model,
          info: nextChild,
        });
      }

      for (const subChild of nextChild.getChildren()) {
        next(subChild);
      }
    };

    for (const child of this.children) {
      next(child);
    }

    this.needsToRecreateRenderList = false;
    this.renderList = result;
  }

  private updateSortedRenderList(): void {
    if (!this.needsToRecreateSortedRenderList) {
      return;
    }

    const result: RenderTarget[] = this.renderList; // TODO

    this.needsToRecreateSortedRenderList = false;
    this.sortedRenderList = result;
  }

  private renderNextTarget(ctx: GlContext, renderTarget: RenderTarget): void {
    const { target, info } = renderTarget;
    const nextColor = info.getColor() ?? WHITE;

    if (info.getStateOptions().visibile) {
      ctx.setUniformFloat4('entityColor', nextColor);
      ctx.setUniformMatrix4('modelViewMatrix', info.getRelativeModelViewMatrix());

      if (Array.isArray(target)) {
        for (const subModel of target) {
          info.renderModel(ctx, subModel);
        }
      }
      else {
        info.renderModel(ctx, target);
      }
    }
  }
}
