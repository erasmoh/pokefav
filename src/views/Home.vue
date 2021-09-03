<template>
  <div class="splash_screen">
    <img src="../assets/splash-pikachu.png" alt="PokeFav" />
    <h1>Welcome to Pokédex</h1>
    <p>
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <router-link :to="{ name: 'PokeList' }">Get Started</router-link>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>

<style>

</style>