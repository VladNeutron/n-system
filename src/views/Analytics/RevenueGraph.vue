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
            <h3>Выручка - Прибыль - Средний чек</h3>
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
          <div class="filters__period">
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
              />
              <label
                class="form-check-label text-start m-0 fs-6"
                for="flexSwitchCheckDefault"
                >Выручка</label
              >
            </div>
            <div class="form-switch d-flex align-items-center gap-2 m-0">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked=""
              />
              <label
                class="form-check-label text-start m-0 fs-6"
                for="flexSwitchCheckDefault"
                >Прибыль</label
              >
            </div>
            <div class="form-switch d-flex align-items-center gap-2 m-0">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked=""
              />
              <label
                class="form-check-label text-start m-0 fs-6"
                for="flexSwitchCheckDefault"
                >Средний чек</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="graphs d-flex m-4 gap-4">
      <div class="card p-4">
        <p class="fw-bold fs-5 text-start">Выручка</p>
        <div
          class="graph__description mb-3 d-flex justify-content-between align-items-center"
        >
          <div class="chart__stats" v-if="chartPercent > 0">
            <img src="@/assets/img/home/percerntPositive.svg" alt="" /> на
            {{ chartPercent }} % больше
            <span class="chart__stats__year"> в 2021</span>
          </div>
          <div class="chart__stats" v-else>
            <img src="@/assets/img/home/percentNegative.svg" alt="" /> на
            {{ chartPercent }} % больше
            <span class="chart__stats__year">в 2021</span>
          </div>
          <div class="chart__stats-date d-flex align-items-center">
            <span>Показать:</span
            ><select class="form-select">
              <option v-for="dates of selectChartsDate" :key="dates">
                {{ dates }}
              </option>
            </select>
          </div>
        </div>

        <canvas id="myChart" class="w-100"></canvas>
      </div>
    </div>
  </main>
</template>
<script>
import Filter from "@/components/Filters.vue";
import FilterButton from "@/components/buttons/FiltersButton.vue";
import Chart from "@/assets/js/plugins/chartjs.min.js";
export default {
  data() {
    return {
      chartPercent: 4,
      selectChartsDate: ["Месяц", "Год", "За все время"],
    };
  },
  mounted() {
    const ctx = document.getElementById("myChart").getContext("2d");

    var gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(0, "rgba(255, 255, 255, 0.1)");
    gradientStroke1.addColorStop(1, "rgba(112, 146, 224, 0.1)");
    // gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

    const data = {
      labels: ["Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      datasets: [
        {
          label: "Выручка",
          data: [23, 45, 125, 320, 300, 100, 250, 400, 500],
          fill: true,
          borderColor: "#8BAEF3",
          backgroundColor: gradientStroke1,
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        interaction: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          legend: {
            display: false,
            title: {
              display: false,
              text: "Legend Title",
            },
          },
        },
      },
    };

    const myChart = new Chart(ctx, config);
  },
  components: {
    "the-filter": Filter,
    "filter-button": FilterButton,
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
.chart__stats {
  text-align: left;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  color: #a0aec0;
}
.chart__stats img {
  margin-right: 4px;
}
.chart__stats__year {
  color: #2d3748;
  margin-left: 4px;
}
</style>
