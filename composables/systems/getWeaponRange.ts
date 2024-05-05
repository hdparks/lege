import { Entity } from "../entities/entity";

export default function getWeaponRange(wielder:Entity, weapon:Entity) {
  // todo: react to certain upgrades, either on weapon or on wielder
  return weapon.range ?? 0
}
