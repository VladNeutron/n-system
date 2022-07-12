<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <lists-header>
          <template v-slot:title> Печать штрихкодов </template>
          <template v-slot:description>
            Выберите штрихкоды из списка и нажмите "Перейти к печати"
          </template>
        </lists-header>

        <div class="row">
          <div class="col-9">
            <div class="card barcodes__card">
              <div>
                <div class="topbuttons__cont">
                  <div class="d-flex">
                    <div class="form-group m-0">
                      <div class="input-group barcode__search">
                        <span class="input-group-text"><img src="@/assets/css/icons/searchIcon.svg" alt="" /></span>
                        <input class="form-control" placeholder="Введите штрихкод" id="search" type="text" />
                      </div>
                    </div>

                    <button class="btn ms-3 bg-gradient-secondaryBlue" data-bs-toggle="modal"
                      data-bs-target="#SelectDisc">
                      Выбрать из списка
                    </button>
                  </div>
                  <div class="topbuttons__contRight">
                    <button class="btn btn-outline-dark reloadData__btn">
                      <img src="@/assets/img/reloadData.svg" class="reloadDataImg me-1" alt="" />
                      Обновить данные
                    </button>
                    <filters-button></filters-button>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th></th>
                        <th class="ps-2">Артикул</th>
                        <th class="ps-2">название</th>
                        <th class="ps-2">цена</th>
                        <th class="ps-2">цвет</th>
                        <th class="ps-2">размер</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(str, ind) in paginationList" :key="ind">
                        <td>
                          <div class="form-check types">
                            <input :checked="isItChecked(str.id)" class="form-check-input" type="checkbox" value=""
                              :id="'checkbox-' + str.id" @change="selectProduct(str.id)" />
                            <!-- <input
                                v-else
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                :id="'checkbox-' + str.id"
                                @change="selectProduct(str.id)"
                              /> -->
                          </div>
                        </td>
                        <td>
                          {{ str.barcode }}
                        </td>
                        <td>
                          {{ str.name }}
                        </td>
                        <td>{{ str.price }} ₸</td>
                        <td>
                          {{ str.color }}
                        </td>
                        <td>
                          {{ str.size }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <pagination-component :filteredArr="products" :strAmount="10" @PaginationReload="reloadPagination">
              </pagination-component>
            </div>
          </div>
          <div class="col-3">
            <div class="card barcodes__SettingsCard">
              <div class="settings__title">Настройки печати</div>
              <div class="product__nameCont" v-if="selectedProducts.length <= 1">
                <div class="cont__title">Название товара</div>
                <div class="product__name">
                  {{ selectedOne }}
                </div>
              </div>

              <div class="product__nameCont" v-else>
                <div class="cont__title">Выбрано товаров на печать</div>
                <div class="product__name" style="text-align: right">
                  {{ selectedProducts.length }}
                </div>
              </div>

              <div class="option__typeCont">
                <div :class="[
                  'option__barcode',
                  { option__active: activeOption == 'barcode' },
                ]" @click="activeOption = 'barcode'">
                  Штрихкод
                </div>
                <div :class="[
                  'option__price',
                  { option__active: activeOption == 'price' },
                ]" @click="activeOption = 'price'">
                  Ценник
                </div>
              </div>

              <div class="template__container">
                <div class="cont__title mt-2 mb-2">
                  Шаблоны размеров штрихкодов
                </div>
                <select class="form-select" v-model="selectedTemplate">
                  <option value="" disabled selected>
                    Выберите стандартный шаблон
                  </option>
                  <option v-for="(template, i) in barcodeTemplates" :key="i" :value="template.name"
                    @input="this.selectedTemplate = template.name">
                    {{ template.name }}
                  </option>
                </select>

                <div class="size__container">
                  <div class="barcode__size">
                    <div class="form-group">
                      <div class="cont__title mt-2 mb-2">Ширина, мм</div>
                      <input type="number" class="form-control" id="width" placeholder="0.0 мм" />
                    </div>
                  </div>
                  <img src="@/assets/img/cross.svg" alt="" class="mt-4 mx-2" />
                  <div class="barcode__size">
                    <div class="form-group">
                      <div class="cont__title mt-2 mb-2">Высота, мм</div>
                      <input type="number" class="form-control" id="height" placeholder="0.0 мм" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="barcode__cont" v-show="activeOption == 'barcode'">
                <svg class="barcode onlybarcode" jsbarcode-format="ean13" jsbarcode-value="123456789012"
                  jsbarcode-textmargin="0" jsbarcode-fontoptions="bold"></svg>
              </div>

              <div class="priceBar__cont" v-show="activeOption == 'price'">
                <div class="priceBar__name">Куртка Дубленка Черный (S)</div>
                <div>
                  <svg class="barcode priceBar" jsbarcode-format="ean13" jsbarcode-value="123456789012"
                    jsbarcode-textmargin="0" jsbarcode-fontoptions="bold"></svg>
                </div>
                <div class="priceBar__prices">
                  <div class="oldPrice"></div>
                  <div class="currentPrice">29 000 ₸</div>
                </div>
              </div>

              <button type="button" class="btn bg-gradient-secondary mt-4 mb-0" @click="openModal()">
                Перейти к печати
              </button>

              <button class="btn btn-outline-dark mb-0 mt-2 save__right__btn">
                Сохранить картинкой
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <barcode-modal :selectedArray="selectedProducts" :option="activeOption"></barcode-modal>
  <select-product-discount></select-product-discount>
  <filters>
    <p class="text-start my-2 fw-bold" for="Клиент">Название товара</p>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Название" aria-label="название"
        aria-describedby="basic-addon1" />
    </div>

    <p class="text-start my-2 fw-bold" for="price">Старая цена</p>
    <div class="input-group">
      <input type="text" class="form-control" aria-label="tenge" />
      <span class="input-group-text">₸</span>
    </div>
  </filters>

  <div class="printContainer"></div>
