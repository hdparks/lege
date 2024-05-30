import { Entity } from "../entities/entity";

export function getEquipped(entity:Entity, world: Entity[]): Entity[] {
  const equippedIds = world.filter(e => e.Equipper == entity.id).map(e => e.Equipped)
  return world.filter(e => equippedIds.includes(e.id))
}

export function getEquippers(entity:Entity, world: Entity[]): Entity[] {
  const equipperIds = world.filter(e => e.Equipped == entity.id).map(e => e.Equipper)
  return world.filter(e => equipperIds.includes(e.id))
}
