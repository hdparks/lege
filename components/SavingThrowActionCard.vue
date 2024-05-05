<template>
  <div
    class="rounded-lg border-2 border-slate-500 p-3 mb-2"
    @click="runAction(action)"
  >
    <p class="font-bold">{{ action.name }}</p>
    <p v-if="action.description">{{ action.description }}</p>
    <p>{{ action.type }}</p>
    <p>DC {{ action.saveDC }} {{ action.savingAbilityModName }}</p>
    <p>
      {{ action.damageRoll }} + {{ action.damageMod }} ({{ action.damageType }})
    </p>
  </div>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import { SavingThrowAction } from "~/composables/Action";
import { StatBlock } from "~/composables/StatBlock";
import { Message } from "~/composables/useMessages";
const messages = useMessages();
const statBlock = inject<ComputedRef<StatBlock>>("statBlock");
const props = defineProps<{ action: SavingThrowAction }>();
const runAction = (action: SavingThrowAction) => {
  let damage = (action.damageMod ?? 0) + rollndx(action.damageRoll);
  const msg = `${action.name} DC ${action.saveDC} ${
    action.savingAbilityModName
  } save, else ${damage} ${action.damageType} (${Math.floor(
    damage / 2
  )}) damage (${action.damageRoll} + ${action.damageMod})`;
  const message: Message = {
    sender: statBlock?.value.name ?? "unkonwn",
    message: msg,
    isoTime: dayjs().toISOString(),
  };
  messages.value.push(message);
};
</script>
