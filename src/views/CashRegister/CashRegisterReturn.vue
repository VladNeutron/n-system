<template>
  <the-navbar></the-navbar>
  <main class="main-content position-relative border-radius-lg">
  <the-header></the-header>
  <div class="container-fluid pt-1 pb-3">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="cash__header">
                        <div class="cash__header__left">
                            <button class="btn btn-outline-dark">
                                &#8592; Стартовое окно
                            </button>
                            <div class="cash__header__title">
                                Рабочее место кассира
                            </div>
                            <button class="btn bg-gradient-info" data-bs-toggle="modal" data-bs-target="#SelectDisc">
                                Добавить товар
                            </button>
                        </div>
                        <div class="cash__header__right">
                            <input type="text" class="testInp hidenInp" autofocus style="width=0px;height=0px;" 
                            @input="testInp"
                            @change="addProduct($event)"
                            >
                            <button class="btn bg-gradient-dark">
                                Новая продажа
                            </button>
                            <select class="form-select" v-model="cashRegisterNumber">
                                <option>Касса 1</option>
                                <option>Касса 2</option>
                            </select> 
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="product">
                                <div class="product__top">
                                    <span class="product__name" v-if="selectedProduct.name">{{selectedProduct.name}}</span>
                                    <span class="product__name" v-else>Выберите товар</span>
                                    <img src="@/assets/img/cash-register/delete.svg" alt="" @click="deleteProduct(selectedProduct.id)">
                                </div>
                                <div class="product__bottom">
                                    <div class="product__price" v-if="selectedProduct.price">
                                        {{selectedProduct.price}} ₸  
                                    </div>
                                    <div class="product__price" v-else>
                                        0 ₸  
                                    </div>
                                    <div class="product__amount">
                                        <div class="product__amount__btn product__amount__btn__minus" @click="productAmount-=1">
                                            <img src="@/assets/img/cash-register/cashminus.svg" alt="">
                                        </div>
                                        <input type="number" class="form-control" placeholder="шт." 
                                        v-model="productAmount"
                                        min="1"
                                        >
                                        <div class="product__amount__btn" @click="productAmount+=1">+</div>
                                    </div>
                                    <!-- <div class="product__discount">
                                        <input type="number" v-model="percentValue" class="form-control" placeholder="Скидка">
                                        <div 
                                        :class="['product__percent', {'product__discount__active' : discountType == 'percent'}]"
                                        @click="discountType = 'percent'"
                                        >
                                            %
                                        </div>
                                        <div
                                        :class="['product__tenge', {'product__discount__active' : discountType == 'tenge'}]"
                                        @click="discountType = 'tenge'"
                                        >
                                            ₸
                                        </div>
                                    </div> -->
                                    <button class="btn bg-gradient-dark mb-0" @click="saveProduct">
                                        <img src="@/assets/img/cash-register/cashSave.svg" alt=""> Сохранить
                                    </button>
                                    <div class="product__result">
                                        {{productSum}} ₸  
                                    </div>
                                </div>
                            </div>
                            <div class="table__cont">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                Товар
                                            </th>
                                            <th>
                                                Цвет
                                            </th>
                                            <th>
                                                Размер
                                            </th>
                                            <th>
                                                Цена продажи
                                            </th>
                                            <th>
                                                Кол-во
                                            </th>
                                            <!-- <th>
                                                Скидка
                                            </th> -->
                                            <th>
                                                Cумма
                                            </th>
                                            <th>

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="product in produtsList" :key="product.id" @click="this.selectProduct(product)">
                                            <td>
                                                <div class="d-flex px-2">
                                                <div>
                                                    <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg" class="avatar avatar-md me-3">
                                                </div>
                                                <div class="">
                                                    {{product.name}}
                                                </div>
                                                </div>
                                            </td>
                                            <td>
                                                {{product.color}}
                                            </td>
                                            <td>
                                                {{product.size}}
                                            </td>
                                            <td>
                                                {{product.price}} ₸ 
                                            </td>
                                            <td>
                                                {{product.amount}}
                                            </td>
                                            <!-- <td>
                                                {{product.discount}}
                                            </td> -->
                                            <td>
                                                {{product.sum}} ₸ 
                                            </td>
                                            <td @click="deleteProduct(product.id)" style="cursor: pointer;">
                                                <img src="@/assets/img/cash-register/cashTableDelete.svg" alt="">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="action__buttons">
                                <div class="btn__favourite action__button" @click="openFavourites">
                                    <img src="@/assets/img/cash-register/cashFavourite.svg" alt="">    
                                </div>
                                <!-- <div class="btn__discount action__button" data-bs-toggle="modal" data-bs-target="#DiscModal" @click="modalState = 0">
                                    <img src="@/assets/img/cash-register/cashPercentBtn.svg" alt=""> 
                                </div> -->
                                <div class="btn__deferred action__button">
                                    <img src="@/assets/img/cash-register/cashDefferedBtn.svg" alt=""> 
                                </div>
                                <div class="btn__deleteBarcode action__button"  data-bs-toggle="modal" data-bs-target="#DiscModal" @click="modalState = 1">
                                    <img src="@/assets/img/cash-register/cashDeleteBarc.svg" alt=""> 
                                </div>   
                            </div>
                            <div class="calculator__container">
                                <div class="calculator__topBlock">
                                    <div class="calculator__total__Container">
                                        <div class="calculator__total">
                                            <div class="calculator__total__title">
                                                К ВЫДАЧЕ
                                            </div>
                                            <div class="calculator__total__number">
                                                {{totalValue}} ₸
                                            </div>
                                        </div>
                                        <!-- <div class="caluclator__discount">
                                            <div class="caluclator__discount__title">
                                                Сумма скидки
                                            </div>
                                            <div class="caluclator__discount__number">
                                                {{discountValue}} ₸ 
                                            </div>
                                        </div> -->
                                    </div>
                                    <div class="calculator__payment">
                                        <div class="calculator__payment__title">
                                            Способ оплаты
                                        </div>
                                        <div class="calculator__payment__method">
                                            <select class="form-select calculator__payment__method__select" v-model="paymentMethod">
                                                <option>Наличные</option>
                                                <option>Карта</option>
                                            </select>
                                            <div class="calculator__payment__method__input__cont">
                                            <input 
                                            type="number"
                                            class="form-control calculator__payment__method__input" 
                                            placeholder="0"
                                            v-model="paymentValue"
                                            > 
                                                ₸
                                            </div>    
                                        </div>
                                    </div>
                                    <div class="calculator__payment__change">
                                        <div class="calculator__payment__sum">
                                            <div class="calculator__payment__sum__title">
                                                Сдача
                                            </div>
                                            <div class="calculator__payment__sum__number">
                                                   <span class="calculator__payment__sum__number__value">{{changeValue}}</span>₸ 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="calculator__numbers">
                                    <div class="calculator__number" @click="paymentPlus(7)">
                                        7
                                    </div>
                                    <div class="calculator__number" @click="paymentPlus(8)">
                                        8
                                    </div>
                                    <div class="calculator__number" @click="paymentPlus(9)">
                                        9
                                    </div>
                                    <div class="calculator__number calculator__delete" @click="paymentDelete">
                                        <img class="calculator__number__delete" src="@/assets/img/cash-register/calculatorDelete.png" alt="">
                                    </div>
                                    <div class="calculator__number" @click="paymentPlus(4)">
                                        4
                                    </div>
                                    <div class="calculator__number" @click="paymentPlus(5)">
                                        5
                                    </div>
                                    <div class="calculator__number" @click="paymentPlus(6)">
                                        6
                                    </div>
                                    <div class="calculator__number" @click="paymentPlus(1)">
                                        1
                                    </div>
                                    <div class="calculator__number" @click="paymentPlus(2)">
                                        2
                                    </div>
                                    <div class="calculator__number" @click="paymentPlus(3)">
                                        3
                                    </div>
                                    <div class="calculator__number calculator__number__ok" @click="paymentClear">
                                        CE
                                    </div>
                                    <div class="calculator__number calculator__number__zero" @click="paymentPlus(0)">
                                        0
                                    </div>
                                    <div class="calculator__number" @click="paymentPlus('00')">
                                        00
                                    </div>
                                    <div class="calculator__number" @click="paymentPlus('000')">
                                        000
                                    </div>
                                </div>
                            </div>
                            <div class="check__btn__cont">
                                <button class="btn bg-gradient-dark check__btn" @click="printCheck">
                                    Оформить возврат   
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
  <Favourites :deleted="deletedProductId" @set-deleted="deletedProductId = -1" @add-fav="addFavProduct" @delete-fav="deleteProduct"></Favourites>
  <select-product-discount></select-product-discount>
  <discount-modal>
    <template #head>
        <div style="text-align: left" v-if="modalState == 1">
            <p class="header__main">Удаление по штрихкоду</p>
            <p class="header__sec">Отсканируйте товар, который хотите удалить</p>
        </div>
        <div style="text-align: left" v-if="modalState == 0">
            <p class="header__main">Применить скидку</p>
            <p class="header__sec">Введите значение скидки и нажмите “Применить”</p>
        </div>
    </template>
    <template #body>
        <div class="form-group m-0" v-if="modalState == 1">
            <div class="input-group mt-1">
                <input
                    class="form-control"
                    placeholder="Введите штрихкод"
                    id="search-barcode"
                    type="text"
                    @change="deleteBarcode($event)"
                />
                <span class="input-group-text py-0">
                    <img src="@/assets/css/icons/barcode.svg" alt=""/>
                </span>
            </div>
        </div>
        
        <div class="form-group label__text" style="text-align: left" v-if="modalState == 0">
            <label for="exampleFormControlInput1" class="label__text"
              >Введите скидку на весь чек</label
            >
            <div class="d-flex">
                <input
                type="number"
                class="form-control modal__inp"
                id="exampleFormControlInput1"
                placeholder="0"
                v-model="discountModalInput"
                />
                <div 
                :class="['product__percent', {'product__discount__active' : discountType == 'percent'}]"
                @click="discountType = 'percent'"
                >
                    %
                </div>
                <div
                :class="['product__tenge', {'product__discount__active' : discountType == 'tenge'}]"
                @click="discountType = 'tenge'"
                >
                    ₸
                </div>
          </div>    
        </div>
    </template>
    <template #footer v-if="modalState == 0">
        <div class="footer__btn">
          <button class="footer__button" @click="discountForAll">Применить скидку</button>
        </div>
      </template>
  </discount-modal>
  </main>
  <div class="printContainer">
      <div class="check__container">
        <div class="check__header">
            <div class="check__header__title">
                Чек возврата №{{checkNumber}}
            </div>
            <div class="check__header__date">
                {{checkDate}}
            </div>
        </div>    
        <div class="check__products mt-3">
            <div class="d-flex justify-content-between mt-1" v-for="product in produtsList" :key="product.id">
                <div class="check__products__name">
                    {{product.name}}
                </div>
                <div class="check__products__sum">
                    {{product.amount}} шт. х {{product.price}} = {{product.amount*product.price}} 
                </div>
            </div>
            <!-- <div class="d-flex justify-content-between mt-1">
                <div class="check__products__name">
                    СКИДКА
                </div>
                <div class="check__products__sum">
                    {{discountValue}}
                </div>
            </div> -->
        </div>
        <div class="check__result__container">
            <div class="d-flex justify-content-between mt-1">
                <div class="check__result__title">
                    ИТОГО
                </div>
                <div class="check__result__value">
                    {{totalValue}}
                </div>
            </div>    
            <div class="d-flex justify-content-between mt-1">
                <div class="check__result__text">
                    {{paymentMethod}}
                </div>
                <div class="check__result__text">
                    {{paymentValue}}
                </div>
            </div>  
            <div class="d-flex justify-content-between mt-1">
                <div class="check__result__text">
                    Сдача
                </div>
                <div class="check__result__text">
                    {{changeValue}}
                </div>
            </div>
        </div>
        <div class="check__requisites">
            <div class="d-flex justify-content-between mt-1">
                <div class="check__result__text">
                    БИН: 748390012845
                </div>
                <div class="check__result__text">
                    Транзакция: 9575
                </div>
            </div>     
            <div class="d-flex justify-content-between mt-1">
                <div class="check__result__text">
                    ЗНМ: 353728299372
                </div>
                <div class="check__result__text">
                    Кассир: 504220
                </div>
            </div>  
            <div class="d-flex justify-content-between mt-1">
                <div class="check__result__text">
                    РНМ: 0203946720019
                </div>
                <div class="check__result__text">
                    Магазин: 500008
                </div>
            </div>  
        </div>
        <div class="check__footer pt-2 pb-2">
            <div class="check__footer__register" style="text-align:center;">
                Кассир: Касса 1
            </div>
            <div class="check__footer__register mt-1" style="text-align:center;">
                Дата: 06-03-2022 &nbsp; Время: 18:00
            </div>
            <div class="check__footer__register mt-2" style="text-align:center;">
                <b>ФИСКАЛЬНЫЙ ЧЕК</b>
            </div>
            <div class="check__footer__register mt-1" style="text-align:center;">
                ОФД - АО “КАЗАХТЕЛЕКОМ”
            </div>
            <div class="check__footer__register mt-1" style="text-align:center;">
                Фиск. признак 2165782301
            </div>
            <div class="check__footer__register mt-1" style="text-align:center;">
                Код ККМ КГД: 010101297600
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import SelectProductDiscount from "../../components/SelectProductDiscount.vue";
import Favourites from "@/components/Favourites.vue";
import DiscountModal from "@/components/DiscountModal.vue";
export default {
    data(){
        return {
            productAmount: 1,
            discountType: 'percent',
            paymentValue: '',
            percentValue: '',
            products: [
                {
                    id: 1,
                    name: 'Куртка',
                    barcode: '987654321',
                    img: '@/assets/img/cash-register/prodImg.png',
                    color: 'Белый',
                    size: 'S',
                    price: 29000,        
                },
                {
                    id: 2,
                    name: 'Кофта',
                    barcode: '123456789',
                    img: '@/assets/img/cash-register/prodImg.png',
                    color: 'Белый',
                    size: 'M',
                    price: 29000,        
                },
                {
                    id: 123,
                    name: 'Белые носки муж. высокие',
                    barcode: '123123123',
                    article: 94756390,
                    color: 'Белый',
                    size: 'S',
                    price: 750,
                    active: false,
                },
                {
                    id: 124,
                    name: 'Черные носки',
                    barcode: '124124124',
                    article: 94756390,
                    color: 'Белый',
                    size: 'S',
                    price: 650,
                    active: false,
                },
                {
                    id: 125,
                    name: 'Белые сапоги',
                    barcode: '125125125',
                    color: 'Белый',
                    size: 'S',
                    article: 94756390,
                    price: 2850,
                    active: false,
                },
            ],
            produtsList: [
                
            ],
            paymentMethod: 'Наличные',
            selectedProduct: {},
            deletedProductId: -1,
            modalState: 0, 
            discountModalInput: 0,
            discountModalValue: 0,
            checkNumber: 3800961,
            cashRegisterNumber: 'Касса 1',
            checkDate: '13.05.2022 10:58' 
        }
    },
    methods:{
        paymentPlus(num){
           this.paymentValue =  Number(String(this.paymentValue) + num)
        },
        paymentDelete(){
            let strPayment = String(this.paymentValue);
            this.paymentValue =  Number(strPayment.slice(0,strPayment.length-1))
        },
        paymentClear(){
            this.paymentValue = '';
        },
        addProduct(bar){
            // console.log(bar.target.value)
            console.log('searchBar');
            let searchedProduct = this.products.filter( el => {
                return String(el.barcode) == bar.target.value;
            })[0];
            console.log(searchedProduct);
            if (searchedProduct){
                let sameProduct = this.produtsList.filter( el => {return el.id == searchedProduct.id})
                if(sameProduct.length != 0){
                    sameProduct[0].amount = sameProduct[0].amount + 1;
                    sameProduct[0].sum = sameProduct[0].sum + sameProduct[0].price; 
                    document.querySelector('.testInp').value = '';
                    document.querySelector('.testInp').focus();
                }
                else{
                    searchedProduct.amount = 1;
                    searchedProduct.discount = 'нет';
                    searchedProduct.sum = searchedProduct.price;
                    this.produtsList.push(
                        searchedProduct
                    )    
                    document.querySelector('.testInp').value = '';
                    document.querySelector('.testInp').focus();
                }
                
            }
            else{
                alert("Товар не найден");
                document.querySelector('.testInp').value = '';
                document.querySelector('.testInp').focus();
            }
        },
        deleteProduct(id){
            console.log(id)
            this.produtsList = this.produtsList.filter(el => {return el.id != id});
            if(id == this.selectedProduct.id){
                this.selectedProduct = {};
                this.percentValue = '';
                this.productAmount = 1;
            }
            this.deletedProductId = -1;        
            this.deletedProductId = id;
        },
        selectProduct(prod){
            if(this.produtsList.indexOf(prod) != -1){
                this.selectedProduct = prod;
                this.productAmount = prod.amount;
                if(prod.discount != 'нет' && prod.discount > 0){
                    this.discountType = prod.discountTypeProduct;
                    this.percentValue = prod.discountVal;
                }
                else{
                    this.percentValue = '';    
                }
            }    
        },
        saveProduct(){
            let ind = this.produtsList.indexOf(this.selectedProduct);
            if(ind != -1){
                this.produtsList[ind].amount = this.productAmount;
                let result = this.selectedProduct.price * this.productAmount;
                if(this.percentValue > 0){
                    if(this.discountType == 'percent'){
                        this.produtsList[ind].discount = result * this.percentValue / 100;    
                    }
                    else{
                        this.produtsList[ind].discount = this.percentValue;
                    }
                    this.produtsList[ind].discountTypeProduct = this.discountType;
                    this.produtsList[ind].discountVal = this.percentValue;
                }
                else{
                    this.produtsList[ind].discount = 'нет';    
                }
                this.produtsList[ind].sum = this.productSum;    
            }
        },
        openFavourites(){
            let filtersContainer = document.querySelector(".filters__container");
            filtersContainer.classList.add("filters__show");
        },
        testInp(){
            console.log(document.querySelector('.testInp').value);
        },
        testClick(){
            console.log('Abc')
        },    
        addFavProduct(barcode){
            console.log(barcode)
            let searchedProduct = this.products.filter( el => {
                return String(el.barcode) == barcode;
            })[0];  
            if (searchedProduct){
                let sameProduct = this.produtsList.filter( el => {return el.id == searchedProduct.id})
                if(sameProduct.length != 0){
                    sameProduct[0].amount = sameProduct[0].amount + 1;
                    sameProduct[0].sum = sameProduct[0].sum + sameProduct[0].price; 
                    document.querySelector('.testInp').value = '';
                    document.querySelector('.testInp').focus();
                }
                else{
                    searchedProduct.amount = 1;
                    searchedProduct.discount = 'нет';
                    searchedProduct.sum = searchedProduct.price;
                    this.produtsList.push(
                        searchedProduct
                    )    
                    document.querySelector('.testInp').value = '';
                    document.querySelector('.testInp').focus();
                }
                
            }  
        },
        deleteBarcode(bar){
            let deletedProductId = this.produtsList.filter(el => {return el.barcode == bar.target.value})[0].id;
            this.produtsList = this.produtsList.filter(el => {return el.barcode != bar.target.value});
            if(bar.target.value == this.selectedProduct.barcode){
                this.selectedProduct = {};
                this.percentValue = '';
                this.productAmount = 1;
            }
            this.deletedProductId = -1;        
            this.deletedProductId = deletedProductId;
        },
        discountForAll(){
            if(this.discountType == 'percent'){
                this.discountModalValue = 0;
                this.produtsList.forEach(el => {
                    if(
                        el.discount == 0 || el.discount == 'нет'  
                    ){
                        this.discountModalValue += el.price*this.discountModalInput/100;
                    }
                })
            }
            else{
                this.discountModalValue = Number(this.discountModalInput);
            }
        },
        printCheck(){
            window.print();
        }
    },
    computed:{
        productSum(){
            if(this.selectedProduct.price){
                let result = this.selectedProduct.price * this.productAmount;
                if(this.percentValue > 0){
                    if(this.discountType == 'percent'){
                        result = result - result * this.percentValue / 100;  
                    }
                    else{
                        result = result - this.percentValue;
                    }
                }
                return result;
            }
            else {return 0}
        },
        totalValue(){
            let result = this.produtsList.reduce( (accum,cur) => {
                return accum + cur.sum
            }, 0
            )
            if(this.discountModalValue > 0){
                result -= this.discountModalValue
            }
            return result
        },
        discountValue(){
            let result = this.produtsList.reduce( (accum,cur) => {
                if(cur.discount != 'нет' && cur.discount > 0){
                    return accum + cur.discount
                }
                else{
                    return accum + 0   
                }
            }, 0
            )
            if(this.discountModalValue > 0){
                result += this.discountModalValue;
            }
            return result
        },
        changeValue(){
            if(this.paymentValue > this.totalValue){
                return  Number(this.paymentValue) - this.totalValue
            }
            else{
                return 0
            }
        },
    },
    mounted(){
        document.querySelector('.testInp').addEventListener("focus", () => console.log("SALAM"));
        document.querySelector('.testInp').focus() 
        // document.querySelector('.testInp').onblur = function() {
        //     if (!this.value.includes('@')) { // не email
        //     // показать ошибку
        //     console.log("EEE")
        //     // ...и вернуть фокус обратно
        //     document.querySelector('.testInp').focus();
        //     } else {
        //     // this.classList.remove("error");
        //     }
        // };
        document.querySelector("body").onclick = function (event) {
            if (
                !event.target.closest(".calculator__payment__method__input") &&
                !event.target.closest(".product__amount input") &&
                !event.target.closest(".product__discount input") &&
                !event.target.closest(".cash__header__right select") &&
                !event.target.closest(".calculator__payment__method__select")  
            ) {
                document.querySelector('.testInp').focus()     
            }    
        }   
    },
    components: {
    SelectProductDiscount,
    Favourites,
    DiscountModal
},
}
</script>

