<template>
  <div class="icons_grid">
    <img class="icons" @click="comment_tweet" src="../assets/message_icon.jpg" alt="">
    <div class="heart_icon" @click="like_tweet" alt=""></div>
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
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.icons_grid {
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  padding: 5px;
}
.heart_icon {
  background: skyblue;
  position: relative;
  height: 15px;
  width: 15px;
  transform: rotate(-45deg) scale(1);
}
.heart_icon:hover {
  cursor: pointer;
  animation: pulse 1s linear;
  background: blue;
}
@keyframes pulse {
  0% {
    transform: rotate(-45deg) scale(1);
  }
  100% {
    transform: rotate(-45deg) scale(1.5);

  }
}
.heart_icon::after {
  background: inherit;
  border-radius: 50%;
  content: '';
  position: absolute;
  top: -50%;
  left: 0;
  height: 15px;
  width: 15px;
}
.heart_icon::before {
  background: inherit;
  border-radius: 50%;
  content: '';
  position: absolute;
  top: 0;
  right: -50%;
  height: 15px;
  width: 15px;
}
</style>