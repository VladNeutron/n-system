<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- <div class="page__name d-flex align-items-center ms-4">
            <div class="page__name-title text-start">
              <h3>Список заявок</h3>
              <p class="mb-0">Внесите изменения и не забудьте нажать “Сохранить”</p>
            </div>
          </div> -->
        <lists-header>
          <template v-slot:title> Список заявок </template>
          <template v-slot:description>
            Внесите изменения и не забудьте нажать “Сохранить”
          </template>
        </lists-header>
        <div class="card py-4 main__card">
          <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
            <a></a>
            <!-- <button class="btn bg-gradient-dark mb-0" data-bs-toggle="modal" data-bs-target="#InpModal" style="
                  font-size: 14px;
                  font-weight: 600;
                  display: flex;
                  align-items: center;
                " @click="isEdit = 'no'">
              <img src="@/assets/img/whtplus.svg" alt="" style="margin-right: 10px" />
              Создать заявку
            </button> -->
            <div class="table__inputs d-flex gap-3 align-content-center">
              <list-search @searchFilter="(a) => search = a"></list-search>
              <print-button></print-button>
              <download-button></download-button>
              <filter-button class="mb-0"></filter-button>
            </div>
          </div>
          <div class="page__table mb-4">
            <div class="table-wrapper">
              <table class="table table-hover text-wrap text-start table-striped">
                <thead>
                  <tr class="text-center">
                    <th scope="col" class="th__col">Дата</th>
                    <th scope="col" class="th__col">ФИО</th>
                    <th scope="col" class="th__col">Статус</th>
                    <th scope="col" class="th__col">Номер Телефона</th>
                    <th scope="col" class="th__col">Email</th>
                    <th scope="col" class="th__col">Действия</th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <tr v-for="order of paginationList" :key="order.id">
                    <td>{{ order.date }}</td>
                    <td>{{ order.fio }}</td>
                    <td>
                      <div class="btn mb-0 w-100" v-text="normalizeStatusName(order.status)"
                        :class="getClass(order.status)"></div>
                    </td>
                    <td>{{ order.phone }}</td>
                    <td>{{ order.email }}</td>
                    <td>
                      <div class="dropdown">
                        <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer" alt="" />
                        <div class="dropdown-content">
                          <a style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#InpModal"
                            @click="isEdit = 'yes'">Редактировать</a>
                          <hr />
                          <a style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#DeleteInv">Удалить</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <pagination-component :filteredArr="filteredOrders" :strAmount="paginationAmount"
            @paginationReload="reloadPagination"></pagination-component>
        </div>
      </div>
    </div>
  </div>
  <inputs-modal>
    <template #head>
      <div style="text-align: left" v-if="isEdit == 'no'">
        <p class="header__main">Добавление заявки</p>
        <p class="header__sec">Измените данные заявки и нажмите “Добавить”</p>
      </div>
      <div style="text-align: left" v-if="isEdit == 'yes'">
        <p class="header__main">Заявка №12345</p>
        <p class="header__sec">Измените данные и нажмите “Сохранить”</p>
      </div>
    </template>
    <template #body>
      <div class="clients__modal" v-if="isEdit == 'no'">
        <div class="form-group">
          <label for="example-text-input" class="form-control-label">ФИО клиента</label>
          <input class="form-control" type="text" placeholder="ФИО клиента" id="example-text-input" />
        </div>
        <div class="form-group">
          <label for="example-text-input1" class="form-control-label">Номер телефона</label>
          <input class="form-control" type="text" placeholder="Введите номер телефона" id="example-text-input1" />
        </div>
        <div class="form-group">
          <label for="example-text-input2" class="form-control-label">Email</label>
          <input class="form-control" type="text" placeholder="Введите email" id="example-text-input2" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="Статус заявки">Статус заявки</label>
          <select class="form-select">
            <option selected disabled>Выберите</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1" class="form-control-label">Текст заявки</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"
            placeholder="Введите текст"></textarea>
        </div>
      </div>
      <div class="clients__modal" v-if="isEdit == 'yes'">
        <div class="form-group">
          <label for="example-text-input" class="form-control-label">ФИО клиента</label>
          <input class="form-control" type="text" placeholder="ФИО клиента" id="example-text-input" />
        </div>
        <div class="form-group">
          <label for="example-text-input1" class="form-control-label">Номер телефона</label>
          <input class="form-control" type="text" placeholder="Введите номер телефона" id="example-text-input1" />
        </div>
        <div class="form-group">
          <label for="example-text-input2" class="form-control-label">Email</label>
          <input class="form-control" type="text" placeholder="Введите email" id="example-text-input2" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="Статус заявки">Статус заявки</label>
          <select class="form-select">
            <option selected disabled>Выберите</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1" class="form-control-label">Текст заявки</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"
            placeholder="Введите текст"></textarea>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="clients__footer">
        <button class="btn clients__save" data-bs-dismiss="modal" v-if="isEdit == 'no'">Добавить</button>
      </div>
      <div class="clients__footer">
        <button class="btn clients__save" data-bs-dismiss="modal" v-if="isEdit == 'yes'">Сохранить</button>
      </div>
    </template>
  </inputs-modal>
  <the-filter @no-filter="cancelFilters">
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
          <input type="checkbox" :value="status" v-model="filterStatusSelect" /><span
            v-text="normalizeStatusName(status)"></span>
        </label>
      </div>
    </div>
    <div class="text-start">
      <label class="text-start" for="Ответственный">Клиент</label>
      <select class="form-select" v-model="filterClient">
        <option value="" disabled>Выберите клиента</option>
        <option v-for="client of orderClientList" :key="client">
          {{ client }}
        </option>
        <option value=""></option>
      </select>
    </div>
  </the-filter>
  <delete-modal :title="'заявки'" :text="`заявку №1`"></delete-modal>
