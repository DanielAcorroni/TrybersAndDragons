import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static instantiatedOrcs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instantiatedOrcs += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instantiatedOrcs;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;