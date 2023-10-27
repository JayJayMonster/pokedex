<template>
    <div class="bg-white border border-gray-200 rounded shadow-md flex flex-col w-fit p-2 my-2">
        <UiImage :id="id"/>
        <UiTextTitle class="text-white">{{ pokemon.name }}</UiTextTitle>
        <UiTextSmall class="text-white">{{ pokemon.height }} inch</UiTextSmall>
        <UiTextSmall class="text-white">{{ pokemon.weight }} kg</UiTextSmall>
        <button @click="goBack">Go back</button>
    </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

const properties = defineProps({
    pokemon: {
        type: Object,
    },
    id: {
      default: 0,
      type: Number,
    },
})

const emit = defineEmits(['details']);
  
  const goBack = () => {
    emit('details');
  }

</script>