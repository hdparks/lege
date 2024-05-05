<template>
  <div
    class="fixed right-0 bottom-0 rounded-xl flex flex-col pb-5"
    :class="{ 'bg-gray-800 h-screen w-1/4': open }"
  >
    <button class="bg-slate-500 rounded m-3 h-10 w-10" @click="open = !open">
      <Bars4Icon class="p-1"></Bars4Icon>
    </button>
    <div v-if="open" class="px-3 overflow-auto" ref="messagesContainerRef">
      <button class="bg-slate-500 rounded m-3" @click="goblinFight">fight</button>
      <div v-for="message in messages">
        <span class="text-sm pr-2">
          {{ dayjs(message.isoTime).format("h:m") }}
        </span>
        <span class="font-bold"> {{ message.sender }}: </span>
        <Transition
          appear
          enter-from-class="bg-slate-900"
          enter-to-class="bg-slate-700"
          :duration="5000"
        >
          <span class="transition">
            {{ message.message }}
          </span>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import { Bars4Icon } from "@heroicons/vue/24/solid";
import { getIsoTime } from "~/composables/isoTime";
const open = ref<boolean>(true);
const messages = useMessages();

const messagesContainerRef = ref<InstanceType<typeof HTMLElement>>();
watch(messages.value, () => {
  nextTick(() => {
    messagesContainerRef.value?.lastElementChild?.scrollIntoView(false);
  });
});
async function goblinFight(){
  const result = await useFetch('/api/goblinFight')
  messages.value.push({
    sender:"/api/goblinFight",
    message: result.data.value?.result ?? "ERR",
    isoTime: getIsoTime()
  })
}
</script>
