import { createStore } from "vuex";

export default createStore({
  state: {
    pokeFavs: [],
  },
  mutations: {
    addPokeFav(state, pokemon) {
      // Mutate pokeFavs
      state.pokeFavs.push(pokemon);
    },
  },
  actions: {
    addPokemon({ commit }) {
      commit("addPokeFav");
    },
  },
  modules: {},
});
