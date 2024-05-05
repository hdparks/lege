import { StatBlock } from "~/composables/StatBlock";

export const imperialTortureDroid_PhaseI: StatBlock = {
  name: "Imperial Torture Droid: Phase I",
  str: 10,
  dex: 10,
  con: 18,
  wis: 10,
  cha: 10,
  int: 14,
  lvl: 8,
  speed: 0,
  maxHitPoints: 30 * 3,
  proficientSkills: ["Deception", "Investigation", "Perception"],
  equipment: [
    {
      name: "Mandible",
      description: "Massive claw",
      actions: [
        {
          name: "Grab",
          description:
            "The mandible lunges forward, grappling a target on a failed save",
          type: "savingThrow",
          damageType: "physical",
          saveDC: 15,
          saveDCAbilityModName: "dex",
          savingAbilityModName: "dex",
          damageMod: 1,
          damageRoll: "1d4",
        },
      ],
      bonusActions: [
        {
          name: "Apply Neurotoxin",
          description:
            "If a target is caught in the Mandible, the droid can use a Bonus Action to apply a cloud of neurotoxin to the target. They must beat a DC 15 WIS save or suffer horrible hallucinations.",
          type: "savingThrow",
          saveDC: 15,
          savingAbilityModName: "wis",
          saveDCAbilityModName: "int",
          damageMod: 0,
          damageRoll: "0d4",
          damageType: "wisdom",
        },
      ],
    },
    {
      name: "Sonic Lure",
      description: '"Get over here!"',
      bonusActions: [
        {
          name: "Siren's Song",
          description:
            "Plays a frequency that causes a target to move towards it on a failed WIS save",
          type: "savingThrow",
          damageRoll: "1d4",
          savingAbilityModName: "wis",
          saveDC: 12,
          saveDCAbilityModName: "wis",
          damageMod: 1,
          damageType: "sonic",
          range: "120ft.",
          radius: "30ft.",
        },
      ],
    },
  ],
};
