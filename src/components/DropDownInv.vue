<template>
  <div class="dropdown__inv">
    <div class="dropdown__inv__content">
      <slot name="header">default header</slot>
      <div class="drowdown__items">
        <div class="items__block">
          <p class="items__title">№ инвентаризации</p>
          <p class="items__text">№ 19</p>
        </div>
        <div class="items__block">
          <p class="items__title">дата и время</p>
          <p class="items__text">11 ноя, 19:23, 2021</p>
        </div>
        <div class="items__block">
          <p class="items__title">Склад</p>
          <div class="dropdown">
            <p class="items__tex items__flex" style="cursor: pointer">
              ТРЦ Москва
              <img
                src="@/assets/img/down.svg"
                class="rotate"
                style="width: 0.729vw; margin-left: 0.417vw"
                alt=""
              />
            </p>
            <div class="dropdown-content">
              <a style="cursor: pointer">ТЦ Европейский</a>
              <hr />
              <a style="cursor: pointer">ТРЦ Jam Moll</a>
            </div>
          </div>
        </div>
        <div class="items__block">
          <p class="items__title">Ответственный</p>

          <div class="dropdown">
            <p class="items__text items__flex" style="cursor: pointer">
              Тихонов Александр
              <img
                src="@/assets/img/down.svg"
                class="rotate"
                style="width: 0.729vw; margin-left: 0.417vw"
                alt=""
              />
            </p>
            <div class="dropdown-content">
              <a style="cursor: pointer">Антон</a>
              <hr />
              <a style="cursor: pointer">Валера</a>
              <hr />
              <a style="cursor: pointer">Влад</a>
            </div>
          </div>
        </div>
        <div class="items__block">
          <p class="items__title">Статус инвентаризации</p>
          <p class="items__text">
            <span style="cursor: pointer">Завершена</span>,
            <span style="cursor: pointer">не закрыта</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.items__flex {
  display: flex;
}
.dropdown {
  display: inline-block;
  position: relative;
}
.dropdown-content {
  text-align: left;
  display: none;
  position: absolute;
  width: 9.815vw;
  overflow: auto;
  background: #f8f9fa;
  box-shadow: 2px 2px 5.5px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  right: -1.5vw;
  z-index: 1;
  padding: 0.625vw 0.625vw 0.625vw 0.625vw;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .rotate {
  transform: rotate(180deg);
  transition: 0.5s;
}
.dropdown-content a {
  display: block;
  color: #2d3748;
  text-decoration: none;
}
.items__title {
  font-weight: 600;
  font-size: 0.625vw;
  color: #a0aec0;
  text-transform: uppercase;
}
.items__text {
  font-weight: 600;
  font-size: 0.729vw;
  color: #2d3748;
  text-align: left;
}
.drowdown__items {
  padding-top: 1.042vw;
  padding-left: 1.25vw;
  display: flex;
  justify-content: space-between;
  background: #f8f9fa;
  border-radius: 12px;
}
.dropdown__inv {
  margin-top: 1.25vw;
  margin-left: 1.25vw;
  margin-right: 3.646vw;
}
.dropdown__inv__content {
  padding-left: 1.146vw;
  padding-top: 1.094vw;
  padding-bottom: 2.24vw;
  padding-right: 3.385vw;
}
.dropdown__title {
  font-weight: 600;
  font-size: 0.938vw;
  color: #2d3748;
  text-align: left;
}
.dropdown__inv {
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
}
</style>