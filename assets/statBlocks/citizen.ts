export const citizen = {
  name: "Concerned Citizen",
  str: 10,
  dex: 10,
  con: 10,
  wis: 10,
  int: 10,
  cha: 10,
  lvl: 1,
  maxHitPoints: 4,
  speed: 30,
  proficientSkills: [],
  equipment: [
    {
      name: "Rock, or brick, or something",
      actions: [
        {
          type: "attack",
          range: "30 ft.",
          toHitBonus: 0,
          mod: "str",
          damageType: "physical",
          damage: "1d4",
        },
      ],
    },
  ],
};
