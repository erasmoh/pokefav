<template>
  <div class="pokemons">
    <input class="searchform" type="text" placeholder="Search" v-model="search" />
    <PokeModal
      v-if="showModal"
      :name="actualPokemon"
      @toggle-modal="toggleModal"
    />
    <div class="noresults" v-if="pokeFavsFiltered.length === 0">
      <h1>Uh-oh!</h1>
      <p>You look lost on your journey!</p>
      <button class="button" @click="this.$router.push('pokelist')">
        Go Back Home
      </button>
    </div>
    <PokeCard
      v-for="pokemon in pokeFavsFiltered"
      :pokemon="pokemon"
      :key="pokemon.index"
      @poke-detail="pokeDetail(pokemon.name)"
    />
    <Menu active="pokefav" />
  </div>
</template>
<script>
import PokeService from "@/services/PokeService.js";
import PokeCard from "@/components/PokeCard";
import Menu from "@/components/Menu";
import PokeModal from "@/components/PokeModal";
export default {
  name: "PokeList",
  components: {
    PokeCard,
    Menu,
    PokeModal,
  },
  data() {
    return {
      showModal: false,
      actualPokemon: null,
      search: "",
      pokeFavs: this.$store.state.pokeFavs,
    };
  },
  created() {
    PokeService.getPokemons()
      .then((response) => {
        this.pokemons = response.data.results;
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      });
  },
  computed: {
    pokeFavsFiltered() {
      if (this.search === "") {
        return this.pokeFavs;
      } else {
        return this.pokeFavs.filter((pokemon) => {
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
