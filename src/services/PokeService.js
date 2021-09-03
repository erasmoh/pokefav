import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  withCredentials: false,
  headers: {
    Accept: "Application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPokemons() {
    return pokeApi.get("/pokemon/?limit=-1");
  },
  getPokemon(name) {
    return pokeApi.get("/pokemon/" + name);
  },
};
