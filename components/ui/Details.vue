<template>
    <div class="bg-gray-500 border border-black rounded shadow-md flex flex-col w-fit p-2 my-2">
        <UiTextTitle class="text-white">{{ pokemon.name }}</UiTextTitle>
        <UiTextSmall class="text-white">{{ pokemon.height }} inch</UiTextSmall>
        <UiTextSmall class="text-white">{{ pokemon.weight }} kg</UiTextSmall>
    </div>
</template>

<script setup lang="ts">
const properties = defineProps({
    pokemon: {
        type: Object,
    }
})
</script>