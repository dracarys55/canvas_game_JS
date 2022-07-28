export default class Enemy {
  constructor(game) {
    this.game = game;
    this.x = this.game.width;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 37;
    this.speedX = Math.random() * -30 - 0.5;
    this.markedForDeletion = false;
  }
  update() {
    this.x += this.speedX;
    if (this.x + this.width < 0) this.markedForDeletion = true;

    //sprite animation
    if (this.frameX < this.maxFrame) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
  }
  draw(context) {
    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height);
      context.fillStyle = 'black';
      context.font = '20px Helvetica';
      context.fillText(this.lives, this.x, this.y);
    }
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
