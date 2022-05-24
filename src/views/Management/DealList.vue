<template>
    <the-navbar></the-navbar>
    <main class="main-content border-radius-lg">
        <the-header></the-header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                <lists-header>
                    <template v-slot:title> Сделки компании </template>
                    <template v-slot:description>
                        Доска сделок компании
                    </template>
                    <template v-slot:add>
                        <div>
                        <img 
                            class="view__images view__images__kanban" 
                            src="@/assets/img/Management/KanbanView.svg" 
                            alt="" 
                            @click="pageView=1" 
                            v-if="pageView == 1"
                        >
                        <img 
                            class="view__images view__images__kanban" 
                            src="@/assets/img/Management/KanbanViewUnselected.svg" 
                            alt="" 
                            @click="pageView=1" 
                            v-else
                        >
                        <img 
                            class="view__images view__images__table ms-2" 
                            src="@/assets/img/Management/TableView.svg" 
                            alt="" 
                            @click="pageView=0" 
                            v-if="pageView==0"
                        >
                        <img 
                            class="view__images view__images__table ms-2" 
                            src="@/assets/img/Management/TableViewUnselected.svg" 
                            alt="" 
                            @click="pageView=0"
                            v-else
                        >
                        </div>
                    </template>
                </lists-header>
                <kanban-view v-if="pageView==1"></kanban-view>
                <table-view v-if="pageView==0" :dealsList="dealsList"></table-view>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import KanbanView from "@/components/Management/KanbanView.vue"
import TableView from "@/components/Management/TableView.vue"
export default {
    data(){
        return{
            pageView: 1,
            dealsList: [
                {
                    id:0,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Первичный контакт',
                    budget: '1 500 000 ₸',
                },
                {
                    id:1,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Переговоры',
                    budget: '1 500 000 ₸',
                },
                {
                    id:2,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Переговоры',
                    budget: '1 500 000 ₸',
                },
                {
                    id:3,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Переговоры',
                    budget: '1 500 000 ₸',
                },
                {
                    id:4,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Первичный контакт',
                    budget: '1 500 000 ₸',
                },
                {
                    id:5,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Первичный контакт',
                    budget: '1 500 000 ₸',
                },
                {
                    id:6,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Переговоры',
                    budget: '1 500 000 ₸',
                },
                {
                    id:8,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Первичный контакт',
                    budget: '1 500 000 ₸',
                },
                {
                    id:9,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Переговоры',
                    budget: '1 500 000 ₸',
                },
                {
                    id:10,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Первичный контакт',
                    budget: '1 500 000 ₸',
                },
                {
                    id:11,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Первичный контакт',
                    budget: '1 500 000 ₸',
                },
                {
                    id:12,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Переговоры',
                    budget: '1 500 000 ₸',
                },
                {
                    id:13,
                    dealName: "ТОО “Рога и копыта”",
                    dealLastDate: '21.05.2022 18:46',
                    responsible: 'Тихонов А.',
                    client: 'Тихонов А.',
                    stage: 'Переговоры',
                    budget: '1 500 000 ₸',
                },
            ],
        }
    },
    components:{
        KanbanView, TableView
    },
}
</script>

<style scoped>
    .view__images{
        cursor: pointer;    
    }
    .view__images__kanban{
        width: 19px;
        height: 18px;
    }
    .view__images__table{
        width: 20px;
        height: 20px;
    }
</style>