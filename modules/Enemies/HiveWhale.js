import Enemy from './Enemy.js';

export default class HiveWhale extends Enemy {
  constructor(game) {
    super(game); //make sure parent class excute constructor first, to get all properties
    this.width = 400;
    this.height = 227;
    this.y = Math.random() * (this.game.height * 0.9 - this.height); //need to test it
    this.image = document.getElementById('hiveWhale');
    this.frameY = 0;
    this.lives = 15;
    this.score = this.lives;
    this.type = 'hive';
    this.speedX = Math.random() * -3 - 0.2;
  }
}
