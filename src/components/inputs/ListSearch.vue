<template>
    <div class="form-group m-0">
        <div class="input-group">
            <span class="input-group-text"
                ><img src="@/assets/css/icons/searchIcon.svg" alt=""
            /></span>
            <input
                class="form-control"
                placeholder="Поиск..."
                id="search"
                type="text"
                v-model="searchInp"
                @input="searchInput"
            />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchInp: '',
        }
    },
    emits: ['searchFilter'],
    methods: {
        searchInput(){
            this.$emit('searchFilter', this.searchInp)
        }
    }
}
</script>

<style>

</style>