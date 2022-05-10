<template>
    <div class="modal fade" id="ChecksModal" tabindex="-1" role="dialog" aria-labelledby="ChecksModal"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header header-flex">
                    <div style="text-align: left; display:flex">
                        <img src="@/assets/img/tshirt-lg.png" style="width:4.948vw; margin-right:1.25vw" alt="">
                        <div>
                            <p class="header__main">Куртка зеленая</p>
                            <p class="header__sec">Список чеков, в которых присутствует выбранный товар
                            </p>
                        </div>
                    </div>
                    <img src="@/assets/img/closemodal.svg" style="width: 1.25vw; cursor: pointer" alt=""
                        data-bs-dismiss="modal" />
                </div>
                <div class="modal-body">
                    <div class="search modal__padding">
                        <div class="d-flex">
                            <div class="form-group m-0">
                                <div class="input-group mt-1">
                                    <span class="input-group-text"><img src="@/assets/css/icons/searchIcon.svg"
                                            alt="" /></span>
                                    <input class="form-control form__width" placeholder="Поиск..." id="search"
                                        type="text" v-model.trim="search" />
                                </div>
                            </div>
                            <div class="checks__count">
                                <p class="count__main">Количество чеков</p>
                                <p class="count__sec">28</p>
                            </div>
                        </div>
                        <filters-button></filters-button>
                    </div>
                    <div class="inv__block">
                        <div class="inv__content">
                            <table class="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col" class="th__col" style="width: 10px;border-left: 0;border-right: 0"></th>
                                        <th scope="col" class="th__col" style="border-left: 0;border-right: 0">
                                            №
                                        </th>
                                        <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                                            Номер чека
                                        </th>
                                        <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                                            Дата и время
                                        </th>

                                        <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                                            Кассир
                                        </th>
                                        <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                                            Торговая точка
                                        </th>
                                        <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                                            Кол-во
                                        </th>
                                        <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                                            Сумма
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- v-for="item in filteredProducts" :key="item" -->
                                    <tr v-for="(item, i) in filteredProducts" :key="item">
                                        <td width="1%" scope="row" style="border-left: 0; border-right: 0">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="fcustomCheck1" />
                                            </div>
                                        </td>
                                        <td style="border-left: 0; border-right: 0">
                                            {{i + 1}}
                                        </td>
                                        <td style="border-left: 0; border-right: 0">
                                            {{item.checkNum}}
                                        </td>
                                        <td style="border-left: 0; border-right: 0">
                                           {{item.date}}
                                        </td>
                                        <td style="border-left: 0; border-right: 0">
                                           {{item.userName}}
                                        </td>
                                        <td style="border-left: 0; border-right: 0">
                                            {{item.storage}}
                                        </td>
                                        <td style="border-left: 0; border-right: 0">
                                           {{item.count}}
                                        </td>
                                        <td style="border-left: 0; border-right: 0">
                                            {{item.sum}}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="pagination d-flex justify-content-end pe-5">
                        <div class="d-flex align-items-center gap-3 pb-4">
                            <div>
                                <p class="m-0">Показано<span> 1-10 из 324</span></p>
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
                                        <li class="page-item active">
                                            <a class="page-link" href="javascript:;">1</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:;">2</a>
                                        </li>
                                        <li class="page-item">
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
            </div>
        </div>
    </div>
</template>

