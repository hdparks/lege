import { Entity } from "../entities/entity";
import { v4 } from "uuid"
import runCreateEntity from "./runCreateEntity";

export default function runEquipEntity(equipper:Entity, equipped: Entity, entities:Entity[]){
  const link: Entity = {
    id: v4(),
    equipper:equipper,
    equipped:equipped
  }
  runCreateEntity(link, entities)
}
