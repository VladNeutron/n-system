<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Список инвентаризаций </template>
          </lists-header>
          <!-- <div class="inv__title">
            <p class="inv__title__text">Список инвентаризаций</p>
          </div> -->
          <div class="card">
            <div class="inv__buttons">
              <div class="inv__left__btn">
                <button
                  type="button"
                  style="
                    font-size: 14px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                  "
                  class="btn bg-gradient-secondary"
                  onclick="window.location.href = '/warehouse-accounting/create-inv-list'"
                >
                  <img
                    src="@/assets/img/whtplus.svg"
                    alt=""
                    style="margin-right: 10px"
                  />
                  Новая инвентаризация
                </button>
              </div>
              <div class="inv__right__btn gap-3">
                <list-search></list-search>
                <print-button></print-button>
                <download-button></download-button>
                <filters-button></filters-button>
              </div>
            </div>
            <div class="inv__block">
              <div class="inv__content">
                <table class="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th scope="col" class="th__col">№</th>
                      <th scope="col" class="th__col" width="5%">
                        № Документа
                      </th>
                      <th scope="col" class="th__col">Дата и время</th>
                      <th scope="col" class="th__col">Склад</th>
                      <th scope="col" class="th__col">Ответственный</th>
                      <th scope="col" class="th__col">Статус инвентаризации</th>
                      <th scope="col" class="th__col">Кол-во товаров</th>
                      <th scope="col" class="th__col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in items" :key="item">
                      <td scope="row">{{ i + 1 }}</td>
                      <td>{{ item.id }}</td>
                      <td>{{ item.date }}</td>
                      <td>{{ item.place }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.isReady }}</td>
                      <td>{{ item.count }}</td>
                      <td class="dropdown">
                        <img
                          src="@/assets/img/dots.svg"
                          style="width: 1.563vw; cursor: pointer"
                          alt=""
                        />
                        <div class="dropdown-content">
                          <a href="/warehouse-accounting/edit-inv"
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
          </div>
        </div>
      </div>
    </div>
    <delete-modal>
      <template #header>
        <p class="modal__title">
          Вы уверены, что хотите удалить документ “Инвентаризация №19”?
        </p>
      </template>
    </delete-modal>
    <filters>
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

      <div class="filter__name__standart">Склад</div>
      <select class="form-select">
        <option value="" disabled selected>Выберите склад</option>
        <option>Склад 1</option>
        <option>Склад 2</option>
      </select>
      <div class="filter__name__standart mt-3">Ответственный</div>
      <select class="form-select">
        <option value="" disabled selected>Выберите ответственного</option>
        <option>Открыт</option>
        <option>Закрыт</option>
      </select>
      <div class="filter__name__standart mt-3">Статус инвентаризации</div>
      <select class="form-select">
        <option value="" disabled selected>
          Выберите статус инвентаризации
        </option>
        <option>Открыт</option>
        <option>Закрыт</option>
      </select>
    </filters>
  </main>
</template>

<script>
import Filters from "@/components/Filters.vue";
import FiltersButton from "@/components/buttons/FiltersButton.vue";
import DeleteModal from "@/components/DeleteModal.vue";

export default {
  components: {
    DeleteModal,
    Filters,
    FiltersButton,
  },
  data() {
    return {
      items: [
        {
          date: "11 янв, 19:23, 2021",
          id: "19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id: "19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id: "19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id: "19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id: "19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id: "19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id: "19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id: "19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id: "19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id: "19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id: "19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id: "19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
      ],
    };
  },
};
</script>

<style scoped>
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
hr {
  border: 1px solid #2d3748;
}
.th__col {
  color: #a0aec0 !important;
}
.inv__content::-webkit-scrollbar {
  background: #e2e8f0;
  border-radius: 0.78vw;
  width: 0.37vw;
}
.inv__content::-webkit-scrollbar-thumb {
  border-radius: 0.78vw;
  background-color: #a0aec0;
}
.inv__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.78vw;
  background-color: #e2e8f0;
}
.inv__content {
  height: 30.469vw;
  overflow-y: scroll;
}

.inv__btn {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.7vw;
}
.inv__btn,
.inv__inp {
  margin-right: 0.521vw;
}
.inv__right__btn {
  display: flex;
  align-items: flex-start;
}
.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 0.417vw;
}
.inv__buttons {
  padding-top: 0.729vw;
  padding-left: 1.25vw;
  padding-right: 1.25vw;
  padding-bottom: 2.083vw;
  display: flex;
  justify-content: space-between;
}
.inv__title {
  text-align: left;
}
.inv__title__text {
  font-weight: 700;
  font-size: 1.25vw;
  color: #2d3748;
}
.container__padding {
  padding-left: 2.135vw;
  padding-right: 5.208vw;
}
@media screen and (max-width: 1600px) {
  .btn {
    font-size: 12px !important;
  }
  .input-group {
    margin-top: 1px !important;
  }
  td {
    font-size: 14px;
  }
  .dropdown-content {
    width: 130px;
  }
  .inv__title__text {
    font-size: 20px;
  }
}
</style>
