<template>
    <div class="page__name d-flex justify-content-between align-items-center ms-4">
      <div class="page__name-title text-start">
        <h3>Управление товаром</h3>
        <p class="mb-0">Настройка изображение размеры</p>
      </div>
      <div class="page__name-buttons d-flex gap-3 mx-4">
        <router-link :to="{ name: 'product' }"><button class="btn btn-outline-dark mb-0">Назад</button></router-link>
        <button class="btn bg-gradient-dark mb-0">Сохранить</button>
      </div>
    </div>
    <div class="main__body d-flex gap-4 m-4">
      <div class="img__card card">
        <h5 class="m-0 pt-4 ps-4">Изображение товара</h5>
        <img src="@/assets/css/images/product.png" alt="" />
      </div>

      <div class="card info__card gap-2 p-4">
        <h5 class="text-start mb-2">Информация о товаре</h5>
        <div class="info__card-top d-flex">
          <div class="form-group m-0 text-start">
            <label for="productName">Название</label>
            <input class="form-control" placeholder="Название товара..." id="productName" type="text" />
          </div>
          <div class="form-group ms-4 text-start">
            <label for="productName">Название на сайте</label>
            <input class="form-control" placeholder="Название товара на сайте..." id="productSiteName" type="text" />
          </div>
        </div>
        <div class="info__card-mid d-flex">
          <div class="form-group m-0 text-start">
            <label for="Category">Категория</label>
            <input class="form-control" placeholder="Категория" id="Category" type="text" />
          </div>
          <div class="form-group ms-4 text-start">
            <label for="SelfPrice">Себестоимость</label>
            <input class="form-control" placeholder="6 000" id="SelfPrice" type="text" />
          </div>
          <div class="form-group ms-4 text-start">
            <label for="Price">Цена</label>
            <input class="form-control" placeholder="10 000" id="Price" type="text" />
          </div>
        </div>
        <p class="text-start fs-6 fw-bold mb-2">Дополнительно</p>
        <div class="info__card-bottom">
          <div class="form-switch d-flex align-items-center gap-2 m-0">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked="" />
            <label class="form-check-label text-start m-0" for="flexSwitchCheckDefault">Применить себестоимость и цену
              ко всем артикулам</label>
          </div>
        </div>
      </div>
    </div>
    <div class="main__body-info d-flex gap-4 m-4">
      <div class="main__body-color p-4 card">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="m-0">Управление цветами</h5>
          <button class="btn bg-gradient-dark modal-btn mb-0" @click="getModalId('color')" data-bs-toggle="modal"
            data-bs-target="#InpModal">
            <img class="pe-2 pb-1" src="@/assets/css/icons/add.svg" alt="" />
            Добавить цвет
          </button>
        </div>
        <div class="color-photo mt-2 pe-3">
          <div class="mt-2 me-2" v-for="(color, idx) in colors" :key="color">
            <div class="d-flex justify-content-between mb-2">
              <div>
                <p class="m-0 fw-bold text-start">
                  {{ color }}
                  <span class="ms-2"><img class="pb-1" src="@/assets/css/icons/pen.svg" alt="" /></span>
                </p>
              </div>

              <a class="text-end" href="#"><span><img class="pe-2 pb-1" src="@/assets/css/icons/addPhoto.svg"
                    alt="" /></span>Загрузить фото</a>
            </div>
            <div class="carousel" :class="['carousel-' + idx]">
              <div>
                <img class="carousel-img" src="@/assets/css/images/example.png" alt="" />
              </div>
              <div>
                <img class="carousel-img" src="@/assets/css/images/example.png" alt="" />
              </div>
              <div>
                <img class="carousel-img" src="@/assets/css/images/example.png" alt="" />
              </div>
              <div>
                <img class="carousel-img" src="@/assets/css/images/example.png" alt="" />
              </div>
            </div>
            <div class="arrows d-flex w-0">
              <div class="left-arrow">
                <button class="btn arrow-btn mb-0" @click="prevSlide(idx)">
                  <img src="@/assets/css/icons/leftarrow.svg" alt="" />
                </button>
              </div>
              <div class="right-arrow">
                <button class="btn arrow-btn mb-0" @click="nextSlide(idx)">
                  <img src="@/assets/css/icons/rightarrow.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column w-100 gap-4">
        <div class="main__body-size d-flex flex-column p-4 card">
          <div class="d-flex justify-content-between align-items center">
            <h5 class="text-start text-wrap">Управление размерами</h5>
            <button class="btn bg-gradient-dark mb-0 modal-btn" data-bs-toggle="modal" data-bs-target="#InpModal"
              @click="getModalId('size')">
              <span class="btn-inner--icon pe-2"><img src="@/assets/css/icons/add.svg" alt="" /></span>
              Добавить размер
            </button>
          </div>
          <div class="sizes__body d-flex py-2 gap-3">
            <div v-for="size in sizes" :key="size" @click="selectSize(size)" class="btn mb-0"
              :class="[this.sizeToDelete === size ? 'bg-gradient-dark' : null]">
              {{ size }}
              <span v-if="this.sizeToDelete === size" style="" class="show-btn"><button class="remove-button"
                  @click="deleteSize(size)">
                  x
                </button></span>
            </div>
          </div>
        </div>
        <div class="main__body-articles p-4 card">
          <div class="d-flex justify-content-between align-items center">
            <h5>Артикулы</h5>
            <button class="btn bg-gradient-dark mb-0 modal-btn" data-bs-toggle="modal" data-bs-target="#InpModal"
              @click="getModalId('articles')">
              <span class="btn-inner--icon pe-2"><img src="@/assets/css/icons/add.svg" alt="" /></span>
              Добавить артикул
            </button>
          </div>
          <div class="articles__content d-flex flex-column mt-4">
            <div class="articles__content-item d-flex justify-content-between align-items-center px-4 pt-1 mb-3 me-4"
              v-for="i in 6" :key="i">
              <div class="d-flex">
                <div class="form-group m-0 text-start">
                  <label for="Barcode">Артикул</label>
                  <input class="form-control" placeholder="1204124124" id="Barcode" type="text" />
                </div>
                <div class="form-group ms-4 text-start">
                  <label for="Color">Цвет</label>
                  <input class="form-control" placeholder="Белый" id="Color" type="text" />
                </div>
                <div class="form-group ms-4 text-start">
                  <label for="Size">Размер</label>
                  <input class="form-control" placeholder="XS" id="Size" type="text" />
                </div>
                <div class="form-group ms-4 text-start">
                  <label for="<Article>">Штрихкод</label>
                  <input class="form-control" placeholder="123123123" id="Article" type="text" />
                </div>
              </div>
              <div>
                <button class="delete-btn ms-2">
                  <img src="@/assets/css/icons/delete.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <inputs-modal>
    <template #head>
      <h2 class="text-start">
        Добавление
        {{
            modalId === "articles"
              ? "артикула"
              : modalId === "color"
                ? "цвета"
                : "размера"
        }}
      </h2>
    </template>
    <template #body>
      <div class="form-group text-start me-2" v-if="modalId === 'articles' || modalId === 'color'">
        <label for="Color" class="m-0">Выберите цвет</label>
        <select class="form-select" id="Color" v-model="colorSelected">
          <option v-for="color in colors" :key="color">
            {{ color }}
          </option>
        </select>
        <a href="#" class="text-end" v-if="!colorCreateButton" @click="colorCreateButton = true">+ Создать цвет</a>
        <div class="form-group mt-2 d-flex gap-3 text-start" v-if="colorCreateButton">
          <input class="form-control" placeholder="Название цвета" id="Color" type="text" v-model="colorInput" />
          <img src="@/assets/css/icons/agree.svg" alt="add" @click="addColor()" />
          <img src="@/assets/css/icons/cancel.svg" alt="cancel" @click="colorCreateButton = false" />
        </div>
      </div>
      <div class="form-group text-start me-2" v-if="modalId === 'size' || modalId === 'articles'">
        <label for="Size" class="m-0">Выберите размер</label>
        <select class="form-select" id="Size" v-model="sizeSelected">
          <option v-for="size in sizes" :key="size">
            {{ size }}
          </option>
        </select>
        <a href="#" class="" v-if="!sizeCreateButton" @click="sizeCreateButton = true">+ Создать размер</a>
        <div class="form-group mt-2 d-flex gap-3 text-start" v-if="sizeCreateButton">
          <input class="form-control" placeholder="Название размера" id="Size" type="text" v-model="sizeInput" />
          <img src="@/assets/css/icons/agree.svg" alt="add" @click="addSize()" />
          <img src="@/assets/css/icons/cancel.svg" alt="cancel" @click="sizeCreateButton = false" />
        </div>
      </div>
      <div class="modal__barcode d-flex" v-if="modalId === 'articles'">
        <div class="modal__barcode-size w-50 text-start">
          <div class="form-group mx-4 text-start">
            <label for="Article" class="mt-2 ms-4 fw-light">Артикул</label>
            <input class="form-control" placeholder="123123123" id="Article" type="text" v-model="articleInput" />
          </div>
        </div>

        <div class="modal__barcode-generate w-50 text-start">
          <div class="form-group mx-4 text-start">
            <label for="Barcode" class="mt-2 ms-4 fw-light">Штрихкод</label>
            <input class="form-control" placeholder="123123123" id="Barcode" type="text" v-model="barcodeInput" />
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <button class="btn bg-gradient-dark w-80">Добавить</button>
    </template>
  </inputs-modal>
