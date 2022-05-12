<template>
    <the-navbar></the-navbar>
    <main class="main-content border-radius-lg main__padding">
        <the-header></the-header>
        <div class="page__name d-flex align-items-center ms-4 justify-content-between">
            <div class="page__name-title text-start">
                <h3>Куртка зеленая</h3>
                <p class="mb-0">Внесите изменения и не забудьте нажать “Сохранить”</p>
            </div>
        </div>
        <div class="card pt-4 pb-4 m-4">
            <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
                <div class="period__flex">
                    <div class="products__period">
                        <div class="filters__period__flex">
                            <div class="filter__name__standart">Выберите период</div>
                            <div class="reset__date">Сбросить период</div>
                        </div>
                        <div class="filters__period">
                            <div class="form-group">
                                <input class="form-control data__size" type="date" id="example-date-input" />
                            </div>
                            <div>
                                <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
                            </div>
                            <div class="form-group">
                                <input class="form-control data__size" type="date" id="example-date-input" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-2" style="margin-left:1.25vw">
                        <button class="btn first__btn mb-0" :class="{ active1: isActive == 1 }"
                            @click="isActive = 1">Квартал</button>
                        <button class="btn second__btn mb-0" :class="{ active2: isActive == 2 }"
                            @click="isActive = 2">Полугодие</button>
                        <button class="btn third__btn mb-0" :class="{ active3: isActive == 3 }"
                            @click="isActive = 3">Год</button>
                    </div>
                </div>
                <div class="table__inputs d-flex gap-3 align-content-center">
                    <div class="form-group m-0" style="text-align:left">
                        <div class="input-group mt-1">
                            <span class="input-group-text"><img src="@/assets/css/icons/searchIcon.svg" alt="" />
                            </span>
                            <input class="form-control form__size" placeholder="Поиск..." id="search" type="text"
                                v-model.trim="search" />
                        </div>
                    </div>
                    <button class="btn btn-outline-dark mb-0">
                        <span><img src="@/assets/css/icons/down-arrow.svg" class="me-1" alt="" /></span>Выгрузить
                    </button>
                    <button class="btn btn-outline-dark mb-0">Фильтры</button>
                </div>
            </div>
            <div class="page__table">
                <table class="table table-hover text-wrap ">
                    <thead>
                        <tr class="">
                            <th scope="col" class="th__col">№</th>
                            <th scope="col" class="th__col">Название товара</th>
                            <th scope="col" class="th__col">Цвет</th>
                            <th scope="col" class="th__col">Размер</th>
                            <th scope="col" class="th__col">Категория</th>
                            <th scope="col" class="th__col">Количество продаж</th>
                            <th scope="col" class="th__col">Сумма продаж</th>
                            <th scope="col" class="th__col">% от продаж</th>
                            <th scope="col" class="th__col">ABC анализ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(order, i) of orders" :key="order.id">
                            <th>{{ i + 1 }}</th>
                            <td>{{ order.name }}</td>
                            <td>{{ order.color }}</td>
                            <td>{{ order.size }}</td>

                            <td>{{ order.category }}</td>
                            <td>
                                {{ order.count }}
                            </td>
                            <td>{{ order.sum }}  ₸</td>
                            <td>{{ order.percent }} %</td>
                            <td>
                                <div class="btn mb-0 w-100" :class="getClass(order.status)">
                                    {{ buttonText }}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div
        class="pagination d-flex justify-content-end align-items-center me-4 mt-4"
      >
        <div class="d-flex align-items-center gap-3">
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
                      ><i class="fa fa-angle-double-left" aria-hidden="true"></i
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
                  <a class="page-link" href="javascript:;" aria-label="Next">
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
    </main>
</template>

