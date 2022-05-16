<template>
  <div
    class="modal fade"
    id="CounterModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="CounterModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header header-flex">
          <div style="text-align: left; display: flex">
            <div>
              <p class="header__main">Документы по ТОО “Ромашка”</p>
              <p class="header__sec">Список документов по контрагенту</p>
            </div>
          </div>
          <img
            src="@/assets/img/closemodal.svg"
            style="width: 1.25vw; cursor: pointer"
            alt=""
            data-bs-dismiss="modal"
          />
        </div>
        <div class="modal-body">
          <div class="search modal__padding">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <div class="filters__period__flex">
                  <div class="filter__name__standart">Выберите период</div>
                  <div class="reset__date">Сбросить период</div>
                </div>
                <div class="filters__period">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="date"
                      id="example-date-input"
                    />
                  </div>
                  <div>
                    <img
                      src="@/assets/img/line.svg"
                      style="width: 1.927vw"
                      alt=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="date"
                      id="example-date-input"
                    />
                  </div>
                </div>
              </div>
              <div style="margin-left: 1.667vw">
                <div class="form-group m-0">
                  <label class="text-start filter__name__standart" for="type"
                    >Тип документа</label
                  >
                  <select
                    class="form-select"
                    id="type"
                    style="
                      width: 11.667vw;
                      height: 2.344vw;
                      margin-bottom: 1.458vw;
                    "
                  >
                    <option disabled selected>Выберите тип документа</option>
                  </select>
                </div>
              </div>
              <div>
                <div class="form-group m-0">
                  <div class="input-group mt-1" style="width: 10.104vw">
                    <span class="input-group-text"
                      ><img src="@/assets/css/icons/searchIcon.svg" alt=""
                    /></span>
                    <input
                      class="form-control"
                      placeholder="Поиск..."
                      id="search"
                      type="text"
                      v-model.trim="search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="inv__block">
            <div class="inv__content">
              <table class="table table-bordered table-hover table-striped">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="th__col"
                      style="width: 25px; border-left: 0; border-right: 0"
                    ></th>
                    <th
                      scope="col"
                      class="th__col"
                      style="border-left: 0; border-right: 0"
                    >
                      №
                    </th>
                    <th
                      scope="col"
                      class="th__col"
                      style="border-left: 0; border-right: 0"
                    >
                      Номер документа
                    </th>
                    <th
                      scope="col"
                      class="th__col"
                      style="border-left: 0; border-right: 0"
                    >
                      Дата и время
                    </th>

                    <th
                      scope="col"
                      class="th__col"
                      style="border-left: 0; border-right: 0"
                    >
                      Тип документа
                    </th>
                    <th
                      scope="col"
                      class="th__col"
                      style="border-left: 0; border-right: 0"
                    >
                      Сумма
                    </th>
                    <th
                      scope="col"
                      class="th__col"
                      style="border-left: 0; border-right: 0"
                    >
                      Комментарий
                    </th>
                    <th
                      scope="col"
                      class="th__col"
                      style="border-left: 0; border-right: 0"
                    >
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- v-for="item in filteredProducts" :key="item" -->
                  <tr v-for="(item, i) in filteredProducts" :key="item">
                    <td scope="row" style="border-left: 0; border-right: 0">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="fcustomCheck1"
                        />
                      </div>
                    </td>
                    <td style="border-left: 0; border-right: 0">
                      {{ i + 1 }}
                    </td>
                    <td style="border-left: 0; border-right: 0">
                      {{ item.checkNum }}
                    </td>
                    <td style="border-left: 0; border-right: 0">
                      {{ item.date }}
                    </td>
                    <td style="border-left: 0; border-right: 0">
                      {{ item.docType }}
                    </td>
                    <td style="border-left: 0; border-right: 0">
                      {{ item.sum }}
                    </td>
                    <td style="border-left: 0; border-right: 0">
                      {{ item.comment }}
                    </td>
                    <td style="border-left: 0; border-right: 0">
                      <div class="dropdown">
                        <img
                          src="@/assets/img/dots.svg"
                          style="
                            width: 1.563vw;
                            cursor: pointer;
                            transform: rotate(90deg);
                          "
                          alt=""
                        />
                        <div class="dropdown-content">
                          <a
                            style="cursor: pointer"
                            onclick="window.location.href = '/purchases/edit-supplier-return'"
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
          </div>
        </div>
        <div class="modal-footer">
          <div class="pagination d-flex justify-content-end pe-5">
            <div class="d-flex align-items-center gap-3 pb-4">
              <div>
                <p class="m-0">Показано<span> 1-10 из 324</span></p>
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
                          ><i
                            class="fa fa-angle-double-left"
                            aria-hidden="true"
                          ></i
                        ></span>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="javascript:;">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">4</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">5</a>
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link"
                        href="javascript:;"
                        aria-label="Next"
                      >
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
      </div>
    </div>
  </div>
