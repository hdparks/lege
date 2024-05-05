import { Action } from "./Action";

export type Equipment = {
  name: string;
  actions?: Action[];
  bonusActions?: Action[];
  reactions?: Action[];
  description: string;
  descriptionHTML?: string;
  baseArmor?: number;
};