<script>
export default {
    data() {
        return {
            isActive: 1,
            orders: [
                {
                    name: 'Куртка зеленая',
                    color: "Изумрудный",
                    size: "XS",
                    category: "Верхняя одежда",
                    status: "A",
                    count: 1234,
                   sum: 120340,
                    amount: 8,
                    sum: 12000,
                    percent:10
                },
                 {
                    name: 'Куртка зеленая',
                    color: "Изумрудный",
                    size: "XS",
                    category: "Верхняя одежда",
                    status: "A",
                    count: 1234,
                   sum: 120340,
                    amount: 8,
                    sum: 12000,
                    percent:10
                },
                 {
                    name: 'Куртка зеленая',
                    color: "Изумрудный",
                    size: "XS",
                    category: "Верхняя одежда",
                    status: "B",
                    count: 1234,
                   sum: 120340,
                    amount: 8,
                    sum: 12000,
                    percent:10
                },
                 {
                    name: 'Куртка зеленая',
                    color: "Изумрудный",
                    size: "XS",
                    category: "Верхняя одежда",
                    status: "B",
                    count: 1234,
                   sum: 120340,
                    amount: 8,
                    sum: 12000,
                    percent:10
                },
                 {
                    name: 'Куртка зеленая',
                    color: "Изумрудный",
                    size: "XS",
                    category: "Верхняя одежда",
                    status: "C",
                    count: 1234,
                   sum: 120340,
                    amount: 8,
                    sum: 12000,
                    percent:10
                },
                 {
                    name: 'Куртка зеленая',
                    color: "Изумрудный",
                    size: "XS",
                    category: "Верхняя одежда",
                    status: "C",
                    count: 1234,
                   sum: 120340,
                    amount: 8,
                    sum: 12000,
                    percent:10
                },
                
            ],
        }
    },
    methods: {
        getClass(stat) {
            if (stat === "A") {
                this.buttonText = "A";
                return "bg-gradient-success";
            }
            if (stat === "B") {
                this.buttonText = "B";
                return "btn btn-warning";
            }
            if (stat === "C") {
                this.buttonText = "C";
                return "bg-gradient-danger";
            }
        },
    }
}
</script>

<style scoped>
.active3 {
    background: linear-gradient(83.56deg, #7092E0 10.01%, #8BAEF3 75.36%) !important;
    border-radius: 0px 8px 8px 0px !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    color: #fff !important;
}

.active2 {
    background: linear-gradient(83.56deg, #7092E0 10.01%, #8BAEF3 75.36%) !important;
    border-radius: 0px 0px 0px 0px !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    color: #fff !important;
}

.active1 {
    background: linear-gradient(83.56deg, #7092E0 10.01%, #8BAEF3 75.36%) !important;
    border-radius: 8px 0px 0px 8px !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    color: #fff !important;
}

.data__size {
    height: 2.396vw !important;
}

.first__btn,
.second__btn,
.third__btn {
    font-weight: 400;
    font-size: 0.729vw;
    color: #2D3748;
    background: transparent;
    box-shadow: none;
}

.first__btn:hover,
.second__btn:hover,
.third__btn:hover {
    font-weight: 400;
    font-size: 0.729vw;
    color: #2D3748;
    background: transparent;
    box-shadow: none !important;
}

.first__btn {
    border-left: 1px solid #A0AEC0;
    border-top: 1px solid #A0AEC0;
    border-bottom: 1px solid #A0AEC0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.second__btn {
    border-top: 1px solid #A0AEC0;
    border-bottom: 1px solid #A0AEC0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.third__btn {
    border-right: 1px solid #A0AEC0;
    border-top: 1px solid #A0AEC0;
    border-bottom: 1px solid #A0AEC0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.period__flex {
    display: flex;
    align-items: center;
}

.form__size {
    width: 15.99vw !important;
}

.products__period {
    width: 23.438vw;
}

.filters__period {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 0.833vw;
    margin-bottom: 0.833vw;
}

.filters__period__flex {
    display: flex !important;
    justify-content: space-between;
    align-items: flex-end;
}

.reset__date {
    font-weight: 400;
    font-size: 0.729vw;
    color: #2d3748;
    text-decoration: underline;
    cursor: pointer;
}
</style>