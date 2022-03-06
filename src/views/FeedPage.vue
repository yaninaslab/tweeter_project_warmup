<template>
  <div>
    <logout-button @log_out="react_to_logout"></logout-button>
    <tweet-post @post_sent="react_to_post_sent"> </tweet-post>
    <h2>{{ post_message }}</h2>
    <user-tweet @click="react_to_comment_added"></user-tweet>
    <h2>{{ comment_message }}</h2>
  </div>
</template>

<script>
import TweetPost from "@/components/TweetPost.vue";
import UserTweet from "@/components/UserTweet.vue";
import LogoutButton from "@/components/LogoutButton.vue";

export default {
  name: "feed-page",
  components: {
    TweetPost,
    UserTweet,
    LogoutButton,
  },
  methods: {
    react_to_post_sent(payload) {
      this.post_message = payload;
    },
    react_to_comment_added(payload) {
      this.comment_message = payload;
    },
    react_to_logout(payload) {
      this.logout_success = payload;
    },
    get_tweets() {
      this.$store.dispatch("get_tweets");
      console.log(this.$store.state.tweets);
    },
  },
  mounted() {
    this.get_tweets();
  },
  data() {
    return {
      post_message: undefined,
      logout_success: undefined,
      comment_message: undefined,
    };
  },
};
</script>

<style scoped></style>
