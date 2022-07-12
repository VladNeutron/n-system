<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <lists-header>
          <template v-slot:title> Список должностей </template>
          <template v-slot:description>
            Внесите изменения и не забудьте нажать “Сохранить”
          </template>
        </lists-header>
        <div class="card pt-4 pb-6">
          <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
            <div>
              <button class="btn bg-gradient-dark mb-0" style="
                    margin-right: 0.833vw;
                    display: flex;
                    align-items: center;
                  " data-bs-toggle="modal" data-bs-target="#InpModal" @click="isEdit = 'no'">
                <img src="@/assets/img/whtplus.svg" style="margin-right: 10px" alt="" />
                Добавить должность
              </button>
            </div>
            <filters-button></filters-button>
          </div>
          <div class="page__table">
            <table class="table table-hover table-striped">
              <thead>
                <tr class="">
                  <th scope="col" class="th__col">Название должности</th>
                  <th scope="col" class="th__col">Торговая точка</th>
                  <th scope="col" class="th__col">статус</th>
                  <th scope="col" class="th__col">Действия</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order of paginationList" :key="order.id">
                  <td>{{ order.name }}</td>
                  <td>{{ order.shop }}</td>
                  <td>{{ order.status }}</td>
                  <td class="dropdown">
                    <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer" alt="" />
                    <div class="dropdown-content">
                      <a style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#InpModal"
                        @click="isEdit = 'yes'">Редактировать</a>
                      <hr />
                      <a style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#DeleteInv">Удалить</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <pagination-component :filteredArr="filteredItems" :strAmount="10" @PaginationReload="reloadPagination"
            class="pagination__size"></pagination-component>
        </div>
      </div>
    </div>
  </div>
  <inputs-modal>
    <template #head>
      <div style="text-align: left" v-if="isEdit == 'no'">
        <p class="header__main">Добавление должности</p>
        <p class="header__sec">Введите данные и нажмите “Добавить”</p>
      </div>
      <div style="text-align: left" v-if="isEdit == 'yes'">
        <p class="header__main">Кассир</p>
        <p class="header__sec">Измените данные и нажмите “Сохранить”</p>
      </div>
    </template>
    <template #body>
      <div class="clients__modal" v-if="isEdit == 'no'">
        <div class="form-group">
          <label for="example-text-input" class="form-control-label">Название должности</label>
          <input class="form-control" type="text" placeholder="Введите название" id="example-text-input" />
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked="" />
          <label class="form-check-label" for="flexSwitchCheckDefault">Активна</label>
        </div>
      </div>
      <div class="clients__modal" v-if="isEdit == 'yes'">
        <div class="form-group">
          <label for="example-text-input" class="form-control-label">Название должности</label>
          <input class="form-control" type="text" placeholder="Введите название" id="example-text-input" />
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked="" />
          <label class="form-check-label" for="flexSwitchCheckDefault">Активна</label>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="clients__footer" v-if="isEdit == 'no'">
        <button class="btn bg-gradient-dark" data-bs-dismiss="modal">Добавить</button>
      </div>
      <div class="clients__footer" v-if="isEdit == 'yes'">
        <button class="btn bg-gradient-dark" data-bs-dismiss="modal">Сохранить</button>
      </div>
      <div class="clients__footer" v-if="isEdit == 'yes'">
        <button class="btn delete__btn" data-bs-toggle="modal" data-bs-target="#DeleteInv">
          Удалить должность
        </button>
      </div>
    </template>
  </inputs-modal>
  <delete-modal :title="'должности'" :text="`должность &quot;Кассир&quot;`"></delete-modal>
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

    <div class="filter__name__standart">Торговая точка</div>
    <select class="form-select" v-model="filterTradepoint">
      <option value="" disabled selected>Выберите торговую точку</option>
      <option v-for="tradepoint in tradepointList" :key="tradepoint">
        {{ tradepoint }}
      </option>
      <option value=""></option>
    </select>
    <div class="filter__name__standart mt-3">Статус</div>
    <select class="form-select" v-model="filterStatus">
      <option value="" disabled selected>
        Выберите статус
      </option>
      <option v-for="status in statusList" :key="status">{{ status }}</option>
      <option value=""></option>
    </select>
  </the-filter>
