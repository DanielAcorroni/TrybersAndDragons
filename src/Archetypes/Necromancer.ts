import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static instantiatedNecromancers = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instantiatedNecromancers += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instantiatedNecromancers;
  }

  get energyType():EnergyType {
    return this._energyType;
  }
}

export default Necromancer;