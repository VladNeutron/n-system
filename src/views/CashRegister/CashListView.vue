<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid py-4">
      <div class="row mt-4">
        <div class="col-12">
          <div class="inv__title">
            <p class="inv__title__text">Список касс</p>
            <p class="inv__sec__text">
              Внесите изменения и не забудьте нажать “Сохранить”
            </p>
          </div>
          <div class="card" style="padding-top: 1.25vw">
            <div style="text-align: left; margin-left: 1.25vw">
              <button
                class="btn add__cash"
                data-bs-toggle="modal"
                data-bs-target="#InpModal"
                @click="isEdit = 'no'"
              >
                <img src="@/assets/img/whtplus.svg" alt="" />
                Добавить кассу
              </button>
            </div>
            <div class="inv__block">
              <div class="inv__content">
                <table class="table table-bordered table-hover table-striped">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="th__col"
                        style="border-left: 0; border-right: 0"
                      >
                        №
                      </th>
                      <th
                        scope="col"
                        class="th__col"
                        style="border-left: 0; border-right: 0"
                      >
                        Название кассы
                      </th>
                      <th
                        scope="col"
                        class="th__col"
                        style="border-left: 0; border-right: 0"
                      >
                        Tорговая точка
                      </th>
                      <th
                        scope="col"
                        class="th__col"
                        style="border-left: 0; border-right: 0"
                      >
                        Cтатус
                      </th>
                      <th
                        scope="col"
                        class="th__col"
                        style="border-left: 0; border-right: 0"
                      >
                        Действия
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- v-for="(item, i) in filteredClients" :key="item" -->
                    <tr v-for="(item, i) in items" :key="item">
                      <th scope="row" style="border-left: 0; border-right: 0">
                        {{ i + 1 }}
                      </th>
                      <td style="border-left: 0; border-right: 0">
                        {{ item.name }}
                      </td>
                      <td style="border-left: 0; border-right: 0">
                        {{ item.tradePoint }}
                      </td>
                      <td style="border-left: 0; border-right: 0">
                        {{ item.status }}
                      </td>
                      <td style="border-left: 0; border-right: 0">
                        <div class="dropdown">
                          <img
                            src="@/assets/img/dots.svg"
                            style="width: 1.563vw; cursor: pointer"
                            alt=""
                          />
                          <div class="dropdown-content">
                            <a
                              style="cursor: pointer"
                              data-bs-toggle="modal"
                              data-bs-target="#InpModal"
                              @click="isEdit = 'yes'"
                              >Редактировать</a
                            >
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
            <div class="pagination d-flex justify-content-end pe-5">
              <div class="d-flex align-items-baseline gap-3 pb-4">
                <div>
                  <p class="m-0">Показано<span> 1-10 из 100</span></p>
                </div>

                <div class="page__search-pages d-flex align-content-center">
                  <div class="pagination-container d-flex justify-items-center">
                    <ul class="pagination pagination-info mb-0 pe-0">
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="javascript:;"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true"
                            ><i
                              class="fa fa-angle-double-left"
                              aria-hidden="true"
                            ></i
                          ></span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="javascript:;">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="javascript:;">2</a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="javascript:;">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="javascript:;">4</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="javascript:;">5</a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="javascript:;"
                          aria-label="Next"
                        >
                          <span aria-hidden="true"
                            ><i
                              class="fa fa-angle-double-right"
                              aria-hidden="true"
                            ></i
                          ></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <inputs-modal>
      <template #head>
        <div style="text-align: left" v-if="isEdit == 'yes'">
          <p class="header__main">Касса №1</p>
          <p class="header__sec">Измените данные кассы и нажмите “Сохранить”</p>
        </div>
        <div style="text-align: left" v-if="isEdit == 'no'">
          <p class="header__main">Добавление кассы</p>
          <p class="header__sec">Введите данные кассы и нажмите “Добавить”</p>
        </div>
      </template>
      <template #body>
        <div v-if="isEdit == 'yes'">
          <div class="form-group">
            <label for="example-text-input" class="order__label__disc"
              >Название кассы</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Введите название"
              id="example-text-input"
            />
          </div>
          <div class="form-group mr">
            <label for="exampleFormControlSelect1" class="order__label__disc"
              >Торговая точка</label
            >
            <div class="select3">
              <img src="@/assets/img/arrow.svg" style="width: 0.833vw" alt="" />
              <select
                class="form-control disc__form"
                id="exampleFormControlSelect1"
              >
                <option disabled selected>Выберите торговую точку</option>
                <option>Zero Караганда</option>
                <option>Zero Караганда</option>
                <option>Zero Караганда</option>
              </select>
            </div>
          </div>
        </div>
        <div v-if="isEdit == 'no'">
          <div class="form-group">
            <label for="example-text-input" class="order__label__disc"
              >Название кассы</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Введите название"
              id="example-text-input"
            />
          </div>
          <div class="form-group mr">
            <label for="exampleFormControlSelect1" class="order__label__disc"
              >Торговая точка</label
            >
            <div class="select3">
              <img src="@/assets/img/arrow.svg" style="width: 0.833vw" alt="" />
              <select
                class="form-control disc__form"
                id="exampleFormControlSelect1"
              >
                <option disabled selected>Выберите торговую точку</option>
                <option>Zero Караганда</option>
                <option>Zero Караганда</option>
                <option>Zero Караганда</option>
              </select>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="cash__accept__button" v-if="isEdit == 'yes'">
          <button class="btn accept__btn">Сохранить</button>
          <button class="btn delete__btn">Удалить кассу</button>
        </div>
        <div class="cash__accept__button" v-if="isEdit == 'no'">
          <button class="btn accept__btn">Добавить</button>
        </div>
      </template>
    </inputs-modal>

    <delete-modal>
      <template #head>
        <p class="header__main">Удаление кассы</p>
      </template>
      <template #header>
        <p class="modal__body__text">
          Вы уверены, что хотите удалить кассу “Касса №1”?
        </p>
      </template>
    </delete-modal>
  </main>
