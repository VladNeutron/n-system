<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="card pt-4 pb-4 card__padding">
      <div class="page__name d-flex align-items-center justify-content-between">
        <div class="page__name-title text-start">
          <h3>Отчеты “Продажи по кассе”</h3>
          <p class="mb-0">
            Здесь можно увидеть все данные по продажам по кассе
          </p>
        </div>
        <div class="buttons">
          <comment-button style="margin-right: 24px"></comment-button>
          <action-button style="margin-right: 24px"></action-button>
          <filters-button></filters-button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="filters__period__flex">
            <div class="filter__name__standart">Выберите период</div>
            <div class="reset__date">Сбросить период</div>
          </div>
          <div class="filters__period">
            <div class="form-group">
              <input class="form-control" type="date" id="example-date-input" />
            </div>
            <div>
              <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
            </div>
            <div class="form-group">
              <input class="form-control" type="date" id="example-date-input" />
            </div>
          </div>
          <div class="analytic__sales">
            <div class="analytic__content">
              <div class="analytic__header">
                <p class="analytic__main">Аналитика продаж</p>
                <div class="analytic__sec">
                  <img
                    src="@/assets/img/calendar_today.svg"
                    style="width: 1.25vw; margin-right: 0.521vw"
                    alt=""
                  />
                  21.04.2022 - 21.05.2022
                </div>
              </div>
              <div class="analytic__body">
                <div class="analytic__body__content">
                  <p class="analytic__title">481 700 ₸</p>
                  <p class="analytic__untitle">ВЫРУЧКА</p>
                </div>
                <div class="analytic__body__content">
                  <p class="analytic__title">132</p>
                  <p class="analytic__untitle">ЧЕКИ</p>
                </div>
                <div class="analytic__body__content">
                  <p class="analytic__title">12 000 ₸</p>
                  <p class="analytic__untitle">СРЕДНИЙ ЧЕК</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="bg-gradient-dark border-radius-lg py-3 pe-1 mb-3 chars__adapt"
            style=""
          >
            <canvas
              id="chart-bars"
              class="chart-canvas chartjs-render-monitor"
              height="170"
              style="height: 15.938vw; width: 45.417vw; box-sizing: border-box"
              width="495"
            ></canvas>
          </div>
        </div>
      </div>
      <div class="order__table">
        <div class="order__table__content">
          <div class="order__table__body">
            <table class="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="th__col"
                    style="border-left: 0; border-right: 0"
                  >
                    №
                  </th>
                  <th
                    scope="col"
                    class="th__col"
                    style="border-left: 0; border-right: 0"
                  >
                    Товар
                  </th>
                  <th
                    scope="col"
                    class="th__col"
                    style="border-left: 0; border-right: 0"
                  >
                    Категория
                  </th>
                  <th
                    scope="col"
                    class="th__col"
                    style="border-left: 0; border-right: 0"
                  >
                    Цвет
                  </th>
                  <th
                    scope="col"
                    class="th__col"
                    style="border-left: 0; border-right: 0"
                  >
                    Кол-во
                  </th>
                  <th
                    scope="col"
                    class="th__col"
                    style="border-left: 0; border-right: 0"
                  >
                    Цена продажи
                  </th>
                  <th
                    scope="col"
                    class="th__col"
                    style="border-left: 0; border-right: 0"
                  >
                    Сумма скидки
                  </th>
                  <th
                    scope="col"
                    class="th__col"
                    style="border-left: 0; border-right: 0"
                  >
                    Сумма
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- v-for="(item, i) in items" :key="item" -->
                <tr
                  v-for="(item, i) in items"
                  :key="item"
                  @click="openModal(item.id)"
                >
                  <th scope="row" style="border-right: 0; border-left: 0">
                    {{ i + 1 }}
                  </th>
                  <td style="border-left: 0; border-right: 0; display: flex">
                    <img
                      :src="item.img"
                      style="width: 2.5vw; margin-right: 0.833vw"
                      alt=""
                    />
                    {{ item.name }}
                  </td>
                  <td style="border-left: 0; border-right: 0">
                    {{ item.category }}
                  </td>
                  <td style="border-left: 0; border-right: 0">
                    {{ item.color }}
                  </td>
                  <td style="border-left: 0; border-right: 0">
                    {{ item.count }}
                  </td>
                  <td style="border-left: 0; border-right: 0">
                    {{ item.price }} ₸
                  </td>
                  <td style="border-left: 0; border-right: 0">
                    {{ item.discount }} ₸
                  </td>
                  <td style="border-left: 0; border-right: 0">
                    {{ item.price * item.count - item.discount }} ₸
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <checks-modal :product="modal.modalProductName"></checks-modal>
    <filters></filters>
  </main>
