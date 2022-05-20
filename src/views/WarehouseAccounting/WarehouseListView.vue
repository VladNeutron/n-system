<template>
  <the-navbar></the-navbar>
  <main class="main-content position-relative border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Список складов </template>
          </lists-header>
          <div class="card">
            <div>
              <div class="table__header">
                <div>
                  <button
                    class="btn bg-gradient-dark"
                    onclick="window.location.href = '/warehouse-accounting/create-storage'"
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
                    Добавить склад
                  </button>
                </div>
                <div class="table__header-search">
                  <list-search></list-search>
                  <filters-button></filters-button>
                </div>
              </div>
              <div class="table">
                <table>
                  <tr>
                    <th>№</th>
                    <th>НАИМЕНОВАНИЕ СКЛАДА</th>
                    <th>ТИП СКЛАДА</th>
                    <th>АДРЕСС СКЛАДА</th>
                    <th>СТАТУС</th>
                  </tr>
                  <tr
                    v-for="(warehouse, index) in warehouses"
                    :key="warehouse.id"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ warehouse.name }}</td>
                    <td>{{ warehouse.type }}</td>
                    <td>{{ warehouse.adress }}</td>
                    <td>
                      <div
                        :class="[
                          { table__status__open: warehouse.status != 'Закрыт' },
                          {
                            table__status__closed: warehouse.status == 'Закрыт',
                          },
                        ]"
                      >
                        <p class="tag">{{ warehouse.status }}</p>
                      </div>
                    </td>
                    <td></td>
                    <td class="dropdown" style="padding-left: 100px">
                      <img
                        src="@/assets/img/dots.svg"
                        style="width: 1.563vw; cursor: pointer"
                        alt=""
                      />
                      <div class="dropdown-content">
                        <a href="/warehouse-accounting/storage"
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
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <filters>
      <div class="filter__name__standart">Тип склада</div>
      <select class="form-select">
        <option value="" disabled selected>Выберите склад</option>
        <option>Склад 1</option>
        <option>Склад 2</option>
      </select>
      <div class="filter__name__standart mt-3">Статус склада</div>
      <select class="form-select">
        <option value="" disabled selected>Выберите статус склада</option>
        <option>Открыт</option>
        <option>Закрыт</option>
      </select>
    </filters>
  </main>
</template>

<script>
import Filters from "@/components/Filters.vue";
import FiltersButton from "@/components/buttons/FiltersButton.vue";

export default {
  data() {
    return {
      warehouses: [
        {
          id: 1,
          name: "ТЦ “Jam mall”",
          type: "Торговая точка",
          adress: "Ул. Горького, 5",
          status: "Закрыт",
        },
        {
          id: 2,
          name: "ТЦ “Москва”",
          type: "Торговая точка",
          adress: "8-й микрорайон, 37/1",
          status: "Открыт",
        },
      ],
    };
  },
  components: {
    Filters,
    FiltersButton,
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
.table {
  display: flex;
  min-width: 95%;
  padding: 0.17vw 0.833vw 1.667vw 0.833vw;
}
.table table {
  width: 100%;
  padding: 5px;
}

th {
  /* color: gray; */
  /* font-weight: 400; */
  /* font-size: 0.729vw; */
  padding-bottom: 8px;
}
td {
  font-weight: 600;
  font-size: 0.833vw;
  text-align: center;
  color: black;
  border-color: #e2e8f0;
  padding: 0.521vw 0;
}
.table__status__closed {
  background-color: rgba(235, 87, 87, 0.3);

  border-radius: 5px;
}
.table__status__open {
  background-color: rgba(72, 187, 120, 0.3);

  border-radius: 5px;
}
tr {
  border-bottom: 2px solid #f8f9fa;
  height: 2.604vw;
}
.table__status__closed .tag {
  margin: 0;
  color: #eb5757;
}
.table__status__open .tag {
  margin: 0;
  color: rgba(72, 187, 120, 1);
}
td > a {
  padding-left: 0.833vw;
}
.table__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.521vw 0.833vw;
}
.table__header-search {
  display: flex;
  gap: 3.042vw;
  align-items: center;
}
.search-icon {
  padding-left: 20px;
  background: no-repeat url("@/assets/css/icons/searchIcon.svg");
  background-size: 16px;
}
@media screen and (max-width: 1600px) {
  td,
  th {
    font-size: 12px;
  }
}
</style>
