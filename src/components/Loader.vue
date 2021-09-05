<template>
  <div class="loader">
    <img :src="pokeball" alt="Loading" class="pokeball" />
  </div>
</template>

<script>
import PokeBall from "../assets/pokeball.svg";
export default {
  name: "Loader",
  data() {
    return {
      pokeball: PokeBall,
    };
  },
};
</script>