</template>

<script>
import InputsModal from "../../components/InputsModal.vue";

export default {
  data() {
    return {
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Белый", "Коричневый", "Бежевый", "Черный", "Серый"],
      selected: "",
      modalId: "",
      sizeSelected: "",
      sizeToDelete: "",
      colorSelected: "",
      sizeCreateButton: false,
      colorCreateButton: false,
      sizeInput: "",
      colorInput: "",
      articleInput: "",
      barcodeInput: "",
      productInfo: [],
    };
  },
  components: {
    InputsModal,
  },
  methods: {
    addSize() {
      this.sizes.push(this.sizeInput);
      this.sizeInput = "";
    },
    addColor() {
      this.colors.push(this.colorInput);
      this.colorInput = "";
    },
    getModalId(id) {
      return (this.modalId = id);
    },
    selectSize(size) {
      if (this.sizeToDelete === size) {
        this.sizeToDelete = "";
      } else this.sizeToDelete = this.sizes.find((s) => s === size);
    },
    deleteSize(size) {
      this.sizes = this.sizes.filter((el) => el !== size);
    },
    prevSlide(id) {
      $(`.carousel-${id}`).slick("slickPrev");
    },
    nextSlide(id) {
      $(`.carousel-${id}`).slick("slickNext");
    },
  },

  mounted() {
    $(".carousel").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
    });
  },
};
</script>

