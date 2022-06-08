<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Реализации </template>
            <template v-slot:description>
              Выберите необходимые вам документы
            </template>
          </lists-header>
          <!-- <div class="page__name d-flex align-items-center ms-4">
            <div class="page__name-title text-start">
              <h3>Список заказов</h3>
              <p class="mb-0">Внесите изменения и не забудьте нажать “Сохранить”</p>
            </div>
          </div> -->
          <div class="card py-4 main__card">
            <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
              <button class="btn bg-gradient-dark mb-0" style="
                  font-size: 14px;
                  font-weight: 600;
                  display: flex;
                  align-items: center;
                " onclick="window.location.href = '/accounting/documents/create-implementation'">
                <img src="@/assets/img/whtplus.svg" alt="" style="margin-right: 10px" />
                Создать реализацию
              </button>
              <div class="table__inputs d-flex gap-3 align-content-center align-items-center">
                <list-search></list-search>
                <print-button></print-button>
                <download-button></download-button>
                <filter-button class="mb-0"></filter-button>
              </div>
            </div>
            <div class="page__table">
              <div class="table-wrapper">
                <table class="table table-hover text-wrap text-start table-striped">
                  <thead>
                    <tr class="text-start">
                      <th scope="col" class="th__col" style="width: 1px; padding-left: 27px"></th>
                      <th scope="col" class="th__col">№</th>
                      <th scope="col" class="th__col">номер документа</th>
                      <th scope="col" class="th__col">Дата И ВРЕМЯ</th>
                      <th scope="col" class="th__col">контрагент</th>
                      <th scope="col" class="th__col">Ответственный</th>
                      <th scope="col" class="th__col">Склад</th>
                      <th scope="col" class="th__col">Количество</th>
                      <th scope="col" class="th__col">сумма</th>
                      <th scope="col" class="th__col">действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(order, i) of paginationList" :key="order.id"
                      ondblclick="window.location.href = '/accounting/documents/edit-implementation'">
                      <th scope="row" style="padding-left: 27px">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                        </div>
                      </th>
                      <td>{{ i + 1 }}</td>
                      <td>{{ order.id }}</td>
                      <td>{{ order.date }}</td>
                      <td>{{ order.contractor }}</td>

                      <td>{{ order.responsible }}</td>
                      <td>{{ order.warehouse }}</td>
                      <td>{{ order.amount }}</td>
                      <td>{{ order.sum }}</td>
                      <td class="dropdown" style="border-left: 0; width: 100%">
                        <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer" alt="" />
                        <div class="dropdown-content">
                          <a href="/accounting/documents/edit-implementation">Редактировать</a>
                          <hr />
                          <a style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#DeleteInv">Удалить</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <pagination-component :filteredArr="filteredOrders" :strAmount="10" @PaginationReload="reloadPagination"
              class="pagination__size"></pagination-component>
          </div>
        </div>
      </div>
    </div>
  </main>
  <the-filter @no-filter="cancelFilters">
    <div class="filters__period__flex">
      <div class="filter__name__standart">Выберите период</div>
      <div class="reset__date">Сбросить период</div>
    </div>
    <div class="filters__period">
      <div class="form-group">
        <input class="form-control period__s" type="date" id="example-date-input" />
      </div>
      <div>
        <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
      </div>
      <div class="form-group">
        <input class="form-control period__s" type="date" id="example-date-input" />
      </div>
    </div>

    <p class="text-start my-2 fw-bold" for="контрагент">Контрагент</p>
    <select class="form-select" v-model="filterContragent">
      <option value="" disabled>Выберите когтрагента</option>
      <option v-for="contragent of orderContragentList" :key="contragent">
        {{ contragent }}
      </option>
      <option value=""></option>
    </select>
    <p class="text-start my-2 fw-bold" for="склад">Склад</p>
    <select class="form-select" v-model="filterWarehouse">
      <option value="" disabled>Выберите склад</option>
      <option v-for="warehouse of orderWarehouseList" :key="warehouse">
        {{ warehouse }}
      </option>
      <option value=""></option>
    </select>
    <p class="text-start my-2 fw-bold" for="склад">Статус документа</p>
    <select class="form-select">
      <option value="" disabled>Выберите статус</option>
      <option value="status">Какой-то статус</option>
      <option value=""></option>
    </select>
  </the-filter>
  <delete-modal :title="'реализации'" :text="`документ  &quot;Реализация №876&quot;`"></delete-modal>
</template>