<style scoped>
/* HEADER */
.cash__header{
    display: flex;
    justify-content: space-between;
    padding: 1.042vw 1.250vw;
    background: #D4E0FD;
    border-radius: 15px 15px 0px 0px;
}
.cash__header__left{
    display: flex;
    align-items: center;
}
.cash__header__right{
    display: flex;
    align-items: center;
}
.cash__header .btn{
    margin-bottom: 0;
    white-space: nowrap;
}
.cash__header__title{
    font-weight: 600;
    font-size: 24px;
    color: #2D3748;
    margin-left: 16px;
    margin-right: 16px;
}
.cash__header__right .form-select{
    margin-left: 16px;
    padding-right: 2rem;
}
.bg-gradient-info {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}
.cash__header select{
    background-color: white;
    color: rgba(45, 55, 72, 1);
}
/* HEADER */

/* PRODUCT */
.product{
    padding: 0.833vw 1.250vw 1.250vw 1.250vw;
    background: rgba(253, 67, 26, 0.3);
    border-radius: 12px;
    margin-top: 1.250vw;
}
.product__top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.product__top img{
    cursor: pointer;
}
.product__name{
    font-weight: 600;
    font-size: 24px;
    color: #000000;
}
.product__bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.042vw;
}
.product__price{
    font-weight: 600;
    font-size: 30px;
    color: #2D3748;
}
.product__amount{
    display: flex;
    align-items: center;
}
.product__amount input{
    margin-left: 7px;
    margin-right: 7px;
    width: 4.031vw;
    font-size: 20px;
}
.product__amount__btn{
    cursor: pointer;
    font-size: 30px;
    padding: 14px;
    background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
    border-radius: 8px;
    color: white;
    line-height: 14px;
}
.product__amount__btn__minus{
    display: flex;
    align-items: center;
    padding: 20px 14px;
}
.product__discount{
    display: flex;
    align-items: center;
}
.product__discount input{
    width: 9.375vw;
    font-size: 20px;
}
.product__percent{
    font-weight: 700;
    font-size: 18px;
    color: #A0AEC0;
    background: #E2E8F0;
    border-radius: 5px;
    padding: 4px 8px;
    margin-left: 4px;
    border: 1px solid #95939e;
    cursor: pointer;
}
.product__tenge{
    font-weight: 700;
    font-size: 18px;
    color: #A0AEC0;
    background: #E2E8F0;
    border-radius: 5px;
    padding: 4px 10px;
    margin-left: 4px;
    border: 1px solid #95939e;
    cursor: pointer;
}
.product__discount__active{
    color: white;
    background: #2D3748;
    border: 1px solid #2D3748;
}
.product__result{
    font-weight: 600;
    font-size: 24px;
    color: #2D3748;
}
/* PRODUCT */

