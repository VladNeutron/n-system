<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Список сотрудников </template>
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
                  class="btn bg-gradient-dark btn-add mb-0"
                  style="
                    margin-right: 0.833vw;
                    display: flex;
                    align-items: center;
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#InpModal"
                  @click="isEdit = 'no'"
                >
                  <img
                    src="@/assets/img/whtplus.svg"
                    style="margin-right: 10px"
                    alt=""
                  />
                  Добавить сотрудника
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
                      style="width: 25px; padding-left: 27px"
                    ></th>
                    <th width="1%" scope="col" class="th__col">№</th>
                    <th scope="col" class="th__col">ФИО</th>
                    <th scope="col" class="th__col">Должность</th>
                    <th scope="col" class="th__col">Телефон</th>
                    <th scope="col" class="th__col">Email</th>
                    <th scope="col" class="th__col">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(order, i) of paginationList" :key="order.id">
                    <td scope="row" style="padding-left: 27px">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="fcustomCheck1"
                        />
                      </div>
                    </td>
                    <td width="1%">{{ i + 1 }}</td>
                    <td>{{ order.name }}</td>
                    <td>{{ order.position }}</td>
                    <td>{{ order.phoneNumber }}</td>
                    <td>{{ order.email }}</td>
                    <td class="dropdown">
                      <img
                        src="@/assets/img/dots.svg"
                        style="width: 1.563vw; cursor: pointer"
                        alt=""
                      />
                      <div class="dropdown-content">
                        <a
                          style="cursor: pointer"
                          data-bs-toggle="modal"
                          data-bs-target="#InpModal"
                          @click="isEdit = 'yes'"
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
              :filteredArr="filteredList"
              :strAmount="10"
              @PaginationReload="reloadPagination"
            ></pagination-component>
          </div>
        </div>
      </div>
    </div>
    <inputs-modal>
      <template #head>
        <div style="text-align: left" v-if="isEdit == 'no'">
          <p class="header__main">Добавление сотрудника</p>
          <p class="header__sec">
            Введите данные сотрудника и нажмите “Добавить”
          </p>
        </div>
        <div style="text-align: left" v-if="isEdit == 'yes'">
          <p class="header__main">Сотрудник Ильясов</p>
          <p class="header__sec">Измените данные и нажмите “Сохранить”</p>
        </div>
      </template>
      <template #body>
        <div class="clients__modal" v-if="isEdit == 'no'">
          <div class="form-group">
            <label for="example-text-input" class="form-control-label"
              >ФИО сотрудника</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Введите ФИО"
              id="example-text-input"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="Статус заявки"
              >Должность</label
            >
            <select class="form-select">
              <option selected disabled>Выберите</option>
              <option>Кассир</option>
              <option>Складовщик</option>
            </select>
          </div>
          <div class="form-group">
            <label for="example-text-input1" class="form-control-label"
              >Номер телефона</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Введите номер телефона"
              id="example-text-input1"
            />
          </div>
          <div class="form-group">
            <label for="example-text-input2" class="form-control-label"
              >Email</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Введите email"
              id="example-text-input2"
            />
          </div>
        </div>
        <div class="clients__modal" v-if="isEdit == 'yes'">
          <div class="form-group">
            <label for="example-text-input" class="form-control-label"
              >ФИО сотрудника</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Введите ФИО"
              id="example-text-input"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="Статус заявки"
              >Должность</label
            >
            <select class="form-select">
              <option selected disabled>Выберите</option>
              <option>Кассир</option>
              <option>Складовщик</option>
            </select>
          </div>
          <div class="form-group">
            <label for="example-text-input1" class="form-control-label"
              >Номер телефона</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Введите номер телефона"
              id="example-text-input1"
            />
          </div>
          <div class="form-group">
            <label for="example-text-input2" class="form-control-label"
              >Email</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Введите email"
              id="example-text-input2"
            />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="clients__footer" v-if="isEdit == 'no'">
          <button class="btn bg-gradient-dark">Добавить</button>
        </div>
        <div class="clients__footer" v-if="isEdit == 'yes'">
          <button class="btn bg-gradient-dark">Сохранить</button>
        </div>
        <div class="clients__footer" v-if="isEdit == 'yes'">
          <button
            class="btn delete__btn"
            data-bs-toggle="modal"
            data-bs-target="#DeleteInv"
          >
            Удалить сотрудника
          </button>
        </div>
      </template>
    </inputs-modal>
    <the-filter @no-filter="cancelFilters">
      <p class="text-start my-2 fw-bold" for="position">Должность</p>
      <select class="form-select" v-model="filterPosition">
        <option value="" disabled>Выберите должность</option>
        <option v-for="position of orderPositionsList" :key="position">
          {{ position }}
        </option>
        <option value=""></option>
      </select>
    </the-filter>
    <delete-modal
      :title="'сотрудника'"
      :text="`сотрудника &quot;Ильясов Д.С.&quot;`"
    ></delete-modal>
  </main>
