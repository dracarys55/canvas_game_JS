export default class SoundControler {
  constructor() {
    this.backGroundMusic = document.getElementById('cyber_race');
    this.explosion = document.getElementById('explosion');
    this.hit = document.getElementById('hit');
    this.shot = document.getElementById('shot');
  }
  enterBackGroundMusic() {
    this.backGroundMusic.volume = 0.2;
    this.backGroundMusic.play();
  }
  enterExplosion() {
    this.explosion.currentTime = 0;
    this.explosion.play();
  }
  enterHit() {
    this.hit.currentTime = 0;
    this.hit.play();
  }
  entershot() {
    this.shot.currentTime = 0;
    this.shot.play();
  }
}
