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
        <div class="modal-body modal__padding">
          <p class="modal__title">
            Вы уверены, что хотите удалить документ “Инвентаризация №19”?
          </p>
        </div>
        <div class="modal-footer">
          <div class="modal__btns">
            <button type="button" class="del__btn btn btn-outline-dark" data-bs-dismiss="modal">
              Удалить
            </button>
            <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">
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

<style scoped>
.fade {
  background: linear-gradient(
    83.56deg,
    rgba(112, 146, 224, 0.1) 10.01%,
    rgba(139, 174, 243, 0.1) 75.36%
  );
  backdrop-filter: blur(50px);
}
.btn-outline-dark {
  padding: 0.26vw 1.146vw 0.26vw 1.146vw;
}
.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 8px;
  text-transform: uppercase;
  padding: 0.26vw 1.146vw 0.26vw 1.146vw;
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
  font-size: 1.563vw;
  color: #000;
}
.modal-dialog {
  max-width: 47.5vw;
}
</style>