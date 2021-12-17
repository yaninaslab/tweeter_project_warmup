<template>
  <div>
      <router-link to="/feed">Feed Page</router-link>
    <form action="javascript:void(0)">
      <input type="text" ref="email_input" placeholder="email" /><br />
      <input type="text" ref="username_input" placeholder="username" /><br />
      <input type="text" ref="password_input" placeholder="password" /><br />
      <input type="text" ref="bio_input" placeholder="bio" /><br />
      <input type="text" ref="dob_input" placeholder="DOB" /><br />
      <input
        @click="register_user"
        type="submit"
        ref="login_submit"
        value="Register"
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
  name: "register-form",
  methods: {
    register_user() {
      axios
        .request({
          url: "https://tweeterest.ga/api/users",

          method: "POST",
          data: {
            email: this.$refs.email_input.value,
            username: this.$refs.username_input.value,
            password: this.$refs.password_input.value,
            bio: this.$refs.bio_input.value,
            birthdate: this.$refs.dob_input.value,
          },
        })
        .then((response) => {
          this.users = response.data;
          Cookies.set("login_token", response.data.loginToken);
          <router-link to="/feed">Feed Page</router-link>
        })
        .catch((error) => {
          error;
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
</style>