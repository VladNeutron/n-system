<template>
  <the-navbar></the-navbar>
  <main class="main-content position-relative border-radius-lg">
  <the-header></the-header>
  <div class="container-fluid py-4">
    <div class="row mt-4">
        <div class="col-12">
          <div class="card">
            <div>
              <div class="table__header">
                <div>
                  <button class="btn bg-gradient-dark">
                    <span class="pe-2">+</span>Добавить склад
                  </button>
                </div>
                <div class="table__header-search">
                  <div class="form-group">
                    <div class="input-group mt-1">
                      <span class="input-group-text btn-outline-dark"
                        ><i class="ni ni-zoom-split-in"></i
                      ></span>
                      <input
                        class="form-control btn-outline-dark"
                        placeholder="Поиск"
                        type="text"
                      />
                    </div>
                  </div>
                  <filters-button class="mb-3"></filters-button>
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
                  <tr v-for="(warehouse, index) in warehouses" :key="warehouse.id">
                    <td>{{index+1}}</td>
                    <td>{{warehouse.name}}</td>
                    <td>{{warehouse.type}}</td>
                    <td>{{warehouse.adress}}</td>
                    <td>
                      <div :class="[{'table__status__open': warehouse.status != 'Закрыт'},{'table__status__closed': warehouse.status == 'Закрыт'}]"><p class="tag">{{warehouse.status}}</p></div>
                    </td>
                    <td></td>
                    <td>
                      <a href="#"
                        ><img src="@/assets/css/icons/editIcon.svg" alt="edit"
                      /></a>
                      <a href="#"
                        ><img src="@/assets/css/icons/deleteIcon.svg" alt="delete"
                      /></a>
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
      <option value="" disabled selected>Выберите склад </option>
      <option>Склад 1</option>
      <option>Склад 2</option>
    </select>  
    <div class="filter__name__standart mt-3">Статус склада</div>
    <select class="form-select">
      <option value="" disabled selected>Выберите статус склада </option>
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
  data(){
    return {
      warehouses: [
        { 
          id: 1,
          name: 'ТЦ “Jam mall”',
          type: 'Торговая точка',
          adress: 'Ул. Горького, 5',
          status: 'Закрыт'
        },
        { 
          id: 2,
          name: 'ТЦ “Москва”',
          type: 'Торговая точка',
          adress: '8-й микрорайон, 37/1',
          status: 'Открыт'
        }
      ],
    }
  },
  components:{
    Filters, FiltersButton
  }  
};
</script>

<style scoped>
.table {
  display: flex;
  min-width: 95%;
  padding: 1.667vw 0.833vw 1.667vw 0.833vw;
}
.table table {
  width: 100%;
  padding: 5px;
}

th {
  color: gray;
  font-weight: 400;
  font-size: 0.729vw;
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
  padding: 0.521vw 0.833vw;
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
</style>
