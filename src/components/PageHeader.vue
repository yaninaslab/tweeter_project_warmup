<template>
  <div>
    <div class="mobile_header">
      <img class="logo" src="../assets/logo.jpg" alt="" />
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div class="menu_drop">
        <router-link class="mobile_links" to="/">Home</router-link>
        <router-link class="mobile_links" to="/feed">Feed</router-link>
        <router-link class="mobile_links" to="/profile">Profile</router-link>
      </div>
    </div>
    <div class="nav_menu">
      <img class="logo" src="../assets/logo.jpg" alt="" />
      <router-link class="links" to="/">Home</router-link>
      <router-link class="links" to="/feed">Feed</router-link>
      <router-link class="links" to="/profile">Profile</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-header",
};
</script>

<style scoped>
.mobile_header {
  max-width: 100%;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  min-height: 120px;
}
.mobile_header > img {
    justify-self: start;
    width: 120px;
}
.nav_menu {
    display: none;
    justify-self: end;
    grid-auto-flow: column;
    padding-right: 10px;
    column-gap: 20px;
}
.bar {
  width: 25px;
  height: 3px;
  background-color: skyblue;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  display: block;
}
.hamburger {
  display: block;
  justify-self: end;
  padding-right: 10px;
  cursor: pointer;
}
.logo {
  max-width: 300px;
}
.links {
  font-size: 1.5rem;
  color: rgb(18, 152, 205);
}
.mobile_links {
    font-size: 1.2rem;
    color: rgb(18, 152, 205);
    text-decoration: none;
}
.menu_drop {
    display: none;
    position: absolute;
    left: 10px;
    width: 100%;
    top: 50px;
    z-index: 99;
}
.hamburger:hover + .menu_drop {
  display: grid;
  place-content: center;
  row-gap: 10px;
  margin-top: 5%;
  z-index: 99;
}
@media only screen and (min-width: 300px) {
  .nav_menu {
    display: none;
  }
  .bar {
    display: grid;
  }
}
@media only screen and (min-width: 668px) {
  .bar {
    display: none;
  }
  .mobile_header {
    display: none;
  }
  .nav_menu {
    width: 100%;
    min-height: 5vh;
    display: grid;
    place-items: center;
    grid-auto-flow: column;
  }
}
</style>