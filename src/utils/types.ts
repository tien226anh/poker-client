export interface ImageAsset {
  key: string;
  path: string;
}

export interface SpriteSheetAsset {
  key: string;
  path?: string;
  frameConfig: Phaser.Types.Loader.FileTypes.ImageFrameConfig;
}

export interface AudioAsset {
  key: string;
  paths: string[];
}
