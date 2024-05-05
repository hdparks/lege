import { Entity } from "../entities/entity";
import getEffectiveWeaponProficiency from "../systems/getEffectiveWeaponProficiency";
import getRandn from "../systems/getRandn";
import runEquipEntity from "../systems/runEquipEntity";
import runAttack from "../systems/runAttack";
import getMaxHitPoints from "../systems/getMaxHitPoints";

export function start(){
  const entities:Entity[] = []

  const player: Entity = {
    id: "player",
    dex: 12,
    classes: [{
      type: "rogue",
      level: 1
    }],
    weaponProficiencies: ["martial"],
    position: { x:0,y:0,z:0 },
  }
  player.hitPoints = {
    hitPoints: getMaxHitPoints(player),
    tempHitPoints: 0
  }
  const sword: Entity = {
    id: "player's sword",
    range: 5,
    weaponType: "martial",
    weaponBaseDamageRoll: (attacker:Entity) => {
      const profBonus = getEffectiveWeaponProficiency(attacker, sword)
      return [{dmg:getRandn(6) + profBonus, type:"kinetic"}]
    },
  }

  const goblin: Entity = {
    id: "gobolin",
    dex: 10,
    classes: [{
      type:"fighter",
      level:1
    }],
    position: {x:0, y:0, z:0},
  };
  goblin.hitPoints = {
    hitPoints: getMaxHitPoints(goblin),
    tempHitPoints: 0,
  }

  const bow: Entity = {
    id:"gobbo short-bow",
    weaponType: "simple",
    range: 30,
    secondaryRange: 60,
    weaponBaseDamageRoll: (attacker: Entity) => {
      const profBonus = getEffectiveWeaponProficiency(attacker, bow)
      return [{dmg:getRandn(6) + profBonus, type: "kinetic"}]
    }
  }
 
  runEquipEntity(player, sword, entities)
  runEquipEntity(goblin, bow, entities)

  let rounds = 0
  while(player.dead == null && goblin.dead == null && rounds < 100) {
    rounds += 1
    console.log(`round: ${rounds}. player.hp:${player.hitPoints?.hitPoints}, goblin.hp:${goblin.hitPoints?.hitPoints}. FIGHT`)
    runAttack(player, sword, goblin, entities)
    runAttack(goblin, bow, player, entities)
  }

  return player.dead == null ? "Player won!" : "Player succumbed to their injuries...";
}
