<template>
  <div class="icons_grid">
    <img class="icons" src="../assets/message_icon.jpg" alt="" />
    <img
      class="icons"
      src="https://www.reshot.com/preview-assets/icons/2HQA9X7CYJ/heartrate-2HQA9X7CYJ.svg"
      v-if="is_liked"
      @click="unlike_tweet"
      alt=""
    />
    <img
      class="icons"
      src="https://www.reshot.com/preview-assets/icons/N3PUY2B9JX/heart-like-N3PUY2B9JX.svg"
      v-else
      @click="like_tweet"
      alt=""
    />

    <img
      class="icons"
      @click="delete_tweet"
      src="../assets/bin_icon.jpg"
      alt=""
    />
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

    like_tweet() {
      axios
        .request({
          url: "https://tweeterest.ga/api/tweet-likes",
          method: "POST",
          data: {
            loginToken: this.login_token,
            tweetId: `${this.tweetId}`,
          },
        })
        .then(() => {
          this.change_like();
        })
        .catch((error) => {
          error.message;
        });
    },
    unlike_tweet() {
      axios
        .request({
          url: "https://tweeterest.ga/api/tweet-likes",
          method: "DELETE",
          data: {
            loginToken: this.login_token,
            tweetId: `${this.tweetId}`,
          },
        })
        .then(() => {
          this.change_like();
        })
        .catch((error) => {
          error.message;
        });
    },

    change_like() {
      if (this.is_liked === false) {
        this.is_liked = true;
      } else {
        this.is_liked = false;
      }
    },
  },
  props: {
    tweetId: Number,
  },
  data() {
    return {
      login_token: cookies.get("login_token"),
      is_liked: false,
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
  background: lightgrey;
  position: relative;
  height: 15px;
  width: 15px;
  transform: rotate(-45deg) scale(1);
  z-index: 20;
}
.heart_icon_liked {
  background: skyblue;
  position: relative;
  height: 15px;
  width: 15px;
  transform: rotate(-45deg) scale(1);
  z-index: 20;
}
/* .heart_icon:hover {
  cursor: pointer;
  animation: pulse 0.2s linear;
  background: blue;
} */
@keyframes pulse {
  0% {
    transform: rotate(-45deg) scale(1);
  }
  100% {
    transform: rotate(-45deg) scale(1.2);
  }
}
.heart_icon::after {
  background: inherit;
  border-radius: 50%;
  content: "";
  position: absolute;
  top: -50%;
  left: 0;
  height: 15px;
  width: 15px;
}
.heart_icon::before {
  background: inherit;
  border-radius: 50%;
  content: "";
  position: absolute;
  top: 0;
  right: -50%;
  height: 15px;
  width: 15px;
}
.heart_icon_liked::after {
  background: inherit;
  border-radius: 50%;
  content: "";
  position: absolute;
  top: -50%;
  left: 0;
  height: 15px;
  width: 15px;
}
.heart_icon_liked::before {
  background: inherit;
  border-radius: 50%;
  content: "";
  position: absolute;
  top: 0;
  right: -50%;
  height: 15px;
  width: 15px;
}
</style>