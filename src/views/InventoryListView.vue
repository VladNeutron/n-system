<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <div class="container-fluid container__padding">
      <div class="inv__title">
        <p class="inv__title__text">Список инвентаризаций</p>
      </div>
      <div class="inv__buttons">
        <div class="inv__left__btn">
          <button type="button" class="btn bg-gradient-secondary">
            + Новая инвентаризация
          </button>
        </div>
        <div class="inv__right__btn">
          <div class="form-group">
            <div class="input-group mt-1">
              <span class="input-group-text"
                ><i class="ni ni-zoom-split-in"></i
              ></span>
              <input
                class="form-control inv__inp"
                placeholder="Поиск"
                type="text"
              />
            </div>
          </div>
          <button type="button" class="inv__btn btn btn-outline-dark">
            <img
              src="@/assets/img/filter.svg"
              style="width: 1.25vw; margin-right: 0.417vw"
              alt=""
            />
            фильтры
          </button>
          <button type="button" class="inv__btn btn btn-outline-dark">
            <img
              src="@/assets/img/print.svg"
              style="width: 1.25vw; margin-right: 0.417vw"
              alt=""
            />
            печать
          </button>
          <button type="button" class="inv__btn btn btn-outline-dark">
            <img
              src="@/assets/img/download.svg"
              style="width: 1.25vw; margin-right: 0.417vw"
              alt=""
            />
            скачать
          </button>
        </div>
      </div>
      <div class="inv__block">
        <div class="inv__content">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.inv__block {
  padding-top: 2.083vw;
}
.inv__btn {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.7vw;
}
.inv__btn,
.inv__inp {
  margin-right: 0.521vw;
}
.inv__right__btn {
  display: flex;
  align-items: flex-start;
}
.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 0.417vw;
}
.inv__buttons {
  display: flex;
  justify-content: space-between;
}
.inv__title {
  text-align: left;
}
.inv__title__text {
  font-weight: 700;
  font-size: 1.25vw;
  color: #2d3748;
}
.container__padding {
  padding-left: 2.135vw;
  padding-right: 5.208vw;
}
</style>