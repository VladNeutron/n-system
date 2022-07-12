<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <lists-header>
          <template v-slot:title> Список контрагентов </template>
          <template v-slot:description>
            Внесите изменения и не забудьте нажать “Сохранить”
          </template>
        </lists-header>
        <div class="card pt-4 pb-6">
          <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
            <div>
              <button class="btn bg-gradient-dark mb-0" style="margin-right: 0.833vw"
                onclick="window.location.href = '/accounting/new-contractor'">
                <img src="@/assets/img/whtplus.svg" style="margin-right: 7px" alt="" />
                Добавить контрагента
              </button>
              <button class="btn bg-gradient-dark mb-0" style="margin-right: 0.833vw" @click="openModal(0)">
                <img src="@/assets/img/DocumentsBtn.svg" style="margin-right: 7px" alt="" />
                Документы
              </button>
            </div>
            <div class="table__inputs d-flex gap-3 align-content-center">
              <list-search @searchFilter="(a) => search = a"></list-search>
              <src-button data-bs-toggle="modal" data-bs-target="#SendModal"></src-button>
              <print-button></print-button>
              <download-button></download-button>
              <filters-button></filters-button>
            </div>
          </div>
          <div class="page__table">
            <table class="table table-hover table-striped">
              <thead>
                <tr class="">
                  <th scope="col" class="th__col" style="width: 25px; padding-left: 27px"></th>
                  <th scope="col" class="th__col">Название компании</th>
                  <th scope="col" class="th__col">БИН/ИИН</th>
                  <th scope="col" class="th__col">Тип компании</th>
                  <th scope="col" class="th__col">Тип контрагента</th>
                  <th scope="col" class="th__col">Телефон</th>
                  <th scope="col" class="th__col">Адрес</th>
                  <th scope="col" class="th__col">Действия</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item of paginationList" :key="item.id">
                  <th scope="row" style="padding-left: 27px">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="fcustomCheck1" />
                    </div>
                  </th>
                  <td>{{ item.name }}</td>
                  <td>{{ item.bin }}</td>
                  <td>{{ item.companyType }}</td>
                  <td>{{ item.contractorType }}</td>
                  <td>
                    {{ item.phoneNumber }}
                  </td>
                  <td>{{ item.adress }}</td>

                  <td class="dropdown">
                    <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer" alt="" />
                    <div class="dropdown-content">
                      <a style="cursor: pointer"
                        onclick="window.location.href = '/accounting/edit-contractor'">Редактировать</a>
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
    <p class="text-start my-2 fw-bold" for="supplier">Тип компании</p>
    <select class="form-select" v-model="filterCompanyType">
      <option value="" disabled>Выберите тип компании</option>
      <option v-for="companyType of itemsCompanyType" :key="companyType">
        {{ companyType }}
      </option>
      <option value=""></option>
    </select>
    <p class="text-start my-2 fw-bold" for="supplier">Тип контрагента</p>
    <select class="form-select" v-model="filterContractorType">
      <option value="" disabled>Выберите тип контрагента</option>
      <option v-for="ContractorType of itemsContractorType" :key="ContractorType">
        {{ ContractorType }}
      </option>
      <option value=""></option>
    </select>
  </the-filter>
  <delete-modal :title="'контрагента'" :text="`контрагента &quot;Тихонова А.Р&quot;`"></delete-modal>
  <counter-modal :product="modal.modalProductName"></counter-modal>
  <send-modal>
    <template #head>
      <div style="text-align: left">
        <p class="header__main">Отправка формы заполнения реквизитов</p>
        <p class="header__sec">
          Укажите E-mail или контактный телефон Вашего контрагента, чтобы он мог заполнить свои реквизиты
        </p>
        <p class="header__sec">
          *Контрагенту будет отправлено письмо или сообщение в WhatsApp со ссылкой на форму заполнения реквизитов.
          После заполнения реквизитов контрагент появится в базе
        </p>
      </div>
    </template>
    <template #body>
      <div class="form-group text-start">
        <label for="example-text-input1" class="form-control-label">E-mail или телефон контрагента</label>
        <input class="form-control" style="width:667.008px" type="text" placeholder="Введите e-mail или телефон"
          id="example-text-input1" />
      </div>
    </template>
    <template #footer>
      <div class="clients__footer">
        <button class="btn bg-gradient-dark" style="width:18.75vw">Отправить</button>
      </div>
    </template>
  </send-modal>
</template>

