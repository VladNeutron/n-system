<template>
  <div class="filters__container" id="filters__container">
    <div class="filters__header">
      <div class="filters__header__cont">
        <div class="filters__header__title">Фильтры</div>
        <div class="filters__header__text">
          Задайте свои настройки и нажмите “Применить”
        </div>
      </div>
      <img
        src="@/assets/img/filtersClose.svg"
        alt=""
        class="filters__close__img"
        @click="filtersClose"
      />
    </div>
    <hr class="hr__header" />
    <div class="filters__body">
      <slot> Фильтр </slot>
    </div>
    <div class="filters__footer">
      <button class="btn filters__accept" @click="$emit('filter-list')">
        Применить фильтры
      </button>
      <button class="btn filters__reset" @click="$emit('no-filter')">
        Сбросить
      </button>
    </div>
  </div>

  <!-- Components -->
  <!-- PERIOD -->
  <!-- <div class="filters__period__flex">
    <div class="filter__name__standart">Выберите период</div>
    <div class="reset__date">Сбросить период</div>
  </div>
  <div class="filters__period">
    <div class="form-group">
      <input class="form-control" type="date" id="example-date-input" />
    </div>
    <div>
      <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
    </div>
    <div class="form-group">
      <input class="form-control" type="date" id="example-date-input" />
    </div>
  </div> -->
  <!-- DROPDOWN -->
  <!-- <label class="text-start" for=""></label>
  <select class="form-select">
    <option></option>
  </select> -->
  <!-- CHECKBOX -->
  <!-- <div class="form-check" style="text-align: left; margin-top: 0.833vw">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="fcustomCheck1"
        />
        <label
          class="custom-control-label filters__checkbox__label"
          for="customCheck1"
          >Есть в наличии</label
        >
      </div> -->
</template>

<script>
export default {
  data() {
    return {};
  },
  emits: {
    "filter-list": {},
    "no-filter": {},
  },
  methods: {
    filtersClose() {
      document
        .querySelector(".filters__container")
        .classList.remove("filters__show");
    },
  },
  computed: {},
  mounted() {
    document.querySelector("body").onclick = function (event) {
      if (
        !event.target.closest("#filters__container") &&
        !event.target.closest(".openFilters")
      ) {
        // console.log(event.target);
        if (document.querySelector(".filters__show")) {
          document
            .querySelector(".filters__container")
            .classList.remove("filters__show");
        }
      }
    };
  },
};
</script>

<style scoped>
.filters__reset {
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.833vw;
  color: #2d3748;
  text-transform: none;
  padding: 0.729vw 0 0.729vw 0;
  width: 18.75vw;
  border: 1px solid #2d3748;
}
.filters__accept {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.833vw;
  color: #ffffff;
  text-transform: none;
  padding: 0.729vw 0 0.729vw 0;
  width: 18.75vw;
}
.filters__footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 1vw;
}
.filters__container {
  width: 550px;
  height: 100vh;
  z-index: 1200;
  position: fixed;
  right: -550px;
  top: 0px;
  background-color: white;
  transition: all 0.8s;
  box-shadow: -10px 0px 40px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.filters__container::-webkit-scrollbar {
    width: 5px;
}
.filters__container::-webkit-scrollbar-track {
    background-color: #E9ECEF;
    border-radius: 5px;
}
.filters__container::-webkit-scrollbar-thumb {
    background-color: #313860;
    border-radius: 8px;
}
.filters__show {
  right: 0;
}
.filters__header {
  display: flex;
  padding: 1.125vw 2.083vw 10px 2.083vw;
  justify-content: space-between;
  align-items: baseline;
}
.filters__header__title {
  text-align: left;
  font-weight: 700;
  font-size: 30px;
  color: #252f40;
}
.filters__header__text {
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  color: #a0aec0;
}
.filters__close__img {
  cursor: pointer;
}
.filters__body {
  padding: 0.267vw 2.083vw 0.563vw 2.083vw;
}
.filters__body .filter__name__standart {
  font-weight: 600;
  font-size: 20px;
  color: #2d3748;
  text-align: left;
}
.hr__header{
  margin: 10px 0;
}
</style>
<style>
.filters__checkbox__label {
  font-weight: 400;
  font-size: 0.729vw;
  color: #252f40;
}
.filters__period__flex {
  display: flex !important;
  justify-content: space-between;
  align-items: flex-end;
}
.reset__date {
  font-weight: 400;
  font-size: 0.729vw;
  color: #2d3748;
  text-decoration: underline;
  cursor: pointer;
}
.filters__body .filter__name__standart {
  font-weight: 600;
  font-size: 20px;
  color: #2d3748;
  text-align: left;
}
.filters__period {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 0.833vw;
  margin-bottom: 0.833vw;
}
</style>
