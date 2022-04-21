<template>
  <div class="cookie__body">
    <div class="card p-3">
      <div class="cookie__body-text d-flex gap-3 mb-3">
        <img src="@/assets/css/images/cookie.png" alt="" />
        <p class="m-0 text-start">
          Для повышения удобства использования Neutron System мы используем
          <a href="#" class="text-info">Cookies</a>. Запретить обработку Cookies
          можно в настройках Вашего браузера. Пожалуйста, ознакомьтесь с
          условиями обработки <a href="#" class="text-info">Cookies</a>.
        </p>
      </div>
      <div class="cookie__body-button">
        <button class="btn bg-gradient-info m-0">Хорошо, принимаю</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cookie__body {
  max-width: 912px;
  height: 140px;
}
.cookie__body-text img {
  height: 45px;
  width: 45px;
}
.cookie__body-text p {
  font-size: 15px;
  line-height: 22px;
}
</style>
