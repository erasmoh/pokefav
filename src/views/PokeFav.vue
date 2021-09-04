<template>
  <div class="pokemons">
    <SearchBar />
    <h1>Favs</h1>
    <PokeCard
      v-for="pokemon in pokemons"
      :pokemon="pokemon"
      :key="pokemon.index"
    />
    <Menu />
  </div>
</template>
<script>
import PokeService from "@/services/PokeService.js";
import SearchBar from "@/components/SearchBar";
import PokeCard from "@/components/PokeCard";
import Menu from "@/components/Menu";
// import PokeModal from "@/components/PokeModal";
export default {
  name: "PokeFav",
  components: {
    SearchBar,
    PokeCard,
    Menu,
  },
  data() {
    return {
      pokemons: null,
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
};
</script>

