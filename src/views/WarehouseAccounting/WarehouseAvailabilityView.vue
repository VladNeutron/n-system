<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <!-- <div class="page__name px-4">
      <h3 class="text-start">Наличие на складе</h3>
      <p class="text-start m-0">
        Внесите изменения и не забудьте нажать "Сохранить"
      </p>
    </div> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Наличие на складе </template>
            <template v-slot:description>
              Внесите изменения и не забудьте нажать “Сохранить”
            </template>
          </lists-header>
          <div class="card">
            <div
              class="search__munu p-4 d-flex justify-content-between align-items-end"
            >
              <div class="search__menu-left d-flex gap-4">
                <div
                  class="form-group m-0 d-flex flex-column align-items-start"
                  style="width: 307px"
                >
                  <label for="search" class="custom__label"
                    >Список товаров</label
                  >
                  <div class="input-group mt-1">
                    <span class="input-group-text"
                      ><img src="@/assets/css/icons/searchIcon.svg" alt="" />
                    </span>
                    <input
                      class="form-control"
                      placeholder="Поиск..."
                      id="search"
                      type="text"
                      v-model.trim="search"
                    />
                  </div>
                </div>
                <div
                  class="form-group m-0 mt-1 d-flex flex-column align-items-start"
                  style="width: 393px"
                >
                  <label for="search" class="custom__label"
                    >Выберите склад</label
                  >
                  <select class="form-select form__adapt" v-model="selected">
                    <option
                      v-for="(warehouse, i) in warehousesArr"
                      :key="i"
                      :value="warehouse"
                      @input="this.selected = warehouse"
                    >
                      {{ warehouse }}
                    </option>
                    <option value="">Без фильтра</option>
                  </select>
                </div>
              </div>
              <div class="search__menu-right d-flex align-items-end gap-4">
                <filters-button></filters-button>
                <export-button></export-button>
              </div>
            </div>
            <div class="table__body">
              <table class="table table-hover text-center table-striped">
                <thead>
                  <tr>
                    <th scope="col" class="">№</th>
                    <th scope="col" class="">Товар</th>
                    <th scope="col" class="">Артикул</th>
                    <th scope="col" class="">Цвет</th>
                    <th scope="col" class="">Размер</th>
                    <th scope="col" class="">Склад</th>
                    <th scope="col" class="">Себестоимость</th>
                    <th scope="col" class="">Текущая цена</th>
                    <th scope="col" class="">Кол-во</th>
                    <th scope="col" class="">Сумма</th>
                  </tr>
                </thead>
                <tbody class="table-body">
                  <tr v-for="(item, i) in filteredWarehouse" :key="item">
                    <td scope="row">{{ i + 1 }}</td>
                    <td class="d-flex gap-2">
                      <img :src="item.img" />{{ item.name }}
                    </td>
                    <td>{{ item.barcode }}</td>
                    <td>{{ item.color }}</td>
                    <td>{{ item.size }}</td>
                    <td>{{ item.warehouse }}</td>
                    <td>{{ item.startPrice }}<span>₸</span></td>
                    <td>{{ item.currentPrice }}<span>₸</span></td>
                    <td>{{ item.amount }}</td>
                    <td>{{ item.currentPrice * item.amount }}<span>₸</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table__pagination pb-2">
              <div class="pagination d-flex justify-content-end px-5">
                <div class="d-flex align-items-center gap-3 pb-4">
                  <div>
                    <p class="m-0">Показано<span> 2112 12121</span></p>
                  </div>

                  <div class="page__search-pages d-flex align-content-center">
                    <div
                      class="pagination-container d-flex justify-items-center"
                    >
                      <ul class="pagination pagination-info mb-0 pe-0">
                        <li class="page-item">
                          <a
                            class="page-link"
                            href="javascript:;"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true"
                              ><i
                                class="fa fa-angle-left"
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
                                class="fa fa-angle-right"
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
    </div>
    <filters>
      <div class="filters__period__flex">
        <div class="filter__name__standart">Выберите период</div>
        <div class="reset__date">Сбросить период</div>
      </div>
      <div class="filters__period">
        <div class="form-group">
          <input
            class="form-control period__s"
            type="date"
            id="example-date-input"
          />
        </div>
        <div>
          <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
        </div>
        <div class="form-group">
          <input
            class="form-control period__s"
            type="date"
            id="example-date-input"
          />
        </div>
      </div>
      <div class="text-start">
        <label class="text-start" for="">Категория</label>
        <select class="form-select">
          <option></option>
        </select>
      </div>
      <div class="text-start">
        <label class="text-start" for="">Склад</label>
        <select class="form-select">
          <option></option>
        </select>
      </div>
      <div
        class="form-check d-flex align-items-center"
        style="text-align: left; margin-top: 0.833vw"
      >
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="fcustomCheck1"
        />
        <label
          class="custom-control-label filters__checkbox__label"
          for="customCheck1"
          >Есть в наличии</label
        >
      </div>
    </filters>
  </main>
