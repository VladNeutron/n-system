<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Список возвратов </template>
            <template v-slot:description>
              Внесите изменения и не забудьте нажать “Сохранить”
            </template>
          </lists-header>
          <div class="card pt-4 pb-6">
            <div
              class="d-flex justify-content-between align-items-center mx-4 mb-4"
            >
              <div>
                <button
                  class="btn bg-gradient-dark mb-0"
                  style="
                    margin-right: 0.833vw;
                    font-size: 14px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                  "
                  onclick="window.location.href = '/purchases/create-supplier-return'"
                >
                  <img
                    src="@/assets/img/whtplus.svg"
                    alt=""
                    style="margin-right: 10px"
                  />
                  Новый возврат
                </button>
              </div>
              <div class="table__inputs d-flex gap-3 align-content-center">
                <list-search></list-search>
                <print-button></print-button>
                <download-button></download-button>
                <filters-button></filters-button>
              </div>
            </div>
            <div class="page__table">
              <table class="table table-hover table-striped">
                <thead>
                  <tr class="">
                    <th
                      scope="col"
                      class="th__col"
                      style="width: 25px padding-left:27px"
                    ></th>
                    <th width="1%" scope="col" class="th__col">№</th>
                    <th scope="col" class="th__col">Номер Возврата</th>
                    <th scope="col" class="th__col">Дата</th>
                    <th scope="col" class="th__col">Ответственный</th>
                    <th scope="col" class="th__col">Поставщик</th>
                    <th scope="col" class="th__col">Склад</th>
                    <th scope="col" class="th__col">Кол-во</th>
                    <th scope="col" class="th__col">Сумма</th>
                    <th scope="col" class="th__col">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(order, i) of paginationList" :key="order.id">
                    <th scope="row" style="padding-left: 27px">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="fcustomCheck1"
                        />
                      </div>
                    </th>
                    <td width="1%">{{ i + 1 }}</td>
                    <td>{{ order.id }}</td>
                    <td>{{ order.date }}</td>
                    <td>{{ order.responsible }}</td>
                    <td>{{ order.supplier }}</td>
                    <td>
                      {{ order.storage }}
                    </td>
                    <td>{{ order.amount }}</td>
                    <td>{{ order.sum }}</td>

                    <td class="dropdown">
                      <img
                        src="@/assets/img/dots.svg"
                        style="width: 1.563vw; cursor: pointer"
                        alt=""
                      />
                      <div class="dropdown-content">
                        <a
                          style="cursor: pointer"
                          onclick="window.location.href = '/purchases/edit-supplier-return'"
                          >Редактировать</a
                        >
                        <hr />
                        <a
                          style="cursor: pointer"
                          data-bs-toggle="modal"
                          data-bs-target="#DeleteInv"
                          >Удалить</a
                        >
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
            ></pagination-component>
          </div>
        </div>
      </div>
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
      <p class="text-start my-2 fw-bold" for="storage">Склад</p>
      <select class="form-select" v-model="filterStorage">
        <option value="" disabled>Выберите склад</option>
        <option v-for="storage of orderStorageList" :key="storage">
          {{ storage }}
        </option>
        <option value=""></option>
      </select>
      <p class="text-start my-2 fw-bold" for="responsible">Ответственный</p>
      <select class="form-select" v-model="filterResponsible">
        <option value="" disabled>Выберите ответственного</option>
        <option v-for="responsible of orderResponsibleList" :key="responsible">
          {{ responsible }}
        </option>
        <option value=""></option>
      </select>
      <p class="text-start my-2 fw-bold" for="supplier">Поставщик</p>
      <select class="form-select" v-model="filterSupplier">
        <option value="" disabled>Выберите поставщика</option>
        <option v-for="supplier of orderSupplierList" :key="supplier">
          {{ supplier }}
        </option>
        <option value=""></option>
      </select>
    </the-filter>
    <delete-modal
      :title="'возврата поставщикам'"
      :text="`документ &quot;Возврат №12132145&quot;`"
    ></delete-modal>
  </main>
</template>

<script>
import Filter from "../../components/Filters.vue";
import FiltersButton from "@/components/buttons/FiltersButton.vue";
export default {
  data() {
    return {
      paginationList: [],
      status: null,
      buttonText: "",
      orders: [
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
      ],
      filterStorage: "",
      filterResponsible: "",
      filterSupplier: "",
    };
  },
  methods: {
    reloadPagination(arr) {
      console.log(arr);
      this.paginationList = arr;
    },
    cancelFilters() {
      this.filterStorage = "";
      this.filterResponsible = "";
      this.filterSupplier = "";
    },
    createFilteredSet(key) {
      const unfiltered = this.orders.map((obj) => obj[key]);
      return [...new Set(unfiltered)];
    },
  },
  computed: {
    orderStorageList() {
      return this.createFilteredSet("storage");
    },
    orderResponsibleList() {
      return this.createFilteredSet("responsible");
    },
    orderSupplierList() {
      return this.createFilteredSet("supplier");
    },
    filteredOrders() {
      return this.orders.filter(
        (order) =>
          (this.filterStorage === ""
            ? true
            : order.storage === this.filterStorage) &&
          (this.filterResponsible === ""
            ? true
            : order.responsible === this.filterResponsible) &&
          (this.filterSupplier === ""
            ? true
            : order.supplier === this.filterSupplier)
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
.dropdown {
  width: 100%;
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
.page__table {
  height: 27.6vw;
}
@media screen and (max-width: 1600px) {
  .btn {
    font-size: 12px !important;
  }
  td,
  th {
    font-size: 12px;
  }
  .page__table::-webkit-scrollbar {
    background: #e2e8f0;
    border-radius: 0.78vw;
    width: 0.37vw;
  }
  .page__table::-webkit-scrollbar-thumb {
    border-radius: 0.78vw;
    background-color: #a0aec0;
  }
  .page__table::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.78vw;
    background-color: #e2e8f0;
  }
  .page__table {
    overflow-x: scroll;
  }
}
</style>
