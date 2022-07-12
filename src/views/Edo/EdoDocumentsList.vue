<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <lists-header>
                    <template v-slot:title> Список документов </template>
                    <template v-slot:description>
                        Внесите изменения и не забудьте нажать “Сохранить”
                    </template>
                    <template #add>
                        <div class="header__filter">
                            <button class="btn header__btns" :class="{ btn__active: makeActive == 1 }"
                                @click="makeActive = 1"> <img src="@/assets/img/edo/1.svg" alt=""> Все
                                документы</button>
                            <button class="btn header__btns" :class="{ btn__active: makeActive == 2 }"
                                @click="makeActive = 2"><img src="@/assets/img/edo/2.svg" alt=""> Подписанные
                                документы</button>
                            <button class="btn header__btns" :class="{ btn__active: makeActive == 3 }"
                                @click="makeActive = 3"><img src="@/assets/img/edo/3.svg" alt=""> В процессе
                                подписания</button>
                            <button class="btn header__btns" :class="{ btn__active: makeActive == 4 }"
                                @click="makeActive = 4"><img src="@/assets/img/edo/4.svg" alt=""> Документы на
                                подпись</button>
                            <button class="btn header__btns" :class="{ btn__active: makeActive == 5 }"
                                @click="makeActive = 5"><img src="@/assets/img/edo/5.svg" alt=""> Архив
                                документов</button>
                        </div>
                    </template>
                </lists-header>

                <div class="card py-4 main__card">
                    <div class="d-flex justify-content-between align-items-center mx-4 mb-2">
                        <input type="file" style="display: none;" id="fileupload" name="file" />
                        <button class="btn bg-gradient-dark mb-0 add__file" style="
                  font-size: 14px;
                  font-weight: 600;
                  display: flex;
                  align-items: center;
                  height: 40px;
                " onclick="document.getElementById('fileupload').click();">
                            <img src="@/assets/img/whtplus.svg" alt="" style="margin-right: 10px" />
                            Загрузить документ
                        </button>
                        <div class="table__inputs d-flex gap-3 align-content-center align-items-center">
                            <list-search @searchFilter="(a) => search = a"></list-search>
                            <filter-button class="mb-0"></filter-button>
                        </div>
                    </div>
                    <div class="page__table">
                        <div class="table-wrapper">
                            <table class="table table-hover text-wrap text-start table-striped" id="table_id">
                                <thead>
                                    <tr class="text-start">
                                        <th scope="col" class="th__col" style="width: 1px;"></th>
                                        <th scope="col" class="th__col">№ документа</th>
                                        <th scope="col" class="th__col">Дата</th>
                                        <th scope="col" class="th__col">наименование документа</th>
                                        <th scope="col" class="th__col">Контрагент</th>
                                        <th scope="col" class="th__col">Статус</th>
                                        <th scope="col" class="th__col">Редактирование</th>
                                        <th scope="col" class="th__col">действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(order) of paginationList" :key="order.id">
                                        <th scope="row" style="">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckIndeterminate" />
                                            </div>
                                        </th>
                                        <td>{{ order.id }}</td>
                                        <td>{{ order.date }}</td>
                                        <td>{{ order.name }}</td>

                                        <td>{{ order.contractor }}</td>
                                        <td>
                                            <div class="btn mb-0 w-100" v-text="normalizeStatusName(order.status)"
                                                :class="getClass(order.status)"></div>
                                        </td>
                                        <td><button
                                                onclick="window.location.href = '/accounting/documents/edit-account'"
                                                class="btn btn__edit mb-0"> <img src="@/assets/img/editedo.svg"
                                                    style="margin-right:5px" />
                                                Изменить</button></td>
                                        <td style="border-left: 0; padding-right: 27px">
                                            <div class="dropdown">
                                                <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer"
                                                    alt="" />
                                                <!-- <div :class="['dropdown-content', {'dropdown__content__top': ind >= paginationList.length - 2}]"> -->
                                                <div class="dropdown-content">
                                                    <a href="/edo/edo-document">Редактировать</a>
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
                    </div>
                    <pagination-component :filteredArr="filteredOrders" :strAmount="paginationAmount"
                        @PaginationReload="reloadPagination"></pagination-component>
                </div>
            </div>
        </div>
    </div>
    <the-filter :orders="orders" @no-filter="cancelFilters">
        <div class="filters__period__flex">
            <div class="filter__name__standart">Выберите период</div>
            <div class="reset__date">Сбросить период</div>
        </div>
        <div class="filters__period">
            <div class="form-group">
                <input class="form-control period__s" type="date" id="example-date-input" />
            </div>
            <div>
                <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
            </div>
            <div class="form-group">
                <input class="form-control period__s" type="date" id="example-date-input" />
            </div>
        </div>
        <p class="text-start my-2 fw-bold" for="Статус">Статус документа</p>
        <div class="d-flex flex-wrap">
            <div class="cat" v-for="status of orderStatusList" :key="status">
                <label>
                    <input type="checkbox" :value="status" v-model="filterStatusSelect" /><span
                        v-text="normalizeStatusName(status)"></span>
                </label>
            </div>
        </div>

        <p class="text-start my-2 fw-bold" for="Ответственный">Контрагент</p>
        <select class="form-select" v-model="filterContractor">
            <option value="" disabled>Выберите контрагента</option>
            <option v-for="contractor of orderContractorList" :key="contractor">
                {{ contractor }}
            </option>
            <option value=""></option>
        </select>

    </the-filter>
    <delete-modal :title="'заказа'" :text="`документ  &quot;Заказ №12132145&quot;`"></delete-modal>
    <commentary></commentary>
