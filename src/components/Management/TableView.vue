<template>
  <div class="card py-4 main__card">
    <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
      <div class="d-flex gap-3 align-content-center align-items-center">
        <button class="btn bg-gradient-dark mb-0 topTable__btn" style="
            font-size: 14px;
            font-weight: 600;
            display: flex;
            align-items: center;
          " data-bs-toggle="modal" data-bs-target="#AddDealModal">
          <img src="@/assets/img/whtplus.svg" alt="" style="margin-right: 10px" />
          Добавить сделку
        </button>
        <button class="btn bg-gradient-dark mb-0 topTable__btn" style="
            font-size: 14px;
            font-weight: 600;
            display: flex;
            align-items: center;
          " data-bs-toggle="modal" data-bs-target="#Funnel">
          Настроить воронку
        </button>
      </div>
      <div class="table__inputs d-flex gap-3 align-content-center align-items-center">
        <list-search @searchFilter="(a) => search = a"></list-search>
        <filters-button></filters-button>
      </div>
    </div>
    <div class="page__table">
      <div class="table-wrapper">
        <table class="table table-hover text-wrap text-start table-striped" id="table_id">
          <thead>
            <tr class="text-start">
              <th scope="col" class="th__col" style="width: 1px; padding-left: 27px"></th>
              <th scope="col" class="th__col">Название сделки</th>
              <th scope="col" class="th__col">дата последнего изменения</th>
              <th scope="col" class="th__col">ответственный</th>
              <th scope="col" class="th__col">клиент</th>
              <th scope="col" class="th__col">этап сделки</th>
              <th scope="col" class="th__col">бюджет</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="deal of paginationList" :key="deal.id" data-bs-toggle="modal" data-bs-target="#EditDealModal">
              <th scope="row" style="padding-left: 27px">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                </div>
              </th>
              <td>{{ deal.dealName }}</td>
              <td>{{ deal.dealLastDate }}</td>
              <td>{{ deal.responsible }}</td>

              <td>{{ deal.client }}</td>
              <td>
                <div class="btn stage__btn mb-0 w-70">
                  {{ deal.stage }}
                </div>
              </td>
              <td>{{ deal.budget }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <pagination-component :filteredArr="filteredDeals" @PaginationReload="reloadPagination"></pagination-component>
    <funnel-modal>
      <template #head>
        <div class="text-start">
          <p class="header__main">Настройка воронки</p>
          <p class="header__sec">
            Внесите изменения в этапы и нажмите “Добавить этап”
          </p>
        </div>
      </template>
      <template #body>
        <div class="d-flex justify-content-between px-4">
          <list-search @searchFilter="(a) => searchModal = a"></list-search>
          <button class="btn bg-gradient-dark mb-0 topTable__btn" style="
              font-size: 14px;
              font-weight: 600;
              display: flex;
              align-items: center;
            " @click="openModal">
            <img src="@/assets/img/whtplus.svg" alt="" style="margin-right: 10px" />
            Добавить этап
          </button>
        </div>
        <div class="funnel__table mt-2">
          <table class="table">
            <thead>
              <th>№</th>
              <th>Название этапа</th>
              <th>Действия</th>
            </thead>
            <tbody>
              <tr v-for="item in pagFunnel" :key="item">
                <td>{{ item.listNumber + 1 }}</td>
                <td>{{ item.name }}</td>
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
        <pagination-component :filteredArr="filteredModal" @PaginationReload="reloadPaginationModal" :strAmount="5">
        </pagination-component>
      </template>
    </funnel-modal>
    <inputs-modal>
      <template #head>
        <div class="text-start">
          <p class="header__main">Добавление этапа</p>
          <p class="header__sec">Введите название и нажмите “Сохранить”</p>
        </div>
      </template>
      <template #body>
        <div class="form-group text-start">
          <label for="example-text-input" class="form-control-label">Название этапа сделки</label>
          <input class="form-control" type="text" placeholder="Введите название" id="example-text-input" />
        </div>
      </template>
      <template #footer>
        <div class="clients__footer">
          <button class="btn clients__save" @click="addStep">Добавить</button>
        </div>
      </template>
    </inputs-modal>
  </div>
  <Filters @no-filter="cancelFilters">
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

    <div class="filter__name__standart">Ответственный</div>
    <select class="form-select" v-model="filterResponsible">
      <option value="" disabled selected>Выберите ответственного</option>
      <option v-for="responsible in responsibleList" :key="responsible">
        {{ responsible }}
      </option>
      <option value=""></option>
    </select>
    <div class="filter__name__standart mt-3">Клиент</div>
    <select class="form-select" v-model="filterClient">
      <option value="" disabled selected>Выберите клиента</option>
      <option v-for="client in clientList" :key="client">
        {{ client }}
      </option>
      <option value=""></option>
    </select>
    <div class="filter__name__standart mt-3">Сделка</div>
    <select class="form-select" v-model="filterStage">
      <option value="" disabled selected>
        Выберите этап сделки
      </option>
      <option v-for="stage in stageList" :key="stage">{{ stage }}</option>
      <option value=""></option>
    </select>
  </Filters>
</template>

<script>
import Filters from "@/components/Filters.vue"
import InputsModal from "@/components/InputsModal.vue";
import FunnelModal from "@/components/FunnelModal.vue";
export default {
  components: {
    FunnelModal,
    InputsModal,
    Filters,
  },
  data() {
    return {
      paginationList: [],
      pagFunnel: [],
      items: [
        {
          id: 1,
          name: "Первичный этап",
        },
        {
          id: 2,
          name: "Переговоры",
        },
        {
          id: 3,
          name: "Договор",
        },
        {
          id: 4,
          name: "Ожидание оплаты",
        },
        {
          id: 5,
          name: "Начало работы",
        },
        {
          id: 6,
          name: "Начало работы",
        },
      ],
      search: '',
      searchModal: '',
      filterResponsible: "",
      filterClient: "",
      filterStage: "",
    };
  },
  props: {
    dealsList: Array,
  },
  methods: {
    reloadPagination(arr) {
      this.paginationList = arr;
    },
    reloadPaginationModal(arr) {
      this.pagFunnel = arr;
    },
    openModal() {
      $("#Funnel").modal("hide");
      $("#InpModal").modal("show");
    },
    addStep() {
      $("#InpModal").modal("hide");
      $("#Funnel").modal("show");
    },
    cancelFilters() {
      this.filterResponsible = "";
      this.filterClient = "";
      this.filterStage = "";
    },
    createFilteredSet(key) {
      const unfiltered = this.dealsList.map((obj) => obj[key]);
      return [...new Set(unfiltered)];
    },
  },
  computed: {
    responsibleList() {
      return this.createFilteredSet("responsible");
    },
    clientList() {
      return this.createFilteredSet("client");
    },
    stageList() {
      return this.createFilteredSet("stage");
    },
    filteredDeals() {
      return this.dealsList.filter(
        (deal) =>
          (this.filterResponsible === ""
            ? true
            : deal.responsible === this.filterResponsible) &&
          (this.filterRClient === ""
            ? true
            : deal.client === this.filterClient) &&
          (this.filterStage === ""
            ? true :
            deal.stage === this.filterStage) &&

          (String(deal.dealName).toLowerCase().includes(String(this.search).toLowerCase())) ||
          (String(deal.responsible).toLowerCase().includes(String(this.search).toLowerCase())) ||
          (String(deal.client).includes(String(this.search).toLowerCase()))
      );
    },
    filteredModal() {
      return this.items.filter(
        (item) =>

          (String(item.name).toLowerCase().includes(String(this.searchModal).toLowerCase()))

      );
    },
  },
};
</script>

<style scoped>
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

.topTable__btn {
  height: 40px;
}

.table td {
  text-align: center;
}

.stage__btn {
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}
</style>
