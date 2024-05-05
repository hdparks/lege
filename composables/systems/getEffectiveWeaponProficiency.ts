import { Entity } from "../entities/entity";
import getIsProficient from "./getIsProficient";
import getProficiencyModifier from "./getProficiencyModifier";

export default function getEffectiveWeaponProficiency(attacker:Entity, weapon:Entity) {
  return getIsProficient(attacker, weapon) ? getProficiencyModifier(attacker) : 0
}
