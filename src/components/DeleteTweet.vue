<template>
  <div class="icons_grid">
    <img @click="show_popup" class="icons" src="../assets/message_icon.jpg" alt="" />
    <div class="modal active">
      <div class="modal_header">
      <button data-close-button class="close-button">&times;</button>
      <input class="twitter"
      v-model="text"
      ref="text_input"
      placeholder="What's up?"
      maxlength="280"
    ><br /></div>
    <input class="twitter_btn"
      @click="make_post"
      type="submit"
      ref="login_submit"
      value="Add Tweet"
    />
    <div class="overlay"></div>

    </div>
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
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 200ms ease-in-out;
  border: 1px solid skyblue;
  border-radius: 5px;
  z-index: 10;
  background-color: white;
  width: 500px;
  height: 300px;
  max-width: 80%;
  border-radius: 10px;
}
.modal.active {
  transform: translate(-50%, -50%) scale(1);
}
.twitter {
  margin-top: 70px;
  width: 350px;
  border-radius: 5px;
  background: white;
  border: 1px solid skyblue;
  outline: none;
  padding: 10px;
}
.twitter_btn {
  margin-top: 20px;
  margin-left: 50%;
  width: 150px;
  height: 40px;
  background-color: skyblue;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: large;
  border: 1px solid skyblue;
}
.modal_header {
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.close-button {
  margin-bottom: 70px;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: skyblue;
}
.overlay {
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: lightgrey;
  pointer-events: none;
  transition: 200ms ease-in-out;
}
.overlay.active {
  opacity: 1;
  pointer-events: all;

}
/* .heart_icon {
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
} */
/* .heart_icon:hover {
  cursor: pointer;
  animation: pulse 0.2s linear;
  background: blue;
} */
/* @keyframes pulse {
  0% {
    transform: rotate(-45deg) scale(1);
  }
  100% {
    transform: rotate(-45deg) scale(1.2);
  }
} */
/* .heart_icon::after {
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
} */
</style>