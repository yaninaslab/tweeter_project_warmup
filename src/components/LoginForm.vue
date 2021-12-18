<template>
  <div>
      <form action="javascript:void(0)">
    <input type="text" ref="email_input" placeholder="email" /><br />
    <input type="text" ref="password_input" placeholder="password" /><br />
    <input
        @click="attempt_login"
        type="submit"
        ref="login_submit"
        value="Login"
      />
      </form>
  </div>
</template>

<script>
import axios from "axios";
import cookies from 'vue-cookies';
axios.defaults.headers.common["X-Api-Key"] =
  "i02PMVITFLBLyry786rGgMUG4xTrG25xAoDXaQ0qURf2d";
export default {
  name: "login-form",
  methods: {
      attempt_login() {
      axios
        .request({
          url: "https://tweeterest.ga/api/login",

          method: "POST",
          data: {
            email: this.$refs.email_input.value,
            password: this.$refs.password_input.value,
          },
        })
        .then((response) => {
          this.users = response.data;
          cookies.set("login_token", response.data.loginToken);
          this.$router.push ({path: '/feed'});
        })
        .catch((error) => {
          error.message;
        });
    },
  },
  data() {
    return {
      users: {},
    };
  },
};
</script>

<style scoped>
form {
    margin-top: 50px;
}
input {
    margin: 5px;
}
</style>