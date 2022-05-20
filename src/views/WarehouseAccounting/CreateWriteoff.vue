<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid pb-4">
      <div class="row">
        <div class="col-12">
          <drop-down>
            <template #header>
              <div class="drop__header">
                <div>
                  <p class="dropdown__title">Создание списания</p>
                  <p class="dropdown__sec">
                    Настройте все параметры и нажмите “Завершить списание”
                  </p>
                </div>
                <div class="drop__buttons">
                  <div class="dropdown">
                    <button
                      class="btn action"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="@/assets/img/action.svg"
                        style="width: 1.042vw; margin-right: 0.417vw"
                        alt=""
                      />
                      Действия
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a class="dropdown-item" href="javascript:;">Печать</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:;">Скачать</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:;">Удалить</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button class="btn comment ms-3">
                      <img
                        src="@/assets/img/comment.svg"
                        style="width: 1.042vw; margin-right: 0.417vw"
                        alt=""
                      />
                      Комментарии <span class="count">4</span>
                    </button>
                  </div>
                  
                </div>
              </div>
            </template>
            <template #body>
              <div class="drowdown__items">
                <div class="items__block">
                  <p class="items__title">№ списания</p>
                  <p class="items__text">№ 19</p>
                </div>
                <div class="items__block">
                  <p class="items__title">дата и время</p>
                  <p class="items__text">11 ноя, 19:23, 2021</p>
                </div>
                <div class="items__block">
                  <p class="items__title">Склад</p>
                  <div class="dropdown">
                    <p class="items__tex items__flex items__text" style="cursor: pointer">
                      ТРЦ Москва
                      <img
                        src="@/assets/img/down.svg"
                        class="rotate"
                        style="width: 0.729vw; margin-left: 0.417vw"
                        alt=""
                      />
                    </p>
                    <div class="dropdown-content">
                      <a style="cursor: pointer">ТЦ Европейский</a>
                      <hr />
                      <a style="cursor: pointer">ТРЦ Jam Moll</a>
                    </div>
                  </div>
                </div>
                <div class="items__block">
                  <p class="items__title">Ответственный</p>

                  <div class="dropdown">
                    <p class="items__text items__flex" style="cursor: pointer">
                      Тихонов Александр
                      <img
                        src="@/assets/img/down.svg"
                        class="rotate"
                        style="width: 0.729vw; margin-left: 0.417vw"
                        alt=""
                      />
                    </p>
                    <div class="dropdown-content">
                      <a style="cursor: pointer">Антон</a>
                      <hr />
                      <a style="cursor: pointer">Валера</a>
                      <hr />
                      <a style="cursor: pointer">Влад</a>
                    </div>
                  </div>
                </div>
                <div class="items__block">
                  <p class="items__title">Статус списания</p>
                  <p class="items__text text-center">
                    <span style="cursor: pointer">Новое</span
                    >
                  </p>
                </div>
              </div>
            </template>
          </drop-down>
          <div class="card pl-pr">
            <div class="main-page text-start">
              <label class="form-control-label ps-3 pt-3 custom__label" for="search"
                >Добавить по штрихкоду</label
              >
              <div class="d-flex justify-content-between ps-3">
                <div class="page_search-inputs d-flex align-items-center gap-3">
                  <div class="form-group m-0">
                    <div class="input-group form__adapt2">
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
                      <div class="input-group form__adapt">
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
                      Завершить списание
                    </button>
                  </div>
                </div>
              </div>
              <div class="inv__block">
                <div class="inv__content">
                  <div>
                    <table class="table table-hover text-center table-striped">
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
.dropdown__sec {
  font-weight: 400;
  font-size: 0.729vw;
  color: #a0aec0;
}
.dropdown__title {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
  text-align: left;
  margin: 0;
}
.dropdown-item {
  font-weight: 400;
  font-size: 0.729vw;
  color: #2d3748;
}
.count {
  position: absolute;
  background: #eb5757;
  font-weight: 600;
  font-size: 0.625vw;
  color: #fff;
  border-radius: 50%;
  padding: 0 5px 0 5px;
  left: 7.708vw;
  top: -0.26vw;
}
.comment {
  position: relative;
  display: flex;
  border: 1px solid #2d3748;
  box-sizing: border-box;
  border-radius: 8px;
  background: transparent;
  padding: 0.521vw 0.833vw 0.573vw 0.833vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
  margin-right: 1.25vw;
  text-transform: none;
}
.action {
  display: flex;
  border: 1px solid #2d3748;
  box-sizing: border-box;
  border-radius: 8px;
  background: transparent;
  padding: 0.521vw 0.833vw 0.573vw 0.833vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
  text-transform: none;
}
.drop__buttons {
  display: flex;
}
.drop__header {
  display: flex;
  justify-content: space-between;
}
.pagination.pagination-info .page-item.active > .page-link,
.pagination.pagination-info .page-item.active > .page-link:focus,
.pagination.pagination-info .page-item.active > .page-link:hover {
  background-image: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
}
.bg-gradient-info {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}
.pl-pr {
  /* margin-left: 1.146vw; */
  margin-top: 1.094vw;
  /* margin-right: 3.385vw; */
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
@media screen and (max-width: 1600px) {
  .btn {
    font-size: 12px !important;
  }
  td,
  th {
    font-size: 12px;
  }
  .items__text {
    font-size: 12px;
  }
  .items__title {
    font-size: 10px;
  }
  .form__adapt {
    width: 120px;
  }
  .form__adapt2 {
    width: 225px;
  }
  .comment,
  .action,
  .drowdown__items {
    align-items: center;
  }
  .count {
    left: 8.708vw;
    top: -0.26vw;
  }
  .dropdown__title {
    font-size: 20px;
  }
  .dropdown__sec {
    font-size: 12px;
  }
}
</style>
