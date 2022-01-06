<template>
<div>
    <h2>{{ success_message }}</h2>
    <div class="tweets_list">
        <article v-for="tweet in tweets" :key="tweet.tweetId">
            <h5>{{ tweet.userId }}</h5>
            <h5>{{ tweet.username }}</h5>
            <p>{{ tweet.content }}</p>
            <h6>{{ tweet.createdAt }}</h6>
            <actions-tweet @post_deleted="react_to_post_deleted" :tweetId="tweet.tweetId"></actions-tweet>
        </article>
    </div>
    </div>
</template>

<script>
import axios from "axios";
axios.defaults.headers.common["X-Api-Key"] =
  "i02PMVITFLBLyry786rGgMUG4xTrG25xAoDXaQ0qURf2d";
import ActionsTweet from '@/components/ActionsTweet.vue'
    export default {
        name: "user-tweet",
        components: {
            ActionsTweet
        },
        methods: {
            react_to_post_deleted(payload) {
                this.success_message = payload;
            },
        },

       computed: {
           tweets() {
               return this.$store.state['tweets']; 
           }
       },
       data() {
           return {
               success_message: undefined,
           }
       },
    }
</script>

<style scoped>
.tweets_list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
}
article {
    border: 1px solid skyblue;
}
</style>