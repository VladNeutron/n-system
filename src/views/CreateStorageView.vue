<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <storage>
      <template #storage>
        <div class="storage__padding">
          <div class="storage__header">
            <div class="storage__name">
              <p class="storage__main">Новый склад</p>
              <p class="storage__sec">
                Заполните данные о складе и нажмите “Сохранить”
              </p>
            </div>
            <div class="storage__save">
              <button type="button" class="btn bg-gradient-secondary">
                Сохранить
              </button>
            </div>
          </div>

          <!-- main -->
          <div class="storage__desc">
            <div class="storage__img">
              <div class="storage__img-content">
                <p class="storage__img-text">Изображение склада</p>
                <div>
                  <img
                    src="@/assets/img/storage__noimg.png"
                    style="width: 23.021vw"
                    alt=""
                  />
                </div>
                <div class="storage__img-buttons">
                  <button type="button" class="btn btn-outline-info">
                    Удалить
                  </button>
                  <button type="button" class="btn bg-gradient-info">
                    Загрузить фото
                  </button>
                </div>
              </div>
            </div>
            <div class="storage__create">
              <div class="storage__create-content">
                <div>
                  <p class="storage__create-desc">Описание</p>
                </div>

                <div class="storage__create-inputs">
                  <div class="storage__name__adres">
                    <div class="storage__name">
                      <label for="name" class="storage__label"
                        >Название склада</label
                      >
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Введите название"
                        />
                      </div>
                    </div>

                    <div class="storage__adres">
                      <label for="adres" class="storage__label"
                        >Адрес склада</label
                      >
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="adres"
                          placeholder="Введите адрес"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="storage__textarea">
                    <div class="form-group">
                      <label for="textarea" class="storage__label"
                        >Комментарии</label
                      >
                      <textarea
                        class="form-control area"
                        id="textarea"
                        rows="3"
                        placeholder="Комментариев нет"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- footer -->
          <div class="storage__footer">
            <div class="storage__types">
              <div class="storage__types-content">
                <div>
                  <p class="storage__types-text">Тип склада</p>
                </div>
                <div class="row checkboxes">
                  <div class="col">
                    <div class="form-check types">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="customCheck2"
                      />
                      <label
                        class="custom-control-label type__label"
                        for="customCheck2"
                        >Доставка</label
                      >
                      <div class="dropdown">
                        <img
                          src="@/assets/img/info.svg"
                          style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          "
                          alt=""
                        />
                        <div class="dropdown-content">
                          <p>
                            Если отмечено - возможны только кассовые операции,
                            если нет - только заказ онлайн
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="form-check types">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="customCheck3"
                      />
                      <label
                        class="custom-control-label type__label"
                        for="customCheck3"
                        >Пункт самовывоза</label
                      >
                      <div class="dropdown">
                        <img
                          src="@/assets/img/info.svg"
                          style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          "
                          alt=""
                        />
                        <div class="dropdown-content">
                          <p>
                            Если отмечено - возможны только кассовые операции,
                            если нет - только заказ онлайн
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="form-check types">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="customCheck4"
                      />
                      <label
                        class="custom-control-label type__label"
                        for="customCheck4"
                        >Торговая точка</label
                      >
                      <div class="dropdown">
                        <img
                          src="@/assets/img/info.svg"
                          style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          "
                          alt=""
                        />
                        <div class="dropdown-content">
                          <p>
                            Если отмечено - возможны только кассовые операции,
                            если нет - только заказ онлайн
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col right__col">
                    <div class="form-check types">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="customCheck5"
                      />
                      <label
                        class="custom-control-label type__label"
                        for="customCheck5"
                        >Розничный склад</label
                      >
                      <div class="dropdown">
                        <img
                          src="@/assets/img/info.svg"
                          style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          "
                          alt=""
                        />
                        <div class="dropdown-content">
                          <p>
                            Если отмечено - возможны только кассовые операции,
                            если нет - только заказ онлайн
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="form-check types">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="customCheck6"
                      />
                      <label
                        class="custom-control-label type__label"
                        for="customCheck6"
                        >Оптовый склад</label
                      >
                      <div class="dropdown">
                        <img
                          src="@/assets/img/info.svg"
                          style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          "
                          alt=""
                        />
                        <div class="dropdown-content">
                          <p>
                            Если отмечено - возможны только кассовые операции,
                            если нет - только заказ онлайн
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="form-check types">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="customCheck7"
                      />
                      <label
                        class="custom-control-label type__label"
                        for="customCheck7"
                        >Интернет-магазин</label
                      >
                      <div class="dropdown">
                        <img
                          src="@/assets/img/info.svg"
                          style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          "
                          alt=""
                        />
                        <div class="dropdown-content">
                          <p>
                            Если отмечено - возможны только кассовые операции,
                            если нет - только заказ онлайн
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="storage__add-cash">
              <div class="storage__cash-content">
                <div class="cash__header">
                  <p class="cash__text">Список касс</p>
                  <img
                    src="@/assets/img/move.svg"
                    style="width: 1.25vw"
                    alt=""
                  />
                </div>
                <div class="cash__body">
                  <button
                    class="cash__btn"
                    data-bs-toggle="modal"
                    data-bs-target="#InpModal"
                  >
                    <img src="@/assets/img/plus.svg" style="0.833vw" alt="" />
                    Добавить кассу
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </storage>
  </main>
  <inputs-modal>
    <template #head>
      <div style="text-align: left">
        <p class="header__main">Добавление кассы</p>
        <p class="header__sec">
          Введите название кассы и нажмите “Добавить кассу”
        </p>
      </div>
    </template>
    <template #body>
      <div class="body__content">
        <div class="form-group" style="text-align: left">
          <input
            type="text"
            class="form-control modal__inp form-control-lg"
            id="exampleFormControlInput1"
            placeholder="Название кассы"
          />
        </div>
      </div>
    </template>
    <template #footer>
      <div class="footer__btn">
        <button class="footer__button">Добавить кассу</button>
      </div>
    </template>
  </inputs-modal>
