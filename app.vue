<template>
  <div class="w-full h-screen p-5 text-gray-400 overflow-auto relative">
    <StatBlock
      v-for="block in blocks"
      :statBlock="block"
      class="mb-5"
    ></StatBlock>
    <HistoryPanel></HistoryPanel>
  </div>
</template>
<script setup lang="ts">
import { citizen } from "./assets/statBlocks/citizen";
import { curfewDroid } from "./assets/statBlocks/curfewDroid";
import { militia } from "./assets/statBlocks/militia";
import { protocolDroid } from "./assets/statBlocks/protocolDroid";
import { stormtrooper } from "./assets/statBlocks/stormtrooper";
import { atat } from "./assets/statBlocks/atat";
import { atst } from "./assets/statBlocks/atst";
const blocks = [
  stormtrooper,
  protocolDroid,
  curfewDroid,
  citizen,
  militia,
  atat,
  atst,
];
</script>
<style>
body {
  @apply bg-gray-950 font-sans;
}
</style>
