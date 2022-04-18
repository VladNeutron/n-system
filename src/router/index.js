import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/bank-info",
    name: "bank-info",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BankInfoView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LogFormView.vue"),
  },
  {
<<<<<<< HEAD
    path: "/inv-list",
    name: "inv-list",
    component: () => import("../views/InventoryListView.vue"),
=======
    path: "/table",
    name: "table",
    component: () => import("../views/WarehouseListView.vue"),
>>>>>>> 0f487c0c5280fed537015e6d74f7ac36b8385449
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
