import { Damage } from "../components/damage";
import { Entity } from "../entities/entity";
import runHandleDeathSaves from "./runHandleDeathSaves";

export default function runDamage(target:Entity, damage: Damage):void{
  // if target is already rolling death saves, any damage counts as 2 fails
  if(target.deathSavingThrows != null) {
    runHandleDeathSaves(target, {fails: 2})
  }

  // todo: factor in reductions based on damage type
  if (target.hitPoints == null) { 
    throw Error(`target ${target.id} does not have hit points`)
  }
  let remainingDmg = damage.dmg 
  if (target.hitPoints.tempHitPoints > 0) {
    target.hitPoints.tempHitPoints = Math.max(0, target.hitPoints.tempHitPoints - remainingDmg)
    remainingDmg -= target.hitPoints.tempHitPoints
    if (remainingDmg <= 0) { return; }
  }

  target.hitPoints.hitPoints -= remainingDmg;
  console.log(`${target.id} took ${damage.dmg} points of ${damage.type} damage`)
  if (target.hitPoints.hitPoints <= 0){
    console.log(`${target.id} has fallen`)
    if (target.canRollDeathSavingThrows != null){
      target.deathSavingThrows = {
        numSaves:0,
        numFails:0
      }
    } else {
      target.dead = {}
    }
  }
}
