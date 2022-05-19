<template>
  <aside
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <i
        class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a class="navbar-brand m-0" href="/">
        <img
          src="../assets/img/NS-Logo.svg"
          class="navbar-brand-img h-100"
          alt="main_logo"
        />
        <span>
          <img
            class="pt-1"
            style="height: 2.083vw; width: 5.729vw; margin-left: 10px"
            src="@/assets/img/test__logo.svg"
          />
        </span>
        <!-- <span class="ms-1 font-weight-bold">Neutron System</span> -->
        <!-- <span class="ms-1 font-weight-bold"></span> -->
      </a>
    </div>
    <hr class="horizontal dark mt-0" />

    <div
      class="collapse navbar-collapse w-auto h-auto max-height-vh-100 h-100"
      id="sidenav-collapse-main"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link">
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
            >
              <img src="@/assets/img/NavMain.svg" alt="" />
            </div>

            <span class="nav-link-text ms-1">Главная</span>
          </router-link>
        </li>

        <!-- <li class="nav-item mt-3">
        <h6 class="ps-4  ms-2 text-uppercase text-xs font-weight-bolder opacity-6">PAGES</h6>
      </li> -->

        <!-- Продажи -->
        <li class="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#Sales"
            class="nav-link"
            aria-controls="Sales"
            role="button"
            aria-expanded="false"
          >
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
            >
              <img src="@/assets/img/NavSales.svg" alt="" />
            </div>

            <span class="nav-link-text ms-1">Продажи</span>
          </a>

          <div class="collapse" id="Sales">
            <ul class="nav ms-4 ps-3">
              <li class="nav-item">
                <router-link :to="{ name: 'order-list' }" class="nav-link">
                  <span class="sidenav-mini-icon"> З </span>
                  <span class="sidenav-normal"
                    >Заказы <b class="caret"></b
                  ></span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'return-list' }" class="nav-link">
                  <span class="sidenav-mini-icon"> В </span>
                  <span class="sidenav-normal"
                    >Возвраты <b class="caret"></b
                  ></span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'client-list' }" class="nav-link">
                  <span class="sidenav-mini-icon"> К </span>
                  <span class="sidenav-normal"
                    >Клиентская база <b class="caret"></b
                  ></span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  :to="{ name: 'application-list' }"
                  class="nav-link"
                >
                  <span class="sidenav-mini-icon"> О </span>
                  <span class="sidenav-normal"
                    >Обратная связь <b class="caret"></b
                  ></span>
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <!-- СКЛАДСКОЙ УЧЁТ -->
        <li class="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#pagesExamples"
            class="nav-link"
            aria-controls="pagesExamples"
            role="button"
            aria-expanded="false"
          >
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
            >
              <img src="@/assets/img/NavWarehouse.svg" alt="" />
            </div>

            <span class="nav-link-text ms-1">Складской учёт</span>
          </a>

          <div class="collapse" id="pagesExamples">
            <ul class="nav ms-4 ps-3">
              <li class="nav-item">
                <router-link :to="{ name: 'warehouses' }" class="nav-link">
                  <span class="sidenav-mini-icon"> С </span>
                  <span class="sidenav-normal"
                    >Склады <b class="caret"></b
                  ></span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  :to="{ name: 'inventorization-list' }"
                  class="nav-link"
                >
                  <span class="sidenav-mini-icon"> И </span>
                  <span class="sidenav-normal"
                    >Инвентаризация <b class="caret"></b
                  ></span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  :to="{ name: 'available-warehouse' }"
                  class="nav-link"
                >
                  <span class="sidenav-mini-icon"> Н </span>
                  <span class="sidenav-normal"
                    >Наличие на складе <b class="caret"></b
                  ></span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'post-list' }" class="nav-link">
                  <span class="sidenav-mini-icon"> О </span>
                  <span class="sidenav-normal"
                    >Оприходование товаров <b class="caret"></b
                  ></span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'move-list' }" class="nav-link">
                  <span class="sidenav-mini-icon"> П </span>
                  <span class="sidenav-normal"
                    >Перемещение товаров <b class="caret"></b
                  ></span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'write-off' }" class="nav-link">
                  <span class="sidenav-mini-icon"> С </span>
                  <span class="sidenav-normal"
                    >Списание товаров <b class="caret"></b
                  ></span>
                </router-link>
              </li>

              <!-- <li class="nav-item ">
      
      
      
              <a class="nav-link " data-bs-toggle="collapse" aria-expanded="false" href="#usersExample">
                <span class="sidenav-mini-icon"> U </span>
                <span class="sidenav-normal">Users  <b class="caret"></b></span>
              </a>
      
              <div class="collapse " id="usersExample">
                <ul class="nav nav-sm flex-column">
      
                  <li class="nav-item">
      
                    <a class="nav-link " href="./pages/users/reports.html">
                      <span class="sidenav-mini-icon text-xs"> R </span>
                      <span class="sidenav-normal">Reports </span>
                    </a>
      
                  </li>
      
                  <li class="nav-item">
      
                    <a class="nav-link " href="./pages/users/new-user.html">
                      <span class="sidenav-mini-icon text-xs"> N </span>
                      <span class="sidenav-normal">New User </span>
                    </a>
      
                  </li>
      
                </ul>
              </div>
      
      
            </li> -->
            </ul>
          </div>
        </li>

        <!-- УЧЁТ ТОВАРОВ -->
        <li class="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#applicationsExamples"
            class="nav-link"
            aria-controls="applicationsExamples"
            role="button"
            aria-expanded="false"
          >
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
            >
              <img src="@/assets/img/ItemsAccount.svg" alt="" />
            </div>

            <span class="nav-link-text ms-1">Учёт товаров</span>
          </a>

          <div class="collapse" id="applicationsExamples">
            <ul class="nav ms-4 ps-3">
              <li class="nav-item">
                <router-link :to="{ name: 'product-list' }" class="nav-link">
                  <span class="sidenav-mini-icon"> С </span>
                  <span class="sidenav-normal">Список товаров </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'barcode' }" class="nav-link">
                  <span class="sidenav-mini-icon"> П </span>
                  <span class="sidenav-normal">Печать штрихкодов </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'category-list' }" class="nav-link">
                  <span class="sidenav-mini-icon"> К </span>
                  <span class="sidenav-normal">Категории </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'discounts' }" class="nav-link">
                  <span class="sidenav-mini-icon"> С </span>
                  <span class="sidenav-normal">Скидки и акции </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'characteristics' }" class="nav-link">
                  <span class="sidenav-mini-icon"> Х </span>
                  <span class="sidenav-normal">Характеристики </span>
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <!-- КАССА -->
        <li class="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#cash-register"
            class="nav-link"
            aria-controls="cash-register"
            role="button"
            aria-expanded="false"
          >
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
            >
              <img src="@/assets/img/NavCashRegister.svg" alt="" />
            </div>

            <span class="nav-link-text ms-1">Касса</span>
          </a>

          <div class="collapse" id="cash-register">
            <ul class="nav ms-4 ps-3">
              <li class="nav-item">
                <router-link :to="{ name: 'cash-startup' }" class="nav-link">
                  <span class="sidenav-mini-icon"> О </span>
                  <span class="sidenav-normal">Оформить продажу </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'cash-list' }" class="nav-link">
                  <span class="sidenav-mini-icon"> С </span>
                  <span class="sidenav-normal">Список касс </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'sales-report' }" class="nav-link">
                  <span class="sidenav-mini-icon"> П </span>
                  <span class="sidenav-normal">Продажи по кассе </span>
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <!-- Закупки -->
        <li class="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#Purchases"
            class="nav-link"
            aria-controls="Purchases"
            role="button"
            aria-expanded="false"
          >
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
            >
              <img src="@/assets/img/NavPurchases.svg" alt="" />
            </div>

            <span class="nav-link-text ms-1">Закупки</span>
          </a>

          <div class="collapse" id="Purchases">
            <ul class="nav ms-4 ps-3">
              <li class="nav-item">
                <router-link :to="{ name: 'income-list' }" class="nav-link">
                  <span class="sidenav-mini-icon"> П </span>
                  <span class="sidenav-normal">Поступления </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  :to="{ name: 'return-supplier-list' }"
                  class="nav-link"
                >
                  <span class="sidenav-mini-icon"> В </span>
                  <span class="sidenav-normal">Возвраты поставщикам </span>
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <!-- Аналитика -->
        <li class="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#Analitics"
            class="nav-link"
            aria-controls="Analitics"
            role="button"
            aria-expanded="false"
          >
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
            >
              <img src="@/assets/img/NavAnalitics.svg" alt="" />
            </div>

            <span class="nav-link-text ms-1">Аналитика</span>
          </a>

          <div class="collapse" id="Analitics">
            <ul class="nav ms-4 ps-3">
              <li class="nav-item">
                <router-link :to="{ name: 'best-products' }" class="nav-link">
                  <span class="sidenav-mini-icon"> Л </span>
                  <span class="sidenav-normal">Лучшие товары за период </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  :to="{ name: 'remainder-storage' }"
                  class="nav-link"
                >
                  <span class="sidenav-mini-icon"> О </span>
                  <span class="sidenav-normal">Остатки товаров на складе </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'revenue-profit' }" class="nav-link">
                  <span class="sidenav-mini-icon"> В </span>
                  <span class="sidenav-normal"
                    >Выручка/Прибыль/Средний чек
                  </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'best-shops' }" class="nav-link">
                  <span class="sidenav-mini-icon"> Л </span>
                  <span class="sidenav-normal">Лучшие магазины </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'abc-analysis' }" class="nav-link">
                  <span class="sidenav-mini-icon"> A </span>
                  <span class="sidenav-normal">ABC-анализ </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  :to="{ name: 'revenue-expenses-income' }"
                  class="nav-link"
                >
                  <span class="sidenav-mini-icon"> Д </span>
                  <span class="sidenav-normal">Доходы/Расходы/Прибыль </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  :to="{ name: 'revenue-expenses-income' }"
                  class="nav-link"
                >
                  <span class="sidenav-mini-icon"> О </span>
                  <span class="sidenav-normal">Отчёт Доходы-Расходы </span>
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <!-- Бухгалтерия -->
        <li class="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#Accounting"
            class="nav-link"
            aria-controls="Accounting"
            role="button"
            aria-expanded="false"
          >
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
            >
              <img src="@/assets/img/NavAccounting.svg" alt="" />
            </div>

            <span class="nav-link-text ms-1">Бухгалтерия</span>
          </a>

          <div class="collapse" id="Accounting">
            <ul class="nav ms-4 ps-3">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'accounting-edit-company' }"
                  class="nav-link"
                >
                  <span class="sidenav-mini-icon"> К </span>
                  <span class="sidenav-normal">Компания</span>
                </router-link>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  href="#employees"
                >
                  <span class="sidenav-mini-icon"> К </span>
                  <span class="sidenav-normal"
                    >Кадры <b class="caret"></b
                  ></span>
                </a>

                <div class="collapse" id="employees">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link
                        :to="{ name: 'employees-list' }"
                        class="nav-link"
                      >
                        <span class="sidenav-mini-icon"> С </span>
                        <span class="sidenav-normal">Список сотрудников</span>
                      </router-link>
                    </li>

                    <li class="nav-item">
                      <router-link
                        :to="{ name: 'position-list' }"
                        class="nav-link"
                      >
                        <span class="sidenav-mini-icon text-xs"> Д </span>
                        <span class="sidenav-normal">Список должностей</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'contractor-list' }" class="nav-link">
                  <span class="sidenav-mini-icon"> К </span>
                  <span class="sidenav-normal">Контрагенты </span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link :to="{ name: 'property-list' }" class="nav-link">
                  <span class="sidenav-mini-icon"> И </span>
                  <span class="sidenav-normal">Имущество </span>
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <!-- <li class="nav-item">
      
      
        <a data-bs-toggle="collapse" href="#ecommerceExamples" class="nav-link " aria-controls="ecommerceExamples" role="button" aria-expanded="false">
      
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2">
              <svg class="text-dark" width="12px" height="12px" viewBox="0 0 42 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>basket</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-1869.000000, -741.000000)" fill="#FFFFFF" fill-rule="nonzero"> <g transform="translate(1716.000000, 291.000000)"> <g id="basket" transform="translate(153.000000, 450.000000)"> <path class="color-background" d="M34.080375,13.125 L27.3748125,1.9490625 C27.1377583,1.53795093 26.6972449,1.28682264 26.222716,1.29218729 C25.748187,1.29772591 25.3135593,1.55890827 25.0860125,1.97535742 C24.8584658,2.39180657 24.8734447,2.89865282 25.1251875,3.3009375 L31.019625,13.125 L10.980375,13.125 L16.8748125,3.3009375 C17.1265553,2.89865282 17.1415342,2.39180657 16.9139875,1.97535742 C16.6864407,1.55890827 16.251813,1.29772591 15.777284,1.29218729 C15.3027551,1.28682264 14.8622417,1.53795093 14.6251875,1.9490625 L7.919625,13.125 L0,13.125 L0,18.375 L42,18.375 L42,13.125 L34.080375,13.125 Z" opacity="0.595377604"></path> <path class="color-background" d="M3.9375,21 L3.9375,38.0625 C3.9375,40.9619949 6.28800506,43.3125 9.1875,43.3125 L32.8125,43.3125 C35.7119949,43.3125 38.0625,40.9619949 38.0625,38.0625 L38.0625,21 L3.9375,21 Z M14.4375,36.75 L11.8125,36.75 L11.8125,26.25 L14.4375,26.25 L14.4375,36.75 Z M22.3125,36.75 L19.6875,36.75 L19.6875,26.25 L22.3125,26.25 L22.3125,36.75 Z M30.1875,36.75 L27.5625,36.75 L27.5625,26.25 L30.1875,26.25 L30.1875,36.75 Z"></path> </g> </g> </g> </g> </svg>
            </div>
      
          <span class="nav-link-text ms-1">Ecommerce</span>
        </a>
      
        <div class="collapse " id="ecommerceExamples">
          <ul class="nav ms-4 ps-3">
      
            <li class="nav-item ">
      
      
      
      
              <a class="nav-link " href="./ecommerce/overview.html">
                <span class="sidenav-mini-icon"> O </span>
                <span class="sidenav-normal">Overview </span>
              </a>
      
      
      
            </li>
      
      
            <li class="nav-item ">
      
      
      
              <a class="nav-link " data-bs-toggle="collapse" aria-expanded="false" href="#productsExample">
                <span class="sidenav-mini-icon"> P </span>
                <span class="sidenav-normal">Products  <b class="caret"></b></span>
              </a>
      
              <div class="collapse " id="productsExample">
                <ul class="nav nav-sm flex-column">
      
                  <li class="nav-item">
      
                    <a class="nav-link " href="./ecommerce/products/new-product.html">
                      <span class="sidenav-mini-icon text-xs"> N </span>
                      <span class="sidenav-normal">New Product </span>
                    </a>
      
                  </li>
      
                  <li class="nav-item">
      
                    <a class="nav-link " href="./ecommerce/products/edit-product.html">
                      <span class="sidenav-mini-icon text-xs"> E </span>
                      <span class="sidenav-normal">Edit Product </span>
                    </a>
      
                  </li>
      
                  <li class="nav-item">
      
                    <a class="nav-link " href="./ecommerce/products/product-page.html">
                      <span class="sidenav-mini-icon text-xs"> P </span>
                      <span class="sidenav-normal">Product Page </span>
                    </a>
      
                  </li>
      
                  <li class="nav-item">
      
                    <a class="nav-link " href="./ecommerce/products/products-list.html">
                      <span class="sidenav-mini-icon text-xs"> P </span>
                      <span class="sidenav-normal">Products List </span>
                    </a>
      
                  </li>
      
                </ul>
              </div>
      
      
            </li>
      
      
            <li class="nav-item ">
      
      
      
              <a class="nav-link " data-bs-toggle="collapse" aria-expanded="false" href="#ordersExample">
                <span class="sidenav-mini-icon"> O </span>
                <span class="sidenav-normal">Orders  <b class="caret"></b></span>
              </a>
      
              <div class="collapse " id="ordersExample">
                <ul class="nav nav-sm flex-column">
      
                  <li class="nav-item">
      
                    <a class="nav-link " href="./ecommerce/orders/list.html">
                      <span class="sidenav-mini-icon text-xs"> O </span>
                      <span class="sidenav-normal">Order List </span>
                    </a>
      
                  </li>
      
                  <li class="nav-item">
      
                    <a class="nav-link " href="./ecommerce/orders/details.html">
                      <span class="sidenav-mini-icon text-xs"> O </span>
                      <span class="sidenav-normal">Order Details </span>
                    </a>
      
                  </li>
      
                </ul>
              </div>
      
      
            </li>
      
      
            <li class="nav-item ">
      
      
      
      
              <a class="nav-link " href="./ecommerce/referral.html">
                <span class="sidenav-mini-icon"> R </span>
                <span class="sidenav-normal">Referral </span>
              </a>
      
      
      
            </li>
      
      
        </ul>
      </div>
      
      
      </li> -->
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  mounted() {
    var win = navigator.platform.indexOf("Win") > -1;
    if (win && document.querySelector("#sidenav-scrollbar")) {
      var options = {
        damping: "0.5",
      };
      Scrollbar.init(document.querySelector("#sidenav-scrollbar"), options);
    }
    function areaExpFalse(el) {
      // console.log(el.target.parentElement.parentElement.parentElement.previousElementSibling)
      el.target.parentElement.parentElement.parentElement.previousElementSibling.ariaExpanded = false;
    }
    document.querySelectorAll(".nav-link").forEach((el) => {
      el.addEventListener("click", areaExpFalse.bind(el));
    });
  },
};
</script>

<style scoped>
.sidenav-normal {
  white-space: break-spaces;
}
.nav-link {
  text-align: left;
}
</style>
