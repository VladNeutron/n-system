<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="order__header">
        <div class="order__header-content">
          <div class="order__header-main">
            <div class="order__header-text">
              <p class="order__header__main">Заказ №2354657</p>
              <p class="order__header__sec">
                Настройте все параметры и нажмите “Сохранить”
              </p>
            </div>
            <div class="drop__buttons">
              <comment-button style="margin-right: 24px"></comment-button>
              <action-button style="margin-right: 24px"></action-button>
              <button class="btn save__btn" onclick="window.location.href = '/sales/order-list'">Сохранить</button>
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
                        >№ Заказа</label
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
                        >Дата заказа</label
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
                        >Способ оплаты</label
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
                        >Статус заказа</label
                      >
                      <div class="select2">
                        <select
                          class="form-select first__s"
                          id="exampleFormControlSelect1"
                        >
                          <option>Выберите</option>
                          <option>Новый заказ</option>
                          <option>Новый заказ</option>
                          <option>Новый заказ</option>
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
                class="btn disc__btn d-flex align-items-start"
                data-bs-toggle="modal"
                data-bs-target="#DiscModal"
              >
                <img
                  src="@/assets/img/percent.svg"
                  style="margin-right: 10px"
                  alt=""
                />
                Применить скидку
              </button>
              <div class="form-group m-0">
                <div class="input-group">
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
                Для того чтобы создать заказ, необходимо<br />
                выбрать товары из списка
              </p>
              <button class="btn btn__chose">Выбрать из списка</button>
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
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#InpModal"
                          @click="isColor = true"
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
    <discount-modal>
      <template #head>
        <div style="text-align: left">
          <p class="header__main">Применить скидку</p>
          <p class="header__sec">Выберите скидку и нажмите “Применить”</p>
        </div>
      </template>
      <template #body>
        <div class="search__buttons">
          <button
            :class="['left__btn', { active: onStorage == 'yes' }]"
            @click="onStorage = 'yes'"
          >
            Выбрать из списка
          </button>
          <button
            :class="['right__btn', { active2: onStorage == 'all' }]"
            @click="onStorage = 'all'"
          >
            Ввести вручную
          </button>
        </div>
        <div class="modal__flex__disc" v-if="onStorage == 'yes'">
          <div class="form-group mr">
            <label for="exampleFormControlSelect1" class="order__label__disc"
              >Выберите скидку</label
            >
            <div class="select3">
              <img src="@/assets/img/arrow.svg" style="width: 0.833vw" alt="" />
              <select
                class="form-control disc__form"
                id="exampleFormControlSelect1"
              >
                <option>Выберите</option>
                <option>Скидка "8 марта"</option>
                <option>Скидка "8 марта"</option>
                <option>Скидка "8 марта"</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal__flex__disc" v-if="onStorage == 'all'">
          <div class="form-group m-0" style="flex-grow:1;">
            <label for="type__disc" class="order__label">Ручная скидка</label>
            <div class="input-group flex-nowrap ms-auto me-auto" style="width: 98%">
              <input
                class="form-control"
                placeholder="10"
                id="type__disc"
                type="text"
              />
              <span
                class="input-group-text input-group-text2 py-0"
                @click="isClicked = 1"
                ><div
                  class="not__selected"
                  :class="{ selected: isClicked == 1 }"
                >
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                    class="not__selected__img"
                    :class="{ selected__img: isClicked == 1 }"
                  >
                    <path
                      d="M2.5024 5C2.5024 5.74414 2.56686 6.30078 2.69576 6.66992C2.83053 7.0332 3.0444 7.21484 3.33736 7.21484C3.89986 7.21484 4.18111 6.47656 4.18111 5C4.18111 3.53516 3.89986 2.80273 3.33736 2.80273C3.0444 2.80273 2.83053 2.98438 2.69576 3.34766C2.56686 3.70508 2.5024 4.25586 2.5024 5ZM6.39596 4.98242C6.39596 6.33008 6.13522 7.34375 5.61373 8.02344C5.09225 8.69727 4.3276 9.03418 3.31979 9.03418C2.35299 9.03418 1.60592 8.68848 1.07858 7.99707C0.551232 7.2998 0.28756 6.29492 0.28756 4.98242C0.28756 2.30469 1.2983 0.96582 3.31979 0.96582C4.31002 0.96582 5.06881 1.31445 5.59615 2.01172C6.12936 2.70312 6.39596 3.69336 6.39596 4.98242ZM12.4428 1.15039L5.3149 14H3.20553L10.3335 1.15039H12.4428ZM11.5024 10.1328C11.5024 10.877 11.5669 11.4336 11.6958 11.8027C11.8305 12.166 12.0444 12.3477 12.3374 12.3477C12.8999 12.3477 13.1811 11.6094 13.1811 10.1328C13.1811 8.66797 12.8999 7.93555 12.3374 7.93555C12.0444 7.93555 11.8305 8.11719 11.6958 8.48047C11.5669 8.83789 11.5024 9.38867 11.5024 10.1328ZM15.396 10.1152C15.396 11.457 15.1352 12.4678 14.6137 13.1475C14.0922 13.8213 13.3276 14.1582 12.3198 14.1582C11.353 14.1582 10.6059 13.8125 10.0786 13.1211C9.55123 12.4238 9.28756 11.4219 9.28756 10.1152C9.28756 7.4375 10.2983 6.09863 12.3198 6.09863C13.31 6.09863 14.0688 6.44727 14.5962 7.14453C15.1294 7.83594 15.396 8.82617 15.396 10.1152Z"
                    />
                  </svg></div
              ></span>
              <span
                class="input-group-text input-group-text2 py-0"
                @click="isClicked = 2"
                ><div
                  class="not__selected"
                  :class="{ selected: isClicked == 2 }"
                >
                  <svg
                    width="11"
                    height="13"
                    viewBox="0 0 11 13"
                    xmlns="http://www.w3.org/2000/svg"
                    class="not__selected__img"
                    :class="{ selected__img: isClicked == 2 }"
                  >
                    <path
                      d="M7.20424 13H4.48624V5.944H0.99424V3.676H10.6962V5.944H7.20424V13ZM0.99424 0.147999H10.6962V2.416H0.99424V0.147999Z"
                    />
                  </svg></div
              ></span>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="accept__button">
          <button class="btn accept__btn" data-bs-dismiss="modal">Применить</button>
        </div>
      </template>
    </discount-modal>
    <select-product-discount></select-product-discount>
    <Commentary :pageTitle="'Заказ №2354657'"></Commentary>
  </main>
