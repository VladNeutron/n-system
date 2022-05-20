<template>
  <div
    class="modal fade"
    id="DeferredList"
    tabindex="-1"
    role="dialog"
    aria-labelledby="DeferredList"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header header-flex">
          <div style="text-align: left">
            <p class="header__main">Список отложенных чеков</p>
            <p class="header__sec">
              Выберите необходимый чек и продолжите  продажу
            </p>
          </div>
          <img
            src="@/assets/img/closemodal.svg"
            style="width: 1.25vw; cursor: pointer"
            alt=""
            data-bs-dismiss="modal"
          />
        </div>
        <div class="modal-body">
          <div class="search">
            <div class="form-group" style="text-align: left">
              <div class="input-group mt-1" data-v-21eb2a38="">
                <span class="input-group-text" data-v-21eb2a38=""><img src="/img/searchIcon.41bd4d0c.svg" alt="" data-v-21eb2a38=""></span>
                <input
                  type="text"
                  class="form-control form-control-lg search__input"
                  placeholder="Поиск"
                  id="searchlo"
                  v-model.trim="search"
                />
              </div>
            </div>
            <div class="search__buttons">
              <button class="btn bg-gradient-dark" data-bs-dismiss="modal">
                Продолжить продажу <img src="@/assets/img/cash-register/rightDeferred.svg" class="ms-1" alt="">  
              </button>  
            </div>
          </div>
          <div class="inv__block">
            <div class="inv__content">
              <table class="table table-bordered table-hover table-striped">
                <thead>
                  <tr style="border-top:0;">
                    <th></th>
                    <th scope="col" class="th__col" style="border-right: 0">
                      №
                    </th>
                    <th
                      scope="col"
                      class="th__col"
                      
                    >
                      Номер чека
                    </th>
                    <th
                      scope="col"
                      class="th__col"
                      
                    >
                      ДАТА И ВРЕМЯ
                    </th>

                    <th
                      scope="col"
                      class="th__col"
                      
                    >
                      КАССИР
                    </th>
                    <th scope="col" class="th__col">
                      ТОРГОВАЯ ТОЧКА    
                    </th>
                    <th scope="col" class="th__col" >
                      КОЛ-ВО    
                    </th>
                    <th scope="col" class="th__col" >
                      СУММА    
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- v-for="(item, i) in filteredDiscounts" :key="item" -->
                  <tr v-for="(item,ind) in filteredProducts" :key="item.id">
                    <td>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="fcustomCheck1">
                      </div>
                    </td>
                    <td>{{ind+1}}</td>
                    <td>{{ item.number }}</td>
                    <td>
                      {{ item.date }}
                    </td>
                    <td>
                      {{ item.cashier }}
                    </td>
                    <td>
                      {{ item.shop }}
                    </td>
                    <td>
                      {{ item.amount }}
                    </td>
                    <td>
                      {{ item.sum }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="pagination d-flex justify-content-end pe-5">
            <div class="d-flex align-items-center gap-3 pb-4">
              <div>
                <p class="m-0">Показано<span> 1-10 из 324</span></p>
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
                    <li class="page-item active">
                      <a class="page-link" href="javascript:;">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">2</a>
                    </li>
                    <li class="page-item">
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
</template>

<script>
export default {
  data() {
    return {
      search: "",
      onStorage: "",
      added: false,
      items: [
        {
          id: 0,
          number: 12345,
          date: "11 ноя, 2021 19:23",
          cashier: "Тихонов А. Р.",
          shop: "ТРЦ 'MOSKVA'",
          amount: '2',
          sum: 23890,
        },
        {
          id: 1,
          number: 345875,
          date: "28 ноя, 2021 11:26",
          cashier: "Тихонов А. Р.",
          shop: "ТРЦ 'MOSKVA'",
          amount: '1',
          sum: 12890,
        },
        {
          id: 2,
          number: 645315,
          date: "18 дек, 2021 20:13",
          cashier: "Тихонов А. Р.",
          shop: "ТРЦ 'MOSKVA'",
          amount: '3',
          sum: 34890,
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.items.filter((item) => {
        return (
          String(item.number).toLowerCase().includes(this.search.toLowerCase())
          // item.barcode.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped>
/* td{
  height: 40px !important;
} */
.search__buttons {
  margin-top: 0.7vw;
}
.form-control {
  border: 1px solid #a0aec0;
  height: 2.344vw;
}
.left__btn {
  background: transparent;
  border: 1px solid #a0aec0;
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: 0;
  padding: 0.469vw 1.823vw 0.469vw 1.823vw;
  font-size: 0.833vw;
  color: #2d3748;
  font-weight: 400;
}
.right__btn {
  background: transparent;
  border: 1px solid #a0aec0;
  box-sizing: border-box;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0.469vw 2.708vw 0.469vw 2.708vw;
  font-size: 0.833vw;
  color: #2d3748;
  font-weight: 400;
}
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search__label {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}
.search__input {
  width: 15.031vw;
}
.added {
  background: transparent !important;
  border-radius: 5px !important;
  border: 1px solid #2d3748 !important;
  padding: 0.313vw 0.573vw 0.313vw 0.573vw !important;
  font-weight: 400 !important;
  font-size: 0.729vw !important;
  color: #2d3748 !important;
  text-transform: none !important;
}
.add__button {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 5px;
  border: 0;
  padding: 0.313vw 0.833vw 0.313vw 0.833vw;
  font-weight: 400;
  font-size: 0.729vw;
  color: #fff;
  text-transform: none;
}
.pagination.pagination-info .page-item.active > .page-link,
.pagination.pagination-info .page-item.active > .page-link:focus,
.pagination.pagination-info .page-item.active > .page-link:hover {
  background-image: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
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
.header-flex {
  padding: 1.25vw 2.083vw 0.833vw 2.083vw;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.fade {
  background: linear-gradient(
    83.56deg,
    rgba(112, 146, 224, 0.1) 10.01%,
    rgba(139, 174, 243, 0.1) 75.36%
  );
  
}
.btn-outline-dark {
  padding: 0.625vw 4.219vw 0.625vw 4.219vw;
}
.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 8px;
  text-transform: uppercase;
  padding: 0.625vw 4.219vw 0.625vw 4.219vw;
}
.del__btn {
  margin-right: 3.542vw;
}
.modal-footer {
  margin-top: -1vw;
  justify-content: right;
  border-top: 0;
}
.modal__padding {
  padding-top: 0.563vw;
  padding-left: 2.083vw;
  padding-right: 2.083vw;
}
.modal__title {
  font-weight: 600;
  font-size: 1.042vw;
  color: #2d3748;
}
.modal-dialog {
  /* max-width: 48.073vw; */
}
td{
  font-weight: 600;
  font-size: 14px;  
  color: #2D3748;
  border-left: 0;
  border-right: 0;
}
th{
  border-top: 0;
  border-left: 0;
  border-right: 0;
  font-weight: 600;
  font-size: 12px;
  color: #A0AEC0;
}
</style>
