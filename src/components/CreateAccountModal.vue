<template>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header header__flex">
        <div class="modal__title">
          <p class="modal__text mb-0">Создание аккаунта</p>
          <p class="modal__steps">Шаг 3 из 3</p>
        </div>
        <div class="modal__pagination">
          <ul class="pagination pagination-info">
            <li class="page-item"></li>
            <li class="page-item active">
              <a class="page-link" href="#link" @click="firstStep">1</a>
            </li>
            <div class="chain chain__active"></div>
            <li class="page-item active">
              <a class="page-link" href="#link" @click="secondStep">2</a>
            </li>
            <div class="chain chain__active"></div>
            <li class="page-item active">
              <a class="page-link">3</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="modal-body body__p">
        <div class="d-flex justify-content-center">
          <img src="@/assets/img/rocket.svg" style="width: 6.167vw" alt="" />
        </div>
        <div class="d-flex justify-content-center">
          <p class="create__title">Здорово! Мы почти закончили</p>
        </div>
        <div class="d-flex justify-content-center">
          <p class="create__desc">
            Вся информация, введенная вами успешно сохранена и защищена командой
            Neutron System. Мы создали для вас аккаунт и уже готовы начать
            помогать вам в вашем бизнесе!
          </p>
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn bg-gradient-secondary"
          onclick="window.location.href = '/'"
        >
          НАЧАТЬ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    firstStep() {
      this.$emit("pageNum", 1);
    },
    secondStep() {
      this.$emit("pageNum", 2);
    },
  },
  emits:{
        pageNum: Number
    },
};
</script>

<style scoped>
.body__p {
  padding: 2.396vw 7.604vw 0 7.604vw;
}
.create__title {
  font-weight: 700;
  font-size: 1.25vw;
  color: #2d3748;
}
.create__desc {
  font-weight: 400;
  font-size: 1.042vw;
  color: #a0aec0;
}
.page-item {
  margin-right: 0vw;
}
.page-link{
  margin-right: 0;
}
.pagination.pagination-info .page-item.active > .page-link,
.pagination.pagination-info .page-item.active > .page-link:focus,
.pagination.pagination-info .page-item.active > .page-link:hover {
  background-image: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border: none;
}
.bg-gradient-secondary {
  display: flex;
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  font-weight: 700;
  font-size: 0.833vw;
  padding: 0.625vw 4.219vw 0.625vw 4.219vw;
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
  justify-content: center;
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
.page-item .page-link, .page-item span{
  width: 45px;
  height: 45px;
  font-size: 22px;
  
}
.pagination.pagination-info .page-item.active > .page-link{
  font-weight: 700;
}
.chain{
  width: 26px;
  height: 2px;
  background-color: rgba(160, 174, 192, 1);
}
.chain__active{
  background: linear-gradient(83.56deg, #7092E0 10.01%, #8BAEF3 75.36%)
}
.pagination{
  align-items: center;
}
</style>