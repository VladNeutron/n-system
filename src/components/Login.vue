<template>
  <div class="modalsss">
    <div class="card">
      <div class="modal__logo d-flex align-items-center px-5 py-4 text-start">
        <img src="@/assets/css/icons/logo.svg" alt="" />
        <div>
          <p class="m-0 logo-top">NEUTRON</p>
          <p class="m-0 logo-bottom">System</p>
        </div>
      </div>

      <div class="modal__form text-start w-100 px-5 pb-4">
        <div class="modal__form-name">
          <h3>Вход</h3>
          <p>Для входа введите данные</p>
        </div>
        <form @submit.prevent="signIn">
          <div class="form-group">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Почта" aria-label="Username"
                aria-describedby="basic-addon1" v-model="email" />
            </div>
            <div class="input-group mb-2">
              <input type="password" class="form-control" placeholder="Пароль" aria-label="Username"
                aria-describedby="basic-addon1" v-model="password" />
              <span class="input-group-text" id="basic-addon1"><img src="@/assets/css/icons/eye.svg" alt="" /></span>
            </div>
            <p class="text-end link-password mb-3">Забыли пароль?</p>
          </div>
          <div class="modal__form-enter">
            <button class="btn bg-gradient-dark btn-lg w-100 mb-3">Вход</button>
            <p class="text-center m-0">
              Нет аккаунта? <a href="#">Регистрация</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAe1KZXriklxFBH61cbWaSRtaXEgMWpLzA",

  authDomain: "neutron-system-beta.firebaseapp.com",

  projectId: "neutron-system-beta",

  storageBucket: "neutron-system-beta.appspot.com",

  messagingSenderId: "605745747391",

  appId: "1:605745747391:web:d90d6c97c69c8b95fcbd0a"

};


firebase.initializeApp(firebaseConfig);

const email = ref("");
const password = ref("");
const router = useRouter();
const signIn = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((data) => {
      console.log("Вход успешен");
      router.push("/");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          console.log("Почта введена не правильно");
          break;
        case "auth/user-not-found":
          console.log("Аккаунта с таким логином не существует");
          break;
        case "auth/wrong-password":
          console.log("Неправильный пароль");
          break;
        default:
          console.log("Почта или пароль неверны");
          break;
      }
    });
};
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

.modal__form-name>h3 {
  margin-top: 32px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
}

.modal__form-name>p {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: -0.44px;

  margin-bottom: 24px;

  /* Gray */
  color: #a0aec0;
}

.input-group {
  height: 48px;
}

input {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  /* identical to box height */
  display: flex;
  align-items: center;
  letter-spacing: -0.44px;

  /* Gray */
  color: #a0aec0;
}

.link-password {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.44px;
  color: #67748e;
  cursor: pointer;
}

.modal__form-enter button {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
}

.modal__form-enter p,
.modal__form-enter a {
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
</style>
