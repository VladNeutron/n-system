<template>
  <div class="cookie__body mx-4 my-4 mb-6">
    <div class="card p-4 pb-3">
      <div class="cookie__body-text d-flex gap-3 mb-3">
        <img src="@/assets/css/images/cookie.png" alt="" />
        <p class="m-0 text-start">
          Для повышения удобства использования Neutron System мы используем
          <a href="#">Cookies</a>. Запретить обработку Cookies можно в
          настройках Вашего браузера. Пожалуйста, ознакомьтесь с условиями
          обработки <a href="#">Cookies</a>.
        </p>
      </div>
      <div class="cookie__body-button">
        <button class="btn mb-0">Хорошо, принимаю</button>
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
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.44px;
}
a {
  color: #8baef3;
}
button {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  color: #fff;
}
button:hover {
  color: #fff;
}
</style>
