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
  methods: {
    openFilters() {
      let filtersContainer = document.querySelector(".filters__container");
      filtersContainer.classList.add("filters__show");
    },
  }
}
</script>

<style>
.page__name h3 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
}

.page__name p {
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
    color: gray;
}
.form-select {
  border: 1px solid #A0AEC0 !important;
  border-radius: 8px;
}

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
