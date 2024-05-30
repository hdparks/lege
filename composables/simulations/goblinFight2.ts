import { ExclamationTriangleIcon } from "@heroicons/vue/24/solid";
import { Entity } from "../entities/entity";
import { ApplyArmorClass } from "../rules/ArmorClass";
import { ApplyDexMod } from "../rules/DexMod";
import { ApplyHitPointMax } from "../rules/HitPointMax";
import { ApplyLightArmorProficiency } from "../rules/LightArmorProficiency";

export const proxyHandler = {
  get(target:any, key:string) {
    if (typeof target[key] === 'object' && target[key] !== null){
      return new Proxy(target[key], proxyHandler);
    }
    return target[key]
  },
  set(target:any, prop:string, value:any) {
    console.log(`changed ${prop} from ${target[prop]} to ${value}`)
    target[prop] = value;
    return true
  }
}

export function asProxy(obj) {
  return new Proxy(obj, proxyHandler)
}



export function start(){
  const entities:Entity[] = []

  let player: Entity = {
    id: "player",
    DexScore: 12,
    OperatorClass: {level:6}
  }

  let shield: Entity = {
    id: "shield",
    Sheild: {acBonus: 2},
  }
  let playerEquippedShield: Entity = {
    id: "eq",
    Equipped: shield.id,
    Equipper: player.id
  }
  player = asProxy(player)
  entities.push(player)
  entities.push(shield)
  entities.push(playerEquippedShield)

  runRules(entities)

  return entities
}


function runRules(entities: Entity[]){
  ApplyDexMod(entities)
  ApplyArmorClass(entities)  
  ApplyHitPointMax(entities)
  ApplyLightArmorProficiency(entities)
}
