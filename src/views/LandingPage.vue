<template>
  <div>
      <page-header></page-header>
    <div class="title-grid">
      <h1 class="sign_up">Sign Up</h1>
      <h1 class="log_in">Log In</h1>
    </div>
    <register-form></register-form>
    <login-form></login-form>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue"
import PageFooter from "@/components/PageFooter.vue"
import RegisterForm from "@/components/RegisterForm.vue";
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "landing-page",
  components: {
    PageHeader,
    PageFooter,
    RegisterForm,
    LoginForm,
  },
  methods: {},
  data() {
    return {};
  },
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