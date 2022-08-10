import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static instantiatedMages = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.instantiatedMages += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instantiatedMages;
  }

  get energyType():EnergyType {
    return this._energyType;
  }
}

export default Mage;