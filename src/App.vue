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
  <!-- <delete-modal>
    <template #header>
      <p class="modal__title">
        Вы уверены, что хотите удалить документ “Инвентаризация №19”?
      </p>
    </template>
  </delete-modal> -->
</template>

<script>
export default {
  methods: {
    openFilters() {
      let filtersContainer = document.querySelector(".filters__container");
      filtersContainer.classList.add("filters__show");
    },
  },
  mounted(){
  }
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
