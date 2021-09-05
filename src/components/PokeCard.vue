<template>
  <div class="pokecard">
    <div class="pokecard-name" @click="showPokemon(pokemon.name)">
      {{ pokemon.name }}
    </div>
    <Star :pokemon="pokemon" />
  </div>
</template>

<script>
import Star from "./Star.vue";
export default {
  name: "PokeCard",
  props: ["pokemon"],
  emits: ["pokeDetail"],
  components: {
    Star,
  },
  methods: {
    showPokemon(pokemon) {
      this.$emit("pokeDetail", pokemon);
    },
  },
};
</script>