<script>
import FiltersButton from "@/components/buttons/FiltersButton.vue";
export default {
    components: {
        FiltersButton
    },
    data() {
        return {
            search: "",
            onStorage: "",
            added: false,
            items: [
                {
                    checkNum: "23456",
                    date: "11 ноя, 2021 19:23",
                    userName: "Тихонов А. Р.",
                    storage: "Aport Mall",
                    count:"1",
                    sum:"12 890 ₸"
                },
                 {
                    checkNum: "23456",
                    date: "11 ноя, 2021 19:23",
                    userName: "Тихонов А. Р.",
                    storage: "Aport Mall",
                    count:"1",
                    sum:"12 890 ₸"
                },
                 {
                    checkNum: "23456",
                    date: "11 ноя, 2021 19:23",
                    userName: "Тихонов А. Р.",
                    storage: "Aport Mall",
                    count:"1",
                    sum:"12 890 ₸"
                },
                 {
                    checkNum: "23456",
                    date: "11 ноя, 2021 19:23",
                    userName: "Тихонов А. Р.",
                    storage: "Aport Mall",
                    count:"1",
                    sum:"12 890 ₸"
                },
                 {
                    checkNum: "23456",
                    date: "11 ноя, 2021 19:23",
                    userName: "Тихонов А. Р.",
                    storage: "Aport Mall",
                    count:"1",
                    sum:"12 890 ₸"
                },
                 {
                    checkNum: "23456",
                    date: "11 ноя, 2021 19:23",
                    userName: "Тихонов А. Р.",
                    storage: "Aport Mall",
                    count:"1",
                    sum:"12 890 ₸"
                },
                 {
                    checkNum: "23456",
                    date: "11 ноя, 2021 19:23",
                    userName: "Тихонов А. Р.",
                    storage: "Aport Mall",
                    count:"1",
                    sum:"12 890 ₸"
                },
                 {
                    checkNum: "23456",
                    date: "11 ноя, 2021 19:23",
                    userName: "Тихонов А. Р.",
                    storage: "Aport Mall",
                    count:"1",
                    sum:"12 890 ₸"
                },
                 {
                    checkNum: "54634",
                    date: "11 ноя, 2021 19:23",
                    userName: "Тихонов А. Р.",
                    storage: "Aport Mall",
                    count:"1",
                    sum:"12 890 ₸"
                },
                
            ],
        };
    },
    computed: {
        filteredProducts() {
            return this.items.filter((item) => {
                return (
                    item.checkNum.toLowerCase().includes(this.search.toLowerCase())
                );
            });
        },
    },
};
</script>

<style scoped>
td{
    font-size: 0.729vw;
}
.checks__count {
    margin-left: 1.25vw;
    text-align: left;
}

.count__main {
    font-weight: 400;
    font-size: 0.729vw;
    color: #2D3748;
    margin: 0;
}

.count__sec {
    font-weight: 700;
    font-size: 1.042vw;
    color: #2D3748;
    margin: 0;
}

.form__width {
    width: 15.99vw;
}

.search__buttons {
    margin-top: 0.7vw;
}

.form-control {
    border: 1px solid #a0aec0;
    height: 2.344vw;
}

.left__btn {
    background: transparent;
    border: 1px solid #a0aec0;
    box-sizing: border-box;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: 0;
    padding: 0.469vw 1.823vw 0.469vw 1.823vw;
    font-size: 0.833vw;
    color: #2d3748;
    font-weight: 400;
}

.right__btn {
    background: transparent;
    border: 1px solid #a0aec0;
    box-sizing: border-box;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 0.469vw 2.708vw 0.469vw 2.708vw;
    font-size: 0.833vw;
    color: #2d3748;
    font-weight: 400;
}

.search {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.search__label {
    font-weight: 600;
    font-size: 0.729vw;
    color: #2d3748;
}

.search__input {
    width: 22.031vw;
}

.added {
    background: transparent !important;
    border-radius: 5px !important;
    border: 1px solid #2d3748 !important;
    padding: 0.313vw 0.573vw 0.313vw 0.573vw !important;
    font-weight: 400 !important;
    font-size: 0.729vw !important;
    color: #2d3748 !important;
    text-transform: none !important;
}

.add__button {
    background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
    border-radius: 5px;
    border: 0;
    padding: 0.313vw 0.833vw 0.313vw 0.833vw;
    font-weight: 400;
    font-size: 0.729vw;
    color: #fff;
    text-transform: none;
}

.pagination.pagination-info .page-item.active>.page-link,
.pagination.pagination-info .page-item.active>.page-link:focus,
.pagination.pagination-info .page-item.active>.page-link:hover {
    background-image: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
}

.header__sec {
    font-weight: 400;
    font-size: 0.833vw;
    color: #a0aec0;
}

.header__main {
    margin: 0;
    font-weight: 700;
    font-size: 1.563vw;
    color: #252f40;
}

.header-flex {
    padding: 1.25vw 2.083vw 0.833vw 2.083vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.fade {
    background: linear-gradient(83.56deg,
            rgba(112, 146, 224, 0.1) 10.01%,
            rgba(139, 174, 243, 0.1) 75.36%);
    backdrop-filter: blur(50px);
}

.bg-gradient-secondary {
    background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
    border-radius: 8px;
    text-transform: uppercase;
    padding: 0.625vw 4.219vw 0.625vw 4.219vw;
}

.del__btn {
    margin-right: 3.542vw;
}

.modal-footer {
    margin-top: -1vw;
    justify-content: right;
    border-top: 0;
}

.modal__padding {
    padding-top: 1.563vw;
    padding-left: 2.083vw;
    padding-right: 2.083vw;
}

.modal__title {
    font-weight: 600;
    font-size: 1.042vw;
    color: #2d3748;
}

.modal-dialog {
    max-width: 48.073vw;
}
</style>