<template>
    <button class="btn btn-outline-dark mb-0 down__button">
        <img
        src="@/assets/css/icons/down-arrow.svg"
        class="down__img"
        alt="" />
        <span>Скачать</span>
    </button>
</template>

<script>
export default {

}
</script>

<style scoped>
    .down__button{
        height: 40px;
        text-transform: uppercase !important;
        font-weight: 600;
        font-size: 12px;
        padding: 8px 24px;
        line-height: 12px;
        display: flex;
        align-items: center;
    }
    .down__img{
        width: 20px;
        margin-right: 5px;
    }
</style>