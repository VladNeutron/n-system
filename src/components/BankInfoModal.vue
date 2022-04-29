<template>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header header__flex">
        <div class="modal__title">
          <p class="modal__text">Информация о компании</p>
          <p class="modal__steps">Шаг 2 из 3</p>
        </div>
        <div class="modal__pagination">
          <ul class="pagination pagination-info">
            <li class="page-item"></li>
            <li class="page-item active">
              <a class="page-link" href="#link" @click="firstStep">1</a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#link">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#link">3</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="modal-body body__p">
        <div v-if="isAdded" class="overflow__bank">
          <div class="row">
            <div class="col bank__width" v-for="item in items" :key="item">
              <div class="info__block">
                <div class="info__content">
                  <div class="bank__name">
                    <div class="bank__name__title">
                      <p class="bank__title">{{ item.name }}</p>
                      <div class="bank__money__type">
                        <img :src="item.img" style="width: 0.625vw" alt="" />
                      </div>
                    </div>
                    <img
                      src="@/assets/img/edit.svg"
                      style="width: 0.938vw; cursor: pointer"
                      alt=""
                    />
                  </div>
                  <div class="bank__info">
                    <div class="bank__info-content">
                      <p class="info__left">Банк:</p>
                      <p class="info__right">
                        {{ item.fullName }}
                      </p>
                    </div>
                    <div class="bank__info-content">
                      <p class="info__left">БИК:</p>
                      <p class="info__right">{{ item.bik }}</p>
                    </div>
                    <div class="bank__info-content">
                      <p class="info__left">КБЕ:</p>
                      <p class="info__right">{{ item.kbe }}</p>
                    </div>
                    <div class="bank__info-content">
                      <p class="info__left">ИИК:</p>
                      <p class="info__right">{{ item.iik }}</p>
                    </div>
                    <div class="bank__info-content">
                      <p class="info__left">ИИН/БИН:</p>
                      <p class="info__right">{{ item.inn }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
        <div v-else>
          <div class="d-flex justify-content-center">
            <img src="@/assets/img/addbank.svg" style="width: 4.167vw" alt="" />
          </div>
          <div class="d-flex justify-content-center">
            <p class="bank__text">Добавьте свои банковские счета</p>
          </div>
          <div class="d-flex justify-content-center">
            <button
              class="bank__btn"
              data-bs-toggle="modal"
              data-bs-target="#InfoThird"
            >
              <img
                src="@/assets/img/plus.svg"
                style="width: 0.833vw; margin-right: 0.833vw"
                alt=""
              />
              Добавить счет
            </button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button
          v-if="isAdded"
          type="button"
          class="btn bg-gradient-secondary"
          @click="nextPage"
        >
          Продолжить
          <img
            src="@/assets/img/next.svg"
            style="width: 0.833vw; margin-left: 1.25vw"
            alt=""
          />
        </button>
        <button
          v-else
          type="button"
          class="btn bg-gradient-secondary"
          @click="nextPage"
        >
          Пропустить
        </button>
      </div>
    </div>
  </div>
  <add-bank-info-modal></add-bank-info-modal>
</template>

<script>
import AddBankInfoModal from "./AddBankInfoModal.vue";
export default {
  data() {
    return {
      isAdded: false,
      items: [
        {
          name: "Сбербанк Основной",
          fullName: "Дочерний банк акционерное общество «Сбербанк»",
          bik: "SABRKZKA",
          kbe: "14",
          iik: "KZ82125KZT1001300306",
          inn: "881206784000",
          img: require("@/assets/img/euro.svg"),
        },
        {
          name: "Kaspi Bank",
          fullName: "Aкционерное общество «Kaspi Bank»",
          bik: "SABRKZKA",
          kbe: "14",
          iik: "KZ82125KZT1001300306",
          inn: "881206784000",
          img: require("@/assets/img/dollar.svg"),
        },
        {
          name: "Сбербанк Тенге",
          fullName: "Дочерний банк акционерное общество «Сбербанк»",
          bik: "SABRKZKA",
          kbe: "14",
          iik: "KZ82125KZT1001300306",
          inn: "881206784000",
          img: require("@/assets/img/tenge.svg"),
        },
      ],
    };
  },
  components: {
    AddBankInfoModal,
  },
  methods: {
    nextPage() {
      this.$emit("pageNum", 3);
    },
    firstStep() {
      this.$emit("pageNum", 1);
    },
  },
  emits:{
        pageNum: Number
    },
};
</script>

<style scoped>
.overflow__bank::-webkit-scrollbar {
  background: #e2e8f0;
  border-radius: 0.78vw;
  width: 0.37vw;
}
.overflow__bank::-webkit-scrollbar-thumb {
  border-radius: 0.78vw;
  background-color: #a0aec0;
}
.overflow__bank::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.78vw;
  background-color: #e2e8f0;
}
.bank__width {
  max-width: 22.188vw !important;
}
.overflow__bank {
  height: 19.792vw;
  overflow: scroll;
  overflow-x: hidden;
}
.info__left {
  font-weight: 400;
  font-size: 0.833vw;
  color: #a0aec0;
}
.info__right {
  font-weight: 600;
  font-size: 0.833vw;
  color: #2d3748;
  text-align: right;
  padding-left: 4.625vw;
}
.bank__info-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.417vw;
}
.bank__money__type {
  display: flex;
  justify-content: center;
  width: 1.354vw;
  height: 1.354vw;
  background: #e2e8f0;
  border-radius: 5px;
}
.bank__name__title {
  display: flex;
}
.bank__title {
  font-weight: 600;
  font-size: 1.042vw;
  color: #2d3748;
  margin-right: 0.417vw;
}
.bank__name {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.info__content {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 0.833vw 0.833vw 1.25vw 0.833vw;
}
.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  padding: 0.625vw 3.385vw 0.625vw 3.385vw;
  font-weight: 700;
  font-size: 0.833vw;
  text-transform: none;
}
.pagination.pagination-info .page-item.active > .page-link,
.pagination.pagination-info .page-item.active > .page-link:focus,
.pagination.pagination-info .page-item.active > .page-link:hover {
  background-image: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border: none;
}

