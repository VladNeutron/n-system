<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg main__padding">
    <the-header></the-header>
    <div class="header__summary card m-4 p-4">
      <div
        class="header__summary-top d-flex justify-content-between align-items-center"
      >
        <div class="top-name">
          <h3>Доходы - Расходы - Прибыль</h3>
          <p>Настройте все параметры и нажмите “Сохранить”</p>
        </div>
        <filters-button></filters-button>
      </div>
      <div
        class="header__summary-report p-4 d-flex justify-content-between align-items-center"
      >
        <div class="report__period">
          <div
            class="filters__period-date d-flex justify-content-between align-items-end"
          >
            <div class="filter__period-name">Выберите период</div>
            <div class="filter__period-reset">Сбросить период</div>
          </div>
          <div
            class="filters__period mt-3 gap-3 d-flex justify-content-between align-items-center"
          >
            <div class="form-group mb-0">
              <input class="form-control" type="date" id="example-date-input" />
            </div>
            <div>
              <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
            </div>
            <div class="form-group mb-0">
              <input class="form-control" type="date" id="example-date-input" />
            </div>
          </div>
        </div>
        <div
          class="report__sum d-flex justify-content-between gap-8 pt-3 align-items-center"
        >
          <div class="report__sum-block">
            <h5 class="mb-2">Доходы</h5>
            <p class="m-0">280 000 ₸</p>
          </div>
          <div class="report__sum-block">
            <h5 class="mb-2">Расходы</h5>
            <p class="m-0">280 000 ₸</p>
          </div>
          <div class="report__sum-block">
            <h5 class="mb-2">Прибыль</h5>
            <p class="m-0">280 000 ₸</p>
          </div>
        </div>
      </div>
      <p class="selected-date">21.04.2022 - 21.05.2022</p>
    </div>
    <div class="main__table card mx-4 d-flex flex-column">
      <div class="table-wrapper">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="p-0">
                <update-rating-cell></update-rating-cell>
              </th>

              <th class="p-0" v-for="(month, idx) of months" :key="idx">
                <month-cell
                  :monthIdx="idx"
                  @new-month="changeMonth"
                ></month-cell>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product of productName" :key="product">
              <td class="px-4 py-2 sticky-products">
                <div class="table__product d-flex gap-3">
                  <img src="@/assets/img/tshirt.png" alt="product" />
                  <p>{{ product }}</p>
                </div>
              </td>
              <td class="py-2" v-for="month in months" :key="month">
                <info-cell
                  :info="
                    getProductIncomeByMonth(
                      product,
                      this.selectedMonth || month
                    )
                  "
                ></info-cell>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<script>
import MonthCell from "@/components/AnalyticsComponents/MonthCell.vue";
import InfoCell from "@/components/AnalyticsComponents/InfoCell.vue";
import UpdateRatingCell from "@/components/AnalyticsComponents/UpdateRatingCell.vue";

import FiltersButton from "@/components/buttons/FiltersButton.vue";

