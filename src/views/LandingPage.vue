<template>
  <div>
      <h2 v-if="logout_message || user_deleted_message">{{ logout_message || user_deleted_message }}</h2>
    <div class="title-grid">
      <h1 class="sign_up">Sign Up</h1>
      <h1 class="log_in">Log In</h1>
    </div>
    <register-form></register-form>
    <login-form></login-form>
  </div>
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
.title-grid {
  display: grid;
  place-content: center;
  grid-auto-flow: column;
  column-gap: 480px;
  margin-top: 30px;
}
.sign_up {
  color: rgb(18, 152, 205);
}
.log_in {
  color: rgb(18, 152, 205);
}
</style>