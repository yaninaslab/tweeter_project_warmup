<template>
  <div class="icons_grid">
    <img class="icons" @click="comment_tweet" src="../assets/message_icon.jpg" alt="">
    <img class="icons" @click="like_tweet" src="../assets/like_icon.jpg" alt="">
    <img class="icons" @click="delete_tweet" src="../assets/bin_icon.jpg" alt="">
    
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
axios.defaults.headers.common["X-Api-Key"] =
  "i02PMVITFLBLyry786rGgMUG4xTrG25xAoDXaQ0qURf2d";
export default {
  name: "delete-tweet",
  methods: {
    delete_tweet() {
      axios
        .request({
          url: "https://tweeterest.ga/api/tweets",
          method: "DELETE",
          data: {
            loginToken: this.login_token,
            tweetId: `${this.tweetId}`,
          },
        })
        .then(() => {
          this.$emit("post_deleted", "The post has been successfully deleted!");
        })
        .catch((error) => {
          error.message;
        });
    },
  },
  props: {
    tweetId: Number,
  },
  data() {
    return {
      login_token: cookies.get("login_token"),
    };
  },
};
</script>

<style scoped>
.icons {
  width: 20px;
  height: 20px;
}
.icons_grid {
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  padding: 5px;
}
</style>