<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid py-1">
      <div class="row mt-4">
        <div class="col-12">
          <div class="card">
            <div class="row card__padding">
              <div class="col">
                <div class="cash__left">
                  <div class="cash__left__blue">
                    <p class="cash__text">Выбор режима работы</p>
                    <router-link :to="{ name: 'cash-register-sale'}">
                    <div class="cash__blue__block">
                      <div class="cash__blue__content">
                        <div class="cash__blue__text">
                          <img
                            src="@/assets/img/calculator.svg"
                            style="width: 1.667vw; margin-right: 0.833vw"
                            alt=""
                          />
                          Продажа
                        </div>
                      </div>
                    </div>
                    </router-link>
                    <router-link :to="{ name: 'cash-register-return'}">
                    <div class="cash__blue__block">
                      <div class="cash__blue__content">
                        <div class="cash__blue__text">
                          <img
                            src="@/assets/img/shopping_cart.svg"
                            style="width: 1.667vw; margin-right: 0.833vw"
                            alt=""
                          />
                          Возврат
                        </div>
                      </div>
                    </div>
                    </router-link>
                    <router-link :to="{ name: 'checks-list'}">
                    <div class="cash__blue__block">
                      <div class="cash__blue__content">
                        <div class="cash__blue__text">
                          <img
                            src="@/assets/img/receipt.svg"
                            style="width: 1.667vw; margin-right: 0.833vw"
                            alt=""
                          />
                          Список чеков
                        </div>
                      </div>
                    </div>
                    </router-link>
                    <router-link :to="{ name: 'deffered-checks'}">
                    <div class="cash__blue__block">
                      <div class="cash__blue__content">
                        <div
                          class="cash__blue__text align-items-baseline"
                          style="margin-top: -2.25vw"
                        >
                          <img
                            src="@/assets/img/remove_shopping_cart.svg"
                            style="width: 1.667vw; margin-right: 0.833vw"
                            alt=""
                          />
                          Незавершенные продажи
                        </div>
                      </div>
                    </div>
                    </router-link>
                  </div>
                  <div class="cash__left__green">
                    <p class="cash__text">Кассовая смена</p>
                    <div class="cash__blue__block" @click="shiftStatus='closed'">
                      <div class="cash__green__content">
                        <div class="cash__blue__text">
                          <img
                            src="@/assets/img/lock_clock.svg"
                            style="width: 1.667vw; margin-right: 0.833vw"
                            alt=""
                          />
                          Закрыть смену
                        </div>
                      </div>
                    </div>
                    <div class="cash__blue__block" @click="shiftStatus='open'">
                      <div class="cash__green__content">
                        <div class="cash__blue__text">
                          <img
                            src="@/assets/img/update.svg"
                            style="width: 1.667vw; margin-right: 0.833vw"
                            alt=""
                          />
                          Открыть смену
                        </div>
                      </div>
                    </div>
                    <div class="cash__blue__block">
                      <div class="cash__green__content">
                        <div class="cash__blue__text">
                          <img
                            src="@/assets/img/receipt.svg"
                            style="width: 1.667vw; margin-right: 0.833vw"
                            alt=""
                          />
                          Снять X - отчет
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col" style="margin-top: 1vw">
                <div class="shift__info">
                  <div class="shift__header">
                    <p class="shift__title">Информация о смене</p>
                    <p class="shift__status" :class="getClass(shiftStatus)">
                      {{ buttonText }}
                    </p>
                  </div>
                  <div class="shift__body">
                    <div class="shift__first__row">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                          >№ Номер смены</label
                        >
                        <input
                          class="form-control first"
                          type="text"
                          placeholder="№ 9876543"
                          id="example-text-input"
                          disabled
                        />
                      </div>
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                          >Торговая точка</label
                        >
                        <input
                          class="form-control second"
                          type="text"
                          placeholder="ТЦ “Mega”"
                          id="example-text-input"
                          disabled
                        />
                      </div>
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                          >Выручка за день</label
                        >
                        <input
                          class="form-control text-right second"
                          type="text"
                          placeholder="345 000 ₸"
                          id="example-text-input"
                          disabled
                        />
                      </div>
                    </div>
                    <div class="shift__second__row">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                          >Время открытия смены</label
                        >
                        <input
                          class="form-control first"
                          type="text"
                          placeholder="09:59"
                          id="example-text-input"
                          disabled
                        />
                      </div>
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                          >Чеков за сегодня</label
                        >
                        <input
                          class="form-control first"
                          type="text"
                          placeholder="323"
                          id="example-text-input"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shift__info">
                  <div class="shift__header">
                    <p class="shift__title">Касса</p>
                  </div>
                  <div class="shift__body2" style="display: flex;align-items: flex-end">
                    <div class="form-group" style="margin-right: 1.25vw">
                      <label
                        for="exampleFormControlSelect1"
                        class="form-control-label"
                        >Выбор кассы</label
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
                          <option disabled selected>Выберите</option>
                          <option>Касса №1 Главная</option>
                          <option>Касса №1 Главная</option>
                          <option>Касса №1 Главная</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <router-link :to="{ name: 'cash-list'}">
                        <button class="btn goto__list">Перейти к списку</button>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      buttonText: "",
      shiftStatus: "open",
    };
  },
  methods: {
    getClass(stat) {
      if (stat === "open") {
        this.buttonText = "Открыта";
        return "open";
      }
      if (stat === "closed") {
        this.buttonText = "Закрыта";
        return "closed";
      }
    },
  },
};
</script>

