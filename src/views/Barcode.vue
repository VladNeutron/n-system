<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    
      
        <div class="storage__padding">
          <div class="storage__header">
            <div class="storage__name">
              <p class="storage__main">Печать штрихкода</p>
              <p class="storage__sec">
                Выберите штрихкоды из списка и нажмите "Перейти к печати"
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-9">
              <div class="card barcodes__card">
                <div>
                <div class="topbuttons__cont">
                  <div class="form-group m-0">
                      <div class="input-group mt-1 barcode__search">
                        <span class="input-group-text"
                          ><img src="@/assets/css/icons/searchIcon.svg" alt=""
                        /></span>
                        <input
                          class="form-control"
                          placeholder="Введите штрихкод"
                          id="search"
                          type="text"
                        />
                      </div>
                    </div>

                    <div class="topbuttons__contRight">
                      <button class="btn btn-outline-dark mb-0 reloadData__btn">
                        <img src="@/assets/img/reloadData.svg" class="reloadDataImg" alt="">
                        Обновить данные
                      </button>
                      <button class="btn btn-outline-dark mb-0 ">
                        Фильтры
                      </button>
                    </div>
                </div>
                <div class="table-responsive">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th></th>
                      <th class="ps-2">№</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">штрихкод</th>
                      <th class="ps-2">название</th>
                      <th class="ps-2">цена</th>
                      <th class="ps-2">цвет</th>
                      <th class="ps-2">размер</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(str, ind) in products" :key="ind">
                      <td>
                        <div class="form-check types">
                        <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        :id="'checkbox-' + str.id"
                        @change="selectProduct(str.id)"
                        />
                        </div>
                      </td>
                      <td>
                        {{ind+1}} 
                      </td>
                      <td>
                        {{str.barcode}} 
                      </td>
                      <td>
                        {{str.name}}
                      </td>
                      <td>
                        {{str.price}} ₸ 
                      </td>
                      <td>
                        {{str.color}}
                      </td>
                      <td>
                        {{str.size}}
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
                </div>
                <div class="pagination d-flex justify-content-end pe-5">
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
            <div class="col-3">
              <div class="card barcodes__SettingsCard">
                <div class="settings__title">
                    Настройки печати
                </div>
                <div class="product__nameCont" v-if="selectedProducts.length <= 1">
                  <div class="cont__title">
                    Название товара
                  </div>
                  <div class="product__name">
                    {{selectedOne}}
                  </div>
                </div>

                <div class="product__nameCont" v-else>
                  <div class="cont__title">
                    Выбрано товаров на печать
                  </div>
                  <div class="product__name" style="text-align: right;">
                    {{selectedProducts.length}}
                  </div>
                </div>

                <div class="option__typeCont">
                  <div 
                  :class="['option__barcode', {'option__active': activeOption =='barcode'}]" 
                  @click="activeOption = 'barcode'">
                    Штрихкод
                  </div>
                  <div 
                  :class="['option__price', {'option__active': activeOption =='price'}]"
                  @click="activeOption = 'price'">
                    Ценник
                  </div>
                </div>

                <div class="template__container">
                  <div class="cont__title mt-2 mb-2">
                    Шаблоны размеров штрихкодов
                  </div>
                  <select class="form-select" v-model="selectedTemplate">
                    <option value="" disabled selected>Выберите стандартный шаблон </option>
                    <option
                      v-for="(template, i) in barcodeTemplates"
                      :key="i"
                      :value="template.name"
                      @input="this.selectedTemplate = template.name"
                    >
                      {{ template.name }}
                    </option>
                  </select>

                  <div class="size__container">
                    <div class="barcode__size">
                      <div class="form-group">
                        <div class="cont__title mt-2 mb-2">Ширина, мм</div>
                        <input type="number" class="form-control" id="width" placeholder="0.0 мм">
                      </div>  
                    </div>
                    <img src="@/assets/img/cross.svg" alt="" class="mt-4 mx-2">
                    <div class="barcode__size">
                      <div class="form-group">
                        <div class="cont__title mt-2 mb-2">Высота, мм</div>
                        <input type="number" class="form-control" id="height" placeholder="0.0 мм">
                      </div> 
                    </div>
                  </div>

                </div>

                <div class="barcode__cont" v-show="activeOption=='barcode'">
                  <svg class="barcode onlybarcode"
                    jsbarcode-format="upc"
                    jsbarcode-value="123456789012"
                    jsbarcode-textmargin="0"
                    jsbarcode-fontoptions="bold">
                  </svg>
                </div>

                <div class="priceBar__cont" v-show="activeOption=='price'">
                  <div class="priceBar__name">
                    Куртка Дубленка Черный (S)
                  </div>
                  <div>
                    <svg class="barcode priceBar"
                      jsbarcode-format="upc"
                      jsbarcode-value="123456789012"
                      jsbarcode-textmargin="0"
                      jsbarcode-fontoptions="bold">
                    </svg>
                  </div>
                  <div class="priceBar__prices">
                    <div class="oldPrice">
                      
                    </div>
                    <div class="currentPrice">
                      29 000 ₸   
                    </div>
                  </div>
                </div>

                <button type="button" class="btn bg-gradient-secondary mt-4 mb-0" @click="openModal()">
                  Перейти к печати  
                </button>

                <button class="btn btn-outline-dark mb-0 mt-2">
                  Сохранить картинкой
                </button>

              </div>
            </div>
          </div>

        </div>
      
    <barcode-modal></barcode-modal>  
  </main>
