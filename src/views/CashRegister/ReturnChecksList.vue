<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="page__name d-flex align-items-center ms-4">
      <div class="page__name-title text-start">
        <h3>Список возвратов</h3>
        <p class="mb-0">Внесите изменения и не забудьте нажать “Сохранить”</p>
      </div>
    </div>
    <div class="card pt-4 pb-2 m-4">
      <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
        <div>
          <button class="btn bg-gradient-dark mb-0" style="margin-right: 0.833vw"
            onclick="window.location.href = '/cash-register/cash-register-return'">
            <img src="@/assets/img/whtplus.svg" alt="" /> Оформить возврат
          </button>
          <button class="btn bg-gradient-dark mb-0"
            onclick="window.location.href = '/cash-register/cash-register-sale'">
            <img src="@/assets/img/whtplus.svg" alt="" /> Новая продажа
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
              <th scope="col" class="th__col" style="width: 25px"></th>
              <th width="1%" scope="col" class="th__col">№</th>
              <th scope="col" class="th__col">№ Возврата</th>
              <th scope="col" class="th__col">Дата</th>
              <th scope="col" class="th__col">Кассир</th>
              <th scope="col" class="th__col">Торговая точка</th>
              <th scope="col" class="th__col">Кол-во</th>
              <th scope="col" class="th__col">Сумма</th>

              <th scope="col" class="th__col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order) of paginationList" :key="order.id">
              <th scope="row">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="fcustomCheck1" />
                </div>
              </th>
              <th width="1%">{{ order.listNumber + 1 }}</th>
              <td>{{ order.id }}</td>
              <td>{{ order.date }}</td>
              <td>{{ order.responsible }}</td>
              <td>
                {{ order.storage }}
              </td>
              <td>{{ order.amount }}</td>
              <td>{{ order.sum }}</td>

              <td>
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
      <select class="form-select" v-model="filterResponsible">
        <option value="" disabled>Выберите кассира</option>
        <option v-for="cashier of responsibleList" :key="cashier">
          {{ cashier }}
        </option>
        <option value=""></option>
      </select>
      <p class="text-start my-2 fw-bold" for="marketplace">Торговая точка</p>
      <select class="form-select" v-model="filterStorage">
        <option value="" disabled>Выберите торговую точку</option>
        <option v-for="storage of storageList" :key="storage">
          {{ storage }}
        </option>
        <option value=""></option>
      </select>
    </the-filter>
    <delete-modal :title="'возврата'" :text="`чек возврата &quot;Чек №1213215&quot;`"></delete-modal>
  </main>
</template>

<script>
import Filter from "../../components/Filters.vue";
export default {
  data() {
    return {
      search: '',
      status: null,
      buttonText: "",
      orders: [
        {
          id: 150,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 151,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 152,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 153,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 154,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 155,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 156,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 157,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 158,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 159,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 160,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 161,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 162,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 163,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 164,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
      ],
      filterResponsible: "",
      filterStorage: "",
      paginationList: [],
    };
  },
  methods: {
    cancelFilters() {
      this.filterResponsible = "";
      this.filterStorage = "";
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
    responsibleList() {
      return this.createFilteredSet("responsible");
    },
    storageList() {
      return this.createFilteredSet("storage");
    },
    filteredOrders() {
      return this.orders.filter(
        (order) =>
          (this.filterResponsible === ""
            ? true
            : order.responsible === this.filterResponsible) &&
          (this.filterStorage === ""
            ? true
            : order.storage === this.filterStorage) &&
          (String(order.id).includes(String(this.search).toLowerCase())
            || String(order.responsible).toLowerCase().includes(String(this.search).toLowerCase())
            || String(order.storage).toLowerCase().includes(String(this.search).toLowerCase())
            || String(order.client).toLowerCase().includes(String(this.search).toLowerCase()))
      );
    },
  },
  components: {
    "the-filter": Filter,
  },
};
</script>

<style scoped>
.page__table {
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

.form__width {
  /* width: 15.99vw !important; */
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

@media screen and (max-width: 1600px) {
  .btn {
    font-size: 12px !important;
  }

  /* .search__adapt {
    display: none;
  } */

  /* .search__adapt__mob {
    display: contents;
  } */

  .search__size {
    width: 322px;
  }

  .card {
    height: 70vh;
  }
}
</style>
