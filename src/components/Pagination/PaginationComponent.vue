<template>
  <div
              class="pagination d-flex justify-content-end align-items-center me-4 mt-auto"
            >
              <div class="d-flex align-items-center gap-3">
                <div>
                  <p class="m-0 pagination__text">Показано <span> {{pageNumber == 1 ? 1 : (pageNumber-1)*9+1}}-{{pageNumber == 1 ? pageWeaponsList.length : (pageNumber-1)*9+pageWeaponsList.length}} из {{filteredArr.length}} </span></p>
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
    }
},
props:{
    filteredArr: Array,
},
emits: ['PaginationReload'],
computed:{
    pageWeaponsList(){
        if(this.filteredArr.length>0){
            let pageWeapons = [];
            let ind = 0;
            if (this.pageNumber > 1){
                ind = (this.pageNumber-1)*9
            }
            for(let i = ind; i <= ind + 8 && i<this.filteredArr.length; i++){
                pageWeapons.push(this.filteredArr[i])
            }
            // console.log(pageWeapons)
            return pageWeapons;
        }
    },
    MaxPages(){
        return Math.ceil(this.filteredArr.length/9);
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
            if(this.pageNumber < this.filteredArr.length/10){
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
      this.$emit('PaginationReload', this.pageWeaponsList)
    }
},
mounted(){
    this.$emit('PaginationReload', this.pageWeaponsList)
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