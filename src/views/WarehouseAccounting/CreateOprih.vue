<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <drop-down>
            <template #header>
              <div class="drop__header">
                <div>
                  <p class="dropdown__title">Создание оприходования</p>
                  <p class="dropdown__sec">
                    Настройте все параметры и нажмите “Завершить оприходование”
                  </p>
                </div>
                <div class="drop__buttons">
                  <action-button style="margin-right:24px"></action-button>
                  <div>
                    <comment-button></comment-button>
                  </div>
                </div>
              </div>
            </template>
            <template #body>
              <div class="drowdown__items">
                <div class="items__block text-start">
                  <p class="items__title">№ оприходования</p>
                  <p class="items__text">№ 19</p>
                </div>
                <div class="items__block text-start" data-bs-toggle="modal" data-bs-target="#InpModal"
                  style="cursor: pointer">
                  <p class="items__title">дата и время</p>
                  <p class="items__text">11 ноя, 19:23, 2021</p>
                </div>
                <div class="form-group text-start">
                  <label for="exampleFormControlSelect1" class="items__title">Склад</label>
                  <div class="select">
                    <select class="form-select" style="border:0 !important;" id="exampleFormControlSelect1">
                      <option selected disabled>Выберите</option>
                      <option>ТРЦ Москва</option>
                      <option>ЦУМ</option>
                    </select>
                  </div>
                </div>
                <div class="form-group text-start">
                  <label for="exampleFormControlSelect1" class="items__title">Ответственный</label>
                  <div class="select">
                    <select class="form-select" style="border:0 !important; margin-right:15px"
                      id="exampleFormControlSelect1">
                      <option selected disabled>Выберите</option>
                      <option>Антон</option>
                      <option>Валера</option>
                      <option>Влад</option>
                    </select>
                  </div>
                </div>
                <div class="items__block text-start">
                  <p class="items__title">Статус оприходования</p>
                  <p class="items__text text-start">
                    <span style="cursor: pointer">Новое</span>
                  </p>
                </div>
                <div class="items__block text-start" style="cursor: pointer"
                  onclick="window.location.href = '/warehouse-accounting/inventorization-list'">
                  <p class="items__title">Инвентаризация</p>
                  <p class="items__text text-start">
                    <span style="text-decoration: underline">Инвентаризация №19</span>,<br />
                    <span style="text-decoration: underline">от 11.11.21</span>
                  </p>
                </div>
              </div>
            </template>
          </drop-down>
          <div class="card pl-pr">
            <div class="main-page text-start">
              <label class="form-control-label ps-3 pt-3 custom__label" for="search">Добавить по штрихкоду</label>
              <div class="d-flex justify-content-between ps-3">
                <div class="page_search-inputs d-flex align-items-center gap-3">
                  <div class="form-group m-0">
                    <div class="input-group form__adapt2">
                      <span class="input-group-text"><img src="@/assets/css/icons/searchIcon.svg" alt="" /></span>
                      <input class="form-control" placeholder="Введите штрихкод" id="search-barcode" type="text" />
                      <span class="input-group-text py-0"><img src="@/assets/css/icons/barcode.svg" alt="" /></span>
                    </div>
                  </div>
                  <button class="btn bg-gradient-info mb-0" data-bs-toggle="modal" data-bs-target="#SelectDisc">
                    Выбрать из списка
                  </button>
                </div>
                <div class="d-flex justify-content-between ps-3 pe-4">
                  <div class="page_search-inputs d-flex align-items-center gap-3">
                    <div class="form-group m-0">
                      <div class="input-group form__adapt">
                        <span class="input-group-text"><img src="@/assets/css/icons/searchIcon.svg" alt="" /></span>
                        <input class="form-control" placeholder="Поиск..." id="search" type="text" />
                      </div>
                    </div>
                    <button class="btn bg-gradient-dark mb-0"
                      onclick="window.location.href = '/warehouse-accounting/post-list'">
                      Завершить оприходование
                    </button>
                  </div>
                </div>
              </div>
              <div v-if="isAdded == false">
                <not-added-table :documentName="'оприходование'"></not-added-table>
              </div>
              <div class="inv__block" v-if="isAdded">
                <div class="inv__content">
                  <div>
                    <table class="table table-hover text-center">
                      <thead>
                        <tr>
                          <th scope="col" class="">№</th>
                          <th scope="col" class="">Артикул</th>
                          <th scope="col" class="">Товар</th>
                          <th scope="col" class="">Категория</th>
                          <th scope="col" class="">Кол-во</th>
                          <th scope="col" class="">Цена</th>
                          <th scope="col" class="">Сумма</th>
                          <th scope="col" class=""></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, i) in paginationList" :key="item">
                          <td scope="row">{{ i + 1 }}</td>
                          <td>{{ item.code }}</td>
                          <td>{{ item.name }}</td>
                          <td>{{ item.category }}</td>
                          <td>{{ item.count }}</td>
                          <td>{{ item.price }} <span>₸</span></td>
                          <td>{{ item.count * item.price }} <span>₸</span></td>
                          <td>
                            <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer" alt="" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <pagination-component v-if="isAdded" :filteredArr="items" :strAmount="7"
                @PaginationReload="reloadPagination" class="pb-4 pagination__size"></pagination-component>
            </div>
          </div>
        </div>
      </div>
    </div>
    <inputs-modal>
      <template #head>
        <div style="text-align: left">
          <p class="header__main">Изменение Даты</p>
          <p class="header__sec">Измените данные и нажмите “Сохранить”</p>
        </div>
      </template>
      <template #body>
        <div class="clients__modal">
          <div class="form-group text-start">
            <label for="example-datetime-local-input" class="form-control-label">Выберите дату и время</label>
            <input class="form-control" type="datetime-local" value="2018-11-23T10:30:00"
              id="example-datetime-local-input" />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="clients__footer">
          <button class="btn clients__save">Сохранить</button>
        </div>
      </template>
    </inputs-modal>
    <select-product></select-product>
    <commentary :pageTitle="'Создание оприходования'"></commentary>
