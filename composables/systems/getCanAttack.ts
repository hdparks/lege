import { Entity } from "../entities/entity";
import getDistance from "./getDistance";
import getEquippedItems from "./getEquippedItems";
import getWeaponRange from "./getWeaponRange";

export default function getCanAttack(attacker:Entity, weapon:Entity, target:Entity, entities:Entity[]){
  const isDead = attacker.dead != null
  if (isDead) { console.log(`${attacker.id} can't come to the phone right now. Why? Oh. Cause she's dead.`)}
  const isUnconscious = attacker.unconscious != null
  if (isUnconscious) { console.log(`${attacker.id} is too busy sleeping it off`)}
  const isEquipped = getEquippedItems(attacker, entities).includes(weapon)
  if (!isEquipped) { console.log(`${attacker.id} doesn't have ${weapon.id} equippped`)}
  const distanceToTarget = getDistance(attacker, target)
  const inRange = distanceToTarget <= getWeaponRange(attacker, weapon)
  if (!inRange) { console.log(`${target.id} is too far away!!`)}
  return isEquipped && inRange && !isUnconscious && !isDead
}

