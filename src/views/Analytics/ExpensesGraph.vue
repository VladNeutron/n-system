<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="card p-4 m-4">
      <div
        class="header__name d-flex flex-row justify-content-between align-items-center"
      >
        <div class="page__name">
          <div class="page__name-title text-start">
            <h3>Доходы - Расходы - Прибыль</h3>
            <p class="mb-0">Настройте все параметры и нажмите “Сохранить”</p>
          </div>
        </div>
        <filter-button class="m-0"></filter-button>
      </div>
      <div class="header__settings d-flex gap-6 p-4 mt-4">
        <div class="header__settings-date">
          <div class="filters__period__flex">
            <div class="filter__name__standart fs-5 fw-bold">
              Выберите период
            </div>
            <div class="reset__date">Сбросить период</div>
          </div>
          <div class="filters__period mt-3">
            <div class="form-group mb-0">
              <input class="form-control" type="date" id="example-date-input" />
            </div>
            <div class="mx-2">
              <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
            </div>
            <div class="form-group mb-0">
              <input class="form-control" type="date" id="example-date-input" />
            </div>
          </div>
        </div>
        <div
          class="header__settings-options d-flex flex-column justify-content-between align-items-start"
        >
          <p class="fs-5 fw-bold m-0">Настройте видимость</p>

          <div class="d-flex gap-6 mb-2">
            <div class="form-switch d-flex align-items-center gap-2 m-0">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked=""
                v-model="revenueSwitch"
              />
              <label
                class="form-check-label text-start m-0 fs-6"
                for="flexSwitchCheckDefault"
                >Доходы</label
              >
            </div>
            <div class="form-switch d-flex align-items-center gap-2 m-0">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked=""
                v-model="expensesSwitch"
              />
              <label
                class="form-check-label text-start m-0 fs-6"
                for="flexSwitchCheckDefault"
                >Расходы</label
              >
            </div>
            <div class="form-switch d-flex align-items-center gap-2 m-0">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked=""
                v-model="incomeSwitch"
              />
              <label
                class="form-check-label text-start m-0 fs-6"
                for="flexSwitchCheckDefault"
                >Прибыль</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page__content mx-4 d-flex gap-4">
      <div class="page__content-graph w-45 card p-4"></div>
      <div class="page__content-list w-55 card p-4"></div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      revenueSwitch: true,
      expensesSwitch: true,
      incomeSwitch: true,
    };
  },
};
</script>
<style scoped>
.page__name h3 {
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
}
.page__name p {
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  color: gray;
}
.header__settings {
  background-color: #f8f9fa;
  border-radius: 12px;
}
.filters__period {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0;
}
.filters__period__flex {
  display: flex !important;
  justify-content: space-between;
  align-items: flex-end;
}
.form-switch .form-check-input:checked {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border-color: rgba(112, 146, 224, 1);
}
</style>
