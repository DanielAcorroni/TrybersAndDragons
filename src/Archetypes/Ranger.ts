import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static instantiatedRangers = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instantiatedRangers += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instantiatedRangers;
  }

  get energyType():EnergyType {
    return this._energyType;
  }
}

export default Ranger;