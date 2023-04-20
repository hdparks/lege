<template>
  <div class="w-full h-screen p-5 text-gray-400 overflow-auto relative">
    <div class="w-1/2 h-full mx-auto rounded-2xl bg-slate-800">
      <div class="h-10 bg-slate-900 rounded-t-2xl"></div>
      <div class="p-5 flex flex-col flex-wrap h-full gap-10">
        <div>
          <p class="text-2xl uppercase font-serif">{{ actor.name }}</p>

          <hr class="my-2 mr-10" />
          <p>
            <span class="font-bold text-xl">Armor Class</span>
            {{ armorClass }}
            <span v-if="equipedArmor">({{ equipedArmor?.name }})</span>
          </p>
          <p>
            <span class="font-bold text-xl">Hit Points</span> {{ hitPoints }}
          </p>
          <p>
            <span class="font-bold text-xl">Speed</span> {{ actor.speed }} ft.
          </p>
          <hr class="my-2 mr-10" />
          <p class="text-xl">Proficiency Bonus: {{ signedInt(proficiency) }}</p>
          <br />
          <div class="flex flex-row justify-between pr-5">
            <div class="flex flex-col text-center">
              <span>STR</span
              ><span class="text-sm">
                {{ actor.str }} ({{ signedInt(strMod) }})</span
              >
            </div>
            <div class="flex flex-col text-center">
              <span>DEX</span
              ><span class="text-sm">
                {{ actor.dex }} ({{ signedInt(dexMod) }})</span
              >
            </div>
            <div class="flex flex-col text-center">
              <span>CON</span
              ><span class="text-sm">
                {{ actor.con }} ({{ signedInt(conMod) }})</span
              >
            </div>
            <div class="flex flex-col text-center">
              <span>WIS</span
              ><span class="text-sm">
                {{ actor.wis }} ({{ signedInt(wisMod) }})</span
              >
            </div>
            <div class="flex flex-col text-center">
              <span>INT</span
              ><span class="text-sm">
                {{ actor.int }} ({{ signedInt(intMod) }})</span
              >
            </div>
            <div class="flex flex-col text-center">
              <span>CHA</span
              ><span class="text-sm">
                {{ actor.cha }} ({{ signedInt(chaMod) }})</span
              >
            </div>
          </div>
          <br />
          <p>Skills: {{ actor.proficientSkills.join(", ") }}</p>

          <br />
        </div>
        <div>
          <h1 class="font-thin uppercase text-2xl">Actions</h1>
          <hr class="my-2 mr-10" />

          <template v-for="(action, i) in actions" :key="i">
            <div
              class="rounded-lg border-4 border-slate-500 p-3 mb-2"
              @click="runAction(action)"
            >
              <p class="font-bold">{{ action.name }}</p>
              <p>{{ action.type }}</p>
              <p>Range: {{ action.range }}</p>
              <p>
                {{ action.toHit >= 0 ? "+" : "-" }}{{ action.toHit }} to hit
              </p>
              <p>
                {{ action.damage }} + {{ action.damageMod }} ({{
                  action.damageType
                }})
              </p>
            </div>
            <br />
          </template>
        </div>
        <div>
          <h1 class="font-thin uppercase text-2xl mb-2">Equipment</h1>
          <hr class="my-2 mr-10" />
          <template v-for="(item, i) in equipment">
            <div class="rounded-lg border-4 border-slate-500 p-3 mb-2">
              <p class="font-bold">{{ item.name }}</p>
              <p v-html="item.descriptionHTML"></p>
              <p v-if="!item.descriptionHTML">{{ item.description }}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const signedInt = (n: number) => (n >= 0 ? "+" : "") + n.toString();

const runAction = (action: Action) => {
  const toHit = Math.floor(Math.random() * 20) + 1 + action.toHit;
  const [n, size] = action.damage?.split("d").map((x) => parseInt(x));

  let damage = action.damageMod;
  for (let i = 0; i < n; i++) {
    damage += Math.floor(Math.random() * size) + 1;
  }

  alert(
    `${action.name} ${toHit} to Hit, ${damage} ${action.damageType} damage`
  );
};
const actor = ref({
  name: "Stormtrooper",
  str: 14,
  dex: 12,
  con: 12,
  wis: 7,
  int: 10,
  cha: 8,
  lvl: 5,
  maxHitPoints: 35,
  speed: 30,
  proficientSkills: ["Athletics", "Insight"],
  equipedArmor: "Plasteel Armor",
});
const hitPoints = ref<number>(actor.value.maxHitPoints);
const proficiency = computed(() => Math.floor((actor.value.lvl + 1) / 2));
const dexMod = computed(() => Math.floor((actor.value.dex - 10) / 2));
const strMod = computed(() => Math.floor((actor.value.str - 10) / 2));
const conMod = computed(() => Math.floor((actor.value.con - 10) / 2));
const wisMod = computed(() => Math.floor((actor.value.wis - 10) / 2));
const intMod = computed(() => Math.floor((actor.value.int - 10) / 2));
const chaMod = computed(() => Math.floor((actor.value.cha - 10) / 2));
const armorClass = computed(
  () => dexMod.value + (equipedArmor.value?.baseArmor ?? 10)
);

const equipment = ref<any>([
  {
    name: "Blaster",
    actions: [
      {
        type: "attack",
        range: "30 ft.",
        toHitBonus: 0,
        mod: "str",
        damageType: "energy",
        damage: "2d6",
      },
    ],
    descriptionHTML:
      '<span>"An elegant weapon for a more civilized time," huh?<br/>Well, guess what. Times have changed.</span>',
  },
  {
    name: "Stun Baton",
    actions: [
      {
        type: "attack",
        range: "melee",
        toHitBonus: 0,
        mod: "str",
        damageType: "energy",
        damage: "1d8",
      },
    ],
    description: "stic go brrrrrrrrr",
  },
  {
    name: "Plasteel Armor",
    baseArmor: 12,
  },
]);
type Action = {
  name: string;
  range: string;
  type: string;
  toHit: number;
  damage: string;
  damageMod: number;
  damageType: string;
};
const actions = computed<Action[]>(() =>
  equipment.value
    .filter((item: any) => "actions" in item)
    .map((item: any) =>
      item.actions.map((a: any) => ({
        toHit: proficiency.value + strMod.value,
        type: a.type,
        range: a.range,
        name: a.name ?? item.name,
        damage: a.damage,
        damageMod: proficiency.value + strMod.value,
        damageType: a.damageType,
      }))
    )
    .flat()
);

const equipedArmor = computed<{ name: string; baseArmor: number }>(() =>
  equipment.value.find((item: any) => item.name == actor.value.equipedArmor)
);
</script>
<style>
html {
  font-size: 30px;
}

body {
  @apply bg-gray-950 font-sans;
}
</style>
