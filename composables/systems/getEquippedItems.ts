import { Entity } from "../entities/entity";

export default function getEquippedItems(equipper:Entity, entities:Entity[]): Entity[] {
  return entities.filter(link => link.equipper == equipper).map(item => item.equipped).filter(item => item !== null) as Entity[]
}
