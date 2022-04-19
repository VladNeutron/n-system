<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid py-4">
      <div class="row mt-4">
        <div class="col-12">
          <drop-down>
            <template #header>
              <div class="d-flex justify-content-between align-content-center">
                <div><h3>Создание инвентаризации</h3></div>
                <div class="d-flex gap-3 align-content-center buttons__panel">
                  <button class="btn bg-gradient-dark mb-0">
                    <span class="btn-inner--icon"
                      ><i class="ni ni-button-play"></i></span
                    >Завершить
                  </button>
                  <button class="btn btn-outline-dark mb-0">
                    <span class="btn-inner--icon"
                      ><i class="fa fa-comment"></i></span
                    >Комментарии
                    <span class="badge badge-pill badge-danger align-self-start"
                      >2</span
                    >
                  </button>
                  <button class="btn btn-outline-dark mb-0">
                    <span class="btn-inner--icon"
                      ><i class="fa fa-print"></i></span
                    >Печать
                  </button>
                  <button class="btn btn-outline-dark mb-0">
                    <span class="btn-inner--icon"
                      ><i class="fa fa-download"></i></span
                    >Скачать
                  </button>
                  <button class="btn btn-outline-dark mb-0">
                    <span class="btn-inner--icon"
                      ><i class="fa fa-trash"></i></span
                    >Удалить
                  </button>
                </div>
              </div>
            </template>
          </drop-down>
          <div class="card pl-pr">
            <div class="main-page text-start">
              <label class="form-control-label ps-3 pt-3" for="search"
                >Поиск</label
              >
              <div class="d-flex justify-content-between ps-3">
                <div class="page_search-inputs d-flex gap-5">
                  <div class="form-group m-0">
                    <div class="input-group mt-1">
                      <input
                        class="form-control"
                        placeholder="12312321312"
                        id="search"
                        type="text"
                      />
                      <span class="input-group-text"
                        ><i class="ni ni-zoom-split-in"></i
                      ></span>
                    </div>
                  </div>
                  <button class="btn bg-gradient-info mb-0">
                    Выбрать из списка
                  </button>
                </div>

                <div class="d-flex align-items-center gap-3">
                  <div>
                    <p class="m-0">Показано<span> 2112 12121</span></p>
                  </div>

                  <div class="page__search-pages d-flex align-content-center">
                    <div
                      class="pagination-container d-flex justify-items-center"
                    >
                      <ul class="pagination pagination-info mb-0">
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
              <div class="inv__block ps-3">
                <div class="inv__content">
                  <div>
                    <table
                      class="table table-bordered table-hover text-center table-striped"
                    >
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
                              style="width: 1.563vw; cursor: pointer"
                              alt=""
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="pagination d-flex justify-content-end">
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
.pl-pr {
  margin-left: 1.146vw;
  margin-top: 1.094vw;
  margin-right: 3.385vw;
}
.page__search-inputs {
  gap: 1.042vw;
}

td,
th {
  color: #2d3748;
}
.align-self-start {
  align-self: flex-start;
}
.inv__content {
  padding-right: 1.354vw;
  height: 90%;
}
.inv__block {
  padding-bottom: 2.188vw;
  padding-top: 2.083vw;
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
</style>
