<template>
  <div class="px-2">
    <div class="d-flex justify-content-between align-items-center">
      <div class="page__name-title text-start">
        <h3>Информация о контрагенте</h3>
        <p class="mb-0">Внесите изменения и нажмите “Сохранить”</p>
      </div>
      <div>
        <button class="btn bg-gradient-info">Сохранить изменения</button>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col">
        <div class="form-group text-start">
          <label for="exampleFormControlInput1" class="about__label"
            >Название компании</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="ТОО “Рога и Копыта”"
          />
        </div>
        <div class="form-group text-start">
          <label for="exampleFormControlSelect2" class="about__label"
            >Тип компании</label
          >
          <select class="form-select" id="exampleFormControlSelect2">
            <option>Онлайн-магазин</option>
            <option>ТОО</option>
            <option>ООО</option>
            <option>ОАО</option>
          </select>
        </div>
        <div class="form-group text-start">
          <label for="exampleFormControlSelect3" class="about__label"
            >Тип налогооблажения</label
          >
          <select class="form-select" id="exampleFormControlSelect3">
            <option>УСН</option>
            <option>ТОО</option>
            <option>ООО</option>
            <option>ОАО</option>
          </select>
        </div>
        <div class="form-group text-start">
          <label for="exampleFormControlInput2" class="about__label"
            >ИИН/БИН</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="0987654323456789"
          />
        </div>
        <div class="form-group text-start">
          <label for="exampleFormControlTextarea2" class="about__label"
            >Юридический адрес</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea2"
            rows="2"
            placeholder="521370, Саратовская область, город Люберцы, пл. 1905 года, 5"
          ></textarea>
        </div>
        <div class="form-group text-start">
          <label for="exampleFormControlTextarea3" class="about__label"
            >Фактический адрес</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea3"
            rows="2"
            placeholder="521370, Саратовская область, город Люберцы, пл. 1905 года, 5"
          ></textarea>
        </div>
      </div>
      <div class="col">
        <div class="form-group text-start">
          <label for="exampleFormControlInput3" class="about__label"
            >ФИО Директора</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput3"
            placeholder="Иванов Иван Иванович"
          />
        </div>
        <div class="form-group text-start">
          <label for="exampleFormControlInput4" class="about__label"
            >Контактный телефон</label
          >
          <input
            type="tel"
            class="form-control phone__org"
            id="exampleFormControlInput4"
            placeholder="+7 707 123 45 67"
          />
        </div>
        <div class="form-group text-start">
          <label for="exampleFormControlInput5" class="about__label"
            >E-mail</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput5"
            placeholder="ivan.ivaaaaan@gmail.com"
          />
        </div>
        <div>
          <div class="text-start">
            <p class="vat__text mb-2 mt-4">Тип контрагента?</p>
          </div>
          <div class="d-flex">
            <div class="form-check">
              <label class="custom-control-label" for="customRadio1"
                >Клиент</label
              >
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="customRadio1"
              />
            </div>
            <div class="form-check mb-4" style="margin-left: 2.083vw">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="customRadio2"
              />
              <label class="custom-control-label" for="customRadio2"
                >Поставщик</label
              >
            </div>
          </div>
        </div>
        <div>
          <div class="text-start">
            <p class="vat__text mb-2">Плательщик НДС?</p>
          </div>
          <div class="d-flex">
            <div class="form-check">
              <label class="custom-control-label" for="customRadio3">Да</label>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault1"
                id="customRadio3"
              />
            </div>
            <div class="form-check" style="margin-left: 2.083vw">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault1"
                id="customRadio4"
              />
              <label class="custom-control-label" for="customRadio4">Нет</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="form-group text-start">
          <label for="exampleFormControlInput6" class="about__label"
            >Контактное лицо</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput6"
            placeholder="Иванов Иван Иванович"
          />
        </div>
        <div class="form-group text-start">
          <label for="exampleFormControlInput7" class="about__label"
            >Телефон контактного лица</label
          >
          <input
            type="tel"
            class="form-control phone__org2"
            id="exampleFormControlInput7"
            placeholder="+7 707 123 45 67"
          />
        </div>
        <div class="form-group text-start">
          <label for="exampleFormControlTextarea4" class="about__label"
            >Комментарий</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea4"
            rows="2"
            placeholder="Введите комментарий"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var element = document.getElementsByClassName("phone__org")[0];
    var maskOptions = {
      mask: "+{7}(000)000-00-00",
    };
    var mask = IMask(element, maskOptions);
    var element2 = document.getElementsByClassName("phone__org2")[0];
    var maskOptions2 = {
      mask: "+{7}(000)000-00-00",
    };
    var mask = IMask(element2, maskOptions2);
  },
};
</script>

<style scoped>
.vat__text {
  font-weight: 600;
  font-size: 14px;
  color: #2d3748;
}
.about__label {
  color: #2d3748;
}
.bg-gradient-info {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
}
</style>