</template>

<script>
import BarcodeModal from "@/components/BarcodeModal.vue";
import { Modal } from "@/assets/js/core/bootstrap.min.js";
import Filters from "@/components/Filters.vue";
import FiltersButton from "@/components/buttons/FiltersButton.vue";
import SelectProductDiscount from "../../components/SelectProductDiscount.vue";
export default {
  data() {
    return {
      products: [
        {
          id: 0,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 1,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 2,
          barcode: 1234567890456,
          name: "Куртка very зеленая and warm",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 3,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 4,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 5,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 6,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 7,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 8,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 9,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 10,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 11,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 12,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 13,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 14,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
        {
          id: 15,
          barcode: 1234567890456,
          name: "Куртка зеленая",
          price: "29 000",
          color: "Зеленый",
          size: "S",
        },
      ],
      paginationList: [],
      selectedProducts: [],
      filterName: "",
      filterOldPrice: "",
      activeOption: "barcode",
      barcodeTemplates: [
        {
          name: "36 x 12 мм",
          width: 36,
          height: 12,
        },
        {
          name: "42 x 16 мм",
          width: 42,
          height: 16,
        },
      ],
      selectedTemplate: "",
    };
  },
  methods: {
    selectProduct(ids) {
      let check = document.querySelector(`#checkbox-${ids}`);
      if (check.checked) {
        if (
          this.selectedProducts.indexOf(
            this.products.find((el) => {
              return el.id == ids;
            })
          ) == -1
        ) {
          this.selectedProducts.push(
            this.products.find((el) => {
              return el.id == ids;
            })
          );
        }
      } else {
        this.selectedProducts.splice(
          this.selectedProducts.indexOf(
            this.products.find((el) => {
              return el.id == ids;
            })
          ),
          1
        );
      }
    },
    isItChecked(ids) {
      if (
        this.selectedProducts.indexOf(
          this.products.find((el) => {
            return el.id == ids;
          })
        ) == -1
      ) {
        return false
      }
      else {
        return true
      }
    },
    openModal() {
      let myModal = Modal.getInstance(document.getElementById("BarcodeModal"));
      myModal.show();
    },
    reloadPagination(arr) {
      // console.log(arr);
      this.paginationList = arr;
    }
  },
  computed: {
    selectedOne() {
      if (this.selectedProducts.length == 1) {
        return this.selectedProducts[0].name;
      } else {
        return "";
      }
    },
  },
  mounted() {
    let myModal = new Modal(document.getElementById("BarcodeModal"));
    JsBarcode(".barcode").init();
    document
      .getElementById("BarcodeModal")
      .addEventListener("show.bs.modal", function (event) {
        JsBarcode(".barcodeModal").init();
      });
  },
  components: {
    BarcodeModal,
    Filters,
    FiltersButton,
    SelectProductDiscount,
  },
};
</script>

<style scoped>
.save__right__btn {
  font-size: 16px;
}

/* HEADER */
.storage__sec {
  font-weight: 400;
  font-size: 0.729vw;
  color: #a0aec0;
}

.storage__main {
  margin: 0;
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
}

.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  font-weight: 700;
  font-size: 0.833vw;
  padding: 0.729vw 3.302vw 0.729vw 3.302vw;
  text-transform: none;
}

