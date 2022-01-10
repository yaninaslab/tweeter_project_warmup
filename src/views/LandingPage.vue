<template>
  <div>
      <h2 v-if="logout_message || user_deleted_message">{{ logout_message || user_deleted_message }}</h2>
    <div class="title-grid">
    <h2 class="sign_up">Sign Up</h2>
    <register-form></register-form>
    <h2 class="log_in">Log In</h2>
    <login-form></login-form>
  </div> </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "landing-page",
  components: {
    RegisterForm,
    LoginForm,
  },
  computed: {
      logout_message() {
          return this.$route.query.logout ? "You have successfully logged out!" : null
      },
      user_deleted_message() {
        return this.$route.query.user_deleted ? "Your user has been successfully deleted!" : null
      }
  },
  methods: {},
  
};
</script>

<style scoped>

.sign_up {
  margin-top: 100px;
  color: rgb(18, 152, 205);
}
.log_in {
  margin-top: 50px;
  color: rgb(18, 152, 205);
}
</style>