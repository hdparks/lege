import { Damage } from "../components/damage";
import { Entity } from "../entities/entity";

export default function runWeaponDamageRoll(attacker:Entity, weapon:Entity): Damage[] {
  return weapon.weaponBaseDamageRoll?.(attacker) ?? [{dmg: 0, type: "true"}]
}
