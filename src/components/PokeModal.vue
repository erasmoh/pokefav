<template>
  <div class="pokemodal" v-if="pokemon">
      {{ pokemon.name }}
  </div>
</template>
<script>
import PokeService from "@/services/PokeService.js";
export default {
  props: ["name"],
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    PokeService.getPokemon(this.name)
      .then((response) => {
        this.pokemon = response.data;
        console.log(this.pokemon);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>