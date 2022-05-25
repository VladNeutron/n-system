<template>
  <button
    class="btn btn-outline-dark mb-0 comment__button"
    @click="openComments"
  >
    <img
      src="@/assets/img/comment.svg"
      style="width: 1.042vw; margin-right: 0.417vw"
      alt=""
    />
    Комментарии <span class="count">4</span>
  </button>
</template>

<script>
export default {
  methods: {
    openComments() {
      let filtersContainer = document.querySelector(".commentary__container");
      filtersContainer.classList.add("commentary-show");
    },
  },
};
</script>

<style scoped>
.comment__button {
  height: 40px;
  text-transform: uppercase !important;
  font-weight: 600;
  font-size: 12px;
  padding: 8px 24px;
  position: relative;
  display: flex;
  align-items: center;
}
.count {
  position: absolute;
  background: #eb5757;
  font-weight: 600;
  font-size: 0.625vw;
  color: #fff;
  border-radius: 50%;
  padding: 0 5px 0 5px;
  left: 7.708vw;
  top: -0.26vw;
}
</style>
