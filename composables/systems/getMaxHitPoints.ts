import { Entity } from "../entities/entity"

export default function getMaxHitPoints(target:Entity):number{
  // todo: actually do this for all potential classes, factor in constitution, etc
  let maxHp = 0
  target.classes?.forEach(c => {
    switch(c.type) {
      case "rogue":
        maxHp += 8 + (c.level - 1 * 5);
      default:
        maxHp += 6 + (c.level - 1 * 4);
    }
  })
  return maxHp;
}