export default {
  data() {
    return {
      products: [
        {
          product: {
            name: "Куртка зеленая",
            infoByMonth: {
              Январь: {
                revenue: 1000,
                expenses: 1000,
                income: 1000,
              },
              Февраль: {
                revenue: 2000,
                expenses: 2000,
                income: 2000,
              },
              Март: {
                revenue: 3000,
                expenses: 3000,
                income: 3000,
              },
              Апрель: {
                revenue: 4000,
                expenses: 4000,
                income: 4000,
              },
              Май: {
                revenue: 5000,
                expenses: 5000,
                income: 5000,
              },
              Июнь: {
                revenue: 6000,
                expenses: 6000,
                income: 6000,
              },
              Июль: {
                revenue: 7000,
                expenses: 7000,
                income: 7000,
              },
              Август: {
                revenue: 8000,
                expenses: 8000,
                income: 8000,
              },
              Сентябрь: {
                revenue: 9000,
                expenses: 9000,
                income: 9000,
              },
              Октябрь: {
                revenue: 10000,
                expenses: 10000,
                income: 10000,
              },
              Ноябрь: {
                revenue: 11000,
                expenses: 11000,
                income: 11000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },
        {
          product: {
            name: "Куртка красная",
            infoByMonth: {
              Январь: {
                revenue: 1100,
                expenses: 1100,
                income: 1100,
              },
              Февраль: {
                revenue: 2200,
                expenses: 2200,
                income: 2200,
              },
              Март: {
                revenue: 3300,
                expenses: 3300,
                income: 3300,
              },
              Апрель: {
                revenue: 4400,
                expenses: 4400,
                income: 4400,
              },
              Май: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июнь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Август: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Сентябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Октябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Ноябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },
        {
          product: {
            name: "Куртка Синяя",
            infoByMonth: {
              Январь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Февраль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Март: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Апрель: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Май: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июнь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Август: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Сентябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Октябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Ноябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },
        {
          product: {
            name: "Куртка Фиолетовая",
            infoByMonth: {
              Январь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Февраль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Март: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Апрель: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Май: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июнь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Август: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Сентябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Октябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Ноябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },
        {
          product: {
            name: "Куртка бежевая",
            infoByMonth: {
              Январь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Февраль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Март: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Апрель: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Май: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июнь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Август: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Сентябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Октябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Ноябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },
        {
          product: {
            name: "Куртка перламутровая",
            infoByMonth: {
              Январь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Февраль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Март: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Апрель: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Май: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июнь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Август: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Сентябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Октябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Ноябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },
        {
          product: {
            name: "Куртка янтарная",
            infoByMonth: {
              Январь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Февраль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Март: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Апрель: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Май: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июнь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Август: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Сентябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Октябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Ноябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },

        {
          product: {
            name: "Шорты",
            infoByMonth: {
              Январь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Февраль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Март: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Апрель: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Май: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июнь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Август: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Сентябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Октябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Ноябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },
        {
          product: {
            name: "Штаны",
            infoByMonth: {
              Январь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Февраль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Март: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Апрель: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Май: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июнь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Август: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Сентябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Октябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Ноябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },
        {
          product: {
            name: "Футболка",
            infoByMonth: {
              Январь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Февраль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Март: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Апрель: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Май: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июнь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Август: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Сентябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Октябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Ноябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },
        {
          product: {
            name: "Плащ",
            infoByMonth: {
              Январь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Февраль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Март: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Апрель: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Май: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июнь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Август: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Сентябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Октябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Ноябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },
        {
          product: {
            name: "Пальто",
            infoByMonth: {
              Январь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Февраль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Март: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Апрель: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Май: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июнь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Август: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Сентябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Октябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Ноябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },
        {
          product: {
            name: "Носки",
            infoByMonth: {
              Январь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Февраль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Март: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Апрель: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Май: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июнь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Июль: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Август: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Сентябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Октябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Ноябрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
              Декабрь: {
                revenue: 12000,
                expenses: 12000,
                income: 12000,
              },
            },
          },
        },
      ],
      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      selectedMonth: "",
    };
  },
  methods: {
    getProductIncomeByMonth(name, month) {
      const selectedProduct = this.products
        .filter((p) => p.product.name === name)
        .reduce((obj, v) => {
          return v.product.infoByMonth[month];
        }, {});

      return selectedProduct;
    },
    changeMonth(value) {
      this.selectedMonth = value;
    },
  },
  computed: {
    productName() {
      return this.products.map((p) => p.product.name);
    },
  },
  watch: {},
  components: {
    FiltersButton,
    MonthCell,
    InfoCell,
    UpdateRatingCell,
  },
};
</script>
<style scoped>
.top-name h3 {
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.66383px;
  color: #2d3748;
}
.top-name p {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.387234px;
  color: #a0aec0;
}
.header__summary-report {
  background: #f8f9fa;
  border-radius: 12px;
}
.filter__period-name {
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.553191px;
  color: #2d3748;
  text-align: left;
}
.filter__period-reset {
  font-weight: 400;
  font-size: 14px;
  color: #2d3748;
  text-decoration: underline;
  cursor: pointer;
}
.form-group {
  width: 190px;
}
.report__sum-block h5 {
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: -0.553191px;

  color: #2d3748;
}
.report__sum-block p {
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.66383px;

  color: #2d3748;
}
.selected-date {
  position: absolute;
  top: 106px;
  right: 49px;

  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.387234px;

  color: #2d3748;
}
.main__table {
  height: 600px;
}
.table-wrapper {
  overflow: auto;
}
thead {
  position: sticky;
  background-color: #fff;
  top: 0;
}
th {
  border-right: #a0aec0;
  border-bottom: #a0aec0;
}
tbody {
  overflow-x: auto;
}
.sticky-products {
}
.table-months {
  overflow-y: hidden;
}
.table-left {
  min-width: 370px;
}

.table-right {
  width: 100%;
  overflow-y: auto;
  min-height: 110px;
}
</style>
