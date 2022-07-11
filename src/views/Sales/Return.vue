<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Список возвратов </template>
            <template v-slot:description>
              Внесите изменения и не забудьте нажать “Сохранить”
            </template>
          </lists-header>
          <!-- <div class="page__name d-flex align-items-center ms-4">
            <div class="page__name-title text-start">
              <h3>Список возвратов</h3>
              <p class="mb-0">Внесите изменения и не забудьте нажать “Сохранить”</p>
            </div>
          </div> -->
          <div class="card py-4 main__card">
            <div
              class="d-flex justify-content-between align-items-center mx-4 mb-2"
            >
              <router-link :to="{ name: 'create-return' }">
                <!-- <button
                class="btn bg-gradient-dark mb-0"
                onclick="window.location.href = '/sales/create-return'"
              > -->
                <button class="btn btn__return__new bg-gradient-dark mb-0">
                  <img
                    src="@/assets/img/whtplus.svg"
                    style="width: 20.006px; margin-right: 0.529vw"
                    alt=""
                  />
                  Оформить возврат
                </button>
              </router-link>
              <div class="table__inputs d-flex gap-3 align-content-center">
                <list-search @searchFilter="(a) => search = a"></list-search>
                <print-button></print-button>
                <download-button></download-button>
                <filter-button class="mb-0"></filter-button>
              </div>
            </div>
            <div class="page__table">
              <div class="table-wrapper">
                <table
                  class="table table-hover text-wrap text-start table-striped"
                >
                  <thead>
                    <tr class="text-start">
                      <th scope="col" class="th__col" style="width: 25px"></th>
                      <th scope="col" class="th__col">№</th>
                      <th scope="col" class="th__col">№ Возврата</th>
                      <th scope="col" class="th__col">Дата</th>
                      <th scope="col" class="th__col">Склад</th>
                      <th scope="col" class="th__col">Ответственный</th>
                      <th scope="col" class="th__col">Статус</th>
                      <th scope="col" class="th__col">Клиент</th>
                      <th scope="col" class="th__col">Тип</th>
                      <th scope="col" class="th__col">Кол-во</th>
                      <th scope="col" class="th__col">Сумма</th>

                      <th scope="col" class="th__col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(order) of paginationList" :key="order.id">
                      <th scope="row">
                        <div class="form-check mb-0 ms-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                        </div>
                      </th>
                      <th>{{ order.listNumber + 1 }}</th>
                      <td>{{ order.id }}</td>
                      <td>{{ order.date }}</td>
                      <td>{{ order.warehouse }}</td>
                      <td>{{ order.responsible }}</td>
                      <td>
                        <div
                          class="btn mb-0 w-100"
                          v-text="normalizeStatusName(order.status)"
                          :class="getClass(order.status)"
                        ></div>
                      </td>
                      <td>{{ order.client }}</td>
                      <td>{{ order.type }}</td>
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
                            <router-link :to="{ name: 'return-edit' }"
                              >Редактировать</router-link
                            >
                            <hr />
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
            </div>
            <pagination-component
              :filteredArr="filteredOrders"
              :strAmount="paginationAmount"
              @paginationReload="reloadPagination"
            ></pagination-component>
          </div>
        </div>
      </div>
    </div>
  <the-filter :orders="orders" @no-filter="cancelFilters">
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
    <p class="text-start my-2 fw-bold" for="Статус">Статус возврата</p>
    <div class="d-flex flex-wrap">
      <div class="cat" v-for="status of orderStatusList" :key="status">
        <label>
          <input
            type="checkbox"
            :value="status"
            v-model="filterStatusSelect"
          /><span v-text="normalizeStatusName(status)"></span>
        </label>
      </div>
    </div>
    <p class="text-start my-2 fw-bold" for="Склад">Склад</p>
    <select class="form-select" v-model="filterWarehouse">
      <option value="" disabled>Выберите склад</option>
      <option v-for="warehouse of orderWarehouseList" :key="warehouse">
        {{ warehouse }}
      </option>
      <option value=""></option>
    </select>
    <p class="text-start my-2 fw-bold" for="Ответственный">Ответственный</p>
    <select class="form-select" v-model="filterResponsible">
      <option value="" disabled>Выберите ответственного</option>
      <option v-for="responsible of orderResponsibleList" :key="responsible">
        {{ responsible }}
      </option>
      <option value=""></option>
    </select>
    <p class="text-start my-2 fw-bold" for="Клиент">Клиент</p>
    <select class="form-select" v-model="filterClient">
      <option value="" disabled>Выберите клиента</option>
      <option v-for="client of orderClientList" :key="client">
        {{ client }}
      </option>
      <option value=""></option>
    </select>
    <p class="text-start my-2 fw-bold" for="Тип заказа">Тип заказа</p>
    <select class="form-select" v-model="filterOrderType">
      <option value="" disabled>Выберите тип заказа</option>
      <option v-for="orderType of orderTypeList" :key="orderType">
        {{ orderType }}
      </option>
      <option value=""></option>
    </select>
  </the-filter>
  <delete-modal
    :title="'возврата'"
    :text="`документ &quot;Возврат №12154&quot;`"
  ></delete-modal>
