<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Список возвратов </template>
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
                  class="btn bg-gradient-dark mb-0"
                  style="
                    margin-right: 0.833vw;
                    font-size: 14px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                  "
                  onclick="window.location.href = '/purchases/create-supplier-return'"
                >
                  <img
                    src="@/assets/img/whtplus.svg"
                    alt=""
                    style="margin-right: 10px"
                  />
                  Новый возврат
                </button>
              </div>
              <div class="table__inputs d-flex gap-3 align-content-center">
                <list-search></list-search>
                <print-button></print-button>
                <download-button></download-button>
                <FiltersButton></FiltersButton>
              </div>
            </div>
            <div class="page__table">
              <table class="table table-hover table-striped">
                <thead>
                  <tr class="">
                    <th
                      scope="col"
                      class="th__col"
                      style="width: 25px padding-left:27px"
                    ></th>
                    <th width="1%" scope="col" class="th__col">№</th>
                    <th scope="col" class="th__col">Номер Возврата</th>
                    <th scope="col" class="th__col">Дата</th>
                    <th scope="col" class="th__col">Ответственный</th>
                    <th scope="col" class="th__col">Поставщик</th>
                    <th scope="col" class="th__col">Склад</th>
                    <th scope="col" class="th__col">Кол-во</th>
                    <th scope="col" class="th__col">Сумма</th>
                    <th scope="col" class="th__col">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(order, i) of orders" :key="order.id">
                    <th scope="row" style="padding-left: 27px">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="fcustomCheck1"
                        />
                      </div>
                    </th>
                    <td width="1%">{{ i + 1 }}</td>
                    <td>{{ order.id }}</td>
                    <td>{{ order.date }}</td>
                    <td>{{ order.responsible }}</td>
                    <td>{{ order.supplier }}</td>
                    <td>
                      {{ order.storage }}
                    </td>
                    <td>{{ order.amount }}</td>
                    <td>{{ order.sum }}</td>

                    <td class="dropdown">
                      <img
                        src="@/assets/img/dots.svg"
                        style="width: 1.563vw; cursor: pointer"
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
                            ><i
                              class="fa fa-angle-double-left"
                              aria-hidden="true"
                            ></i
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
    <delete-modal
      :title="'возврата поставщикам'"
      :text="`документ &quot;Возврат №12132145&quot;`"
    ></delete-modal>
  </main>
</template>

<script>
import Filter from "../../components/Filters.vue";
import FiltersButton from "@/components/buttons/FiltersButton.vue";
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
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          storage: "Aport Mall",
          supplier: "ТОО “Ромашка”",
          amount: 8,
          sum: 12000,
        },
      ],
    };
  },
  components: {
    "the-filter": Filter,
    FiltersButton,
  },
};
</script>

<style scoped>
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
@media screen and (max-width: 1600px) {
  .btn {
    font-size: 12px !important;
  }
  td,
  th {
    font-size: 12px;
  }
  .page__table::-webkit-scrollbar {
    background: #e2e8f0;
    border-radius: 0.78vw;
    width: 0.37vw;
  }
  .page__table::-webkit-scrollbar-thumb {
    border-radius: 0.78vw;
    background-color: #a0aec0;
  }
  .page__table::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.78vw;
    background-color: #e2e8f0;
  }
  .page__table {
    overflow-x: scroll;
  }
}
</style>