/* TABLE */
.table__cont{
    height: 29vw;
    overflow-y: auto;   
}
.table th{
    text-transform: uppercase;
    color: rgba(160, 174, 192, 1);
    font-weight: 600;
    font-size: 12px;
}
.table td{
    font-weight: 600;
    font-size: 14px; 
    color: #2D3748;
    cursor: pointer;   
}
.table__cont::-webkit-scrollbar {
    width: 5px;
}
.table__cont::-webkit-scrollbar-track {
    background-color: #E9ECEF;
    border-radius: 5px;
}
.table__cont::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px #151928;
    border-radius: 8px;
}
/* TABLE */

/* ACTIONBUTTONS */
.action__buttons{
    display: flex;
    justify-content: space-between;
    margin-top: 1.25vw;
    cursor: pointer;
}
.action__button{
    width: 6.19vw;
    background: #E2E8F0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.action__button img{
    width: 1.12vw;
   
}
/* ACTIONBUTTONS */

/* CALCULATOR */
.form-select {
    border: 1px solid rgba(160, 174, 192, 0) !important;
}
.calculator__container{
    margin-top: 0.73vw;
    margin-bottom: 0.73vw;
}
.calculator__topBlock{
    padding: 1vw;
    background: #2D3748;
    border-radius: 12px 12px 0px 0px;  
}
.calculator__total__Container{
    border-bottom: 1px solid rgba(255, 255, 255, 0.2); 
    padding-bottom: 1vw;
}
.calculator__total{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.calculator__total__title{
    font-weight: 600;
    font-size: 20px;    
    color: #FFFFFF;
}
.calculator__total__number{
    font-weight: 400;
    font-size: 30px;
    color: #82D616;
}
.caluclator__discount{
    display: flex;
    justify-content: space-between;
}
.caluclator__discount__title{
    font-weight: 600;
    font-size: 20px;
    color: #FFFFFF;
}
.caluclator__discount__number{
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
}
.calculator__payment{
    padding-top: 0.5vw;
}
.calculator__payment__title{
    font-weight: 600;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.3);
    text-align: left;
}
.calculator__payment__method{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2); 
}
.calculator__payment__method__select{
    background-color: unset;
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;
    background-image: url("@/assets/img/cash-register/selectArrow.png");
    background-size: 10px;
    width: 8.81vw;
    padding-right: 35px;
    border: unset;
    padding-left: 5px;
}
.calculator__payment__method__select option{
    background-color: #313860;
}
.calculator__payment__method__input__cont{
    display: flex;
    color: white;
    font-weight: 400;
    font-size: 30px;
    align-items: center;
    justify-content: right;
}
.calculator__payment__method__input{
    background-color: unset;
    color: white;
    font-weight: 400;
    font-size: 30px;
    width: 70%;
    margin-right: 5px;
    border: unset;
    text-align: right;
}
.calculator__payment__method__input::-webkit-outer-spin-button,
.calculator__payment__method__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.calculator__payment__method__input {
    -moz-appearance: textfield;
}

