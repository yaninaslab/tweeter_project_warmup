<template>
  <div class="edit_profile">
    <article class="labels">
      <label for="user_id">User ID</label>
      <label for="email">Email</label>
      <label for="username">Username</label>
      <label for="Bio">Bio</label>
      <label for="dob">Birthdate</label>
    </article>
    <article class="update_info">
      <input disabled :value="user.userId" />

      <input type="text" ref="user_email" :value="user.email" />

      <input type="text" ref="username" :value="user.username" />

      <input type="text" ref="bio" :value="user.bio" />

      <input
        type="text"
        ref="dob"
        placeholder="YYYY-MM-DD"
        :value="user.birthdate"
      />
    </article>
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
          url: "https://tweeterest.ga/api/users",
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
          alert("Good!");
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
  display: grid;
  grid-auto-flow: column;
}
.user_info {
  display: grid;
  place-items: center;
}
.update_info {
  display: grid;
}
.labels {
  display: grid;
  place-items: center;
}
label {
  font-weight: bold;
  color: rgb(18, 152, 205);
}
.inline {
  display: inline;
}
input {
  margin: 5px;
  border: 1px solid skyblue;
}
.buttons {
  width: 100px;
  height: 40px;
  justify-self: center;
  align-self: end;
  margin-bottom: 3px;
  background-color: skyblue;
  border-radius: 5px;
  border: 1px solid skyblue;
}
</style>