</template>

<script>
import Filter from "../../components/Filters.vue";
import InputsModal from "@/components/InputsModal.vue";
import FiltersButton from "@/components/buttons/FiltersButton.vue";
import { CloseInvModal } from "@/assets/js/closeModalDeleteOpen";
export default {
  data() {
    return {
      paginationList: [],
      status: null,
      buttonText: "",
      orders: [
        {
          id: 0,
          name: "Тихонова А.Р",
          position: "Кассир",
          phoneNumber: "+7 999 999 99 99",
          email: "kassir@neutron.kz",
        },
        {
          id: 1,
          name: "Ильясов С.Д",
          position: "Исполнитель",
          phoneNumber: "+7 322 998 25 09",
          email: "isp@neutron.kz",
        },
        {
          id: 2,
          name: "Павлов Л.В",
          position: "Технический директор",
          phoneNumber: "+7 322 998 01 05",
          email: "tech@neutron.kz",
        },
        {
          id: 3,
          name: "Валерьянов М.С",
          position: "Full Stack программист",
          phoneNumber: "+7 322 001 15 02",
          email: "full@neutron.kz",
        },
        {
          id: 4,
          name: "Владосов Л.В",
          position: "Стажёр",
          phoneNumber: "+7 322 999 07 10",
          email: "vlv@neutron.kz",
        },
        {
          id: 0,
          name: "Тихонова А.Р",
          position: "Кассир",
          phoneNumber: "+7 999 999 99 99",
          email: "kassir@neutron.kz",
        },
        {
          id: 1,
          name: "Ильясов С.Д",
          position: "Исполнитель",
          phoneNumber: "+7 322 998 25 09",
          email: "isp@neutron.kz",
        },
        {
          id: 2,
          name: "Павлов Л.В",
          position: "Технический директор",
          phoneNumber: "+7 322 998 01 05",
          email: "tech@neutron.kz",
        },
        {
          id: 3,
          name: "Валерьянов М.С",
          position: "Full Stack программист",
          phoneNumber: "+7 322 001 15 02",
          email: "full@neutron.kz",
        },
        {
          id: 4,
          name: "Владосов Л.В",
          position: "Стажёр",
          phoneNumber: "+7 322 999 07 10",
          email: "vlv@neutron.kz",
        },
        {
          id: 0,
          name: "Тихонова А.Р",
          position: "Кассир",
          phoneNumber: "+7 999 999 99 99",
          email: "kassir@neutron.kz",
        },
        {
          id: 1,
          name: "Ильясов С.Д",
          position: "Исполнитель",
          phoneNumber: "+7 322 998 25 09",
          email: "isp@neutron.kz",
        },
        {
          id: 2,
          name: "Павлов Л.В",
          position: "Технический директор",
          phoneNumber: "+7 322 998 01 05",
          email: "tech@neutron.kz",
        },
        {
          id: 3,
          name: "Валерьянов М.С",
          position: "Full Stack программист",
          phoneNumber: "+7 322 001 15 02",
          email: "full@neutron.kz",
        },
        {
          id: 4,
          name: "Владосов Л.В",
          position: "Стажёр",
          phoneNumber: "+7 322 999 07 10",
          email: "vlv@neutron.kz",
        },
      ],
      isEdit: "no",
      filterPosition: "",
    };
  },
  methods: {
    reloadPagination(arr) {
      console.log(arr);
      this.paginationList = arr;
    },
    cancelFilters() {
      this.filterPosition = "";
    },
    createFilteredSet(key) {
      const unfiltered = this.orders.map((obj) => obj[key]);
      return [...new Set(unfiltered)];
    },
  },
  computed: {
    orderPositionsList() {
      return this.createFilteredSet("position");
    },
    filteredList() {
      return this.orders.filter((order) =>
        this.filterPosition === ""
          ? true
          : order.position === this.filterPosition
      );
    },
  },
  mounted() {
    CloseInvModal();
  },
  components: {
    "the-filter": Filter,
    "inputs-modal": InputsModal,
    FiltersButton,
  },
};
</script>

<style scoped>
.page__table {
  height: 27.6vw;
}
.btn-add {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  /* identical to box height */
  display: flex;

  letter-spacing: -0.387234px;

  color: #ffffff;
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
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 0;
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
</style>
