<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    
      
        <div class="storage__padding">
          <div class="storage__header">
            <div class="storage__name">
              <p class="storage__main">Печать штрихкода</p>
              <p class="storage__sec">
                Выберите штрихкоды из списка и нажмите "Перейти к печати"
              </p>
            </div>
          </div>

          
        </div>
      
    
  </main>
</template>

<script>

export default {
  
};
</script>

<style scoped>

.storage__sec {
  font-weight: 400;
  font-size: 0.729vw;
  color: #a0aec0;
}
.storage__main {
  margin: 0;
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
}
.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11),
    0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  font-weight: 700;
  font-size: 0.833vw;
  padding: 0.729vw 3.302vw 0.729vw 3.302vw;
  text-transform: none;
}
.storage__name {
  text-align: left;
}
.storage__header {
  display: flex;
  justify-content: space-between;
}
.storage__padding {
  padding: 1.475vw 2.083vw 1vw 2.083vw;
}
</style>