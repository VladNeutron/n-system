<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Список касс </template>
            <template v-slot:description>
              Внесите изменения и не забудьте нажать “Сохранить”
            </template>
          </lists-header>
          <div class="card" style="padding-top: 1.25vw">
            <div style="text-align: left; margin-left: 1.25vw">
              <button
                class="btn add__cash"
                data-bs-toggle="modal"
                data-bs-target="#InpModal"
                @click="isEdit = 'no'"
                style="
                  font-size: 14px;
                  font-weight: 600;
                  display: flex;
                  align-items: center;
                "
              >
                <img
                  src="@/assets/img/whtplus.svg"
                  alt=""
                  style="margin-right: 10px"
                />
                Добавить кассу
              </button>
            </div>
            <div class="inv__block">
              <div class="inv__content">
                <table class="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th scope="col" class="th__col">№</th>
                      <th scope="col" class="th__col">Название кассы</th>
                      <th scope="col" class="th__col">Tорговая точка</th>
                      <th scope="col" class="th__col">Cтатус</th>
                      <th scope="col" class="th__col">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- v-for="(item, i) in filteredClients" :key="item" -->
                    <tr v-for="(item, i) in paginationList" :key="item">
                      <td scope="row">
                        {{ i + 1 }}
                      </td>
                      <td>
                        {{ item.name }}
                      </td>
                      <td>
                        {{ item.tradePoint }}
                      </td>
                      <td>
                        {{ item.status }}
                      </td>
                      <td class="dropdown">
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <pagination-component
              :filteredArr="items"
              :strAmount="10"
              @PaginationReload="reloadPagination"
              class="pb-4"
            ></pagination-component>
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
              <select
                class="form-select disc__form"
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
              <select
                class="form-select disc__form"
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
          <button
            class="btn delete__btn"
            data-bs-toggle="modal"
            data-bs-target="#DeleteInv"
          >
            Удалить кассу
          </button>
        </div>
        <div class="cash__accept__button" v-if="isEdit == 'no'">
          <button class="btn accept__btn">Добавить</button>
        </div>
      </template>
    </inputs-modal>

    <delete-modal
      :title="'кассы'"
      :text="`кассу &quot;Касса ТРЦ МОСКВА&quot;`"
    ></delete-modal>
  </main>
</template>

<script>
import InputsModal from "@/components/InputsModal.vue";
import DeleteModal from "@/components/DeleteModal.vue";
import { CloseInvModal } from "@/assets/js/closeModalDeleteOpen";
export default {
  components: {
    InputsModal,
    DeleteModal,
  },
  methods: {
    reloadPagination(arr) {
      this.paginationList = arr;
    },
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
      paginationList: [],
    };
  },
  mounted() {
    CloseInvModal();
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
  overflow-y: auto;
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
  right: 8.333vw;
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
@media screen and (max-width: 1600px) {
  .inv__title__text {
    font-size: 20px;
  }
  .inv__sec__text {
    font-size: 14px;
  }
  .btn {
    font-size: 12px !important;
  }
  td,
  th {
    font-size: 14px;
  }
  .order__label__disc {
    font-size: 14px;
  }
  .dropdown-content {
    width: 130px;
  }
}
</style>
