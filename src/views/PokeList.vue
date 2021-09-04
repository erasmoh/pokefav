<template>
  <div class="pokemons">
    <SearchBar />
    <h1>Poke List</h1>
    <PokeModal
      v-if="showModal"
      :name="actualPokemon"
      @click="toggleModal"
    />
    <PokeCard
      v-for="pokemon in pokemons"
      :pokemon="pokemon"
      :key="pokemon.index"
      @click="pokeDetail(pokemon.name)"
    />
    <Menu />
  </div>
</template>
<script>
import PokeService from "@/services/PokeService.js";
import SearchBar from "@/components/SearchBar";
import PokeCard from "@/components/PokeCard";
import Menu from "@/components/Menu";
import PokeModal from "@/components/PokeModal";
export default {
  name: "PokeList",
  components: {
    SearchBar,
    PokeCard,
    Menu,
    PokeModal,
  },
  data() {
    return {
      pokemons: null,
      showModal: false,
      actualPokemon: null,
    };
  },
  created() {
    PokeService.getPokemons()
      .then((response) => {
        this.pokemons = response.data.results;
        // console.log(this.pokemons);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    pokeDetail(pokemon) {
      this.actualPokemon = pokemon;
      this.toggleModal();
    },
  },
};
</script>
