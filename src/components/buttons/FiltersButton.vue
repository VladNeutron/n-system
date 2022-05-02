<template>
    <button class="btn btn-outline-dark mb-0 openFilters" @click="openFilters">
        Фильтры
    </button>
</template>

<script>
export default {
    methods:{
        openFilters(){
            let filtersContainer = document.querySelector(".filters__container");
            filtersContainer.classList.add("filters__show");
        },    
    },
}
</script>

<style>

</style>