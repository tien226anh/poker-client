import Phaser from 'phaser';
import { MainScene } from './scenes/main.scene';
import { UIScene } from './scenes/ui.scene';
import { PreloadScene } from './scenes/preload.scene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  transparent: true,
  parent: 'game-container',
  scene: [PreloadScene, MainScene, UIScene],
};

export const game = new Phaser.Game(config);
