<template>
    <div>
<button @click="delete_tweet">Delete Tweet</button>
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
                axios.request({
                    url: "https://tweeterest.ga/api/tweets",
                    method: "DELETE",
                    data: {
                        loginToken: this.login_token,
                        tweetId: this.tweetId,
                    }
                })
                .then(() => {
        
          this.$emit('post_deleted', "The post has been successfully deleted!")
    
        })
        .catch((error) => {
          error.message;
        });
            }
        },
        data() {
            return {
                tweetId: undefined,
                login_token: cookies.get("login_token"),
            }
        },
    }
</script>

<style scoped>

</style>