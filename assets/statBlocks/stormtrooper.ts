export const stormtrooper = {
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
  equipedArmor: "Plasteel Armor",
  equipment: [
    {
      name: "Blaster",
      actions: [
        {
          type: "attack",
          range: "30 ft.",
          toHitBonus: 0,
          mod: "str",
          damageType: "energy",
          damage: "2d6",
        },
      ],
      descriptionHTML:
        '<span>"An elegant weapon for a more civilized time," huh?<br/>Well, guess what. Times have changed.</span>',
    },
    {
      name: "Stun Baton",
      actions: [
        {
          type: "attack",
          range: "melee",
          toHitBonus: 0,
          mod: "str",
          damageType: "energy",
          damage: "1d8",
        },
      ],
      description: "stic go brrrrrrrrr",
    },
    {
      name: "Plasteel Armor",
      baseArmor: 12,
    },
  ],
};
