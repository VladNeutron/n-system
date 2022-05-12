<template>
    <the-navbar></the-navbar>
    <main class="main-content border-radius-lg">
        <the-header></the-header>
        <div class="page__name d-flex align-items-center ms-4">
            <div class="page__name-title text-start">
                <h3>Список заявок</h3>
                <p class="mb-0">Внесите изменения и не забудьте нажать “Сохранить”</p>
            </div>
        </div>
        <div class="card pt-4 pb-6 m-4">
            <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
                <button class="btn bg-gradient-dark mb-0" data-bs-toggle="modal" data-bs-target="#InpModal"
                    @click="isEdit = 'no'">Создать заявку</button>
                <div class="table__inputs d-flex gap-3 align-content-center">
                    <div class="form-group m-0">
                        <div class="input-group mt-1">
                            <span class="input-group-text"><img src="@/assets/css/icons/searchIcon.svg" alt="" /></span>
                            <input class="form-control" placeholder="Поиск..." id="search" type="text" />
                        </div>
                    </div>
                    <button class="btn btn-outline-dark mb-0">
                        <span><img src="@/assets/css/icons/print.svg" class="me-1" alt="" /></span>Печать
                    </button>
                    <button class="btn btn-outline-dark mb-0">
                        <span><img src="@/assets/css/icons/down-arrow.svg" class="me-1" alt="" /></span>Скачать
                    </button>
                    <filter-button class="mb-0"></filter-button>
                </div>
            </div>
            <div class="page__table">
                <table class="table table-hover text-wrap text-start">
                    <thead>
                        <tr class="text-start">
                            <th scope="col" class="th__col">№</th>
                            <th scope="col" class="th__col">Дата</th>
                            <th scope="col" class="th__col">ФИО</th>
                            <th scope="col" class="th__col">Статус</th>
                            <th scope="col" class="th__col">Номер Телефона</th>
                            <th scope="col" class="th__col">Email</th>
                            <th scope="col" class="th__col">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(order, i) of filteredOrders" :key="order.id">
                            <th>{{ i + 1 }}</th>
                            <td>{{ order.date }}</td>
                            <td>{{ order.fio }}</td>
                            <td>
                                <div class="btn mb-0 w-100" :class="getClass(order.status)">
                                    {{ buttonText }}
                                </div>
                            </td>
                            <td>{{ order.phone }}</td>
                            <td>{{ order.email }}</td>
                            <td>
                                <div class="dropdown">
                                    <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer" alt="" />
                                    <div class="dropdown-content">
                                        <a style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#InpModal"
                                            @click="isEdit = 'yes'">Редактировать</a>
                                        <hr />
                                        <a style="cursor: pointer" data-bs-toggle="modal"
                                            data-bs-target="#DeleteInv">Удалить</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="pagination d-flex justify-content-end align-items-center me-4 mt-4">
                <div class="d-flex align-items-center gap-3">
                    <div>
                        <p class="m-0">Показано<span> 2112 12121</span></p>
                    </div>

                    <div class="page__search-pages d-flex align-content-center">
                        <div class="pagination-container d-flex justify-items-center">
                            <ul class="pagination pagination-info mb-0 pe-0">
                                <li class="page-item">
                                    <a class="page-link" href="javascript:;" aria-label="Previous">
                                        <span aria-hidden="true"><i class="fa fa-angle-double-left"
                                                aria-hidden="true"></i></span>
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
                                        <span aria-hidden="true"><i class="fa fa-angle-double-right"
                                                aria-hidden="true"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <inputs-modal>
            <template #head>
                <div style="text-align: left" v-if="isEdit == 'no'">
                    <p class="header__main">Добавление заявки</p>
                    <p class="header__sec">Измените данные заявки и нажмите “Добавить”</p>
                </div>
                <div style="text-align: left" v-if="isEdit == 'yes'">
                    <p class="header__main">Заявка №12345</p>
                    <p class="header__sec">Измените данные и нажмите “Сохранить”</p>
                </div>
            </template>
            <template #body>
                <div class="clients__modal" v-if="isEdit == 'no'">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">ФИО клиента</label>
                        <input class="form-control" type="text" placeholder="ФИО клиента" id="example-text-input" />
                    </div>
                    <div class="form-group">
                        <label for="example-text-input1" class="form-control-label">Номер телефона</label>
                        <input class="form-control" type="text" placeholder="Введите номер телефона"
                            id="example-text-input1" />
                    </div>
                    <div class="form-group">
                        <label for="example-text-input2" class="form-control-label">Email</label>
                        <input class="form-control" type="text" placeholder="Введите email" id="example-text-input2" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="Статус заявки">Статус заявки</label>
                        <select class="form-select">
                            <option selected disabled>
                                Выберите
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" class="form-control-label">Текст заявки</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"
                            placeholder="Введите текст"></textarea>
                    </div>
                </div>
                <div class="clients__modal" v-if="isEdit == 'yes'">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">ФИО клиента</label>
                        <input class="form-control" type="text" placeholder="ФИО клиента" id="example-text-input" />
                    </div>
                    <div class="form-group">
                        <label for="example-text-input1" class="form-control-label">Номер телефона</label>
                        <input class="form-control" type="text" placeholder="Введите номер телефона"
                            id="example-text-input1" />
                    </div>
                    <div class="form-group">
                        <label for="example-text-input2" class="form-control-label">Email</label>
                        <input class="form-control" type="text" placeholder="Введите email" id="example-text-input2" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="Статус заявки">Статус заявки</label>
                        <select class="form-select">
                            <option selected disabled>
                                Выберите
                            </option>
                        </select>
                    </div>
                     <div class="form-group">
                        <label for="exampleFormControlTextarea1" class="form-control-label">Текст заявки</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"
                            placeholder="Введите текст"></textarea>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="clients__footer">
                    <button class="btn clients__save">Сохранить</button>
                </div>
            </template>
        </inputs-modal>
    </main>
    <the-filter :orders="orders">
        <div class="filters__period__flex">
            <div class="filter__name__standart">Выберите период</div>
            <div class="reset__date">Сбросить период</div>
        </div>
        <div class="filters__period">
            <div class="form-group">
                <input class="form-control" type="date" id="example-date-input" />
            </div>
            <div>
                <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
            </div>
            <div class="form-group">
                <input class="form-control" type="date" id="example-date-input" />
            </div>
        </div>
        <label class="text-start" for="Статус">Статус заказа</label>
        <div class="d-flex flex-wrap">
            <div class="cat" v-for="status of orderStatusList" :key="status">
                <label>
                    <input type="checkbox" :value="status" v-model="filterStatusSelect" /><span>{{ status }}</span>
                </label>
            </div>
        </div>
        <label class="text-start" for="Склад">Склад</label>
        <select class="form-select" v-model="filterWarehouse">
            <option v-for="warehouse of orderWarehouseList" :key="warehouse">
                {{ warehouse }}
            </option>
        </select>
        <label class="text-start" for="Ответственный">Ответственный</label>
        <select class="form-select" v-model="filterResponsible">
            <option v-for="responsible of orderResponsibleList" :key="responsible">
                {{ responsible }}
            </option>
        </select>
        <label class="text-start" for="Клиент">Клиент</label>
        <select class="form-select" v-model="filterClient">
            <option v-for="client of orderClientList" :key="client">
                {{ client }}
            </option>
        </select>
        <label class="text-start" for="Тип заказа">Тип заказа</label>
        <select class="form-select" v-model="filterOrderType">
            <option v-for="orderType of orderTypeList" :key="orderType">
                {{ orderType }}
            </option>
        </select>
    </the-filter>
