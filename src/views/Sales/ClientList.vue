<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <lists-header>
          <template v-slot:title> Список клиентов </template>
          <template v-slot:description>
            Внесите изменения и не забудьте нажать “Сохранить”
          </template>
        </lists-header>
        <!-- <div class="inv__title">
            <p class="inv__title__text">Список клиентов</p>
            <p class="inv__sec__text">
              Внесите изменения и не забудьте нажать “Сохранить”
            </p>
          </div> -->
        <div class="card">
          <div class="inv__buttons p-4">
            <div class="inv__left__btn">
              <button type="button" class="btn bg-gradient-secondary mb-0" data-bs-toggle="modal"
                data-bs-target="#InpModal" @click="isEdit = 'no'">
                <img src="@/assets/img/whtplus.svg" style="width: 20.006px; margin-right: 0.729vw" alt="" />
                Добавить клиента
              </button>
            </div>
            <div class="inv__right__btn gap-3">
              <list-search @searchFilter="(a) => search = a"></list-search>
              <print-button></print-button>
              <download-button></download-button>
            </div>
          </div>
          <div class="inv__block">
            <div class="inv__content">
              <table class="table table-hover table-striped">
                <thead>
                  <tr>

                    <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                      ФИО клиента
                    </th>
                    <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                      Номер телефона
                    </th>
                    <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                      Email
                    </th>
                    <th scope="col" class="th__col" style="border-left: 0; border-right: 0">
                      Адрес доставки
                    </th>

                    <th scope="col" class="th__col" style="border-left: 0">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- v-for="(item, i) in filteredClients" :key="item" -->
                  <tr v-for="item in paginationList" :key="item">
                    <td style="border-left: 0; border-right: 0">
                      {{ item.name }}
                    </td>
                    <td style="border-left: 0; border-right: 0">
                      {{ item.phone }}
                    </td>
                    <td style="border-left: 0; border-right: 0">
                      {{ item.email }}
                    </td>
                    <td style="border-left: 0; border-right: 0">
                      {{ item.adres }}
                    </td>
                    <td style="border-left: 0">
                      <div class="dropdown">
                        <img src="@/assets/img/dots.svg" style="width: 1.563vw; cursor: pointer" alt="" />
                        <div class="dropdown-content">
                          <a style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#InpModal"
                            @click="isEdit = 'yes'">Редактировать</a>
                          <hr />
                          <a style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#DeleteInv">Удалить</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <pagination-component :filteredArr="filteredClients" :strAmount="10" @pagination-reload="reloadPagination"
            class="mb-4"></pagination-component>
        </div>
      </div>
    </div>
  </div>
  <inputs-modal>
    <template #head>
      <div style="text-align: left" v-if="isEdit == 'no'">
        <p class="header__main">Добавление клиента</p>
        <p class="header__sec">Измените данные и нажмите “Сохранить”</p>
      </div>
      <div style="text-align: left" v-if="isEdit == 'yes'">
        <p class="header__main">Карточка клиента</p>
        <p class="header__sec">Измените данные и нажмите “Сохранить”</p>
      </div>
    </template>
    <template #body>
      <div class="clients__modal" v-if="isEdit == 'no'">
        <div class="form-group">
          <label for="example-text-input" class="form-control-label">ФИО клиента</label>
          <input class="form-control" type="text" placeholder="ФИО клиента" id="example-text-input" />
        </div>
        <div class="form-group">
          <label for="example-text-input1" class="form-control-label">Номер телефона</label>
          <input class="form-control" type="text" placeholder="Введите номер телефона" id="example-text-input1" />
        </div>
        <div class="form-group">
          <label for="example-text-input2" class="form-control-label">Email</label>
          <input class="form-control" type="text" placeholder="Введите email" id="example-text-input2" />
        </div>
        <div class="form-group">
          <label for="example-text-input3" class="form-control-label">Адрес доставки</label>
          <input class="form-control" type="text" placeholder="Введите адрес доставки" id="example-text-input3" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1" class="form-control-label">Комментарии</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"
            placeholder="Введите комментарий"></textarea>
        </div>
      </div>
      <div class="clients__modal" v-if="isEdit == 'yes'">
        <div class="form-group">
          <label for="example-text-input" class="form-control-label">ФИО клиента</label>
          <input class="form-control" type="text" placeholder="ФИО клиента" id="example-text-input" />
        </div>
        <div class="form-group">
          <label for="example-text-input1" class="form-control-label">Номер телефона</label>
          <input class="form-control" type="text" placeholder="Введите номер телефона" id="example-text-input1" />
        </div>
        <div class="form-group">
          <label for="example-text-input2" class="form-control-label">Email</label>
          <input class="form-control" type="text" placeholder="Введите email" id="example-text-input2" />
        </div>
        <div class="form-group">
          <label for="example-text-input3" class="form-control-label">Адрес доставки</label>
          <input class="form-control" type="text" placeholder="Введите адрес доставки" id="example-text-input3" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1" class="form-control-label">Комментарии</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"
            placeholder="Введите комментарий"></textarea>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="clients__footer">
        <button class="btn clients__save" v-if="isEdit == 'yes'" data-bs-dismiss="modal">Сохранить</button>
        <button class="btn clients__save" v-if="isEdit == 'no'" data-bs-dismiss="modal">Добавить</button>
        <button class="btn clients__delete" data-bs-toggle="modal" data-bs-target="#DeleteInv" v-if="isEdit == 'yes'">
          Удалить клиента
        </button>
      </div>
    </template>
  </inputs-modal>
  <delete-modal :title="'возврата'" :text="`клиента &quot;Курочкин Василий Петрович&quot;`"></delete-modal>
