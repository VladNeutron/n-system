<template>
    <div
      class="page__name d-flex align-items-center ms-4 justify-content-between"
    >
      <div class="page__name-title text-start">
        <h3>Лучшие магазины за период</h3>
        <p class="mb-0">Внесите изменения и не забудьте нажать “Сохранить”</p>
      </div>
      <div class="header__buttons">
        <button
          class="btn filter__button mb-0"
          :class="{ active: activeBtn == 1 }"
          @click="activeBtn = 1"
        >
          <img
            src="@/assets/img/monetization_on.svg"
            style="width: 1.25vw; margin-right: 0.417vw"
            alt=""
          />
          По сумме продаж
        </button>
        <button
          class="btn filter__button mb-0"
          :class="{ active: activeBtn == 2 }"
          @click="activeBtn = 2"
        >
          <img
            src="@/assets/img/analytics.svg"
            style="width: 1.25vw; margin-right: 0.417vw"
            alt=""
          />
          По количеству продаж
        </button>
        <button
          class="btn filter__button mb-0"
          :class="{ active: activeBtn == 3 }"
          @click="activeBtn = 3"
        >
          <img
            src="@/assets/img/calculate.svg"
            style="width: 1.25vw; margin-right: 0.417vw"
            alt=""
          />
          По маржинальности товара
        </button>
      </div>
    </div>
    <div class="card pt-4 m-4">
      <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
        <div class="products__period">
          <div class="filters__period__flex">
            <div class="filter__name__standart">Выберите период</div>
            <div class="reset__date">Сбросить период</div>
          </div>
          <div class="filters__period">
            <div class="form-group">
              <input class="form-control" type="date" id="example-date-input" />
            </div>
            <div>
              <img src="@/assets/img/line.svg" style="width: 1.927vw" alt="" />
            </div>
            <div class="form-group">
              <input class="form-control" type="date" id="example-date-input" />
            </div>
          </div>
        </div>
        <div class="table__inputs d-flex gap-3 align-content-center">
          <print-button></print-button>
          <download-button></download-button>
        </div>
      </div>
      <div class="best__products">
        <div class="best__products__content">
          <div>
            <img src="@/assets/img/shop1.png" alt="" />
          </div>
          <div class="best__products__text">
            <div>
              <p class="main__top mb-0">Reserved</p>
              <p class="sec__top mb-0">Адрес: ул. Гагарина, д.109</p>
            </div>
            <div class="bottom__text">
              <p class="main__bottom mb-0">СУММА ПРОДАЖ</p>
              <p class="sec__bottom mb-0">481 700 ₸</p>
            </div>
          </div>
          <div class="top__number">
            <p class="top1">1</p>
          </div>
        </div>
        <div class="best__products__content">
          <div>
            <img src="@/assets/img/shop2.png" alt="" />
          </div>
          <div class="best__products__text">
            <div>
              <p class="main__top mb-0">For Men</p>
              <p class="sec__top mb-0">Адрес: ул. Гагарина, д.109</p>
            </div>
            <div class="bottom__text">
              <p class="main__bottom mb-0">СУММА ПРОДАЖ</p>
              <p class="sec__bottom mb-0">481 700 ₸</p>
            </div>
          </div>
          <div class="top__number2">
            <p class="top2">2</p>
          </div>
        </div>
        <div class="best__products__content" style="margin-right: 0">
          <div>
            <img src="@/assets/img/shop3.png" alt="" />
          </div>
          <div class="best__products__text">
            <div>
              <p class="main__top mb-0">Marc O’Polo</p>
              <p class="sec__top mb-0">Адрес: ул. Гагарина, д.109</p>
            </div>
            <div class="bottom__text">
              <p class="main__bottom mb-0">СУММА ПРОДАЖ</p>
              <p class="sec__bottom mb-0">481 700 ₸</p>
            </div>
          </div>
          <div class="top__number3">
            <p class="top3">3</p>
          </div>
        </div>
      </div>
      <div class="order__table__body mt-4">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col" class="th__col">№</th>
              <th scope="col" class="th__col">Название магазина</th>
              <th scope="col" class="th__col">Адрес</th>
              <th scope="col" class="th__col">Количество продаж</th>
              <th scope="col" class="th__col">Выручка</th>
              <th scope="col" class="th__col">Прибыль</th>
              <th scope="col" class="th__col">Маржинальность</th>
            </tr>
          </thead>
          <tbody>
            <!-- v-for="(item, i) in items" :key="item" -->
            <tr v-for="(item, i) in items" :key="item">
              <td scope="row">
                {{ i + 4 }}
              </td>
              <td>
                {{ item.name }}
              </td>
              <td>
                {{ item.adres }}
              </td>
              <td>
                {{ item.count }}
              </td>
              <td>{{ item.revenue }} ₸</td>
              <td>
                {{ item.profit }}
                ₸
              </td>
              <td>{{ item.marj }} ₸</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Filters></Filters>
