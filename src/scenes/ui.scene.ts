// src/scenes/UIScene.ts
import Phaser from 'phaser';

export class UIScene extends Phaser.Scene {
  private scoreText!: Phaser.GameObjects.Text;
  private currentScore: number = 0;

  constructor() {
    super({ key: 'UIScene' });
  }

  create() {
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      fontSize: '32px',
      color: '#FFF',
    });

    // Listen for custom events from other scenes to update UI
    this.game.events.on('addScore', this.addScore, this);
  }

  private addScore(points: number) {
    this.currentScore += points;
    this.scoreText.setText(`Score: ${this.currentScore}`);
  }

  // Example of how MainScene could trigger an update in UIScene:
  // In MainScene:
  // this.game.events.emit('addScore', 100);
}
