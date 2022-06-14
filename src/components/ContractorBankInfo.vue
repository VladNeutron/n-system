<template>
  <div class="px-2">
    <div class="d-flex justify-content-between align-items-center">
      <div class="page__name-title text-start">
        <h3>Добавить банковский счет</h3>
        <p class="mb-0">Внесите изменения и нажмите “Сохранить”</p>
      </div>
      <div>
        <button class="btn bg-gradient-info">Сохранить изменения</button>
      </div>
    </div>
    <div class="bank__body row mt-4">
      <div class="bank__content col-6" v-for="item in items" :key="item">
        <div class="bank__header">
          <div class="bank__yname">
            <p class="yname__text">{{ item.name }}</p>
            <span class="currency"><img :src="item.img" style="width: 0.625vw" alt="" /></span>
          </div>
          <img @click="openModal(item.id)" src="@/assets/img/edit.svg" style="width: 1.25vw; cursor: pointer" alt="" />
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
      <div class="bank__footer col-6">
        <button class="btn add__bank" data-bs-toggle="modal" data-bs-target="#InfoThird">
          <img src="@/assets/img/plus.svg" style="width: 0.833vw; margin-right: 0.833vw" alt="" />
          Добавить счет
        </button>
      </div>
    </div>
    <add-bank-info-modal></add-bank-info-modal>
    <edit-bank-info-modal :product="modal.modalProductName"></edit-bank-info-modal>
  </div>
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
      items: [
        {
          id: 1,
          name: "Сбербанк Евро",
          fullName: "Дочерний банк акционерное общество «Сбербанк»",
          bik: "SABRKZKA",
          kbe: "14",
          iik: "KZ82125KZT1001300306",
          inn: "881206784000",
          img: require("@/assets/img/euro.svg"),
        },
        {
          id: 2,
          name: "Сбербанк Тенге",
          fullName: "Дочерний банк акционерное общество «Сбербанк»",
          bik: "SABRKZKA",
          kbe: "14",
          iik: "KZ82125KZT1001300306",
          inn: "881206784000",
          img: require("@/assets/img/tenge.svg"),
        },
        {
          id: 3,
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
};
</script>

<style scoped>
.bg-gradient-info {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
}

.add__bank {
  display: flex;
  align-items: center;
  border: 1px dashed #2d3748;
  border-radius: 12px;
  background: transparent;
  padding: 6.354vw 15.313vw 5vw 15.313vw;
  font-weight: 600;
  font-size: 0.833vw;
  color: #2d3748;
  text-transform: none;
  white-space: nowrap;
}

.bank__footer {
  margin-top: 1.083vw;
  display: flex;
  justify-content: center;
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
  width: 50%;

}
</style>
