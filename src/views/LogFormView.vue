<template>
  <div>
    <h1>Вход</h1>
  </div>
  <div class="row d-flex justify-content-center align-items-center h-50">
    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
      <div class="card bg-white text-grey">
        <div class="card bg-white text-grey" style="border-radius: 16px">
          <div class="card-body p-3 text-center">
            <div class="mb-md-5 mt-md-4">
              <div class="form-outline form-grey mb-4">
                <input
                  type="text"
                  placeholder="Логин"
                  class="form-control bg-light"
                />
              </div>
              <div class="form-outline form-grey mb-4">
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Пароль"
                  class="form-control bg-light"
                />
              </div>

              <button
                class="btn d-flex justify-content-center w-100 px-6 bg-gradient-dark"
                style="border-radius: 20px"
              >
                Войти
              </button>

              <div class=""></div>
              <p>
                Забыли пароль?
                <a href="#" class="text-primary"> Восстановить</a>
              </p>
              <p>
                Нет аккаунта? <a href="text-primary"> Зарегестрироваться</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
