import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/fonts.css";
import "@/assets/css/nucleo-icons.css";
import "@/assets/css/nucleo-svg.css";
import "@/assets/css/soft-ui-dashboard.css";
import "@/assets/js/core/popper.min.js";
import "@/assets/js/core/bootstrap.min.js";
// import '@/assets/js/soft-ui-dashboard.min.js'
import "@/assets/js/plugins/perfect-scrollbar.min.js";
import "@/assets/js/plugins/smooth-scrollbar.min.js";

// Components
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import DropDownInv from "./components/DropDownInv";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Cookie from "./components/Cookie.vue";
import ListsHeader from '@/components/ListsHeader.vue';
import PrintButton from '@/components/buttons/PrintButton.vue';
import DownloadButton from '@/components/buttons/DownloadButton.vue';


const app = createApp(App).use(store).use(router);

app.component("the-navbar", Navbar);
app.component("the-header", Header);
app.component("drop-down", DropDownInv);
app.component("login", Login);
app.component("register", Register);
app.component("cookie", Cookie);
app.component("lists-header", ListsHeader);
app.component("print-button", PrintButton);
app.component("download-button", DownloadButton);

app.mount("#app", Login);
