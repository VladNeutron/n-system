<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Список заказов </template>
            <template v-slot:description>
              Внесите изменения и не забудьте нажать “Сохранить”
            </template>
          </lists-header>
          <!-- <div class="page__name d-flex align-items-center ms-4">
            <div class="page__name-title text-start">
              <h3>Список заказов</h3>
              <p class="mb-0">Внесите изменения и не забудьте нажать “Сохранить”</p>
            </div>
          </div> -->
          <div class="card py-4 main__card">
            <div
              class="d-flex justify-content-between align-items-center mx-4 mb-2"
            >
              <button
                class="btn bg-gradient-dark mb-0"
                style="
                  font-size: 14px;
                  font-weight: 600;
                  display: flex;
                  align-items: center;
                  height: 40px;
                "
                onclick="window.location.href = '/sales/create-order'"
              >
                <img
                  src="@/assets/img/whtplus.svg"
                  alt=""
                  style="margin-right: 10px"
                />
                Новый заказ
              </button>
              <div
                class="table__inputs d-flex gap-3 align-content-center align-items-center"
              >
                <list-search @searchFilter="(a) => search = a"></list-search>
                <print-button></print-button>
                <download-button></download-button>
                <filter-button class="mb-0"></filter-button>
              </div>
            </div>
            <div class="page__table">
              <div class="table-wrapper">
                <table
                  class="table table-hover text-wrap text-start table-striped"
                  id="table_id"
                >
                  <thead>
                    <tr class="text-start">
                      <th
                        scope="col"
                        class="th__col"
                        style="width: 1px;"
                      ></th>
                      <th scope="col" class="th__col">№</th>
                      <th scope="col" class="th__col">№ Заказа</th>
                      <th scope="col" class="th__col">Дата</th>
                      <th scope="col" class="th__col">Склад</th>
                      <th scope="col" class="th__col">Ответственный</th>
                      <th scope="col" class="th__col">Статус</th>
                      <th scope="col" class="th__col">Клиент</th>
                      <th scope="col" class="th__col">Тип</th>
                      <th scope="col" class="th__col">Кол-во</th>
                      <th scope="col" class="th__col">Сумма</th>

                      <th
                        scope="col"
                        class="th__col"
                        style="padding-right: 27px"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(order,ind) of paginationList" :key="order.id">
                      <th scope="row" style="">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                        </div>
                      </th>
                      <th>{{ order.listNumber + 1 }}</th>
                      <td>{{ order.id }}</td>
                      <td>{{ order.date }}</td>
                      <td>{{ order.warehouse }}</td>

                      <td>{{ order.responsible }}</td>
                      <td>
                        <div
                          class="btn mb-0 w-100"
                          v-text="normalizeStatusName(order.status)"
                          :class="getClass(order.status)"
                        ></div>
                      </td>
                      <td>{{ order.client }}</td>
                      <td>{{ order.type }}</td>
                      <td>{{ order.amount }}</td>
                      <td>{{ order.sum }}</td>
                      <td
                        
                        style="border-left: 0; padding-right: 27px"
                      >
                      <div class="dropdown">
                        <img
                          src="@/assets/img/dots.svg"
                          style="width: 1.563vw; cursor: pointer"
                          alt=""
                        />
                        <div :class="['dropdown-content', {'dropdown__content__top': ind >= paginationList.length - 2}]">
                          <a href="/sales/order">Редактировать</a>
                          <hr />
                          <a
                            style="cursor: pointer"
                            data-bs-toggle="modal"
                            data-bs-target="#DeleteInv"
                            >Удалить</a
                          >
                        </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <pagination-component :filteredArr="filteredOrders" :strAmount="paginationAmount" @PaginationReload="reloadPagination"></pagination-component>
          </div>
        </div>
      </div>
    </div>
  </main>
  <the-filter :orders="orders" @no-filter="cancelFilters">
    <div class="filters__period__flex">
      <div class="filter__name__standart">Выберите период</div>
      <div class="reset__date">Сбросить период</div>
    </div>
    <div class="filters__period">
      <div class="form-group">
        <input
          class="form-control period__s"
          type="date"
          id="example-date-input"
        />
      </div>
      <div>
        <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
      </div>
      <div class="form-group">
        <input
          class="form-control period__s"
          type="date"
          id="example-date-input"
        />
      </div>
    </div>
    <p class="text-start my-2 fw-bold" for="Статус">Статус заказа</p>
    <div class="d-flex flex-wrap">
      <div class="cat" v-for="status of orderStatusList" :key="status">
        <label>
          <input
            type="checkbox"
            :value="status"
            v-model="filterStatusSelect"
          /><span v-text="normalizeStatusName(status)"></span>
        </label>
      </div>
    </div>
    <p class="text-start my-2 fw-bold" for="Склад">Склад</p>
    <select class="form-select" v-model="filterWarehouse">
      <option value="" disabled>Выберите склад</option>
      <option v-for="warehouse of orderWarehouseList" :key="warehouse">
        {{ warehouse }}
      </option>
      <option value=""></option>
    </select>
    <p class="text-start my-2 fw-bold" for="Ответственный">Ответственный</p>
    <select class="form-select" v-model="filterResponsible">
      <option value="" disabled>Выберите ответственного</option>
      <option v-for="responsible of orderResponsibleList" :key="responsible">
        {{ responsible }}
      </option>
      <option value=""></option>
    </select>
    <p class="text-start my-2 fw-bold" for="Клиент">Клиент</p>
    <select class="form-select" v-model="filterClient">
      <option value="" disabled>Выберите клиента</option>
      <option v-for="client of orderClientList" :key="client">
        {{ client }}
      </option>
      <option value=""></option>
    </select>
    <p class="text-start my-2 fw-bold" for="Тип заказа">Тип заказа</p>
    <select class="form-select" v-model="filterOrderType">
      <option value="" disabled>Выберите тип заказа</option>
      <option v-for="orderType of orderTypeList" :key="orderType">
        {{ orderType }}
      </option>
      <option value=""></option>
    </select>
  </the-filter>
  <delete-modal
    :title="'заказа'"
    :text="`документ  &quot;Заказ №12132145&quot;`"
  ></delete-modal>
  <commentary></commentary>