</template>

<script>
import InputsModal from "@/components/InputsModal.vue";
import Filter from "@/components/Filters.vue";
import FilterButton from "@/components/buttons/FiltersButton.vue";
export default {
  data() {
    return {
      isEdit: "",
      buttonText: "",
      orders: [
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "new",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "in-process",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "canceled",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "new",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "new",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "new",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "new",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "in-process",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "canceled",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "new",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "new",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "new",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "тест",
          status: "new",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "тест",
          status: "in-process",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        // {
        //   date: "11 ноя, 2021 19:23",
        //   fio: "Курочкин Василий Петрович",
        //   status: "canceled",
        //   phone: "+7 705 6665599",
        //   email: "v.kurochkin@gmail.com",
        // },
        // {
        //   date: "11 ноя, 2021 19:23",
        //   fio: "Курочкин Василий Петрович",
        //   status: "new",
        //   phone: "+7 705 6665599",
        //   email: "v.kurochkin@gmail.com",
        // },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "new",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
        {
          date: "11 ноя, 2021 19:23",
          fio: "Курочкин Василий Петрович",
          status: "new",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
        },
      ],
      filterStatusSelect: [],
      filterClient: "",
      paginationList: [],
      search: '',
    };
  },
  methods: {
    getClass(stat) {
      return stat === "new"
        ? "bg-gradient-info"
        : stat === "in-process"
          ? "bg-gradient-primary"
          : "bg-gradient-success";
    },
    normalizeStatusName(name) {
      const statusMap = {
        new: "Новая заявка",
        "in-process": "В обработке",
        canceled: "Обработка",
      };
      return statusMap[name] || "Статус не найден";
    },
    createFilteredSet(key) {
      const unfiltered = this.orders.map((obj) => obj[key]);
      return [...new Set(unfiltered)];
    },
    reloadPagination(arr) {
      // console.log(arr);
      this.paginationList = arr;
    },
    cancelFilters() {
      this.filterStatusSelect = [];
      this.filterClient = "";
    },
  },
  computed: {
    orderStatusList() {
      return this.createFilteredSet("status");
    },

    orderClientList() {
      return this.createFilteredSet("fio");
    },

    filteredOrders() {
      const statusCheckIfEmpty = this.filterStatusSelect.length > 0;
      return this.orders.filter(
        (order) =>
          (statusCheckIfEmpty
            ? this.filterStatusSelect.includes(order.status)
            : true) &&
          (this.filterClient === "" ? true : order.fio === this.filterClient)
          &&
          (String(order.fio).toLowerCase().includes(String(this.search).toLowerCase()))
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
    InputsModal,
  },
};
</script>

<style scoped>
.bg-gradient-success {
  background: linear-gradient(135deg, #98ec2d 0%, #17ad37 100%);
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
}

.bg-gradient-info {
  background: linear-gradient(135deg, #b2dbfb 0%, #459cf6 100%);
}

.clients__delete {
  text-transform: none;
  border: 0;
  background: transparent;
  font-weight: 600;
  font-size: 0.833vw;
  color: #2d3748;
  box-shadow: none;
}

.clients__delete:hover {
  box-shadow: none;
}

.clients__footer {
  display: flex;
  flex-direction: column;
}

.clients__save {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.729vw 5.208vw 0.729vw 5.208vw;
  text-transform: none;
  font-weight: 700;
  font-size: 0.833vw;
  color: #ffffff;
}

.form-control-label {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}

.form-group {
  text-align: left;
}

/* CHECKBOX BUTTON */
.dropdown {
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
  vertical-align: baseline;
}

td {
  vertical-align: baseline;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
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

.main__card {
  height: 80vh;
}

@media screen and (max-width: 1600px) {
  .main__card {
    height: 75vh;
  }
}
</style>
