export type UserSettings = {
  sidebarPosition: 'left' | 'right';
  sidebarWidth: number;
  defaultTextureFilterMin: 'linear' | 'nearest';
  defaultTextureFilterMag: 'linear' | 'nearest';
  preserveDrawingBuffer: boolean;
};

export const DEFAULT_USER_SETTINGS: UserSettings = {
  sidebarPosition: 'right',
  sidebarWidth: 300,
  defaultTextureFilterMin: 'nearest',
  defaultTextureFilterMag: 'nearest',
  preserveDrawingBuffer: true,
};
