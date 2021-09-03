<template>
  <div class="pokecard">
    {{ pokemon.name }}
  </div>
</template>

<script>
export default {
  name: "PokeCard",
  props: ["pokemon"],
};
</script>
<style lang="sass">
.pokecard
    width: 30%
    padding: 10px
    margin: 5px auto
    border-radius: 5px
    background-color: white
</style>