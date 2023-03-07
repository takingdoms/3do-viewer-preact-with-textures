export interface LogoColorsDefinitions<TNumber extends number = number> {
  defaultIdx: TNumber;
  idxList: TNumber[];
  idxCount: number;
  idxToName: (idx: TNumber) => string;
  idxToHtmlColor: (idx: TNumber) => string;
  textureKeyUsesLogo: (textureKey: string) => boolean;
  idxToTextureKey: (idx: TNumber, textureKey: string) => string;
  idxToTextureFilename: (idx: TNumber, fileName: string) => string;
}

// TAK ---------------------------------------------------------------------------------------------

export type TakLogoIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type TakLogoColorsDefinitions = LogoColorsDefinitions<TakLogoIndex>;

export const defaultLogoColorsDefinitions: Readonly<TakLogoColorsDefinitions> = {
  defaultIdx: 0,
  idxList: Array.from({ length: 10 }).map((_, idx) => idx) as TakLogoIndex[],
  idxCount: 10,
  idxToName: (idx) => idx.toString(),
  idxToHtmlColor: (idx) => htmlColors[idx],
  textureKeyUsesLogo: (textureKey) => textureKey.toLowerCase().includes('logo'),
  idxToTextureKey: (idx, textureKey) => {
    if (idx === 0)
      return textureKey;

    return `${textureKey}/color:${idx}`;
  },
  idxToTextureFilename: (idx, fileName) => {
    if (idx === 0) {
      return fileName;
    }

    return `${fileName}.${idx}`;
  },
};

const htmlColors: Record<TakLogoIndex, string> = {
  0: 'lightblue',
  1: 'red',
  2: 'white',
  3: 'green',
  4: 'darkblue',
  5: 'purple',
  6: 'yellow',
  7: 'black',
  8: 'orange',
  9: 'brown',
};
