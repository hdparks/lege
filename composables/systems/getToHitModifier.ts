import { Entity } from "../entities/entity";
import getIsProficient from "./getIsProficient";
import getProficiencyModifier from "./getProficiencyModifier";

export default function getToHitModifier(attacker:Entity, weapon:Entity, target:Entity) {
  let toHitModifier = 0;
  toHitModifier += weapon.toHitBonus ?? 0 

  if (getIsProficient(attacker, weapon)){
    toHitModifier += getProficiencyModifier(attacker)
  }

  return toHitModifier;
}