</template>

<script>
import FiltersButton from "@/components/buttons/FiltersButton.vue";
import Filters from "@/components/Filters.vue";
export default {
  components: {
    FiltersButton,
    Filters,
  },
  data() {
    return {
      items: [
        {
          name: "Куртка зеленая",
          img: require("@/assets/css/images/pants.png"),
          barcode: 1234567890456,
          color: "Зеленый",
          size: "S",
          warehouse: "ТЦ “Jam Mall”",
          startPrice: 12000,
          currentPrice: 29000,
          amount: 1,
        },
        {
          name: "Куртка красная",
          img: require("@/assets/css/images/pants.png"),
          barcode: 1231236554634,
          color: "Красный",
          size: "M",
          warehouse: "ТЦ “Jam Mall”",
          startPrice: 20000,
          currentPrice: 40000,
          amount: 1,
        },
        {
          name: "Футболка синяя",
          img: require("@/assets/css/images/pants.png"),
          barcode: 2354325423,
          color: "Синий",
          size: "XL",
          warehouse: "ТЦ “Апорт”",
          startPrice: 10000,
          currentPrice: 27000,
          amount: 1,
        },
        {
          name: "Штаны дорогие",
          img: require("@/assets/css/images/pants.png"),
          barcode: 55555778080,
          color: "Синий",
          size: "L",
          warehouse: "ТЦ “Апорт”",
          startPrice: 40,
          currentPrice: 40,
          amount: 1,
        },
        {
          name: "Шлем воина",
          img: require("@/assets/css/images/pants.png"),
          barcode: 2123123121,
          color: "Черный",
          size: "M",
          warehouse: "ТЦ “Jam Mall”",
          startPrice: 1000000,
          currentPrice: 12000000,
          amount: 1,
        },
      ],
      warehousesArr: ["ТЦ “Jam Mall”", "ТЦ “Апорт”"],
      search: "",
      selected: "",
    };
  },
  methods: {},
  computed: {
    filteredWarehouse() {
      if (this.selected) {
        return this.items.filter((item) => {
          return (
            (item.name.toLowerCase().includes(this.search.toLowerCase()) ||
              item.barcode.toString().includes(this.search.toLowerCase())) &&
            item.warehouse.toLowerCase() === this.selected.toLowerCase()
          );
        });
      } else
        return this.items.filter((item) => {
          return (
            item.name.toLowerCase().includes(this.search.toLowerCase()) ||
            item.barcode.toString().includes(this.search.toLowerCase())
          );
        });
    },
  },
};
</script>

<style scoped>
.btn-outline-dark{
  font-weight: 500;
}
.period__s {
  width: 191px !important;
}
.page__name h3 {
  font-weight: 700;
  line-height: 1.667vw;
}
.page__name p {
  color: rgba(160, 174, 192, 1);
  font-size: 0.729vw;
}
thead {
  color: rgba(160, 174, 192, 1);
  font-size: 0.625vw;
  line-height: 0.938vw;
}
tbody {
  font-size: 0.729vw;
  font-weight: 600;
  line-height: 0.99vw;
}
tbody img {
  width: 48px;
  height: 48px;
}
.custom__label {
  font-weight: 600;
  font-size: 14px;
  color: #2d3748;
}
@media screen and (max-width: 1600px) {
  td,
  th {
    font-size: 14px;
  }
  .form__adapt {
    margin-top: 4px;
  }
  .table__body::-webkit-scrollbar {
    background: #e2e8f0;
    border-radius: 0.78vw;
    width: 0.37vw;
  }
  .table__body::-webkit-scrollbar-thumb {
    border-radius: 0.78vw;
    background-color: #a0aec0;
  }
  .table__body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.78vw;
    background-color: #e2e8f0;
  }
  .table__body {
    overflow-x: scroll;
  }
  .px-4 {
    margin-bottom: 1.5rem !important;
  }
}
</style>
