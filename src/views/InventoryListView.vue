<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid py-4">
      <div class="row mt-4">
        <div class="col-12">
          <div class="inv__title">
            <p class="inv__title__text">Список инвентаризаций</p>
          </div>
          <div class="card">
            <div class="inv__buttons">
              <div class="inv__left__btn">
                <button type="button" class="btn bg-gradient-secondary" onclick="window.location.href = '/warehouse-accounting/create-inv-list'">
                  + Новая инвентаризация
                </button>
              </div>
              <div class="inv__right__btn">
                <div class="form-group">
                  <div class="input-group mt-1">
                    <span class="input-group-text"
                      ><i class="ni ni-zoom-split-in"></i
                    ></span>
                    <input
                      class="form-control inv__inp"
                      placeholder="Поиск"
                      type="text"
                    />
                  </div>
                </div>
                <button type="button" class="inv__btn btn btn-outline-dark">
                  <img
                    src="@/assets/img/filter.svg"
                    style="width: 1.25vw; margin-right: 0.417vw"
                    alt=""
                  />
                  фильтры
                </button>
                <button type="button" class="inv__btn btn btn-outline-dark">
                  <img
                    src="@/assets/img/print.svg"
                    style="width: 1.25vw; margin-right: 0.417vw"
                    alt=""
                  />
                  печать
                </button>
                <button type="button" class="inv__btn btn btn-outline-dark">
                  <img
                    src="@/assets/img/download.svg"
                    style="width: 1.25vw; margin-right: 0.417vw"
                    alt=""
                  />
                  скачать
                </button>
              </div>
            </div>
            <div class="inv__block">
              <div class="inv__content">
                <table class="table table-bordered table-hover table-striped">
                  <thead>
                    <tr>
                      <th scope="col" class="th__col">№</th>
                      <th scope="col" class="th__col" width="5%">№ Документа</th>
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
                      <th scope="row">{{ i + 1 }}</th>
                      <td>{{ item.id }}</td>
                      <td>{{ item.date }}</td>
                      <td>{{ item.place }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.isReady }}</td>
                      <td>{{ item.count }}</td>
                      <td>
                        <div class="dropdown">
                          <img
                            src="@/assets/img/dots.svg"
                            style="width: 1.563vw; cursor: pointer"
                            alt=""
                          />
                          <div class="dropdown-content">
                            <a href="#">Редактировать</a>
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
  </main>
</template>

<script>
import DeleteModal from "@/components/DeleteModal.vue";
export default {
  components: {
    DeleteModal,
  },
  data() {
    return {
      items: [
        {
          date: "11 янв, 19:23, 2021",
          id:"19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id:"19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id:"19",
          place: "ТРЦ Москва",
          name: "Мильчаков Валерий",
          isReady: "Завершена",
          count: "15",
        },
        {
          date: "11 янв, 19:23, 2021",
          id:"19",
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
hr {
  border: 1px solid #2d3748;
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
.th__col {
  color: #a0aec0 !important;
}
td,
th {
  color: #2d3748;
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
  padding-left: 1.354vw;
  padding-right: 1.354vw;
  height: 33.469vw;
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
  padding-bottom:2.083vw;
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
</style>