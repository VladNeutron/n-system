<template>
  <div class="modalsss">
    <div class="card">
      <div
        class="modal__logo d-flex justify-content-center align-items-center px-5 py-4 text-start"
      >
        <img src="@/assets/css/icons/logo.svg" alt="" />
        <div>
          <p class="m-0 logo-top">NEUTRON</p>
          <p class="m-0 logo-bottom">System</p>
        </div>
      </div>

      <div class="modal__form text-start w-100 px-5 pb-4">
        <div class="modal__form-name">
          <h3>Регистрация</h3>
          <p>Для регистрации введите данные</p>
        </div>
        <div class="form-group">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Корпоративный e-mail"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Пароль" />
            <span class="input-group-text" id="basic-addon1"
              ><img src="@/assets/css/icons/eye.svg" alt=""
            /></span>
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Повторите пароль"
            />
            <span class="input-group-text" id="basic-addon1"
              ><img src="@/assets/css/icons/eye.svg" alt=""
            /></span>
          </div>
          <div class="d-flex justify-content-start gap-2">
            <div class="form-check mt-1">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
            </div>
            <div class="form-text">
              <p class="m-0">
                Подтверждаю, что я ознакомился с
                <a>Пользовательским соглашением</a> и принимаю его условия.
              </p>
            </div>
          </div>
        </div>
        <div class="modal__form-enter">
          <button class="btn bg-gradient-dark btn-lg w-100 mb-3">
            Регистрация
          </button>
          <p class="text-center m-0">Есть аккаунт? <a href="#">Войти</a></p>
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
.modal__logo {
  border-bottom: 1px solid #e2e8f0;
  gap: 21px;
  height: 120px;
}
.logo-top {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 25.9415px;
  line-height: 120%;
}
.logo-bottom {
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18.16px;
  line-height: 21.79px;
}
.modal__form-name > h3 {
  margin-top: 32px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
}
.modal__form-name > p {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* Gray */
  color: #a0aec0;
}
.form-text p {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
.form-text a {
  color: #8baef3;
  cursor: pointer;
}
.modal__form-enter button {
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
}
.modal__form-enter p {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.44px;
  color: #67748e;
}
a {
  color: #8baef3;
}
</style>
