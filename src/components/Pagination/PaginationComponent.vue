<template>
  <div
              class="pagination d-flex justify-content-end align-items-center me-4 mt-auto"
            >
              <div class="d-flex align-items-center gap-3">
                <div>
                  <p class="m-0 pagination__text">Показано <span> {{pageNumber == 1 ? 1 : (pageNumber-1)*strAmount+1}}-{{pageNumber == 1 ? pageWeaponsList.length : (pageNumber-1)*strAmount+pageWeaponsList.length}} из {{filteredArr.length}} </span></p>
                </div>

                <div class="page__search-pages d-flex align-content-center">
                  <div class="pagination-container d-flex justify-items-center">
                    <ul class="pagination pagination-info mb-0 pe-0" v-if="MaxPages < 6">
                      <li class="page-item">
                        <a
                          class="page-link"
                          @click="prevPage"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true"
                            ><i
                              class="fa fa-angle-double-left"
                              aria-hidden="true"
                            ></i
                          ></span>
                        </a>
                      </li>
                      <li :class="['page-item',{'active': ind+1 == pageNumber}]" v-for="(page,ind) in MaxPages" :key="ind">
                        <a class="page-link" @click="pageNumber = ind+1">{{ind+1}}</a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          @click="nextPage"
                          aria-label="Next"
                        >
                          <span aria-hidden="true"
                            ><i
                              class="fa fa-angle-double-right"
                              aria-hidden="true"
                            ></i
                          ></span>
                        </a>
                      </li>
                    </ul>
                    <ul class="pagination pagination-info mb-0 pe-0" v-else>
                      <li class="page-item">
                        <a
                          class="page-link"
                          @click="prevPage"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true"
                            ><i
                              class="fa fa-angle-double-left"
                              aria-hidden="true"
                            ></i
                          ></span>
                        </a>
                      </li>
                      <li 
                      :class="['page-item',{'active': page == pageNumber}]" 
                      v-for="(page,ind) in pagesList" 
                      :key="ind"
                      >
                        <a class="page-link" @click="pageNumber = page">{{page}}</a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          @click="nextPage"
                          aria-label="Next"
                        >
                          <span aria-hidden="true"
                            ><i
                              class="fa fa-angle-double-right"
                              aria-hidden="true"
                            ></i
                          ></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
</template>

<script>
export default {
data(){
    return{
        pageNumber: 1,
        // stringAmountDefault: 9,
    }
},
props:{
    filteredArr: Array,
    strAmount: {
      type: Number,
      default: 9,
      },
},
emits: ['PaginationReload'],
computed:{
    stringAmount(){
      if(this.strAmount){
        return Number(this.strAmount)
      }
      else return 9
    },
    pageWeaponsList(){
        if(this.filteredArr.length>0){
            let pageWeapons = [];
            let ind = 0;
            console.log(this.stringAmount)
            if (this.pageNumber > 1){
                ind = (this.pageNumber-1)*this.stringAmount
            }
            for(let i = ind; i <= ind + this.stringAmount -1 && i<this.filteredArr.length; i++){
                let temp = this.filteredArr[i];
                temp.listNumber = i;
                pageWeapons.push(this.filteredArr[i])
            }
            // console.log(pageWeapons)
            return pageWeapons;
        }
    },
    MaxPages(){
        return Math.ceil(this.filteredArr.length/this.stringAmount);
    },
    pagesList(){
        if(this.pageNumber<4){
            return [1,2,3,4,5]
        }
        else if(this.pageNumber > 3 && this.pageNumber < this.MaxPages -2){
            let pages = [];
            for(let i = this.pageNumber - 2; i < this.pageNumber + 3; i++){
                pages.push(i)
            }
            return pages
        }
        else{
            let pagesArr = [];
            for(let i = (this.MaxPages - 4); i <= this.MaxPages; i++){
                console.log(i);
                pagesArr.push(i)
            }
            console.log(pagesArr);
            return pagesArr
        }
    }
},
methods:{
    nextPage(){
            if(this.pageNumber < Math.ceil(this.filteredArr.length/(this.stringAmount))){
                this.pageNumber = this.pageNumber + 1;
                // console.log(this.pageNumber)
            }
        },
        prevPage(){
            if(this.pageNumber > 1 ){
                this.pageNumber = this.pageNumber - 1;
                // console.log(this.pageNumber)
            }
        },
},
watch: {
    // whenever question changes, this function will run
    pageWeaponsList(newQuestion) {
      this.$emit('PaginationReload', this.pageWeaponsList, this.pageNumber)
    },
},
mounted(){
    this.$emit('PaginationReload', this.pageWeaponsList, this.pageNumber)
}
}
</script>

<style scoped>
.page-item{
  cursor: pointer;
}
.page-item.active .page-link{
  background: linear-gradient(83.56deg, #7092E0 10.01%, #8BAEF3 75.36%);
}
.pagination__text{
  font-weight: 400;
  font-size: 14px;
  color: #A0AEC0;
}
</style>