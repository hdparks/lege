import { Entity } from "../entities/entity";

export default function runHeal(target:Entity, heal:number) {
  if (target.hitPoints == null) {
    throw Error(`${target.id} is not alive. (what is dead may never die)`)
  }
  target.hitPoints.hitPoints = Math.min(target.hitPoints.hitPoints + heal, getMaxHitPoints(target))
}
