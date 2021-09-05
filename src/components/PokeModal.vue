<template>
  <div class="pokemodal" v-if="pokemon">
    <div class="pokemodal-body">
      <div class="pokemodal-header">
        <button @click="toggleModal">
          <img src="" alt="" />
          cerrar
        </button>
        <img
          :src="pokemon.sprites.other.dream_world.front_default"
          height="200"
        />
      </div>
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
      <div class="pokemodal-btns">
        <button class="button" @click="copyInfo">Share to my friends</button>
        <Star :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>
<script>
import PokeService from "@/services/PokeService.js";
import Star from "./Star.vue";
export default {
  props: ["name"],
  emits: ["toggleModal"],
  components: {
    Star,
  },
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
        // this.pokeInfo = [`${this.pokemon.name}, ${this.pokemon.weight}`];
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
    copyInfo() {
      // copy to clipboard missing functionality
    },
  },
};
</script>