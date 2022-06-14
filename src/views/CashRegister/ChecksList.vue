<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="page__name d-flex align-items-center ms-4">
      <lists-header>
        <template v-slot:title> Список чеков </template>
        <template v-slot:description>
          Внесите изменения и не забудьте нажать “Сохранить”
        </template>
      </lists-header>
    </div>
    <div class="card pt-4 pb-2 mb-4 ms-4">
      <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
        <div>
          <button class="btn bg-gradient-dark mb-0" style="margin-right: 0.833vw"
            onclick="window.location.href = '/cash-register/cash-register-sale'">
            <img src="@/assets/img/whtplus.svg" alt="" style="margin-right: 10px" />
            Новая продажа
          </button>
          <button class="btn bg-gradient-dark mb-0"
            onclick="window.location.href = '/cash-register/cash-register-return'">
            <img src="@/assets/img/whtplus.svg" alt="" style="margin-right: 10px" />
            Оформить возврат
          </button>
        </div>
        <div class="table__inputs d-flex gap-3 align-content-center">
          <list-search @searchFilter="(a) => search = a"></list-search>
          <print-button></print-button>
          <download-button></download-button>
          <filters-button></filters-button>
        </div>
      </div>
      <div style="margin-left: 25px">
        <div class="form-group m-0 search__adapt__mob">
          <div class="input-group mt-1 search__size">
            <span class="input-group-text"><img src="@/assets/css/icons/searchIcon.svg" alt="" /></span>
            <input class="form-control form__width" placeholder="Поиск..." id="search" type="text" />
          </div>
        </div>
      </div>
      <div class="page__table">
        <table class="table table-hover">
          <thead>
            <tr class="">
              <th scope="col" class="th__col" style="width: 25px; padding-left: 27px"></th>
              <th width="1%" scope="col" class="th__col">№</th>
              <th scope="col" class="th__col">№ чека</th>
              <th scope="col" class="th__col">Дата</th>
              <th scope="col" class="th__col">Кассир</th>
              <th scope="col" class="th__col">Торговая точка</th>
              <th scope="col" class="th__col">Кол-во</th>
              <th scope="col" class="th__col">Сумма</th>

              <th scope="col" class="th__col" style="padding-right: 27px"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order) of paginationList" :key="order.checkId">
              <th scope="row" style="padding-left: 27px">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="fcustomCheck1" />
                </div>
              </th>
              <td width="1%">{{ order.listNumber + 1 }}</td>
              <td>{{ order.checkId }}</td>
              <td>{{ order.date }}</td>
              <td>{{ order.cashier }}</td>
              <td>
                {{ order.marketplace }}
              </td>
              <td>{{ order.amount }}</td>
              <td>{{ order.sum }}</td>

              <td style="padding-right: 27px">
                <div class="dropdown">
                  <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer" alt="" />
                  <div class="dropdown-content">
                    <a style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#DeleteInv">Удалить</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination-component :filteredArr="filteredOrders" :strAmount="10" @PaginationReload="reloadPagination"
        class="pb-2"></pagination-component>
    </div>
  </main>
  <the-filter @no-filter="cancelFilters">
    <div class="filters__period__flex">
      <div class="filter__name__standart">Выберите период</div>
      <div class="reset__date">Сбросить период</div>
    </div>
    <div class="filters__period">
      <div class="form-group mb-0">
        <input class="form-control period__s" type="date" id="example-date-input" />
      </div>
      <div>
        <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
      </div>
      <div class="form-group mb-0">
        <input class="form-control period__s" type="date" id="example-date-input" />
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
  <delete-modal :title="'чека'" :text="`чек &quot;Чек №1213215&quot;`"></delete-modal>
</template>

<script>
import Filter from "../../components/Filters.vue";
import FiltersButton from "@/components/buttons/FiltersButton.vue";
export default {
  data() {
    return {
      status: null,
      buttonText: "",
      orders: [
        {
          checkId: 121,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "ТРЦ МОСКВА",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 122,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "Тест3",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 123,
          date: "11 ноя, 2021 19:23",
          cashier: "Московсая А.Р.",
          marketplace: "Тест2",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 124,
          date: "11 ноя, 2021 19:23",
          cashier: "Галб А.Р.",
          marketplace: "Тест4",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 125,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "ТРЦ МОСКВА",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 126,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "Тест1",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 127,
          date: "11 ноя, 2021 19:23",
          cashier: "Кулбыха А.Р.",
          marketplace: "Тест2",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 128,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "Тест3",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 129,
          date: "11 ноя, 2021 19:23",
          cashier: "Московсая А.Р.",
          marketplace: "Тест2",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 130,
          date: "11 ноя, 2021 19:23",
          cashier: "Галб А.Р.",
          marketplace: "Тест4",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 131,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "ТРЦ МОСКВА",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 132,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонова А.Р.",
          marketplace: "Тест1",
          amount: 8,
          sum: 12000,
        },
        {
          checkId: 133,
          date: "11 ноя, 2021 19:23",
          cashier: "Кулбыха А.Р.",
          marketplace: "Тест2",
          amount: 8,
          sum: 12000,
        },
      ],
      filterCashier: "",
      filterMarketPlace: "",
      paginationList: [],
      search: '',
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
            : order.marketplace === this.filterMarketPlace) &&
          (String(order.checkId).includes(String(this.search).toLowerCase()) 
          || String(order.cashier).toLowerCase().includes(String(this.search).toLowerCase())
          || String(order.marketplace).toLowerCase().includes(String(this.search).toLowerCase()))
      );
    },
  },

  components: {
    "the-filter": Filter,
    "filters-button": FiltersButton,
  },
};
</script>

<style scoped>
.bg-gradient-success {
  background: linear-gradient(135deg, #98ec2d 0%, #17ad37 100%);
}

.bg-gradient-warning {
  background: linear-gradient(135deg, #f6ca65 0%, #ef8734 100%);
}

.bg-gradient-danger {
  background: linear-gradient(135deg, #ff667c 0%, #ea0706 100%);
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
}

.bg-gradient-info {
  background: linear-gradient(135deg, #b2dbfb 0%, #459cf6 100%);
}

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
  height: 78vh;
}

.pagination {
  align-self: end;
}

.search__adapt__mob {
  display: none;
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
.page__table{
  overflow: auto;
}
.page__table::-webkit-scrollbar {
    background: #e2e8f0;
    border-radius: 0.78vw;
    width: 0.37vw;
}
  
.page__table::-webkit-scrollbar-thumb {
    border-radius: 0.78vw;
    background-color: #313860;
}
  
.page__table::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.78vw;
    background-color: #e2e8f0;
}

@media screen and (max-width: 1600px) {
  .btn {
    font-size: 12px !important;
  }
  .card {
    height: 70vh;
  }


  .search__adapt {
    display: none;
  }

  .search__adapt__mob {
    /* display: contents; */
  }

  .search__size {
    width: 322px;
  }
  .page__table{
    height: 70%;
  }
}
</style>
