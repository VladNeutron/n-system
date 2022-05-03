<template>
  <the-navbar></the-navbar>
  <main class="main-content position-relative border-radius-lg">
  <the-header></the-header>
  <div class="container-fluid py-4">
        <div class="row mt-4">
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
                            <button class="btn bg-gradient-info">
                                Добавить товар
                            </button>
                        </div>
                        <div class="cash__header__right">
                            <button class="btn bg-gradient-dark">
                                Оформить возврат
                            </button>
                            <select class="form-select">
                                <option>Касса 1</option>
                                <option>Касса 2</option>
                            </select> 
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="product">
                                <div class="product__top">
                                    <span class="product__name">Куртка Бежевая</span>
                                    <img src="@/assets/img/cash-register/delete.svg" alt="">
                                </div>
                                <div class="product__bottom">
                                    <div class="product__price">
                                        32 990 ₸  
                                    </div>
                                    <div class="product__amount">
                                        <div>-</div>
                                        <input type="number" class="form-control" placeholder="шт.">
                                        <div>+</div>
                                    </div>
                                    <div class="product__discount">
                                        <input type="number" class="form-control" placeholder="Скидка">
                                        <div class="percent">
                                            %
                                        </div>
                                        <div class="tenge">
                                            ₸
                                        </div>
                                    </div>
                                    <button class="btn bg-gradient-dark mb-0">
                                        Сохранить
                                    </button>
                                    <div class="product__result">
                                        65 980 ₸  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">

                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
  </main>
</template>

<script>
export default {

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
/* HEADER */

/* PRODUCT */
.product{
    padding: 0.833vw 1.250vw 1.250vw 1.250vw;
    background: rgba(130, 214, 22, 0.3);
    border-radius: 12px;
    margin-top: 1.250vw;
}
.product__top{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
.product__amount{
    display: flex;
    align-items: center;
}
.product__discount{
    display: flex;
    align-items: center;
}
/* PRODUCT */
</style>