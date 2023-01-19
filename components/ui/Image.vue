<template>
    <div
        class="w-24 h-24 bg-cover"
        :style="{backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png)`}"
        />
</template>

<script setup lang="ts">
const properties = defineProps({
    id: {
        default: 0,
        type: Number,
    },
});
</script>