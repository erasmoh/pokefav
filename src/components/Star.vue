<template>
  <div class="pokecard-star">
    <img
      v-if="pokeFavs.find((p) => p.name === pokemon.name)"
      :src="favImg"
      @click="removePokemon(pokemon.name)"
    />
    <img v-else :src="noFavImg" @click="addPokemon(pokemon)" />
  </div>
</template>

<script>
import Fav from "../assets/Fav.svg";
import noFav from "../assets/noFav.svg";
export default {
  name: "pokestar",
  props: ["pokemon"],
  data() {
    return {
      pokeFavs: this.$store.state.pokeFavs,
      favImg: Fav,
      noFavImg: noFav,
    };
  },
  methods: {
    addPokemon(pokemon) {
      this.pokeFavs.push(pokemon);
    },
    removePokemon(pokemon) {
      const pokeFav = this.pokeFavs.findIndex((p) => p.name === pokemon);
      this.pokeFavs.splice(pokeFav, 1);
    },
  },
};
</script>