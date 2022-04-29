<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="order__content">
      <div class="order__header">
        <div class="order__header-content">
          <div class="order__header-main">
            <div class="order__header-text">
              <p class="order__header__main">Создание заказа</p>
              <p class="order__header__sec">
                Настройте все параметры и нажмите “Сохранить”
              </p>
            </div>
            <button class="btn save__btn">Сохранить</button>
          </div>
          <div class="order__body">
            <div class="row">
              <div class="col-8">
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
                        <img
                          src="@/assets/img/arrow.svg"
                          style="width: 0.833vw"
                          alt=""
                        />
                        <select
                          class="form-control"
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
                        <img
                          src="@/assets/img/arrow.svg"
                          style="width: 0.833vw"
                          alt=""
                        />
                        <select
                          class="form-control"
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
                        <img
                          src="@/assets/img/arrow.svg"
                          style="width: 0.833vw"
                          alt=""
                        />
                        <select
                          class="form-control"
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
                        <img
                          src="@/assets/img/arrow.svg"
                          style="width: 0.833vw"
                          alt=""
                        />
                        <select
                          class="form-control first__s"
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
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="order__ready"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
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
}
.form-group {
  margin-right: 1.25vw;
}
.form-control {
  border: 1px solid #a0aec0;
  width: 9.948vw;
}
.order__ready {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.406vw 1.25vw 0.833vw 1.25vw;
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
  padding: 0.625vw 3.646vw 0.625vw 3.646vw;
  font-weight: 700;
  font-size: 0.833vw;
  color: #fff;
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
  padding: 1.25vw 1.25vw 2.24vw 1.25vw;
}
.order__content {
  padding: 3.125vw 2.083vw 0 2.083vw;
}
</style>

<script>

export default {
 
};
</script>