<style scoped>
.show-btn {
  position: relative;
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
a {
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.38723403215408325px;
  text-align: left;
}

.arrows {
  position: relative;
  top: -60px;
}

.arrows button {
  width: 24px;
  height: 24px;
  background: silver;
  border: none;
  border-radius: 25px;
}

.arrow-btn {
  padding: 0;
}

.arrows img {
  width: 15px;
  height: 15px;
}

.left-arrow {
  position: relative;
  right: -5px;
}

.right-arrow {
  position: relative;
  right: -360px;
}

.carousel-img {
  border-radius: 5px;
  width: 130px;
}

.slick-slide {
  margin: 0 8px 0 0;
}

.slick-list {
  margin: 0 -8px 0 0;
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

.remove-button {
  position: absolute;
  top: -20px;
  right: -30px;
  height: 24px;
  width: 24px;
  border: none;
  border-radius: 12px;
  background-color: #a0aec0;
  color: white;
}

.info__card {
  width: 100%;
}

.info__card-top div {
  width: 380px;
}

.info__card-mid div {
  width: 191px;
}

.img__card {
  min-width: 490px;
  align-items: flex-start;
}

.img__card img {
  min-width: 442px;
  min-height: 248px;
  padding: 24px;
}

.main__body-color {
  min-width: 490px;
  max-width: 490px;
  height: 590px;
}

.color-photo {
  overflow-y: auto;
}

.main__body-size {
  height: 145px;
  width: 100%;
}

.modal-btn {
  height: 40px;
  padding: 10px 24px;
}

.articles__content-item {
  background: #f8f9fa;
  border-radius: 12px;
}

.delete-btn {
  height: 50px;
  width: 50px;
  border-radius: 8px;
  background: rgba(160, 174, 192, 0.3);
  border: none;
}

.main__body-articles {
  height: 420px;
}

.articles__content {
  height: 305px;
  overflow-y: auto;
}

.articles__content::-webkit-scrollbar,
.sizes__body::-webkit-scrollbar,
.color-photo::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.articles__content::-webkit-scrollbar-track,
.sizes__body::-webkit-scrollbar-track,
.color-photo::-webkit-scrollbar-track {
  background-color: #e9ecef;
  border-radius: 5px;
}

.articles__content::-webkit-scrollbar-thumb,
.sizes__body::-webkit-scrollbar-thumb,
.color-photo::-webkit-scrollbar-thumb {
  background-color: black;
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}

.modal__barcode {
  border: 1px solid #e2e8f0;
  background-color: #f8f9fa;
  border-radius: 12px;
}

.modal__barcode-size {
  border-right: 1px solid #e2e8f0;
}
</style>
