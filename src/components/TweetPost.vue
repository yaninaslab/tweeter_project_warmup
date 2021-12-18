<template>
  <div>
    <textarea
      name=""
      ref="text_input"
      cols="30"
      rows="10"
      placeholder="Post here"
    ></textarea
    ><br />
    <input type="text" ref="image_input" placeholder="imageURL" /><br />
    <input
      @click="make_post"
      type="submit"
      ref="login_submit"
      value="Make Post"
    />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
axios.defaults.headers.common["X-Api-Key"] =
  "i02PMVITFLBLyry786rGgMUG4xTrG25xAoDXaQ0qURf2d";
export default {
  name: "tweet-post",
  methods: {
    make_post() {
      axios
        .request({
          url: "https://tweeterest.ga/api/tweets",

          method: "POST",
          data: {
            loginToken: this.login_token,  
            content: this.$refs.text_input.value,
            imageUrl: this.$refs.image_input.value,
          },
        })
        .then((response) => {
          this.tweets = response.data;
         
          this.$emit('post_sent', "The post has been successfully sent!")
    
        })
        .catch((error) => {
          error.message;
        });
    },
  },
  data() {
      return {
          tweets: {},
          login_token: cookies.get("login_token")
      }
  },
};
</script>

<style scoped>
input, textarea {
    margin: 5px;
}
</style>