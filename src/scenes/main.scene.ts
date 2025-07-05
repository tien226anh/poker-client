import Phaser from 'phaser';
import { CardRank, CardSuit } from '../utils/enums';
// import { Player } from '../objects/Player';

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    // Assets are loaded in PreloadScene, so this can be empty or used for scene-specific assets
  }

  create() {
    this.add.sprite(400, 300, 'cards', `${CardRank.ACE}${CardSuit.CLUBS}`); // Example of adding a card sprite

    this.add
      .text(400, 50, 'Welcome to Phaser 3 with Vite & TS!', {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center',
      })
      .setOrigin(0.5);
  }

  update() {
    // Update game logic here
  }
}
