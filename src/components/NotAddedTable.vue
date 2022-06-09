<template>
  <div class="not__added">
            <div>
              <img src="@/assets/img/add.png" style="width: 6.667vw" alt="" />
              <p class="not__added__main">Товары не выбраны</p>
              <p class="not__added__sec">
                Для того, чтобы создать {{documentName}}, необходимо<br />
                выбрать товары из списка
              </p>
              <button class="btn btn__chose" data-bs-toggle="modal" data-bs-target="#SelectDisc">Выбрать из списка</button>
            </div>
          </div>
</template>

<script>
export default {
    props:{
        documentName: {
            default: 'документ'
        }
    }

}
</script>

<style scoped>
.not__added {
  padding-bottom: 130px;
  text-align: center;
}
.not__added__main {
  font-weight: 600;
  font-size: 1.25vw;
  color: #2d3748;
}
.not__added__sec {
  font-weight: 400;
  font-size: 0.833vw;
  color: #2d3748;
}
.btn__chose {
    background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
    box-shadow: 0px 4px 7px -1px rgb(0 0 0 / 11%), 0px 2px 4px -1px rgb(0 0 0 / 7%);
    border-radius: 8px;
    padding: 0.625vw 1.875vw 0.625vw 1.875vw;
    font-weight: 700;
    font-size: 0.833vw;
    color: #ffffff;
}
</style>