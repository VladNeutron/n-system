<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <lists-header>
            <template v-slot:title> Характеристики </template>
            <template v-slot:description>
              Настройка характеристик товаров
            </template>
          </lists-header>
          <div class="row">
            <div class="col">
              <div class="character">
                <div class="character__header">
                  <div>
                    <div class="d-flex">
                      <p class="character__main">Размеры</p>
                      <img
                        src="@/assets/img/edit.svg"
                        style="
                          width: 1.042vw;
                          margin-left: 0.833vw;
                          cursor: pointer;
                        "
                        @click="isColor = 'sizes'"
                        data-bs-toggle="modal"
                        data-bs-target="#InpModal"
                        alt=""
                      />
                    </div>
                    <p class="character__sec">
                      Настройка характеристики товаров
                    </p>
                  </div>
                  <button
                    class="btn save__btn"
                    @click="isColor = 'create1'"
                    data-bs-toggle="modal"
                    data-bs-target="#InpModal"
                  >
                    <img
                      src="@/assets/img/whtplus.svg"
                      style="width: 1.042vw; margin-right: 0.521vw"
                      alt=""
                    />
                    Добавить размер
                  </button>
                </div>
                <div class="character__body">
                  <table class="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th scope="col" class="th__col" width="15%">№</th>
                        <th
                          scope="col"
                          class="th__col"
                          width="75%"
                          style="text-align: left"
                        >
                          Значение характеристики
                        </th>
                        <th scope="col" class="th__col">Действия</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- v-for="(item, i) in items" :key="item" -->
                      <tr v-for="(item, i) in sizes" :key="item">
                        <td scope="row">
                          {{ i + 1 }}
                        </td>
                        <td style="text-align: left">
                          <span style="margin-left: 0.677vw">{{
                            item.size
                          }}</span>
                        </td>
                        <td class="dropdown">
                          <img
                            src="@/assets/img/dots.svg"
                            style="width: 1.563vw; cursor: pointer"
                            alt=""
                          />
                          <div class="dropdown-content">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#InpModal"
                              @click="isColor = 'size'"
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
            <div class="col">
              <div class="character">
                <div class="character__header">
                  <div>
                    <div class="d-flex">
                      <p class="character__main">Цвета</p>
                      <img
                        src="@/assets/img/edit.svg"
                        style="
                          width: 1.042vw;
                          margin-left: 0.833vw;
                          cursor: pointer;
                        "
                        @click="isColor = 'sizes'"
                        data-bs-toggle="modal"
                        data-bs-target="#InpModal"
                        alt=""
                      />
                    </div>
                    <p class="character__sec">
                      Настройка характеристики товаров
                    </p>
                  </div>
                  <button
                    class="btn save__btn"
                    @click="isColor = 'create2'"
                    data-bs-toggle="modal"
                    data-bs-target="#InpModal"
                  >
                    <img
                      src="@/assets/img/whtplus.svg"
                      style="width: 1.042vw; margin-right: 0.521vw"
                      alt=""
                    />
                    Добавить цвет
                  </button>
                </div>
                <div class="character__body">
                  <table class="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th scope="col" class="th__col" width="15%">№</th>
                        <th
                          scope="col"
                          class="th__col"
                          width="75%"
                          style="text-align: left"
                        >
                          Значение характеристики
                        </th>
                        <th scope="col" class="th__col">Действия</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- v-for="(item, i) in items" :key="item" -->
                      <tr v-for="(item, i) in colors" :key="item">
                        <td scope="row">
                          {{ i + 1 }}
                        </td>
                        <td style="text-align: left">
                          <span style="margin-left: 0.677vw">{{
                            item.name
                          }}</span>
                        </td>
                        <td class="dropdown">
                          <img
                            src="@/assets/img/dots.svg"
                            style="width: 1.563vw; cursor: pointer"
                            alt=""
                          />
                          <div class="dropdown-content">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#InpModal"
                              @click="isColor = 'color'"
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
    </div>
  </main>
  <inputs-modal>
    <template #head>
      <div class="modal__header" v-if="isColor == 'color'">
        <p class="modal__main">Редактирование цвета</p>
      </div>
      <div class="modal__header" v-if="isColor == 'size'">
        <p class="modal__main">Редактирование размера</p>
      </div>
      <div class="modal__header" v-if="isColor == 'sizes'">
        <p class="modal__main">Редактирование названия</p>
      </div>
      <div class="modal__header" v-if="isColor == 'create1'">
        <p class="modal__main">Добавить размер</p>
      </div>
      <div class="modal__header" v-if="isColor == 'create2'">
        <p class="modal__main">Добавить Цвет</p>
      </div>
    </template>
    <template #body>
      <div class="modal__body" v-if="isColor == 'color'">
        <div class="form-group">
          <label for="exampleFormControlInput1" class="modal__label"
            >Название цвета</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Новый цвет"
          />
        </div>
      </div>
      <div class="modal__body" v-if="isColor == 'size'">
        <div class="form-group">
          <label for="exampleFormControlInput1" class="m-0"
            >Введите название</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Новый размер"
          />
        </div>
      </div>
      <div class="modal__body" v-if="isColor == 'sizes'">
        <div class="form-group">
          <label for="exampleFormControlInput1" class="modal__label"
            >Название характеристики</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Новое название"
          />
        </div>
      </div>
      <div
        class="form-group text-start me-2"
        v-if="modalId === 'size' || isColor === 'create1'"
      >
        <label for="Size" class="m-0">Введите размер</label>
        <input class="form-control" id="Size" placeholder="Введите размер" />
      </div>
      <div
        class="form-group text-start me-2"
        v-if="modalId === 'size' || isColor === 'create2'"
      >
        <label for="Size" class="m-0">Введите название</label>
        <input class="form-control" id="Size" placeholder="Введите название" />
      </div>
    </template>
    <template #footer>
      <div class="modal__footer">
        <button class="btn edit__btn">Сохранить</button>
      </div>
    </template>
  </inputs-modal>
  <delete-modal :title="'характеристики'" :text='`значение характеристики "XXL"`'></delete-modal>
