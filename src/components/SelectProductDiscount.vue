<template>
  <div class="modal fade" id="SelectDisc" tabindex="-1" role="dialog" aria-labelledby="SelectDisc" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header header-flex">
          <div style="text-align: left">
            <p class="header__main">Выберите товары</p>
            <p class="header__sec">
              Выделите необходимые товары и нажмите “Готово”
            </p>
          </div>
          <img src="@/assets/img/closemodal.svg" style="width: 1.25vw; cursor: pointer" alt=""
            data-bs-dismiss="modal" />
        </div>
        <div class="modal-body">
          <div class="search modal__padding">
            <div class="form-group mb-0" style="text-align: left">
              <label for="search" class="search__label">Добавление товара по назвванию</label>
              <input type="text" class="form-control form-control-lg search__input"
                placeholder="Начните вводить название" id="search" v-model.trim="search" />
            </div>
            <div class="search__buttons">
              <button :class="['left__btn', { active1: onStorage == 'yes' }]" @click="onStorage = 'yes'">
                Есть на складе
              </button>
              <button :class="['right__btn', { active2: onStorage == 'all' }]" @click="onStorage = 'all'">
                Все товары
              </button>
            </div>
          </div>
          <div class="inv__block">
            <div class="inv__content">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" class="th__col" style="border-right: 0">
                      Название товара
                    </th>
                    <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                      Цвет
                    </th>
                    <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                      Размер
                    </th>

                    <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                      Штрихкод
                    </th>
                    <th scope="col" class="th__col" style="border-left: 0"></th>
                  </tr>
                </thead>
                <tbody>
                  <!-- v-for="(item, i) in filteredDiscounts" :key="item" -->
                  <tr v-for="item in paginationList" :key="item">
                    <td style="border-right: 0">{{ item.name }}</td>
                    <td style="border-left: 0; border-right: 0">
                      {{ item.color }}
                    </td>
                    <td style="border-left: 0; border-right: 0">
                      {{ item.size }}
                    </td>
                    <td style="border-left: 0; border-right: 0">
                      {{ item.barcode }}
                    </td>
                    <td style="border-left: 0">
                      <button class="btn add__button" @click="provide(item)"
                        :class="{ added: contains(candidates, item) }">

                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <pagination-component :strAmount="10" :filteredArr="filteredProducts" @PaginationReload="reloadPagination">
          </pagination-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationComponent from './Pagination/PaginationComponent.vue';
