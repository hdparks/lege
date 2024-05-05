import type {Entity} from "../entities/entity";

export default function (attacker:Entity, weapon: Entity) {
  return weapon.weaponType != null && (attacker.weaponProficiencies?.includes(weapon.weaponType) ?? false)
}
