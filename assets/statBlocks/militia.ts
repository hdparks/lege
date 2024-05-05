import { StatBlock } from "~/composables/StatBlock";

export const militia: StatBlock = {
  name: "Militia",
  str: 12,
  dex: 14,
  con: 12,
  wis: 12,
  int: 12,
  cha: 14,
  lvl: 3,
  maxHitPoints: 20,
  speed: 30,
  proficientSkills: ["Athletics", "Perception"],
  equipment: [
    {
      name: "Blaster Pistol",
      description: "Reach for the skies.",
      actions: [
        {
          name: "Blaster Pistol",
          type: "attack",
          range: "30 ft./60 ft.",
          toHitMod: 0,
          abilityModName: "dex",
          damageType: "energy",
          damageRoll: "2d4",
          damageMod: 0,
        },
      ],
    },
  ],
};
