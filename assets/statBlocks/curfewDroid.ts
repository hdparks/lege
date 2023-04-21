export const curfewDroid = {
  name: "NED-B Loader Droid (Curfew Enforcement)",
  str: 18,
  dex: 12,
  con: 16,
  wis: 6,
  int: 8,
  cha: 12,
  lvl: 5,
  maxHitPoints: 40,
  speed: 25,
  proficientSkills: ["Athletics"],
  equipedArmor: "Plasteel Plating",
  equipment: [
    {
      name: "Wrist-mounted Stun Baton",
      actions: [
        {
          type: "attack",
          range: "melee",
          toHitBonus: 0,
          mod: "str",
          damageType: "ion",
          damage: "2d8",
        },
      ],
    },
    {
      name: "Wrist-mounted Stun Cannon",
      actions: [
        {
          type: "attack",
          range: "30 ft./60 ft.",
          toHitBonus: 0,
          mod: "dex",
          damageType: "ion",
          damage: "1d4",
          description:
            "On a hit, a machine must succeed a CON save (DC 15) or become immobilized for 30 seconds.",
        },
      ],
      description:
        "On a hit, a machine must succeed a CON save (DC 15) or become immobilized for 30 seconds.",
    },
    {
      name: "Plasteel Plating",
      baseArmor: 15,
    },
  ],
};
