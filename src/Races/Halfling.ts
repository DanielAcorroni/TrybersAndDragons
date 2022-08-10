import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static instantiatedHalflings = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instantiatedHalflings += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instantiatedHalflings;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;