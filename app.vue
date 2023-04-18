<template>
  <div class="w-full h-full p-5 text-gray-300">
    <div class="w-1/2 h-full mx-auto rounded-2xl bg-slate-600 p-5">
      <p class="text-2xl">Stormtrooper</p>
      <p class="text-xl">
        Armor Class: {{ armorClass }} {{ equipedArmor?.name }}
      </p>
      <p class="text-xl">Hit Points {{ actor.hitPoints }}</p>
      <p class="text-xl">Speed {{ actor.speed }} ft.</p>
      <p class="text-xl">Proficiency Bonus: +2</p>
      <br />
      <p class="text-xl">STR: 13</p>
      <p class="text-xl">DEX: 13</p>
      <p class="text-xl">CON: 13</p>
      <p class="text-xl">WIS: 13</p>
      <p class="text-xl">INT: 13</p>
      <p class="text-xl">CHA: 13</p>
      <br />
      <p>Skills: Athletics, Insight</p>

      <br />
      <h1 class="text-2xl">Actions</h1>
      <template v-for="(action, i) in actions" :key="i">
        <div class="rounded-lg ring-4 ring-slate-500 p-3 inline-block mb-2">
          <p class="font-bold">{{ action.value.name }}</p>
          <p>
            {{ action.value.toHit >= 0 ? "+" : "-" }}{{ action.value.toHit }} to
            hit
          </p>
          <p>
            {{ action.value.damage }} + {{ action.value.damageMod }} ({{
              action.value.damageType
            }})
          </p>
        </div>
        <br />
      </template>
      <h1 class="text-2xl mb-2">Equipment</h1>
      <div class="rounded-lg ring-4 ring-slate-500 p-3 mb-2 inline-block">
        <p class="font-bold">Blaster</p>
        <p>STR</p>
        <p>2d6</p>
      </div>
      <br />
      <div class="rounded-lg ring-4 ring-slate-500 p-3 mb-2 inline-block">
        <p class="font-bold">Armor</p>
        <p>+2</p>
      </div>
      <br />
      <div
        class="h-10 w-10 flex flex-col rounded-lg ring-4 ring-slate-500 p-3 justify-center items-center mb-2"
      >
        <span class="font-bold">+</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const actor = ref({
  name: "Stormtrooper",
  str: 13,
  dex: 13,
  con: 10,
  wis: 10,
  int: 10,
  cha: 10,
  lvl: 5,
  hitPoints: 35,
  speed: 30,
});
const proficiency = computed(() => Math.floor((actor.value.lvl + 1) / 2));
const dexMod = computed(() => Math.floor((actor.value.dex - 10) / 2));
const strMod = computed(() => Math.floor((actor.value.str - 10) / 2));
const conMod = computed(() => Math.floor((actor.value.con - 10) / 2));
const wisMod = computed(() => Math.floor((actor.value.wis - 10) / 2));
const intMod = computed(() => Math.floor((actor.value.int - 10) / 2));
const chaMod = computed(() => Math.floor((actor.value.cha - 10) / 2));
const equipedArmor = ref<{ name: string; baseArmor: number }>();
const armorClass = computed(
  () => dexMod.value + (equipedArmor.value?.baseArmor ?? 10)
);

const items = [
  {
    name: "Blaster",
    actions: [
      {
        type: "ranged attack",
        toHitBonus: 0,
        mod: "strMod",
        damageType: "energy",
        damage: "2d6",
      },
    ],
  },
  {
    name: "Plasteel Armor",
    baseArmor: 12,
  },
];
type Action = {
  name: string;
  toHit: number;
  damage: string;
  damageMod: number;
  damageType: string;
};
const actions = ref<ComputedRef<Action>[]>([]);

items.forEach((item) => {
  if ("actions" in item) {
    item.actions?.forEach((a) => {
      const action = computed(() => ({
        toHit: proficiency.value + strMod.value,
        name: item.name,
        damage: a.damage,
        damageMod: proficiency.value + strMod.value,
        damageType: a.damageType,
      }));
      actions.value.push(action);
    });
  }

  if ("baseArmor" in item) {
    if ((item.baseArmor ?? 0) > (equipedArmor.value?.baseArmor ?? 0)) {
      equipedArmor.value = item as { name: string; baseArmor: number };
    }
  }
});
</script>
<style>
html {
  font-size: 30px;
}

body {
  @apply bg-slate-800;
}
</style>
