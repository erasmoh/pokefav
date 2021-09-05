<template>
  <div class="splash_screen">
    <img src="../assets/splash-pikachu.svg" alt="PokeFav" />
    <h1>Welcome to Pokédex</h1>
    <p>
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <button class="button" @click="$router.push('pokelist')">Get Started</button>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>