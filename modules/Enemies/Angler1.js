import Enemy from './Enemy.js';

export default class Angler1 extends Enemy {
  constructor(game) {
    super(game); //make sure parent class excute constructor first, to get all properties
    this.width = 228;
    this.height = 169;
    this.y = Math.random() * (this.game.height * 0.9 - this.height); //need to test it
    this.image = document.getElementById('angler1');
    this.frameY = Math.floor(Math.random() * 3);
    this.lives = 2;
    this.score = this.lives;
  }
}