<script>
import Filter from "@/components/Filters.vue";
import FilterButton from "@/components/buttons/FiltersButton.vue";
export default {
  data() {
    return {
      paginationList: [],
      orders: [
        {
          id: 876,
          name: "Счет-фактура выданная",
          date: "12.09.2018 9:12:59",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
          warehouse: "Склад 1",
          amount: 3,
        },
        {
          id: 877,
          name: "Счет-фактура выданная",
          date: "12.09.2018 11:46:23",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
          warehouse: "Склад 1",
          amount: 1,
        },
        {
          id: 878,
          name: "Счет-фактура выданная",
          date: "12.09.2018 12:13:36",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
          warehouse: "Склад 2",
          amount: 5,
        },
        {
          id: 879,
          name: "Счет-фактура выданная",
          date: "12.09.2018 13:48:23",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
          warehouse: "Склад 1",
          amount: 2,
        },
        {
          id: 880,
          name: "Счет-фактура выданная",
          date: "12.09.2018 15:24:43",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
          warehouse: "Склад 2",
          amount: 7,
        },
        {
          id: 881,
          name: "Счет-фактура выданная",
          date: "12.09.2018 15:24:43",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
          warehouse: "Склад 2",
          amount: 7,
        },
        {
          id: 882,
          name: "Счет-фактура выданная",
          date: "12.09.2018 15:24:43",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
          warehouse: "Склад 2",
          amount: 7,
        },
        {
          id: 883,
          name: "Счет-фактура выданная",
          date: "12.09.2018 15:24:43",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
          warehouse: "Склад 2",
          amount: 7,
        },
        {
          id: 884,
          name: "Счет-фактура выданная",
          date: "12.09.2018 15:24:43",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
          warehouse: "Склад 2",
          amount: 7,
        },
        {
          id: 885,
          name: "Счет-фактура выданная",
          date: "12.09.2018 15:24:43",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
          warehouse: "Склад 2",
          amount: 7,
        },
      ],
      filterContragent: "",
      filterStatus: "",

      filterWarehouse: "",
    };
  },
  methods: {
    reloadPagination(arr) {
      this.paginationList = arr;
    },

    createFilteredSet(key) {
      const unfiltered = this.orders.map((obj) => obj[key]);
      return [...new Set(unfiltered)];
    },
    cancelFilters() {
      this.filterContragent = "";
      this.filterStatus = "";
      this.filterWarehouse = "";
    },
  },

  computed: {
    orderContragentList() {
      return this.createFilteredSet("contractor");
    },
    orderWarehouseList() {
      return this.createFilteredSet("warehouse");
    },

    filteredOrders() {
      return this.orders.filter(
        (order) =>
          (this.filterWarehouse === ""
            ? true
            : order.warehouse === this.filterWarehouse) &&
          (this.filterContragent === ""
            ? true
            : order.contractor === this.filterContragent)
      );
    },
  },

  components: {
    "the-filter": Filter,
    "filter-button": FilterButton,
  },
};
</script>

<style scoped>
.page__table {
  height: 27.6vw;
}

.period__s {
  width: 191px !important;
}

.form-check-input[type="checkbox"] {
  border-radius: 0;
}

.form-check:not(.form-switch) .form-check-input[type="checkbox"],
.form-check:not(.form-switch) .form-check-input[type="radio"] {
  width: 18px;
  height: 18px;
}

.form-check:not(.form-switch) .form-check-input[type="checkbox"]:checked,
.form-check:not(.form-switch) .form-check-input[type="radio"]:checked {
  width: 18px;
  height: 18px;
}

.bg-gradient-success {
  background: linear-gradient(135deg, #98ec2d 0%, #17ad37 100%);
  font-size: 12px;
}

.bg-gradient-blue {
  background: linear-gradient(135deg, #99fff3 0%, #62c7ba 100%);
  font-size: 12px;
  color: #fff;
}

.bg-gradient-secondary {
  background: linear-gradient(135deg, #a8b8d8 0%, #627594 100%);
  font-size: 12px;
}

.bg-gradient-warning {
  background: linear-gradient(135deg, #f6ca65 0%, #ef8734 100%);
  font-size: 12px;
}

.bg-gradient-danger {
  background: linear-gradient(135deg, #ff667c 0%, #ea0706 100%);
  font-size: 12px;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
  font-size: 12px;
}

.bg-gradient-info {
  background: linear-gradient(135deg, #b2dbfb 0%, #459cf6 100%);
  font-size: 12px;
}

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

/* CHECKBOX BUTTON */

.cat {
  margin: 4px;
  background-color: #fff;
  width: 143px;
  height: 40px;
  border-radius: 50px;

  outline: 1px solid #2d3748;
  overflow: hidden;
  float: left;
}

.cat label {
  float: left;
  line-height: 3em;
  color: #2d3748;
  width: 8em;
  height: 3em;
}

.cat label span {
  position: relative;
  top: auto;
  right: 5px;
  text-align: center;
  height: 50px;
  width: 145px;
  display: block;
  color: #2d3748;
}

.cat label input {
  position: absolute;
  display: none;
  color: #2d3748 !important;
}

/* selects all of the text within the input element and changes the color of the text */
.cat label input+span {
  color: #2d3748;
}

/* This will declare how a selected input will look giving generic properties */
.cat input:checked+span {
  color: #ffffff;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
  background-color: #2d3748;
}

/*  */
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

.main__card {
  max-height: 80vh;
}

.th__col {
  color: #a0aec0 !important;
}

table {
  height: 100%;
}

.table-wrapper {
  overflow: auto;
}

th {
  color: #2d3748;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
}

td {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
}

.pagination {
  align-self: end;
}

.filters__period {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 0.833vw;
  margin-bottom: 0.833vw;
}

.filters__period__flex {
  display: flex !important;
  justify-content: space-between;
  align-items: flex-end;
}

@media screen and (max-width: 1600px) {
  .pagination__size {
    padding-top: 50px;
  }

  .dropdown-content {
    width: 130px;
  }
}
</style>
