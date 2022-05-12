<template>
    <the-navbar></the-navbar>
    <main class="main-content border-radius-lg main__padding">
        <the-header></the-header>
        <div class="page__name d-flex align-items-center ms-4 justify-content-between">
            <div class="page__name-title text-start">
                <h3>Лучшие товары за период</h3>
                <p class="mb-0">Внесите изменения и не забудьте  нажать “Сохранить”</p>
            </div>
            <div class="header__buttons">
                <button class="btn filter__button"><img src="@/assets/img/monetization_on.svg" style="width:1.25vw;" alt=""> По сумме продаж</button>
                <button class="btn filter__button">По количеству продаж</button>
                <button class="btn filter__button">По маржинальности товара</button>
            </div>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
.filter__button{
    display: flex;
    margin-right:0.938vw;
}
.main__padding{
    padding-right: 2.083vw;
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
</style>