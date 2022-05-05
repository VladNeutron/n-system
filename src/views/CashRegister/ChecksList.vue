<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="page__name d-flex align-items-center ms-4">
      <div class="page__name-title text-start">
        <h3>Список чеков</h3>
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
            <img src="@/assets/img/whtplus.svg" alt="" /> Новая продажа
          </button>
          <button class="btn bg-gradient-dark mb-0">
            <img src="@/assets/img/whtplus.svg" alt="" /> Оформить возврат
          </button>
        </div>
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
          <button class="btn btn-outline-dark mb-0">Фильтры</button>
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
              <th scope="col" class="th__col">Статус</th>
              <th scope="col" class="th__col">Кол-во</th>
              <th scope="col" class="th__col">Сумма</th>

              <th scope="col" class="th__col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, i) of orders" :key="order.id">
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
              <td>{{ order.id }}</td>
              <td>{{ order.date }}</td>
              <td>{{ order.responsible }}</td>
              <td>
                <div class="btn mb-0 w-100" :class="getClass(order.status)">
                  {{ buttonText }}
                </div>
              </td>
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
        class="
          pagination
          d-flex
          justify-content-end
          align-items-center
          me-4
          mt-4
        "
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
          id: 12132145,
          date: "11 ноя, 2021 19:23",
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

          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 5426534654,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
      ],
    };
  },
  components: {
    "the-filter": Filter,
  },
  methods: {
    getClass(stat) {
      if (stat === "new") {
        this.buttonText = "Новый возврат";
        return "bg-gradient-info";
      }
      if (stat === "in-process") {
        this.buttonText = "В обработке";
        return "bg-gradient-primary";
      }
      if (stat === "canceled") {
        this.buttonText = "Отказ";
        return "bg-gradient-danger";
      }
      if (stat === "processed") {
        this.buttonText = "Одобрен";
        return "bg-gradient-warning";
      }
      if (stat === "shipped") {
        this.buttonText = "Оформлен";
        return "bg-gradient-success";
      }
    },
  },
};
</script>

<style scoped>
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
</style>
