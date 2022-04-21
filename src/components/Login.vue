<template>
  <div class="modalsss">
    <div
      class="modal__logo d-flex align-items-center gap-3 p-4 text-start border-bottom"
    >
      <img src="@/assets/css/icons/logo.svg" alt="" />
      <div>
        <p class="m-0 fw-bold fs-4">NEUTRON</p>
        <p class="m-0 fw-">System</p>
      </div>
    </div>

    <div class="modal__form text-start w-100">
      <div class="modal__form-name">
        <h3 class="mt-4">Вход</h3>
        <p class="fw-light fs-6">Для входа введите данные</p>
      </div>
      <div class="form-group">
        <div class="input-group pb-2">
          <input
            type="text"
            class="form-control"
            placeholder="Логин"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group pb-2">
          <input
            type="password"
            class="form-control"
            placeholder="Пароль"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span class="input-group-text" id="basic-addon1"
            ><img src="@/assets/css/icons/eye.svg" alt=""
          /></span>
        </div>
        <p class="text-end fw-light fs-6">Забыли пароль?</p>
      </div>
      <div class="modal__form-enter">
        <button class="btn bg-gradient-dark btn-lg w-100">Вход</button>
        <p class="text-center m-0">
          Нет аккаунта? <a class="text-info" href="#">Регистрация</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modalsss {
  width: 460px;
  padding: 32px 50px;
}
</style>