<script>
import CounterModal from "@/components/CounterModal.vue";
import Filter from "../../components/Filters.vue";
import FiltersButton from "@/components/buttons/FiltersButton.vue";
import SendFormModal from "@/components/SendFormModal.vue"
export default {
  data() {
    return {
      paginationList: [],
      modal: {
        modalProductName: {},
      },
      filterCompanyType: "",
      filterContractorType: "",
      status: null,
      buttonText: "",
      items: [
        {
          id: 0,
          name: "Тихонова А.Р",
          bin: 111111111111,
          companyType: "ТОО",
          contractorType: "Клиент",
          phoneNumber: "+7 999 999 99 99",
          adress: "г.Алматы, ул.Жолдасбекова 97",
        },
        {
          id: 1,
          name: "ИП Ромашкин",
          bin: 222222222222,
          companyType: "ИП",
          contractorType: "Клиент",
          phoneNumber: "+7 999 999 99 99",
          adress: "г.Алматы, ул.Жолдасбекова 97",
        },
        {
          id: 2,
          name: "ИП Весёлов",
          bin: 333333333333,
          companyType: "ИП",
          contractorType: "Клиент",
          phoneNumber: "+7 999 999 99 99",
          adress: "г.Алматы, ул.Жолдасбекова 97",
        },
        {
          id: 3,
          name: "ТОО “Будь уверен”",
          bin: 444444444444,
          companyType: "ТОО",
          contractorType: "Поставщик",
          phoneNumber: "+7 999 999 99 99",
          adress: "г.Алматы, ул.Жолдасбекова 97",
        },
        {
          id: 4,
          name: "Тихонова А.Р",
          bin: 111111111111,
          companyType: "ТОО",
          contractorType: "Клиент",
          phoneNumber: "+7 999 999 99 99",
          adress: "г.Алматы, ул.Жолдасбекова 97",
        },
        {
          id: 5,
          name: "ИП Ромашкин",
          bin: 222222222222,
          companyType: "ИП",
          contractorType: "Клиент",
          phoneNumber: "+7 999 999 99 99",
          adress: "г.Алматы, ул.Жолдасбекова 97",
        },
        {
          id: 6,
          name: "ИП Весёлов",
          bin: 333333333333,
          companyType: "ИП",
          contractorType: "Клиент",
          phoneNumber: "+7 999 999 99 99",
          adress: "г.Алматы, ул.Жолдасбекова 97",
        },
        {
          id: 7,
          name: "ТОО “Будь уверен”",
          bin: 444444444444,
          companyType: "ТОО",
          contractorType: "Поставщик",
          phoneNumber: "+7 999 999 99 99",
          adress: "г.Алматы, ул.Жолдасбекова 97",
        },
        {
          id: 8,
          name: "Тихонова А.Р",
          bin: 111111111111,
          companyType: "ТОО",
          contractorType: "Клиент",
          phoneNumber: "+7 999 999 99 99",
          adress: "г.Алматы, ул.Жолдасбекова 97",
        },
        {
          id: 9,
          name: "ИП Ромашкин",
          bin: 222222222222,
          companyType: "ИП",
          contractorType: "Клиент",
          phoneNumber: "+7 999 999 99 99",
          adress: "г.Алматы, ул.Жолдасбекова 97",
        },
        {
          id: 10,
          name: "ИП Весёлов",
          bin: 333333333333,
          companyType: "ИП",
          contractorType: "Клиент",
          phoneNumber: "+7 999 999 99 99",
          adress: "г.Алматы, ул.Жолдасбекова 97",
        },
        {
          id: 11,
          name: "ТОО “Будь уверен”",
          bin: 444444444444,
          companyType: "ТОО",
          contractorType: "Поставщик",
          phoneNumber: "+7 999 999 99 99",
          adress: "г.Алматы, ул.Жолдасбекова 97",
        },
      ],
      search: '',
    };
  },
  methods: {
    reloadPagination(arr) {
      console.log(arr);
      this.paginationList = arr;
    },
    openModal(id) {
      this.modal.modalProductName = this.items.filter(
        (item) => item.id == id
      )[0];
      $("#CounterModal").modal("show");
    },
    cancelFilters() {
      this.filterCompanyType = "";
      this.FilterContractorType = "";
    },
    createFilteredSet(key) {
      const unfiltered = this.items.map((obj) => obj[key]);
      return [...new Set(unfiltered)];
    },
  },
  computed: {
    itemsCompanyType() {
      return this.createFilteredSet("companyType");
    },
    itemsContractorType() {
      return this.createFilteredSet("contractorType")
    },

    filteredItems() {
      return this.items.filter((item) =>
        (this.filterCompanyType === ""
          ? true
          : this.filterCompanyType === item.companyType)
        &&
        (this.filterContractorType === ""
          ? true
          : this.filterContractorType === item.ContractorType)
        &&
        (String(item.name).toLowerCase().includes(String(this.search).toLowerCase())) ||
        (String(item.contractorType).toLowerCase().includes(String(this.search).toLowerCase())) ||
        (String(item.adress).toLowerCase().includes(String(this.search).toLowerCase())) ||
        (String(item.phoneNumber).includes(String(this.search).toLowerCase())) ||
        (String(item.bin).includes(String(this.search).toLowerCase()))
      );
    },
  },
  components: {
    "the-filter": Filter,
    CounterModal,
    FiltersButton,
    "send-modal": SendFormModal,
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

th {
  text-transform: uppercase !important;
}

@media screen and (max-width: 1600px) {
  .pagination__size {
    padding-top: 50px;
  }
}
</style>
