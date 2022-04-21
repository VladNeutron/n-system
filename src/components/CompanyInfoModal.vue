<template>
<!-- ПЕРВОЕ -->
<div
      class="modal-dialog modal__first modal-dialog-centered"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header header__flex">
          <div class="modal__title">
            <p class="modal__text">Информация о компании</p>
            <p class="modal__steps">Шаг 1 из 3</p>
          </div>
          <div class="modal__pagination">
            <ul class="pagination pagination-info">
              <li class="page-item"></li>
              <li class="page-item active">
                <a class="page-link" href="#link">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#link">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#link">3</a>
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
                    <option value="2">ООО</option>
                    <option value="3">ОАО</option>
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
          <button type="button" class="btn bg-gradient-secondary">
            Продолжить <img src="@/assets/img/next.svg" style="width:0.833vw; margin-left:1.25vw;" alt="">
          </button>
        </div>
      </div>
    </div>
  

  <!-- ВТОРОЕ -->
  <div
    class="modal fade"
    id="InfoSecond"
    tabindex="-1"
    role="dialog"
    aria-labelledby="InfoSecond"
    aria-hidden="true"
  >
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
              <li class="page-item">
                <a class="page-link" href="#link">1</a>
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
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn bg-gradient-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn bg-gradient-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ТРЕТЬЕ -->
  <div
    class="modal fade"
    id="InfoThird"
    tabindex="-1"
    role="dialog"
    aria-labelledby="InfoThird"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header"></div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn bg-gradient-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn bg-gradient-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-item{
    margin-right:1.25vw;
} 
.active{
    color: linear-gradient(83.56deg, #7092E0 10.01%, #8BAEF3 75.36%);
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
}
</style>