<template>
  <component :is="actionType" :action="props.action"></component>
</template>
<script setup lang="ts">
import { Action } from "~/composables/Action";
import AttackActionCard from "./AttackActionCard.vue";
import SavingThrowActionCard from "./SavingThrowActionCard.vue";
const props = defineProps<{
  action: Action;
}>();
const actionType = computed(() => {
  if (props.action.type == "attack") return AttackActionCard;
  if (props.action.type == "savingThrow") return SavingThrowActionCard;
});
</script>
