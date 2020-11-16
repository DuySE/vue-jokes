import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jokes: []
  },
  mutations: {
    getJokes (state, jokes) {
      state.jokes = jokes
    }
  },
  actions: {
    async fetchJokes (context) {
      await fetch('https://sv443.net/jokeapi/v2/joke/Any?amount=10')
        .then(response => context.commit('getJokes', response.jokes))
        .catch(error => console.log(error))
    }
  },
  modules: {
  }
})
