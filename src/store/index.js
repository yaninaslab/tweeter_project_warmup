import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tweets: []
  },
  mutations: {
    update_tweets(state, payload) {
      state.tweets = payload;
    }
  },
  actions: {
    get_tweets(store) {
      axios.request ({
        url: "https://tweeterest.ga/api/tweets"

      }).then((response) => {
        store.commit('update_tweets', response.data);
      }).catch((error) => {
        error;
      });
    }
  },

})
