import SoundControler from './SoundControler.js';
export default class InputHandler {
  constructor(game) {
    this.game = game;
    // function 與 arrow function 的差別 this ?
    window.addEventListener('keydown', (e) => {
      new SoundControler().enterBackGroundMusic();
      if (
        (e.key === 'ArrowUp' || e.key === 'ArrowDown') &&
        this.game.keys.indexOf(e.key) === -1
      ) {
        this.game.keys.push(e.key);
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
    var touchPos;

    // store the touching position at the start of each touch
    document.body.ontouchstart = function (e) {
      touchPos = e.changedTouches[0].clientY;
    };

    // detect wether the "old" touchPos is
    // greater or smaller than the newTouchPos
    document.body.ontouchmove = (e) => {
      let newTouchPos = e.changedTouches[0].clientY;
      if (
        newTouchPos > touchPos &&
        this.game.keys.indexOf('ArrowDown') === -1
      ) {
        console.log('ArrowDown');
        this.game.keys.push('ArrowDown');
      }
      if (newTouchPos < touchPos && this.game.keys.indexOf('ArrowUp') === -1) {
        console.log('ArrowUp');
        this.game.keys.push('ArrowUp');
      }
    };
    document.body.ontouchend = (e) => {
      let arrowUp = 'ArrowUp';
      let arrowDown = 'ArrowDown';
      if (this.game.keys.indexOf(arrowUp) != -1) {
        this.game.keys.splice(this.game.keys.indexOf(arrowUp), 1);
        console.log(this.game.keys);
      }
      if (this.game.keys.indexOf(arrowDown) != -1) {
        this.game.keys.splice(this.game.keys.indexOf(arrowDown), 1);
        console.log(this.game.keys);
      }
    };
  }
}