</template>

<script>
import InputsModal from "@/components/InputsModal.vue";
export default {
  components: {
    InputsModal,
  },
  data() {
    return {
      isColor: "",
      sizes: [
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
        {
          size: "XXL",
        },
      ],
      colors: [
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
        {
          name: "Белый",
        },
      ],
    };
  },
};
</script>

<style scoped>
.edit__btn {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.729vw 5.906vw 0.729vw 5.906vw;
  text-transform: none;
  font-weight: 700;
  font-size: 0.833vw;
  color: #fff;
}
.modal__footer {
  display: flex;
  justify-content: space-between;
}
.form-control {
  border: 1px solid #a0aec0;
}
.modal__body {
  padding: 1.25vw 2.292vw 0 2.292vw;
}
.modal__label {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
}
.form-group {
  text-align: left;
}
.modal__main {
  font-weight: 700;
  font-size: 1.25vw;
  color: #252f40;
}
.character__body::-webkit-scrollbar {
  background: #e2e8f0;
  border-radius: 0.78vw;
  width: 0.37vw;
}
.character__body::-webkit-scrollbar-thumb {
  border-radius: 0.78vw;
  background-color: #313860;
}
.character__body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.78vw;
  background-color: #e2e8f0;
}
.character__body {
  overflow-y: auto;
  height: 33.729vw;
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
.save__btn {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 0.521vw 1.25vw 0.521vw 1.25vw;
  font-weight: 600;
  font-size: 0.729vw;
  color: #ffffff;
  text-transform: none;
}
.character__sec {
  font-weight: 400;
  font-size: 0.729vw;
  color: #a0aec0;
}
.character__main {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
  margin: 0;
}
.character__header {
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.833vw 1.25vw 0.833vw 1.25vw;
}
.character {
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  padding-bottom: 0.833vw;
}
.company__content {
  padding-left: 2.083vw;
  padding-right: 2.083vw;
  padding-top: 1.823vw;
}
.company__sec {
  font-weight: 400;
  font-size: 0.729vw;
  color: #a0aec0;
}
.company__main {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
  margin: 0;
}
.company__header {
  text-align: left;
}
@media screen and (max-width: 1600px) {
  .btn,
  .modal__label {
    font-size: 12px !important;
  }
  .company__main,
  .character__main {
    font-size: 20px;
  }
  .company__sec,
  .character__sec {
    font-size: 14px;
  }
}
</style>