</template>
<style scoped>
.buttons {
  display: flex;
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
  height: 19.792vw;
  overflow-y: scroll;
}

.dropdown {
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

.analytic__untitle {
  font-weight: 600;
  font-size: 0.833vw;
  color: #a0aec0;
}

.analytic__title {
  font-weight: 600;
  font-size: 1.875vw;
  color: #2d3748;
}

.analytic__body {
  display: flex;
  justify-content: space-around;
}

.analytic__sec {
  font-weight: 400;
  font-size: 0.833vw;
  color: #2d3748;
}

.analytic__main {
  font-weight: 600;
  font-size: 1.042vw;
  color: #2d3748;
}

.analytic__content {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.146vw 1.25vw 1.927vw 1.25vw;
}

.analytic__header {
  display: flex;
  justify-content: space-between;
}

.page__name {
  margin-bottom: 1.25vw;
}

.filters__checkbox__label {
  font-weight: 400;
  font-size: 0.729vw;
  color: #252f40;
}

.filters__period__flex {
  display: flex !important;
  justify-content: space-between;
  align-items: flex-end;
  width: 21.667vw;
}

.reset__date {
  font-weight: 400;
  font-size: 0.729vw;
  color: #2d3748;
  text-decoration: underline;
  cursor: pointer;
}

.filters__body .filter__name__standart {
  font-weight: 600;
  font-size: 20px;
  color: #2d3748;
  text-align: left;
}

.filters__period {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 0.833vw;
  margin-bottom: 0.833vw;
  width: 21.667vw;
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

.card__padding {
  padding-left: 1.667vw;
  padding-right: 1.667vw;
}
@media screen and (max-width: 1600px) {
  .chars__adapt {
    width: 490px;
  }
  .btn {
    font-size: 12px !important;
  }
  .comment {
    align-items: center;
  }
  .action {
    padding: 0.75rem 1.5rem;
  }
  td,
  th {
    font-size: 14px;
  }
  .order__table__body {
    height: 400px;
  }
}
</style>
<script>
import ChecksModal from "@/components/ChecksModal.vue";
import FiltersButton from "@/components/buttons/FiltersButton.vue";
import Chart from "@/assets/js/plugins/chartjs.min.js";
import CounterModal from "@/components/CounterModal.vue";
import Filters from "@/components/Filters.vue";
export default {
  components: {
    FiltersButton,
    ChecksModal,
    CounterModal,
    Filters,
  },
  data() {
    return {
      modal: {
        modalProductName: {},
      },
      checks: [],
      items: [
        {
          id: 0,
          img: require("@/assets/img/tshirt.png"),
          category: "Верхняя одежда",
          name: "Куртка Белая",
          color: "Белый",
          price: 29000,
          count: 2,
          discount: 535,
        },
        {
          id: 1,
          img: require("@/assets/img/tshirt.png"),
          category: "Верхняя одежда",
          name: "Куртка Белая",
          color: "Белый",
          price: 29000,
          count: 2,
          discount: 535,
        },
        {
          id: 2,
          img: require("@/assets/img/tshirt.png"),
          category: "Верхняя одежда",
          name: "Куртка Белая",
          color: "Белый",
          price: 29000,
          count: 2,
          discount: 535,
        },
        {
          id: 3,
          img: require("@/assets/img/tshirt.png"),
          category: "Верхняя одежда",
          name: "Куртка Белая",
          color: "Белый",
          price: 29000,
          count: 2,
          discount: 535,
        },
        {
          id: 4,
          img: require("@/assets/img/tshirt.png"),
          category: "Верхняя одежда",
          name: "Куртка Красная",
          color: "Белый",
          price: 29000,
          count: 2,
          discount: 535,
        },
      ],
    };
  },
  methods: {
    openModal(id) {
      this.modal.modalProductName = this.items.filter(
        (item) => item.id == id
      )[0];
      $("#ChecksModal").modal("show");
    },
  },
  mounted() {
    const ctx = document.getElementById("chart-bars").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
        ],
        datasets: [
          {
            label: "Кол-во",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            backgroundColor: "#fff",
            data: [
              400, 400, 800, 1000, 1200, 1200, 1200, 1250, 1280, 1200, 1000,
              1200, 400,
            ],
            maxBarThickness: 6,
            color: "#fff",
            borderColor: "#fff",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },

        tooltips: {
          enabled: true,
          mode: "index",
          intersect: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 500,
                beginAtZero: true,
                padding: 0,
                fontSize: 14,
                lineHeight: 3,
                fontColor: "#fff",
                fontStyle: "normal",
                fontFamily: "Open Sans",
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
                padding: 20,
              },
            },
          ],
        },
      },
    });
  },
};
</script>
