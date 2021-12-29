<template>
  <div>
    <button @click="log_out">Logout</button>
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
          url: "https://tweeterest.ga/api/login",

          method: "DELETE",
          data: {
            loginToken: this.login_token,
          },
        })
        .then((response) => {
            //console.log(response);
          //this.users = response.data;
          //cookies.remove("login_token");
          if(this.login_token === response.data.loginToken) {
          cookies.remove("login_token")}
          this.$emit("log_out", "You have successfully logged out!");
          this.$router.push({ path: "/" });
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
</style>