export default class InputHandler {
  constructor(game) {
    this.game = game;
    // function 與 arrow function 的差別 this ?
    window.addEventListener('keydown', (e) => {
      if (
        (e.key === 'ArrowUp' || e.key === 'ArrowDown') &&
        this.game.keys.indexOf(e.key) === -1
      ) {
        this.game.keys.push(e.key);
        document.getElementById('cyber_race').play();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        this.game.player.shootTop();
      } else if (e.key === 'd') {
        this.game.debug = !this.game.debug;
      }
    });
    window.addEventListener('keyup', (e) => {
      if (this.game.keys.indexOf(e.key) != -1) {
        this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
      }
    });
  }
}
