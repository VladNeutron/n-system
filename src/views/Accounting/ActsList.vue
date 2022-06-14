<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Акты </template>
            <template v-slot:description>
              Выберите необходимые вам документы
            </template>
          </lists-header>
          <div class="card py-4 main__card">
            <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
              <button class="btn bg-gradient-dark mb-0" style="
                  font-size: 14px;
                  font-weight: 600;
                  display: flex;
                  align-items: center;
                " onclick="window.location.href = '/accounting/documents/create-act'">
                <img src="@/assets/img/whtplus.svg" alt="" style="margin-right: 10px" />
                Создать акт
              </button>
              <div class="table__inputs d-flex gap-3 align-content-center align-items-center">
                <list-search @searchFilter="(a) => search = a"></list-search>
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
                      <th scope="col" class="th__col">
                        Наименование документа
                      </th>
                      <th scope="col" class="th__col">Дата И ВРЕМЯ</th>
                      <th scope="col" class="th__col">контрагент</th>
                      <th scope="col" class="th__col">Ответственный</th>
                      <th scope="col" class="th__col">сумма</th>
                      <th scope="col" class="th__col">действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="order of paginationList" :key="order.id">
                      <th scope="row" style="padding-left: 27px">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                        </div>
                      </th>
                      <td>{{ order.listNumber + 1 }}</td>
                      <td>{{ order.id }}</td>
                      <td>{{ order.name }}</td>
                      <td>{{ order.date }}</td>

                      <td>{{ order.contractor }}</td>
                      <td>{{ order.responsible }}</td>
                      <td>{{ order.sum }}</td>
                      <td class="dropdown" style="border-left: 0; width: 100%">
                        <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer" alt="" />
                        <div class="dropdown-content">
                          <a href="/accounting/documents/edit-act">Редактировать</a>
                          <hr />
                          <a style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#DeleteInv">Удалить</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <pagination-component :filteredArr="filteredOrders" :strAmount="10" @PaginationReload="reloadPagination">
            </pagination-component>
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

    <p class="text-start my-2 fw-bold" for="Документ">Документ</p>
    <select class="form-select" v-model="filterName">
      <option value="" disabled>Выберите наименование документа</option>
      <option v-for="name of orderNameList" :key="name">
        {{ name }}
      </option>
      <option value=""></option>
    </select>
    <p class="text-start my-2 fw-bold" for="контрагент">Контрагент</p>
    <select class="form-select" v-model="filterContragent">
      <option value="" disabled>Выберите когтрагента</option>
      <option v-for="contragent of orderContragentList" :key="contragent">
        {{ contragent }}
      </option>
      <option value=""></option>
    </select>
    <p class="text-start my-2 fw-bold" for="Ответственный">Ответственный</p>
    <select class="form-select" v-model="filterResponsible">
      <option value="" disabled>Выберите ответственного</option>
      <option v-for="responsible of orderResponsibleList" :key="responsible">
        {{ responsible }}
      </option>
      responsible
      <option value=""></option>
    </select>
  </the-filter>
  <delete-modal :title="'акта'" :text="`документ  &quot;акт №12132145&quot;`"></delete-modal>
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
          id: 12132145,
          name: "Акт выполненных работ",
          date: "11 ноя, 2021 19:23",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
        },
        {
          id: 12132145,
          name: "Акт выполненных работ",
          date: "11 ноя, 2021 19:23",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
        },
        {
          id: 12132145,
          name: "Акт выполненных работ",
          date: "11 ноя, 2021 19:23",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
        },
        {
          id: 12132145,
          name: "Акт выполненных работ",
          date: "11 ноя, 2021 19:23",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
        },
        {
          id: 12132145,
          name: "Акт выполненных работ",
          date: "11 ноя, 2021 19:23",
          contractor: "ТОО “Рога и копыта”",
          responsible: "Лим Павел Владимирович",
          sum: 12890,
        },
      ],
      filterName: "",
      filterResponsible: "",
      filterContragent: "",
      search: '',
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
      filterName = "";
      filterResponsible = "";
      filterContragent = "";
    },
  },

  computed: {
    orderNameList() {
      return this.createFilteredSet("name");
    },
    orderResponsibleList() {
      return this.createFilteredSet("responsible");
    },
    orderContragentList() {
      return this.createFilteredSet("contractor");
    },

    filteredOrders() {
      return this.orders.filter(
        (order) =>
          (this.filterName === "" ? true : order.name === this.filterName) &&
          (this.filterResponsible === ""
            ? true
            : order.responsible === this.filterResponsible) &&
          (this.filterContragent === ""
            ? true
            : order.contractor === this.filterContragent)
          &&
          (String(order.name).toLowerCase().includes(String(this.search).toLowerCase())) ||
          (String(order.contractor).toLowerCase().includes(String(this.search).toLowerCase())) ||
          (String(order.responsible).toLowerCase().includes(String(this.search).toLowerCase()))
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
  .dropdown-content {
    width: 130px;
  }
}
</style>
