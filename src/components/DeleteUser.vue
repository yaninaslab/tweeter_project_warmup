<template>
  <div>
      <input type="password" v-model="password" placeholder="Enter your password to delete user" >
    <input
      :disabled="!password"
      class="buttons"
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
          url: "https://tweeterest.ga/api/users",
          method: "DELETE",
          data: {
            loginToken: this.$store.state.user.loginToken,
            password: this.password,
          },
        })
        .then(() => {
            this.$store.dispatch('log_out');
            this.$router.push({ path: "/", query: {user_deleted:true} });
        })
        .catch((error) => {
          error.message;
        });
    },
  },
  data() {
      return {
          password: "",
      }
  },
};
</script>

<style scoped>
.buttons {
  display: grid;
  margin-left: 83%;
  width: 100px;
  height: 40px;
  background-color: skyblue;
  border-radius: 5px;
  border: 1px solid skyblue;
}
</style>