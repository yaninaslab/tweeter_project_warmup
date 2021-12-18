<template>
    <div>
<register-form></register-form>
<login-form></login-form>
    </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'
import LoginForm from '@/components/LoginForm.vue'
    export default {
        name: "landing-page", 
        components: {
            RegisterForm,
            LoginForm,
        },
    }
</script>

<style scoped>

</style>