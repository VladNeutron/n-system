<template>
  <div class="dropdown__inv">
    <div class="dropdown__inv__content">
      <slot name="header">default header</slot>
      <slot name="body">test</slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  padding-right: 1.25vw;
  display: flex;
  justify-content: space-between;
  background: #f8f9fa;
  border-radius: 12px;
}
.dropdown__inv {
  margin-top: 1.25vw;
  /* margin-left: 1.25vw; */
  /* margin-right: 0.2vw; */
}
.dropdown__inv__content {
  padding-left: 1.5vw;
  padding-top: 1vw;
  padding-bottom: 1vw;
  padding-right: 1.146vw;
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
