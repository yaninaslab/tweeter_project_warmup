<template>
  <div class="delete_user">
    <input
      class="twitter password"
      type="password"
      v-model="password"
      placeholder="Enter your password to delete user"
    />
    <input
      :disabled="!password"
      class="twitter buttons"
      @click="delete_user"
      type="submit"
      value="Delete User"
    />
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.headers.common["X-Api-Key"] =
  "i02PMVITFLBLyry786rGgMUG4xTrG25xAoDXaQ0qURf2d";
export default {
  name: "delete-user",
  methods: {
    delete_user() {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/users`,
          method: "DELETE",
          data: {
            loginToken: this.$store.state.user.loginToken,
            password: this.password,
          },
        })
        .then(() => {
          this.$store.dispatch("log_out");
          this.$router.push({ path: "/", query: { user_deleted: true } });
        })
        .catch((error) => {
          error.message;
        });
    },
  },
  data() {
    return {
      password: "",
    };
  },
};
</script>

<style scoped>
.delete_user {
  margin-top: 30px;
  display: grid;
  place-items: center;
}
.twitter {
  margin-top: 10px;
  max-width: 350px;
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
.buttons {
  display: grid;
  width: 150px;
  height: 40px;
  background-color: skyblue;
  border-radius: 5px;
  border: 1px solid skyblue;
}
</style>
