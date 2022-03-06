<template>
  <div class="edit_profile">
    <label for="user_id">User ID</label>
    <input class="twitter" disabled :value="user.userId" />
    <label for="email">Email</label>
    <input class="twitter" type="text" ref="user_email" :value="user.email" />
    <label for="username">Username</label>
    <input class="twitter" type="text" ref="username" :value="user.username" />
    <label for="username">Username</label>
    <input class="twitter" type="text" ref="bio" :value="user.bio" />
    <label for="dob">Birthdate</label>
    <input
      class="twitter"
      type="text"
      ref="dob"
      placeholder="YYYY-MM-DD"
      :value="user.birthdate"
    />
    <input
      class="buttons"
      @click="update_user"
      type="submit"
      value="Update Info"
    />
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.headers.common["X-Api-Key"] =
  "i02PMVITFLBLyry786rGgMUG4xTrG25xAoDXaQ0qURf2d";
export default {
  name: "user-profile",
  methods: {
    update_user() {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/users`,
          method: "PATCH",
          data: {
            loginToken: this.$store.state.user.loginToken,
            email: this.$refs.user_email.value,
            username: this.$refs.username.value,
            bio: this.$refs.bio.value,
            birthdate: this.$refs.dob.value,
          },
        })
        .then((response) => {
          alert("Your info has been updated!");
          this.user = response.data;
          this.$store.commit("update_user", response.data);
        })
        .catch(console.error);
    },
  },
  data() {
    return {
      user: this.$store.state.user,
    };
  },
};
</script>

<style scoped>
.edit_profile {
  margin-top: 100px;
  display: grid;
  place-content: center;
}
label {
  font-weight: bold;
  color: rgb(18, 152, 205);
}
input {
  margin: 5px;
  border: 1px solid skyblue;
}
.twitter {
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
  width: 150px;
  height: 40px;
  justify-self: center;
  align-self: end;
  margin-bottom: 3px;
  background-color: skyblue;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: large;
}
</style>
