<template>
  <div
    class="modal fade"
    id="DeleteInv"
    tabindex="-1"
    role="dialog"
    aria-labelledby="DeleteInv"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header header-flex">
          <div style="text-align: left">
            <p class="header__main">Удаление записи</p>
            <p class="header__sec">Подтвердите свои действия</p>
          </div>
          <img
            src="@/assets/img/closemodal.svg"
            style="width: 1.25vw; cursor: pointer"
            alt=""
            data-bs-dismiss="modal"
          />
        </div>
        <div class="modal-body modal__padding">
          <slot name="header">default header</slot>
        </div>
        <div class="modal-footer">
          <div class="modal__btns">
            <button
              type="button"
              class="del__btn btn btn-outline-dark"
              data-bs-dismiss="modal"
            >
              Удалить
            </button>
            <button
              type="button"
              class="btn bg-gradient-secondary"
              data-bs-dismiss="modal"
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.header__sec {
  font-weight: 400;
  font-size: 0.833vw;
  color: #a0aec0;
}
.header__main {
  margin: 0;
  font-weight: 700;
  font-size: 1.563vw;
  color: #252f40;
}
.modal__body__text {
  font-weight: 600;
  font-size: 20.006px;
  color: #2d3748;
}
</style>
<style scoped>
.header__sec {
  font-weight: 400;
  font-size: 0.833vw;
  color: #a0aec0;
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
.btn-outline-dark {
  padding: 0.625vw 4.219vw 0.625vw 4.219vw;
  font-size: 16px;
  font-weight: 700;
}
.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 8px;
  text-transform: uppercase;
  padding: 0.625vw 4.219vw 0.625vw 4.219vw;
  font-size: 16px;
  font-weight: 700;
}
.del__btn {
  margin-right: 3.542vw;
}
.modal-footer {
  justify-content: center;
  border-top: 0;
}
.modal__padding {
  padding-top: 1.563vw;
  padding-left: 6.667vw;
  padding-right: 6.667vw;
}
.modal__title {
  font-weight: 600;
  font-size: 1.042vw;
  color: #2d3748;
}
.modal-dialog {
  max-width: 34.219vw;
}
</style>
