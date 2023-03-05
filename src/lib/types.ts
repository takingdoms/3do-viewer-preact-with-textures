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
};

export const VIEW_MODES: ViewMode[] = ['regular', 'solid_color', 'wireframe'];

export const DEFAULT_MODEL_CONTROLS: ModelControls = {
  rotationX: 100,
  rotationY: 0,
  rotationZ: 0,
  translationX: 0,
  translationY: 0,
  zoom: 900,
  viewMode: 'regular',
  viewColor: [1.0, 1.0, 1.0, 1.0], // mixes multiplicatively
};

export type UserSettings = {
  sidebarPosition: 'left' | 'right';
  sidebarWidth: number;
};

export const DEFAULT_USER_SETTINGS: UserSettings = {
  sidebarPosition: 'left',
  sidebarWidth: 300,
};
