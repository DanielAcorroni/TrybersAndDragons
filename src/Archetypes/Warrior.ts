import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static instantiatedWarriors = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instantiatedWarriors += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instantiatedWarriors;
  }

  get energyType():EnergyType {
    return this._energyType;
  }
}

export default Warrior;