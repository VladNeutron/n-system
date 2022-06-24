<template>
    <the-navbar></the-navbar>
    <main class="main-content border-radius-lg">
        <the-header></the-header>
        <div class="container-fluid">
            <div class="documentHeader">
                <div class="documentHeader__nameCont">
                    <div class="documentHeader__name">
                        Счет клиенту № 9876543 от 21.04.2022
                    </div>
                    <div class="documentHeader__underName">
                        Введите все параметры и нажмите "Подписать"
                    </div>
                </div>
                <div class="documentHeader__btns">
                    <button class="btn edit__bnt"><img src="@/assets/img/edo/EditEdoBtn.svg" alt=""
                            onclick="window.location.href = '/accounting/documents/edit-account'"> Изменить</button>
                    <comment-button style="margin-right: 24px"></comment-button>
                    <action-button style="margin-right: 24px"></action-button>
                    <button class="btn save__btn" data-bs-toggle="modal" data-bs-target="#EdoModal"
                        @click="isSign = true">Подписать</button>
                </div>
            </div>
            <div class="signatures card mt-2">
                <div class="signatures__title">
                    Подписи
                </div>
                <div>
                    <table class="table">
                        <thead>
                            <th>
                                дата
                            </th>
                            <th>
                                ФИО
                            </th>
                            <th>
                                ИИН
                            </th>
                            <th>
                                Организация
                            </th>
                            <th>
                                БИН
                            </th>
                            <th>
                                Статус
                            </th>
                            <th>
                                Тип подписи
                            </th>
                            <th>
                                Подпись
                            </th>
                        </thead>
                        <tbody>
                            <tr v-for="sign in signatures" :key="sign.id">
                                <td>
                                    {{ sign.date }}
                                </td>
                                <td>
                                    {{ sign.fio }}
                                </td>
                                <td>
                                    {{ sign.inn }}
                                </td>
                                <td>
                                    {{ sign.company }}
                                </td>
                                <td>
                                    {{ sign.bin }}
                                </td>
                                <td>
                                    <div v-if="sign.status == 'Подписан'" class="btn status__btn bg-gradient-success">
                                        {{ sign.status }}</div>
                                    <div class="btn status__btn bg-gradient-danger" v-else>{{ sign.status }}</div>
                                </td>
                                <td class="signType__td">
                                    {{ sign.signType }}
                                </td>
                                <td class="">
                                    <div class="qr__td">
                                        <div :id="'test' + sign.id"></div>
                                        <span>{{ sign.sign }}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-7">
                    <div id="my_pdf_viewer">
                        <div class="navigation_controls">
                            <button id="go_previous" class="btn pdfBtn" @click="prevPage()">Предыдущая</button>
                            <span>{{ pdfPage }} / {{ pageCount }}</span>
                            <button id="go_next" class="btn pdfBtn" @click="nextPage()">Следующая</button>
                        </div>
                        <div id="canvas_container">
                            <vue-pdf-embed ref="pdfRef" @rendered="handleDocumentRender" :source="'../schet.pdf'"
                                :page="pdfPage" />
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="participants card">
                        <div class="participants__header">
                            <span>Участники документа</span>
                            <button class="btn" data-bs-toggle="modal" data-bs-target="#SendModal">Пригласить
                                участника</button>
                        </div>
                        <div>
                            <table class="table">
                                <thead>
                                    <th>
                                        e-mail
                                    </th>
                                    <th>
                                        статус
                                    </th>
                                    <th>

                                    </th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Это Вы - info@neutron-agency.com
                                        </td>
                                        <td>
                                            <div class="btn btn__part_td bg-gradient-success mb-0 w-80">Подписан</div>
                                        </td>
                                        <td style="border-left: 0; padding-right: 27px">
                                            <div class="dropdown">
                                                <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer"
                                                    alt="" />
                                                <!-- <div :class="['dropdown-content', {'dropdown__content__top': ind >= paginationList.length - 2}]"> -->
                                                <div class="dropdown-content">
                                                    <a style="white-space: pre-wrap;">Отправить
                                                        приглашение повторно</a>
                                                    <hr />
                                                    <a style="cursor: pointer">Отозвать приглашение</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            igor.yem@onevision.kz
                                        </td>
                                        <td>
                                            <div class="btn btn__part_td bg-gradient-danger mb-0 w-80">Не подписан</div>
                                        </td>
                                        <td style="border-left: 0; padding-right: 27px">
                                            <div class="dropdown">
                                                <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer"
                                                    alt="" />
                                                <!-- <div :class="['dropdown-content', {'dropdown__content__top': ind >= paginationList.length - 2}]"> -->
                                                <div class="dropdown-content">
                                                    <a style="white-space: pre-wrap;">Отправить
                                                        приглашение повторно</a>
                                                    <hr />
                                                    <a style="cursor: pointer">Отозвать приглашение</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="documentInfo card mt-4">
                        <div class="documentInfo__title">
                            Информация о документе
                        </div>
                        <div class="documentInfo__header">
                            <div class="documentInfo__header__row row">
                                <div class="col-6">
                                    Документ:
                                </div>
                                <div class="col-6">
                                    Счет клиенту №9876543 от 21.04.2022
                                </div>
                            </div>
                            <div class="documentInfo__header__row row">
                                <div class="col-6">
                                    Создатель:
                                </div>
                                <div class="col-6">
                                    Огай Даниил
                                </div>
                            </div>
                            <div class="documentInfo__header__row row">
                                <div class="col-6">
                                    Дата создания:
                                </div>
                                <div class="col-6">
                                    21.04.2022 18: 50
                                </div>
                            </div>
                        </div>
                        <div class="documentInfo__download">
                            <div class="documentInfo__download__title">
                                Скачать:
                            </div>
                            <div class="documentInfo__download__cont row">
                                <div class="documentInfo__download__item col-4">
                                    <a download href="../schet.pdf"><img src="@/assets/img/edo/edoOrig.svg" alt=""></a>
                                    <span>Оригинал</span>
                                </div>
                                <div class="documentInfo__download__item col-4">
                                    <a download href="../schet.pdf"><img src="@/assets/img/edo/edoOregSigns.svg"
                                            alt=""></a>
                                    <span>PDF с подписями</span>
                                </div>
                                <div class="documentInfo__download__item col-4">
                                    <a download href="../schet.pdf"><img src="@/assets/img/edo/edoZip.svg" alt=""></a>
                                    <span>Zip-архив с подписями</span>
                                </div>
                            </div>
                        </div>
                        <div class="documentInfo__download">
                            <div class="documentInfo__download__title">
                                Печать:
                            </div>
                            <div class="documentInfo__download__cont row">
                                <div class="documentInfo__download__item col-4">
                                    <a href="../schet.pdf"><img src="@/assets/img/edo/edoOrig.svg" alt=""></a>
                                    <span>Оригинал</span>
                                </div>
                                <div class="documentInfo__download__item col-4">
                                    <a href="../schet.pdf"><img src="@/assets/img/edo/edoOregSigns.svg" alt=""></a>
                                    <span>PDF с подписями</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Commentary :pageTitle="'ЭДО - Счет клиенту № 9876543'"></Commentary>
        <send-modal>
            <template #head>
                <div style="text-align: left">
                    <p class="header__main">Отправка формы заполнения реквизитов</p>
                    <p class="header__sec">
                        Укажите E-mail или контактный телефон участника документа, который должен подписать документ с
                        помощью ЭЦП
                    </p>
                    <p class="header__third">
                        *Участнику будет отправлено письмо или сообщение в WhatsApp со ссылкой на этот документ.
                    </p>
                </div>
            </template>
            <template #body>
                <div class="form-group text-start">
                    <label for="example-text-input1" class="form-control-label">E-mail или телефон участника</label>
                    <input class="form-control" style="width:667.008px" type="text"
                        placeholder="Введите e-mail или телефон" id="example-text-input1" />
                </div>
            </template>
            <template #footer>
                <div class="clients__footer">
                    <button class="btn bg-gradient-dark" style="width:18.75vw">Отправить</button>
                </div>
            </template>
        </send-modal>
        <EDOModal>
            <template #head>
                <div style="text-align: left">
                    <p class="header__main">Подпишите документ, используя ЭЦП</p>
                </div>
            </template>
            <template #body>
                <div class="text-start">
                    <p style="font-size: 14px;font-weight: 600;color: #2D3748;">Выберите сертификат ЭЦП</p>
                    <p style="font-weight: 400;font-size: 14px;color: #2D3748;">Чтобы подписать документ своей ЭЦП, Вам
                        необходимо:</p>
                    <ol>
                        <li>Запустите NCALayer
                            <button class="layer__status__done" v-if="ncalayerStatus"
                                @click="ncalayerStatus = !ncalayerStatus"> <img src="@/assets/img/done.svg" alt=""> уже
                                запущен</button>
                            <button class="layer__status__notdone" v-else @click="ncalayerStatus = !ncalayerStatus">
                                <img src="@/assets/img/barcodeModalClose.svg" style="width:15px; margin-right:5px;"
                                    alt="">не
                                запущен</button>
                        </li>
                        <li>Выберите сертификат для подписи документа <br>
                            <span style="font-size: 14px;font-weight: 400;color: #A0AEC0;">* название сертификата
                                начинается с GOSTKNCA_... или RSA_256...</span>
                        </li>

                    </ol>
                </div>
            </template>
            <template #footer>
                <input type="file" style="display: none;" id="fileupload" name="file" />
                <button type="button" onclick="document.getElementById('fileupload').click();"
                    class="btn bg-gradient-secondary">
                    Выбрать сертификат
                </button>
            </template>
        </EDOModal>
    </main>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'
