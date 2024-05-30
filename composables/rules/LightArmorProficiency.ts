import { Entity } from "../entities/entity"

export type LightArmorProficiency = {}

export function GetLightArmorProficiency(entity: Entity): LightArmorProficiency|undefined{
  const fromOperatorClass = entity.OperatorClass != undefined
  return (fromOperatorClass) ? {} : undefined
}

export function ApplyLightArmorProficiency(world: Entity[]): void {
  world.forEach(entity => {
    entity.LightArmorProficiency = GetLightArmorProficiency(entity)
  })
}
