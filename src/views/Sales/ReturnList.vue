<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="order__header">
        <div class="order__header-content">
          <div class="order__header-main pt-2">
            <div class="order__header-text">
              <p class="order__header__main">Возврат №342141</p>
              <p class="order__header__sec">
                Настройте все параметры и нажмите “Сохранить”
              </p>
            </div>
            <div class="drop__buttons">
              <comment-button style="margin-right: 24px"></comment-button>
              <action-button style="margin-right: 24px"></action-button>
              <button class="btn save__btn" onclick="window.location.href = '/sales/return-list'">Сохранить</button>
            </div>
          </div>
          <div class="order__body">
            <div class="row">
              <div class="col-9">
                <div class="order__body__content">
                  <div class="order__first__row">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label order__label"
                        >№ Возврата</label
                      >
                      <input
                        class="form-control"
                        type="text"
                        id="example-text-input"
                        placeholder="№ 9876543"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="example-date-input"
                        class="form-control-label order__label"
                        >Дата возврата</label
                      >
                      <input
                        class="form-control"
                        type="date"
                        id="example-date-input"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="exampleFormControlSelect1"
                        class="order__label"
                        >Ответственный</label
                      >
                      <div class="select">
                        <select
                          class="form-select"
                          id="exampleFormControlSelect1"
                        >
                          <option>Выберите</option>
                          <option>Иванов И.</option>
                          <option>Иванов И.</option>
                          <option>Иванов И.</option>
                          <option>Иванов И.</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label
                        for="exampleFormControlSelect1"
                        class="order__label"
                        >Склад</label
                      >
                      <div class="select">
                        <select
                          class="form-select"
                          id="exampleFormControlSelect1"
                        >
                          <option>Выберите</option>
                          <option>Склад 1</option>
                          <option>Склад 1</option>
                          <option>Склад 1</option>
                          <option>Склад 1</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label
                        for="exampleFormControlSelect1"
                        class="order__label"
                        >Способ возврата средств</label
                      >
                      <div class="select">
                        <select
                          class="form-select"
                          id="exampleFormControlSelect1"
                        >
                          <option>Выберите</option>
                          <option>Безналичный расчет</option>
                          <option>Наличный расчет</option>
                          <option>Оплата онлайн</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="order__second__row">
                    <div class="form-group">
                      <label
                        for="exampleFormControlSelect1"
                        class="order__label"
                        >Статус возврата</label
                      >
                      <div class="select2">
                        <select
                          class="form-select first__s"
                          id="exampleFormControlSelect1"
                        >
                          <option>Выберите</option>
                          <option>Новый возврат</option>
                          <option>Новый возврат</option>
                          <option>Новый возврат</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label order__label"
                        >ФИО клиента</label
                      >
                      <input
                        class="form-control second__s"
                        type="text"
                        id="example-text-input"
                        placeholder="Иванов Иван Иванович"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label order__label"
                        >Номер телефона</label
                      >
                      <input
                        class="form-control third__s"
                        type="tel"
                        id="example-text-input"
                        placeholder="+7 777 123 45 67"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label order__label"
                        >E-mail</label
                      >
                      <input
                        class="form-control fourth__s"
                        type="email"
                        id="example-text-input"
                        placeholder="iva.noff@example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-3">
                <div class="order__ready">
                  <div class="order__ready__content">
                    <div class="form-group">
                      <label
                        for="exampleFormControlSelect1"
                        class="order__label"
                        >Способ доставки</label
                      >
                      <div class="select2">
                        <select
                          class="form-select five__s"
                          id="exampleFormControlSelect1"
                          @change="isPickup = !isPickup"
                        >
                          <option>Самовывоз</option>
                          <option>Доставка</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group" v-if="isPickup == true">
                      <label
                        for="exampleFormControlSelect1"
                        class="order__label"
                        >Пункт самовывоза</label
                      >
                      <div class="select2">
                        <select
                          class="form-select five__s"
                          id="exampleFormControlSelect1"
                        >
                          <option>Выберите</option>
                          <option>Склад 1</option>
                          <option>Склад 2</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group" v-if="isPickup == false">
                      <label
                        for="example-text-input"
                        class="form-control-label order__label"
                        >Адрес доставки</label
                      >
                      <input
                        class="form-control five__s"
                        type="text"
                        id="example-text-input"
                        placeholder="Введите адрес"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="order__table">
        <div class="order__table__content">
          <div class="order__table__header">
            <div class="barcodes">
              <div class="form-group">
                <div class="input-group">
                  <input
                    class="form-control barcode__inp"
                    placeholder="Введите штрихкод"
                    id="search-barcode"
                    type="text"
                  />
                  <span class="input-group-text py-0"
                    ><img src="@/assets/css/icons/barcode.svg" alt=""
                  /></span>
                </div>
              </div>
              <button class="btn barcode__btn" data-bs-toggle="modal" data-bs-target="#SelectDisc">Выбрать из списка</button>
            </div>
            <div class="search">
              <button
                class="btn disc__btn"
                data-bs-toggle="modal"
                data-bs-target="#InpModal"
              >
                Ввести номер заказа
              </button>
              <div class="form-group m-0">
                <div class="input-group mt-1">
                  <span class="input-group-text"
                    ><img src="@/assets/css/icons/searchIcon.svg" alt=""
                  /></span>
                  <input
                    class="form-control search__inp"
                    placeholder="Поиск..."
                    id="search"
                    type="text"
                    v-model.trim="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="not__added" v-if="isAdded">
            <div>
              <img src="@/assets/img/add.png" style="width: 6.667vw" alt="" />
              <p class="not__added__main">Товары не выбраны</p>
              <p class="not__added__sec">
                Для того чтобы создать возврат, необходимо<br />
                выбрать товары из списка
              </p>
              <button class="btn btn__chose" data-bs-toggle="modal" data-bs-target="#SelectDisc">Выбрать из списка</button>
            </div>
          </div>
          <div class="order__table__body" v-else>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col" class="th__col">№</th>
                  <th scope="col" class="th__col">Товар</th>
                  <th scope="col" class="th__col">Артикул</th>
                  <th scope="col" class="th__col">Цвет</th>
                  <th scope="col" class="th__col">Размер</th>
                  <th scope="col" class="th__col">Себестоимость</th>
                  <th scope="col" class="th__col">Цена продажи</th>
                  <th scope="col" class="th__col">Кол-во</th>
                  <th scope="col" class="th__col">Скидка</th>
                  <th scope="col" class="th__col">Сумма</th>
                  <th scope="col" class="th__col">Действия</th>
                </tr>
              </thead>
              <tbody>
                <!-- v-for="(item, i) in items" :key="item" -->
                <tr v-for="(item, i) in filteredProducts" :key="item">
                  <td scope="row">
                    {{ i + 1 }}
                  </td>
                  <td style="display: flex">
                    <img
                      :src="item.img"
                      style="width: 2.5vw; margin-right: 0.833vw"
                      alt=""
                    />
                    {{ item.name }}
                  </td>
                  <td>
                    {{ item.barcode }}
                  </td>
                  <td>
                    {{ item.color }}
                  </td>
                  <td>
                    {{ item.size }}
                  </td>
                  <td>{{ item.costPrice }} ₸</td>
                  <td>{{ item.price }} ₸</td>
                  <td>
                    {{ item.count }}
                  </td>
                  <td>
                    {{ item.disc }}
                  </td>
                  <td>{{ item.price * item.count }} ₸</td>
                  <td>
                    <div class="dropdown">
                      <img
                        src="@/assets/img/dots.svg"
                        style="width: 1.563vw; cursor: pointer"
                        alt=""
                      />
                      <div class="dropdown-content">
                        <a href="/warehouse-accounting/edit-inv"
                          >Редактировать</a
                        >
                        <hr />
                        <a
                          style="cursor: pointer"
                          data-bs-toggle="modal"
                          data-bs-target="#DeleteInv"
                          >Удалить</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="order__ready_block" v-if="!isAdded">
            <div style="text-align: left">
              <p class="order__ready__main">Сумма</p>
              <p class="order__ready__sec">280 000 ₸</p>
            </div>
            <div style="text-align: left">
              <p class="order__ready__main">Кол-во товаров</p>
              <p class="order__ready__sec">26 шт</p>
            </div>
            <div style="text-align: left">
              <p class="order__ready__main">Общая скидка</p>
              <p class="order__ready__sec">10 %</p>
            </div>
            <div style="text-align: left">
              <p class="order__ready__result">Итог</p>
              <p class="order__ready__sum">320 000 ₸</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <InputsModal>
      <template #head>
        <div style="text-align: left">
          <p class="header__main">Возврат по номеру зазказа</p>
          <p class="header__sec">Введите номер заказа и нажмите “Добавить”</p>
        </div>
      </template>
      <template #body>
        <div class="form-group label__text" style="text-align: left">
          <label for="exampleFormControlInput1" class="label__text" style="font-size: 14px;"
            >Номер заказа</label
          >
          <div class="d-flex">
            <input
              type="number"
              class="form-control modal__inp w-100"
              id="exampleFormControlInput1"
              placeholder="Введите номер поступления"
            />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="footer__btn">
          <button class="footer__button">Добавить</button>
        </div>
      </template></InputsModal
    >
    <commentary :pageTitle="'Возврат №342141'"></commentary>
    <select-product-discount></select-product-discount>
  </main>
