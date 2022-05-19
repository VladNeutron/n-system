<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg main__padding">
    <the-header></the-header>
    <div class="container-fluid">
    <div
      class="page__name d-flex align-items-center justify-content-between"
    >
      <div class="page__name-title text-start" v-if="activeBtn == 1">
        <h3>Добавление контрагента</h3>
        <p class="mb-0">Добавьте информацию и нажмите “Сохранить”</p>
      </div>
      <div class="page__name-title text-start" v-if="activeBtn == 2">
        <h3>Банковские счета контрагента</h3>
        <p class="mb-0">Добавьте информацию и нажмите “Сохранить”</p>
      </div>
      <div class="header__buttons">
        <button
          class="btn filter__button mb-0"
          :class="{ active: activeBtn == 1 }"
          @click="activeBtn = 1"
        >
          <img
            src="@/assets/img/note.svg"
            style="width: 1.25vw; margin-right: 0.417vw"
            alt=""
          />
          Информация о контрагенте
        </button>
        <button
          class="btn filter__button mb-0"
          :class="{ active: activeBtn == 2 }"
          @click="activeBtn = 2"
        >
          <img
            src="@/assets/img/monetization_on.svg"
            style="width: 1.25vw; margin-right: 0.417vw"
            alt=""
          />
          Банковские счета
        </button>
      </div>
    </div>
    <div class="card pt-2 pb-4 mt-4 px-4">
      <contractor-info-comp v-if="activeBtn == 1"></contractor-info-comp>
      <contractor-bank-info v-if="activeBtn == 2"></contractor-bank-info>
    </div>
    </div>
  </main>
</template>

<script>
import ContractorInfoComp from "@/components/ContractorInfoComp.vue";
import ContractorBankInfo from "@/components/ContractorBankInfo.vue";
export default {
  components: { ContractorInfoComp, ContractorBankInfo },
  data() {
    return {
      activeBtn: 1,
    };
  },
};
</script>

<style scoped>
.header__buttons {
  display: flex;
}
.active {
  background: #ffffff !important;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07) !important;
}
.filter__button {
  display: flex;
  margin-right: 0.938vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
  align-items: center;
  background: transparent;
  box-shadow: none;
}
</style>
