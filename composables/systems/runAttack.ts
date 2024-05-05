import { Entity } from "../entities/entity";
import getCanAttack from "./getCanAttack";
import getEffectiveArmorClass from "./getEffectiveArmorClass";
import getRandn from "./getRandn";
import getToHitModifier from "./getToHitModifier";
import runDamage from "./runDamage";
import runWeaponDamageRoll from "./runWeaponDamageRoll";

export default function runAttack(attacker: Entity, weapon: Entity, target: Entity, entities:Entity[]): void { 
  if (!getCanAttack(attacker, weapon, target, entities)) {
    console.error(`${attacker.id} unable to attack ${target.id} with ${weapon.id}`)
    return;
  }

  const roll = getRandn(20)
  const toHitMod = getToHitModifier(attacker, weapon, target)
  console.log(`${attacker.id} rolled ${roll} + ${toHitMod} (${roll + toHitMod}) to hit ${target.id}`)

  const attackRollTotal = roll + toHitMod;
  if (attackRollTotal > getEffectiveArmorClass(attacker, weapon, target, entities)) {
    console.log("hit!")
    const attackDamage = runWeaponDamageRoll(attacker, weapon)
    attackDamage.forEach(dmg => {
      runDamage(target, dmg)
    })
  } else {
    console.log("missed!")
  }
}