</template>

<style scoped>
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
.not__added {
  padding-bottom: 130px;
}
.dropdown {
  width: 100%;
  display: inline-block;
  position: relative;
}
.dropdown-content {
  text-align: left;
  display: none;
  position: absolute;
  width: 7.815vw;
  overflow: auto;
  background: #f8f9fa;
  box-shadow: 2px 2px 5.5px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  right: 15px;
  z-index: 1;
  padding: 0.625vw 0.625vw 0.625vw 0.625vw;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-content a {
  display: block;
  color: #2d3748;
  text-decoration: none;
}
.not__added__main {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
}

.not__added__sec {
  font-weight: 400;
  font-size: 0.833vw;
  color: #2d3748;
}

.btn__chose {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.625vw 1.875vw 0.625vw 1.875vw;
  font-weight: 700;
  font-size: 0.833vw;
  color: #ffffff;
}

.drop__buttons {
  display: flex;
}

.comment {
  position: relative;
  display: flex;
  border: 1px solid #2d3748;
  box-sizing: border-box;
  border-radius: 8px;
  background: transparent;
  padding: 0.521vw 0.833vw 0.573vw 0.833vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
  margin-right: 1.25vw;
  text-transform: none;
}

.count {
  position: absolute;
  background: #eb5757;
  font-weight: 600;
  font-size: 0.625vw;
  color: #fff;
  border-radius: 50%;
  padding: 0 5px 0 5px;
  left: 7.708vw;
  top: -0.26vw;
}

.action {
  display: flex;
  border: 1px solid #2d3748;
  box-sizing: border-box;
  border-radius: 8px;
  background: transparent;
  padding: 0.621vw 0.833vw 0.673vw 0.833vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
  text-transform: none;
  margin-right: 1.25vw;
}

.order__ready__result {
  font-weight: 600;
  font-size: 1.042vw;
  color: #2d3748;
  margin: 0;
}

.order__ready__sum {
  font-weight: 800;
  font-size: 1.4vw;
  color: #2d3748;
}

.order__ready_block {
  margin-left: 28.073vw;
  margin-right: 7.813vw;
  margin-top: 8px;
  display: flex;
  justify-content: space-around;
}

.five__s {
  /* width: 19.531vw !important; */
  /* width: 90%; */
}

.accept__btn {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  text-transform: none;
  padding: 0.729vw 7.413vw 0.729vw 7.413vw;
  font-weight: 700;
  font-size: 0.833vw;
  color: #ffffff;
}

.accept__button {
  display: flex;
  justify-content: center;
}

.select3:hover img {
  transform: rotate(180deg);
}

.select3 {
  position: relative;
}

.select3 img {
  position: absolute;
  left: 18.438vw;
  top: 0.781vw;
}

.mr {
  margin-right: 0 !important;
}

.disc__form {
  width: 19.896vw !important;
}

.order__label__disc {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}

.modal__flex__disc {
  margin-top: 1.25vw;
  display: flex;
  justify-content: center;
}

.active {
  background: linear-gradient(
    83.56deg,
    #7092e0 10.01%,
    #8baef3 75.36%
  ) !important;
  border-radius: 8px 0px 0px 8px !important;
  font-size: 0.729vw !important;
  color: #ffffff !important;
}

.active2 {
  background: linear-gradient(
    83.56deg,
    #7092e0 10.01%,
    #8baef3 75.36%
  ) !important;
  border-radius: 0px 8px 8px 0px !important;
  font-size: 0.729vw !important;
  color: #ffffff !important;
}

.search__buttons {
  margin-top: 0.7vw;
}

.left__btn {
  background: transparent;
  border: 1px solid #a0aec0;
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: 0;
  padding: 0.365vw 1.458vw 0.365vw 1.458vw;
  font-size: 0.729vw;
  color: #2d3748;
  font-weight: 400;
}

.right__btn {
  background: transparent;
  border: 1px solid #a0aec0;
  box-sizing: border-box;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0.365vw 1.927vw 0.365vw 1.927vw;
  font-size: 0.729vw;
  color: #2d3748;
  font-weight: 400;
}

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

.header-flex {
  padding: 1.25vw 2.083vw 0.833vw 2.083vw;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.order__table__body::-webkit-scrollbar {
  background: #e2e8f0;
  border-radius: 0.78vw;
  width: 0.37vw;
}

.order__table__body::-webkit-scrollbar-thumb {
  border-radius: 0.78vw;
  background-color: #313860;
}

.order__table__body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.78vw;
  background-color: #e2e8f0;
}

.order__table__body {
  height: 18.792vw;
  overflow-y: scroll;
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
  background: #f8f9fa;
  box-shadow: 2px 2px 5.5px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  right: 15px;
  z-index: 1;
  padding: 0.625vw 0.625vw 0.625vw 0.625vw;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  display: block;
  color: #2d3748;
  text-decoration: none;
}

.disc__btn {
  margin-right: 0.833vw;
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.521vw 1.25vw 0.521vw 1.25vw;
  text-transform: none;
  font-weight: 500;
  font-size: 0.729vw;
  color: #ffffff;
}

.search__inp {
  width: 13.333vw !important;
}

.search {
  display: flex;
  align-items: baseline;
}

.barcode__btn {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.521vw 1.25vw 0.521vw 1.25vw;
  text-transform: none;
  font-weight: 500;
  font-size: 0.729vw;
  color: #ffffff;
}

.barcodes {
  display: flex;
}

.barcode__inp {
  width: 17.969vw !important;
}

.input-group-text {
  border: 1px solid #a0aec0;
}

.order__table__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25vw 0 1.25vw;
}

