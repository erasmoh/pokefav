<template>
  <div class="menu">
    <router-link
      class="button"
      :to="{ name: 'PokeList' }"
      :class="[active == 'home' ? 'disabled' : '']"
      >All</router-link
    >
    <router-link
      class="button"
      :to="{ name: 'PokeFav' }"
      :class="[active == 'pokefav' ? 'disabled' : '']"
      >Favorites</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ['active'],
};
</script>