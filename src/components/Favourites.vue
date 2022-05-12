<template>
  <div class="filters__container" id="favourites__container">
    <div class="filters__header">
      <div class="filters__header__cont">
        <div class="filters__header__title"> &#9733; Избранные товары</div>
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
    <hr />
    <div class="filters__body">
      <div class="filtersGrid">
        <div class="cont" v-for="item in favourites" :key="item.id">
          <div :class="['favourite__itemCont', {'favourite__itemContActive':item.active}]" @click="addToCheck(item.id)">
            <div class="favourite__itemName">
              {{item.name}}
            </div>
            <div class="favourite__itemArticle">
              {{item.article}}
            </div>
            <div class="favourite__itemPrice">
              {{item.price}} ₸
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="filters__footer">
      <button class="btn filters__accept">Применить фильтры</button>
      <button class="btn filters__reset">Сбросить</button>
    </div> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      favourites: [
        {
          id: 123,
          name: 'Белые носки муж. высокие',
          article: 94756390,
          price: 750,
          active: false,
        },
        {
          id: 124,
          name: 'Черные носки',
          article: 94756390,
          price: 650,
          active: false,
        },
        {
          id: 125,
          name: 'Белые сапоги',
          article: 94756390,
          price: 2850,
          active: false,
        },
      ],
      selectedFavourites: [],
    }
  },
  methods: {
    filtersClose() {
      document
        .querySelector(".filters__container")
        .classList.remove("filters__show");
    },
    addToCheck(ide){
      // console.log(ide)
      if(this.favourites.filter(el => {return el.id == ide})[0].active == false){
        this.favourites.filter(el => {return el.id == ide})[0].active = true;
      }
      else{
        this.favourites.filter(el => {return el.id == ide})[0].active = false;
      }
      // el.classList.toggle('favourite__itemContActive')
    }
  },
  mounted() {
    document.querySelector("body").onclick = function (event) {
      if (
        !event.target.closest("#favourites__container") &&
        !event.target.closest(".openFilters")
      ) {
        console.log(event.target);
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
  margin-top: 6.354vw;
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
}
.filters__show {
  right: 0;
}
.filters__header {
  display: flex;
  padding: 3.125vw 2.083vw 16px 2.083vw;
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
  padding: 1.667vw 2.083vw 1.563vw 2.083vw;
}
.filters__body .filter__name__standart {
  font-weight: 600;
  font-size: 20px;
  color: #2d3748;
  text-align: left;
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

/* FAVOURITES */
.favourite__itemCont{
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #E2E8F0;
  border-radius: 12px;
  min-height: 160px;
  height: 100%;
  cursor: pointer;
}
.favourite__itemName{
  font-weight: 400;
  line-height: 22px;
  font-size: 20px;
  color: #2D3748;
  text-align: left;
}
.favourite__itemArticle{
  font-weight: 400;
  font-size: 14px;
  color: #2D3748;
  text-align: left;
}
.favourite__itemPrice{
  font-weight: 700;
  font-size: 30px;
  color: #2D3748;
  text-align: right;
}
.favourite__itemContActive{
  background: #313860;
  color: white;
}
.favourite__itemContActive .favourite__itemName{
  color: white;
}
.favourite__itemContActive .favourite__itemPrice{
  color: white;
}
.favourite__itemContActive .favourite__itemArticle{
  color: rgba(255, 255, 255, 0.5);
}
.filtersGrid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}
</style>