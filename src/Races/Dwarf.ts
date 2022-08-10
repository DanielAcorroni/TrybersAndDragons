import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static instantiatedDwarfs = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instantiatedDwarfs += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instantiatedDwarfs;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;