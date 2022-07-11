<template>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <lists-header>
                        <template v-slot:title> Список пользователей </template>
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
                                    Добавить пользователя
                                </button>
                            </div>
                            <div class="table__inputs d-flex gap-3 align-content-center">
                                <filter-button class="mb-0"></filter-button>
                                <list-search @searchFilter="(a) => search = a"></list-search>
                            </div>
                        </div>
                        <div class="page__table">
                            <table class="table table-hover table-striped">
                                <thead>
                                    <tr class="">
                                        <th scope="col" class="th__col" style="width: 25px; padding-left: 27px"></th>
                                        <th width="1%" scope="col" class="th__col">№</th>
                                        <th scope="col" class="th__col">Логин</th>
                                        <th scope="col" class="th__col">Сотрудник</th>
                                        <th scope="col" class="th__col">Роль</th>
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
                                        <td>{{ order.login }}</td>
                                        <td>{{ order.name }}</td>
                                        <td>{{ order.role }}</td>

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
                    <p class="header__main">Добавление пользователя</p>
                    <p class="header__sec">
                        Введите данные пользователя и нажмите “Добавить”
                    </p>
                </div>
                <div style="text-align: left" v-if="isEdit == 'yes'">
                    <p class="header__main">Пользователь Moon</p>
                    <p class="header__sec">Измените данные и нажмите “Сохранить”</p>
                </div>
            </template>
            <template #body>
                <div class="clients__modal" v-if="isEdit == 'no'">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Логин</label>
                        <input class="form-control" type="text" placeholder="Введите логин" id="example-text-input" />
                    </div>
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Пароль</label>
                        <input class="form-control" type="text" placeholder="Введите пароль" id="example-text-input" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="Статус заявки">Роль</label>
                        <select class="form-select">
                            <option selected disabled>Выберите роль</option>
                            <option>Кассир</option>
                            <option>Складовщик</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="Статус заявки">Сотрудник</label>
                        <select class="form-select">
                            <option selected disabled>Выберите сотрудника</option>
                            <option>Тиханова О.А</option>
                            <option>Тиханова О.А</option>
                        </select>
                    </div>
                </div>
                <div class="clients__modal" v-if="isEdit == 'yes'">
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Логин</label>
                        <input class="form-control" type="text" placeholder="Введите логин" id="example-text-input" />
                    </div>
                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Пароль</label>
                        <input class="form-control" type="text" placeholder="Введите пароль" id="example-text-input" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="Статус заявки">Роль</label>
                        <select class="form-select">
                            <option selected disabled>Выберите роль</option>
                            <option>Кассир</option>
                            <option>Складовщик</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="Статус заявки">Сотрудник</label>
                        <select class="form-select">
                            <option selected disabled>Выберите сотрудника</option>
                            <option>Тиханова О.А</option>
                            <option>Тиханова О.А</option>
                        </select>
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
                        Удалить пользователя
                    </button>
                </div>
            </template>
        </inputs-modal>
        <delete-modal :title="'пользователя'" :text="`пользователя &quot;Moon&quot;`"></delete-modal>
    <the-filter :orders="orders" @no-filter="cancelFilters">
    <p class="text-start my-2 fw-bold" for="Склад">Роль сотрудника</p>
    <select class="form-select" v-model="filterRole">
        <option disabled value="">Выберите роль</option>
        <option v-for="role of roles" :key="role.id">
            {{ role.role }}
        </option>
    </select>
  </the-filter>
</template>

<script>
import InputsModal from "@/components/InputsModal.vue";
import { CloseInvModal } from "@/assets/js/closeModalDeleteOpen";
import Filter from "@/components/Filters.vue";
import FilterButton from "@/components/buttons/FiltersButton.vue";
export default {
    data() {
        return {
            filterRole: 'Выберите роль',
            paginationList: [],
            status: null,
            buttonText: "",
            orders: [
                {
                    id: 0,
                    login: 'Ilya',
                    name: "Тихонова А.Р",
                    role: "Кассир",
                },
                {
                    id: 1,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Бухгалтер",
                },
                {
                    id: 2,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Менеджер",
                },
                {
                    id: 3,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Кассир",
                },
                {
                    id: 4,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Кассир",
                },
                {
                    id: 5,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Кассир",
                },
                {
                    id: 6,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Кассир",
                },
                {
                    id: 7,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Кассир",
                },
                {
                    id: 8,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Кассир",
                },
                {
                    id: 9,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Кассир",
                },
                {
                    id: 10,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Кассир",
                },
                {
                    id: 11,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Кассир",
                },
                {
                    id: 12,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Кассир",
                },
                {
                    id: 13,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Грузчик",
                },
                {
                    id: 14,
                    login: 'Moon',
                    name: "Тихонова А.Р",
                    role: "Бухгалтер",
                },
            ],
            isEdit: "no",
            filterPosition: "",
            search: '',
            roles: [
                {
                    id: 0,
                    role: 'Кассир'
                },
                {
                    id: 1,
                    role: 'Бухгалтер'
                },
                {
                    id: 2,
                    role: 'Менеджер'
                },
                {
                    id: 3,
                    role: 'Грузчик'
                },
            ],
        };
    },
    methods: {
        reloadPagination(arr) {
            console.log(arr);
            this.paginationList = arr;
        },
        cancelFilters() {
            this.filterRole = '';
        },
    },
    computed: {
        filteredList() {
            if(this.filterRole != '' && this.filterRole!='Выберите роль'){
                let orders = this.orders.filter((order) =>
                order.role.toLowerCase() == this.filterRole.toLowerCase()
            );
            return orders.filter((order) =>
                (String(order.login).toLowerCase().includes(String(this.search).toLowerCase())) ||
                (String(order.name).toLowerCase().includes(String(this.search).toLowerCase())) ||
                (String(order.role).toLowerCase().includes(String(this.search).toLowerCase()))
            );
            }
            return this.orders.filter((order) =>
                (String(order.login).toLowerCase().includes(String(this.search).toLowerCase())) ||
                (String(order.name).toLowerCase().includes(String(this.search).toLowerCase())) ||
                (String(order.role).toLowerCase().includes(String(this.search).toLowerCase()))
            );
        },
    },
    mounted() {
        CloseInvModal();
    },
    components: {
        "inputs-modal": InputsModal,
        "the-filter": Filter,
        "filter-button": FilterButton,
    },
};
</script>

<style scoped>
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
