<template>
  <div class="modalsss">
    <div class="card">
      <div
        class="modal__logo d-flex justify-content-center align-items-center gap-3 p-4 text-start border-bottom"
      >
        <img src="@/assets/css/icons/logo.svg" alt="" />
        <div>
          <p class="m-0 fw-bold fs-4">NEUTRON</p>
          <p class="m-0 fw-">System</p>
        </div>
      </div>

      <div class="modal__form text-start w-100">
        <div class="modal__form-name">
          <h3 class="mt-4">Регистрация</h3>
          <p class="fw-light fs-6">Для регистрации введите данные</p>
        </div>
        <div class="form-group">
          <div class="input-group pb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Корпоративный e-mail"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group pb-2">
            <input type="password" class="form-control" placeholder="Пароль" />
            <span class="input-group-text" id="basic-addon1"
              ><img src="@/assets/css/icons/eye.svg" alt=""
            /></span>
          </div>
          <div class="input-group pb-2">
            <input
              type="password"
              class="form-control"
              placeholder="Повторите пароль"
            />
            <span class="input-group-text" id="basic-addon1"
              ><img src="@/assets/css/icons/eye.svg" alt=""
            /></span>
          </div>
          <div class="d-flex justify-content-start gap-3">
            <input
              class="form-check-input mt-0 chk-box"
              type="checkbox"
              value=""
            />
            <p class="m-0 text-description">
              Подтверждаю, что я ознакомился с
              <a class="text-info">Пользовательским соглашением</a> и принимаю
              его условия.
            </p>
          </div>
        </div>
        <div class="modal__form-enter">
          <button class="btn bg-gradient-dark btn-lg w-100">Регистрация</button>
          <p class="text-center m-0">
            Есть аккаунт? <a class="text-info" href="#">Войти</a>
          </p>
        </div>
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
}
.card {
  padding: 32px 50px;
}
.chk-box {
  width: 20px;
  height: 20px;
}
.text-description {
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
}
</style>