import Commentary from "@/components/Commentary.vue";
import EDOModal from "../../components/EDOModal.vue";
import SendFormModal from "@/components/SendFormModal.vue"
export default {
    data() {
        return {
            signatures: [
                {
                    id: 0,
                    date: '21.04.2022  19:23',
                    fio: 'Огай Даниил Юрьевич',
                    inn: '555555555555',
                    company: 'ТОО “Нейтрон”',
                    bin: '111111111111',
                    status: 'Подписан',
                    signType: 'Первый руководитель юридического лица, имеющий право подписи',
                    sign: '06a9a3cc00ccada3b24d327207105b9073',
                },
                {
                    id: 1,
                    date: '21.04.2022  19:26',
                    fio: 'НеОгай Даниил Юрьевич',
                    inn: '555555555555',
                    company: 'ТОО “Нейтрон”',
                    bin: '111111111111',
                    status: 'Не подписан',
                    signType: 'Первый руководитель юридического лица, имеющий право подписи',
                    sign: '06a9a3cc00ccada3b24d327207105b9073',
                },
            ],
            pdfPage: 1,
            pageCount: 0,
            isLoading: true,
            ncalayerStatus: true,
        }
    },
    mounted() {
        this.signatures.forEach(element => {
            let qrcode = new QRCode(`test${element.id}`, {
                text: element.sign,
                width: 42,
                height: 42,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        });
    },
    components: {
        VuePdfEmbed,
        Commentary,
        EDOModal,
        "send-modal": SendFormModal,
    },
    methods: {

        handleDocumentRender() {
            this.isLoading = false
            this.pageCount = this.$refs.pdfRef.pageCount
        },

        prevPage() {
            if (this.pdfPage > 1) {
                this.pdfPage--
            }
        },
        nextPage() {
            if (this.pdfPage < this.pageCount) {
                this.pdfPage++
            }
        }
    }
}
</script>

<style scoped>
.header__third {
    font-weight: 400;
    font-size: 13px;
    color: #A0AEC0;
}

.layer__status__notdone {
    background: linear-gradient(83.56deg, #FD0000 8.04%, #FF0000 75.36%);
    border-radius: 5px;
    padding: 2px 4px 2px 4px;
    border: 0;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
}

.layer__status__done {
    background: linear-gradient(83.56deg, #7092E0 10.01%, #8BAEF3 75.36%);
    border-radius: 5px;
    padding: 2px 4px 2px 4px;
    border: 0;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
}

ol li {
    font-weight: 400;
    font-size: 14px;
    color: #2D3748;
}

.bg-gradient-secondary {
    font-weight: 700;
    font-size: 16px;
    background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
    border-radius: 8px;
    text-transform: uppercase;
    padding: 14px 24px 14px 24px;
}

.documentHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.documentHeader__nameCont {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.documentHeader__name {
    font-weight: 600;
    font-size: 24px;
    color: #2D3748;
}

.documentHeader__underName {
    font-weight: 400;
    font-size: 14px;
    color: #A0AEC0;
}

.documentHeader__btns {
    display: flex;
}

.edit__bnt {
    background: none;
    box-shadow: none;
    border: 1px solid #2D3748;
    border-radius: 8px;
    height: 40px;
    margin-right: 24px;
    font-weight: 600;
    font-size: 14px;
    color: #2D3748;
    padding: 8px 24px;
    display: flex;
    align-items: center;
}

.edit__bnt img {
    margin-right: 8px;
    width: 15px;
    height: 15px;
}

.save__btn {
    background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
    box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    height: 40px;
    padding: 8px 40px;
}

/* TABLE */
.signatures {
    padding: 16px;
}

.signatures__title {
    font-weight: 600;
    font-size: 20px;
    color: #2D3748;
    text-align: left;
}

.qr__td {
    display: flex;
}

.qr__td span {
    width: 150px;
    white-space: pre-wrap;
    text-align: left;
    margin-left: 8px;
}

.signType__td {
    /* width: 260px; */
    white-space: pre-wrap;
    text-align: left;
}

.status__btn {
    width: 150px;
    font-weight: 600;
    font-size: 14px;
    padding-top: 6px;
    padding-bottom: 6px;
    margin-bottom: 0;
}

td {
    vertical-align: middle;
}

/* PDF */
.navigation_controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    color: #2D3748;
}

.pdfBtn {
    background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
    box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    height: 40px;
    padding: 8px 40px;
}

/* PARTICIPANTS */
.participants {
    padding: 24px;
}

.participants__header {
    display: flex;
    justify-content: space-between;
}

.participants__header span {
    font-weight: 600;
    font-size: 24px;
    color: #2D3748;
}

.participants__header button {
    background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
    box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    height: 40px;
    padding: 8px 40px;
    margin-bottom: 0;
}

.participants table {
    margin-top: 16px;
}

.btn__part_td {
    font-weight: 600;
    font-size: 14px;
}

/* DOCUMENT-INFO */
.documentInfo {
    padding: 24px;
}

.documentInfo__title {
    font-weight: 600;
    font-size: 24px;
    color: #2D3748;
    text-align: left;
}

.documentInfo__header {
    margin-top: 1vw;
}

.documentInfo__header__row {
    font-weight: 600;
    font-size: 14px;
    color: #2D3748;
    text-align: left;
    border-bottom: 1px solid #E2E8F0;
    padding: 20px 10px;
}

.documentInfo__download {
    margin-top: 16px;
}

.documentInfo__download__title {
    font-weight: 600;
    font-size: 20px;
    color: #2D3748;
    text-align: left;
}

.documentInfo__download__cont {
    margin-top: 16px;
}

.documentInfo__download__item {
    display: flex;
    flex-direction: column;
    align-items: center
}

.documentInfo__download__item img {
    width: 80px;
}

.documentInfo__download__item span {
    font-weight: 600;
    font-size: 14px;
    color: #2D3748;
    margin-top: 16px;
}
</style>