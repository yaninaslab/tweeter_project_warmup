<template>
  <div>
    <logout-button @log_out="react_to_logout"></logout-button>
    <tweet-post @post_sent="react_to_post_sent"> </tweet-post>
    <h2>{{ success_message }}</h2>
    <user-tweet></user-tweet>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import TweetPost from '@/components/TweetPost.vue'
import UserTweet from '@/components/UserTweet.vue'
import LogoutButton from '@/components/LogoutButton.vue'

    export default {
        name: "feed-page",
        components: {
            TweetPost,
            UserTweet,
            LogoutButton,
              
        },
        methods: {
            react_to_post_sent(payload) {
                this.success_message = payload;
                
            },
            react_to_logout(payload){
                this.logout_success = payload;
            },
            get_tweets() {
                this.$store.dispatch('get_tweets');
            }
        },
        mounted () {
            this.get_tweets();
            let login_token = cookies.get("login_token");
      if(!login_token) {
          this.$router.push({ path: "/" })
        }
        },
        data() {
            return {
                success_message: undefined,
                logout_success: undefined
            }
        },
    }
</script>

<style scoped>
</style>