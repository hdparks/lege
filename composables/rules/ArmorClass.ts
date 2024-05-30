import { Entity } from "../entities/entity";
import { getEquipped } from "../utils/getEquippped";
export type ArmorClass = number;

export function GetArmorClass(e:Entity, world:Entity[]): ArmorClass|undefined {
  if (e.DexMod == undefined) {return undefined}
  // Apply the largest shield bonus
  const shieldBonus = getEquipped(e, world).map(e => e.Sheild?.acBonus ?? 0).reduce((max, bonus) => Math.max(max, bonus), 0)
  return 8 + e.DexMod + shieldBonus
}

export function ApplyArmorClass(world:Entity[]): void {
  world.forEach(entity => {
    entity.ArmorClass = GetArmorClass(entity, world)
  }) 
}
