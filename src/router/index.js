import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [

  // НАЧАЛЬНЫЕ СТРАНИЦЫ
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
    path: "/company-info",
    name: "company-info",
    component: () => import("../components/CompanyInfo.vue"),
    meta: { NavLink: "Компания" },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterFormView.vue"),
  },
  {
    path: "/company/edit-company",
    name: "edit-company",
    component: () => import("../views/EditOrganization.vue"),
    meta: { NavLink: "Информация о компании" },
  },
  // НАЧАЛЬНЫЕ СТРАНИЦЫ



  //СКЛАДСКОЙ УЧЁТ
  {
    path: "/warehouse-accounting",
    name: "warehouse-accounting",
    component: () => import("../views/WarehouseAccounting/WarehouseListView.vue"),
    meta: { NavLink: "Складской учёт" },
    redirect: "/warehouse-accounting/warehouses",
  },
    // ИНВЕНТАРИЗАЦИЯ
  {
    path: "/warehouse-accounting/inventorization-list",
    name: "inventorization-list",
    component: () => import("../views/WarehouseAccounting/InventoryListView.vue"),
    meta: { NavLink: "Список инвентаризаций" },
  },
  {
    path: "/warehouse-accounting/create-inv-list",
    name: "create-inv-list",
    component: () => import("../views/WarehouseAccounting/CreateInventoryListView.vue"),
    meta: { NavLink: "Новая инвентаризация" },
  },
  {
    path: "/warehouse-accounting/edit-inv",
    name: "edit-inv",
    component: () => import("../views/WarehouseAccounting/EditInventoryView.vue"),
    meta: { NavLink: "Редактирование инвентаризации" },
  },
    // ИНВЕНТАРИЗАЦИЯ
    // СКЛАДЫ
  {
    path: "/warehouse-accounting/warehouses",
    name: "warehouses",
    component: () => import("../views/WarehouseAccounting/WarehouseListView.vue"),
    meta: { NavLink: "Список складов" },
  },
  {
    path: "/warehouse-accounting/storage",
    name: "storage",
    component: () => import("../views/WarehouseAccounting/StorageView.vue"),
    meta: { NavLink: "Склад" },
  },
  {
    path: "/warehouse-accounting/create-storage",
    name: "create-storage",
    component: () => import("../views/WarehouseAccounting/CreateStorageView.vue"),
    meta: { NavLink: "Создание склада" },
  },
    // СКЛАДЫ
    // ПЕРЕМЕЩЕНИЕ
  {
    path: "/warehouse-accounting/create-movement",
    name: "create-movement",
    component: () => import("../views/WarehouseAccounting/CreateMovement.vue"),
    meta: { NavLink: "Новое перемещение" },
  },
  {
    path: "/warehouse-accounting/move-list",
    name: "move-list",
    component: () => import("../views/WarehouseAccounting/MoveListView.vue"),
    meta: { NavLink: "Список перемещений" },
  },
    // ПЕРЕМЕЩЕНИЕ
    // ОПРИХОДОВАНИЕ
  {
    path: "/warehouse-accounting/create-oprih",
    name: "create-oprih",
    component: () => import("../views/WarehouseAccounting/CreateOprih.vue"),
    meta: { NavLink: "Новое оприходование" },
  },
  {
    path: "/warehouse-accounting/post-list",
    name: "post-list",
    component: () => import("../views/WarehouseAccounting/PostingListView.vue"),
    meta: { NavLink: "Список оприходований" },
  },
    // ОПРИХОДОВАНИЕ
    // СПИСАНИЕ
  {
    path: "/warehouse-accounting/create-writeoff",
    name: "create-writeoff",
    component: () => import("../views/WarehouseAccounting/CreateWriteoff.vue"),
    meta: { NavLink: "Новое списание" },
  },
  {
    path: "/warehouse-accounting/write-off",
    name: "write-off",
    component: () => import("../views/WarehouseAccounting/WriteOffListView.vue"),
    meta: { NavLink: "Список списаний" },
  },
    // СПИСАНИЕ
    // НАЛИЧИЕ НА СКЛАДЕ
  {
    path: "/warehouse-accounting/available-warehouse",
    name: "available-warehouse",
    component: () => import("../views/WarehouseAccounting/WarehouseAvailabilityView.vue"),
    meta: { NavLink: "Наличие на складе" },
  },
    // НАЛИЧИЕ НА СКЛАДЕ
    

  
  
  

  //PRODUCT-ACCOUNTING
  {
    path: "/products-accounting",
    name: "products-accounting",
    component: () => import("../views/ProductsAccounting/ProductListView.vue"),
    meta: { NavLink: "Учёт товаров" },
  },
    // СПИСОК ТОВАРОВ
  {
    path: "/products-accounting/product-list",
    name: "product-list",
    component: () => import("../views/ProductsAccounting/ProductListView.vue"),
    meta: { NavLink: "Список товаров" },
  },
  {
    path: "/products-accounting/product-edit",
    name: "product-edit",
    component: () => import("../views/ProductsAccounting/ProductEditView.vue"),
    meta: { NavLink: "Управление товаром" },
  },
  {
    path: "/products-accounting/product",
    name: "product",
    component: () => import("../views/ProductsAccounting/ProductView.vue"),
    meta: { NavLink: "Карточка товара" },
  },
    // СПИСОК ТОВАРОВ
    // ПЕЧАТЬ ШТРИХКОДОВ
  {
    path: "/products-accounting/barcode",
    name: "barcode",
    component: () => import("../views/ProductsAccounting/Barcode.vue"),
    meta: { NavLink: "Печать штрихкодов" },
  },
    // ПЕЧАТЬ ШТРИХКОДОВ
    // КАТЕГОРИИ
  {
    path: "/products-accounting/category-list",
    name: "category-list",
    component: () => import("../views/ProductsAccounting/CategoryListView.vue"),
    meta: { NavLink: "Категории" },
  },
    // КАТЕГОРИИ
    // СКИДКИ
  {
    path: "/products-accounting/discounts",
    name: "discounts",
    component: () => import("../views/ProductsAccounting/DiscountsListView.vue"),
    meta: { NavLink: "Список скидок" },
  },
    // СКИДКИ
    // ХАРАКТЕРИСТИКИ
  {
    path: "/products-accounting/characteristics",
    name: "characteristics",
    component: () => import("../views/ProductsAccounting/CharacteristicsView.vue"),
    meta: { NavLink: "Характеристики" },
  },
    // ХАРАКТЕРИСТИКИ






  // ПРОДАЖИ
  {
    path: "/sales/create-order",
    name: "create-order",
    component: () => import("../views/Sales/OrderView.vue"),
    meta: { NavLink: "Продажи" },
  },
  {
    path: "/sales/create-order",
    name: "create-order",
    component: () => import("../views/Sales/CreateOrderView.vue"),
    meta: { NavLink: "Создание заказа" },
  },
  {
    path: "/sales/order",
    name: "order",
    component: () => import("../views/Sales/OrderView.vue"),
    meta: { NavLink: "Заказ" },
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
