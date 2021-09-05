<template>
  <div class="menu">
    <router-link
      class="button"
      :to="{ name: 'PokeList' }"
      :class="[active == 'home' ? '' : 'disabled']"
    >
      <img :src="All" alt="All" />
      All</router-link
    >
    <router-link
      class="button"
      :to="{ name: 'PokeFav' }"
      :class="[active == 'pokefav' ? '' : 'disabled']"
    >
      <img :src="WhiteStar" alt="Favorites" />
      Favorites</router-link
    >
  </div>
</template>

<script>
import WhiteStar from "../assets/FavIco.svg";
import All from "../assets/All.svg";
export default {
  name: "Menu",
  props: ["active"],
  data() {
    return {
      WhiteStar: WhiteStar,
      All: All,
    };
  },
};
</script>