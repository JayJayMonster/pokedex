<template>
    <div class="h-screen">
        <UiTextTitle class="text-center">Pokedex</UiTextTitle>
        <UiDetails 
            v-if=detailsLoaded 
            :id="pokemonId"
            :pokemon="pokemonDetails"
            :key="`details-${pokemonId.value}`"
            :details="goBack()"
        />
        <div class="grid grid-cols-5 gap-4 p-4">
            <div 
                v-if="isLoaded && !detailsLoaded" 
                v-for="(pokemon, index) in pokemonArray"
            >
                <UiContainer 
                    :id="index+1" 
                    @click="fetchPokemonById(index)"
                    class="bg-white border border-gray-200 rounded-lg p-4 shadow-lg cursor-pointer hover:bg-gray-100" 
                >
                    <template class="font-bold text-lg" #name>{{ pokemon.name }}</template>
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
}

const fetchPokemonById = async (id) => {
    pokemonId.value = id + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.value}`);
    const json = await response.json();
    pokemonDetails.value = json;
    detailsLoaded.value = true;
    console.log(pokemonDetails);
}

fetchAllPokemon();

const goBack = () => {
    console.log('You pressed the buttonn');
}

</script>