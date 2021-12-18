<template>
    <div>
<tweet-post @post_sent="react_to_post_sent">

</tweet-post>
<h2>{{ success_message }}</h2>
<user-tweet></user-tweet>
    </div>
</template>

<script>
import TweetPost from '@/components/TweetPost.vue'
import UserTweet from '@/components/UserTweet.vue'

    export default {
        name: "feed-page",
        components: {
            TweetPost,
            UserTweet,
              
        },
        methods: {
            react_to_post_sent(payload) {
                this.success_message = payload;
            },
            get_tweets() {
                this.$store.dispatch('get_tweets');
            }
        },
        mounted () {
            this.get_tweets();
        },
        data() {
            return {
                success_message: undefined,
            }
        },
    }
</script>

<style scoped>

</style>