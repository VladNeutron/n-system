<template>
    <the-navbar></the-navbar>
    <main class="main-content border-radius-lg">
        <the-header></the-header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <lists-header>
                        <template v-slot:title> Методы оплаты </template>
                        <template v-slot:description>
                            Внесите изменения и не забудьте нажать “Сохранить”
                        </template>
                    </lists-header>
                    <div class="card pt-4 pb-6">
                        <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
                            <div>
                                <button class="btn bg-gradient-dark btn-add mb-0" style="
                    margin-right: 0.833vw;
                    display: flex;
                    align-items: center;
                  " data-bs-toggle="modal" data-bs-target="#InpModal" @click="isEdit = 'no'">
                                    <img src="@/assets/img/whtplus.svg" style="margin-right: 10px" alt="" />
                                    Добавить метод оплаты
                                </button>
                            </div>
                            <div class="table__inputs d-flex gap-3 align-content-center">

                            </div>
                        </div>
                        <div class="page__table">
                            <table class="table table-hover table-striped">
                                <thead>
                                    <tr class="">
                                        <th scope="col" class="th__col" style="width: 25px; padding-left: 27px"></th>
                                        <th width="1%" scope="col" class="th__col">№</th>
                                        <th scope="col" class="th__col">Название </th>
                                        <th scope="col" class="th__col">Сдача</th>
                                        <th scope="col" class="th__col">Активность</th>
                                        <th scope="col" class="th__col">Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(order, i) of paginationList" :key="order.id">
                                        <td scope="row" style="padding-left: 27px">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="fcustomCheck1" />
                                            </div>
                                        </td>
                                        <td width="1%">{{ i + 1 }}</td>
                                        <td>{{ order.name }}</td>
                                        <td>{{ order.oddMoney }}</td>
                                        <td>{{ order.activity }}</td>

                                        <td class="dropdown">
                                            <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer"
                                                alt="" />
                                            <div class="dropdown-content">
                                                <a style="cursor: pointer" data-bs-toggle="modal"
                                                    data-bs-target="#InpModal" @click="isEdit = 'yes'">Редактировать</a>
                                                <hr />
                                                <a style="cursor: pointer" data-bs-toggle="modal"
                                                    data-bs-target="#DeleteInv">Удалить</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <pagination-component :filteredArr="filteredList" :strAmount="10"
                            @PaginationReload="reloadPagination" class="pagination__size"></pagination-component>
                    </div>
                </div>
            </div>
        </div>
        <inputs-modal>
            <template #head>
                <div style="text-align: left" v-if="isEdit == 'no'">
                    <p class="header__main">Добавление метода оплаты</p>
                    <p class="header__sec">
                        Введите данные и нажмите “Добавить”
                    </p>
                </div>
                <div style="text-align: left" v-if="isEdit == 'yes'">
                    <p class="header__main">Редактирование метода оплаты</p>
                    <p class="header__sec">Измените данные и нажмите “Сохранить”</p>
                </div>
            </template>
            <template #body>
                <div class="clients__modal" v-if="isEdit == 'no'">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Название </label>
                        <input class="form-control" type="text" placeholder="Введите название"
                            id="example-text-input" />
                    </div>
                    <div class="d-flex">
                        <div class="form-check form-switch" style="margin-right:50px;">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked="">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Сдача</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked="">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Активность</label>
                        </div>
                    </div>
                </div>
                <div class="clients__modal" v-if="isEdit == 'yes'">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Название </label>
                        <input class="form-control" type="text" placeholder="Введите название"
                            id="example-text-input" />
                    </div>
                    <div class="d-flex">
                        <div class="form-check form-switch" style="margin-right:50px;">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked="">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Сдача</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked="">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Активность</label>
                        </div>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="clients__footer" v-if="isEdit == 'no'">
                    <button class="btn bg-gradient-dark">Добавить</button>
                </div>
                <div class="clients__footer" v-if="isEdit == 'yes'">
                    <button class="btn bg-gradient-dark">Сохранить</button>
                </div>
                <div class="clients__footer" v-if="isEdit == 'yes'">
                    <button class="btn delete__btn" data-bs-toggle="modal" data-bs-target="#DeleteInv">
                        Удалить метод оплаты
                    </button>
                </div>
            </template>
        </inputs-modal>
        <the-filter @no-filter="cancelFilters">
            <p class="text-start my-2 fw-bold" for="position">Должность</p>
            <select class="form-select" v-model="filterPosition">
                <option value="" disabled>Выберите должность</option>
                <option v-for="position of orderPositionsList" :key="position">
                    {{ position }}
                </option>
                <option value=""></option>
            </select>
        </the-filter>
        <delete-modal :title="'метода оплаты'" :text="`метод оплаты &quot;'Карта' &quot;`"></delete-modal>
    </main>
