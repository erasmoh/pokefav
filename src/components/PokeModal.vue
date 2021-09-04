<template>
  <div class="pokemodal" v-if="pokemon">
    <div class="pokemodal-name">Name: {{ pokemon.name }}</div>
    <div class="pokemodal-weight">Weight: {{ pokemon.weight }}</div>
    <div class="pokemodal-height">Height: {{ pokemon.height }}</div>
    <div class="pokemodal-types">
      Type:
      <div
        class="pokemodal-types__mini"
        v-for="types in pokemon.types"
        :key="types"
      >
        <div v-for="type in types" :key="type">
          {{ type.name }}
        </div>
      </div>
    </div>
    <button @click="$emit('toggleModal')">Cerrar modal</button>
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

<style lang="scss">
.pokemodal-types {
  display: flex;
  justify-content: center;
}
</style>