</template>

<script>
import InputsModal from "@/components/InputsModal.vue";
import DeleteModal from "@/components/DeleteModal.vue";
export default {
  components: {
    InputsModal,
    DeleteModal,
  },
  data() {
    return {
      isEdit: "",
      items: [
        {
          name: "Касса ТРЦ МОСКВА",
          tradePoint: "Zero Москва",
          status: "Активна",
        },
        {
          name: "Касса ТРЦ МОСКВА",
          tradePoint: "Zero Москва",
          status: "Активна",
        },
        {
          name: "Касса ТРЦ МОСКВА",
          tradePoint: "Zero Москва",
          status: "Активна",
        },
        {
          name: "Касса ТРЦ МОСКВА",
          tradePoint: "Zero Москва",
          status: "Активна",
        },
        {
          name: "Касса ТРЦ МОСКВА",
          tradePoint: "Zero Москва",
          status: "Активна",
        },
        {
          name: "Касса ТРЦ МОСКВА",
          tradePoint: "Zero Москва",
          status: "Активна",
        },
        {
          name: "Касса ТРЦ МОСКВА",
          tradePoint: "Zero Москва",
          status: "Активна",
        },
        {
          name: "Касса ТРЦ МОСКВА",
          tradePoint: "Zero Москва",
          status: "Активна",
        },
        {
          name: "Касса ТРЦ МОСКВА",
          tradePoint: "Zero Москва",
          status: "Активна",
        },
        {
          name: "Касса ТРЦ МОСКВА",
          tradePoint: "Zero Москва",
          status: "Активна",
        },
        {
          name: "Касса ТРЦ МОСКВА",
          tradePoint: "Zero Москва",
          status: "Активна",
        },
      ],
    };
  },
};
</script>

<style scoped>
.delete__btn {
  background: transparent;
  box-shadow: none;
  font-weight: 600;
  font-size: 0.833vw;
  color: #2d3748;
  text-transform: none;
}
.delete__btn:hover {
  background: transparent;
  box-shadow: none;
}
.cash__accept__button {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.accept__btn {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  text-transform: none;
  padding: 0.729vw 5.208vw 0.729vw 5.208vw;
  font-weight: 700;
  font-size: 0.833vw;
  color: #ffffff;
}
.order__label__disc {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}
.form-group {
  text-align: left;
}
.select3:hover img {
  transform: rotate(180deg);
}
.select3 {
  position: relative;
}
.select3 img {
  position: absolute;
  left: 23.021vw;
  top: 0.781vw;
}
.add__cash {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  text-transform: none;
  padding: 0.521vw 1.25vw 0.521vw 1.25vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #ffffff;
}
.pagination {
  margin-top: 0.433vw;
}
.inv__content::-webkit-scrollbar {
  background: #e2e8f0;
  border-radius: 0.78vw;
  width: 0.37vw;
}
.inv__content::-webkit-scrollbar-thumb {
  border-radius: 0.78vw;
  background-color: #313860;
}
.inv__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.78vw;
  background-color: #e2e8f0;
}
.inv__content {
  height: 27.363vw;
  overflow-y: scroll;
}
.dropdown {
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
.inv__title {
  text-align: left;
}
.inv__title__text {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
  margin: 0;
}
.inv__sec__text {
  font-weight: 400;
  font-size: 0.729vw;
  color: #a0aec0;
}
</style>