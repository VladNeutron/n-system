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
                </lists-header>
                <kanban-view></kanban-view>
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
        }
    },
    components:{
        KanbanView, TableView
    },
}
</script>

<style>

</style>