<template>
  <div class="filters__container" id="filters__container">
      <div class="filters__header">
        <div class="filters__header__cont">
            <div class="filters__header__title">
                Фильтры    
            </div>
            <div class="filters__header__text">
                Задайте свои настройки и нажмите “Применить”
            </div>
        </div>
        <img src="@/assets/img/filtersClose.svg" alt="" class="filters__close__img" @click="filtersClose">    
      </div>
      <div class="filters__body">
          <slot>
              Фильтр
          </slot>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        filtersClose(){
            document.querySelector(".filters__container").classList.remove("filters__show");
        },        
    },
    mounted(){
        document.querySelector("body").onclick = function(event) {
            if(!event.target.closest("#filters__container") && !event.target.closest(".openFilters")){
                console.log(event.target)
                if(document.querySelector(".filters__show")){
                    document.querySelector(".filters__container").classList.remove("filters__show");
                }
                
            }
        };    
    },
}
</script>

<style scoped>
.filters__container{
    width: 550px;
    height: 100vh;
    z-index: 1200;
    position: fixed;
    right: -550px;
    top: 0px;
    background-color: white;
    transition: all 0.8s;
    box-shadow: -10px 0px 40px rgba(0, 0, 0, 0.1);
}
.filters__show{
    right: 0;
}
.filters__header{
    display: flex;
    padding: 3.125vw 2.083vw 16px 2.083vw;
    justify-content: space-between;
    align-items: baseline;
}
.filters__header__title{
    text-align: left;
    font-weight: 700;
    font-size: 30px;    
    color: #252F40;
}
.filters__header__text{
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    color: #A0AEC0;
}
.filters__close__img{
    cursor: pointer;
}
.filters__body{
    padding: 1.667vw 2.083vw 1.563vw 2.083vw;
}
.filters__body .filter__name__standart{
    font-weight: 600;
    font-size: 20px;
    color: #2D3748;
    text-align: left;
}
</style>