<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/table">Table</router-link> |
    <router-link to="/create-inv-list">Create Inventory</router-link>
  </nav>
    <router-link to="/table">Table</router-link>
  </nav> -->
  <router-view />
</template>

<script>
export default {
  methods:{
    openFilters(){
      let filtersContainer = document.querySelector(".filters__container");
      filtersContainer.classList.add("filters__show");
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #f8f9fa !important;
}

nav {
  /* padding: 30px; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
