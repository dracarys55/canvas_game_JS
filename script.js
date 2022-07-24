window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  console.log('running');
  canvas.width = 1400;
  canvas.height = 600;

  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      this.speedY = 0.2;
    }
    update() {
      this.y += this.speedY;
    }
    draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  class Enemy {}
  class Layer {}
  class Background {}
  class UI {}
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
    }
    update() {
      this.player.update();
    }
    draw(context) {
      this.player.draw(context);
    }
  }
  const game = new Game(canvas.width, canvas.height);
  // animation loop
  function animate() {
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
    console.log('running animate');
  }
  animate();
});
