<template>
  <div>
    <div class="joke-card" v-for="(joke, index) in jokes" :key="index">
      <p>{{ joke.category }}</p>
      <p>{{ joke.type }}</p>
      <p>{{ joke.joke }}</p>
      <p>{{ joke.lang }}</p>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['jokes'])
  },
  methods: {
    ...mapMutations(['getJokes'])
  }
}
</script>

<style lang="css" scoped>
  .joke-card {
    display: grid;
    border-radius: 5px;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
</style>
