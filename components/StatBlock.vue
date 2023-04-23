<template>
  <div class="w-1/2 h-full mx-auto rounded-2xl bg-slate-800">
    <div class="h-10 bg-slate-900 rounded-t-2xl"></div>
    <div class="p-5 wrap h-full gap-10 grid grid-cols-2">
      <div>
        <p class="text-2xl uppercase font-serif">{{ statBlock.name }}</p>

        <hr class="my-2 mr-10" />
        <p>
          <span class="font-bold text-xl">Armor Class</span>
          {{ armorClass }}
          <span v-if="equipedArmor">({{ equipedArmor?.name }})</span>
        </p>
        <p><span class="font-bold text-xl">Hit Points</span> {{ hitPoints }}</p>
        <p>
          <span class="font-bold text-xl">Speed</span> {{ statBlock.speed }} ft.
        </p>
        <hr class="my-2 mr-10" />
        <p class="text-xl">Proficiency Bonus: {{ signedInt(proficiency) }}</p>
        <br />
        <div class="flex flex-row justify-between pr-5">
          <div
            class="flex flex-col text-center"
            @click="savingThrow('STR', strMod, 0)"
          >
            <span>STR</span
            ><span class="text-sm">
              {{ statBlock.str }} ({{ signedInt(strMod) }})</span
            >
          </div>
          <div
            class="flex flex-col text-center"
            @click="savingThrow('DEX', dexMod, 0)"
          >
            <span>DEX</span
            ><span class="text-sm">
              {{ statBlock.dex }} ({{ signedInt(dexMod) }})</span
            >
          </div>
          <div
            class="flex flex-col text-center"
            @click="savingThrow('CON', conMod, 0)"
          >
            <span>CON</span
            ><span class="text-sm">
              {{ statBlock.con }} ({{ signedInt(conMod) }})</span
            >
          </div>
          <div
            class="flex flex-col text-center"
            @click="savingThrow('WIS', wisMod, 0)"
          >
            <span>WIS</span
            ><span class="text-sm">
              {{ statBlock.wis }} ({{ signedInt(wisMod) }})</span
            >
          </div>
          <div
            class="flex flex-col text-center"
            @click="savingThrow('INT', intMod, 0)"
          >
            <span>INT</span
            ><span class="text-sm">
              {{ statBlock.int }} ({{ signedInt(intMod) }})</span
            >
          </div>
          <div
            class="flex flex-col text-center"
            @click="savingThrow('CHA', chaMod, 0)"
          >
            <span>CHA</span
            ><span class="text-sm">
              {{ statBlock.cha }} ({{ signedInt(chaMod) }})</span
            >
          </div>
        </div>
        <br />
        <p>Skills: {{ statBlock.proficientSkills.join(", ") }}</p>

        <br />
      </div>
      <div>
        <h1 class="font-thin uppercase text-2xl">Actions</h1>
        <hr class="my-2 mr-10" />

        <template v-for="(action, i) in actions" :key="i">
          <div
            class="rounded-lg border-2 border-slate-500 p-3 mb-2"
            @click="runAction(action)"
          >
            <p class="font-bold">{{ action.name }}</p>
            <p>{{ action.type }}</p>
            <p>Range: {{ action.range }}</p>
            <p>{{ signedInt(action.toHit) }} to hit</p>
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
        <template v-for="(item, i) in statBlock.equipment">
          <div class="rounded-lg border-2 border-slate-500 p-3 mb-2">
            <p class="font-bold">{{ item.name }}</p>
            <p v-if="item.descriptionHTML" v-html="item.descriptionHTML"></p>
            <p v-if="item.description && !item.descriptionHTML">
              {{ item.description }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import { Message } from "~/composables/useMessages";

const props = defineProps<{ statBlock: any }>();
const statBlock = computed(() => props.statBlock);

const signedInt = (n: number) => (n >= 0 ? "+" : "") + n.toString();
const messages = useMessages();
const savingThrow = (modName: string, modValue: number, profLevel: number) => {
  const savingThrowValue =
    rolldX(20) + modValue + profLevel * proficiency.value;
  const message: Message = {
    sender: statBlock.value.name,
    message: `${modName} Saving Throw, ${savingThrowValue}`,
    isoTime: dayjs().toISOString(),
  };

  console.log("making a saving throw, are ye?");
  messages.value.push(message);
};
const rolldX = (x: number) => Math.floor(Math.random() * x) + 1;
const runAction = (action: Action) => {
  const toHit = rolldX(20) + action.toHit;
  const [n, size] = action.damage?.split("d").map((x) => parseInt(x));

  let damage = action.damageMod;
  for (let i = 0; i < n; i++) {
    damage += rolldX(size) + 1;
  }

  const message: Message = {
    sender: statBlock.value.name,
    message: `${action.name} ${toHit} to Hit, ${damage} ${action.damageType} damage`,
    isoTime: dayjs().toISOString(),
  };
  messages.value.push(message);
};

const hitPoints = ref<number>(statBlock.value.maxHitPoints);
const proficiency = computed(() => Math.floor((statBlock.value.lvl + 1) / 2));
const dexMod = computed(() => Math.floor((statBlock.value.dex - 10) / 2));
const strMod = computed(() => Math.floor((statBlock.value.str - 10) / 2));
const conMod = computed(() => Math.floor((statBlock.value.con - 10) / 2));
const wisMod = computed(() => Math.floor((statBlock.value.wis - 10) / 2));
const intMod = computed(() => Math.floor((statBlock.value.int - 10) / 2));
const chaMod = computed(() => Math.floor((statBlock.value.cha - 10) / 2));
const armorClass = computed(
  () => dexMod.value + (equipedArmor.value?.baseArmor ?? 10)
);

type Action = {
  name: string;
  range: string;
  type: string;
  toHit: number;
  damage: string;
  damageMod: number;
  damageType: string;
};
const modValueMap = new Map(
  Object.entries({
    str: strMod,
    dex: dexMod,
    con: conMod,
    wis: wisMod,
    int: intMod,
    cha: chaMod,
  })
);
const actions = computed<Action[]>(() =>
  statBlock.value.equipment
    .filter((item: any) => "actions" in item)
    .map((item: any) =>
      item.actions.map((a: any) => {
        const mod = modValueMap.get(a.mod) ?? strMod;
        return {
          toHit: proficiency.value + mod.value,
          type: a.type,
          range: a.range,
          name: a.name ?? item.name,
          damage: a.damage,
          damageMod: proficiency.value + mod.value,
          damageType: a.damageType,
        };
      })
    )
    .flat()
);

const equipedArmor = computed<{ name: string; baseArmor: number }>(() =>
  statBlock.value.equipment.find(
    (item: any) => item.name == statBlock.value.equipedArmor
  )
);
</script>
