<template>
  <div class="page__name d-flex align-items-center ms-4 justify-content-between">
    <div class="page__name-title text-start">
      <h3>Куртка зеленая</h3>
      <p class="mb-0">Внесите изменения и не забудьте нажать “Сохранить”</p>
    </div>
  </div>
  <div class="card pt-4 pb-4 m-4">
    <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
      <div class="period__flex">
        <div class="products__period">
          <div class="filters__period__flex">
            <div class="filter__name__standart">Выберите период</div>
            <div class="reset__date">Сбросить период</div>
          </div>
          <div class="filters__period">
            <div class="form-group">
              <input class="form-control data__size" type="date" id="example-date-input" />
            </div>
            <div>
              <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
            </div>
            <div class="form-group">
              <input class="form-control data__size" type="date" id="example-date-input" />
            </div>
          </div>
        </div>
        <div class="mt-3 buttons__pc" style="margin-left: 1.25vw">
          <button class="btn first__btn mb-0" :class="{ active1: isActive == 1 }" @click="isActive = 1">
            Квартал
          </button>
          <button class="btn second__btn mb-0" :class="{ active2: isActive == 2 }" @click="isActive = 2">
            Полугодие
          </button>
          <button class="btn third__btn mb-0" :class="{ active3: isActive == 3 }" @click="isActive = 3">
            Год
          </button>
        </div>
      </div>
      <div class="table__inputs d-flex gap-3 align-items-end" style="margin-top: -20px">
        <div class="form-group m-0 form__pc" style="text-align: left">
          <label for="search">Поиск товаров</label>
          <div class="input-group mt-0">
            <span class="input-group-text"><img src="@/assets/css/icons/searchIcon.svg" alt="" />
            </span>
            <input class="form-control form__size" placeholder="Поиск..." id="search" type="text"
              v-model.trim="search" />
          </div>
        </div>
        <export2-button></export2-button>
        <filters-button></filters-button>
      </div>
    </div>
    <div class="d-flex" style="margin-left: 25px">
      <div class="form-group m-0 form__mob" style="text-align: left">
        <div class="input-group mt-1 form__mob__width">
          <span class="input-group-text"><img src="@/assets/css/icons/searchIcon.svg" alt="" />
          </span>
          <input class="form-control form__size" placeholder="Поиск..." id="search" type="text" v-model.trim="search" />
        </div>
      </div>
      <div class="mt-2 buttons__mob" style="margin-left: 1.25vw">
        <button class="btn first__btn mb-0" :class="{ active1: isActive == 1 }" @click="isActive = 1">
          Квартал
        </button>
        <button class="btn second__btn mb-0" :class="{ active2: isActive == 2 }" @click="isActive = 2">
          Полугодие
        </button>
        <button class="btn third__btn mb-0" :class="{ active3: isActive == 3 }" @click="isActive = 3">
          Год
        </button>
      </div>
    </div>
    <div class="page__table">
      <table class="table table-hover text-wrap">
        <thead>
          <tr class="">
            <th scope="col" class="th__col">Название товара</th>
            <th scope="col" class="th__col">Цвет</th>
            <th scope="col" class="th__col">Размер</th>
            <th scope="col" class="th__col">Категория</th>
            <th scope="col" class="th__col">Количество продаж</th>
            <th scope="col" class="th__col">Сумма продаж</th>
            <th scope="col" class="th__col">% от продаж</th>
            <th scope="col" class="th__col" style="padding-right: 7.656vw">
              ABC анализ
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order of paginationList" :key="order.id">
            <td>{{ order.name }}</td>
            <td>{{ order.color }}</td>
            <td>{{ order.size }}</td>

            <td>{{ order.category }}</td>
            <td>
              {{ order.count }}
            </td>
            <td>{{ order.sum }} ₸</td>
            <td>{{ order.percent }} %</td>
            <td style="padding-right: 7.656vw">
              <div class="btn mb-0 w-100" :class="getClass(order.status)">
                {{ buttonText }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination-component :filteredArr="filteredOrders" :strAmount="8" @PaginationReload="reloadPagination"
      class="pb-2">
    </pagination-component>
    <Filters></Filters>
  </div>
</template>

<script>
import Filters from '@/components/Filters.vue';
export default {
  data() {
    return {
      paginationList: [],
      isActive: 1,
      search: '',
      orders: [
        {
          name: "Куртка зеленая",
          color: "Изумрудный",
          size: "XS",
          category: "Верхняя одежда",
          status: "A",
          count: 1234,
          sum: 120340,
          amount: 8,
          sum: 12000,
          percent: 10,
        },
        {
          name: "Куртка зеленая",
          color: "Изумрудный",
          size: "XS",
          category: "Верхняя одежда",
          status: "A",
          count: 1234,
          sum: 120340,
          amount: 8,
          sum: 12000,
          percent: 10,
        },
        {
          name: "Куртка зеленая",
          color: "Изумрудный",
          size: "XS",
          category: "Верхняя одежда",
          status: "B",
          count: 1234,
          sum: 120340,
          amount: 8,
          sum: 12000,
          percent: 10,
        },
        {
          name: "Куртка зеленая",
          color: "Изумрудный",
          size: "XS",
          category: "Верхняя одежда",
          status: "B",
          count: 1234,
          sum: 120340,
          amount: 8,
          sum: 12000,
          percent: 10,
        },
        {
          name: "Куртка зеленая",
          color: "Изумрудный",
          size: "XS",
          category: "Верхняя одежда",
          status: "C",
          count: 1234,
          sum: 120340,
          amount: 8,
          sum: 12000,
          percent: 10,
        },
        {
          name: "Куртка зеленая",
          color: "Изумрудный",
          size: "XS",
          category: "Верхняя одежда",
          status: "C",
          count: 1234,
          sum: 120340,
          amount: 8,
          sum: 12000,
          percent: 10,
        },
        {
          name: "Куртка зеленая",
          color: "Изумрудный",
          size: "XS",
          category: "Верхняя одежда",
          status: "B",
          count: 1234,
          sum: 120340,
          amount: 8,
          sum: 12000,
          percent: 10,
        },
        {
          name: "Куртка зеленая",
          color: "Изумрудный",
          size: "XS",
          category: "Верхняя одежда",
          status: "C",
          count: 1234,
          sum: 120340,
          amount: 8,
          sum: 12000,
          percent: 10,
        },
        {
          name: "Куртка зеленая",
          color: "Изумрудный",
          size: "XS",
          category: "Верхняя одежда",
          status: "C",
          count: 1234,
          sum: 120340,
          amount: 8,
          sum: 12000,
          percent: 10,
        },
        {
          name: "Куртка зеленая",
          color: "Изумрудный",
          size: "XS",
          category: "Верхняя одежда",
          status: "B",
          count: 1234,
          sum: 120340,
          amount: 8,
          sum: 12000,
          percent: 10,
        },
        {
          name: "Куртка зеленая",
          color: "Изумрудный",
          size: "XS",
          category: "Верхняя одежда",
          status: "C",
          count: 1234,
          sum: 120340,
          amount: 8,
          sum: 12000,
          percent: 10,
        },
        {
          name: "Куртка зеленая",
          color: "Изумрудный",
          size: "XS",
          category: "Верхняя одежда",
          status: "C",
          count: 1234,
          sum: 120340,
          amount: 8,
          sum: 12000,
          percent: 10,
        },
      ],
    };
  },
  methods: {
    reloadPagination(arr) {
      console.log(arr);
      this.paginationList = arr;
    },
    getClass(stat) {
      if (stat === "A") {
        this.buttonText = "A";
        return "bg-gradient-success";
      }
      if (stat === "B") {
        this.buttonText = "B";
        return "btn btn-warning";
      }
      if (stat === "C") {
        this.buttonText = "C";
        return "bg-gradient-danger";
      }
    },
  },
  computed: {
    filteredOrders() {
      return this.orders.filter(
        (order) =>

          (String(order.name).toLowerCase().includes(String(this.search).toLowerCase())) ||
          (String(order.category).toLowerCase().includes(String(this.search).toLowerCase())) ||
          (String(order.color).toLowerCase().includes(String(this.search).toLowerCase())) ||
          (String(order.size).toLowerCase().includes(String(this.search).toLowerCase()))
      );
    },
  },
  components: { Filters }
};
</script>

<style scoped>
.filter__name__standart {
  font-weight: 600;
  font-size: 20px;
  color: #2d3748;
  text-align: left;
}

.active3 {
  background: linear-gradient(83.56deg,
      #7092e0 10.01%,
      #8baef3 75.36%) !important;
  border-radius: 0px 8px 8px 0px !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  color: #fff !important;
}

.active2 {
  background: linear-gradient(83.56deg,
      #7092e0 10.01%,
      #8baef3 75.36%) !important;
  border-radius: 0px 0px 0px 0px !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  color: #fff !important;
}

.active1 {
  background: linear-gradient(83.56deg,
      #7092e0 10.01%,
      #8baef3 75.36%) !important;
  border-radius: 8px 0px 0px 8px !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  color: #fff !important;
}

.data__size {
  height: 2.396vw !important;
}

.first__btn,
.second__btn,
.third__btn {
  font-weight: 400;
  font-size: 0.729vw;
  color: #2d3748;
  background: transparent;
  box-shadow: none;
}

.first__btn:hover,
.second__btn:hover,
.third__btn:hover {
  font-weight: 400;
  font-size: 0.729vw;
  color: #2d3748;
  background: transparent;
  box-shadow: none !important;
}

.first__btn {
  border-left: 1px solid #a0aec0;
  border-top: 1px solid #a0aec0;
  border-bottom: 1px solid #a0aec0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.second__btn {
  border-top: 1px solid #a0aec0;
  border-bottom: 1px solid #a0aec0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.third__btn {
  border-right: 1px solid #a0aec0;
  border-top: 1px solid #a0aec0;
  border-bottom: 1px solid #a0aec0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.period__flex {
  display: flex;
  align-items: center;
}

.form__size {
  width: 15.99vw !important;
}

.products__period {
  width: 23.438vw;
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

.reset__date {
  font-weight: 400;
  font-size: 0.729vw;
  color: #2d3748;
  text-decoration: underline;
  cursor: pointer;
}

.form__mob,
.buttons__mob {
  display: none;
}

.page__table {
  height: 27.3vw;
}

@media screen and (max-width: 1600px) {
  .btn {
    font-size: 12px !important;
  }

  .form__pc,
  .buttons__pc {
    display: none;
  }

  .form__mob,
  .buttons__mob {
    display: contents;
  }

  .form__mob__width {
    width: 413px !important;
  }

  .active1,
  .active2 {
    font-size: 12px !important;
    font-weight: 400 !important;
  }

  .first__btn {
    margin-left: 25px;
  }

  .data__size {
    height: 46px !important;
  }

  .page__table::-webkit-scrollbar {
    background: #e2e8f0;
    border-radius: 0.78vw;
    width: 0.37vw;
  }

  .page__table::-webkit-scrollbar-thumb {
    border-radius: 0.78vw;
    background-color: #313860;
  }

  .page__table::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.78vw;
    background-color: #e2e8f0;
  }

  .page__table {
    overflow-x: scroll;
  }
}
</style>
