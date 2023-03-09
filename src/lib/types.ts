import { ReadonlyVec4 } from "gl-matrix";
import { TakLogoIndex } from "./logo-colors";

export type ViewMode = 'regular' | 'solid_color' | 'wireframe';
export type ViewColor = [number, number, number, number];

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

export const VIEW_MODES: ViewMode[] = ['regular', 'solid_color', 'wireframe'];

const DEFAULT_MODEL_CONTROLS: ModelControls = {
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

export function loadDefaultModelControls(userSettings?: UserSettings): ModelControls {
  if (userSettings === undefined) {
    return DEFAULT_MODEL_CONTROLS;
  }

  return {
    ...DEFAULT_MODEL_CONTROLS,
    textureFilterMin: userSettings.defaultTextureFilterMin,
    textureFilterMag: userSettings.defaultTextureFilterMag,
  };
}

export type UserSettings = {
  sidebarPosition: 'left' | 'right';
  sidebarWidth: number;
  defaultTextureFilterMin: 'linear' | 'nearest';
  defaultTextureFilterMag: 'linear' | 'nearest';
};

export const DEFAULT_USER_SETTINGS: UserSettings = {
  sidebarPosition: 'left',
  sidebarWidth: 300,
  defaultTextureFilterMin: 'nearest',
  defaultTextureFilterMag: 'nearest',
};
