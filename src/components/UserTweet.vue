<template>
    <div class="tweets_list">
        <article v-for="tweet in tweets" :key="tweet.tweetId">
            <h5>{{ tweet.userId }}</h5>
            <h5>{{ tweet.username }}</h5>
            <p>{{ tweet.content }}</p>
            <h6>{{ tweet.createdAt}}</h6>
        </article>

    </div>
</template>

<script>
    export default {
        name: "user-tweet",
        props: {
            tweet: Object
        },
       computed: {
           tweets() {
               return this.$store.state['tweets']; 
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
    border: solid;
}
</style>