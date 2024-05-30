import { Entity } from "../entities/entity";
import { ComputeScoreModifier } from "../utils/scoreModifier";

export type DexMod = number;

export function GetDexMod(entity:Entity): DexMod|undefined {
  if (entity.DexScore == undefined) { return undefined }
  return ComputeScoreModifier(entity.DexScore)
}

export function ApplyDexMod(world:Entity[]):void {
  world.forEach(entity => {
    entity.DexMod = GetDexMod(entity)
  })
}
