import Explosion from './Explosion.js';

export default class SmokeExpolosion extends Explosion {
  constructor(game, x, y) {
    //dig into super
    super(game, x, y);
    this.image = document.getElementById('smokeExplosion');
  }
}
