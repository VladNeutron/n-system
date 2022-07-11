<template>
    <div class="card p-4 m-4">
      <div class="header__name d-flex flex-row justify-content-between align-items-center">
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
          <div class="filters__period align-items-center">
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
        <div class="header__settings-options d-flex flex-column justify-content-between align-items-start">
          <p class="fs-5 fw-bold m-0">Настройте видимость</p>

          <div class="d-flex gap-6 mb-2">
            <div class="form-switch d-flex align-items-center gap-2 m-0">
              <input class="form-check-input" type="checkbox" id="revenue" checked="" v-model="revenueSwitch" />
              <label class="form-check-label text-start m-0 fs-6" for="revenue">Выручка</label>
            </div>
            <div class="form-switch d-flex align-items-center gap-2 m-0">
              <input class="form-check-input" type="checkbox" id="income" checked="" v-model="incomeSwitch" />
              <label class="form-check-label text-start m-0 fs-6" for="income">Прибыль</label>
            </div>
            <div class="form-switch d-flex align-items-center gap-2 m-0">
              <input class="form-check-input" type="checkbox" id="avgCheck" checked="" v-model="avgSwitch" />
              <label class="form-check-label text-start m-0 fs-6" for="avgCheck">Средний чек</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="graphs m-4 gap-4">
      <div class="graph__card card p-4" v-show="revenueSwitch">
        <p class="fw-bold fs-5 text-start">Выручка</p>
        <div class="graph__description mb-3 d-flex justify-content-between align-items-center">
          <div class="chart__stats" v-if="chartPercent > 0">
            <img src="@/assets/img/home/percerntPositive.svg" alt="" /> на
            {{ chartPercent }} % больше
            <span class="chart__stats__year"> в 2022</span>
          </div>
          <div class="chart__stats" v-if="chartPercent < 0">
            <img src="@/assets/img/home/percentNegative.svg" alt="" /> на
            {{ chartPercent }} % больше
            <span class="chart__stats__year">в 2022</span>
          </div>
          <div class="chart__stats-date d-flex align-items-center">
            <span class="chart__stats">Показать:</span><select class="form-select border-0 outline-0">
              <option v-for="dates of selectChartsDate" :key="dates">
                {{ dates }}
              </option>
            </select>
          </div>
        </div>

        <canvas id="myChart1" class="w-100"></canvas>
      </div>
      <div class="graph__card card p-4" v-show="incomeSwitch">
        <p class="fw-bold fs-5 text-start">Прибыль</p>
        <div class="graph__description mb-3 d-flex justify-content-between align-items-center">
          <div class="chart__stats" v-if="chartPercent > 0">
            <img src="@/assets/img/home/percerntPositive.svg" alt="" /> на
            {{ chartPercent }} % больше
            <span class="chart__stats__year"> в 2022</span>
          </div>
          <div class="chart__stats" v-if="chartPercent > 0">
            <img src="@/assets/img/home/percentNegative.svg" alt="" /> на
            {{ chartPercent }} % больше
            <span class="chart__stats__year">в 2022</span>
          </div>
          <div class="chart__stats-date d-flex align-items-center">
            <span class="chart__stats">Показать:</span><select class="form-select border-0 outline-0">
              <option v-for="dates of selectChartsDate" :key="dates">
                {{ dates }}
              </option>
            </select>
          </div>
        </div>

        <canvas id="myChart2" class="w-100"></canvas>
      </div>
      <div class="graph__card card p-4" v-show="avgSwitch">
        <p class="fw-bold fs-5 text-start">Средний чек</p>
        <div class="graph__description mb-3 d-flex justify-content-between align-items-center">
          <div class="chart__stats" v-if="chartPercent > 0">
            <img src="@/assets/img/home/percerntPositive.svg" alt="" /> на
            {{ chartPercent }} % больше
            <span class="chart__stats__year"> в 2022</span>
          </div>
          <div class="chart__stats" v-if="chartPercent < 0">
            <img src="@/assets/img/home/percentNegative.svg" alt="" /> на
            {{ chartPercent }} % больше
            <span class="chart__stats__year">в 2022</span>
          </div>
          <div class="chart__stats-date d-flex align-items-center">
            <span class="chart__stats">Показать:</span><select class="form-select border-0 outline-0">
              <option v-for="dates of selectChartsDate" :key="dates">
                {{ dates }}
              </option>
            </select>
          </div>
        </div>

        <canvas id="myChart3" class="w-100"></canvas>
      </div>
    </div>
    <the-filter>
      <div class="filter__name__standart">Ответственный</div>
      <select class="form-select">
        <option value="" disabled selected>Выберите ответственного</option>
        <option>

        </option>
        <option value=""></option>
      </select>
      <div class="filter__name__standart">Склад</div>
      <select class="form-select">
        <option value="" disabled selected>Выберите склад</option>
        <option>

        </option>
        <option value=""></option>
      </select>
      <div class="filter__name__standart">Категории</div>
      <select class="form-select">
        <option value="" disabled selected>Выберите категориию</option>
        <option>

        </option>
        <option value=""></option>
      </select>
      <div class="filter__name__standart">Товар</div>
      <select class="form-select">
        <option value="" disabled selected>Выберите Товар</option>
        <option>

        </option>
        <option value=""></option>
      </select>
    </the-filter>
</template>
<script>
import Filter from "@/components/Filters.vue";
import FilterButton from "@/components/buttons/FiltersButton.vue";
import Chart from "@/assets/js/plugins/chartjs.min.js";
export default {
  data() {
    return {
      revenueSwitch: true,
      incomeSwitch: true,
      avgSwitch: true,
      chartPercent: 0,
      selectChartsDate: [
        "Сегодня",
        "День",
        "Неделя",
        "Месяц",
        "Год",
        "За все время",
      ],
    };
  },
  mounted() {
    const ctx1 = document.getElementById("myChart1").getContext("2d");
    const ctx2 = document.getElementById("myChart2").getContext("2d");
    const ctx3 = document.getElementById("myChart3").getContext("2d");

    var gradientStroke1 = ctx1.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(0, "rgba(255, 255, 255, 0.1)");
    gradientStroke1.addColorStop(1, "rgba(112, 146, 224, 0.1)");

    var gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(0, "rgba(255, 255, 255, 0.1)");
    gradientStroke2.addColorStop(1, "rgba(112, 146, 224, 0.1)");

    var gradientStroke3 = ctx3.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(0, "rgba(255, 255, 255, 0.1)");
    gradientStroke3.addColorStop(1, "rgba(112, 146, 224, 0.1)");
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

    const myChart1 = new Chart(ctx1, config);
    const myChart2 = new Chart(ctx2, config);
    const myChart3 = new Chart(ctx3, config);
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

.chart__stats-date select {
  font-size: 14px;
  font-weight: 600;
}

.graphs {
  display: grid;
  height: minmax(auto, 600px);
  grid-auto-columns: minmax(516px, 60%);
  grid-auto-rows: minmax(406px, 560px);
  grid-auto-flow: column;

  align-items: flex-start;
}

.graph__card {
  /* align-self: flex-start; */
  max-width: 100%;
  min-height: 406px;
}

@media screen and (max-width: 1600px) {
  .graphs {
    display: grid;
    height: minmax(auto, 600px);
    grid-auto-columns: minmax(5px, 60%);
    grid-auto-rows: minmax(406px, 560px);
    grid-auto-flow: column;
    align-items: flex-start;
  }
}
</style>
