export type ViewMode = 'normal' | 'solid_color' | 'wireframe';
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
};

export const VIEW_MODES: ViewMode[] = ['normal', 'solid_color', 'wireframe'];

export const DEFAULT_MODEL_CONTROLS: ModelControls = {
  rotationX: 70,
  rotationY: -45,
  rotationZ: 0,
  translationX: 0,
  translationY: 0,
  zoom: 510,
  viewMode: 'wireframe',
  viewColor: [0.0, 1.0, 0.0, 1.0],
};
