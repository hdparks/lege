import { Equipment } from "./Equipment";

export type StatBlock = {
  name: string;
  str: number;
  dex: number;
  con: number;
  wis: number;
  int: number;
  cha: number;
  lvl: number;
  maxHitPoints: number;
  speed: number; // in feet, by default
  proficientSkills: string[];
  equipment: Equipment[];
  equippedArmor?: string;
};
