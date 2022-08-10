import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static instantiatedElfs = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instantiatedElfs += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instantiatedElfs;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;