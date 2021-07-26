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
      try {
        const res = await fetch('https://sv443.net/jokeapi/v2/joke/Any?amount=10')
        const data = await res.json()
        context.commit('getJokes', data.jokes)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
