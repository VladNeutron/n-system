<template>
    <button class="btn btn-outline-dark mb-0 print__button">
        <img
        src="@/assets/css/icons/print.svg"
        class="print__img"
        alt="" />
        Печать
    </button>
</template>

<script>
export default {

}
</script>

<style scoped>
    .print__button{
        max-height: 40px;
        text-transform: uppercase !important;
        font-weight: 600;
        font-size: 12px;
        padding: 8px 24px;
    }
    .print__img{
        width: 24px;
    }
</style>