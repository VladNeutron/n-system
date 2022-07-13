<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <lists-header>
          <template v-slot:title> Список имуществ </template>
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
                Добавить имущество
              </button>
            </div>
            <filters-button></filters-button>
          </div>
          <div class="page__table">
            <table class="table table-hover table-striped">
              <thead>
                <tr class="">
                  <th scope="col" class="th__col">Название имущества</th>
                  <th scope="col" class="th__col">Тип имущества</th>
                  <th scope="col" class="th__col">Стоимость</th>
                  <th scope="col" class="th__col">Действия</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order of paginationList" :key="order.id">
                  <td>{{ order.name }}</td>
                  <td>{{ order.type }}</td>
                  <td>{{ order.price }} ₸</td>
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
          <pagination-component :filteredArr="orders" :strAmount="10" @PaginationReload="reloadPagination"
            class="pagination__size"></pagination-component>
        </div>
      </div>
    </div>
  </div>
  <inputs-modal>
    <template #head>
      <div style="text-align: left" v-if="isEdit == 'no'">
        <p class="header__main">Добавление имущества</p>
        <p class="header__sec">
          Введите данные имущества и нажмите “Добавить”
        </p>
      </div>
      <div style="text-align: left" v-if="isEdit == 'yes'">
        <p class="header__main">BMW X15</p>
        <p class="header__sec">Измените данные и нажмите “Сохранить”</p>
      </div>
    </template>
    <template #body>
      <div class="clients__modal" v-if="isEdit == 'no'">
        <div class="form-group">
          <label for="example-text-input" class="form-control-label custom__label">Название</label>
          <input class="form-control" type="text" placeholder="Введите название" id="example-text-input" />
        </div>
        <div class="form-group">
          <label class="form-control-label custom__label" for="Статус заявки">Тип имущества</label>
          <select class="form-select custom__label">
            <option selected disabled>Выберите</option>
            <option>Мебель</option>
            <option>Недвижимость</option>
            <option>Транспорт</option>
            <option>Техника</option>
            <option>Оборудование</option>
          </select>
        </div>
        <div class="form-group">
          <label for="example-text-input1" class="form-control-label custom__label">Стоимость</label>
          <input class="form-control" type="text" placeholder="Введите стоимость" id="example-text-input1" />
        </div>
      </div>
      <div class="clients__modal" v-if="isEdit == 'yes'">
        <div class="form-group">
          <label for="example-text-input" class="form-control-label custom__label">Название</label>
          <input class="form-control" type="text" placeholder="Введите название" id="example-text-input" />
        </div>
        <div class="form-group">
          <label class="form-control-label custom__label" for="Статус заявки">Тип имущества</label>
          <select class="form-select">
            <option selected disabled>Выберите</option>
            <option>Мебель</option>
            <option>Недвижимость</option>
            <option>Транспорт</option>
            <option>Техника</option>
            <option>Оборудование</option>
          </select>
        </div>
        <div class="form-group">
          <label for="example-text-input1" class="form-control-label custom__label">Стоимость</label>
          <input class="form-control" type="text" placeholder="Введите стоимость" id="example-text-input1" />
        </div>
      </div>
    </template>
    <template #footer>
      <div class="clients__footer" v-if="isEdit == 'no'">
        <button class="btn bg-gradient-dark" data-bs-dismiss="modal">Добавить</button>
      </div>
      <div class="clients__footer mb-0" v-if="isEdit == 'yes'">
        <button class="btn bg-gradient-dark" data-bs-dismiss="modal">Сохранить</button>
      </div>
      <div class="clients__footer" v-if="isEdit == 'yes'">
        <button class="btn delete__btn" data-bs-toggle="modal" data-bs-target="#DeleteInv">
          Удалить имущество
        </button>
      </div>
    </template>
  </inputs-modal>
  <delete-modal :title="'имущества'" :text="`имущество &quot;BMW M5&quot;`"></delete-modal>
  <the-filter @no-filter="cancelFilters">
    <div class="filter__name__standart mt-3">Тип имущества</div>
    <select class="form-select" v-model="filterType">
      <option value="" disabled selected>
        Выберите тип имущества
      </option>
      <option v-for="types in typeList" :key="types">{{ types }}</option>
      <option value=""></option>
    </select>
  </the-filter>
