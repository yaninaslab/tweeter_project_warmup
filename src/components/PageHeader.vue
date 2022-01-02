<template>
    <header>
        <img class="logo" src="../assets/logo.jpg" alt="" />
        <router-link class="links" to="/">Home</router-link>
        <router-link class="links" to="/feed">Feed</router-link>
        <router-link class="links" to="/profile">Profile</router-link>
    </header>
</template>

<script>
    export default {
        name: "page-header"
    }
</script>

<style scoped>
.logo {
  width: 300px;
}
header {
    width: 100%;
    min-height: 5vh;
    display: grid;
    place-items: center;
    grid-auto-flow: column;
}
.links {
    font-size: 1.5rem;
    color: rgb(18, 152, 205);
}
</style>