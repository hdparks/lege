import { StatBlock } from "~/composables/StatBlock";

export const seventhSister: StatBlock = {
  name: "Seventh Sister",
  str: 14,
  dex: 14,
  con: 12,
  cha: 14,
  wis: 10,
  int: 7,
  lvl: 5,
  maxHitPoints: 60,
  speed: 40,
  proficientSkills: ["Persuasion", "Acrobatics"],
  equipment: [
    {
      name: "Inquisitor's Blade",
      description:
        "A double-bladed spinning saber, wielded by Jedi-hunting Inquisitors",
      actions: [
        {
          name: "Saber Dash",
          description:
            "Seventh Sister dashes forward in a straight line 30 ft. All those in her path must make a DC 15 DEX save or take 2d6+6 energy damage. Can perform this action twice per short rest.",
          type: "savingThrow",
          damageMod: 6,
          damageRoll: "2d6",
          damageType: "energy",
          saveDC: 15,
          saveDCAbilityModName: "dex",
          savingAbilityModName: "dex",
          range: "30 ft.",
        },
        {
          name: "Helicopter, Helicopter",
          description:
            "Helicopter, Helicopter. Fly up to 60 ft. Deal 1d10+4 energy damage to anyone within melee range at any point during the flight.",
          type: "damage",
          damageRoll: "1d10",
          damageMod: 4,
          damageType: "energy",
        },
      ],
      bonusActions: [
        {
          name: "Force Dash",
          description:
            "As a bonus action, Seventh Sister uses the Force to dash an additional 40 ft. in any direction (including up)",
          type: "utility",
        },
      ],
      reactions: [
        {
          name: "Like a Shadow",
          description:
            "If an attack misses, Seventh Sister can make a flying leap towards cover within 30 ft. On a DC 14 Acrobatics check, she is Hidden.",
          type: "utility",
        },
      ],
    },
  ],
};
