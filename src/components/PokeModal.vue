<template>
  <div class="pokemodal" v-if="pokemon">
    <div class="pokemodal-body">
      <div class="pokemodal-header">
        <button @click="toggleModal" class="close"></button>
        <img
          :src="pokemon.sprites.other.dream_world.front_default"
          height="200"
        />
      </div>
      <div class="pokemodal-info" id="pokeinfo">
        <div class="pokemodal-info__item">
          <strong>Name:</strong> {{ pokemon.name }}
        </div>
        <div class="pokemodal-info__item">
          <strong>Weight:</strong> {{ pokemon.weight }}
        </div>
        <div class="pokemodal-info__item">
          <strong>Height:</strong> {{ pokemon.height }}
        </div>
        <div class="pokemodal-info__item">
          <strong>Type:</strong>
          <ul class="pokemodal-types">
            <li v-for="(type, index) in pokemon.types" :key="index">
              {{ type.type.name }}
            </li>
          </ul>
        </div>
        <input
          type="text"
          :value="`name: ${pokemon.name}, weight: ${pokemon.weight}, height: ${pokemon.height}`"
          id="myInput"
        />
        <div class="pokemodal-btns">
          <button class="button" @click="copyInfo">Share to my friends</button>
          <Star :pokemon="pokemon" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PokeService from "@/services/PokeService.js";
import Star from "./Star.vue";
export default {
  props: ["name"],
  emits: ["toggleModal"],
  components: {
    Star,
  },
  data() {
    return {
      pokemon: null,
      pokeFavs: this.$store.state.pokeFavs,
      pokeTypes: [],
    };
  },
  created() {
    PokeService.getPokemon(this.name)
      .then((response) => {
        this.pokemon = response.data;
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      });
  },
  methods: {
    toggleModal() {
      this.$emit("toggleModal");
    },
    copyInfo() {
      /* Get the text field */
      let copyText = document.getElementById("myInput");
      // let copyText = document.getElementsByClassName("pokemodal-info");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
    },
  },
};
</script>