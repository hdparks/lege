import { StatBlock } from "~/composables/StatBlock";

export const stormtrooper: StatBlock = {
  name: "Stormtrooper",
  str: 14,
  dex: 12,
  con: 12,
  wis: 7,
  int: 10,
  cha: 8,
  lvl: 5,
  maxHitPoints: 35,
  speed: 30,
  proficientSkills: ["Athletics", "Insight"],
  equippedArmor: "Plasteel Armor",
  equipment: [
    {
      name: "Personal Shield",
      actions: [],
      reactions: [],
      bonusActions: [],
      description:
        "Expend one charge to gain +5 AC until the start of your next turn", // Hey, this could get cool as soon as we integrate turns n' stuff!
    },
    {
      name: "Concussion Grenade",
      description: "Enough to get them thinking...",
      bonusActions: [
        {
          name: "Concussion Grenade",
          type: "savingThrow",
          damageRoll: "2d6",
          savingAbilityModName: "dex",
          saveDC: 14,
          saveDCAbilityModName: "str",
          damageMod: 4,
          damageType: "energy",
          range: "30 ft.",
          radius: "20 ft.",
        },
      ],
    },
    {
      name: "Blaster",
      description: "Times have changed",
      actions: [
        {
          name: "Blaster",
          type: "attack",
          abilityModName: "str",
          toHitMod: 0,
          damageRoll: "2d6",
          damageMod: 3,
          damageType: "energy",
          range: "30 ft.",
        },
      ],
      descriptionHTML:
        '<span>"An elegant weapon for a more civilized time," huh?<br/>Well, guess what. Times have changed.</span>',
    },
    {
      name: "Stun Baton",
      actions: [
        {
          name: "Stun Baton",
          type: "attack",
          range: "melee",
          toHitMod: 0,
          abilityModName: "str",
          damageType: "energy",
          damageMod: 3,
          damageRoll: "1d8",
        },
      ],
      description: "stic go brrrrrrrrr",
    },
    {
      name: "Plasteel Armor",
      baseArmor: 12,
      description: "Hard to miss",
    },
  ],
};
