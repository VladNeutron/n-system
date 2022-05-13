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
    <div class="card pt-4 pb-6 m-4">
      <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
        <button class="btn bg-gradient-dark mb-0">Оформить возврат</button>
        <div class="table__inputs d-flex gap-3 align-content-center">
          <div class="form-group m-0">
            <div class="input-group mt-1">
              <span class="input-group-text"
                ><img src="@/assets/css/icons/searchIcon.svg" alt=""
              /></span>
              <input
                class="form-control"
                placeholder="Поиск..."
                id="search"
                type="text"
              />
            </div>
          </div>
          <button class="btn btn-outline-dark mb-0">
            <span
              ><img
                src="@/assets/css/icons/print.svg"
                class="me-1"
                alt="" /></span
            >Печать
          </button>
          <button class="btn btn-outline-dark mb-0">
            <span
              ><img
                src="@/assets/css/icons/down-arrow.svg"
                class="me-1"
                alt="" /></span
            >Скачать
          </button>
          <filter-button class="mb-0"></filter-button>
        </div>
      </div>
      <div class="page__table">
        <table class="table table-hover text-wrap text-start">
          <thead>
            <tr class="text-start">
              <th scope="col" class="th__col" style="width: 25px"></th>
              <th scope="col" class="th__col">№</th>
              <th scope="col" class="th__col">№ Заказа</th>
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
            <tr v-for="(order, i) of filteredOrders" :key="order.id">
              <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </th>
              <th>{{ i + 1 }}</th>
              <td>{{ order.id }}</td>
              <td>{{ order.date }}</td>
              <td>{{ order.warehouse }}</td>

              <td>{{ order.responsible }}</td>
              <td>
                <div class="btn mb-0 w-100" :class="getClass(order.status)">
                  {{ buttonText }}
                </div>
              </td>
              <td>{{ order.client }}</td>
              <td>{{ order.type }}</td>
              <td>{{ order.amount }}</td>
              <td>{{ order.sum }}</td>

              <td>
                <img
                  src="@/assets/img/dots.svg"
                  style="width: 1.563vw; cursor: pointer"
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="pagination d-flex justify-content-end align-items-center me-4 mt-4"
      >
        <div class="d-flex align-items-center gap-3">
          <div>
            <p class="m-0">Показано<span> 2112 12121</span></p>
          </div>

          <div class="page__search-pages d-flex align-content-center">
            <div class="pagination-container d-flex justify-items-center">
              <ul class="pagination pagination-info mb-0 pe-0">
                <li class="page-item">
                  <a
                    class="page-link"
                    href="javascript:;"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true"
                      ><i class="fa fa-angle-double-left" aria-hidden="true"></i
                    ></span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:;">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:;">2</a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="javascript:;">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:;">4</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:;">5</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:;" aria-label="Next">
                    <span aria-hidden="true"
                      ><i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
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
    <p class="text-start my-2 fw-bold" for="Статус">Статус заказа</p>
    <div class="d-flex flex-wrap">
      <div class="cat" v-for="status of orderStatusList" :key="status">
        <label>
          <input
            type="checkbox"
            :value="status"
            v-model="filterStatusSelect"
          /><span>{{ status }}</span>
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
          id: 12132145,
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
          id: 12132145,
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
          id: 32132312,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "canceled",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 54354536,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12312556,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "assembly",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 442142132,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "ready",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 5426534654,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
      ],
      filterStatusSelect: [],
      filterResponsible: "",
      filterClient: "",
      filterOrderType: "",
      filterWarehouse: "",
    };
  },
  methods: {
    getClass(stat) {
      if (stat === "new") {
        this.buttonText = "Новый";
        return "bg-gradient-info";
      }
      if (stat === "in-process") {
        this.buttonText = "В обработке";
        return "bg-gradient-primary";
      }
      if (stat === "canceled") {
        this.buttonText = "Отменен";
        return "bg-gradient-danger";
      }
      if (stat === "processed") {
        this.buttonText = "Обработан";
        return "bg-gradient-warning";
      }
      if (stat === "assembly") {
        this.buttonText = "В сборке";
        return "bg-gradient-secondary";
      }
      if (stat === "ready") {
        this.buttonText = "Готов к выдаче";
        return "bg-gradient-blue";
      }
      if (stat === "shipped") {
        this.buttonText = "Отправлен";
        return "bg-gradient-success";
      }
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
      let unfiltered = this.orders.map((e) => e.status);
      return [...new Set(unfiltered)];
    },
    orderResponsibleList() {
      let unfiltered = this.orders.map((e) => e.responsible);
      return [...new Set(unfiltered)];
    },
    orderClientList() {
      let unfiltered = this.orders.map((e) => e.client);
      return [...new Set(unfiltered)];
    },
    orderTypeList() {
      let unfiltered = this.orders.map((e) => e.type);
      return [...new Set(unfiltered)];
    },
    orderWarehouseList() {
      let unfiltered = this.orders.map((e) => e.warehouse);
      return [...new Set(unfiltered)];
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
            : order.type === this.filterOrderType)
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
</style>