</template>

<script>
$(".add__file").click(function () {
    $("input[type='file'").trigger('click');
});
import Filter from "@/components/Filters.vue";
import FilterButton from "@/components/buttons/FiltersButton.vue";
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue';
import Commentary from '@/components/Commentary.vue';
export default {
    data() {
        return {
            orders: [
                {
                    id: 1,
                    date: "11 ноя, 2021 19:23",
                    name: "Поступление",
                    contractor: "ТОО “Ромашка”",
                    status: "new",
                },
                {
                    id: 2,
                    date: "11 ноя, 2021 19:23",
                    name: "Счет клиенту",
                    contractor: "ТОО “Ромашка”",
                    status: "new",
                },
                {
                    id: 3,
                    date: "11 ноя, 2021 19:23",
                    name: "Счет от поставщика",
                    contractor: "ТОО “Ромашка”",
                    status: "new",
                },
                {
                    id: 4,
                    date: "11 ноя, 2021 19:23",
                    name: "Счет-фактура выданная",
                    contractor: "ТОО “Ромашка”",
                    status: "in-process",
                },
                {
                    id: 5,
                    date: "11 ноя, 2021 19:23",
                    name: "Счет-фактура полученная",
                    contractor: "ТОО “Ромашка”",
                    status: "in-process",
                },
                {
                    id: 6,
                    date: "11 ноя, 2021 19:23",
                    name: "Договор №3 от 11.11.2021",
                    contractor: "ТОО “Ромашка”",
                    status: "shipped",
                },
                {
                    id: 7,
                    date: "11 ноя, 2021 19:23",
                    name: "Акт выполненных работ",
                    contractor: "ТОО “Ромашка”",
                    status: "shipped",
                },
                {
                    id: 8,
                    date: "11 ноя, 2021 19:23",
                    name: "Акт выполненных работ",
                    contractor: "ТОО “Ромашка”",
                    status: "processed",
                },
                {
                    id: 9,
                    date: "11 ноя, 2021 19:23",
                    name: "Поступление",
                    contractor: "ТОО “Ромашка”",
                    status: "canceled",
                },
                {
                    id: 10,
                    date: "11 ноя, 2021 19:23",
                    name: "Поступление",
                    contractor: "ТОО “Ромашка”",
                    status: "canceled",
                },
                {
                    id: 10,
                    date: "11 ноя, 2021 19:23",
                    name: "Поступление",
                    contractor: "ТОО “Букашка”",
                    status: "canceled",
                },
                {
                    id: 10,
                    date: "11 ноя, 2021 19:23",
                    name: "Поступление",
                    contractor: "ТОО “Букашка”",
                    status: "canceled",
                },

            ],
            filterStatusSelect: [],
            filterContractor: "",
            paginationList: [],
            search: '',
            makeActive: 0,
        };

    },
    methods: {
        getClass(stat) {
            return stat === "new"
                ? "bg-gradient-info"
                : stat === "in-process"
                    ? "bg-gradient-primary"
                    : stat === "canceled"
                        ? "bg-gradient-danger"
                        : stat === "processed"
                            ? "bg-gradient-warning"
                            : stat === "assembly"
                                ? "bg-gradient-secondary"
                                : stat === "ready"
                                    ? "bg-gradient-blue"
                                    : stat === "shipped"
                                        ? "bg-gradient-success"
                                        : "bg-gradient-success";
        },
        normalizeStatusName(name) {
            const statusMap = {
                new: "На подпись",
                "in-process": "В процессе",
                canceled: "Отменен",
                processed: "Требует подписания",
                shipped: "Подписан",
            };
            return statusMap[name] || "Статус не найден";
        },
        createFilteredSet(key) {
            const unfiltered = this.orders.map((obj) => obj[key]);
            return [...new Set(unfiltered)];
        },
        cancelFilters() {
            this.filterStatusSelect = [];
            this.filterContractor = "";
        },
        reloadPagination(arr) {
            // console.log(arr);
            this.paginationList = arr;
        }
    },

    computed: {
        orderStatusList() {
            return this.createFilteredSet("status");
        },
        orderContractorList() {
            return this.createFilteredSet("contractor");
        },

        filteredOrders() {
            const statusCheckIfEmpty = this.filterStatusSelect.length > 0;
            return this.orders.filter(
                (order) =>
                    (statusCheckIfEmpty
                        ? this.filterStatusSelect.includes(order.status)
                        : true) &&
                    (this.filterContractor === ""
                        ? true
                        : order.contractor === this.filterContractor) &&
                    (String(order.id).includes(String(this.search).toLowerCase()))
                    ||
                    (String(order.contractor).toLowerCase().includes(String(this.search).toLowerCase()))
            );
        },

        paginationAmount() {
            if (document.documentElement.clientWidth < 1700) {
                return 7
            }
            else {
                return 9
            }
        },
    },

    components: {
        "the-filter": Filter,
        "filter-button": FilterButton,
        PaginationComponent,
        Commentary,
    },
    watch: {
        search: {
            handler(newq) {
                // console.log(this.search)
            }
        }
    }
};
</script>



