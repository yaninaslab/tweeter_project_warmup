import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import cookies from "vue-cookies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tweets: [],
    users: [],
    user: {},
  },
  mutations: {
    update_tweets(state, payload) {
      state.tweets = payload;
    },
    update_users(state, payload) {
      state.users = payload;
    },
    update_user(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    get_tweets(store) {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/tweets`,
        })
        .then((response) => {
          store.commit("update_tweets", response.data);
        })
        .catch((error) => {
          error;
        });
    },
    get_users(store) {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/users`,
        })
        .then((response) => {
          store.commit("update_users", response.data);
        })
        .catch((error) => {
          error;
        });
    },
    get_current_user(store) {
      var user_id = cookies.get("user_id");
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/users/` + user_id,
        })
        .then((response) => {
          store.commit("update_user", response.data);
        })
        .catch((error) => {
          error;
        });
    },
    log_out(store) {
      cookies.remove("login_token");
      cookies.remove("user_id");
      store.commit("update_user", {});
    },
  },
});
