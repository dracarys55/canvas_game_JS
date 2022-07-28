import Enemy from './Enemy.js';

export default class Drone extends Enemy {
  constructor(game, x, y) {
    super(game); //make sure parent class excute constructor first, to get all properties
    this.width = 115;
    this.height = 95;
    this.x = x;
    this.y = y; //need to test it
    this.image = document.getElementById('drone');
    this.frameY = Math.floor(Math.random() * 2);
    this.lives = 3;
    this.score = this.lives;
    this.type = 'drone';
    this.speedX = Math.random() * -6 - 0.5;
  }
}
