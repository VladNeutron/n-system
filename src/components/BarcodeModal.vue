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
                    <div class="barcodeCell" v-for="bar in 20" :key="bar">
                        <div class="priceBar__cont">
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
                        <div class="modal__inp mt-2">
                            <div class="cont__title mt-2 mb-2">Количество</div>
                            <input type="number" class="form-control" id="width" placeholder="0 шт.">
                        </div>  
                        <div class="modal__inp mt-2">
                            <div class="cont__title mt-2 mb-2">Старая цена</div>
                            <input type="number" class="form-control" id="width" placeholder="0 ₸">
                        </div> 

                        <div class="form-check chekCont mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="customCheck1">
                            <label class="custom-control-label labelCheck" for="customCheck1">Зачеркнуть старую цену</label>
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
                    <button type="button" class="btn bg-gradient-secondary"><img src="@/assets/img/printIcon.svg" alt=""> Печать</button>
                    <button type="button" class="btn bg-gradient-secondaryBlue"><img src="@/assets/img/downloadarrow.svg" alt=""> Скачать</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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