.calculator__payment__change{
    margin-top: 0.52vw;
    
}
.calculator__payment__sum{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.calculator__payment__sum__title{
    font-weight: 600;
    font-size: 20px;
    color: #FFFFFF; 
    text-transform: uppercase;   
}
.calculator__payment__sum__number{
    font-weight: 400;
    font-size: 30px;
    color: #FFFFFF;
}
.calculator__payment__sum__number__value{
    margin-right: 5px;
    padding-right: 0.75rem;
}

.calculator__numbers{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    grid-auto-rows: 70px;
    align-items: center;
    background: rgba(160, 174, 192, 1);
    border-radius: 0px 0px 12px 12px;
}
.calculator__number{
    font-weight: 700;
    font-size: 30px;
    color: #2D3748;
    height: 100%;
    /* margin-top: auto; */
    display: flex;
    align-items: center;
    justify-content: center;
    background: #E2E8F0;
    cursor: pointer;
}
.calculator__number__ok{
    grid-column-start: 4;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 5;
    border-radius: 0px 0px 12px 0;
}
.calculator__number__zero{
    border-radius: 0px 0px 0 12px;
}
.calculator__number__delete{
    width: 3.85vw;
}
.check__btn__cont{
    margin-top: 0.67vw;
    display: flex;
    justify-content: space-between;
}
.checkDefer__btn{
    background: #E2E8F0;
    border-radius: 5px;
    width: 25%;    
}
.checkDefer__btn img{
    width: 1.25vw;
    height: 1.25vw;
}
.check__btn{
    width: 100%;
    font-weight: 600;
    font-size: 24px;
    text-transform: none;
}
.calculator__delete{
    grid-column-start: 4;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    
}
/* CALCULATOR */

/* HIDENINP */
.hidenInp{
    width: 0;
    height: 0;
    opacity: 0;
    padding: 0;
    margin: 0;
}

/* MODALDELETE */
.header__sec {
  font-weight: 400;
  font-size: 0.833vw;
  color: #a0aec0;
}
.header__main {
  margin: 0;
  font-weight: 700;
  font-size: 1.2vw;
  color: #252f40;
}
.modal-footer{
    padding: 0 !important;
}
.label__text{
    font-weight: 600;
    font-size: 0.729vw;
    color: #2d3748;
}
.footer__button {
  font-weight: 700;
  font-size: 0.833vw;
  color: #fff;
  border: 0;
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.729vw 5.906vw 0.729vw 5.906vw;
}
.modal-footer{
    padding: 1rem;
}

/* CHECK */
.check__container{
    width: 80mm;
    padding: 2mm;
    font-weight: 400;
    font-size: 12px;
    color: #000000;
}
.check__header{
    padding-top: 20px;
    padding-bottom: 16px;
    text-align: center;
    border-bottom: 1px dashed #A0AEC0;
}
.check__header__title{
    font-weight: 700;
    font-size: 20px;
    color: #000000;
}
.check__header__date{
    font-weight: 400;
    font-size: 16px;
    color: #A0AEC0;
}
.check__products{
    padding-bottom: 16px;
    border-bottom: 1px dashed #A0AEC0;;
}
.check__products__name{
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    width: 35mm;
    text-align: left;
}
.check__products__sum{
    font-weight: 400;
    font-size: 12px;
    color: #000000;
}
.check__result__container{
    padding-top: 10px;
    border-bottom: 1px solid #A0AEC0;
    padding-bottom: 10px;
}
.check__result__title{
    font-size: 16px;
    font-weight: 600;
}
.check__result__value{
    font-size: 14px;
}

.check__requisites{
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed #A0AEC0;;
}
/* CHECK */
</style>

<style>
/* PRINT */
.printContainer{
  display: none;
}
@media print {
    main {
        display: none;
    }
    .printContainer {
        display: block;
    }
    #sidenav-main{
      display: none;
    }
    .barcode-box {
        margin: 3mm 0 0 0;
    }
    .priceBar__cont{
        margin: 3mm 0 0 0;
        border-color: black;
    }
    .priceBar__cont div{
        border-color: black;
    }
    .fade{
      display: none;
    }
    .barcodeAloneWidth{
      width: 90% !important;
    }
}
</style>