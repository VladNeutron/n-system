<template>
    <the-navbar></the-navbar>
    <main class="main-content border-radius-lg">
        <the-header></the-header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <lists-header>
                        <template v-slot:title> Список ролей</template>
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
                                    Добавить роль
                                </button>
                            </div>
                            <div class="table__inputs d-flex gap-3 align-content-center">
                                <list-search @searchFilter="(a) => search = a"></list-search>
                            </div>
                        </div>
                        <div class="page__table">
                            <table class="table table-hover table-striped">
                                <thead>
                                    <tr class="">
                                        <th scope="col" class="th__col" style="width: 25px; padding-left: 27px"></th>
                                        <th width="1%" scope="col" class="th__col">№</th>
                                        <th scope="col" class="th__col" style="padding-right:23.938vw">Название роли
                                        </th>
                                        <th scope="col" class="th__col">Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="order of paginationList" :key="order.id">
                                        <td scope="row" style="padding-left: 27px">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="fcustomCheck1" />
                                            </div>
                                        </td>
                                        <td width="1%">{{ order.listNumber + 1 }}</td>
                                        <td style="padding-right:23.438vw">{{ order.roleName }}</td>

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
                    <p class="header__main">Добавление роли</p>
                    <p class="header__sec">
                        Создайте роль и укажите доступные разделы для роли
                    </p>
                </div>
                <div style="text-align: left" v-if="isEdit == 'yes'">
                    <p class="header__main">Редактирование роли</p>
                    <p class="header__sec">Измените данные и нажмите “Сохранить”</p>
                </div>
            </template>
            <template #body>
                <div class="clients__modal text-start" v-if="isEdit == 'no'">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Название роли</label>
                        <input class="form-control" type="text" placeholder="Введите название роли"
                            id="example-text-input" />
                    </div>
                    <p class="mb-0 role__text">Выбор доступных разделов</p>
                    <div class="d-flex justify-content-between mt-4">
                        <div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Главная</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Складской учет</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Учёт товаров</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Продажи</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Касса</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Аналитика</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Закупки</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Бухгалтерия</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Менеджмент</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Настройки</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clients__modal text-start" v-if="isEdit == 'yes'">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Название роли</label>
                        <input class="form-control" type="text" placeholder="Введите название роли"
                            id="example-text-input" />
                    </div>
                    <p class="mb-0 role__text">Выбор доступных разделов</p>
                    <div class="d-flex justify-content-between mt-4">
                        <div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Главная</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Складской учет</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Учёт товаров</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Продажи</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Касса</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Аналитика</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Закупки</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Бухгалтерия</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Менеджмент</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modal__check" type="checkbox" value=""
                                    id="fcustomCheck1">
                                <label class="custom-control-label" for="customCheck1">Настройки</label>
                                <div class="dropdown2">
                                    <img src="@/assets/img/info.svg" style="
                            width: 1.25vw;
                            margin-left: 1.667vw;
                            cursor: help;
                          " alt="" />
                                    <div class="dropdown-content">
                                        <p>
                                            Подсказка
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="clients__footer" v-if="isEdit == 'no'">
                    <button class="btn bg-gradient-dark" data-bs-dismiss="modal">Добавить</button>
                </div>
                <div class="clients__footer" v-if="isEdit == 'yes'">
                    <button class="btn bg-gradient-dark" data-bs-dismiss="modal">Сохранить</button>
                </div>
                <div class="clients__footer" v-if="isEdit == 'yes'">
                    <button class="btn delete__btn" data-bs-toggle="modal" data-bs-target="#DeleteInv">
                        Удалить роль
                    </button>
                </div>
            </template>
        </inputs-modal>
        <delete-modal :title="'роли'" :text="`роль &quot;Кассир.&quot;`"></delete-modal>
    </main>
</template>

<script>
import InputsModal from "@/components/InputsModal.vue";
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
                    roleName: 'Кассир',
                },
                {
                    id: 1,
                    roleName: 'Бухгалтер',
                },
                {
                    id: 2,
                    roleName: 'Продавец',
                },
                {
                    id: 3,
                    roleName: 'Администратор',
                },
                {
                    id: 4,
                    roleName: 'Руководитель',
                },
                {
                    id: 5,
                    roleName: 'Директор',
                },
                {
                    id: 6,
                    roleName: 'Собственник',
                },
                {
                    id: 7,
                    roleName: 'Менеджер',
                },
                {
                    id: 8,
                    roleName: 'Кассир',
                },
                {
                    id: 9,
                    roleName: 'Бухгалтер',
                },
                {
                    id: 10,
                    roleName: 'Продавец',
                },
                {
                    id: 11,
                    roleName: 'Администратор',
                },
                {
                    id: 12,
                    roleName: 'Руководитель',
                },
                {
                    id: 13,
                    roleName: 'Директор',
                },
                {
                    id: 14,
                    roleName: 'Собственник',
                },
                {
                    id: 15,
                    roleName: 'Менеджер',
                },
            ],
            isEdit: "no",
            filterPosition: "",
            search: '',
        };
    },
    methods: {
        reloadPagination(arr) {
            console.log(arr);
            this.paginationList = arr;
        },
    },
    computed: {

        filteredList() {
            return this.orders.filter((order) =>
                (String(order.roleName).toLowerCase().includes(String(this.search).toLowerCase()))

            );
        },
    },
    mounted() {
        CloseInvModal();
    },
    components: {
        "inputs-modal": InputsModal,
    },
};
</script>

<style scoped>
.modal__check {
    margin-right: 10px;
}

.form-check {
    display: flex;
}

.custom-control-label {
    font-weight: 400;
    font-size: 16px;
    color: #2D3748;

}

.role__text {
    font-weight: 600;
    font-size: 14px;
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

.dropdown2 {
    display: inline-block;
    position: relative;
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

.dropdown2:hover .dropdown-content {
    display: block;
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
