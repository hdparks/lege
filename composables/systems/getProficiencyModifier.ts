import { Entity } from "../entities/entity";

export default function getProficiencyModifier(e:Entity){
  // Proficiency modifier = (player level // 4) + 2
  let levels = 0
  e.classes?.forEach(c => levels += c.level)
  return Math.floor(levels / 4) + 2
}
