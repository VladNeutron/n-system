<template>
    <div class="modal fade" id="BarcodeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modalCustom modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header">
                <div>
                    <div class="modalTitle">Настройка печати</div>
                    <div class="modalSubTitle">Настройте количество штрихкодов для печати и убедитесь что все данные верны</div>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="barcodes">
                    <div class="barcodeCell" v-for="bar in selectedArray" :key="bar">
                        
                        <div class="barcode__cont barsModal" v-if="option=='barcode'">
                            <svg class="barcode barcodeModal onlybarcode"
                                jsbarcode-format="ean13"
                                :jsbarcode-value="bar.barcode"
                                jsbarcode-textmargin="0"
                                jsbarcode-fontoptions="bold">
                            </svg>
                        </div>

                        <div class="priceBar__cont barsModal" v-if="option=='price'">
                            <div class="priceBar__name">
                                {{bar.name}} {{bar.color}} ({{bar.size}})
                            </div>
                            <div>
                                <svg class="barcode barcodeModal priceBar"
                                jsbarcode-format="ean13"
                                :jsbarcode-value="bar.barcode"
                                jsbarcode-textmargin="0"
                                jsbarcode-fontoptions="bold">
                                </svg>
                            </div>
                            <div class="priceBar__prices">
                                <div class="oldPrice">
                                
                                </div>
                                <div class="currentPrice">
                                {{bar.price}} ₸   
                                </div>
                            </div>
                        </div>
                        <div class="modal__inp mt-2">
                            <div class="cont__title mt-2 mb-2">Количество</div>
                            <input type="number" min="0" class="form-control amount" id="amount" placeholder="0 шт.">
                        </div>  
                        <div class="modal__inp mt-2" v-if="option=='price'">
                            <div class="cont__title mt-2 mb-2">Старая цена</div>
                            <input type="number" min="0" class="form-control ModalOldPrice" id="ModalOldPrice" placeholder="0 ₸">
                        </div> 

                        <div class="form-check chekCont mt-2" v-if="option=='price'">
                            <input class="form-check-input crossOldPrice" type="checkbox" value="" id="crossOldPrice">
                            <label class="custom-control-label labelCheck" for="crossOldPrice">Зачеркнуть старую цену</label>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="footerCont">
                    <select class="form-select">
                        <option value="Выберите принтер" disabled selected>Выберите принтер</option>
                        <option value="Принтер Xiaomi">
                        Принтер Xiaomi
                        </option>
                    </select>
                    <button type="button" class="btn bg-gradient-secondary" @click="qwe"><img src="@/assets/img/printIcon.svg" alt=""> Печать</button>
                    <button type="button" class="btn bg-gradient-secondaryBlue"><img src="@/assets/img/downloadarrow.svg" alt=""> Скачать</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        selectedArray: Array,
        option: String,
    },
    methods: {
        qwe(){
            let bars = document.querySelectorAll(".barcodeCell");
            let priceCont = document.querySelector('.printContainer');
            
            if(this.option == 'price'){
                bars.forEach((bar,index) => {
                    let barAmount = Number(bar.querySelector(".amount").value);
                    let barOldPrice = Number(bar.querySelector(".ModalOldPrice").value);
                    let barCrossOldPrice = bar.querySelector(".crossOldPrice").checked;

                    for(let i=0; i < (barAmount > 0 ? barAmount : 1); i++){

                        let barcode_view_new = document.createElement('div');
                        barcode_view_new.className = `barcode-view d-flex`; 
                        barcode_view_new.style.pageBreakAfter='always' 
                        priceCont.append(barcode_view_new);

                        let priceBar__cont = document.createElement('div');
                        priceBar__cont.className = `priceBar__cont`; 
                        priceBar__cont.style.width = '53mm'
                        priceBar__cont.style.height = '36mm'
                        barcode_view_new.append(priceBar__cont);

                        let priceBar__name = document.createElement('div');
                        priceBar__name.innerHTML = this.selectedArray[index].name
                        priceBar__name.className = `priceBar__name`; 
                        priceBar__cont.append(priceBar__name);

                        // let priceBarDiv = document.createElement('div');
                        // priceBar__cont.append(priceBarDiv);

                        let barcode_new = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        barcode_new.setAttribute('jsbarcode-format', 'ean13');
                        barcode_new.setAttribute('jsbarcode-value', 1234567890456);
                        barcode_new.setAttribute('jsbarcode-fontoptions', "bold");
                        barcode_new.classList.add("priceBar")
                        barcode_new.classList.add("priceBar__print")
                        barcode_new.setAttribute('jsbarcode-height', "50");
                        priceBar__cont.append(barcode_new);

                        let priceBar__prices = document.createElement('div');
                        priceBar__prices.className = `priceBar__prices`; 
                        priceBar__cont.append(priceBar__prices);

                        let oldPrice = document.createElement('div');
                        oldPrice.className = `oldPrice`; 
                        if(barOldPrice != '' && barOldPrice > 0){
                            oldPrice.innerHTML = barOldPrice + ' ₸'    
                        }
                        if(barCrossOldPrice){
                            oldPrice.style.textDecoration = "line-through"        
                        }
                        priceBar__prices.append(oldPrice);

                        let currentPrice = document.createElement('div');
                        currentPrice.innerHTML = this.selectedArray[index].price + ' ₸'
                        currentPrice.className = `currentPrice`; 
                        priceBar__prices.append(currentPrice);
                    }
                })
                }
            else{
                bars.forEach((bar,index) => {
                let barAmount = Number(bar.querySelector(".amount").value);

                for(let i=0; i < (barAmount > 0 ? barAmount : 1); i++){

                    let barcode_view_new = document.createElement('div');
                    barcode_view_new.className = `barcode-view d-flex`; 
                    barcode_view_new.style.pageBreakAfter='always' 
                    priceCont.append(barcode_view_new);

                    let priceBar__cont = document.createElement('div');
                    priceBar__cont.className = `priceBar__cont`; 
                    priceBar__cont.style.width = '53mm'
                    priceBar__cont.style.height = '36mm'
                    barcode_view_new.append(priceBar__cont);

                    // let priceBarDiv = document.createElement('div');
                    // priceBar__cont.append(priceBarDiv);

                    let barcode_new = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    barcode_new.setAttribute('jsbarcode-format', 'ean13');
                    barcode_new.setAttribute('jsbarcode-value', 1234567890456);
                    barcode_new.setAttribute('jsbarcode-fontoptions', "bold");
                    barcode_new.classList.add("priceBar")
                    barcode_new.classList.add("priceBar__print")
                    barcode_new.setAttribute('jsbarcode-height', "50");
                    barcode_new.classList.add("barcodeAloneWidth");
                    priceBar__cont.append(barcode_new);
                }
            })        
            }
            JsBarcode(".priceBar__print").init();
            
            window.print();

            document.querySelectorAll(".barcode-view").forEach(el => {
                el.remove();
            })


        },
    }
}
</script>