</template>

<script>
import BarcodeModal from '@/components/BarcodeModal.vue'
import {Modal} from "@/assets/js/core/bootstrap.min.js";
export default {
  data(){
    return {
      products: [
        {
          id: 0,
          barcode: 1234567890456,
          name: 'Куртка зеленая',
          price: '29 000',
          color: 'Зеленый',
          size: 'S'
        },
        {
          id: 1,
          barcode: 1234567890456,
          name: 'Куртка зеленая',
          price: '29 000',
          color: 'Зеленый',
          size: 'S'
        },
        {
          id: 2,
          barcode: 1234567890456,
          name: 'Куртка зеленая',
          price: '29 000',
          color: 'Зеленый',
          size: 'S'
        },
        {
          id: 3,
          barcode: 1234567890456,
          name: 'Куртка зеленая',
          price: '29 000',
          color: 'Зеленый',
          size: 'S'
        },
        {
          id: 4,
          barcode: 1234567890456,
          name: 'Куртка зеленая',
          price: '29 000',
          color: 'Зеленый',
          size: 'S'
        },
        {
          id: 5,
          barcode: 1234567890456,
          name: 'Куртка зеленая',
          price: '29 000',
          color: 'Зеленый',
          size: 'S'
        },
        {
          id: 6,
          barcode: 1234567890456,
          name: 'Куртка зеленая',
          price: '29 000',
          color: 'Зеленый',
          size: 'S'
        },
        {
          id: 7,
          barcode: 1234567890456,
          name: 'Куртка зеленая',
          price: '29 000',
          color: 'Зеленый',
          size: 'S'
        },
        {
          id: 8,
          barcode: 1234567890456,
          name: 'Куртка зеленая',
          price: '29 000',
          color: 'Зеленый',
          size: 'S'
        },
        {
          id: 9,
          barcode: 1234567890456,
          name: 'Куртка зеленая',
          price: '29 000',
          color: 'Зеленый',
          size: 'S'
        }
      ],
      selectedProducts: [],  
      activeOption: 'barcode',
      barcodeTemplates: [
        {
          name: '36 x 12 мм',
          width: 36,
          height: 12,
        },
        {
          name: '42 x 16 мм',
          width: 42,
          height: 16,
        },
      ],
      selectedTemplate: '',
    }
  },  
  methods: {
    selectProduct(ids){
      let check = document.querySelector(`#checkbox-${ids}`);
      if(check.checked){
        if(this.selectedProducts.indexOf(this.products.find(el => {return el.id==ids})) == -1){
          this.selectedProducts.push(this.products.find(el=> {return el.id==ids})) 
        }
      }
      else{
        this.selectedProducts.splice(this.selectedProducts.indexOf(this.products.find(el => {return el.id==ids})),1)
      }    
      console.log(this.selectedProducts) 
    },
    openModal(){
      let myModal = new Modal(document.getElementById('BarcodeModal'))
      // let modal = document.getElementById('BarcodeModal');
      // let bsModal = bootstrap.Modal.getInstance(modal)
      myModal.show();
    },
  },
  computed: {
    selectedOne(){
      if(this.selectedProducts.length == 1){
        return this.selectedProducts[0].name;
      }
      else{
        return "";
      }
    }
  },
  mounted(){
    JsBarcode(".barcode").init();
  },
  components: {
    BarcodeModal,
  }
};
</script>

