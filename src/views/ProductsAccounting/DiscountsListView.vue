<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Список скидок </template>
          </lists-header>
          <div class="card">
            <div class="inv__buttons">
              <div class="inv__left__btn">
                <!-- <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-text"
                      ><img
                        src="@/assets/css/icons/searchIcon.svg"
                        style="width: 0.833vw"
                        alt=""
                    /></span>
                    <input
                      class="form-control form-control-lg inv__inp"
                      placeholder="Поиск"
                      type="text"
                      id="search"
                      v-model.trim="search"
                    />
                  </div>
                </div> -->
                <button
                  type="button"
                  class="btn bg-gradient-secondary"
                >
                  <img
                    src="@/assets/img/whtplus.svg"
                    style="width: 1.042vw; margin-right: 0.729vw"
                    alt=""
                  />
                  Добавить скидку
                </button>
              </div>
              <div class="inv__right__btn gap-3">
                <list-search></list-search>
                <print-button></print-button>
                <download-button></download-button>
              </div>
            </div>
            <div class="inv__block">
              <div class="inv__content">
                <table class="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th scope="col" class="th__col">№</th>
                      <th scope="col" class="th__col">Тип скидки</th>
                      <th scope="col" class="th__col">Период действия</th>

                      <th scope="col" class="th__col">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in filteredDiscounts" :key="item">
                      <th scope="row">
                        {{ i + 1 }}
                      </th>
                      <td>
                        {{ item.type }}
                      </td>
                      <td width="75%">
                        {{ item.period }}
                      </td>
                      <td class="dropdown">
                        <img
                          src="@/assets/img/dots.svg"
                          style="width: 1.563vw; cursor: pointer"
                          alt=""
                        />
                        <div class="dropdown-content">
                          <a href="#">Редактировать</a>
                          <hr />
                          <a
                            style="cursor: pointer"
                            data-bs-toggle="modal"
                            data-bs-target="#DeleteInv"
                            >Удалить</a
                          >
                        </div>
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
                  <div class="pagination-container d-flex justify-items-center">
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
      </div>
    </div>
    <select-product-discount></select-product-discount>
  </main>
</template>

<script>
import SelectProductDiscount from "../../components/SelectProductDiscount.vue";
export default {
  components: {
    SelectProductDiscount,
  },
  data() {
    return {
      items: [
        {
          type: "Процент/число",
          period: "01.04.2022 - 15.04.2022",
        },
        {
          type: "Процент/число",
          period: "01.04.2022 - 15.04.2022",
        },
        {
          type: "Процент/число",
          period: "01.04.2022 - 15.04.2022",
        },
        {
          type: "Процент/число",
          period: "01.04.2022 - 15.04.2022",
        },
        {
          type: "Процент/число",
          period: "01.04.2022 - 15.04.2022",
        },
        {
          type: "Процент/число",
          period: "01.04.2022 - 15.04.2022",
        },
        {
          type: "Процент/число",
          period: "01.04.2022 - 15.04.2022",
        },
        {
          type: "Процент/число",
          period: "01.04.2022 - 15.04.2022",
        },
        {
          type: "Процент/число",
          period: "01.04.2022 - 15.04.2022",
        },
        {
          type: "Тест",
          period: "01.04.2022 - 15.04.2022",
        },
      ],
      search: "",
    };
  },
  computed: {
    filteredDiscounts() {
      return this.items.filter((item) => {
        return item.type.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
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
.footer__btn {
  display: flex;
  justify-content: center;
}
.modal__inp {
  width: 100% !important;
}
.label__check {
  font-weight: 400;
  font-size: 0.833vw;
  color: #252f40;
}
.label__text {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}
.body__content {
  padding: 1.25vw 2.083vw 0 2.083vw;
}
.header__sec {
  font-weight: 400;
  font-size: 0.833vw;
  color: #a0aec0;
}
.header__main {
  margin: 0;
  font-weight: 700;
  font-size: 1.563vw;
  color: #252f40;
}
.pagination.pagination-info .page-item.active > .page-link,
.pagination.pagination-info .page-item.active > .page-link:focus,
.pagination.pagination-info .page-item.active > .page-link:hover {
  background-image: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
}
.inv__block {
  padding-bottom: 2vw;
}
.form-control {
  width: 15.99vw;
}
.inv__left__btn {
  display: flex;
}
hr {
  border: 1px solid #2d3748;
}
.dropdown {
  width: 100%;
  display: inline-block;
  position: relative;
}
.dropdown-content {
  text-align: left;
  display: none;
  position: absolute;
  width: 7.815vw;
  overflow: auto;
  background: #f8f9fa;
  box-shadow: 2px 2px 5.5px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  right: 15px;
  z-index: 1;
  padding: 0.625vw 0.625vw 0.625vw 0.625vw;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-content a {
  display: block;
  color: #2d3748;
  text-decoration: none;
}
.th__col {
  color: #a0aec0 !important;
}
th {
  text-transform: uppercase;
}
td,
th {
  color: #2d3748;
}
td {
  text-align: center;
}
.inv__content::-webkit-scrollbar {
  background: #e2e8f0;
  border-radius: 0.78vw;
  width: 0.37vw;
}
.inv__content::-webkit-scrollbar-thumb {
  border-radius: 0.78vw;
  background-color: #313860;
}
.inv__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.78vw;
  background-color: #e2e8f0;
}
.inv__content {
  height: 27.363vw;
  overflow-y: auto;
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
  display: flex;
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 0.417vw;
  padding: 0.521vw 1.25vw 0.573vw 1.25vw;
  font-weight: 600;
  font-size: 0.729vw;
  align-items: center;
  text-transform: none;
}
.inv__buttons {
  padding-top: 0.729vw;
  padding-left: 1.25vw;
  padding-right: 1.25vw;
  padding-bottom: 2.083vw;
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
@media screen and (max-width: 1600px) {
  .btn {
    font-size: 12px !important;
  }
  .input-group {
    margin-top: 1px !important;
  }
  td {
    font-size: 14px;
  }
  .dropdown-content {
    width: 130px;
  }
  .inv__title__text {
    font-size: 20px;
  }
}
</style>