</template>

<script>
import Filter from "@/components/Filters.vue";
import FilterButton from "@/components/buttons/FiltersButton.vue";
import PaginationComponent from '@/components/Pagination/PaginationComponent.vue';
import Commentary from '@/components/Commentary.vue';
export default {
  data() {
    return {
      orders: [
        {
          id: 12132145,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "new",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 1213214123,
          date: "11 ноя, 2021 19:23",
          warehouse: "где-то-там",
          responsible: "Тихонова А.Р",
          status: "in-process",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 32132312,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "canceled",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 54354536,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12312556,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "assembly",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 442142132,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "ready",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 5426534654,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 12,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "new",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 13,
          date: "11 ноя, 2021 19:23",
          warehouse: "где-то-там",
          responsible: "Тихонова А.Р",
          status: "in-process",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 14,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "canceled",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 15,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 16,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "assembly",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 17,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "ready",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 18,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 19,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "new",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 20,
          date: "11 ноя, 2021 19:23",
          warehouse: "где-то-там",
          responsible: "Тихонова А.Р",
          status: "in-process",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 21,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "canceled",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 22,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 23,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "assembly",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 24,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "ready",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 25,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 26,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "new",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 27,
          date: "11 ноя, 2021 19:23",
          warehouse: "где-то-там",
          responsible: "Тихонова А.Р",
          status: "in-process",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 28,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "canceled",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 29,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 30,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "assembly",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 31,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "ready",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 32,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 33,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "new",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 34,
          date: "11 ноя, 2021 19:23",
          warehouse: "где-то-там",
          responsible: "Тихонова А.Р",
          status: "in-process",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 35,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "canceled",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 36,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 37,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "assembly",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 38,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "ready",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 39,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 40,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "new",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 41,
          date: "11 ноя, 2021 19:23",
          warehouse: "где-то-там",
          responsible: "Тихонова А.Р",
          status: "in-process",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 42,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "canceled",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 43,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 44,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "assembly",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 45,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "ready",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 46,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 47,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "new",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 48,
          date: "11 ноя, 2021 19:23",
          warehouse: "где-то-там",
          responsible: "Тихонова А.Р",
          status: "in-process",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 49,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "canceled",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 50,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 51,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "assembly",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 52,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "ready",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 53,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 54,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "new",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 55,
          date: "11 ноя, 2021 19:23",
          warehouse: "где-то-там",
          responsible: "Тихонова А.Р",
          status: "in-process",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 56,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "canceled",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 57,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 58,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "assembly",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 59,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "ready",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 60,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 61,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 62,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "new",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 63,
          date: "11 ноя, 2021 19:23",
          warehouse: "где-то-там",
          responsible: "Тихонова А.Р",
          status: "in-process",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 64,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "canceled",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 65,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 66,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "assembly",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 67,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "ready",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 68,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 69,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "new",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 70,
          date: "11 ноя, 2021 19:23",
          warehouse: "где-то-там",
          responsible: "Тихонова А.Р",
          status: "in-process",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 71,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "canceled",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 72,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 73,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "assembly",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 74,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "ready",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 75,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 76,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "new",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 77,
          date: "11 ноя, 2021 19:23",
          warehouse: "где-то-там",
          responsible: "Тихонова А.Р",
          status: "in-process",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 78,
          date: "11 ноя, 2021 19:23",
          warehouse: "Киров",
          responsible: "Тихонова А.Р",
          status: "canceled",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 79,
          date: "11 ноя, 2021 19:23",
          responsible: "Тихонова А.Р",
          warehouse: "что-там",
          status: "processed",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 80,
          date: "11 ноя, 2021 19:23",
          warehouse: "Алматы",
          responsible: "Тихонова А.Р",
          status: "assembly",
          client: "Мария Калашникова",
          type: "Интернет-магазин",
          amount: 8,
          sum: 12000,
        },
        {
          id: 81,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "ready",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
        {
          id: 82,
          date: "11 ноя, 2021 19:23",
          warehouse: "что-там",
          responsible: "Тихонова А.Р",
          status: "shipped",
          client: "Мария Калашникова",
          type: "Создан вручную",
          amount: 8,
          sum: 12000,
        },
      ],
      filterStatusSelect: [],
      filterResponsible: "",
      filterClient: "",
      filterOrderType: "",
      filterWarehouse: "",
      paginationList: [],
      search: '',
    };
  },
  methods: {
    getClass(stat) {
      return stat === "new"
        ? "bg-gradient-info"
        : stat === "in-process"
        ? "bg-gradient-primary"
        : stat === "canceled"
        ? "bg-gradient-danger"
        : stat === "processed"
        ? "bg-gradient-warning"
        : stat === "assembly"
        ? "bg-gradient-secondary"
        : stat === "ready"
        ? "bg-gradient-blue"
        : stat === "shipped"
        ? "bg-gradient-success"
        : "bg-gradient-success";
    },
    normalizeStatusName(name) {
      const statusMap = {
        new: "Новый заказ",
        "in-process": "В обработке",
        canceled: "Отменен",
        processed: "Обработан",
        assembly: "В сборке",
        ready: "Готов к выдаче",
        shipped: "Отправлен",
      };
      return statusMap[name] || "Статус не найден";
    },
    createFilteredSet(key) {
      const unfiltered = this.orders.map((obj) => obj[key]);
      return [...new Set(unfiltered)];
    },
    cancelFilters() {
      this.filterStatusSelect = [];
      this.filterResponsible = "";
      this.filterClient = "";
      this.filterOrderType = "";
      this.filterWarehouse = "";
    },
    reloadPagination(arr){
      // console.log(arr);
      this.paginationList = arr;
    }
  },

  computed: {
    orderStatusList() {
      return this.createFilteredSet("status");
    },
    orderResponsibleList() {
      return this.createFilteredSet("responsible");
    },
    orderClientList() {
      return this.createFilteredSet("client");
    },
    orderTypeList() {
      return this.createFilteredSet("type");
    },
    orderWarehouseList() {
      return this.createFilteredSet("warehouse");
    },

    filteredOrders() {
      const statusCheckIfEmpty = this.filterStatusSelect.length > 0;
      return this.orders.filter(
        (order) =>
          (statusCheckIfEmpty
            ? this.filterStatusSelect.includes(order.status)
            : true) &&
          (this.filterWarehouse === ""
            ? true
            : order.warehouse === this.filterWarehouse) &&
          (this.filterResponsible === ""
            ? true
            : order.responsible === this.filterResponsible) &&
          (this.filterClient === ""
            ? true
            : order.client === this.filterClient) &&
          (this.filterOrderType === ""
            ? true
            : order.type === this.filterOrderType)
             && 
            (String(order.id).includes(String(this.search).toLowerCase()))
      );
    },

    paginationAmount(){
      if(document.documentElement.clientWidth < 1700){
        return 7
      }
      else{
        return 9
      }
    },
  },

  components: {
    "the-filter": Filter,
    "filter-button": FilterButton,
    PaginationComponent,
    Commentary,
  },
  watch:{
    search: {
      handler(newq){
        console.log(this.search)
      }
    }
  }
};
</script>



<style scoped>
.period__s {
  width: 191px !important;
}
.form-check-input[type="checkbox"] {
  border-radius: 0;
}
.form-check:not(.form-switch) .form-check-input[type="checkbox"],
.form-check:not(.form-switch) .form-check-input[type="radio"] {
  width: 18px;
  height: 18px;
}
.form-check:not(.form-switch) .form-check-input[type="checkbox"]:checked,
.form-check:not(.form-switch) .form-check-input[type="radio"]:checked {
  width: 18px;
  height: 18px;
}
.bg-gradient-success {
  background: linear-gradient(135deg, #98ec2d 0%, #17ad37 100%);
  font-size: 12px;
}
.bg-gradient-blue {
  background: linear-gradient(135deg, #99fff3 0%, #62c7ba 100%);
  font-size: 12px;
  color: #fff;
}
.bg-gradient-secondary {
  background: linear-gradient(135deg, #a8b8d8 0%, #627594 100%);
  font-size: 12px;
}
.bg-gradient-warning {
  background: linear-gradient(135deg, #f6ca65 0%, #ef8734 100%);
  font-size: 12px;
}
.bg-gradient-danger {
  background: linear-gradient(135deg, #ff667c 0%, #ea0706 100%);
  font-size: 12px;
}
.bg-gradient-primary {
  background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%);
  font-size: 12px;
}
.bg-gradient-info {
  background: linear-gradient(135deg, #b2dbfb 0%, #459cf6 100%);
  font-size: 12px;
}
.dropdown {
  width: 100%;
  display: inline-block;
  position: relative;
}
.dropdown-content {
  text-align: left;
  display: none;
  position: absolute;
  width: 7.815vw;
  overflow: auto;
  background: #f8f9fa;
  box-shadow: 2px 2px 5.5px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  right: 15px;
  z-index: 1;
  padding: 0.625vw 0.625vw 0.625vw 0.625vw;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-content a {
  display: block;
  color: #2d3748;
  text-decoration: none;
}
/* CHECKBOX BUTTON */

.cat {
  margin: 4px;
  background-color: #fff;
  width: 143px;
  height: 40px;
  border-radius: 50px;

  outline: 1px solid #2d3748;
  overflow: hidden;
  float: left;
}

.cat label {
  float: left;
  line-height: 3em;
  color: #2d3748;
  width: 8em;
  height: 3em;
}

.cat label span {
  position: relative;
  top: auto;
  right: 5px;
  text-align: center;
  height: 50px;
  width: 145px;
  display: block;
  color: #2d3748;
}

.cat label input {
  position: absolute;
  display: none;
  color: #2d3748 !important;
}
/* selects all of the text within the input element and changes the color of the text */
.cat label input + span {
  color: #2d3748;
}

/* This will declare how a selected input will look giving generic properties */
.cat input:checked + span {
  color: #ffffff;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
  background-color: #2d3748;
}
/*  */
.page__name h3 {
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
}
.page__name p {
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  color: gray;
}
.main__card {
  height: 80vh;
}
.th__col {
  color: #a0aec0 !important;
}
table {
  /* height: 100%; */
}
.table-wrapper {
  overflow: auto;
}
th {
  color: #2d3748;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
}
td {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
}

.pagination {
  align-self: end;
}

.filters__period {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 0.833vw;
  margin-bottom: 0.833vw;
}
.filters__period__flex {
  display: flex !important;
  justify-content: space-between;
  align-items: flex-end;
}
.table-wrapper::-webkit-scrollbar {
    background: #e2e8f0;
    border-radius: 0.78vw;
    width: 0.37vw;
    height: 0.5vw;
}
  
.table-wrapper::-webkit-scrollbar-thumb {
    border-radius: 0.78vw;
    background-color: #313860;
}
  
.table-wrapper::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.78vw;
    background-color: #e2e8f0;
}

@media screen and (max-width: 1600px) {
  .dropdown-content {
    width: 130px;
  }
  .main__card {
    height: 75vh;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .table-wrapper{
    height: 57vh;
  }
  .btn{
    padding: 0.45rem 1.5rem;
  }
}
</style>
