import { Entity } from "../entities/entity";

export default function getDistance(a:Entity, b:Entity){
  // todo: different size/shapes of entity?
  // todo: non-city-block distance function?
  return Math.abs(a.position.x - b.position.x) + Math.abs(a.position.y - b.position.y) + Math.abs(a.position.z - b.position.z)
}