</template>

<script>
import FiltersButton from "@/components/buttons/FiltersButton.vue";
export default {
  components: {
    FiltersButton,
  },
  props: {
    product: Object,
  },
  data() {
    return {
      search: "",
      onStorage: "",
      added: false,
      items: [
        {
          checkNum: "23456",
          date: "11 ноя, 2021 19:23",
          docType: "Реализация",
          sum: "12 890 ₸  ",
          comment: "Какой-то текст",
        },
        {
          checkNum: "23456",
          date: "11 ноя, 2021 19:23",
          docType: "Реализация",
          sum: "12 890 ₸  ",
          comment: "Какой-то текст",
        },
        {
          checkNum: "23456",
          date: "11 ноя, 2021 19:23",
          docType: "Реализация",
          sum: "12 890 ₸  ",
          comment: "Какой-то текст",
        },
        {
          checkNum: "23456",
          date: "11 ноя, 2021 19:23",
          docType: "Реализация",
          sum: "12 890 ₸  ",
          comment: "Какой-то текст",
        },
        {
          checkNum: "23456",
          date: "11 ноя, 2021 19:23",
          docType: "Реализация",
          sum: "12 890 ₸  ",
          comment: "Какой-то текст",
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.items.filter((item) => {
        return item.checkNum.toLowerCase().includes(this.search.toLowerCase());
      });
    },
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
.form-group {
  text-align: left;
}
.filter__name__standart {
  font-weight: 600;
  font-size: 14px;
  color: #2d3748;
  text-align: left;
}
.reset__date {
  font-weight: 400;
  font-size: 0.729vw;
  color: #2d3748;
  text-decoration: underline;
  cursor: pointer;
}
.filters__period__flex {
  display: flex !important;
  justify-content: space-between;
  align-items: flex-end;
}
.filters__period {
  width: 21.615vw;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 0.833vw;
  margin-bottom: 0.833vw;
}
td {
  font-size: 0.729vw;
}
.checks__count {
  margin-left: 1.25vw;
  text-align: left;
}

.count__main {
  font-weight: 400;
  font-size: 0.729vw;
  color: #2d3748;
  margin: 0;
}

.count__sec {
  font-weight: 700;
  font-size: 1.042vw;
  color: #2d3748;
  margin: 0;
}

.form__width {
  width: 15.99vw;
}

.search__buttons {
  margin-top: 0.7vw;
}

.form-control {
  border: 1px solid #a0aec0;
  height: 2.344vw;
}

.left__btn {
  background: transparent;
  border: 1px solid #a0aec0;
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: 0;
  padding: 0.469vw 1.823vw 0.469vw 1.823vw;
  font-size: 0.833vw;
  color: #2d3748;
  font-weight: 400;
}

.right__btn {
  background: transparent;
  border: 1px solid #a0aec0;
  box-sizing: border-box;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0.469vw 2.708vw 0.469vw 2.708vw;
  font-size: 0.833vw;
  color: #2d3748;
  font-weight: 400;
}

.search__label {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}

.search__input {
  width: 22.031vw;
}

.added {
  background: transparent !important;
  border-radius: 5px !important;
  border: 1px solid #2d3748 !important;
  padding: 0.313vw 0.573vw 0.313vw 0.573vw !important;
  font-weight: 400 !important;
  font-size: 0.729vw !important;
  color: #2d3748 !important;
  text-transform: none !important;
}

.add__button {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 5px;
  border: 0;
  padding: 0.313vw 0.833vw 0.313vw 0.833vw;
  font-weight: 400;
  font-size: 0.729vw;
  color: #fff;
  text-transform: none;
}

.pagination.pagination-info .page-item.active > .page-link,
.pagination.pagination-info .page-item.active > .page-link:focus,
.pagination.pagination-info .page-item.active > .page-link:hover {
  background-image: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
}

.header__sec {
  font-weight: 400;
  font-size: 0.833vw;
  color: #a0aec0;
}

.header__main {
  margin: 0;
  font-weight: 700;
  font-size: 1.563vw;
  color: #252f40;
}

.header-flex {
  padding: 1.25vw 2.083vw 0.833vw 2.083vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 8px;
  text-transform: uppercase;
  padding: 0.625vw 4.219vw 0.625vw 4.219vw;
}

.del__btn {
  margin-right: 3.542vw;
}

.modal-footer {
  margin-top: -1vw;
  justify-content: right;
  border-top: 0;
}

.modal__padding {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.modal__title {
  font-weight: 600;
  font-size: 1.042vw;
  color: #2d3748;
}

.modal-dialog {
  max-width: 55.396vw;
}
</style>
