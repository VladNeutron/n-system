<template>
  <!-- ПЕРВОЕ -->
  <div class="modal-dialog modal__first modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header header__flex">
        <div class="modal__title">
          <p class="modal__text mb-0">Информация о компании</p>
          <p class="modal__steps">Шаг 1 из 3</p>
        </div>
        <div class="modal__pagination">
          <ul class="pagination pagination-info">
            <li class="page-item"></li>
            <li class="page-item active">
              <a class="page-link" href="#link">1</a>
            </li>
            <div class="chain"></div>
            <li class="page-item">
              <a class="page-link" href="#link" @click="secondStep">2</a>
            </li>
            <div class="chain"></div>
            <li class="page-item">
              <a class="page-link" href="#link" @click="thirdStep">3</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="modal-body row body__p">
        <div class="modal__labels__left col">
          <form action="">
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                id="CompanyName"
                placeholder="Название компании"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                id="PersonName"
                placeholder="ФИО Директора"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                id="INN"
                placeholder="ИИН/БИН"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="fcustomCheck1"
                checked=""
              />
              <div class="checkbox__btn">
                <label
                  class="custom-control-label label__text"
                  for="customCheck1"
                  >Я даю свое согласие на обработку<br />
                  персональных данных</label
                >
              </div>
            </div>
          </form>
        </div>
        <div class="modal__labels__right col">
          <form action="">
            <div class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                id="CompanyName"
                placeholder="Юридический адрес"
              />
            </div>
            <div class="form-group">
              <!-- <input
                  type="select"
                  class="form-control"
                  id="PersonName"
                  placeholder="Организационная форма"
                /> -->
              <div class="select">
                <select>
                  <option value="1">Организационная форма</option>
                  <option value="2">И.П</option>
                  <option value="3">Т.О.О</option>
                  <option value="3">О.О.О</option>
                </select>
              </div>
            </div>
            <div class="radio__btns">
              <p>Вы плательщик НДС?</p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="customRadio1"
                />
                <label class="custom-control-label" for="customRadio1"
                  >Да</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="customRadio2"
                  checked
                />
                <label class="custom-control-label" for="customRadio2"
                  >Нет</label
                >
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="modal-footer">
        <button
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    nextPage() {
      this.$emit("pageNum", 2);
    },
    thirdStep() {
      this.$emit("pageNum", 3);
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
}
.modal-dialog {
  max-width: 50.208vw;
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
  /* width: 18.75vw; */
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
  max-width: 50.208vw !important;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  border-radius: 8px;
  border: 0;
}
.modal-content {
  border: 0;
}
.radio__btns label{
  font-weight: 400;
  font-size: 14px;
}
.bg-gradient-secondary{
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
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
.pagination{
  align-items: center;
}
</style>