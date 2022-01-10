<template>
  <div id="app">
<page-header></page-header>
    <router-view/>
    <page-footer></page-footer>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from "@/components/PageFooter.vue"
export default {
  name: "app",
  components: {
    PageHeader,
    PageFooter,
  },
  mounted () {
    var user_id = cookies.get("user_id");
    var user_token = cookies.get("login_token");

    if (user_id) {
          this.$store.commit('update_user', {
            userId: user_id,
            loginToken: user_token,
          })
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
    margin: 0;
    padding: 0;
 } 
 html, body {
    display: grid;

 }
</style>
