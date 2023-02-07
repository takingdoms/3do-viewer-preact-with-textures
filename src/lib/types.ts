export type ViewMode = 'normal' | 'solid_color' | 'wireframe';
export type ViewColor = string | [number, number, number];

export type ModelControls = {
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  translationX: number;
  translationY: number;
  zoom: number;
  viewMode: ViewMode;
  viewColor?: ViewColor;
};

export const VIEW_MODES: ViewMode[] = ['normal', 'solid_color', 'wireframe'];

export const DEFAULT_MODEL_CONTROLS: ModelControls = {
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
  translationX: 0,
  translationY: 0,
  viewMode: 'normal',
  zoom: 0,
};
