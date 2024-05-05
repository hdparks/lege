import { start } from "~/composables/simulations/goblinFight2"
export default defineEventHandler((event) => {
  return {result:start()}
})