.order__table__content {
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  padding: 10px 0 0 0;
}

.order__table {
  margin-top: 1.25vw;
}

.sum {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
  margin: 0;
}

.total {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
  margin: 0;
}

.order__ready__sec {
  font-weight: 700;
  font-size: 1vw;
  color: #2d3748;
  margin: 0;
}

.order__ready__main {
  font-weight: 400;
  font-size: 1.042vw;
  color: #2d3748;
  margin: 0;
}

.order__ready__text {
  display: flex;
  justify-content: space-between;
}

.fourth__s {
  width: 12.448vw !important;
}

.third__s {
  width: 10.469vw !important;
}

.second__s {
  width: 12.865vw !important;
}

.first__s {
  width: 14.208vw !important;
}

.select2:hover img {
  transform: rotate(180deg);
}

.select2 {
  position: relative;
}

.select2 img {
  position: absolute;
  left: 13.75vw;
  top: 0.781vw;
}

.select:hover img {
  transform: rotate(180deg);
}

.select {
  position: relative;
}

.select img {
  position: absolute;
  left: 8.281vw;
  top: 0.781vw;
}

.order__label {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}

.form-group {
  text-align: left;
}

.order__body__content {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 0.833vw 1.25vw 0.833vw 1.25vw;
  /* width: 57.031vw; */
}

