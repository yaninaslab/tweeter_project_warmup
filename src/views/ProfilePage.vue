<template>
    <div>
<user-profile></user-profile>
<delete-user @user_deleted="react_to_user_deleted"></delete-user>
    </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue"
import DeleteUser from "@/components/DeleteUser.vue"
    export default {
        name: "profile-page", 
        components: {
            UserProfile,
            DeleteUser,
        },
        methods: {
            react_to_user_deleted(payload) {
                this.success_message = payload; 
                
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

</style>