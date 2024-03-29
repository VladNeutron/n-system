import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

const routes = [
  // НАЧАЛЬНЫЕ СТРАНИЦЫ
  {
    path: "/",
    name: "home",
    component: HomeView,
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
    component: () =>
      import("../views/WarehouseAccounting/WarehouseListView.vue"),
    meta: { NavLink: "Складской учёт" },
    redirect: "/warehouse-accounting/warehouses",
  },
  // ИНВЕНТАРИЗАЦИЯ
  {
    path: "/warehouse-accounting/inventorization-list",
    name: "inventorization-list",
    component: () =>
      import("../views/WarehouseAccounting/InventoryListView.vue"),
    meta: { NavLink: "Список инвентаризаций" },
  },
  {
    path: "/warehouse-accounting/create-inv-list",
    name: "create-inv-list",
    component: () =>
      import("../views/WarehouseAccounting/CreateInventoryListView.vue"),
    meta: { NavLink: "Новая инвентаризация" },
  },
  {
    path: "/warehouse-accounting/edit-inv",
    name: "edit-inv",
    component: () =>
      import("../views/WarehouseAccounting/EditInventoryView.vue"),
    meta: { NavLink: "Редактирование инвентаризации" },
  },
  // ИНВЕНТАРИЗАЦИЯ
  // СКЛАДЫ
  {
    path: "/warehouse-accounting/warehouses",
    name: "warehouses",
    component: () =>
      import("../views/WarehouseAccounting/WarehouseListView.vue"),
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
    component: () =>
      import("../views/WarehouseAccounting/CreateStorageView.vue"),
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
  {
    path: "/warehouse-accounting/edit-move",
    name: "edit-move",
    component: () =>
      import("../views/WarehouseAccounting/EditMoveListView.vue"),
    meta: { NavLink: "Перемещение" },
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
  {
    path: "/warehouse-accounting/edit-posting",
    name: "edit-posting",
    component: () =>
      import("../views/WarehouseAccounting/EditPostingListView.vue"),
    meta: { NavLink: "Оприходование" },
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
    component: () =>
      import("../views/WarehouseAccounting/WriteOffListView.vue"),
    meta: { NavLink: "Список списаний" },
  },
  {
    path: "/warehouse-accounting/edit-writeoff",
    name: "edit-writeoff",
    component: () =>
      import("../views/WarehouseAccounting/EditWriteOffListView.vue"),
    meta: { NavLink: "Списание" },
  },
  // СПИСАНИЕ
  // НАЛИЧИЕ НА СКЛАДЕ
  {
    path: "/warehouse-accounting/available-warehouse",
    name: "available-warehouse",
    component: () =>
      import("../views/WarehouseAccounting/WarehouseAvailabilityView.vue"),
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
    component: () =>
      import("../views/ProductsAccounting/DiscountsListView.vue"),
    meta: { NavLink: "Список скидок" },
  },
  {
    path: "/products-accounting/discounts/discount-edit",
    name: "discount-edit",
    component: () =>
      import("../views/ProductsAccounting/EditDiscount.vue"),
    meta: { NavLink: "Скидка “8 марта”" },
  },
  {
    path: "/products-accounting/discounts/discount-create",
    name: "discount-create",
    component: () =>
      import("../views/ProductsAccounting/CreateDiscount.vue"),
    meta: { NavLink: "Создание скидки" },
  },
  // СКИДКИ
  // ХАРАКТЕРИСТИКИ
  {
    path: "/products-accounting/characteristics",
    name: "characteristics",
    component: () =>
      import("../views/ProductsAccounting/CharacteristicsView.vue"),
    meta: { NavLink: "Характеристики" },
  },
  // ХАРАКТЕРИСТИКИ

  // ПРОДАЖИ
  {
    path: "/sales",
    name: "sales-main",
    component: () => import("../views/Sales/OrderListView.vue"),
    meta: { NavLink: "Продажи" },
    redirect: "/sales/order-list",
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
  {
    path: "/sales/order-list",
    name: "order-list",
    component: () => import("../views/Sales/OrderListView.vue"),
    meta: { NavLink: "Список заказов" },
  },
  {
    path: "/sales/return-edit",
    name: "return-edit",
    component: () => import("../views/Sales/ReturnList.vue"),
    meta: { NavLink: "Редактирование возврата" },
  },
  {
    path: "/sales/return-list",
    name: "return-list",
    component: () => import("../views/Sales/Return.vue"),
    meta: { NavLink: "Список возвратов" },
  },
  {
    path: "/sales/create-return",
    name: "create-return",
    component: () => import("../views/Sales/CreateReturn.vue"),
    meta: { NavLink: "Создание возврата" },
  },
  {
    path: "/sales/client-list",
    name: "client-list",
    component: () => import("../views/Sales/ClientList.vue"),
    meta: { NavLink: "Клиентская база" },
  },
  {
    path: "/sales/application-list",
    name: "application-list",
    component: () => import("../views/Sales/ApplicationList.vue"),
    meta: { NavLink: "Список заявок" },
  },
  // ПРОДАЖИ

  // КАССА
  {
    path: "/cash-register",
    name: "cash-register",
    component: () => import("../views/CashRegister/CashStartUp.vue"),
    meta: { NavLink: "Касса" },
  },
  {
    path: "/cash-register/cash-register-sale",
    name: "cash-register-sale",
    component: () => import("../views/CashRegister/CashRegisterSale.vue"),
    meta: { NavLink: "Окно продажи" },
  },
  {
    path: "/cash-register/cash-register-return",
    name: "cash-register-return",
    component: () => import("../views/CashRegister/CashRegisterReturn.vue"),
    meta: { NavLink: "Окно возврата" },
  },
  {
    path: "/cash-register/cash-list",
    name: "cash-list",
    component: () => import("../views/CashRegister/CashListView.vue"),
    meta: { NavLink: "Список касс" },
  },
  {
    path: "/cash-register/checks-list",
    name: "checks-list",
    component: () => import("../views/CashRegister/ChecksList.vue"),
    meta: { NavLink: "Список чеков" },
  },
  {
    path: "/cash-register/deffered-checks",
    name: "deffered-checks",
    component: () => import("../views/CashRegister/DefferedChecks.vue"),
    meta: { NavLink: "Отложенные чеки" },
  },
  {
    path: "/cash-register/return-checks",
    name: "return-checks",
    component: () => import("../views/CashRegister/ReturnChecksList.vue"),
    meta: { NavLink: "Список возвратов" },
  },
  {
    path: "/cash-register/cash-startup",
    name: "cash-startup",
    component: () => import("../views/CashRegister/CashStartUp.vue"),
    meta: { NavLink: "Стартовое окно" },
  },
  {
    path: "/cash-register/sales-report",
    name: "sales-report",
    component: () => import("../views/CashRegister/SalesReport.vue"),
    meta: { NavLink: "Отчеты по продажам" },
  },
  // КАССА

  //АНАЛИТИКА
  {
    path: "/analytics",
    name: "analytics",
    component: () => import("../views/Analytics/analytics.vue"),
    meta: { NavLink: "Аналитика" },
  },
  {
    path: "/analytics/revenue-profit-avgcheck",
    name: "revenue-profit",
    component: () => import("../views/Analytics/RevenueGraph.vue"),
    meta: { NavLink: "Выручка - Прибыль - Средний чек" },
  },
  {
    path: "/analytics/best-products",
    name: "best-products",
    component: () => import("../views/Analytics/BestProductsForPeriod.vue"),
    meta: { NavLink: "Лучшие товары за период" },
  },
  {
    path: "/analytics/best-shops",
    name: "best-shops",
    component: () => import("../views/Analytics/BestShopsForPeriod.vue"),
    meta: { NavLink: "Лучшие магазины за период" },
  },
  {
    path: "/analytics/remainder-storage",
    name: "remainder-storage",
    component: () => import("../views/Analytics/ProductsInStorage.vue"),
    meta: { NavLink: "Остатки товаров на складе" },
  },
  {
    path: "/analytics/revenue-expenses-income",
    name: "revenue-expenses-income",
    component: () => import("../views/Analytics/ExpensesGraph.vue"),
    meta: { NavLink: "Доходы - Расходы - Прибыль" },
  },
  {
    path: "/analytics/abc-analysis",
    name: "abc-analysis",
    component: () => import("../views/Analytics/ABCAnalysis.vue"),
    meta: { NavLink: "ABC анализ" },
  },
  {
    path: "/analytics/abc-analysis/abc-product",
    name: "abc-product",
    component: () => import("../views/Analytics/ABCProduct.vue"),
    meta: { NavLink: "Куртка зеленая" },
  },
  {
    path: "/analytics/revenue-profit-avgcheck/report",
    name: "rpa-report",
    component: () => import("../views/Analytics/DRPReport.vue"),
    meta: { NavLink: "Отчет Доходы - Расходы - Прибыль" },
  },

  //АНАЛИТИКА

  // ЗАКУПКИ
  {
    path: "/purchases",
    name: "purchases",
    component: () => import("../views/Purchases/purchases.vue"),
    meta: { NavLink: "Закупки" },
  },
  {
    path: "/purchases/income-list",
    name: "income-list",
    component: () => import("../views/Purchases/IncomeList.vue"),
    meta: { NavLink: "Поступления" },
  },
  {
    path: "/purchases/create-income",
    name: "create-income",
    component: () => import("../views/Purchases/CreateIncome.vue"),
    meta: { NavLink: "Создание поступления" },
  },
  {
    path: "/purchases/edit-income",
    name: "edit-income",
    component: () => import("../views/Purchases/EditIncome.vue"),
    meta: { NavLink: "Поступление №" },
  },
  {
    path: "/purchases/return-supplier-list",
    name: "return-supplier-list",
    component: () => import("../views/Purchases/ReturnSupplierList.vue"),
    meta: { NavLink: "Возвраты поставщикам" },
  },
  {
    path: "/purchases/create-supplier-return",
    name: "create-supplier-return",
    component: () => import("../views/Purchases/CreateReturnSupplier.vue"),
    meta: { NavLink: "Создание возврата поставщикам" },
  },
  {
    path: "/purchases/edit-supplier-return",
    name: "edit-supplier-return",
    component: () => import("../views/Purchases/EditReturnSupplier.vue"),
    meta: { NavLink: "Возврат №" },
  },

  // ЗАКУПКИ

  // БУХГАЛТЕРИЯ
  {
    path: "/accounting",
    name: "accounting",
    component: () => import("../views/Accounting/ContractorList.vue"),
    meta: { NavLink: "Бухгалтерия" },
  },
  {
    path: "/accounting/contractor-list",
    name: "contractor-list",
    component: () => import("../views/Accounting/ContractorList.vue"),
    meta: { NavLink: "Список контрагентов" },
  },
  {
    path: "/accounting/employees-list",
    name: "employees-list",
    component: () => import("../views/Accounting/EmployeesList.vue"),
    meta: { NavLink: "Список сотрудников" },
  },
  {
    path: "/accounting/property-list",
    name: "property-list",
    component: () => import("../views/Accounting/PropertyList.vue"),
    meta: { NavLink: "Список имуществ" },
  },
  {
    path: "/accounting/position-list",
    name: "position-list",
    component: () => import("../views/Accounting/PositionList.vue"),
    meta: { NavLink: "Список должностей" },
  },
  {
    path: "/accounting/new-contractor",
    name: "new-contractor",
    component: () => import("../views/Accounting/ContractorInfo.vue"),
    meta: { NavLink: "Информация о контрагенте" },
  },
  {
    path: "/accounting/edit-contractor",
    name: "edit-contractor",
    component: () => import("../views/Accounting/EditContractor.vue"),
    meta: { NavLink: "Редактирование контрагента" },
  },
  {
    path: "/accounting/edit-company",
    name: "accounting-edit-company",
    component: () => import("../views/EditOrganization.vue"),
    meta: { NavLink: "Информация о компании" },
  },
  {
    path: "/accounting/documents",
    name: "documents",
    component: () => import("../views/Accounting/AccDocs.vue"),
    meta: { NavLink: "Документы" },
  },
  {
    path: "/accounting/documents/invoice-list",
    name: "invoice-list",
    component: () => import("../views/Accounting/InvoiceList.vue"),
    meta: { NavLink: "Счет-фактуры" },
  },
  {
    path: "/accounting/documents/create-invoice",
    name: "create-invoice",
    component: () => import("../views/Accounting/CreateInvoice.vue"),
    meta: { NavLink: "Создание счет-фактуры" },
  },
  {
    path: "/accounting/documents/accounts-list",
    name: "accounts-list",
    component: () => import("../views/Accounting/AccountsList.vue"),
    meta: { NavLink: "Счета" },
  },
  {
    path: "/accounting/documents/create-account",
    name: "create-account",
    component: () => import("../views/Accounting/CreateAccount.vue"),
    meta: { NavLink: "Создание счета" },
  },
  {
    path: "/accounting/documents/acts-list",
    name: "acts-list",
    component: () => import("../views/Accounting/ActsList.vue"),
    meta: { NavLink: "Акты" },
  },
  {
    path: "/accounting/documents/create-act",
    name: "create-act",
    component: () => import("../views/Accounting/CreateAct.vue"),
    meta: { NavLink: "Создание акта" },
  },
  {
    path: "/accounting/documents/edit-invoice",
    name: "edit-invoice",
    component: () => import("../views/Accounting/EditInvoice.vue"),
    meta: { NavLink: "Счет-фактура №" },
  },
  {
    path: "/accounting/documents/edit-account",
    name: "edit-account",
    component: () => import("../views/Accounting/EditAccounts.vue"),
    meta: { NavLink: "Счет №" },
  },
  {
    path: "/accounting/documents/edit-act",
    name: "edit-act",
    component: () => import("../views/Accounting/EditAct.vue"),
    meta: { NavLink: "Акт №" },
  },
  {
    path: "/accounting/documents/implementation-list",
    name: "implementation-list",
    component: () => import("../views/Accounting/ImplementationList.vue"),
    meta: { NavLink: "Реализации" },
  },
  {
    path: "/accounting/documents/create-implementation",
    name: "create-implementation",
    component: () => import("../views/Accounting/CreateImplementation.vue"),
    meta: { NavLink: "Создание реализации" },
  },
  {
    path: "/accounting/documents/edit-implementation",
    name: "edit-implementation",
    component: () => import("../views/Accounting/EditImplementation.vue"),
    meta: { NavLink: "Редактирование реализации" },
  },
  // БУХГАЛТЕРИЯ

  // МЕНЕДЖМЕНТ
  {
    path: "/management",
    name: "management",
    component: () => import("../views/Management/WorkSpace.vue"),
    meta: { NavLink: "Менеджмет" },
  },
  {
    path: "/management/deal-list",
    name: "deal-list",
    component: () => import("../views/Management/DealList.vue"),
    meta: { NavLink: "Список сделок" },
  },
  {
    path: "/management/workspace",
    name: "management-workspace",
    component: () => import("../views/Management/WorkSpace.vue"),
    meta: { NavLink: "Рабочая область" },
  },
  {
    path: "/management/task-list",
    name: "task-list",
    component: () => import("../views/Management/TaskList.vue"),
    meta: { NavLink: "Список задач" },
  },
  {
    path: "/management/calendar",
    name: "management-calendar",
    component: () => import("../views/Management/WorkCalendar.vue"),
    meta: { NavLink: "Рабочий календарь" },
  },
  // МЕНЕДЖМЕНТ

  // НАСТРОЙКИ
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings/PersonalProfile.vue"),
    meta: { NavLink: "Настройки" },
  },
  {
    path: "/settings/profile",
    name: "profile",
    component: () => import("../views/Settings/PersonalProfile.vue"),
    meta: { NavLink: "Личный профиль" },
  },
  {
    path: "/settings/users",
    name: "users",
    component: () => import("../views/Settings/UsersList.vue"),
    meta: { NavLink: "Список пользователей" },
  },
  {
    path: "/settings/roles",
    name: "roles",
    component: () => import("../views/Settings/RoleList.vue"),
    meta: { NavLink: "Список ролей" },
  },
  {
    path: "/settings/user-logs",
    name: "user-logs",
    component: () => import("../views/Settings/UserLogs.vue"),
    meta: { NavLink: "Логи пользователей" },
  },
  {
    path: "/settings/payment-methods",
    name: "payment-methods",
    component: () => import("../views/Settings/PaymentMethods.vue"),
    meta: { NavLink: "Методы оплаты" },
  },
  // НАСТРОЙКИ

  // ЭДО
  {
    path: "/edo",
    name: "edo",
    component: () => import("../views/Edo/EdoDocumentsList.vue"),
    meta: { NavLink: "ЭДО" },
  },
  {
    path: "/edo/edo-documents-list",
    name: "edo-documents-list",
    component: () => import("../views/Edo/EdoDocumentsList.vue"),
    meta: { NavLink: "Список документов" },
  },
  {
    path: "/edo/edo-document",
    name: "edo-document",
    component: () => import("../views/Edo/EdoDocument.vue"),
    meta: { NavLink: "Документ" },
  },
  // ЭДО

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes,
});

export default router;