</template>

<script>
import InputsModal from "@/components/InputsModal.vue";
import { CloseInvModal } from "@/assets/js/closeModalDeleteOpen";
export default {
  components: {
    InputsModal,
  },
  data() {
    return {
      isEdit: "",
      items: [
        {
          name: "Курочкин Василий Петрович",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
          adres: "г. Алматы, ул. Байзакова д. 280, кв. 12",
        },
        {
          name: "Курочкин Василий Петрович",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
          adres: "г. Алматы, ул. Байзакова д. 280, кв. 12",
        },
        {
          name: "Курочкин Василий Петрович",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
          adres: "г. Алматы, ул. Байзакова д. 280, кв. 12",
        },
        {
          name: "Курочкин Василий Петрович",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
          adres: "г. Алматы, ул. Байзакова д. 280, кв. 12",
        },
        {
          name: "Курочкин Василий Петрович",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
          adres: "г. Алматы, ул. Байзакова д. 280, кв. 12",
        },
        {
          name: "Курочкин Василий Петрович",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
          adres: "г. Алматы, ул. Байзакова д. 280, кв. 12",
        },
        {
          name: "Курочкин Василий Петрович",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
          adres: "г. Алматы, ул. Байзакова д. 280, кв. 12",
        },
        {
          name: "Курочкин Василий Петрович",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
          adres: "г. Алматы, ул. Байзакова д. 280, кв. 12",
        },
        {
          name: "Курочкин Василий Петрович",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
          adres: "г. Алматы, ул. Байзакова д. 280, кв. 12",
        },
        {
          name: "Курочкин Василий Петрович",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
          adres: "г. Алматы, ул. Байзакова д. 280, кв. 12",
        },
        {
          name: "Курочкин Василий Петрович",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
          adres: "г. Алматы, ул. Байзакова д. 280, кв. 12",
        },
        {
          name: "Курочкин Василий Петрович",
          phone: "+7 705 6665599",
          email: "v.kurochkin@gmail.com",
          adres: "г. Алматы, ул. Байзакова д. 280, кв. 12",
        },
      ],
      search: "",
      paginationList: [],
    };
  },
  methods: {
    reloadPagination(arr) {
      // console.log(arr);
      this.paginationList = arr;
    },
  },
  computed: {
    filteredClients() {
      return this.items.filter((item) => {
        return (
          item.name.toLowerCase().includes(this.search.toLowerCase()) ||
          item.phone.toString().includes(this.search.toLowerCase()) ||
          item.email.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
    paginationAmount() {
      if (document.documentElement.clientWidth < 1700) {
        return 7;
      } else {
        return 9;
      }
    },
  },
  mounted() {
    CloseInvModal();
  },
};
</script>

<style scoped>
.clients__delete {
  text-transform: none;
  border: 0;
  background: transparent;
  font-weight: 600;
  font-size: 0.833vw;
  color: #2d3748;
  box-shadow: none;
}

.clients__delete:hover {
  box-shadow: none;
}

.clients__footer {
  display: flex;
  flex-direction: column;
}

.clients__save {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.729vw 5.208vw 0.729vw 5.208vw;
  text-transform: none;
  font-weight: 700;
  font-size: 0.833vw;
  color: #ffffff;
}

.form-control-label {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}

.form-group {
  text-align: left;
}

.pagination {
  margin-top: 0.433vw;
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

.inv__left__btn {
  display: flex;
}

.inv__title {
  text-align: left;
}

.inv__title__text {
  font-weight: 600;
  font-size: 24px;
  color: #2d3748;
  margin: 0;
}

.inv__sec__text {
  font-weight: 400;
  font-size: 14px;
  color: #a0aec0;
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
  max-height: 80vh;
}

.inv__content {
  height: 30vw;
  overflow-y: auto;
}

.inv__btn {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 13.44px;
}

.inv__btn,
.inv__inp {
  margin-right: 0.521vw;
}

.inv__inp {
  width: 15.99vw;
}

.inv__right__btn {
  display: flex;
  align-items: flex-start;
}

.bg-gradient-secondary {
  display: flex;
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 8.006px;
  padding: 10.003px 24px 11.002px 24px;
  font-weight: 600;
  font-size: 13.997px;
  align-items: center;
  height: 40px;
  text-transform: none;
}

.inv__buttons {
  display: flex;
  justify-content: space-between;
}
</style>
