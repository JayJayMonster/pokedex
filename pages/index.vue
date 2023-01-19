<template>
    <div class="h-screen">
        <UiTextTitle class="text-center">Pokedex</UiTextTitle>
        <UiDetails 
            v-if=detailsLoaded 
            :pokemon="pokemonDetails"
            :key="`details-${pokemonId.value}`"
        />
        <div class="grid grid-cols-5 gap-16">
            <div 
                v-if=isLoaded 
                v-for="(pokemon, index) in pokemonArray"
            >
                <UiContainer :id="index+1" @click="fetchPokemonById(index)">
                    <template #name>{{ pokemon.name }}</template>
                </UiContainer>
            </div>
        </div>
    </div>
</template>

<script setup>
let pokemonArray;
const pokemonDetails =ref([]);
const pokemonId = ref(null);
const isLoaded = ref(false);
const detailsLoaded = ref(false);

const fetchAllPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const json = await response.json();
    pokemonArray=json.results;
    isLoaded.value= true;
    //console.log(json.results);
}

const fetchPokemonById = async (id) => {
    pokemonId.value = id + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.value}`);
    const json = await response.json();
    //console.log(json.sprites.front_default);
    pokemonDetails.value = json;
    detailsLoaded.value = true;
    console.log(pokemonDetails);
}

fetchAllPokemon();

</script>