.form-group {
  margin-right: 1.25vw;
}

.form-control,
.form-select {
  border: 1px solid #a0aec0;
  /* width: 9.948vw; */
}

.order__ready {
  /* margin-left: 40px; */
  /* width: 22.031vw; */
  background: #f8f9fa;
  border-radius: 12px;
  padding: 0.833vw 1.25vw 0.833vw 1.25vw;
}

.order__first__row,
.order__second__row {
  display: flex;
  justify-content: space-between;
}
.order__body__content select{
  width: 10vw;
}

.order__header-text {
  text-align: left;
}

.save__btn {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.425vw 3.646vw 0.625vw 3.646vw;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  text-transform: none;
  height: 40px;
}

.order__header__sec {
  font-weight: 400;
  font-size: 0.729vw;
  color: #a0aec0;
}
td {
  font-weight: 600;
  font-size: 14px;
  color: #2d3748;
}
.order__header__main {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
  margin: 0;
}

.order__header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order__header-content {
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  padding: 0 1.25vw 1.25vw 1.25vw;
}

.order__content {
  padding: 0 2.083vw 0 2.083vw;
}
</style>

<script>
import InputsModal from "@/components/InputsModal.vue";
import DiscountModal from "@/components/DiscountModal.vue";
import SelectProductDiscount from "@/components/SelectProductDiscount.vue";
import Commentary from "@/components/Commentary.vue";
export default {
  components: {
    DiscountModal,
    InputsModal,
    SelectProductDiscount,
    Commentary
  },
  methods: {
    test() {
      alert("Успех");
    },
  },
  data() {
    return {
      isPickup: true,
      onStorage: "yes",
      items: [
        {
          img: require("@/assets/img/tshirt.png"),
          barcode: "876543456",
          name: "Куртка зеленая",
          color: "Белый",
          size: "S",
          costPrice: 12000,
          price: 29000,
          count: 2,
          disc: "нет",
        },
        {
          img: require("@/assets/img/tshirt.png"),
          barcode: "2146543456",
          name: "Куртка Черная",
          color: "Белый",
          size: "S",
          costPrice: 12000,
          price: 29000,
          count: 3,
          disc: "нет",
        },
        {
          img: require("@/assets/img/tshirt.png"),
          barcode: "5246543456",
          name: "Куртка Белая",
          color: "Белый",
          size: "S",
          costPrice: 12000,
          price: 29000,
          count: 1,
          disc: "нет",
        },
        {
          img: require("@/assets/img/tshirt.png"),
          barcode: "876543456",
          name: "Куртка зеленая",
          color: "Белый",
          size: "S",
          costPrice: 12000,
          price: 29000,
          count: 2,
          disc: "нет",
        },
        {
          img: require("@/assets/img/tshirt.png"),
          barcode: "876543456",
          name: "Куртка зеленая",
          color: "Белый",
          size: "S",
          costPrice: 12000,
          price: 29000,
          count: 2,
          disc: "нет",
        },
        {
          img: require("@/assets/img/tshirt.png"),
          barcode: "876543456",
          name: "Куртка зеленая",
          color: "Белый",
          size: "S",
          costPrice: 12000,
          price: 29000,
          count: 2,
          disc: "нет",
        },
        {
          img: require("@/assets/img/tshirt.png"),
          barcode: "876543456",
          name: "Куртка зеленая",
          color: "Белый",
          size: "S",
          costPrice: 12000,
          price: 29000,
          count: 2,
          disc: "нет",
        },
        {
          img: require("@/assets/img/tshirt.png"),
          barcode: "876543456",
          name: "Куртка зеленая",
          color: "Белый",
          size: "S",
          costPrice: 12000,
          price: 29000,
          count: 2,
          disc: "нет",
        },
      ],
      search: "",
      isAdded: false,
    };
  },
  computed: {
    filteredProducts() {
      return this.items.filter((item) => {
        return (
          item.name.toLowerCase().includes(this.search.toLowerCase()) ||
          item.barcode.toString().includes(this.search.toLowerCase())
        );
      });
    },
  },
  mounted() {
    var element = document.getElementsByClassName("third__s")[0];
    var maskOptions = {
      mask: "+{7}(000)000-00-00",
    };
    var mask = IMask(element, maskOptions);
  },
};
</script>
