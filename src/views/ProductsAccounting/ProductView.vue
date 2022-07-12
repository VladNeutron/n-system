<template>
  <div class="page__name d-flex justify-content-between align-items-center ms-4">
    <div class="page__name-title text-start">
      <h3>Карточка товара</h3>
      <p class="mb-0">Внесите изменения и не забудьте нажать “Сохранить”</p>
    </div>
    <div class="page__name-buttons d-flex gap-3 mx-4">
      <router-link :to="{ name: 'product-edit' }"><button class="btn btn-outline-dark mb-0">
          Управление товаром
        </button></router-link>
      <button class="btn bg-gradient-dark mb-0"
        onclick="window.location.href = '/products-accounting/product-list'">Сохранить</button>
    </div>
  </div>
  <div class="main__body d-flex gap-4 m-4">
    <div class="img__card card p-4">
      <div class="d-flex w-100 justify-content-between align-items-center">
        <h5 class="m-0">Изображение товара</h5>
        <img src="@/assets/css/icons/pen.svg" class="img-fluid w-5 me-2" alt="" />
      </div>

      <div class="img__card-img my-3">
        <img src="@/assets/css/images/product.png" class="img-fluid rounded" alt="" />
      </div>
      <div class="img__card-select w-100">
        <div class="form-group text-start me-2">
          <label for="Color" class="mb-2">Выберите цвет</label>
          <select class="form-select" id="Color">
            <option v-for="color in colors" :key="color">
              {{ color.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="card info__card w-100 gap-2 p-4">
      <h5 class="text-start">
        Информация о товаре<span><img class="ms-2" src="@/assets/css/icons/star.svg" alt="" /></span>
      </h5>
      <div class="info__card-top d-flex">
        <div class="form-group m-0 text-start">
          <label for="productName">Название</label>
          <input class="form-control" placeholder="Свитшот мужской" id="productName" type="text" />
        </div>
        <div class="form-group ms-4 text-start">
          <label for="productName">Название на сайте</label>
          <input class="form-control" placeholder="Свитшот мужской" id="productSiteName" type="text" />
        </div>
      </div>
      <div class="info__card-mid d-flex">
        <div class="form-group text-start input-code">
          <label for="SelfPrice">Код товара</label>
          <input class="form-control" placeholder="94324234234" id="ProductCode" type="text" />
        </div>

        <div class="form-group ms-4 input-category text-start">
          <label for="exampleFormControlSelect1" class="order__label">Категория</label>
          <div class="select">
            <select class="form-select" id="exampleFormControlSelect1" style="width: 11.146vw; height:38px;">
              <option selected disabled>Выберите</option>
              <option>Верхняя одежда</option>
              <option>Штаны</option>
            </select>
          </div>
        </div>
      </div>
      <div class="info__card-bottom d-flex gap-4">
        <div class="info__card-quill m-0">
          <p class="text-start fw-bold mb-2">Описание</p>
          <div class="quill-wrapper">
            <div id="editor"></div>
          </div>
        </div>
        <div class="info__card-switches">
          <p class="text-start fw-bold mb-3">Дополнительно</p>
          <div class="form-switch d-flex align-items-center gap-2 mb-3">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked="" />
            <label class="form-check-label text-start m-0" for="flexSwitchCheckDefault">Видимость товаров в
              каталоге</label>
          </div>
          <div class="form-switch form-switch-lg d-flex align-items-center gap-2 mb-2">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked="" />
            <label class="form-check-label text-start m-0" for="flexSwitchCheckDefault">Архивировать</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main__body-info d-flex gap-4 m-4">
    <div class="main__body-left card p-4 pe-6">
      <div class="form-group text-start me-2">
        <label for="warehouse" class="m-0">Выберите склад</label>
        <select class="form-select" id="warehouse">
          <option v-for="warehouse in warehouses" :key="warehouse">
            {{ warehouse.name }}
          </option>
        </select>
      </div>
      <label for="sizes" class="text-start m-0">Размеры по модели</label>
      <div class="main__body-sizes d-flex py-2 gap-3 me-2 pb-3">
        <button v-for="size in sizes" :key="size" :class="[size.available ? 'btn bg-gradient-dark mb-0' : 'btn mb-0']">
          {{ size.name }}
        </button>
        <button v-for="size in sizes" :key="size" :class="[size.available ? 'btn bg-gradient-dark mb-0' : 'btn mb-0']">
          {{ size.name }}
        </button>
      </div>
      <div class="main__body-left_bottom d-flex">
        <div class="radio-wrap text-start mt-4 w-50">
          <label for="colorRadio" class="m-0">Цвета по модели</label>
          <div class="form-check mt-3" v-for="color in colors" :key="color">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="colorRadio" />
            <label class="custom-control-label fw-normal" for="colorRadio">{{
                color.name
            }}</label>
          </div>
        </div>
        <div class="main__body-amount w-50 mt-4">
          <div class="form-group text-start input-category">
            <label for="amount">Количество на складе</label>
            <input class="form-control text-end text-dark fw-bold" placeholder="135" id="amount" type="text" disabled />
          </div>
        </div>
      </div>
    </div>
    <div class="main__body-right d-flex flex-column w-100 card p-4">
      <div class="price__header d-flex justify-content-between align-items-center">
        <h5>Стоимость товаров</h5>
        <filters-button></filters-button>
      </div>
      <div class="articles__content d-flex flex-column mt-4">
        <div class="articles__content-item d-flex justify-content-between align-items-center px-4 pt-1 mb-3 me-4"
          v-for="i in 6" :key="i">
          <div class="d-flex">
            <div class="form-group ms-2 text-start">
              <label for="Size">Размер</label>
              <input class="form-control" placeholder="XS" id="Size" type="text" />
            </div>
            <div class="form-group ms-4 text-start">
              <label for="color">Цвет</label>
              <input class="form-control" placeholder="Белый" id="color" type="text" />
            </div>
            <div class="form-group ms-4 text-start">
              <label for="selfprice">Себестоимость</label>
              <input class="form-control" placeholder="24 000" id="selfprice" type="text" />
            </div>
            <div class="form-group ms-4 text-start">
              <label for="price">Цена</label>
              <input class="form-control" placeholder="31 000" id="price" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <filters>
    <p class="text-start my-2 fw-bold" for="">Цвет</p>
    <select class="form-select">
      <option value="" disabled selected>Выберите цвет</option>
      <option v-for="color of colors" :key="color">
        {{ color.name }}
      </option>
      <option value="">Все цвета</option>
    </select>

    <p class="text-start my-2 fw-bold" for="">Размер</p>
    <select class="form-select">
      <option value="" disabled selected>Выберите размер</option>
      <option v-for="color of sizes" :key="color">
        {{ color.name }}
      </option>
      <option value="">Все размеры</option>
    </select>
  </filters>
</template>

<script>
import Quill from "@/assets/js/plugins/quill.min.js";
import FiltersButton from '@/components/buttons/FiltersButton.vue';
import Filters from '@/components/Filters.vue';
export default {
  components: { FiltersButton, Filters },
  data() {
    return {
      warehouses: [
        { name: `Тц-"Апорт"` },
        { name: `Тц-"Пилот"` },
        { name: `Тц-"Врот"` },
      ],
      sizes: [
        { name: "XS", available: true },
        { name: "S", available: false },
        { name: "M", available: false },
        { name: "L", available: false },
        { name: "XL", available: true },
      ],
      colors: [
        { name: "Белый" },
        { name: "Коричневый" },
        { name: "Бежевый" },
        { name: "Черный" },
        { name: "Серый" },
      ],
      colorSelected: "",
    };
  },
  mounted() {
    if (document.querySelectorAll(".ql-toolbar").length == 0) {
      var quill = new Quill("#editor", {
        theme: "snow", // Specify theme in configuration
      });
    }
  },
};
</script>

<style scoped>
.info__card-quill {
  width: 50%;
}

.ql-toolbar {
  text-align: start;
}

.radio-wrap .form-check-input::after {
  /* width: 0.7375rem !important; */
  /* height: 0.7375rem !important; */
}

label {
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: -0.38723403215408325px;
  text-align: left;
}

.form-group>input,
.form-check-label,
.info__card-switches p {
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.38723403215408325px;
  text-align: left;
}

.form-switch .form-check-input:checked {
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border-color: rgba(112, 146, 224, 1);
}

.page__name-buttons button {
  width: 241px;
  height: 47px;
  font-weight: 700;
  font-size: 16px;
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
  color: #a0aec0;
}

.img__card {
  min-width: 490px;
  min-height: 491px;
  align-items: flex-start;
}

.img__card-img img {
  width: 442px;
  height: 307px;

  object-fit: cover;
}

.info__card-top div {
  width: 380px;
}

.info__card-bottom {
  height: 200px;
}

.input-code {
  width: 380px;
}

.input-category {
  width: 190px;
}

@media screen and (max-width: 1700px) {
  .info__card {
    height: 612px;
  }

  .info__card-bottom {
    flex-direction: column;
  }
}

@media screen and (max-width: 1380px) {
  .quill-wrapper {
    min-width: auto;
  }
}

/* .ql-toolbar,
.ql-snow {
  min-width: 512px;
  width: 100%;
} */

.quill-wrapper {
  width: 512px;
  width: 100%;
  height: 157px;
}

#editor {
  height: 117px;
}

.main__body-info {
  height: 527px;
}

.main__body-left {
  max-width: 490px;
}

.main__body-sizes {
  overflow-x: auto;
}

.articles__content {
  height: 412px;
  overflow-y: auto;
}

.articles__content-item {
  background: #f8f9fa;
  border-radius: 12px;
}

.main__body-sizes::-webkit-scrollbar,
.articles__content::-webkit-scrollbar {
  width: 5px;
  height: 8px;
}

.main__body-sizes::-webkit-scrollbar-track,
.articles__content::-webkit-scrollbar-track {
  background-color: #e9ecef;
  border-radius: 5px;
}

.main__body-sizes::-webkit-scrollbar-thumb,
.articles__content::-webkit-scrollbar-thumb {
  background-color: black;
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}

label {
  font-size: 14px;
}
</style>
<style>
.ql-toolbar {
  text-align: start;
}
</style>