.storage__name {
  text-align: left;
}

.storage__header {
  display: flex;
  justify-content: space-between;
}

.storage__padding {
  padding: 1.475vw 2.083vw 1vw 2.083vw;
}

/* HEADER */

.barcodes__card {
  padding: 1.25vw 1.25vw 1.25vw 1.25vw;
  min-height: 75vh;
  justify-content: space-between;
}

.barcodes__SettingsCard {
  padding: 1.25vw 1.25vw 1.25vw 1.25vw;
}

/* LIST */
.topbuttons__cont {
  display: flex;
  justify-content: space-between;
}

.topbuttons__contRight {
  display: flex;
}

.reloadData__btn {
  display: flex;
  align-items: center;
  margin-right: 0.833vw;
  height: 40px;
  font-weight: 600;
  font-size: 12px;
  color: #2d3748;
  text-transform: uppercase !important;
}

.reloadDataImg {
  width: 1.042vw;
}

.barcode__search {
  width: 17.969vw;
}

/* TABLE */
table {
  margin-top: 1.5vw;
}

th {
  font-weight: 600;
  font-size: 12px;
  color: #a0aec0;
  text-transform: uppercase;
  text-align: left !important;
}

td {
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #2d3748;
}

/* SETTINGS */
.settings__title {
  font-weight: 600;
  font-size: 20px;
  text-align: left;
  color: #2d3748;
}

.product__nameCont {
  margin-top: 1.25vw;
}

.cont__title {
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  color: #2d3748;
}

.product__name {
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  color: #2d3748;
  padding: 9px 13px;
  border: 1px solid rgba(160, 174, 192, 1);
  border-radius: 8px;
  height: 40px;
}

/* OPTION */
.option__typeCont {
  display: flex;
  border: 1px solid rgba(160, 174, 192, 1);
  border-radius: 8px;
  margin-top: 1.25vw;
  font-weight: 400;
  font-size: 16px;
  overflow: hidden;
  cursor: pointer;
}

.option__barcode {
  width: 50%;
  padding: 9px;
}

.option__price {
  width: 50%;
  padding: 9px;
}

.option__active {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  font-weight: 600;
  font-size: 16px;
  color: white;
}

.size__container {
  display: flex;
  align-items: center;
}

/* BARCODE */
.onlybarcode {
  padding: 10px;
  border: 1px solid rgba(160, 174, 192, 1);
  border-radius: 20px;
  width: 80%;
}

/* PRICEBAR */
.priceBar__cont {
  border: 1px solid rgba(160, 174, 192, 1);
  border-radius: 20px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.priceBar__name {
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.11);
  padding: 10px;
}

.priceBar {
  width: 60%;
  height: 60%;
}

.priceBar__prices {
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.11);
}

.oldPrice {
  width: 50%;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  padding: 6px;
}

.currentPrice {
  width: 50%;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  border-left: 1px solid rgba(0, 0, 0, 0.11);
  padding: 6px;
}

.bg-gradient-secondaryBlue {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  padding: 0.729vw 1.302vw 0.729vw 1.302vw;
  text-transform: none;
  color: white;
  height: 40px;
}

@media screen and (max-width: 1600px) {
  .storage__main {
    font-size: 20px;
  }

  .storage__sec {
    font-size: 14px;
  }

  td,
  th {
    font-size: 12px;
  }

  .settings__title {
    font-size: 18px;
  }

  .option__active,
  .option__barcode,
  .option__price {
    font-size: 12px;
    font-weight: 400;
  }

  option {
    font-size: 12px;
  }
}
</style>
<style>
/* PRINT */
.printContainer {
  display: none;
}

@media print {
  main {
    display: none;
  }

  .printContainer {
    display: block;
  }

  #sidenav-main {
    display: none;
  }

  .barcode-box {
    margin: 3mm 0 0 0;
  }

  .priceBar__cont {
    margin: 3mm 0 0 0;
    border-color: black;
  }

  .priceBar__cont div {
    border-color: black;
  }

  .fade {
    display: none;
  }

  .barcodeAloneWidth {
    width: 90% !important;
  }
}
</style>