</template>

<script>
import Filter from "@/components/Filters.vue";
import FilterButton from "@/components/buttons/FiltersButton.vue";
export default {
  data() {
    return {
      buttonText: "",
      orders: [
        {
          id: 1,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "new",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 2,
          date: "11 ноя, 2021 19:23",
          warehouse: "где-то-там",
          responsible: "Тихонова А.Р",
          status: "in-process",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 3,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "refused",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 4,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "approved",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 5,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "refused",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 6,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "approved",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 7,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "processed",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 8,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "processed",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 9,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "processed",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 10,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "processed",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 11,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "processed",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "processed",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 13,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "processed",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 14,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "processed",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 15,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "processed",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
      ],
      paginationList: [],
      filterStatusSelect: [],
      filterResponsible: "",
      filterClient: "",
      filterOrderType: "",
      filterWarehouse: "",
      search: '',
    };
  },
  methods: {
    getClass(stat) {
      return stat === "new"
        ? "bg-gradient-info"
        : stat === "in-process"
        ? "bg-gradient-primary"
        : stat === "refused"
        ? "bg-gradient-danger"
        : stat === "processed"
        ? "bg-gradient-success"
        : "bg-gradient-warning";
    },
    normalizeStatusName(name) {
      const statusMap = {
        new: "Новый возврат",
        "in-process": "В обработке",
        refused: "Отказ",
        approved: "Одобрен",
        processed: "Оформлен",
      };
      return statusMap[name] || "Статус не найден";
    },
    reloadPagination(arr) {
      // console.log(arr);
      this.paginationList = arr;
    },
    createFilteredSet(key) {
      const unfiltered = this.orders.map((obj) => obj[key]);
      return [...new Set(unfiltered)];
    },
    cancelFilters() {
      this.filterStatusSelect = [];
      this.filterResponsible = "";
      this.filterClient = "";
      this.filterOrderType = "";
      this.filterWarehouse = "";
    },
  },
  computed: {
    orderStatusList() {
      return this.createFilteredSet("status");
    },
    orderResponsibleList() {
      return this.createFilteredSet("responsible");
    },
    orderClientList() {
      return this.createFilteredSet("client");
    },
    orderTypeList() {
      return this.createFilteredSet("type");
    },
    orderWarehouseList() {
      return this.createFilteredSet("warehouse");
    },

    filteredOrders() {
      const statusCheckIfEmpty = this.filterStatusSelect.length > 0;
      return this.orders.filter(
        (order) =>
          (statusCheckIfEmpty
            ? this.filterStatusSelect.includes(order.status)
            : true) &&
          (this.filterWarehouse === ""
            ? true
            : order.warehouse === this.filterWarehouse) &&
          (this.filterResponsible === ""
            ? true
            : order.responsible === this.filterResponsible) &&
          (this.filterClient === ""
            ? true
            : order.client === this.filterClient) &&
          (this.filterOrderType === ""
            ? true
            : order.type === this.filterOrderType) && 
            (String(order.id).includes(String(this.search).toLowerCase()))
      );
    },
    paginationAmount() {
      if (document.documentElement.clientWidth < 1700) {
        return 7;
      } else {
        return 9;
      }
    },
  },

  components: {
    "the-filter": Filter,
    "filter-button": FilterButton,
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
.cat label input + span {
  color: #2d3748;
}

/* This will declare how a selected input will look giving generic properties */
.cat input:checked + span {
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
.th__col {
  color: #a0aec0 !important;
}

.main__card {
  height: 80vh;
}
th {
  color: #2d3748;
  font-size: 12px;
  text-align: center;
}
td {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}
table {
  height: 100%;
}
.table-wrapper {
  overflow: auto;
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
td {
  vertical-align: middle;
}
th {
  vertical-align: middle;
}
.btn__return__new {
  height: 40px;
}
@media screen and (max-width: 1600px) {
  .main__card{
    height: 75vh;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .table-wrapper{
    height: 57vh;
  }
  .btn{
    padding: 0.45rem 1.5rem;
  }
}
</style>

<style>
.table .dropdown {
  height: 100%;
}
</style>
