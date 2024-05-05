import { Entity } from "../entities/entity";

export type ArmorClassModifier = {
  modifier: (target:Entity) => number;
}


/* 
  * Scratch Pad
  *
  *
  * 4/4/24 this is where configuration comes in big time. the whole "modifier" function must be defined, not just the data
  * we could abstract it out to just use the data, but in a way I think the script is gonna be better in this case
  * more flexible, easier to add complex use cases without cluttering the entity definition.
  *
  * */