</template>

<script>
import InputsModal from "@/components/InputsModal.vue";
import Filter from "@/components/Filters.vue";
import FilterButton from "@/components/buttons/FiltersButton.vue";
export default {
    data() {
        return {
            isEdit: "",
            buttonText: "",
            orders: [
                {
                    date: "11 ноя, 2021 19:23",
                    fio: "Курочкин Василий Петрович",
                    status: "new",
                    phone: "+7 705 6665599",
                    email: "v.kurochkin@gmail.com",
                },
                {
                    date: "11 ноя, 2021 19:23",
                    fio: "Курочкин Василий Петрович",
                    status: "in-process",
                    phone: "+7 705 6665599",
                    email: "v.kurochkin@gmail.com",
                }, {
                    date: "11 ноя, 2021 19:23",
                    fio: "Курочкин Василий Петрович",
                    status: "canceled",
                    phone: "+7 705 6665599",
                    email: "v.kurochkin@gmail.com",
                }, {
                    date: "11 ноя, 2021 19:23",
                    fio: "Курочкин Василий Петрович",
                    status: "new",
                    phone: "+7 705 6665599",
                    email: "v.kurochkin@gmail.com",
                }, {
                    date: "11 ноя, 2021 19:23",
                    fio: "Курочкин Василий Петрович",
                    status: "new",
                    phone: "+7 705 6665599",
                    email: "v.kurochkin@gmail.com",
                }, {
                    date: "11 ноя, 2021 19:23",
                    fio: "Курочкин Василий Петрович",
                    status: "new",
                    phone: "+7 705 6665599",
                    email: "v.kurochkin@gmail.com",
                },
            ],
            filterStatusSelect: [],
            filterResponsible: "",
            filterClient: "",
            filterOrderType: "",
            filterWarehouse: "",
        };
    },
    methods: {
        getClass(stat) {
            if (stat === "new") {
                this.buttonText = "Новый заявка";
                return "bg-gradient-info";
            }
            if (stat === "in-process") {
                this.buttonText = "В обработке";
                return "bg-gradient-primary";
            }
            if (stat === "canceled") {
                this.buttonText = "Обработка";
                return "bg-gradient-success";
            }
        },
        check() {
            const ch = this.filterStatusSelect.includes(this.orders[0].status);
            console.log(ch);
        },
    },
    computed: {
        orderStatusList() {
            let unfiltered = this.orders.map((e) => e.status);
            return [...new Set(unfiltered)];
        },
        orderResponsibleList() {
            let unfiltered = this.orders.map((e) => e.responsible);
            return [...new Set(unfiltered)];
        },
        orderClientList() {
            let unfiltered = this.orders.map((e) => e.client);
            return [...new Set(unfiltered)];
        },
        orderTypeList() {
            let unfiltered = this.orders.map((e) => e.type);
            return [...new Set(unfiltered)];
        },
        orderWarehouseList() {
            let unfiltered = this.orders.map((e) => e.warehouse);
            return [...new Set(unfiltered)];
        },
        filteredOrders() {
            const statusCheckIfEmpty = this.filterStatusSelect > 0;
            return this.orders.filter(
                (order) =>
                    (statusCheckIfEmpty
                        ? this.filterStatusSelect.includes(order.status)
                        : true) &&
                    (this.filterWarehouse === ""
                        ? true
                        : order.warehouse === this.filterWarehouse) &&
                    (this.filterResponsible === ""
                        ? true
                        : order.responsible === this.filterResponsible) &&
                    (this.filterClient === ""
                        ? true
                        : order.client === this.filterClient) &&
                    (this.filterOrderType === ""
                        ? true
                        : order.type === this.filterOrderType)
            );
        },
    },

    components: {
        "the-filter": Filter,
        "filter-button": FilterButton,
        InputsModal,
    },
};
</script>