<style scoped>
.modalCustom{
    max-width: 90vw;
}
.modalTitle{
    font-weight: 700;
    font-size: 30px;  
    color: #252F40;  
    text-align: left;
}
.modalSubTitle{
    font-weight: 400;
    font-size: 16px;
    color: #A0AEC0;
    text-align: left;
}
.btn-close{
    background: transparent url(@/assets/img/barcodeModalClose.svg) center/1em auto no-repeat;
    background-size: 24px;
}
.barcodes{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 1vw;
}

/* BARCODE */
.onlybarcode{
  padding: 10px;
  border: 1px solid rgba(160, 174, 192, 1);
  border-radius: 20px;
  width: 80%;
}

/* PRICEBAR */
:global(.priceBar__cont){
    border: 1px solid rgba(160, 174, 192, 1);
  border-radius: 20px;
  /* width: 80%; */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between
}
:global(.priceBar__name){
  font-weight: 400;
  font-size: 0.8em;
  padding: 1mm;
  color: #000000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.11);
}
:global(.priceBar){
  width: 70%;
  height: auto;
  margin: auto;
}
:global(.priceBar__prices){
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.11);
}
:global(.oldPrice){
  width: 50%;
  font-size: 0.75em;
  font-weight: bold;
  color: #000000;
  padding: 1mm 0 1mm 1mm;
}
:global(.currentPrice){
  width: 50%;
  font-size: 0.75em;
  font-weight: bold;
  color: #000000;
  border-left: 1px solid rgba(0, 0, 0, 0.11);
  padding: 1mm 0 1mm 1mm;
}
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

/* INPUTS */
.modal__inp{
    display: flex;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
}
.modal__inp input{
    /* margin-left: 8px; */
    width: 6.510vw;
    height: 35px;
}
.cont__title{
    font-weight: 600;
    font-size: 16px; 
    color: #2D3748;   
    white-space: nowrap;
}

.chekCont{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}
.labelCheck{
    font-weight: 400;
    font-size: 16px;
    color: #252F40;
}


/* BUTTONS */
.footerCont{
    display: flex;
    width: 100%;
    justify-content: center;
}
.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  font-weight: 700;
  font-size: 0.833vw;
  padding: 0.729vw 3.302vw 0.729vw 3.302vw;
  text-transform: none;
  height: 46px;
  margin-left: 10px;
  margin-right: 10px;
}
.bg-gradient-secondaryBlue {
  background: linear-gradient(83.56deg, #7092E0 10.01%, #8BAEF3 75.36%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  font-weight: 700;
  font-size: 0.833vw;
  padding: 0.729vw 3.302vw 0.729vw 3.302vw;
  text-transform: none;
  color: white;
  height: 46px;
}
.form-select{
    width: 11.771vw;
    height: 46px;
}

/* THUMB */
.modal-body::-webkit-scrollbar {
    width: 5px;
}
.modal-body::-webkit-scrollbar-track {
    background-color: #E9ECEF;
    border-radius: 5px;
}
.modal-body::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 35px #313860;
    border-radius: 8px;
}


</style>

<style>
@media print {
    .main {
        display: none;
    }
    .printContainer {
        display: block;
    }
    .barcode-box {
        margin: 3mm 0 0 0;
    }
}
</style>