<template>
    <the-navbar></the-navbar>
    <main class="main-content border-radius-lg">
        <the-header></the-header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <lists-header>
                        <template v-slot:title> Задачи компании </template>
                        <template v-slot:description>
                            <span v-if="pageView == 1">
                                Доска задач компании
                            </span>
                            <span v-else>
                                Список задач компании
                            </span>
                        </template>
                        <template v-slot:add>
                            <div>
                                <img class="view__images view__images__kanban"
                                    src="@/assets/img/Management/KanbanView.svg" alt="" @click="pageView = 1"
                                    v-if="pageView == 1">
                                <img class="view__images view__images__kanban"
                                    src="@/assets/img/Management/KanbanViewUnselected.svg" alt="" @click="pageView = 1"
                                    v-else>
                                <img class="view__images view__images__table ms-4"
                                    src="@/assets/img/Management/TableView.svg" alt="" @click="pageView = 0"
                                    v-if="pageView == 0">
                                <img class="view__images view__images__table ms-4"
                                    src="@/assets/img/Management/TableViewUnselected.svg" alt="" @click="pageView = 0"
                                    v-else>
                            </div>
                        </template>
                    </lists-header>
                    <kanban-view-task v-if="pageView == 1" :dealStages="dealStagesPar" :dealsList="dealsListPar">
                    </kanban-view-task>
                    <table-view-task v-if="pageView == 0" :dealsList="dealsListPar"></table-view-task>
                </div>
            </div>
        </div>
        <add-task-modal></add-task-modal>
        <edit-task-modal></edit-task-modal>
    </main>
</template>

<script>
import KanbanViewTask from "@/components/Management/KanbanViewTask.vue"
import TableViewTask from "@/components/Management/TableViewTask.vue"
import AddTaskModal from "@/components/Management/AddTaskModal.vue"
import EditTaskModal from "@/components/Management/EditTaskModal.vue"
export default {
    data() {
        return {
            pageView: 1,
            dealStagesPar: [
                {
                    id: 'Stage0',
                    name: 'Первичный контакт',
                },
                {
                    id: 'Stage1',
                    name: 'Переговоры',
                },
                {
                    id: 'Stage2',
                    name: 'Договор',
                },
                {
                    id: 'Stage3',
                    name: 'Ожидание оплаты',
                },
                {
                    id: 'Stage4',
                    name: 'Начало работы',
                },

            ],
            dealsListPar: [
                {
                    id: 0,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Первичный контакт',
                    budget: 'Выполнено',
                    color: 'rgb(0, 121, 191)',
                    date: '16 июн'
                },
                {
                    id: 1,
                    dealName: "ИП Ромашкин",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Переговоры',
                    budget: 'Выполнено',
                },
                {
                    id: 2,
                    dealName: "ИП Весёлов",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Переговоры',
                    budget: 'Выполнено',
                },
                {
                    id: 3,
                    dealName: "ТОО “Будь уверен”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Договор',
                    budget: 'Выполнено',
                },
                {
                    id: 4,
                    dealName: "ИП Весёлов",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Первичный контакт',
                    budget: 'Выполнено',
                },
                {
                    id: 5,
                    dealName: "ИП Ромашкин",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Ожидание оплаты',
                    budget: 'Выполнено',
                },
                {
                    id: 6,
                    dealName: "ТОО “Будь уверен”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Переговоры',
                    budget: 'Выполнено',
                },
                {
                    id: 8,
                    dealName: "ТОО “Вектор”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Первичный контакт',
                    budget: 'Выполнено',
                },
                {
                    id: 9,
                    dealName: "ТОО “Стэлс”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Переговоры',
                    budget: 'Выполнено',
                },
                {
                    id: 10,
                    dealName: "ИП Семен",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Первичный контакт',
                    budget: 'Выполнено',
                },
                {
                    id: 11,
                    dealName: "ИП Лидер",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Первичный контакт',
                    budget: 'Выполнено',
                },
                {
                    id: 12,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Переговоры',
                    budget: 'Выполнено',
                },
                {
                    id: 13,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Начало работы',
                    budget: 'Выполнено',
                },
                {
                    id: 13,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Мильчаков В.',
                    client: 'Макаров А.',
                    stage: 'Начало работы',
                    budget: 'Выполнено',
                },
            ],
        }
    },
    components: {
        KanbanViewTask, TableViewTask, AddTaskModal, EditTaskModal
    },
    mounted() { }
}
</script>

<style scoped>
.view__images {
    cursor: pointer;
}

.view__images__kanban {
    width: 19px;
    height: 18px;
}

.view__images__table {
    width: 20px;
    height: 20px;
}
</style>