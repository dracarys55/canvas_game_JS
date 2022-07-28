import Enemy from './Enemy.js';

export default class LuckyFish extends Enemy {
  constructor(game) {
    super(game); //make sure parent class excute constructor first, to get all properties
    this.width = 99;
    this.height = 95;
    this.y = Math.random() * (this.game.height * 0.95 - this.height); //need to test it
    this.image = document.getElementById('lucky');
    this.frameY = Math.floor(Math.random() * 2);
    this.lives = 3;
    this.score = 15;
    this.type = 'lucky';
  }
}
