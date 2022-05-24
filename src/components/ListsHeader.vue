<template>
    <div class="page__name d-flex align-items-center mb-4 justify-content-between">
      <div class="page__name-title text-start">
        <h3><slot name="title"></slot></h3>
        <p class="mb-0"><slot name="description"></slot></p>
      </div>
      <slot name="add">

      </slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.page__name-title h3{
    font-weight: 600;
    font-size: 24px;
    color: #2D3748;    
}
.page__name-title p{
    font-weight: 400;
    font-size: 14px;   
    color: #A0AEC0; 
}
</style>