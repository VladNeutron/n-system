<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="d-flex justify-content-between">
        <lists-header>
          <template v-slot:title> Личный профиль </template>
          <template v-slot:description>
            Внесите изменения и не забудьте нажать “Сохранить”
          </template>
        </lists-header>
        <div>
        <button class="btn save__btn mt-3 me-3" @click="signOut">Выход</button>
        <button class="btn save__btn mt-3">Сохранить</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card p-4 mt-4">
            <div class="d-flex justify-content-between">
              <p class="mb-0 avatar__text">Аватар профиля</p>
              <img src="@/assets/img/edit.svg" style="cursor: pointer" alt="" />
            </div>
            <div class="avatar__img pt-4">
              <img
                src="@/assets/img/profile/avatar.png"
                style="width: 460px"
                alt=""
              />
            </div>
            <div class="pt-3 text-start">
              <p class="mb-0 avatar__footer__main">{{ fio }}</p>
              <p class="mb-0 avatar__footer__sec">{{ mail }}</p>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="card p-4 mt-4 text-start">
            <p class="mb-0 avatar__text">Личные данные</p>
            <div class="d-flex mt-3">
              <div class="form-group">
                <label for="example-text-input" class="form-control-label"
                  >Ф.И.О.</label
                >
                <input
                  class="form-control"
                  type="text"
                  id="example-text-input"
                  style="width: 380px"
                  :value="fio"
                  v-on:keyup.enter="fioAdd"
                />
              </div>
              <div class="form-group mx-5">
                <label for="example-text-input1" class="form-control-label"
                  >Почта</label
                >
                <input
                  class="form-control"
                  type="text"
                  :value="mail"
                  v-on:keyup.enter="MailAdd"
                  id="example-text-input1"
                  style="width: 380px"
                />
              </div>
            </div>
            <div class="d-flex">
              <div class="form-group">
                <label for="example-text-input" class="form-control-label"
                  >Логин</label
                >
                <input
                  class="form-control"
                  type="text"
                  placeholder="pepe123"
                  id="example-text-input2"
                  style="width: 380px"
                />
              </div>
              <div class="form-group mx-5">
                <label for="example-text-input1" class="form-control-label"
                  >Должность</label
                >
                <input
                  class="form-control"
                  type="text"
                  value="Хорошая булочка"
                  id="example-text-input3"
                  style="width: 191px"
                />
              </div>
            </div>
          </div>
          <div class="card p-4 mt-4 text-start">
            <p class="mb-0 avatar__text">Настройки пароля</p>
            <div class="mt-3">
              <div class="form-group">
                <label for="example-text-input" class="form-control-label"
                  >Старый пароль</label
                >
                <input
                  class="form-control"
                  type="password"
                  value="password"
                  id="example-text-input4"
                  style="width: 380px"
                />
              </div>
              <div class="form-group">
                <label for="example-text-input" class="form-control-label"
                  >Новый пароль</label
                >
                <input
                  class="form-control"
                  type="password"
                  value="password"
                  id="example-text-input5"
                  style="width: 380px"
                />
              </div>
              <div class="form-group">
                <label for="example-text-input" class="form-control-label"
                  >Повторите пароль</label
                >
                <input
                  class="form-control"
                  type="password"
                  value="password"
                  id="example-text-input6"
                  style="width: 380px"
                />
              </div>
              <button class="btn save__changes__btn mt-3">
                Сохранить изменения
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useRouter } from "vue-router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
  methods: {
    fioAdd() {
      let input = document.getElementById("example-text-input").value;
      this.fio = input;
    },
    MailAdd() {
      let input = document.getElementById("example-text-input1").value;
      this.mail = input;
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    },
  },
  data() {
    return {
      fio: "Пепе Мемасов",
      mail: "pepe.meme@neutron.agency",
    };
  },
};
</script>

<style scoped>
.save__btn {
  width: 241px;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}
.save__changes__btn {
  width: 360px;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}
.form-control-label {
  font-weight: 600;
  font-size: 14px;
  color: #2d3748;
}
.avatar__footer__sec {
  font-weight: 400;
  font-size: 14px;
  color: #a0aec0;
}
.avatar__footer__main {
  font-weight: 600;
  font-size: 30px;
  color: #2d3748;
}
.avatar__img img {
  border-radius: 10px;
}
.avatar__text {
  font-weight: 600;
  font-size: 20px;
  color: #2d3748;
}
</style>
