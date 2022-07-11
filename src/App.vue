<template>
<the-navbar v-if="mainContainer"></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header v-if="mainContainer"></the-header>
  <router-view />
  </main>
</template>

<script>
export default {
  methods: {
    openFilters() {
      let filtersContainer = document.querySelector(".filters__container");
      filtersContainer.classList.add("filters__show");
    },
  },
  mounted() { console.log(this.$route) },
  computed:{
    mainContainer(){
      if(this.$route.name=='login' || this.$route.name=='register' || this.$route.name == 'company-info'){
        return false
      } 
      return true
    }
  },
};
</script>

<style>
.not__added {
  padding-bottom: 150px;
}

.filter__name__standart {
  font-weight: 600;
  font-size: 20px;
  color: #2d3748;
  text-align: left;
}

input[type="datetime-local"] {
  width: 191px;
  height: 40.39px;
}

input[type="date"] {
  width: 191px;
  height: 40.39px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  color: #2d3748;
  position: relative;
  opacity: 1;
  cursor: pointer;
  font-size: 27px;
}

input[type="datetime-local"]::-webkit-calendar-picker-indicator {
  color: #2d3748;
  position: relative;
  opacity: 1;
  cursor: pointer;
  font-size: 27px;
}

.form-select:hover:focus {
  background-image: url(@/assets/img/arrow__flip.svg) !important;
  transition: 0.3s;
}

table th {
  font-size: 12px;
  font-weight: 600;
  color: rgba(160, 174, 192, 1);
}

td {
  font-size: 14px;
  color: #2d3748;
  font-weight: 600;
}

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
  border: 1px solid #a0aec0 !important;
  border-radius: 8px;
  background-image: url(@/assets/img/arrow.svg) !important;
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
