<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="page__name d-flex align-items-center ms-4">
      <div class="page__name-title text-start">
        <h3>Отложенные чеки</h3>
        <p class="mb-0">Внесите изменения и не забудьте нажать “Сохранить”</p>
      </div>
    </div>
    <div class="card pt-4 pb-6 m-4">
      <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
        <div>
          <button
            class="btn bg-gradient-dark mb-0"
            style="margin-right: 0.833vw"
          >
            Продолжить продажу
            <img
              src="@/assets/img/arrow_forward.svg"
              style="width: 1.042vw"
              alt=""
            />
          </button>
        </div>
        <div class="table__inputs d-flex gap-3 align-content-center">
          <div class="form-group m-0">
            <div class="input-group">
              <span class="input-group-text"
                ><img src="@/assets/css/icons/searchIcon.svg" alt=""
              /></span>
              <input
                class="form-control form__width"
                placeholder="Поиск..."
                id="search"
                type="text"
              />
            </div>
          </div>
          <print-button></print-button>
          <download-button></download-button>
          <filters-button></filters-button>
        </div>
      </div>
      <div class="page__table">
        <table class="table table-hover">
          <thead>
            <tr class="">
              <th scope="col" class="th__col" style="width: 25px"></th>
              <th width="1%" scope="col" class="th__col">№</th>
              <th scope="col" class="th__col">№ чека</th>
              <th scope="col" class="th__col">Дата</th>
              <th scope="col" class="th__col">Кассир</th>
              <th scope="col" class="th__col">Торговая Точка</th>
              <th scope="col" class="th__col">Кол-во</th>
              <th scope="col" class="th__col">Сумма</th>

              <th scope="col" class="th__col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, i) of paginationList" :key="order.checkId">
              <th scope="row">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="fcustomCheck1"
                  />
                </div>
              </th>
              <th width="1%">{{ i + 1 }}</th>
              <td>{{ order.checkId }}</td>
              <td>{{ order.date }}</td>
              <td>{{ order.cashier }}</td>
              <td>
                {{ order.marketplace }}
              </td>
              <td>{{ order.amount }}</td>
              <td>{{ order.sum }}</td>

              <td>
                <div class="dropdown">
                  <img
                    src="@/assets/img/dots.svg"
                    style="width: 1.563vw; cursor: pointer"
                    alt=""
                  />
                  <div class="dropdown-content">
                    <a
                      style="cursor: pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#DeleteInv"
                      >Удалить</a
                    >
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination-component
        :filteredArr="filteredOrders"
        :strAmount="10"
        @PaginationReload="reloadPagination"
        class="pb-4"
      ></pagination-component>
    </div>
    <the-filter @no-filter="cancelFilters">
      <div class="filters__period__flex">
        <div class="filter__name__standart">Выберите период</div>
        <div class="reset__date">Сбросить период</div>
      </div>
      <div class="filters__period">
        <div class="form-group mb-0">
          <input
            class="form-control period__s"
            type="date"
            id="example-date-input"
          />
        </div>
        <div>
          <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
        </div>
        <div class="form-group mb-0">
          <input
            class="form-control period__s"
            type="date"
            id="example-date-input"
          />
        </div>
      </div>
      <p class="text-start my-2 fw-bold" for="cashier">Кассир</p>
      <select class="form-select" v-model="filterCashier">
        <option value="" disabled>Выберите кассира</option>
        <option v-for="cashier of orderCashierList" :key="cashier">
          {{ cashier }}
        </option>
        <option value=""></option>
      </select>
      <p class="text-start my-2 fw-bold" for="marketplace">Торговая точка</p>
      <select class="form-select" v-model="filterMarketPlace">
        <option value="" disabled>Выберите торговую точку</option>
        <option v-for="marketplace of orderMarketplaceList" :key="marketplace">
          {{ marketplace }}
        </option>
        <option value=""></option>
      </select>
    </the-filter>
    <the-filter></the-filter>
    <delete-modal
      :title="'чека'"
      :text="`отложенный чек &quot;Чек №1213215&quot;`"
    ></delete-modal>
  </main>
</template>

<script>
import Filter from "../../components/Filters.vue";
export default {
  data() {
    return {
      status: null,
      buttonText: "",
      orders: [
        {
          checkId: 1213215,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "ТРЦ Москва",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 1213215,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "ТРЦ Москва",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 1213215,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "ТРЦ Москва",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 1213215,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "ТРЦ Москва",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 1213215,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "ТРЦ Москва",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 1213215,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "ТРЦ Москва",
          amount: 8,
          sum: 12000,
        },
      ],
      filterCashier: "",
      filterMarketPlace: "",
      paginationList: [],
    };
  },
  methods: {
    cancelFilters() {
      this.filterCashier = "";
      this.filterMarketPlace = "";
    },
    createFilteredSet(key) {
      const unfiltered = this.orders.map((obj) => obj[key]);
      return [...new Set(unfiltered)];
    },
    reloadPagination(arr) {
      this.paginationList = arr;
    },
  },
  computed: {
    orderCashierList() {
      return this.createFilteredSet("cashier");
    },
    orderMarketplaceList() {
      return this.createFilteredSet("marketplace");
    },
    filteredOrders() {
      return this.orders.filter(
        (order) =>
          (this.filterCashier === ""
            ? true
            : order.cashier === this.filterCashier) &&
          (this.filterMarketPlace === ""
            ? true
            : order.marketplace === this.filterMarketPlace)
      );
    },
  },
  components: {
    "the-filter": Filter,
  },
};
</script>

<style scoped>
.form__width {
  width: 15.99vw !important;
}
.bg-gradient-dark {
  font-weight: 600;
  font-size: 0.729vw;
  color: #ffffff;
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

.th__col {
  color: #a0aec0 !important;
}

th {
  color: #2d3748;
  font-size: 12px;
}

td {
  font-size: 14px;
  font-weight: 600;
}

.card {
  max-height: 838px;
}

.pagination {
  align-self: end;
}
.period__s {
  width: 191px !important;
}
.reset__date {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;

  letter-spacing: -0.387234px;
  text-decoration-line: underline;

  /* Black for text */
  color: #2d3748;
}
.filters__period {
  display: flex;
  justify-content: space-between;
  align-items: center;

  align-items: baseline;
  margin-top: 0.833vw;
  margin-bottom: 0.833vw;
}
.filters__period__flex {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 1600px) {
  .btn {
    font-size: 12px !important;
  }
}
</style>
