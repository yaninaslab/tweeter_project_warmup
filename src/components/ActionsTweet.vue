<template>
  <div class="icons_grid">
    <div class="comments">
      <img
        @click="show_modal"
        class="icons"
        src="../assets/message_icon.jpg"
        alt=""
      />
      <span class="comments_number" v-if="comments_qty">{{
        comments_qty
      }}</span>
    </div>
    <div v-if="is_modal" class="modal active">
      <div class="modal_header">
        <button @click="close_modal" class="close-button">&times;</button>
        <input
          class="twitter"
          ref="text_input"
          placeholder="What's up?"
          maxlength="280"
        />
        <br />
      </div>
      <input
        class="twitter_btn"
        @click="add_comment"
        type="submit"
        ref="login_submit"
        value="Add Comment"
      />
      <div
        class="comments_list"
        v-for="comment in comments"
        :key="comment.commentId"
      >
        <p>CommentId: {{ comment[0] }}</p>
        <p>TweetId: {{ comment[1] }}</p>
        <p class="content">Content: {{ comment[4] }}</p>
        <p>Posted by: {{ comment[3] }}</p>
        <p>Date: {{ comment[5] }}</p>
        <p v-if="!is_editing">{{ comment.tweetId }}</p>

        <div v-else>
          <input value="comment.content" />
          <input type="submit" />
        </div>
        <!-- <p v-if="comment.userId === userId">Edit</p>
        <p v-if="comment.userId === userId">Delete</p> -->
      </div>
      <div class="overlay"></div>
    </div>
    <div class="likes">
      <img
        class="icons"
        src="https://www.reshot.com/preview-assets/icons/N3PUY2B9JX/heart-like-N3PUY2B9JX.svg"
        v-if="!is_user_liked"
        @click="like_tweet"
        alt=""
      />
      <img
        class="icons"
        src="https://www.reshot.com/preview-assets/icons/2HQA9X7CYJ/heartrate-2HQA9X7CYJ.svg"
        v-else
        @click="unlike_tweet"
        alt=""
      />
      <span class="likes_number" v-if="likes">{{ likes }}</span>
    </div>
    <img
      class="icons"
      v-if="!is_deletable"
      @click="delete_tweet"
      src="https://www.reshot.com/preview-assets/icons/BXED96GWPV/waste-bin-BXED96GWPV.svg"
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
  name: "actions-tweet",
  methods: {
    delete_tweet() {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/tweets`,
          method: "DELETE",
          data: {
            loginToken: this.login_token,
            tweetId: `${this.tweetId}`,
          },
        })
        .then(() => {
          var current_tweets = this.$store.state.tweets.filter(
            (tweet) => tweet.tweetId !== this.tweetId
          );
          this.$store.commit("update_tweets", current_tweets);

          this.$emit(
            "post_deleted",
            "Your tweet has been successfully deleted!"
          );
        })
        .catch((error) => {
          error.message;
        });
    },

    like_tweet() {
      console.log("like tweet");
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/tweet-likes`,
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
          url: `${process.env.VUE_APP_API_URL}/api/tweet-likes`,
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
      if (this.is_user_liked === false) {
        this.is_user_liked = true;
        this.likes++;
      } else {
        this.is_user_liked = false;
        this.likes--;
      }
    },
    show_modal() {
      this.is_modal = true;
    },
    close_modal() {
      this.is_modal = false;
    },
    add_comment() {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/api/comments`,

          method: "POST",
          data: {
            loginToken: this.login_token,
            tweetId: `${this.tweetId}`,
            content: this.$refs.text_input.value,
          },
        })
        .then((response) => {
          this.comments.push(response.data);
          (this.$refs.text_input.value = ""),
            this.$emit(
              "comment_added",
              "Your comment has been successfully added!"
            );
        })
        .catch((error) => {
          error.message;
        });
    },
  },
  created() {
    axios
      .request({
        url: `${process.env.VUE_APP_API_URL}/api/tweet-likes`,
        method: "GET",
        params: {
          tweetId: this.tweetId,
        },
      })
      .then((response) => {
        this.likes = response.data.length;
        for (var i = 0; i < response.data.length; i++) {
          if (cookies.get("user_id") == response.data[i]["userId"])
            this.is_user_liked = true;
        }
      })
      .catch(console.error);

    axios
      .request({
        url: `${process.env.VUE_APP_API_URL}/api/comments`,
        method: "GET",
        params: {
          tweetId: this.tweetId,
        },
      })
      .then((response) => {
        this.comments = response.data;
      })
      .catch(console.error);
  },
  props: {
    tweetId: Number,
    userId: Number,
  },
  computed: {
    comments_qty() {
      return this.comments.length;
    },
  },
  data() {
    return {
      login_token: cookies.get("login_token"),
      is_modal: false,
      likes: 0,
      comments: [],
      is_user_liked: false,
      has_comments: false,
      // is_deletable: true,
      is_deletable: this.userId == this.$store.state.user.userId,
      is_editing: false,
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
  min-height: 300px;
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
.likes,
.comments {
  display: flex;
}
.likes_number,
.comments_number {
  margin-top: 5px;
  font-size: 0.8rem;
}
.comments_list {
  margin-top: 5px;
  display: grid;
  place-items: center;
  border: 1px solid skyblue;
}
.content {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
