export default class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 25;
    this.fontFamily = 'Bangers';
    this.color = 'white';
  }
  draw(context) {
    //save and restore need to be used together ,need to google more
    context.save();
    context.fillStyle = this.color;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = 'black';
    //px need a space, very hard to see from debug mode
    context.font = this.fontSize + 'px ' + this.fontFamily;
    //score
    context.fillText('Score : ' + this.game.score, 20, 40);
    //timer
    const formmatedTime = (this.game.gameTime * 0.001).toFixed(1);
    context.fillText('Timer : ' + formmatedTime, 20, 100);
    //game over messege
    if (this.game.gameOver) {
      context.textAlign = 'center';
      let message1;
      let message2;
      if (this.game.score > this.game.winningScore) {
        message1 = 'You win';
        message2 = 'well done!';
      } else {
        message1 = 'You lose';
        message2 = 'try again~';
      }
      context.font = '50px ' + this.fontFamily;
      context.fillText(
        message1,
        this.game.width * 0.5,
        this.game.height * 0.5 - 20
      );
      context.font = '25px ' + this.fontFamily;
      context.fillText(
        message2,
        this.game.width * 0.5,
        this.game.height * 0.5 + 20
      );
    }
    // ammo
    if (this.game.player.powerUp) {
      context.fillStyle = '#FF4D00';
      context.shadowOffsetX = 3;
      context.shadowOffsetY = 3;
    }
    for (let i = 0; i < this.game.ammo; i++) {
      context.fillRect(20 + 5 * i, 50, 3, 20);
    }
    context.restore();
  }
}
