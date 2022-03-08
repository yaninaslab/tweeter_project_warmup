<template>
  <div>
    <input
      class="twitter"
      ref="text_input"
      placeholder="What's up?"
      maxlength="280"
    /><br />
    <input
      class="twitter_btn"
      @click="make_post"
      type="submit"
      ref="login_submit"
      value="Add Tweet"
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
          url: `${process.env.VUE_APP_API_URL}/api/tweets`,

          method: "POST",
          data: {
            loginToken: this.login_token,
            content: this.$refs.text_input.value,
          },
        })
        .then((response) => {
          this.tweets = response.data;

          this.$emit("post_sent", "Your tweet has been successfully added!");
        })
        .catch((error) => {
          error.message;
        });
    },
  },
  data() {
    return {
      tweets: {},
      login_token: cookies.get("login_token"),
    };
  },
};
</script>

<style scoped>
.twitter {
  max-width: 350px;
  border-radius: 5px;
  background: white;
  border: 1px solid skyblue;
  outline: none;
  padding: 10px;
}
.twitter {
  margin-top: 10px;
  width: 300px;
  height: 8px;
}
.twitter:focus {
  border: 1px solid #56b4ef;
  box-shadow: 0px 0px 3px 1px #c8def0;
}
.twitter_btn {
  width: 150px;
  height: 40px;
  background-color: skyblue;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: large;
  border: 1px solid skyblue;
}
input,
textarea {
  margin: 5px;
}
</style>
