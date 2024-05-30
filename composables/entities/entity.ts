import { ArmorClass } from "../rules/ArmorClass";
import { DexMod } from "../rules/DexMod";
import { DexScore } from "../rules/DexScore";
import { Equipped } from "../rules/Equipped";
import { Equipper } from "../rules/Equipper";
import { HitPointMax } from "../rules/HitPointMax";
import { HitPoints } from "../rules/HitPoints";
import { LightArmorProficiency } from "../rules/LightArmorProficiency";
import { OperatorClass } from "../rules/OperatorClass";
import { Shield } from "../rules/Shield";
import { TempHitPoints } from "../rules/TempHitPoints";

export type Entity = {
  id?: EntityId;
  ArmorClass?:ArmorClass;
  DexScore?:DexScore;
  DexMod?:DexMod;
  Equipped?:Equipped;
  Equipper?:Equipper;
  HitPointMax?: HitPointMax;
  HitPoints?: HitPoints;
  LightArmorProficiency?: LightArmorProficiency;
  OperatorClass?:OperatorClass;
  Sheild?:Shield;
  TempHitPoints?: TempHitPoints;  
}

export type EntityId = string
