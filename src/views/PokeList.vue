<template>
  <Loader v-if="isLoading" />
  <div v-else class="pokemons">
    <input
      class="searchform"
      type="text"
      placeholder="Search"
      v-model="search"
    />
    <PokeModal
      v-if="showModal"
      :name="actualPokemon"
      @toggle-modal="toggleModal"
    />
    <div class="noresults" v-if="search != '' && pokeFiltered.length === 0">
      <h1>Uh-oh!</h1>
      <p>You look lost on your journey!</p>
      <button class="button" @click="clearSearch">Go Back Home</button>
    </div>
    <PokeCard
      v-for="pokemon in pokeFiltered"
      :pokemon="pokemon"
      :key="pokemon.index"
      @poke-detail="pokeDetail(pokemon.name)"
    />
    <Menu active="home" />
  </div>
</template>
<script>
import PokeService from "@/services/PokeService.js";
import PokeCard from "@/components/PokeCard";
import Menu from "@/components/Menu";
import PokeModal from "@/components/PokeModal";
import Loader from "@/components/Loader";
export default {
  name: "PokeList",
  components: {
    PokeCard,
    Menu,
    PokeModal,
    Loader,
  },
  data() {
    return {
      pokemons: null,
      showModal: false,
      actualPokemon: null,
      search: "",
      pokeFavs: this.$store.state.pokeFavs,
      isLoading: true,
    };
  },
  created() {
    PokeService.getPokemons()
      .then((response) => {
        this.pokemons = response.data.results;
        this.isLoading = false;
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      });
  },
  computed: {
    pokeFiltered() {
      if (this.search === "") {
        return this.pokemons;
      } else {
        return this.pokemons.filter((pokemon) => {
          return pokemon.name.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    },
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    pokeDetail(pokemon) {
      this.actualPokemon = pokemon;
      this.toggleModal();
    },
    clearSearch() {
      this.search = "";
    },
  },
};
</script>
