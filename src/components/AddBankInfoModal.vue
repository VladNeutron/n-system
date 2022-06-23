<template>
  <div class="modal fade" id="InfoThird" tabindex="-1" role="dialog" aria-labelledby="InfoThird" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="addinfo__title">
            <p class="addinfo__main">Добавление счета</p>
            <p class="addinfo__sec">
              Заполните данные о своем банковском счете
            </p>
          </div>
          <button class="modal__close" data-bs-dismiss="modal"> <img src="@/assets/img/closemodal.svg"
              style="width:24px;" alt=""> </button>
        </div>
        <div class="modal-body body__p">
          <div class="row accname">
            <div class="col">
              <div class="form-group mb-0">
                <input type="text" class="form-control form-control-lg" id="accName"
                  placeholder="Название счета (Например: Основной)" />
              </div>
            </div>
            <div class="col">
              <div class="types__flex">
                <p class="select__money mb-0">Выберите валюту:</p>
                <div class="money__types">
                  <div :class="[
                    'money__type type__active',
                  
                  ]">
                    <img src="@/assets/img/tenge.svg" style="width: 0.781vw" alt="" />
                  </div>

                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col">
              <div class="form-group">
                <input type="text" class="form-control form-control-lg" id="bankName" placeholder="Название банка" />
              </div>
            </div>
            <div class="col"></div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <input type="text" class="form-control form-control-lg" id="kbe" placeholder="КБЕ" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control form-control-lg" id="bik" placeholder="БИК" />
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <input type="text" class="form-control form-control-lg" id="ikk" placeholder="ИИК" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control form-control-lg" id="inn" placeholder="ИИН/БИН" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moneytype: "",
    };
  },
};
</script>

<style  scoped>
.modal__close {
  border: 0;
  background: transparent;
}

.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  font-weight: 700;
  font-size: 0.833vw;
  padding: 0.729vw 5.208vw 0.729vw 5.208vw;
}

.form-control {
  border: 1px solid #7092e0;
  box-sizing: border-box;
}

.mt {
  padding-top: 1.25vw;
}

.modal-footer {
  border: 0;
  justify-content: center;
}

.body__p {
  padding: 1.667vw 2.083vw 0 2.083vw;
}

.types__flex {
  display: flex;
  align-items: center;
}

.accname {
  align-items: center;
}

.type__active {
  border: 2px solid #7092e0;
}

.money__type {
  display: flex;
  justify-content: center;
  background: #e2e8f0;
  border-radius: 5px;
  width: 1.771vw;
  height: 1.771vw;
  margin-right: 0.417vw;
  cursor: pointer;
}

.money__types {
  display: flex;
}

.select__money {
  font-weight: 400;
  font-size: 0.833vw;
  color: #2d3748;
  margin-right: 0.833vw;
}

.modal-header {
  align-items: flex-start;
  padding: 1.458vw 2.083vw 1.094vw 2.083vw;
}

.addinfo__sec {
  font-weight: 400;
  font-size: 0.833vw;
  color: #a0aec0;
}

.addinfo__main {
  font-weight: 700;
  font-size: 1.563vw;
  color: #252f40;
  margin: 0;
}

.addinfo__title {
  text-align: left;
}

.modal-dialog {
  max-width: 42.97vw;
}

input::placeholder {
  color: #A0AEC0;
  /* font-size: 1.2em;
  font-style: italic; */
}
</style>