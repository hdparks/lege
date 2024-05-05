import { Entity } from "../entities/entity";
import getRandn from "./getRandn";
import runHandleDeathSaves from "./runHandleDeathSaves";

export default function runMakeDeathSavingThrow(target:Entity):void{
  if (target.deathSavingThrows == null){
    throw Error(`uhhhh ${target.id} isn't making death saves??`)
  }
  const result = getRandn(20)
  console.log(`${target.id} rolled a ${result} on their death saving throw`)

  if (result == 20) {
    runHeal(target, 1)
  } else if (result >= 10) {
    runHandleDeathSaves(target, {successes:1})
  } else if (result > 1){
    runHandleDeathSaves(target, {fails:1})
  } else {
    runHandleDeathSaves(target, {fails:2})
  }
}