<style scoped>
.header__filter :last-child {
    margin-right: 0px !important;
}

.header__btns {
    font-weight: 400;
    font-size: 14px;
    color: #2D3748;
    margin-right: 20px;
    background: transparent;
    box-shadow: none;
    margin-bottom: 0;
}

.btn__edit {
    border: 1px solid #2D3748;
    border-radius: 8px;
    background: transparent;
    color: #2D3748;
    font-weight: 600;
    font-size: 14px;
    padding: 7px 13px 7px 13px;
}

.btn__active {
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.09), 0 2px 3px -1px rgba(0, 0, 0, 0.07);
}

.period__s {
    width: 191px !important;
}

.form-check-input[type="checkbox"] {
    border-radius: 0;
}

.form-check:not(.form-switch) .form-check-input[type="checkbox"],
.form-check:not(.form-switch) .form-check-input[type="radio"] {
    width: 18px;
    height: 18px;
}

.form-check:not(.form-switch) .form-check-input[type="checkbox"]:checked,
.form-check:not(.form-switch) .form-check-input[type="radio"]:checked {
    width: 18px;
    height: 18px;
}

.bg-gradient-success {
    background: linear-gradient(135deg, #98ec2d 0%, #17ad37 100%);
    font-size: 12px;
}

.bg-gradient-blue {
    background: linear-gradient(135deg, #99fff3 0%, #62c7ba 100%);
    font-size: 12px;
    color: #fff;
}

.bg-gradient-secondary {
    background: linear-gradient(135deg, #a8b8d8 0%, #627594 100%);
    font-size: 12px;
}

.bg-gradient-warning {
    background: linear-gradient(135deg, #f6ca65 0%, #ef8734 100%);
    font-size: 12px;
}

.bg-gradient-danger {
    background: linear-gradient(135deg, #ff667c 0%, #ea0706 100%);
    font-size: 12px;
}

.bg-gradient-primary {
    background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
    font-size: 12px;
}

.bg-gradient-info {
    background: linear-gradient(135deg, #b2dbfb 0%, #459cf6 100%);
    font-size: 12px;
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

/* CHECKBOX BUTTON */

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

.main__card {
    height: 80vh;
}

.th__col {
    color: #a0aec0 !important;
}

table {
    /* height: 100%; */
}

.table-wrapper {
    overflow: auto;
}

th {
    color: #2d3748;
    font-size: 12px;
    text-align: center;
    vertical-align: middle;
}

td {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
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

.table-wrapper::-webkit-scrollbar {
    background: #e2e8f0;
    border-radius: 0.78vw;
    width: 0.37vw;
    height: 0.5vw;
}

.table-wrapper::-webkit-scrollbar-thumb {
    border-radius: 0.78vw;
    background-color: #313860;
}

.table-wrapper::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.78vw;
    background-color: #e2e8f0;
}

@media screen and (max-width: 1600px) {
    .dropdown-content {
        width: 130px;
    }

    .main__card {
        height: 75vh;
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
    }

    .table-wrapper {
        height: 57vh;
    }

    .btn {
        padding: 0.45rem 1.5rem;
    }
}
</style>
