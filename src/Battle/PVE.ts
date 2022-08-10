import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _enemy: [SimpleFighter | Fighter];
  constructor(player: Fighter, enemy: [SimpleFighter | Fighter]) {
    super(player);
    this.player = player;
    this._enemy = enemy;
  }

  fight(): number {
    this._enemy.forEach((enemy) => {
      if (this.player.lifePoints > 0) {
        while (this.player.lifePoints > 0 && enemy.lifePoints > 0) {
          this.player.attack(enemy);
          enemy.attack(this.player);
        }
      }
    });

    return super.fight();
  }
}

export default PVE;