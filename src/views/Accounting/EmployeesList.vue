<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="page__name d-flex align-items-center ms-4">
      <div class="page__name-title text-start">
        <h3>Список сотрудников</h3>
        <p class="mb-0">Внесите изменения и не забудьте  нажать “Сохранить”</p>
      </div>
    </div>
    <div class="card pt-4 pb-6 m-4">
      <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
        <div>
          <button class="btn bg-gradient-dark mb-0" style="margin-right: 0.833vw">
            <img src="@/assets/img/whtplus.svg" alt="" /> Добавить сотрудника
          </button>
        </div>
        <div class="table__inputs d-flex gap-3 align-content-center">
          <div class="form-group m-0">
            <div class="input-group mt-1">
              <span class="input-group-text"><img src="@/assets/css/icons/searchIcon.svg" alt="" /></span>
              <input class="form-control form__width" placeholder="Поиск..." id="search" type="text" />
            </div>
          </div>
          <button class="btn btn-outline-dark mb-0">
            <span><img src="@/assets/css/icons/print.svg" class="me-1" alt="" /></span>Печать
          </button>
          <button class="btn btn-outline-dark mb-0">
            <span><img src="@/assets/css/icons/down-arrow.svg" class="me-1" alt="" /></span>Скачать
          </button>
          <button class="btn btn-outline-dark mb-0">Фильтры</button>
        </div>
      </div>
      <div class="page__table">
        <table class="table table-hover">
          <thead>
            <tr class="">
              <th scope="col" class="th__col" style="width: 25px"></th>
              <th width="1%" scope="col" class="th__col">№</th>
              <th scope="col" class="th__col">ФИО</th>
              <th scope="col" class="th__col">Должность</th>
              <th scope="col" class="th__col">Телефон</th>
              <th scope="col" class="th__col">Email</th>
              <th scope="col" class="th__col">Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, i) of orders" :key="order.id">
              <td scope="row">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="fcustomCheck1" />
                </div>
              </td>
              <th width="1%">{{ i + 1 }}</th>
              <td>{{ order.name}}</td>
              <td>{{ order.position }}</td>
              <td>{{ order.phoneNumber }}</td>
              <td>{{ order.email }}</td>
              <td>
                <div class="dropdown">
                  <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer" alt="" />
                  <div class="dropdown-content">
                    <a style="cursor: pointer" onclick="window.location.href = '/purchases/edit-income'">Редактировать</a>
                    <hr />
                    <a style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#DeleteInv">Удалить</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="
          pagination
          d-flex
          justify-content-end
          align-items-center
          me-4
          mt-4
        ">
        <div class="d-flex align-items-center gap-3">
          <div>
            <p class="m-0">Показано<span> 2112 12121</span></p>
          </div>

          <div class="page__search-pages d-flex align-content-center">
            <div class="pagination-container d-flex justify-items-center">
              <ul class="pagination pagination-info mb-0 pe-0">
                <li class="page-item">
                  <a class="page-link" href="javascript:;" aria-label="Previous">
                    <span aria-hidden="true"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>
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
                  <a class="page-link" href="javascript:;" aria-label="Next">
                    <span aria-hidden="true"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Filter from "../../components/Filters.vue";
export default {
  data() {
    return {
      status: null,
      buttonText: "",
      orders: [
        {
          id: 0,
          name: "Тихонова А.Р",
          position: 'Кассир',
          phoneNumber: '+7 999 999 99 99',
          email: 'kassir@neutron.kz',
        },
        {
          id: 1,
          name: "Ильясов С.Д",
          position: 'Исполнитель',
          phoneNumber: '+7 322 998 25 09',
          email: 'isp@neutron.kz',
        },
        {
          id: 2,
          name: "Павлов Л.В",
          position: 'Технический директор',
          phoneNumber: '+7 322 998 01 05',
          email: 'tech@neutron.kz',
        },
        {
          id: 3,
          name: "Валерьянов М.С",
          position: 'Full Stack программист',
          phoneNumber: '+7 322 001 15 02',
          email: 'full@neutron.kz',
        },
        {
          id: 4,
          name: "Владосов Л.В",
          position: 'Стажёр',
          phoneNumber: '+7 322 999 07 10',
          email: 'vlv@neutron.kz',
        },

      ],
    };
  },
  components: {
    "the-filter": Filter,
  },
};
</script>

<style scoped>
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
.form__width {
  width: 15.99vw !important;
}

.bg-gradient-dark {
  font-weight: 600;
  font-size: 0.729vw;
  color: #ffffff;
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

.th__col {
  color: #a0aec0 !important;
}

th {
  color: #2d3748;
  font-size: 12px;
}

td {
  font-size: 14px;
  font-weight: 600;
}

.card {
  max-height: 838px;
}

.pagination {
  align-self: end;
}
th{
  text-transform: uppercase !important;
}
</style>
