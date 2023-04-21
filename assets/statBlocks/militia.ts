export const militia = {
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
      actions: [
        {
          type: "attack",
          range: "30 ft./60 ft.",
          toHitBonus: 0,
          mod: "dex",
          damageType: "energy",
          damage: "2d4",
        },
      ],
    },
  ],
};
