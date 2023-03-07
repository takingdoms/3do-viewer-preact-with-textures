export interface LogoColorsDefinitions<TNumber extends number = number> {
  idxList: TNumber[];
  idxCount: number;
  idxToName: (idx: TNumber) => string;
  idxToHtmlColor: (idx: TNumber) => string;
  idxToTextureFilename: (idx: TNumber, fileName: string, fileExtension: string) => string;
}

// TAK ---------------------------------------------------------------------------------------------

type TakLogoIndices = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type TakLogoColorsDefinitions = LogoColorsDefinitions<TakLogoIndices>;

export const defaultLogoColorsDefinitions: Readonly<TakLogoColorsDefinitions> = {
  idxList: Array.from({ length: 10 }).map((_, idx) => idx) as TakLogoIndices[],
  idxCount: 10,
  idxToName: (idx) => idx.toString(),
  idxToHtmlColor: (idx) => htmlColors[idx],
  idxToTextureFilename: (idx, fileName, fileExtension) => {
    if (idx === 0) {
      return `${fileName}.${fileExtension}`;
    }

    return `${fileName}.${idx}.${fileExtension}`;
  },
};

const htmlColors: Record<TakLogoIndices, string> = {
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
