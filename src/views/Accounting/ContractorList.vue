<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="page__name d-flex align-items-center ms-4">
      <div class="page__name-title text-start">
        <h3>Список контрагентов</h3>
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
            <img src="@/assets/img/whtplus.svg" alt="" /> Добавить контрагента
          </button>
          <button
            class="btn bg-gradient-dark mb-0"
            style="margin-right: 0.833vw"
          >
            <img src="@/assets/img/DocumentsBtn.svg" alt="" /> Документы
          </button>
        </div>
        <div class="table__inputs d-flex gap-3 align-content-center">
          <div class="form-group m-0">
            <div class="input-group mt-1">
              <span class="input-group-text"
                ><img src="@/assets/css/icons/searchIcon.svg" alt=""
              /></span>
              <input
                class="form-control form__width"
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
            <tr
              v-for="(item, i) of items"
              :key="item.id"
              @click="openModal(item.id)"
            >
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
              <td>{{ item.name }}</td>
              <td>{{ item.bin }}</td>
              <td>{{ item.companyType }}</td>
              <td>{{ item.contractorType }}</td>
              <td>
                {{ item.phoneNumber }}
              </td>
              <td>{{ item.adress }}</td>

              <td>
                <div class="dropdown">
                  <img
                    src="@/assets/img/dots.svg"
                    style="width: 1.563vw; cursor: pointer"
                    alt=""
                  />
                  <div class="dropdown-content">
                    <a
                      style="cursor: pointer"
                      onclick="window.location.href = '/purchases/edit-income'"
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
                </div>
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
    <counter-modal :product="modal.modalProductName"></counter-modal>
  </main>
</template>

<script>
import CounterModal from "@/components/CounterModal.vue";
import Filter from "../../components/Filters.vue";
export default {
  data() {
    return {
      modal: {
        modalProductName: {},
      },
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
      ],
    };
  },
  methods: {
    openModal(id) {
      this.modal.modalProductName = this.items.filter(
        (item) => item.id == id
      )[0];
      $("#CounterModal").modal("show");
    },
  },
  components: {
    "the-filter": Filter,
    CounterModal,
  },
};
</script>

<style scoped>
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
</style>
