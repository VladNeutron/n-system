<template>
    <button class="btn btn-outline-dark mb-0 down__button">
        <img
        src="@/assets/css/icons/down-arrow.svg"
        class="down__img"
        alt="" />
        Скачать
    </button>
</template>

<script>
export default {

}
</script>

<style scoped>
    .down__button{
        max-height: 40px;
        text-transform: uppercase !important;
        font-weight: 600;
        font-size: 12px;
        padding: 8px 24px;
    }
    .down__img{
        width: 20px;
    }
</style>