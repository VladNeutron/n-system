<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid">
      <lists-header>
        <template v-slot:title> Личный профиль </template>
        <template v-slot:description>
          Внесите изменения и не забудьте нажать “Сохранить”
        </template>
      </lists-header>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
