<template>
  <div
    class="rounded-lg border-2 border-slate-500 p-3 mb-2"
    @click="runAction(action)"
  >
    <p class="font-bold">{{ action.name }}</p>
    <p v-if="action.description">{{ action.description }}</p>
    <p>{{ action.type }}</p>
    <p>Range: {{ action.range }}</p>
    <p>{{ signedInt(action.toHitMod ?? 0) }} to hit</p>
    <p>
      {{ action.damageRoll }} + {{ action.damageMod }} ({{ action.damageType }})
    </p>
  </div>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import { AttackAction } from "~/composables/Action";
import { StatBlock } from "~/composables/StatBlock";
import { Message } from "~/composables/useMessages";
const statBlock = inject<ComputedRef<StatBlock>>("statBlock");
const messages = useMessages();
const props = defineProps<{ action: AttackAction }>();
const runAction = (action: AttackAction) => {
  const toHit = rolldX(20) + (action.toHitMod ?? 0);
  const [n, size] = action.damageRoll?.split("d").map((x) => parseInt(x));
  let damage = (action.damageMod ?? 0) + rollndx(action.damageRoll);
  const msg = `${action.name} ${toHit} to Hit, ${damage} ${action.damageType} damage`;
  const message: Message = {
    sender: statBlock?.value.name ?? "unknown",
    message: msg,
    isoTime: dayjs().toISOString(),
  };
  messages.value.push(message);
};
</script>