</template>

<script>
import Filter from "../../components/Filters.vue";
import InputsModal from "@/components/InputsModal.vue";
import { CloseInvModal } from "@/assets/js/closeModalDeleteOpen";
export default {
  data() {
    return {
      paginationList: [],
      status: null,
      buttonText: "",
      filterTradepoint: "",
      filterStatus: "",
      orders: [
        {
          id: 0,
          name: "Кассир",
          shop: "Москва",
          status: "Активна",
        },
        {
          id: 1,
          name: "Бухгалтер",
          shop: "Москва",
          status: "Не активна",
        },
        {
          id: 2,
          name: "Фасовщик",
          shop: "Апорт",
          status: "Активна",
        },
        {
          id: 3,
          name: "Консультант",
          shop: "Апорт",
          status: "Не активна",
        },
        {
          id: 4,
          name: "Управляющий",
          shop: "Апорт",
          status: "Активна",
        },
        {
          id: 6,
          name: "Кассир",
          shop: "Москва",
          status: "Активна",
        },
        {
          id: 7,
          name: "Бухгалтер",
          shop: "Москва",
          status: "Не активна",
        },
        {
          id: 8,
          name: "Фасовщик",
          shop: "Апорт",
          status: "Активна",
        },
        {
          id: 9,
          name: "Консультант",
          shop: "Апорт",
          status: "Не активна",
        },
        {
          id: 10,
          name: "Управляющий",
          shop: "Апорт",
          status: "Активна",
        },
        {
          id: 11,
          name: "Кассир",
          shop: "Москва",
          status: "Активна",
        },
        {
          id: 12,
          name: "Бухгалтер",
          shop: "Москва",
          status: "Не активна",
        },
        {
          id: 13,
          name: "Фасовщик",
          shop: "Апорт",
          status: "Активна",
        },
        {
          id: 14,
          name: "Консультант",
          shop: "Апорт",
          status: "Не активна",
        },
        {
          id: 15,
          name: "Управляющий",
          shop: "Апорт",
          status: "Активна",
        },
      ],
      isEdit: "no",
    };
  },
  components: {
    "the-filter": Filter,
    "inputs-modal": InputsModal,
  },
  mounted() {
    CloseInvModal();
  },
  methods: {
    reloadPagination(arr) {
      console.log(arr);
      this.paginationList = arr;
    },
    cancelFilters() {
      this.filterTradepoint = "";
      this.filterStatus = "";
    },
    createFilteredSet(key) {
      const unfiltered = this.orders.map((obj) => obj[key]);
      return [...new Set(unfiltered)];
    },
  },
  computed: {
    tradepointList() {
      return this.createFilteredSet("shop");
    },
    statusList() {
      return this.createFilteredSet("status");
    },
    filteredItems() {
      return this.orders.filter(
        (order) =>
          (this.filterTradepoint === "" ? true : order.shop === this.filterTradepoint) &&
          (this.filterStatus === "" ? true : order.status === this.filterStatus)

      );
    },
  },
};
</script>

<style scoped>
.page__table {
  height: 27.6vw;
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

.form__width {
  width: 15.99vw !important;
}

.bg-gradient-dark {
  font-weight: 600;
  font-size: 14px;
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

th {
  text-transform: uppercase !important;
}

/* FORM */
.clients__footer {
  flex-grow: 1;
  width: 100%;
}

.clients__footer button {
  width: 60%;
}

.form-group {
  text-align: left;
}

.form-switch {
  text-align: left;
}

@media screen and (max-width:1600px) {
  .pagination__size {
    padding-top: 50px;
  }
}
</style>
