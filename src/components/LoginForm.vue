<template>
  <div class="login">
    <form action="javascript:void(0)">
      <input type="text" ref="email_input" placeholder="email" /><br />
      <input type="text" ref="password_input" placeholder="password" /><br />
      <input class="buttons"
        @click="attempt_login"
        type="submit"
        ref="login_submit"
        value="Log In"
      />
    </form>
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
          url: "https://tweeterest.ga/api/login",

          method: "POST",
          data: {
            email: this.$refs.email_input.value,
            password: this.$refs.password_input.value,
          },
        })
        .then((response) => {

          this.$store.commit('update_user', response.data)
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
form {
  margin-top: 30px;
}
input {
  width: 250px;
  height: 30px;
  margin: 5px;
  border: 1px solid skyblue;
}
.login {
  position: absolute;
  margin-left: 60%;
}
.buttons {
  width: 250px;
  height: 40px;
  background-color: skyblue;
  border-radius: 5px;
}
</style>