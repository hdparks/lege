import { Entity } from "../entities/entity";

export default function runCreateEntity(entity:Entity, entities: Entity[] ){
  entities.push(entity)
}
