<template>
  <button type="button" class="inv__btn btn btn-outline-dark openFilters" @click="openFilters">
    <img
      src="@/assets/img/filter.svg"
      style="width: 1.25vw; margin-right: 0.417vw"
      alt=""
    />
    фильтры
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
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.7vw;
}
.inv__btn,
.inv__inp {
  margin-right: 0.521vw;
}
</style>