<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div
      class="formtop-buttons d-flex pt-2 ps-6 pe-8 mt-2 justify-content-between"
    >
      <button class="btn bg-gradient-dark mb-0">
        <span class="btn-inner--icon"
          ><img src="@/assets/css/icons/add.svg" alt="" /></span
        >Новая инвентаризация
      </button>
      <div class="formtop-buttons-right d-flex gap-3">
        <button class="btn btn-outline-dark mb-0">
          Комментарии
          <span class="badge badge-pill badge-danger align-self-start">2</span>
        </button>
        <button class="btn btn-outline-dark mb-0">
          <span class="btn-inner--icon"
            ><img
              class="pe-2"
              src="@/assets/css/icons/chemodan.svg"
              alt="" /></span
          >ЭКСПОРТ
        </button>
      </div>
    </div>
    <div class="container-fluid pb-4">
      <div class="row mt-4">
        <div class="col-12">
          <drop-down class="drop__down-custom">
            <template #header>
              <h3 class="text-start fs-4">Инвентаризация №19</h3>
            </template>
          </drop-down>
          <div class="card pl-pr">
            <div class="main-page text-start">
              <label class="form-control-label ps-3 pt-3" for="search"
                >Добавить по штрихкоду</label
              >
              <div class="d-flex justify-content-between ps-3">
                <div class="page_search-inputs d-flex align-items-center gap-3">
                  <div class="form-group m-0">
                    <div class="input-group mt-1">
                      <span class="input-group-text"
                        ><img src="@/assets/css/icons/searchIcon.svg" alt=""
                      /></span>
                      <input
                        class="form-control"
                        placeholder="Введите штрихкод"
                        id="search-barcode"
                        type="text"
                      />
                      <span class="input-group-text py-0"
                        ><img src="@/assets/css/icons/barcode.svg" alt=""
                      /></span>
                    </div>
                  </div>
                  <button class="btn bg-gradient-info mb-0">
                    Выбрать из списка
                  </button>
                </div>
                <div class="d-flex justify-content-between ps-3 pe-4">
                  <div
                    class="page_search-inputs d-flex align-items-center gap-3"
                  >
                    <div class="form-group m-0">
                      <div class="input-group mt-1">
                        <span class="input-group-text"
                          ><img src="@/assets/css/icons/searchIcon.svg" alt=""
                        /></span>
                        <input
                          class="form-control"
                          placeholder="Поиск..."
                          id="search"
                          type="text"
                        />
                      </div>
                    </div>
                    <button class="btn bg-gradient-dark mb-0">
                      Завершить инвентаризацию
                    </button>
                  </div>
                </div>
              </div>
              <div class="inv__block py-4 ps-0">
                <div class="inv__content p-0">
                  <div>
                    <table class="table text-center">
                      <thead>
                        <tr>
                          <th scope="col" class="">№</th>
                          <th scope="col" class="">Штрихкод</th>
                          <th scope="col" class="">Товар</th>
                          <th scope="col" class="">Категория</th>
                          <th scope="col" class="">Кол-во</th>
                          <th scope="col" class="">Цена</th>
                          <th scope="col" class="">Сумма</th>
                          <th scope="col" class=""></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, i) in items" :key="item">
                          <th scope="row">{{ i + 1 }}</th>
                          <td>{{ item.code }}</td>
                          <td>{{ item.name }}</td>
                          <td>{{ item.category }}</td>
                          <td>{{ item.count }}</td>
                          <td>{{ item.price }} <span>₸</span></td>
                          <td>{{ item.count * item.price }} <span>₸</span></td>
                          <td>
                            <img
                              src="@/assets/img/dots.svg"
                              style="width: 1.563vw; cursor: pointer
                              transform: rotate(40deg)"
                              alt=""
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="pagination d-flex justify-content-end pe-5">
                <div class="d-flex align-items-center gap-3 pb-4">
                  <div>
                    <p class="m-0">Показано<span> 2112 12121</span></p>
                  </div>

                  <div class="page__search-pages d-flex align-content-center">
                    <div
                      class="pagination-container d-flex justify-items-center"
                    >
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
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          code: 1234312454356,
          name: "Куртка зеленая",
          category: "Верхняя одежда",
          count: 1,
          price: 29000,
        },
        {
          code: 987654321123,
          name: "Синяя сумка",
          category: "Сумки",
          count: 1,
          price: 15500,
        },
        {
          code: 123456789098,
          name: "Рюкзак",
          category: "Рюкзаки",
          count: 2,
          price: 16000,
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn {
  height: 40px;
}
.pl-pr {
  margin-left: 1.146vw;
  margin-top: 1.094vw;
  margin-right: 3.385vw;
}
.page__search-inputs {
  gap: 1.042vw;
}
.badge {
  top: -19px;
  right: -25px;
}
thead {
  color: rgba(160, 174, 192, 1);
  font-size: 0.625vw;
  line-height: 0.938vw;
}
tbody {
  font-size: 0.729vw;
  font-weight: 600;
  line-height: 0.99vw;
}
.align-self-start {
  align-self: flex-start;
}
.inv__content {
  padding-right: 1.354vw;
  height: 90%;
}

.pagination {
  padding-right: 1.354vw;
}
.buttons__panel button {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  gap: 5px;
}
.pagination-info {
  margin-bottom: 0;
}
.dropdown__items {
  padding: 20px;
}
</style>
