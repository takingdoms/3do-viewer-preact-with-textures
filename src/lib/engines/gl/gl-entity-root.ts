import { mat4, vec3 } from "gl-matrix";
import { GlContext } from "./gl-context";
import { GlEntity } from "./gl-entity";
import { GlModel } from "./gl-model";

const WHITE = new Float32Array([1.0, 1.0, 1.0, 1.0]);

type RenderTarget = {
  target: GlModel; // used to render
  info: GlEntity; // used to get the transformation matrix
};

type Camera = {
  position: vec3;
  projectionMatrix: mat4;
}

export class GlEntityRoot extends GlEntity {
  private readonly enableDepthSorting: boolean;

  private opaqueTargets: RenderTarget[] = [];
  private translucentTargets: RenderTarget[] = [];
  private needsToUpdateTargets = true;
  private needsToSortTranslucents = true;

  constructor(enableDepthSorting: boolean) {
    super(null);
    this.enableDepthSorting = enableDepthSorting;
  }

  render(ctx: GlContext, camera: Camera) {
    this.recalculateMatrices(mat4.create());

    if (!this.enableDepthSorting) {
      this.renderChild(ctx);
      return;
    }

    //:: All the code bellow is EXCLUSIVE to the 'regular' view mode

    this.updateRenderLists(); // updates this.opaqueTargets and this.translucentTargets
    this.sortTranslucentList(camera); // sorts this.translucentTargets (based on the camera)

    // render the opaque targets first
    for (const nextTarget of this.opaqueTargets) {
      this.renderNextTarget(ctx, nextTarget);
    }

    // then render the translucent targets
    for (const nextTarget of this.translucentTargets) {
      this.renderNextTarget(ctx, nextTarget);
    }
  }

  private updateRenderLists(): void {
    if (!this.needsToUpdateTargets) {
      return;
    }

    const opaqueList: RenderTarget[] = [];
    const translucentList: RenderTarget[] = [];

    const next = (nextChild: GlEntity) => {
      const model = nextChild.getModel();

      if (Array.isArray(model)) {
        for (const subModel of model) {
          if (subModel.getTextureKey() !== null) {
            const list = subModel.isOpaque() ? opaqueList : translucentList;
            list.push({
              target: subModel,
              info: nextChild,
            });
          }
        }
      }
      else if (model !== null && model.getTextureKey() !== null) {
        const list = model.isOpaque() ? opaqueList : translucentList;
        list.push({
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

    this.needsToUpdateTargets = false;
    this.opaqueTargets = opaqueList;
    this.translucentTargets = translucentList;
  }

  private sortTranslucentList(camera: Camera): void {
    if (!this.needsToSortTranslucents) {
      return;
    }

    const viewMatrix = mat4.create(); // TODO@1 remove?

    this.translucentTargets.sort(function(a, b) {
      const centerA = vec3.create();
      vec3.add(centerA, a.target.getMin(), a.target.getMax());
      vec3.scale(centerA, centerA, 0.5);

      const centerB = vec3.create();
      vec3.add(centerB, b.target.getMin(), b.target.getMax());
      vec3.scale(centerB, centerB, 0.5);

      const modelMatrixA = a.info.getRelativeModelViewMatrix();
      const modelMatrixB = b.info.getRelativeModelViewMatrix();
      vec3.transformMat4(centerA, centerA, modelMatrixA);
      vec3.transformMat4(centerB, centerB, modelMatrixB);

      const viewProjectionMatrix = mat4.create(); // TODO@1 remove?
      mat4.multiply(viewProjectionMatrix, viewMatrix, camera.projectionMatrix); //TODO@1 remove?

      const distanceA = vec3.distance(vec3.transformMat4(vec3.create(), centerA, viewProjectionMatrix), camera.position);
      const distanceB = vec3.distance(vec3.transformMat4(vec3.create(), centerB, viewProjectionMatrix), camera.position);

      return distanceB - distanceA;
    });

    this.needsToSortTranslucents = false;
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