</template>

<script>
import InputsModal from "@/components/InputsModal.vue";
import NotAddedTable from "@/components/NotAddedTable.vue";
export default {
  methods: {
    reloadPagination(arr) {
      this.paginationList = arr;
    },
  },
  components: { InputsModal, NotAddedTable },
  data() {
    return {
      isAdded: false,
      paginationList: [],
      items: [
        {
          code: 1234312454356,
          name: "Куртка зеленая",
          category: "Верхняя одежда",
          count: 1,
          price: 29000,
        },
        {
          code: 987654321123,
          name: "Синяя сумка",
          category: "Сумки",
          count: 1,
          price: 15500,
        },
        {
          code: 123456789098,
          name: "Рюкзак",
          category: "Рюкзаки",
          count: 2,
          price: 16000,
        },
        {
          code: 1234312454356,
          name: "Куртка зеленая",
          category: "Верхняя одежда",
          count: 1,
          price: 29000,
        },
        {
          code: 987654321123,
          name: "Синяя сумка",
          category: "Сумки",
          count: 1,
          price: 15500,
        },
        {
          code: 123456789098,
          name: "Рюкзак",
          category: "Рюкзаки",
          count: 2,
          price: 16000,
        },
        {
          code: 1234312454356,
          name: "Куртка зеленая",
          category: "Верхняя одежда",
          count: 1,
          price: 29000,
        },
        {
          code: 987654321123,
          name: "Синяя сумка",
          category: "Сумки",
          count: 1,
          price: 15500,
        },
        {
          code: 123456789098,
          name: "Рюкзак",
          category: "Рюкзаки",
          count: 2,
          price: 16000,
        },
      ],
    };
  },
};
</script>

<style scoped>
.inv__content {
  height: 17.7vw;
}

.bg-gradient-dark {
  font-weight: 500;
  font-size: 14px;
}

.clients__save {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.429vw 5.208vw 0.729vw 5.208vw;
  text-transform: none;
  font-weight: 700;
  font-size: 0.833vw;
  color: #ffffff;
}

.dropdown__sec {
  font-weight: 400;
  font-size: 0.729vw;
  color: #a0aec0;
}

.dropdown__title {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
  text-align: left;
  margin: 0;
}

.dropdown-item {
  font-weight: 400;
  font-size: 0.729vw;
  color: #2d3748;
}

.count {
  position: absolute;
  background: #eb5757;
  font-weight: 600;
  font-size: 0.625vw;
  color: #fff;
  border-radius: 50%;
  padding: 0 5px 0 5px;
  left: 7.708vw;
  top: -0.26vw;
}

.comment {
  position: relative;
  display: flex;
  border: 1px solid #2d3748;
  box-sizing: border-box;
  border-radius: 8px;
  background: transparent;
  padding: 0.521vw 0.833vw 0.573vw 0.833vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
  margin-right: 1.25vw;
  text-transform: none;
}

.action {
  display: flex;
  border: 1px solid #2d3748;
  box-sizing: border-box;
  border-radius: 8px;
  background: transparent;
  padding: 0.521vw 0.833vw 0.573vw 0.833vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
  text-transform: none;
}

.drop__buttons {
  display: flex;
}

.drop__header {
  display: flex;
  justify-content: space-between;
}

.pagination.pagination-info .page-item.active>.page-link,
.pagination.pagination-info .page-item.active>.page-link:focus,
.pagination.pagination-info .page-item.active>.page-link:hover {
  background-image: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
}

.bg-gradient-info {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
}

.pl-pr {
  /* margin-left: 1.146vw; */
  margin-top: 1.094vw;
  /* margin-right: 3.385vw; */
}

.page__search-inputs {
  gap: 1.042vw;
}

td,
th {
  color: #2d3748;
}

.align-self-start {
  align-self: flex-start;
}

.inv__block {
  padding-bottom: 2.188vw;
  padding-top: 2.083vw;
}

.pagination {
  padding-right: 1.354vw;
}

.buttons__panel button {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  gap: 5px;
}

@media screen and (max-width: 1600px) {
  .pagination__size {
    padding-top: 24px;
  }

  .btn {
    font-size: 12px !important;
  }

  td,
  th {
    font-size: 12px;
  }

  .items__text {
    font-size: 12px;
  }

  .items__title {
    font-size: 12px;
  }

  .form__adapt {
    width: 120px;
  }

  .form__adapt2 {
    width: 225px;
  }

  .comment,
  .action,
  .drowdown__items {
    align-items: center;
  }

  .count {
    left: 8.708vw;
    top: -0.26vw;
  }

  .dropdown__title {
    font-size: 20px;
  }

  .dropdown__sec {
    font-size: 12px;
  }
}
</style>