export default {
  methods: {
    reloadPagination(arr) {
      this.paginationList = arr;
    },
    provide(item) {
      if (this.candidates.indexOf(item) == -1) {
        this.candidates.push(item);
      }
      else {
        this.candidates.splice(this.candidates.indexOf(item), 1);
      }
    },
    contains(arr, item) {
      return arr.indexOf(item) != -1;

    }
  },
  components: { PaginationComponent },
  data() {
    return {
      candidates: [],
      search: "",
      onStorage: "yes",
      added: false,
      paginationList: [],
      items: [
        {
          name: "Куртка",
          color: "Изумрудный",
          size: "XS",
          barcode: "1234567890",
        },
        {
          name: "Футболка",
          color: "Серая",
          size: "S",
          barcode: "1234567890",
        },
        {
          name: "Джоггеры",
          color: "Красная",
          size: "S",
          barcode: "1234567890",
        },
        {
          name: "Джинсы moms",
          color: "Хаки",
          size: "M",
          barcode: "1234567890",
        },
        {
          name: "Свитер",
          color: "Бежевый",
          size: "L",
          barcode: "1234567890",
        },
        {
          name: "Свитер",
          color: "Бежевый",
          size: "L",
          barcode: "1234567890",
        },
        {
          name: "Свитер",
          color: "Бежевый",
          size: "L",
          barcode: "1234567890",
        },
        {
          name: "Свитер",
          color: "Бежевый",
          size: "L",
          barcode: "1234567890",
        },
        {
          name: "Свитер",
          color: "Бежевый",
          size: "L",
          barcode: "1234567890",
        },
        {
          name: "Свитер",
          color: "Бежевый",
          size: "L",
          barcode: "1234567890",
        },
        {
          name: "Куртка",
          color: "Изумрудный",
          size: "XS",
          barcode: "1234567890",
        },
        {
          name: "Футболка",
          color: "Серая",
          size: "S",
          barcode: "1234567890",
        },
        {
          name: "Джоггеры",
          color: "Красная",
          size: "S",
          barcode: "1234567890",
        },
        {
          name: "Куртка",
          color: "Изумрудный",
          size: "XS",
          barcode: "1234567890",
        },
        {
          name: "Футболка",
          color: "Серая",
          size: "S",
          barcode: "1234567890",
        },
        {
          name: "Джоггеры",
          color: "Красная",
          size: "S",
          barcode: "1234567890",
        },
        {
          name: "Куртка",
          color: "Изумрудный",
          size: "XS",
          barcode: "1234567890",
        },
        {
          name: "Футболка",
          color: "Серая",
          size: "S",
          barcode: "1234567890",
        },
        {
          name: "Джоггеры",
          color: "Красная",
          size: "S",
          barcode: "1234567890",
        },
        {
          name: "Джинсы",
          color: "Красная",
          size: "S",
          barcode: "1234567890",
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.items.filter((item) => {
        return (
          item.name.toLowerCase().includes(this.search.toLowerCase()) ||
          item.barcode.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },

};
</script>

<style scoped>
/* td{
  height: 40px !important;
} */
.inv__content {
  overflow: auto;
  max-height: 60vh;
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

.inv__block {
  margin-top: 1vw;
}

.active1 {
  background: linear-gradient(83.56deg,
      #7092e0 10.01%,
      #8baef3 75.36%) !important;
  border-radius: 8px 0px 0px 8px !important;
  font-weight: 600 !important;
  font-size: 0.833vw !important;
  color: #ffffff !important;
}

.active2 {
  background: linear-gradient(83.56deg,
      #7092e0 10.01%,
      #8baef3 75.36%) !important;
  border-radius: 0px 8px 8px 0px !important;
  font-weight: 600 !important;
  font-size: 0.833vw !important;
  color: #ffffff !important;
}

.search__buttons {
  /* margin-top: 0.7vw; */
}

.form-control {
  border: 1px solid #a0aec0;
  height: 2.344vw;
}

.left__btn {
  background: transparent;
  border: 1px solid #a0aec0;
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: 0;
  padding: 0.469vw 1.823vw 0.469vw 1.823vw;
  font-size: 0.833vw;
  color: #2d3748;
  font-weight: 400;
}

.right__btn {
  background: transparent;
  border: 1px solid #a0aec0;
  box-sizing: border-box;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0.469vw 2.708vw 0.469vw 2.708vw;
  font-size: 0.833vw;
  color: #2d3748;
  font-weight: 400;
}

.search {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.search__label {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}

.search__input {
  width: 18.031vw;
}

.added {
  background: transparent !important;
  border-radius: 5px !important;
  border: 1px solid #2d3748 !important;
  padding: 0.313vw 0.573vw 0.313vw 0.573vw !important;
  font-weight: 400 !important;
  font-size: 0.729vw !important;
  color: #2d3748 !important;
  text-transform: none !important;
}

.added::before {
  content: 'Добавлено' !important;
}

.add__button::before {
  content: 'Добавить'
}

.add__button {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 5px;
  border: 0;
  padding: 0.313vw 0.833vw 0.313vw 0.833vw;
  font-weight: 400;
  font-size: 0.729vw;
  color: #fff;
  text-transform: none;
  margin-bottom: 0;
}

.pagination.pagination-info .page-item.active>.page-link,
.pagination.pagination-info .page-item.active>.page-link:focus,
.pagination.pagination-info .page-item.active>.page-link:hover {
  background-image: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
}

.header__sec {
  font-weight: 400;
  font-size: 0.833vw;
  color: #a0aec0;
  margin-bottom: 0;
}

.header__main {
  margin: 0;
  font-weight: 700;
  font-size: 1.563vw;
  color: #252f40;
}

.header-flex {
  padding: 1.25vw 2.083vw 0.833vw 2.083vw;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.fade {
  background: linear-gradient(83.56deg,
      rgba(112, 146, 224, 0.1) 10.01%,
      rgba(139, 174, 243, 0.1) 75.36%);
  /* backdrop-filter: blur(50px); */
}

.btn-outline-dark {
  padding: 0.625vw 4.219vw 0.625vw 4.219vw;
}

.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 8px;
  text-transform: uppercase;
  padding: 0.625vw 4.219vw 0.625vw 4.219vw;
}

.del__btn {
  margin-right: 3.542vw;
}

.modal-footer {
  margin-top: -1vw;
  justify-content: right;
  border-top: 0;
}

.modal__padding {
  padding-top: 0.1vw;
  padding-left: 2.083vw;
  padding-right: 2.083vw;
}

.modal__title {
  font-weight: 600;
  font-size: 1.042vw;
  color: #2d3748;
}

.modal-dialog {
  max-width: 48.073vw;
}

@media screen and (max-width: 1600px) {
  .inv__content {
    max-height: 52vh;
  }

  td,
  th {
    font-size: 12px;
  }

  .header__main {
    font-size: 20px;
  }

  .header__sec {
    font-size: 14px;
  }

  .btn,
  .search__label {
    font-size: 12px;
  }

  .right__btn,
  .left__btn {
    font-size: 12px;
  }

  .search__input {
    width: 19vw;
    height: 28px;
  }

  .active1,
  .active2 {
    font-size: 12px !important;
  }

  .form-group {
    margin-bottom: 1.3rem;
  }
}

@media screen and (max-width: 1400) {
  .modal-dialog {
    max-width: 54.073vw;
  }
}
</style>
