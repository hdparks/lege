import { Entity } from "../entities/entity";

export default function getDexterityModifier(e:Entity) {
  // todo: add in ABI, race, class, item benefits, etc.
  return Math.floor((e.dex??10 - 10) / 2) 
}
