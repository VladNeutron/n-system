<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Организация </template>
            <template v-slot:description> Настройки вашей компании </template>
          </lists-header>
          <div class="row">
            <div class="col">
              <div class="about__company">
                <div class="about__content">
                  <div class="about__header">
                    <div class="company__header">
                      <p class="company__main">Информация о компании</p>
                      <p class="company__sec">
                        Внесите изменения и нажмите “Сохранить”
                      </p>
                    </div>
                    <button class="btn about__btn">Сохранить изменения</button>
                  </div>
                  <div class="about__body">
                    <div class="d-flex">
                      <div>
                        <div class="form-group">
                          <label
                            for="exampleFormControlInput1"
                            class="about__label"
                            >Название компании</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="ТОО “Рога и Копыта”"
                          />
                        </div>
                        <div class="form-group">
                          <label
                            for="exampleFormControlSelect2"
                            class="about__label"
                            >Тип компании</label
                          >

                          <div class="drop">
                            <select
                              class="form-select"
                              id="exampleFormControlSelect2"
                            >
                              <option>Онлайн-магазин</option>
                              <option>ТОО</option>
                              <option>ООО</option>
                              <option>ОАО</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label
                            for="exampleFormControlSelect3"
                            class="about__label"
                            >Тип налогооблажения</label
                          >

                          <div class="drop">
                            <select
                              class="form-select"
                              id="exampleFormControlSelect3"
                            >
                              <option>УСН</option>
                              <option>ТОО</option>
                              <option>ООО</option>
                              <option>ОАО</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label
                            for="exampleFormControlInput4"
                            class="about__label"
                            >ИИН/БИН</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput4"
                            placeholder="0987654323456789"
                          />
                        </div>
                        <div class="VAT">
                          <p class="vat__text">Вы плательщик НДС?</p>
                        </div>
                        <div class="d-flex">
                          <div class="form-check">
                            <label
                              class="custom-control-label"
                              for="customRadio1"
                              >Да</label
                            >
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="customRadio1"
                            />
                          </div>
                          <div class="form-check" style="margin-left: 2.083vw">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="customRadio2"
                            />
                            <label
                              class="custom-control-label"
                              for="customRadio2"
                              >Нет</label
                            >
                          </div>
                        </div>
                      </div>
                      <div style="margin-left: 23px">
                        <div class="form-group">
                          <label
                            for="exampleFormControlInput5"
                            class="about__label"
                            >ФИО Директора</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput5"
                            placeholder="Иванов Иван Иванович"
                          />
                        </div>
                        <div class="form-group">
                          <label
                            for="exampleFormControlInput6"
                            class="about__label"
                            >Контактный телефон</label
                          >
                          <input
                            type="tel"
                            class="form-control phone__org"
                            id="exampleFormControlInput6"
                            placeholder="+7 707 123 45 67"
                          />
                        </div>
                        <div class="form-group">
                          <label
                            for="exampleFormControlInput7"
                            class="about__label"
                            >E-mail</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput7"
                            placeholder="ivan.ivaaaaan@gmail.com"
                          />
                        </div>
                        <div class="form-group">
                          <label
                            for="exampleFormControlTextarea1"
                            class="about__label"
                            >Юридический адрес</label
                          >
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="2"
                            placeholder="521370, Саратовская область, город Люберцы, пл. 1905 года, 5"
                          ></textarea>
                        </div>
                        <div class="form-group">
                          <label
                            for="exampleFormControlTextarea2"
                            class="about__label"
                            >Фактический адрес</label
                          >
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea2"
                            rows="2"
                            placeholder="521370, Саратовская область, город Люберцы, пл. 1905 года, 5"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="about__company">
                <div class="bank__about__content">
                  <div class="about__header">
                    <div class="company__header">
                      <p class="company__main">Банковские счета</p>
                      <p class="company__sec">
                        Внесите изменения и нажмите “Сохранить”
                      </p>
                    </div>
                    <button class="btn about__btn">Сохранить изменения</button>
                  </div>
                  <div class="bank__body" v-if="isAdded">
                    <div
                      class="bank__content"
                      v-for="item in items"
                      :key="item"
                    >
                      <div class="bank__header">
                        <div class="bank__yname">
                          <p class="yname__text">{{ item.name }}</p>
                          <span class="currency"
                            ><img :src="item.img" style="width: 0.625vw" alt=""
                          /></span>
                        </div>
                        <img
                          @click="openModal(item.id)"
                          src="@/assets/img/edit.svg"
                          style="width: 1.25vw; cursor: pointer"
                          alt=""
                        />
                      </div>
                      <div class="bank__info">
                        <div class="bank__info__text">
                          <p class="bank__info__name">Банк:</p>
                          <p class="bank__info__main">
                            {{ item.fullName }}
                          </p>
                        </div>
                        <div class="bank__info__text">
                          <p class="bank__info__name">БИК:</p>
                          <p class="bank__info__main">{{ item.bik }}</p>
                        </div>
                        <div class="bank__info__text">
                          <p class="bank__info__name">{{ item.kbe }}</p>
                          <p class="bank__info__main">14</p>
                        </div>
                        <div class="bank__info__text">
                          <p class="bank__info__name">ИИК:</p>
                          <p class="bank__info__main">{{ item.iik }}</p>
                        </div>
                        <div class="bank__info__text">
                          <p class="bank__info__name">ИИН/БИН:</p>
                          <p class="bank__info__main">{{ item.inn }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <div class="d-flex justify-content-center">
                      <img
                        src="@/assets/img/addbank.svg"
                        style="width: 4.167vw"
                        alt=""
                      />
                    </div>
                    <div class="d-flex justify-content-center">
                      <p class="bank__text">Добавьте свои банковские счета</p>
                    </div>
                  </div>
                  <div class="bank__footer">
                    <button
                      class="btn add__bank"
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <add-bank-info-modal></add-bank-info-modal>
    <edit-bank-info-modal
      :product="modal.modalProductName"
    ></edit-bank-info-modal>
</template>

<script>
import EditBankInfoModal from "@/components/EditBankInfoModal.vue";
import AddBankInfoModal from "@/components/AddBankInfoModal.vue";
export default {
  components: {
    AddBankInfoModal,
    EditBankInfoModal,
  },
  methods: {
    openModal(id) {
      this.modal.modalProductName = this.items.filter(
        (item) => item.id == id
      )[0];
      $("#EditBank").modal("show");
    },
  },
  data() {
    return {
      modal: {
        modalProductName: {},
      },
      isAdded: true,
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
          name: "Сбербанк Основной",
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
  mounted() {
    var element = document.getElementsByClassName("phone__org")[0];
    var maskOptions = {
      mask: "+{7}(000)000-00-00",
    };
    var mask = IMask(element, maskOptions);
  },
};
</script>

<style scoped>
.form-control,
.form-select {
  border: 1px solid #a0aec0;
}
.add__bank {
  display: flex;
  align-items: center;
  border: 1px dashed #2d3748;
  border-radius: 12px;
  background: transparent;
  padding: 1.25vw 7.292vw 1.25vw 7.292vw;
  font-weight: 600;
  font-size: 0.833vw;
  color: #2d3748;
  text-transform: none;
}
.bank__footer {
  margin-top: 1.083vw;
  display: flex;
  justify-content: center;
}
.bank__body::-webkit-scrollbar {
  background: #e2e8f0;
  border-radius: 0.78vw;
  width: 0.37vw;
}
.bank__body::-webkit-scrollbar-thumb {
  border-radius: 0.78vw;
  background-color: #313860;
}
.bank__body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.78vw;
  background-color: #e2e8f0;
}
.bank__body {
  overflow-y: scroll;
  height: 28.042vw;
}
.bank__info__main {
  font-weight: 600;
  font-size: 0.833vw;
  color: #2d3748;
}
.bank__info__name {
  font-weight: 400;
  font-size: 0.833vw;
  color: #a0aec0;
}
.bank__info__text {
  display: flex;
  justify-content: space-between;
}
.currency {
  background: #e2e8f0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: 1.354vw;
  height: 1.354vw;
}
.yname__text {
  font-weight: 600;
  font-size: 1.042vw;
  color: #2d3748;
  margin-right: 0.417vw;
}
.bank__yname {
  display: flex;
}
.bank__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.bank__content {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 0.833vw 1.25vw 1.25vw 0.833vw;
  margin-bottom: 0.833vw;
  height: 13.802vw;
}
.drop:hover .arrow {
  transform: rotate(180deg);
}
.arrow {
  position: absolute;
  left: 20.573vw;
  top: 0.781vw;
}
.drop {
  position: relative;
}
.about__label {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}
.custom-control-label {
  font-weight: 400;
  font-size: 0.729vw;
  color: #252f40;
}
.vat__text {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}
.VAT {
  text-align: left;
}
.form-check {
  text-align: left;
}
.form-control,
.form-select {
  width: 22.031vw;
}
.form-group {
  text-align: left;
}
.about__body {
  margin-top: 1.667vw;
}
.about__btn {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.521vw 1.25vw 0.521vw 1.25vw;
  text-transform: none;
  font-weight: 600;
  font-size: 0.729vw;
  color: #ffffff;
}
.about__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bank__about__content {
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  padding: 0.833vw 1.25vw 0.3vw 1.25vw;
}
.about__content {
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  padding: 0.833vw 1.25vw 4.146vw 1.25vw;
}
.company__sec {
  font-weight: 400;
  font-size: 0.729vw;
  color: #a0aec0;
}
.company__main {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
  margin: 0;
}
.company__header {
  text-align: left;
}
.company__content {
  padding-left: 2.083vw;
  padding-right: 2.083vw;
  padding-top: 1.823vw;
}
@media screen and (max-width:1800px) {
  .bank__content{
    height: 15vw;
  }
}
</style>
