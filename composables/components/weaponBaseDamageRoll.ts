import { Entity } from "../entities/entity";
import { Damage } from "./damage";

export type WeaponBaseDamageRoll = (wielder:Entity) => Damage[];
