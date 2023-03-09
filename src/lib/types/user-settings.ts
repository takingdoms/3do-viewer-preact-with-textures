export type UserSettings = {
  sidebarPosition: 'left' | 'right';
  sidebarWidth: number;
  defaultTextureFilterMin: 'linear' | 'nearest';
  defaultTextureFilterMag: 'linear' | 'nearest';
};

export const DEFAULT_USER_SETTINGS: UserSettings = {
  sidebarPosition: 'right',
  sidebarWidth: 300,
  defaultTextureFilterMin: 'nearest',
  defaultTextureFilterMag: 'nearest',
};
