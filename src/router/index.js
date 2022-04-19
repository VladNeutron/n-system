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
    path: "/inv-list",
    name: "inv-list",
    component: () => import("../views/InventoryListView.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("../views/WarehouseListView.vue"),
  },
  {
    path: "/create-inv-list",
    name: "create-inv-list",
    component: () => import("../views/CreateInventoryListView.vue"),
  },
  {
    path: "/edit-inv",
    name: "edit-inv",
    component: () => import("../views/EditInventoryView.vue"),
  },
  {
    path: "/create-movement",
    name: "create-movement",
    component: () => import("../views/CreateMovement.vue"),
  },
  {
    path: "/create-oprih",
    name: "create-oprih",
    component: () => import("../views/CreateOprih.vue"),
  },
  {
    path: "/create-writeoff",
    name: "create-writeoff",
    component: () => import("../views/CreateWriteoff.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
