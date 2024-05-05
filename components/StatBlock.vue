<template>
  <div class="w-1/2 min-h-full mx-auto rounded-2xl bg-slate-800">
    <div class="h-10 bg-slate-900 rounded-t-2xl"></div>
    <div class="p-5 wrap h-full gap-10 grid grid-cols-2">
      <div>
        <p class="text-2xl uppercase font-serif">{{ statBlock.name }}</p>

        <hr class="my-2 mr-10" />
        <p>
          <span class="font-bold text-xl">Armor Class</span>
          {{ armorClass }}
          <span v-if="equippedArmor">({{ equippedArmor?.name }})</span>
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
            class="flex flex-col text-center border-2 border-slate-500 rounded-md p-1"
            @click="savingThrow('STR', strMod, 0)"
          >
            <span>STR</span
            ><span class="text-sm">
              {{ statBlock.str }} ({{ signedInt(strMod) }})</span
            >
          </div>
          <div
            class="flex flex-col text-center border-2 border-slate-500 rounded-md p-1"
            @click="savingThrow('DEX', dexMod, 0)"
          >
            <span>DEX</span
            ><span class="text-sm">
              {{ statBlock.dex }} ({{ signedInt(dexMod) }})</span
            >
          </div>
          <div
            class="flex flex-col text-center border-2 border-slate-500 rounded-md p-1"
            @click="savingThrow('CON', conMod, 0)"
          >
            <span>CON</span
            ><span class="text-sm">
              {{ statBlock.con }} ({{ signedInt(conMod) }})</span
            >
          </div>
          <div
            class="flex flex-col text-center border-2 border-slate-500 rounded-md p-1"
            @click="savingThrow('WIS', wisMod, 0)"
          >
            <span>WIS</span
            ><span class="text-sm">
              {{ statBlock.wis }} ({{ signedInt(wisMod) }})</span
            >
          </div>
          <div
            class="flex flex-col text-center border-2 border-slate-500 rounded-md p-1"
            @click="savingThrow('INT', intMod, 0)"
          >
            <span>INT</span
            ><span class="text-sm">
              {{ statBlock.int }} ({{ signedInt(intMod) }})</span
            >
          </div>
          <div
            class="flex flex-col text-center border-2 border-slate-500 rounded-md p-1"
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
          <ActionCard :action="action"></ActionCard>
        </template>
      </div>
      <div>
        <h1 class="font-thin uppercase text-2xl">Bonus Actions</h1>
        <hr class="my-2 mr-10" />
        <template v-for="(action, i) in bonusActions" :key="i">
          <ActionCard :action="action"></ActionCard>
        </template>
      </div>
      <div>
        <h1 class="font-thin uppercase text-2xl">Reactions</h1>
        <hr class="my-2 mr-10" />

        <template v-for="(action, i) in reactions" :key="i">
          <ActionCard :action="action"></ActionCard>
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
import { Action } from "~/composables/Action";
import { Equipment } from "~/composables/Equipment";
import { StatBlock } from "~/composables/StatBlock";
import { Message } from "~/composables/useMessages";
import { match, P } from "ts-pattern";

const props = defineProps<{ statBlock: StatBlock }>();
const statBlock = computed(() => props.statBlock);
provide("statBlock", statBlock);

const messages = useMessages();

const savingThrow = (modName: string, modValue: number, profLevel: number) => {
  const savingThrowValue =
    rolldX(20) + modValue + profLevel * proficiency.value;
  const message: Message = {
    sender: statBlock.value.name,
    message: `${modName} Saving Throw, ${savingThrowValue}`,
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
  () => dexMod.value + (equippedArmor.value?.baseArmor ?? 10)
);

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

const parseAction = (action: Action, defaultName: string): Action => {
  return match(action)
    .with({ type: "attack" }, (action) => {
      const mod = modValueMap.get(action.abilityModName);
      return {
        ...action,
        toHit: proficiency.value + (mod?.value ?? 0),
        name: action.name ?? defaultName,
        damageMod: proficiency.value + (mod?.value ?? 0),
      };
    })
    .with({ type: "savingThrow" }, (action) => {
      const mod = modValueMap.get(action.saveDCAbilityModName);
      return {
        ...action,
        damageMod: proficiency.value + (mod?.value ?? 0),
        saveDC: 8 + proficiency.value + (mod?.value ?? 0),
      };
    })
    .otherwise((action) => action);
};
const actions = computed<Action[]>(() =>
  statBlock.value.equipment
    .filter((item: any) => "actions" in item)
    .map((item: any) => item.actions.map((a: any) => parseAction(a, item.name)))
    .flat()
);

const bonusActions = computed<Action[]>(() =>
  // Get everything coming from equipment
  statBlock.value.equipment
    .filter((item: Equipment) => "bonusActions" in item)
    .map((item: Equipment) =>
      item.bonusActions.map((a: Action) => parseAction(a, item.name))
    )
    .flat()
);

const reactions = computed<Action[]>(() => {
  const equipmentReactions = statBlock.value.equipment
    .filter((item: Equipment) => "reactions" in item)
    .map((item: Equipment) =>
      item.reactions.map((action: Action) => parseAction(action, item.name))
    )
    .flat();
  return equipmentReactions;
});
const equippedArmor = computed<Equipment | undefined>(() =>
  statBlock.value.equipment.find(
    (item: Equipment) => item.name == statBlock.value.equippedArmor
  )
);
</script>
