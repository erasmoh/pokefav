<template>
  <div class="pokecard">
    <div class="pokecard-name">
      {{ pokemon.name }}
    </div>
    <div class="pokecard-star">
      <img v-if="pokeFavs.find((p) => p.name === pokemon.name)" :src="favImg" />
      <img v-else :src="noFavImg" />
    </div>
  </div>
</template>

<script>
import Fav from "../assets/Fav.svg";
import noFav from "../assets/noFav.svg";
export default {
  name: "PokeCard",
  props: ["pokemon"],
  data() {
    return {
      pokeFavs: this.$store.state.pokeFavs,
      favImg: Fav,
      noFavImg: noFav,
    };
  },
};
</script>