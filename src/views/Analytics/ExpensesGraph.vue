<template>
    <div class="card p-4 m-4">
      <div class="header__name d-flex flex-row justify-content-between align-items-center">
        <div class="page__name">
          <div class="page__name-title text-start">
            <h3>Доходы - Расходы - Прибыль</h3>
            <p class="mb-0">Настройте все параметры и нажмите “Сохранить”</p>
          </div>
        </div>
        <!-- <filters-button></filters-button> -->
      </div>
      <div class="header__settings d-flex gap-6 p-4 mt-4">
        <div class="header__settings-date">
          <div class="filters__period__flex">
            <div class="filter__name__standart">Выберите период</div>
            <div class="reset__date">Сбросить период</div>
          </div>
          <div class="filters__period mt-3 align-items-center">
            <div class="form-group mb-0">
              <input class="form-control" type="date" id="example-date-input" />
            </div>
            <div class="mx-4">
              <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
            </div>
            <div class="form-group mb-0">
              <input class="form-control" type="date" id="example-date-input" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page__content mx-4 d-flex gap-4">
      <div class="page__content-graph w-45 card p-4">
        <p class="fs-5 fw-bold m-0 text-start">
          Диаграмма доходов, расходов и прибыли
        </p>
        <div class="graph mt-6">
          <canvas id="myChart"></canvas>
        </div>
      </div>
      <div class="page__content-list w-55 card py-4">
        <div class="list__header d-flex justify-content-between align-items-center mx-4">
          <p class="fs-5 fw-bold m-0">Отчет доходов, расходов и прибыли</p>
          <button class="btn info-button mb-0"
            onclick="window.location.href = '/analytics/revenue-profit-avgcheck/report'">Подробнее</button>
        </div>
        <div class="list__table mt-3 me-4 pe-4">
          <table class="table table-hover text-wrap text-start">
            <thead>
              <tr>
                <th class="ps-4">Товар</th>
                <th></th>
                <th class="ps-2">Доходы</th>
                <th class="ps-2">Расходы</th>
                <th class="ps-2 w-10">Прибыль</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product of products" :key="product">
                <td class="ps-4">
                  <img src="@/assets/img/tshirt.png" class="me-2" />{{
                      product.name
                  }}
                </td>
                <td></td>
                <td>{{ product.revenue }} <span class="ms-1">₸</span></td>
                <td>{{ product.expenses }}<span class="ms-1">₸</span></td>
                <td>{{ product.income }} <span class="ms-1">₸</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Filters></Filters>
</template>
<script>
import Filters from "@/components/Filters.vue"
import { Chart } from "@/assets/js/plugins/chartjs.min";
// import chartlabelf from "chartjs-plugin-labels";
export default {
  components: { Filters },
  data() {
    return {
      revenueSwitch: true,
      expensesSwitch: true,
      incomeSwitch: true,
      products: [
        {
          name: "Куртка зеленая",
          revenue: 12000,
          expenses: 12000,
          income: 12000,
        },
        {
          name: "Куртка зеленая",
          revenue: 12000,
          expenses: 12000,
          income: 12000,
        },
        {
          name: "Куртка зеленая",
          revenue: 12000,
          expenses: 12000,
          income: 12000,
        },
        {
          name: "Куртка зеленая",
          revenue: 12000,
          expenses: 12000,
          income: 12000,
        },
        {
          name: "Куртка зеленая",
          revenue: 12000,
          expenses: 12000,
          income: 12000,
        },
        {
          name: "Куртка зеленая",
          revenue: 12000,
          expenses: 12000,
          income: 12000,
        },
        {
          name: "Куртка зеленая",
          revenue: 12000,
          expenses: 12000,
          income: 12000,
        },
        {
          name: "Куртка зеленая",
          revenue: 12000,
          expenses: 12000,
          income: 12000,
        },
        {
          name: "Куртка зеленая",
          revenue: 12000,
          expenses: 12000,
          income: 12000,
        },
        {
          name: "Куртка зеленая",
          revenue: 12000,
          expenses: 12000,
          income: 12000,
        },
      ],
    };
  },
  mounted() {
    const ctx = document.getElementById("myChart").getContext("2d");
    const data = {
      labels: ["Доходы", "Расходы", "Прибыль"],
      datasets: [
        {
          labels: "Деньги",
          data: [1380200, 560200, 3380200],
          backgroundColor: ["#8BAEF3", "#2D3748", "#4E78D8"],
        },
      ],
    };
    const config = {
      type: "pie",
      data: data,

      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            align: "start",
            labels: {
              font: {
                size: 16,
              },
            },
          },
        },
      },
      // plugins: [ChartDataLabels],
    };
    const myChart = new Chart(ctx, config);
  },
};
</script>
<style scoped>
.page__name {
  display: flex;
  justify-content: space-between;
}

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

.filter__name__standart {
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;

  letter-spacing: -0.553191px;

  color: #2d3748;
}

.form-group {
  width: 190px;
}

.reset__date {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  text-align: right;
  letter-spacing: -0.387234px;
  text-decoration-line: underline;
  cursor: pointer;
  /* Black for text */
  color: #2d3748;
}

.filters__period__flex {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
}

.form-switch .form-check-input:checked {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border-color: rgba(112, 146, 224, 1);
}

.info-button {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border-color: rgba(112, 146, 224, 1);
  color: #fff;
  font-size: 14px;
  letter-spacing: -0.387234px;
  line-height: 19px;
  font-weight: 600;
}

.page__content {
  max-height: 608px;
}

.list__table {
  height: 500px;
  overflow-y: auto;
}

.list__table::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.list__table::-webkit-scrollbar-track {
  background-color: #e9ecef;
  border-radius: 5px;
}

.list__table::-webkit-scrollbar-thumb {
  background-color: black;
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}

th {
  color: #a0aec0;
  font-size: 12px;
}

td {
  font-size: 14px;
  font-weight: 600;
}

.graph {
  position: relative;

  height: 398px;
  width: 650px;
}
</style>
