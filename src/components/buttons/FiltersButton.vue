<template>
  <button type="button" class="inv__btn btn btn-outline-dark openFilters mb-0" @click="openFilters">

    ФИЛЬТРЫ
  </button>


  <!-- old -->
  
  <!-- <button class="btn btn-outline-dark mb-0 openFilters" @click="openFilters">
        Фильтры
    </button> -->
</template>

<script>
export default {
  methods: {
    openFilters() {
      let filtersContainer = document.querySelector(".filters__container");
      filtersContainer.classList.add("filters__show");
    },
  },
};
</script>

<style scoped>
.inv__btn {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  height: 40px;
}
.inv__btn,
.inv__inp {
  margin-right: 0.521vw;
}
</style>