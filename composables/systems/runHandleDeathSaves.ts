import { Entity } from "../entities/entity";

export default function runHandleDeathSaves(target:Entity, results: {fails?:number, successes?:number}): void {
  if (target.deathSavingThrows == null) {
    throw Error(`uhhhh ${target} isn't rolling death saving throws???`)
  }
  target.deathSavingThrows.numFails += results.fails ?? 0;
  target.deathSavingThrows.numSaves += results.successes ?? 0;
  console.log(`${target.id}: ${target.deathSavingThrows.numSaves} saves, ${target.deathSavingThrows.numFails} fails`)

  if (target.deathSavingThrows.numFails >=3) {
    console.log(`... a hero has fallen (${target.id})`)
    target.dead = {}
    target.deathSavingThrows = undefined
    return 
  }
  
  if (target.deathSavingThrows.numSaves >= 3) {
    console.log(`${target.id} has stabilized`)
    target.unconscious = {}
    target.deathSavingThrows = undefined
    return
  }
}
