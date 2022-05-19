<template>
  <div class="dropdown">
    <button
      class="btn btn-outline-dark mb-0 action__button"
      type="button"
      id="dropdownMenuButton"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        src="@/assets/img/action.svg"
        style="width: 1.042vw; margin-right: 0.417vw"
        alt=""
      />
      Действия
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li>
        <a class="dropdown-item" href="javascript:;">Печать</a>
      </li>
      <li>
        <a class="dropdown-item" href="javascript:;">Скачать</a>
      </li>
      <li>
        <a class="dropdown-item" href="javascript:;">Удалить</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.action__button {
  height: 40px;
  text-transform: uppercase !important;
  font-weight: 600;
  font-size: 12px;
  padding: 8px 24px;
  position: relative;
  display: flex;
  align-items: center;
}
</style>
