<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <lists-header>
                    <template v-slot:title> Логи пользователей </template>
                    <template v-slot:description>
                        Здесь отображены все действия пользователей
                    </template>
                </lists-header>
                <div class="card pt-4 pb-6">
                    <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
                        <div>
                            <list-search @searchFilter="(a) => search = a"></list-search>
                        </div>
                        <div class="table__inputs d-flex gap-3 align-content-center">

                        </div>
                    </div>
                    <div class="page__table">
                        <table class="table table-hover table-striped">
                            <thead>
                                <tr class="">
                                    <th scope="col" class="th__col" style="width: 25px; padding-left: 27px"></th>
                                    <th scope="col" class="th__col">Пользователь</th>
                                    <th scope="col" class="th__col">действие</th>
                                    <th scope="col" class="th__col">дата и время</th>
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
                                    <td>{{ order.user }}</td>
                                    <td>{{ order.action }}</td>
                                    <td>{{ order.date }}</td>

                                    <td class="dropdown">
                                        <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer"
                                            alt="" />
                                        <div class="dropdown-content">

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
    <delete-modal :title="'лог сотрудника'" :text="`сотрудника &quot;Moon&quot;`"></delete-modal>
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
                    user: 'Moon',
                    action: "Открыл файл “Накладная от 25 мая 2022”",
                    date: "11.05.2022 18:03",
                },
                {
                    id: 1,
                    user: 'Moon',
                    action: "Открыл файл “Накладная от 25 мая 2022”",
                    date: "11.05.2022 18:03",
                },
                {
                    id: 2,
                    user: 'Moon',
                    action: "Открыл файл “Накладная от 25 мая 2022”",
                    date: "11.05.2022 18:03",
                },
                {
                    id: 3,
                    user: 'Moon',
                    action: "Открыл файл “Накладная от 25 мая 2022”",
                    date: "11.05.2022 18:03",
                },
                {
                    id: 4,
                    user: 'Moon',
                    action: "Открыл файл “Накладная от 25 мая 2022”",
                    date: "11.05.2022 18:03",
                },
                {
                    id: 5,
                    user: 'Moon',
                    action: "Открыл файл “Накладная от 25 мая 2022”",
                    date: "11.05.2022 18:03",
                },

            ],
            isEdit: "no",
            filterPosition: "",
            search: ''
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
                (String(order.user).toLowerCase().includes(String(this.search).toLowerCase()))

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