</template>

<script>
import Filters from "@/components/Filters";
export default {
  components: {
    Filters,
  },
  data() {
    return {
      activeBtn: 1,
      items: [
        {
          name: "Neutron Store",
          adres: "Ул. Гагарина, д.32",
          count: 1234,
          revenue: 120340,
          profit: 120340,
          marj: 120340,
        },
        {
          name: "Neutron Store",
          adres: "Ул. Гагарина, д.32",
          count: 1234,
          revenue: 120340,
          profit: 120340,
          marj: 120340,
        },
        {
          name: "Neutron Store",
          adres: "Ул. Гагарина, д.32",
          count: 1234,
          revenue: 120340,
          profit: 120340,
          marj: 120340,
        },
        {
          name: "Neutron Store",
          adres: "Ул. Гагарина, д.32",
          count: 1234,
          revenue: 120340,
          profit: 120340,
          marj: 120340,
        },
        {
          name: "Neutron Store",
          adres: "Ул. Гагарина, д.32",
          count: 1234,
          revenue: 120340,
          profit: 120340,
          marj: 120340,
        },
        {
          name: "Neutron Store",
          adres: "Ул. Гагарина, д.32",
          count: 1234,
          revenue: 120340,
          profit: 120340,
          marj: 120340,
        },
        {
          name: "Neutron Store",
          adres: "Ул. Гагарина, д.32",
          count: 1234,
          revenue: 120340,
          profit: 120340,
          marj: 120340,
        },
      ],
    };
  },
};
</script>

<style scoped>
.top__number3 {
  position: absolute;
  right: -10px;
  top: 0.9vw;
  opacity: 0.1;
}

.top__number2 {
  position: absolute;
  right: -5px;
  top: 0.938vw;
  opacity: 0.2;
}

.top__number {
  position: absolute;
  left: 18.727vw;
  top: 0.885vw;
  opacity: 0.2;
}

.top1 {
  font-weight: 700;
  font-size: 8.155vw;
  line-height: 11.094vw;
  letter-spacing: -0.226vw;
  color: #f3ae3d;
}

.top2 {
  font-weight: 700;
  font-size: 8.155vw;
  line-height: 11.094vw;
  letter-spacing: -0.226vw;
  color: #a0aec0;
}

.top3 {
  font-weight: 700;
  font-size: 8.155vw;
  line-height: 11.094vw;
  letter-spacing: -0.226vw;
  color: #de8150;
}

.main__bottom {
  font-weight: 400;
  font-size: 0.729vw;
  color: #2d3748;
}

.sec__bottom {
  font-weight: 700;
  font-size: 1.363vw;
  color: #2d3748;
}

.bottom__text {
  margin-top: 3.073vw;
}

.sec__top {
  font-weight: 600;
  font-size: 0.729vw;
  color: #a0aec0;
}

.main__top {
  font-weight: 600;
  font-size: 0.833vw;
  color: #2d3748;
}

.best__products__text {
  text-align: left;
  padding: 0.417vw 4.01vw 0 1.25vw;
}

.best__products__content {
  position: relative;
  display: flex;
  margin-right: 3.646vw;
  background: #ffffff;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  overflow: hidden;
}

.best__products {
  display: flex;
  justify-content: center;
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

.active {
  background: #ffffff !important;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07) !important;
}

.header__buttons {
  display: flex;
}

.filter__button {
  display: flex;
  margin-right: 0.938vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
  align-items: center;
  background: transparent;
  box-shadow: none;
}

.main__padding {
  padding-right: 2.083vw;
}

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
@media screen and (max-width: 1600px) {
  .btn {
    font-size: 12px !important;
  }
  .order__table__body::-webkit-scrollbar {
    background: #e2e8f0;
    border-radius: 0.78vw;
    width: 0.37vw;
  }

  .order__table__body::-webkit-scrollbar-thumb {
    border-radius: 0.78vw;
    background-color: #313860;
  }

  .order__table__body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.78vw;
    background-color: #e2e8f0;
  }

  .order__table__body {
    height: 29vw;
    overflow-y: scroll;
  }
  .main__top {
    font-size: 14px;
  }
  .sec__top {
    font-size: 12px;
  }
  .sec__bottom {
    font-size: 16px;
  }
  .best__products__content {
    margin-right: 0.6459999999999999vw;
  }
  .top__number {
    left: 19.527vw;
    top: 6.6vw;
  }
  .top__number2 {
    left: 18.586vw;
    top: 6.638vw;
  }
  .top__number3 {
    left: 18.586vw;
    top: 6.581000000000001vw;
  }
}
</style>
