<template>
  <div class="register">
    <form action="javascript:void(0)">
      <input class="twitter" type="text" ref="email_input" placeholder="email" /><br />
      <input class="twitter" type="text" ref="username_input" placeholder="username" /><br />
      <input class="twitter" type="password" ref="password_input" placeholder="password" /><br />
      <input class="twitter" type="text" ref="bio_input" placeholder="bio" /><br />
      <input class="twitter" type="text" ref="dob_input" placeholder="YYYY-MM-DD" /><br />
      <input class="buttons"
        @click="register_user"
        type="submit"
        ref="login_submit"
        value="Sign Up"
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
          cookies.set("login_token", response.data.loginToken);
          this.$router.push ({path: '/feed'});
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
form {
    margin-top: 30px;
}
input {
    margin: 5px;
    border: 1px solid skyblue;
}
.register {
  position: absolute;
  margin-left: 20%;
}
.buttons {
  width: 250px;
  height: 40px;
  background-color: skyblue;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: large;
}
.twitter {
  width: 350px;
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
</style>