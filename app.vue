<template>
  <div class="w-full h-screen p-5 text-gray-400 overflow-auto relative" @click="runGoblinSim">
    test
    <div v-for="r in results">
      {{r}}
    </div>
  </div>
</template>
<script setup lang="ts">

const results = ref<string[]>([])
async function runGoblinSim(){
  const result = await useFetch('/api/goblinFight')
  results.value.push(result.data?.value?.result ?? result.error?.value?.message ?? "unknown")
}
</script>
