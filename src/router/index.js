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
  //Складской учёт
  {
    path: "/warehouse-accounting",
    name: "warehouse-accounting",
    component: () => import("../views/WarehouseListView.vue"),
    meta: { NavLink: "Складской учёт" },
    redirect: "/warehouse-accounting/warehouses",
  },

  {
    path: "/warehouse-accounting/inventorization-list",
    name: "inventorization-list",
    component: () => import("../views/InventoryListView.vue"),
    meta: { NavLink: "Список инвентаризаций" },
  },
  {
    path: "/warehouse-accounting/create-inv-list",
    name: "create-inv-list",
    component: () => import("../views/CreateInventoryListView.vue"),
    meta: { NavLink: "Новая инвентаризация" },
  },
  {
    path: "/warehouse-accounting/edit-inv",
    name: "edit-inv",
    component: () => import("../views/EditInventoryView.vue"),
    meta: { NavLink: "Редактирование инвентаризации" },
  },

  {
    path: "/warehouse-accounting/warehouses",
    name: "warehouses",
    component: () => import("../views/WarehouseListView.vue"),
    meta: { NavLink: "Список складов" },
  },

  {
    path: "/warehouse-accounting/create-movement",
    name: "create-movement",
    component: () => import("../views/CreateMovement.vue"),
    meta: { NavLink: "Новое перемещение" },
  },
  {
    path: "/warehouse-accounting/move-list",
    name: "move-list",
    component: () => import("../views/MoveListView.vue"),
    meta: { NavLink: "Список перемещений" },
  },

  {
    path: "/warehouse-accounting/create-oprih",
    name: "create-oprih",
    component: () => import("../views/CreateOprih.vue"),
    meta: { NavLink: "Новое оприходование" },
  },
  {
    path: "/warehouse-accounting/post-list",
    name: "post-list",
    component: () => import("../views/PostingListView.vue"),
    meta: { NavLink: "Список оприходований" },
  },

  {
    path: "/warehouse-accounting/create-writeoff",
    name: "create-writeoff",
    component: () => import("../views/CreateWriteoff.vue"),
    meta: { NavLink: "Новое списание" },
  },

  {
    path: "/warehouse-accounting/write-off",
    name: "write-off",
    component: () => import("../views/WriteOffListView.vue"),
    meta: { NavLink: "Список списаний" },
  },
  {
    path: "/company-info",
    name: "company-info",
    component: () => import("../components/CompanyInfo.vue"),
    meta: { NavLink: "Информация о компанииит" },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterFormView.vue"),
  },
  {
    path: "/warehouse-accounting/storage",
    name: "storage",
    component: () => import("../views/StorageView.vue"),
    meta: { NavLink: "Склад" },
  },
  {
    path: "/warehouse-accounting/create-storage",
    name: "create-storage",
    component: () => import("../views/CreateStorageView.vue"),
    meta: { NavLink: "Создание склада" },
  },
  {
    path: "/available-warehouse",
    name: "available-warehouse",
    component: () => import("../views/WarehouseAvailabilityView.vue"),
    meta: { NavLink: "Наличие на складе" },
  },

  //PRODUCT-ACCOUNTING
  {
    path: "/products-accounting",
    name: "products-accounting",
    component: () => import("../views/Barcode.vue"),
    meta: { NavLink: "Учёт товаров" },
  },
  {
    path: "/product-edit",
    name: "product-edit",
    component: () => import("../views/ProductEditView.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/products-accounting/barcode",
    name: "barcode",
    component: () => import("../views/Barcode.vue"),
    meta: { NavLink: "Печать штрихкодов" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes,
});

export default router;