</template>

<script>
import Filter from "../../components/Filters.vue";
import InputsModal from "@/components/InputsModal.vue";
import { CloseInvModal } from "@/assets/js/closeModalDeleteOpen";
export default {
  components: {
    "the-filter": Filter,
    "inputs-modal": InputsModal,
  },
  data() {
    return {
      paginationList: [],
      status: null,
      buttonText: "",
      filterType: "",
      orders: [
        {
          id: 0,
          name: "BMW M5",
          type: "Транспорт",
          price: 999999,
        },
        {
          id: 1,
          name: "Дом на Саина",
          type: "Недвижимость",
          price: 7540000,
        },
        {
          id: 2,
          name: "Дом в Алмате",
          type: "Недвижимость",
          price: 9650421,
        },
        {
          id: 3,
          name: "Техника",
          type: "Техника",
          price: 965421,
        },
        {
          id: 4,
          name: "Офисный стеллаж",
          type: "Мебель",
          price: 95421,
        },
        {
          id: 6,
          name: "BMW M5",
          type: "Транспорт",
          price: 999999,
        },
        {
          id: 7,
          name: "Дом на Саина",
          type: "Недвижимость",
          price: 7540000,
        },
        {
          id: 8,
          name: "Дом в Алмате",
          type: "Недвижимость",
          price: 9650421,
        },
        {
          id: 9,
          name: "Техника",
          type: "Техника",
          price: 965421,
        },
        {
          id: 10,
          name: "Офисный стеллаж",
          type: "Мебель",
          price: 95421,
        },
        {
          id: 11,
          name: "BMW M5",
          type: "Транспорт",
          price: 999999,
        },
        {
          id: 12,
          name: "Дом на Саина",
          type: "Недвижимость",
          price: 7540000,
        },
        {
          id: 13,
          name: "Дом в Алмате",
          type: "Недвижимость",
          price: 9650421,
        },
        {
          id: 14,
          name: "Техника",
          type: "Техника",
          price: 965421,
        },
        {
          id: 15,
          name: "Офисный стеллаж",
          type: "Мебель",
          price: 95421,
        },
        {
          id: 16,
          name: "BMW M5",
          type: "Транспорт",
          price: 999999,
        },
        {
          id: 17,
          name: "Дом на Саина",
          type: "Недвижимость",
          price: 7540000,
        },
        {
          id: 18,
          name: "Дом в Алмате",
          type: "Недвижимость",
          price: 9650421,
        },
        {
          id: 19,
          name: "Техника",
          type: "Техника",
          price: 965421,
        },
        {
          id: 20,
          name: "Офисный с321теллаж",
          type: "Мебель",
          price: 95421,
        },
      ],
      isEdit: "no",
    };
  },
  methods: {
    reloadPagination(arr) {
      console.log(arr);
      this.paginationList = arr;
    },
    cancelFilters() {
      this.filterType = "";
    },
    createFilteredSet(key) {
      const unfiltered = this.orders.map((obj) => obj[key]);
      return [...new Set(unfiltered)];
    },
  },
  computed: {
    typeList() {
      return this.createFilteredSet("type");
    },
    filteredItems() {
      return this.orders.filter(
        (order) =>
          (this.filterType === "" ? true : order.type === this.filterType)

      );
    },
    mounted() {
      CloseInvModal();
    },
  },
}
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
  /* font-size: 16px; */
  line-height: 1.4;
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

@media screen and (max-width: 1600px) {
  .pagination__size {
    padding-top: 50px;
  }
}
</style>
