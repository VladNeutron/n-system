<template>
  <div class="page__name px-4">
    <h3 class="text-start">Остатки товаров на складе</h3>
    <p class="text-start m-0">
      Внесите изменения и не забудьте нажать “Сохранить”
    </p>
  </div>
  <div class="container-fluid pb-4">
    <div class="row mt-4">
      <div class="col-12">
        <div class="card">
          <div class="search__munu p-4 d-flex justify-content-between align-items-end">
            <div class="search__menu-left d-flex gap-4">
              <div class="form-group m-0 d-flex flex-column align-items-start" style="width: 307px">
                <label for="search" class="custom__label">Список товаров</label>
                <div class="input-group mt-1">
                  <span class="input-group-text"><img src="@/assets/css/icons/searchIcon.svg" alt="" />
                  </span>
                  <input class="form-control" placeholder="Поиск..." id="search" type="text" v-model.trim="search" />
                </div>
              </div>
              <div class="form-group m-0 mt-1 d-flex flex-column align-items-start" style="width: 393px">
                <label for="search" class="custom__label">Выберите склад</label>
                <select class="form-select form__adapt" v-model="selected">
                  <option v-for="(warehouse, i) in warehousesArr" :key="i" :value="warehouse"
                    @input="this.selected = warehouse">
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
                <tr v-for="item in paginationList" :key="item">
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
            <pagination-component :filteredArr="filteredWarehouse" :strAmount="8" @PaginationReload="reloadPagination"
              class="pb-2"></pagination-component>
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
        <input class="form-control period__s" type="date" id="example-date-input" />
      </div>
      <div>
        <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
      </div>
      <div class="form-group">
        <input class="form-control period__s" type="date" id="example-date-input" />
      </div>
    </div>
    <div class="text-start">
      <label class="text-start" for="">Категория</label>
      <select class="form-select">
        <option></option>
      </select>
    </div>
    <!-- <div class="text-start">
        <label class="text-start" for="">Склад</label>
        <select class="form-select">
          <option></option>
        </select>
      </div> -->
    <div class="form-check d-flex align-items-center" style="text-align: left; margin-top: 0.833vw">
      <input class="form-check-input mt-0" type="checkbox" value="" id="fcustomCheck1" />
      <label class="custom-control-label filters__checkbox__label" style="margin-bottom:0;" for="customCheck1">Есть в
        наличии</label>
    </div>
  </filters>
</template>

<script>
import Filters from "@/components/Filters.vue";
export default {
  components: {
    Filters,
  },
  data() {
    return {
      paginationList: [],
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
  methods: {
    reloadPagination(arr) {
      console.log(arr);
      this.paginationList = arr;
    },
  },
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
.table__body {
  height: 30.8vw;
}

.form_s2 {
  width: 20.469vw !important;
}

.form__size {
  width: 15.99vw !important;
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
</style>