<style scoped>
.goto__list {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.521vw 1.25vw 0.521vw 1.25vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #ffffff;
}
.first__s {
  width: 15.99vw;
}
.select2:hover img {
  transform: rotate(180deg);
}
.select2 {
  position: relative;
}
.select2 img {
  position: absolute;
  left: 14.531vw;
  top: 0.781vw;
}
.shift__body {
  margin-top: 1.771vw;
}
.first {
  width: 7.948vw;
}
.second {
  width: 11.021vw;
}
.text-right {
  text-align: right !important;
}
.form-group {
  text-align: left;
  margin-right: 1.25vw;
}
.form-control-label {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}
.shift__first__row,
.shift__second__row {
  display: flex;
}
.open {
  background: linear-gradient(135deg, #98ec2d 0%, #17ad37 100%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
}
.closed {
  background: linear-gradient(135deg, #ff667c 0%, #ea0706 100%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
}
.shift__status {
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.729vw;
  color: #ffffff;
  margin: none;
  padding: 0.417vw 1.771vw 0.417vw 1.771vw;
}
.shift__title {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
}
.shift__header {
  display: flex;
  justify-content: space-between;
}
.shift__info {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.25vw 1.25vw 1.25vw 1.25vw;
}
.cash__text {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
}
.cash__blue__text {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.25vw;
  color: #ffffff;
}
.cash__left__green {
  text-align: left;
}
.cash__blue__block {
  margin-bottom: 1.25vw;
}
.cash__green__content:hover{
    box-shadow: 0px 3.5px 5.5px rgba(72, 187, 120, 0.8);
    transition: 0.1s;
}
.cash__green__content {
  padding: 4.169vw 3.906vw 1.25vw 1.25vw;
  background: #48bb78;
  border-radius: 12px;
  width: 17.833vw;
  height: 7.854vw;
  cursor: pointer;
}
.cash__blue__content:hover{
    box-shadow: 0px 3.5px 5.5px rgba(79, 114, 239, 0.8);
    transition: 0.1s;
}
.cash__blue__content {
  padding: 4.169vw 3.906vw 1.25vw 1.25vw;
  background: #4f72ef;
  border-radius: 12px;
  width: 17.833vw;
  height: 7.854vw;
  cursor: pointer;
}
.cash__left__blue {
  text-align: left;
  margin-right: 1.042vw;
}
.card__padding {
  padding: 1.604vw 4.479vw 1vw 3.125vw;
}
.cash__left {
  display: flex;
}
</style>