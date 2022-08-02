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
        const backGroundMusic = document.getElementById('cyber_race');
        backGroundMusic.volume = 0.2;
        backGroundMusic.play();
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
    document.body.ontouchmove = function (e) {
      let newTouchPos = e.changedTouches[0].clientY;
      if (newTouchPos > touchPos) {
        console.log('finger moving down');
      }
      if (newTouchPos < touchPos) {
        console.log('finger moving up');
      }
    };
  }
}
