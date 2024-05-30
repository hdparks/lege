import { Entity } from "../entities/entity";

export type HitPointMax = number;

export function GetHitPointMax(entity:Entity): HitPointMax|undefined {
  let operatorClassHPMax = entity.OperatorClass == undefined ? undefined : 5 * entity.OperatorClass.level
  return operatorClassHPMax;
}

export function ApplyHitPointMax(world:Entity[]): void {
  world.forEach(entity => {
    entity.HitPointMax = GetHitPointMax(entity)
  })
}
