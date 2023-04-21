export const atat = {
  name: "AT-AT (Construction)",
  str: 22,
  dex: 6,
  con: 18,
  wis: 10,
  int: 10,
  cha: 10,
  lvl: 10,
  maxHitPoints: 100,
  speed: 30,
  proficientSkills: [],
  equipment: [
    {
      name: "Twin E-WEB Chin-Mounted Cannons",
      actions: [
        {
          type: "attack",
          range: "120 ft.",
          toHitBonus: 0,
          mod: "str",
          damageType: "energy",
          damage: "2d12",
        },
      ],
    },
    {
      name: "Troop Deployment",
      description:
        "This AT-AT can forego its movement to deploy troops from its undercarriage. It can deploy 4 troops this way per round.",
    },
  ],
};
