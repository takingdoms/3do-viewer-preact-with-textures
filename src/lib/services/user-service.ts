import { UserSettings } from "../types";

export type UserService = {
  save: (userSettings: UserSettings) => void;
  load: () => UserSettings | undefined;
};

export const localStorageUserService: UserService = {
  save: (userSettings: UserSettings) => {
    const str = JSON.stringify(userSettings);
    localStorage.setItem('user', str);
  },
  load: (): UserSettings | undefined => {
    const str = localStorage.getItem('user');

    if (str === null) {
      return undefined;
    }

    const obj = JSON.parse(str);

    if (typeof obj !== 'object') {
      throw new Error(`User settings is not an object`);
    }

    const sidebarPosition = obj['sidebarPosition'];

    if (sidebarPosition !== 'left' && sidebarPosition !== 'right') {
      throw new Error(`Invalid sidebarPosition`);
    }

    const sidebarWidth = obj['sidebarWidth'];

    if (typeof sidebarWidth !== 'number') {
      throw new Error(`Invalid sidebarWidth`);
    }

    const defaultTextureFilterMin = obj['defaultTextureFilterMin'];

    if (defaultTextureFilterMin !== 'nearest' && defaultTextureFilterMin !== 'linear') {
      throw new Error(`Invalid defaultTextureFilterMin`);
    }

    const defaultTextureFilterMag = obj['defaultTextureFilterMag'];

    if (defaultTextureFilterMag !== 'nearest' && defaultTextureFilterMag !== 'linear') {
      throw new Error(`Invalid defaultTextureFilterMag`);
    }

    return {
      sidebarPosition,
      sidebarWidth,
      defaultTextureFilterMin,
      defaultTextureFilterMag,
    };
  },
};
