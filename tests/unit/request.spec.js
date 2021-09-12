import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import PokeFav from "@/views/PokeFav.vue";
import PokeList from "@/views/PokeList.vue";
import store from "@/store/index.js";

const homeWrapper = mount(Home, {
  global: {
    stubs: {
      RouterLink: true,
      RouterView: true,
    },
  },
});
const pokeFavWrapper = mount(PokeFav, {
  global: {
    stubs: {
      RouterLink: true,
      RouterView: true,
    },
  },
});

describe("Render Items", () => {
  it("Render splash screen", () => {
    expect(homeWrapper.find(".splash_screen").exists()).toBe(true);
  });
  it("Render PokeFav screen", () => {
    expect(pokeFavWrapper.find(".pokemons").exists()).toBe(true);
  });
  it("Render PokeList after API call", async () => {
    const pokeListWrapper = mount(PokeList, {
      global: {
        plugins: [store],

        stubs: {
          RouterLink: true,
          RouterView: true,
        },
      },
    });

    await pokeListWrapper.setData({ isLoading: false });
    expect(pokeListWrapper.find(".pokemons").exists()).toBe(true);
  });
});
