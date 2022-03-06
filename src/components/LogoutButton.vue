<template>
  <div>
    <button class="twitter_btn" @click="log_out">Logout</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
axios.defaults.headers.common["X-Api-Key"] =
  "i02PMVITFLBLyry786rGgMUG4xTrG25xAoDXaQ0qURf2d";
export default {
  name: "logout-button",
  methods: {
    log_out() {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/login`,

          method: "DELETE",
          data: {
            loginToken: this.login_token,
          },
        })
        .then(() => {
          this.$store.dispatch("log_out");
          this.$router.push({ path: "/", query: { logout: true } });
        })
        .catch((error) => {
          error.message;
        });
    },
  },
  data() {
    return {
      login_token: cookies.get("login_token"),
    };
  },
};
</script>

<style scoped>
.twitter_btn {
  margin-top: 100px;
  width: 100px;
  height: 40px;
  background-color: skyblue;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: large;
  border: 1px solid skyblue;
}
</style>
