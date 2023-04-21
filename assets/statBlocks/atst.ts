export const atst = {
  name: "AT-ST",
  str: 14,
  dex: 16,
  con: 14,
  wis: 10,
  int: 10,
  cha: 10,
  lvl: 7,
  maxHitPoints: 60,
  speed: 45,
  proficientSkills: ["Athletics", "Perception"],
  equipment: [
    {
      name: "Twin Chin-Mounted Blasters",
      actions: [
        {
          type: "attack",
          range: "100 ft.",
          toHitBonus: 0,
          mod: "dex",
          damageType: "energy",
          damage: "1d10",
        },
      ],
      description: "Does it count as dual-wielding if it's on your face?",
    },
    {
      name: "Side Mounted Missile Launcher Pods",
      actions: [
        {
          type: "attack",
          range: "200 ft., 15 ft. radius",
          toHitBonus: 0,
          mod: "dex",
          damageType: "physical",
          damage: "6d4",
        },
      ],
      descriptionHTML:
        "Beings in a 15 ft radius must make a DEX saving throw (DC 12) or take damage (half damage on a successful save).<br/>Breath weapon rules: recharges on a d6, or at half health, or as a parting gift ;)",
    },
  ],
};
