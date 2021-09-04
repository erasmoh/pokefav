<template>
  <div class="menu">
    <router-link class="button" :to="{ name: 'Home' }">Home3</router-link>
    <router-link class="button" :to="{ name: 'PokeList' }">All</router-link>
    <router-link class="button" :to="{ name: 'PokeFav' }">Fav</router-link>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>
<style lang="sass">
.menu
    position: fixed
    bottom: 20px
    margin: 0 auto
.button
    margin: 10px
</style>