<style scoped>
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

.barcodes__card{
  padding: 1.250vw 1.250vw 1.250vw 1.250vw;
  height: 75vh;
  justify-content: space-between;
}
.barcodes__SettingsCard{
  padding: 1.250vw 1.250vw 1.250vw 1.250vw;
}

/* LIST */
.topbuttons__cont{
  display: flex;
  justify-content: space-between;
}
.topbuttons__contRight{
  display: flex;
}
.reloadData__btn{
  display: flex;
  align-items: center;
  margin-right: 0.833vw;
}
.reloadDataImg{
  width: 1.042vw;  
}
.barcode__search{
  width: 17.969vw;
}

/* TABLE */
table{
  margin-top: 1.500vw;
}
th{
  font-weight: 600;
  font-size: 12px;  
  color: #A0AEC0;
  text-transform: uppercase;
  text-align: left;
}
td{
  text-align: left;
  font-weight: 600;
  font-size: 14px;  
  color: #2D3748;
}

/* SETTINGS */
.settings__title{
  font-weight: 600;
  font-size: 20px;
  text-align: left;
  color: #2D3748;
}
.product__nameCont{
  margin-top: 1.25vw;
}
.cont__title{
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  color: #2D3748;
}
.product__name{
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  color: #2D3748;
  padding: 9px 13px;
  border: 1px solid rgba(160, 174, 192, 1);
  border-radius: 8px;
  height: 40px;
}
/* OPTION */
.option__typeCont{
  display: flex;
  border: 1px solid rgba(160, 174, 192, 1);
  border-radius: 8px;
  margin-top: 1.250vw;
  font-weight: 400;
  font-size: 16px;
  overflow: hidden;
  cursor: pointer;
}
.option__barcode{
  width: 50%;
  padding: 9px;
}
.option__price{
  width: 50%;
  padding: 9px;
}
.option__active{
  background: linear-gradient(83.56deg, #7092E0 10.01%, #8BAEF3 75.36%);
  font-weight: 600;
  font-size: 16px;
  color: white;
}
.size__container{
  display: flex;
  align-items: center;
}

/* BARCODE */
.onlybarcode{
  padding: 10px;
  border: 1px solid rgba(160, 174, 192, 1);
  border-radius: 20px;
  width: 80%;
}

/* PRICEBAR */
.priceBar__cont{
  border: 1px solid rgba(160, 174, 192, 1);
  border-radius: 20px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.priceBar__name{
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.11);
  padding: 10px;
}
.priceBar{
  width: 60%;
  height: 60%;
}
.priceBar__prices{
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.11);
}
.oldPrice{
  width: 50%;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  padding: 6px;
}
.currentPrice{
  width: 50%;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  border-left: 1px solid rgba(0, 0, 0, 0.11);
  padding: 6px;
}
</style>