</template>

<style scoped>
.selected {
  background: #2d3748 !important;
}
.not__selected__img {
  fill: #a0aec0;
}
.selected__img {
  fill: #ffffff;
}
.not__selected {
  padding: 5px 9px 5px 9px;
  background: #e2e8f0;
  border-radius: 5px;
  cursor: pointer;
  width: 34px;
}
.input-group-text2 {
  padding: 0 !important;
  padding-right: 4px !important;
  padding-left: 4px !important;
}
.input-group
  > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 0;
}
.not__added {
  padding-bottom: 150px;
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
  width: 17.531vw !important;
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
  height: 100%;
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

.disc__btn {
  margin-right: 0.833vw;
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.521vw 1.25vw 0.521vw 1.25vw;
  text-transform: none;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
}

.search__inp {
  width: 13.333vw !important;
}

.search {
  display: flex;
}

.barcode__btn {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.521vw 1.25vw 0.521vw 1.25vw;
  text-transform: none;
  font-weight: 500;
  font-size: 14px;
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
  padding: 8px 0 0 0;
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
  width: 15.208vw !important;
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
  width: 9.948vw;
}

.order__ready {
  /* margin-left: 40px; */
  /* width: 20.031vw; */
  background: #f8f9fa;
  border-radius: 12px;
  padding: 0.833vw 1.25vw 0.833vw 1.25vw;
}

.order__first__row,
.order__second__row {
  display: flex;
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
  height: 40px;
  text-transform: none;
}

.order__header__sec {
  font-weight: 400;
  font-size: 0.729vw;
  color: #a0aec0;
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
@media screen and (max-width: 1600px) {
  .btn {
    font-size: 12px !important;
  }
  .order__label {
    font-size: 12px;
  }
  .first__s {
    width: 13.208vw !important;
  }
  .comment,
  .action {
    align-items: center;
  }
  .order__table__body {
    height: 33vw;
  }
  .disc__btn {
    padding: 0.75rem 1.5rem;
  }
  .search {
    align-items: flex-start;
  }
  .order__header__main {
    font-size: 20px;
  }
  .order__header__sec {
    font-size: 14px;
  }
  .five__s {
    width: 15.531vw !important;
  }
}
</style>

<script>
import DiscountModal from "@/components/DiscountModal.vue";
import SelectProductDiscount from "@/components/SelectProductDiscount.vue";
import Commentary from "@/components/Commentary.vue";
export default {
  components: {
    DiscountModal,
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
      isClicked: 0,
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
