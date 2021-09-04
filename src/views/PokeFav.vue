<template>
  <div class="pokemons">
    <input type="text" placeholder="Search pokemon" v-model="search" />
    <PokeModal
      v-if="showModal"
      :name="actualPokemon"
      @toggle-modal="toggleModal"
    />
    <div v-if="pokeFavs.length === 0">
      <h1>Uh-oh!</h1>
      <p>You don't have any fav!</p>
      <!-- <button @click="clearSearch">Add some</button> -->
    </div>
    <PokeCard
      v-for="pokemon in pokeFavs"
      :pokemon="pokemon"
      :key="pokemon.index"
      @click="pokeDetail(pokemon.name)"
    />
    <Menu />
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
      pokemons: null,
      showModal: false,
      actualPokemon: null,
      search: "",
      pokeFavs: this.$store.state.pokeFavs,
    };
  },
  created() {
    console.log('PokeFavs: ' + this.$store.state.pokeFavs);
    PokeService.getPokemons()
      .then((response) => {
        this.pokemons = response.data.results;
      })
      .catch((error) => {
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
