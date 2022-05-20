<template>
  <div class="update-rating">
    <div
      class="top-name ps-5 pe-4 pt-4 mb-4 d-flex justify-content-between align-items-center"
    >
      <h5 class="m-0">Рейтинг товаров</h5>
      <img
        src="@/assets/css/icons/reload.svg"
        alt="reload"
        @click="$emit('reloadTable')"
      />
    </div>
    <div class="description ms-5 mb-3">
      <p class="m-0">Товар</p>
    </div>
  </div>
</template>
<script>
export default {
  emits: {
    reloadTable() {},
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.update-rating {
  min-width: 371px;
}
.top-name h5 {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.553191px;

  color: #2d3748;
}
.top-name img {
  cursor: pointer;
}
.description p {
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  text-transform: uppercase;

  color: #a0aec0;
  text-align: left;
}
</style>