<style scoped>
.clients__delete {
    text-transform: none;
    border: 0;
    background: transparent;
    font-weight: 600;
    font-size: 0.833vw;
    color: #2d3748;
    box-shadow: none;
}

.clients__delete:hover {
    box-shadow: none;
}

.clients__footer {
    display: flex;
    flex-direction: column;
}

.clients__save {
    background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
    box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
        0px 2px 4px -1px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    padding: 0.729vw 5.208vw 0.729vw 5.208vw;
    text-transform: none;
    font-weight: 700;
    font-size: 0.833vw;
    color: #ffffff;
}

.form-control-label {
    font-weight: 600;
    font-size: 0.729vw;
    color: #2d3748;
}

.form-group {
    text-align: left;
}

/* CHECKBOX BUTTON */
.dropdown {
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

.cat {
    margin: 4px;
    background-color: #fff;
    width: 143px;
    height: 40px;
    border-radius: 50px;

    outline: 1px solid #2d3748;
    overflow: hidden;
    float: left;
}

.cat label {
    float: left;
    line-height: 3em;
    color: #2d3748;
    width: 8em;
    height: 3em;
}

.cat label span {
    position: relative;
    top: auto;
    right: 5px;
    text-align: center;
    height: 50px;
    width: 145px;
    display: block;
    color: #2d3748;
}

.cat label input {
    position: absolute;
    display: none;
    color: #2d3748 !important;
}

/* selects all of the text within the input element and changes the color of the text */
.cat label input+span {
    color: #2d3748;
}

/* This will declare how a selected input will look giving generic properties */
.cat input:checked+span {
    color: #ffffff;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
    background-color: #2d3748;
}

/*  */
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

.th__col {
    color: #a0aec0 !important;
}

th {
    color: #2d3748;
    font-size: 12px;
}

td {
    font-size: 14px;
    font-weight: 600;
}

.card {
    max-height: 838px;
}

.pagination {
    align-self: end;
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
</style>
