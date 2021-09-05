<template>
  <div class="pokemodal" v-if="pokemon">
    <button @click="toggleModal">Cerrar modal</button>
    <img :src="pokemon.sprites.other.dream_world.front_default" height="200" />
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
    <button>Share to my friends</button>
    <!-- This one only shoud be displayed if not on fav list -->
    <button
      v-if="!pokeFavs.find((p) => p.name === pokemon.name)"
      @click="addPokemon(pokemon)"
    >
      Add To List
    </button>
    <!-- This one only shoud be displayed if it's fav list -->
    <button
      v-if="pokeFavs.find((p) => p.name === pokemon.name)"
      @click="removePokemon(pokemon)"
    >
      Remove From list
    </button>
    <button @click="copyInfo">Share info</button>
  </div>
</template>
<script>
import PokeService from "@/services/PokeService.js";
export default {
  props: ["name"],
  emits: ["toggleModal"],
  data() {
    return {
      pokemon: null,
      pokeFavs: this.$store.state.pokeFavs,
      pokeInfo: {},
    };
  },
  created() {
    PokeService.getPokemon(this.name)
      .then((response) => {
        this.pokemon = response.data;
        this.pokeInfo = [`${this.pokemon.name}, ${this.pokemon.weight}`];
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      });
  },
  methods: {
    toggleModal() {
      this.$emit("toggleModal");
    },
    addPokemon(pokemon) {
      this.pokeFavs.push(pokemon);
    },
    removePokemon() {
      let pokeFav = this.pokeFavs.indexOf(
        (pokemon) => pokemon.name === pokemon.name
      );
      this.pokeFavs.splice(pokeFav, 1);
    },
    copyInfo() {
      // copy to clipboard missing functionality
    },
  },
};
</script>

<style lang="scss">
.pokemodal-types {
  display: flex;
  justify-content: center;
}
</style>