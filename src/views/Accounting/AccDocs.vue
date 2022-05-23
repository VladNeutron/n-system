<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg main__padding">
    <the-header></the-header>
    <div
      class="page__name d-flex align-items-center justify-content-between px-4"
    >
      <div class="page__name-title text-start">
        <h3>Документы</h3>
        <p class="mb-0">Выберите необходимые вам документы</p>
      </div>
    </div>
    <div class="card pt-4 pb-12 mx-4 mt-4 px-4">
      <div class="row">
        <div class="col-4">
          <router-link :to="{ name: 'income-list' }">
          <div class="docs__content">
            <div class="docs__flex">
              <img
                src="@/assets/img/source.svg"
                style="width: 1.667vw; margin-right: 18px"
                alt=""
              />
              <p class="docs__text">Поступления</p>
            </div>
          </div>
          </router-link>
        </div>
        <div class="col-4">
          <router-link :to="{ name: 'accounts-list' }">
          <div class="docs__content">
            <div class="docs__flex">
              <img
                src="@/assets/img/source.svg"
                style="width: 1.667vw; margin-right: 18px"
                alt=""
              />
              <p class="docs__text">Счета</p>
            </div>
          </div>
          </router-link>
        </div>
        <div class="col-4">
          <router-link :to="{ name: 'invoice-list' }">
          <div class="docs__content">
            <div class="docs__flex">
              <img
                src="@/assets/img/source.svg"
                style="width: 1.667vw; margin-right: 18px"
                alt=""
              />
              <p class="docs__text">Счет-фактуры</p>
            </div>
          </div>
          </router-link>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-4">
          <router-link :to="{ name: 'acts-list' }">
          <div class="docs__content">
            <div class="docs__flex">
              <img
                src="@/assets/img/source.svg"
                style="width: 1.667vw; margin-right: 18px"
                alt=""
              />
              <p class="docs__text">Акты</p>
            </div>
          </div>
          </router-link>
        </div>
        <div class="col-4">
          <router-link :to="{ name: 'implementation-list' }">
          <div class="docs__content">
            <div class="docs__flex">
              <img
                src="@/assets/img/source.svg"
                style="width: 1.667vw; margin-right: 18px"
                alt=""
              />
              <p class="docs__text">Реализации</p>
            </div>
          </div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.docs__flex {
  display: flex;
  align-items: center;
}
.docs__text {
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
  margin: 0;
  white-space: nowrap;
}
.docs__content {
  background: #2d3748;
  border-radius: 12px;
  padding: 6.094vw 14.323vw 1.042vw 1.25vw;
  cursor: pointer;
}
.docs__content:hover {
  box-shadow: 0px 3.5px 5.5px rgba(45, 55, 72, 1);
  transition: 0.1s;
}
</style>