</template>

<script>
import InputsModal from "../components/InputsModal.vue";
import Storage from "../components/Storage.vue";
export default {
  components: {
    Storage,
    InputsModal,
  },
};
</script>

<style scoped>
.header__sec {
  font-weight: 400;
  font-size: 0.833vw;
  color: #a0aec0;
}
.header__main {
  margin: 0;
  font-weight: 700;
  font-size: 1.563vw;
  color: #252f40;
}
.modal__inp {
  width: 100% !important;
}
.label__check {
  font-weight: 400;
  font-size: 0.833vw;
  color: #252f40;
}
.footer__button {
  font-weight: 700;
  font-size: 0.833vw;
  color: #fff;
  border: 0;
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.729vw 5.906vw 0.729vw 5.906vw;
}
.footer__btn {
  display: flex;
  justify-content: center;
}
.label__text {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}
.body__content {
  padding: 1.25vw 2.083vw 0 2.083vw;
}
.cash__body {
  margin-top: 3.646vw;
}
.cash__btn {
  border: 1px dashed #2d3748;
  border-radius: 12px;
  background: transparent;
  font-weight: 600;
  font-size: 0.833vw;
  color: #2d3748;
  padding: 1.25vw 6.51vw 1.25vw 8.177vw;
}
.cash__text {
  font-weight: 600;
  font-size: 1.042vw;
  color: #2d3748;
}
.cash__header {
  display: flex;
  justify-content: space-between;
}
.storage__cash-content {
  padding: 1.25vw 1.25vw 1.25vw 1.25vw;
}
.storage__add-cash {
  width: 43.594vw;
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  margin-left: 1.667vw;
}
.dropdown {
  display: inline-block;
  position: relative;
}
.dropdown-content {
  text-align: left;
  display: none;
  position: absolute;
  width: 7.815vw;
  overflow: auto;
  background: #000000;
  border-radius: 8px;
  box-shadow: 2px 2px 5.5px rgba(0, 0, 0, 0.25);
  right: 0;
  top: 0;
  left: 2.906vw;
  z-index: 1;
  padding: 4px 7px 4px 9px;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-content p {
  display: block;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.625vw;
  margin: 0;
}
.types {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.771vw;
}
.right__col {
  margin-left: 1.406vw;
}
.checkboxes {
  align-items: left;
}
.type__label {
  align-items: left;
  color: #2d3748;
  font-weight: 400;
  font-size: 0.833vw;
}
.storage__types-text {
  text-align: left;
  font-weight: 600;
  font-size: 1.042vw;
  color: #2d3748;
}
.storage__types-content {
  padding: 1.25vw 8.073vw 1.156vw 1.25vw;
}
.storage__types {
  width: 37.135vw;
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
}
.storage__footer {
  display: flex;
  margin-top: 1.667vw;
}
.storage__checkbox {
  margin-top: 1.667vw;
}
.storage__textarea,
.storage__checkbox {
  text-align: left;
}
.area {
  width: 42.188vw !important;
}
.form-control {
  width: 19.792vw;
  border: 1px solid #a0aec0;
  font-weight: 400;
  font-size: 0.729vw;
  color: #2d3748;
}
.storage__adres {
  text-align: left;
}
.storage__label {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}
.storage__name {
  margin-right: 2.604vw;
}
.storage__name__adres {
  display: flex;
}
.storage__create-desc {
  text-align: left;
  font-weight: 600;
  font-size: 1.042vw;
  color: #2d3748;
}
.storage__create-content {
  padding: 1.25vw 11.771vw 1.906vw 1.25vw;
}
.storage__create {
  width: 54.408vw;
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  margin-left: 1.667vw;
}
.bg-gradient-info {
  padding: 0.521vw 1.25vw 0.521vw 1.25vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #fff;
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
}
.btn-outline-info {
  border: 1px solid #a0aec0;
  padding: 0.521vw 1.25vw 0.521vw 1.25vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #a0aec0;
  margin-right: 0.833vw;
}
.btn-outline-info:hover {
  color: #7092e0;
}
.storage__img-buttons {
  text-align: right;
  margin-top: 1.25vw;
}
.storage__img-text {
  text-align: left;
  font-weight: 600;
  font-size: 1.042vw;
  color: #2d3748;
}
.storage__img-content {
  padding: 1.25vw 1.25vw 1.25vw 1.25vw;
}
.storage__img {
  width: 25.521vw;
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
}
.storage__desc {
  display: flex;
  margin-top: -0.75vw;
}
.storage__sec {
  font-weight: 400;
  font-size: 0.729vw;
  color: #a0aec0;
}
.storage__main {
  margin: 0;
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
}
.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  font-weight: 700;
  font-size: 0.833vw;
  padding: 0.729vw 3.302vw 0.729vw 3.302vw;
  text-transform: none;
}
.storage__name {
  text-align: left;
}
.storage__header {
  display: flex;
  justify-content: space-between;
}
.storage__padding {
  padding: 1.475vw 2.083vw 1vw 2.083vw;
}
</style>