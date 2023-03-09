import { ReadonlyVec4 } from "gl-matrix";
import { TakLogoIndex } from "../logo-colors";
import { UserSettings } from "./user-settings";
import { ViewMode, ViewColor } from "./view";

export type ModelControls = {
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  translationX: number;
  translationY: number;
  zoom: number;
  viewMode: ViewMode;
  viewColor?: ViewColor;

  //:: Regular mode options
  enableLightingRegular: boolean;
  logoColorIdx: TakLogoIndex;
  textureFilterMin: 'linear' | 'nearest';
  textureFilterMag: 'linear' | 'nearest';

  //:: Solid color mode options
  enableLightingSolidColor: boolean;
  solidColor: ReadonlyVec4;

  //:: Wireframe mode options
  wireframeColor: ReadonlyVec4;
};

export const DEFAULT_MODEL_CONTROLS: ModelControls = {
  rotationX: 100,
  rotationY: 0,
  rotationZ: 0,
  translationX: 0,
  translationY: 0,
  zoom: 900,
  viewMode: 'regular',
  viewColor: [1.0, 1.0, 1.0, 1.0], // mixes multiplicatively

  enableLightingRegular: false,
  logoColorIdx: 0,
  textureFilterMin: 'nearest',
  textureFilterMag: 'nearest',

  enableLightingSolidColor: true,
  solidColor: [1.0, 1.0, 1.0, 1.0],

  wireframeColor: [1.0, 1.0, 1.0, 1.0],
};
