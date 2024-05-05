import { Entity } from "../entities/entity";
import getDexterityModifier from "./getDexterityModifier";
import getEquippedItems from "./getEquippedItems";

export default function getEffectiveArmorClass(attacker:Entity, weapon:Entity, target:Entity, entities:Entity[]) {
  // todo: lots of things affect this value
  // cover, haste, consumables, you name it
  const baseModifier = 10 + getDexterityModifier(target)
  
  // check equipped items for armorclassmodifier
  const equippedItems = getEquippedItems(target, entities)
  const acModFromEquippedItems = equippedItems.filter(item => item.armorClassModifier !== null).reduce((sum,item) => sum + (item.armorClassModifier?.modifier(target) ?? 0), 0)

  // todo: acModFromStatusEffects <-- fold paladin aura into here. Link chain like so: item -> paladin -> aoe effect -> status effect -> target. Target only checks status effect

  const totalAC = baseModifier + acModFromEquippedItems
  console.log(`${target.id} AC: ${totalAC} (${baseModifier} + ${acModFromEquippedItems})`)
  return totalAC
}


/*
*   Scratch pad

What happens when a shield is equipped?
Shield: 
  the EQUIPPER of this item gains +2 to ARMOR CLASS






* */
