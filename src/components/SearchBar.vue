<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search pokemon"
      :value="search"
      @keyup="onChange($event)"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onChange(event) {
      this.$emit('update:search', event.target.value)
    }
  }
};

</script>