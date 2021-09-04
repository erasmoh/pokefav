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
    <button @click="addPokemon(pokemon)">Add poke fav</button>
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
    };
  },
  created() {
    PokeService.getPokemon(this.name)
      .then((response) => {
        this.pokemon = response.data;
        // console.log(this.pokemon);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    toggleModal() {
      this.$emit("toggleModal");
    },
    addPokemon(pokemon) {
      this.$store.state.pokeFavs.push(pokemon);
      console.log("Pokemon: " + pokemon + " agregado a favoritos");
      console.log(this.$store.state.pokeFavs);
    },
    // addPokeFav(pokemon) {
    //   this.$emit("addPokeFav", pokemon);
    //   console.log("Pokemon: " + pokemon + " agregado a favoritos");
    // },
    // addPoke(pokemon) {
    //   store.commit('')
    // }
  },
};
</script>

<style lang="scss">
.pokemodal-types {
  display: flex;
  justify-content: center;
}
</style>