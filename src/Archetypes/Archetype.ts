import { EnergyType } from '../Energy';

abstract class Archetype {
  readonly name: string;
  special: number;
  cost: number;

  constructor(name: string) {
    this.name = name;
    this.cost = 0;
    this.special = 0;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;