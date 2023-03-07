export type LoadableTexture = {
  type: 'html';
  image: HTMLImageElement;
} | {
  type: 'raw';
  width: number;
  height: number;
  data: Uint8Array;
};

export type TextureMapping = Record<string, LoadableTexture | null>;