.bank__text {
  padding-top: 1.667vw;
  font-weight: 700;
  font-size: 1.25vw;
  color: #2d3748;
  letter-spacing: -0.66383px;
}
.body__p {
  padding-top: 2.396vw;
  margin-bottom: 2vw;
}
.bank__btn {
  display: flex;
  align-items: center;
  border: 1px dashed #2d3748;
  border-radius: 12px;
  padding: 1.25vw 7.292vw 1.25vw 7.292vw;
  color: #2d3748;
  font-weight: 600;
  font-size: 0.833vw;
  background: transparent;
}
.page-item {
  margin-right: 1.25vw;
}
.active {
  color: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
}
.bg-gradient-secondary {
  display: flex;
  align-items: center;
}
.modal-dialog {
  max-width: 50.208vw;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  border-radius: 8px;
  border: 0;
}
.form-control {
  border: 1px solid #7092e0;
}
option {
  color: 000;
}
select {
  /* Reset Select */
  appearance: none;
  outline: 0;
  border: 1px solid #7092e0;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: none;
  /* Personalize */
  flex: 1;
  padding: 0 1em;
  color: #000;
  background-color: transparent;
  background-image: none;
  cursor: pointer;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select wrapper */
.select {
  position: relative;
  display: flex;
  width: 18.75vw;
  height: 3em;
  border-radius: 0.25em;
  overflow: hidden;
}
/* Arrow */
.select::after {
  content: "\25BC";
  position: absolute;
  top: -0.26vw;
  right: 0;
  padding: 1em;
  background-color: transparent;
  transition: 0.25s all ease;
  pointer-events: none;
}
/* Transition */
.select:hover::after {
  color: #7092e0;
  transform: rotate(180deg);
}
.select:active::after {
  color: #7092e0;
  transform: rotate(180deg);
}
.label__text {
  font-weight: 400;
  font-size: 0.729vw;
  color: #252f40;
}
.checkbox__btn {
  text-align: left;
}
.radio__btns {
  text-align: left;
}
.body__p {
  padding: 2.344vw 2.083vw 0 2.083vw;
}
.modal__title {
  text-align: left;
}
.modal-header {
  padding: 1.458vw 2.083vw 1.094vw 2.083vw;
}
.modal__steps {
  font-weight: 400;
  font-size: 0.833vw;
  letter-spacing: -0.442553px;
  color: #a0aec0;
}
.modal__text {
  font-weight: 700;
  font-size: 1.563vw;
  letter-spacing: -0.829787px;
  color: #252f40;
}
.header__flex {
  display: flex;
}
.modal-footer {
  border-top: 0;
  padding-right: 2.083vw;
  padding-bottom: 1.744vw;
}
.modal__first {
  max-width: 42.969vw !important;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  border-radius: 8px;
  border: 0;
}
.modal-content {
  border: 0;
}
</style>