export type Action =
  | AttackAction
  | SavingThrowAction
  | DamagingAction
  | UtitilityAction;

export type BaseAction = {
  name: string;
  description?: string;
  descriptionHTML?: string;
};

export type UtitilityAction = BaseAction & {
  type: "utility";
};

export type DamagingAction = BaseAction & {
  type: "damage";
  damageRoll: string;
  damageMod: number;
  damageType: string;
};

export type AttackAction = BaseAction & {
  type: "attack";
  abilityModName: string;
  toHitMod: number;
  damageRoll: string;
  damageMod: number;
  damageType: string;
  range: string;
};

export type SavingThrowAction = BaseAction & {
  type: "savingThrow";
  damageRoll: string;
  savingAbilityModName: string;
  saveDC: number;
  saveDCAbilityModName: string;
  damageMod: number;
  damageType: string;
  range?: string;
  radius?: string;
};
