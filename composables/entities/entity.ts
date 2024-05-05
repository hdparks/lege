import { Position } from "../components/position";
import { Classes } from "../components/classes";
import { SecondaryRange } from "../components/range";
import { ToHitBonus } from "../components/toHitBonus";
import { WeaponProficiencies } from "../components/weaponProficiencies";
import { WeaponType } from "../components/weaponType";
import { Range} from "../components/range";
import { Dex } from "../components/dex";
import { Equipped } from "../components/equipped";
import { Equipper } from "../components/eqipper";
import { ArmorClassModifier } from "../components/armorClassModifier";
import { HitPoints } from "../components/hitPoints";
import { WeaponBaseDamageRoll } from "../components/weaponBaseDamageRoll";
import { CanRollDeathSavingThrows, DeathSavingThrows } from "../components/deathSavingThrows";
import { Unconscious } from "../components/unconscious";
import { Dead } from "../components/dead";

export type Entity = {
  id: string; 
  weaponProficiencies?:WeaponProficiencies;
  weaponType?:WeaponType;
  toHitBonus?:ToHitBonus;
  classes?:Classes;
  range?:Range;
  secondaryRange?:SecondaryRange;
  position?:Position;
  dex?:Dex;
  equipper?:Equipper;
  equipped?:Equipped;
  armorClassModifier?:ArmorClassModifier;
  hitPoints?:HitPoints;
  weaponBaseDamageRoll?:WeaponBaseDamageRoll;  
  canRollDeathSavingThrows?:CanRollDeathSavingThrows;
  deathSavingThrows?:DeathSavingThrows
  unconscious?:Unconscious;
  dead?:Dead;
}
