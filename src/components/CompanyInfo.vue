<template>
  <div class="logo">
    <img src="@/assets/img/logomodals.svg" style="width: 3.906vw" alt="" />
    <div class="logo__text">
      <p class="logo__main">NEUTRON</p>
      <p class="logo__sec">System</p>
    </div>
  </div>
  <company-info-modal v-if="pageNum == 1"></company-info-modal>
  <bank-info-modal v-if="pageNum  == 2"></bank-info-modal>
  <create-account-modal v-if="pageNum  == 3"></create-account-modal>
</template>

<script>
import CompanyInfoModal from "./CompanyInfoModal.vue"
import BankInfoModal from './BankInfoModal.vue'
import CreateAccountModal from "./CreateAccountModal.vue"
export default {
    data(){
        return{
           pageNum : 3
        }
    },
    props:{
         
    },
  components: {
    CompanyInfoModal,
    BankInfoModal,
    CreateAccountModal
  },
};
</script>

<style  scoped>
.logo__text {
  margin-left: 1.063vw;
  text-align: left;
}
.logo__main {
  font-weight: 700;
  font-size: 1.774vw;
  color: #2d3748;
  padding: 0;
  margin: 0;
}
.logo__sec {
  font-size: 0.938vw;
  padding: 0;
  margin: 0;
  margin-top:-10px;
}
.logo {
  display: flex;
  padding-bottom: 1.646vw;
  padding-top: 3.208vw;
  justify-content: center;
}
</style>