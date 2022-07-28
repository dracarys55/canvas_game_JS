import Enemy from './Enemy.js';

export default class Angler2 extends Enemy {
  constructor(game) {
    super(game); //make sure parent class excute constructor first, to get all properties
    this.width = 213;
    this.height = 165;
    this.y = Math.random() * (this.game.height * 0.95 - this.height); //need to test it
    this.image = document.getElementById('angler2');
    this.frameY = Math.floor(Math.random() * 2);
    this.lives = 3;
    this.score = this.lives;
  }
}
