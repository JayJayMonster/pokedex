<template>
    <button 
      @click="test(properties.id)" 
      class="bg-gray-100 border border-black rounded shadow-md p-4 cursor-pointer hover:bg-gray-300"
    >
      <UiImage :id="id"/>
      <UiTextSmall><slot name='name' /></UiTextSmall>
    </button>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  const properties = defineProps({
    id: {
      default: 0,
      type: Number,
    },
  });
  
  const emit = defineEmits(['click']);
  
  const test = (id: number) => {
    emit('click', id);
  }
  </script>
  