import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import "@/assets/css/fonts.css";
import "@/assets/css/main.css";
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
import UploadButton from '@/components/buttons/UploadButton.vue'
import DownloadButton from '@/components/buttons/DownloadButton.vue';
import ListSearch from '@/components/inputs/ListSearch.vue';
import CommentButton from '@/components/buttons/CommentButton.vue'
import ActionButton from '@/components/buttons/ActionButton.vue'
import FiltersButton from '@/components/buttons/FiltersButton.vue'
import ExportButton from '@/components/buttons/ExportButton.vue'
import SrcButton from '@/components/buttons/SrcButton.vue'
import Export2Button from '@/components/buttons/Export2Button.vue'
import DeleteModal from "@/components/DeleteModal.vue";
import PaginationComponent from "@/components/Pagination/PaginationComponent.vue";
import Commentary from '@/components/Commentary.vue'
import SelelctProductDiscount from "@/components/SelectProductDiscount.vue"


const firebaseConfig = {

  apiKey: "AIzaSyAe1KZXriklxFBH61cbWaSRtaXEgMWpLzA",

  authDomain: "neutron-system-beta.firebaseapp.com",

  projectId: "neutron-system-beta",

  storageBucket: "neutron-system-beta.appspot.com",

  messagingSenderId: "605745747391",

  appId: "1:605745747391:web:d90d6c97c69c8b95fcbd0a"

};
  
  firebase.initializeApp(firebaseConfig);
  
  
  
  
  router.beforeEach((to, from, next)=> {
    if(to.name != 'login' & to.name != 'register'){
      let authListener = firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
          // not logged in
          alert("Пожалуйста авторизуйтесь!");
          router.push({ name: "login" });
        }
        else{
            next()    
        }
      });
      console.log('no')
      authListener();
    }
    else{
      next()
    }
  })


const app = createApp(App).use(store).use(router);

app.component("the-navbar", Navbar);
app.component("the-header", Header);
app.component("drop-down", DropDownInv);
app.component("login", Login);
app.component("register", Register);
app.component("cookie", Cookie);
app.component("lists-header", ListsHeader);
app.component("print-button", PrintButton);
app.component("upload-button", UploadButton);
app.component("download-button", DownloadButton);
app.component("comment-button", CommentButton);
app.component("action-button", ActionButton);
app.component("filters-button", FiltersButton);
app.component("export-button", ExportButton);
app.component("export2-button", Export2Button);
app.component("src-button", SrcButton);
app.component("list-search", ListSearch);
app.component('delete-modal', DeleteModal);
app.component('pagination-component', PaginationComponent);
app.component('commentary', Commentary);
app.component('select-product', SelelctProductDiscount);





app.mount("#app", Login);
