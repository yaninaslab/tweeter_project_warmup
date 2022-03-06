<template>
  <div class="login">
    <input
      class="twitter"
      type="text"
      ref="email_input"
      placeholder="email"
    /><br />
    <input
      class="twitter"
      type="password"
      ref="password_input"
      placeholder="password"
    /><br />
    <input
      class="buttons"
      @click="attempt_login"
      type="submit"
      ref="login_submit"
      value="Log In"
    />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
axios.defaults.headers.common["X-Api-Key"] =
  "i02PMVITFLBLyry786rGgMUG4xTrG25xAoDXaQ0qURf2d";
export default {
  name: "login-form",
  methods: {
    attempt_login() {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/login`,

          method: "POST",
          data: {
            email: this.$refs.email_input.value,
            password: this.$refs.password_input.value,
          },
        })
        .then((response) => {
          this.$store.commit("update_user", response.data);
          cookies.set("login_token", response.data.loginToken);
          cookies.set("user_id", response.data.userId);
          this.$router.push({ path: "/feed" });
        })
        .catch((error) => {
          error.message;
        });
    },
  },
};
</script>

<style scoped>
.twitter {
  max-width: 400px;
  border-radius: 5px;
  background: white;
  border: 1px solid skyblue;
  outline: none;
  padding: 10px;
}
.twitter:focus {
  border: 1px solid #56b4ef;
  box-shadow: 0px 0px 3px 1px #c8def0;
}
input {
  margin: 5px;
  border: 1px solid skyblue;
}
.buttons {
  max-width: 250px;
  height: 40px;
  padding: 10px;
  background-color: skyblue;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: large;
}
</style>