</template>

<script>
import Filter from "../../components/Filters.vue";
import InputsModal from "@/components/InputsModal.vue";
import FiltersButton from "@/components/buttons/FiltersButton.vue";
import { CloseInvModal } from "@/assets/js/closeModalDeleteOpen";
export default {
    data() {
        return {
            paginationList: [],
            status: null,
            buttonText: "",
            orders: [
                {
                    id: 0,
                    name: 'Карта',
                    oddMoney: "Да",
                    activity: "Да",
                },
                {
                    id: 0,
                    name: 'Наличные',
                    oddMoney: "Нет",
                    activity: "Нет",
                },
                {
                    id: 0,
                    name: 'Перевод Kaspi',
                    oddMoney: "Нет",
                    activity: "Нет",
                },
                {
                    id: 0,
                    name: 'Перевод Сбербанк',
                    oddMoney: "Нет",
                    activity: "Нет",
                },
                {
                    id: 0,
                    name: 'Реквизиты',
                    oddMoney: "Нет",
                    activity: "Нет",
                },
                {
                    id: 0,
                    name: 'Карта',
                    oddMoney: "Да",
                    activity: "Да",
                },
                {
                    id: 0,
                    name: 'Наличные',
                    oddMoney: "Нет",
                    activity: "Нет",
                },
                {
                    id: 0,
                    name: 'Перевод Kaspi',
                    oddMoney: "Нет",
                    activity: "Нет",
                },
                {
                    id: 0,
                    name: 'Перевод Сбербанк',
                    oddMoney: "Нет",
                    activity: "Нет",
                },
                {
                    id: 0,
                    name: 'Реквизиты',
                    oddMoney: "Нет",
                    activity: "Нет",
                },
                {
                    id: 0,
                    name: 'Карта',
                    oddMoney: "Да",
                    activity: "Да",
                },
                {
                    id: 0,
                    name: 'Наличные',
                    oddMoney: "Нет",
                    activity: "Нет",
                },
                {
                    id: 0,
                    name: 'Перевод Kaspi',
                    oddMoney: "Нет",
                    activity: "Нет",
                },
                {
                    id: 0,
                    name: 'Перевод Сбербанк',
                    oddMoney: "Нет",
                    activity: "Нет",
                },
                {
                    id: 0,
                    name: 'Реквизиты',
                    oddMoney: "Нет",
                    activity: "Нет",
                },
            ],
            isEdit: "no",
            filterPosition: "",
        };
    },
    methods: {
        reloadPagination(arr) {
            console.log(arr);
            this.paginationList = arr;
        },
        cancelFilters() {
            this.filterPosition = "";
        },
        createFilteredSet(key) {
            const unfiltered = this.orders.map((obj) => obj[key]);
            return [...new Set(unfiltered)];
        },
    },
    computed: {
        orderPositionsList() {
            return this.createFilteredSet("position");
        },
        filteredList() {
            return this.orders.filter((order) =>
                this.filterPosition === ""
                    ? true
                    : order.position === this.filterPosition
            );
        },
    },
    mounted() {
        CloseInvModal();
    },
    components: {
        "the-filter": Filter,
        "inputs-modal": InputsModal,
        FiltersButton,
    },
};
</script>

<style scoped>
.form-check-label {
    font-weight: 400;
    font-size: 16px;
    color: #2D3748;
}

.page__table {
    height: 27.6vw;
}

.btn-add {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    /* identical to box height */
    display: flex;

    letter-spacing: -0.387234px;

    color: #ffffff;
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

.form__width {
    width: 15.99vw !important;
}

.bg-gradient-dark {
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 0;
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

th {
    text-transform: uppercase !important;
}

/* FORM */
.clients__footer {
    flex-grow: 1;
    width: 100%;
}

.clients__footer button {
    width: 60%;
}

.form-group {
    text-align: left;
}

@media screen and (max-width: 1600px) {
    .pagination__size {
        padding-top: 50px
    }
}
</style>
