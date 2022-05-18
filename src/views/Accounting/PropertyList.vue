<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
              <template v-slot:title> Список имуществ </template>
              <template v-slot:description>
                Внесите изменения и не забудьте  нажать “Сохранить”
              </template>
          </lists-header>
          <div class="card pt-4 pb-6">
            <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
              <div>
                <button class="btn bg-gradient-dark mb-0" style="margin-right: 0.833vw" data-bs-toggle="modal"
                data-bs-target="#InpModal"  @click="isEdit = 'no'">
                  <img src="@/assets/img/whtplus.svg" alt="" /> Добавить имущество
                </button>
              </div>
            </div>
            <div class="page__table">
              <table class="table table-hover">
                <thead>
                  <tr class="">
                    
                    <th width="1%" scope="col" class="th__col">№</th>
                    <th scope="col" class="th__col">Название имущества</th>
                    <th scope="col" class="th__col">Тип имущества</th>
                    <th scope="col" class="th__col">Стоимость</th>
                    <th scope="col" class="th__col">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(order, i) of orders" :key="order.id">
                    <th width="1%">{{ i + 1 }}</th>
                    <td>{{ order.name}}</td>
                    <td>{{ order.type }}</td>
                    <td>{{ order.price }} ₸</td>
                    <td>
                      <div class="dropdown">
                        <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer" alt="" />
                        <div class="dropdown-content">
                          <a style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#InpModal" @click="isEdit = 'yes'">Редактировать</a>
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
        </div>
      </div>
    </div>
    <inputs-modal>
      <template #head>
        <div style="text-align: left" v-if="isEdit == 'no'">
          <p class="header__main">Добавление имущества</p>
          <p class="header__sec">Введите данные имущества и нажмите “Добавить”</p>
        </div>
        <div style="text-align: left" v-if="isEdit == 'yes'">
          <p class="header__main">BMW X15</p>
          <p class="header__sec">Измените данные и нажмите “Сохранить”</p>
        </div>
      </template>
      <template #body>
        <div class="clients__modal" v-if="isEdit == 'no'">
          <div class="form-group">
            <label for="example-text-input" class="form-control-label"
              >Название</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Введите название"
              id="example-text-input"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="Статус заявки"
              >Тип имущества</label
            >
            <select class="form-select">
              <option selected disabled>Выберите</option>
              <option >Мебель</option>
              <option >Недвижимость</option>
            </select>
          </div>
          <div class="form-group">
            <label for="example-text-input1" class="form-control-label"
              >Стоимость</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Введите стоимость"
              id="example-text-input1"
            />
          </div>
        </div>
        <div class="clients__modal" v-if="isEdit == 'yes'">
          <div class="form-group">
            <label for="example-text-input" class="form-control-label"
              >Название</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Введите название"
              id="example-text-input"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="Статус заявки"
              >Тип имущества</label
            >
            <select class="form-select">
              <option selected disabled>Выберите</option>
              <option >Мебель</option>
              <option >Недвижимость</option>
            </select>
          </div>
          <div class="form-group">
            <label for="example-text-input1" class="form-control-label"
              >Стоимость</label
            >
            <input
              class="form-control"
              type="text"
              placeholder="Введите стоимость"
              id="example-text-input1"
            />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="clients__footer" v-if="isEdit == 'no'">
          <button class="btn bg-gradient-dark">Добавить</button>
        </div>
        <div class="clients__footer" v-if="isEdit == 'yes'">
          <button class="btn bg-gradient-dark">Сохранить</button>
        </div>
        <div class="clients__footer" v-if="isEdit == 'yes'">
          <button class="btn btn-outline-dark">Удалить имущество</button>
        </div>
      </template>
    </inputs-modal>
  </main>
</template>

<script>
import Filter from "../../components/Filters.vue";
import InputsModal from "@/components/InputsModal.vue";
export default {
  data() {
    return {
      status: null,
      buttonText: "",
      orders: [
        {
          id: 0,
          name: "BMW M5",
          type: 'Транспорт',
          price: 999999,
        },
        {
          id: 1,
          name: "Дом на Саина",
          type: 'Недвижимость',
          price: 7540000,
        },
        {
          id: 2,
          name: "Дом в Алмате",
          type: 'Недвижимость',
          price: 9650421,
        },
        {
          id: 3,
          name: "Техника",
          type: 'Техника',
          price: 965421,
        },
        {
          id: 4,
          name: "Офисный стеллаж",
          type: 'Мебель',
          price: 95421,
        },
      ],
      isEdit: 'no',
    };
  },
  components: {
    "the-filter": Filter,
    'inputs-modal': InputsModal,
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

/* FORM */
.clients__footer{
  flex-grow: 1;
  width: 100%;
}
.clients__footer button{
  width: 60%;
}
.form-group{
  text-align: left;
}
</style>
