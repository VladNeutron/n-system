<template>
    <div class="card py-4 main__card">
            <div class="d-flex justify-content-between align-items-center mx-4 mb-4">
                <div class="d-flex gap-3 align-content-center align-items-center">
                    <button
                        class="btn bg-gradient-dark mb-0 topTable__btn"
                        style="
                        font-size: 14px;
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        "
                        onclick="window.location.href = '/sales/create-order'"
                    >
                        <img
                        src="@/assets/img/whtplus.svg"
                        alt=""
                        style="margin-right: 10px"
                        />
                        Добавить сделку
                    </button>
                    <button
                        class="btn bg-gradient-dark mb-0 topTable__btn"
                        style="
                        font-size: 14px;
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        "
                        onclick="window.location.href = '/sales/create-order'"
                    >
                        Настроить воронку
                    </button>
                </div>
              <div
                class="table__inputs d-flex gap-3 align-content-center align-items-center"
              >
                <list-search></list-search>
              </div>
            </div>
            <div class="page__table">
              <div class="table-wrapper">
                <table
                  class="table table-hover text-wrap text-start table-striped"
                  id="table_id"
                >
                  <thead>
                    <tr class="text-start">
                      <th
                        scope="col"
                        class="th__col"
                        style="width: 1px; padding-left: 27px"
                      ></th>
                      <th scope="col" class="th__col">№</th>
                      <th scope="col" class="th__col">Название сделки</th>
                      <th scope="col" class="th__col">дата последнего изменения</th>
                      <th scope="col" class="th__col">ответственный</th>
                      <th scope="col" class="th__col">клиент</th>
                      <th scope="col" class="th__col">этап сделки</th>
                      <th scope="col" class="th__col">бюджет</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deal, i) of paginationList" :key="deal.id">
                      <th scope="row" style="padding-left: 27px">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckIndeterminate"
                          />
                        </div>
                      </th>
                      <td>{{ i + 1 }}</td>
                      <td>{{ deal.dealName }}</td>
                      <td>{{ deal.dealLastDate }}</td>
                      <td>{{ deal.responsible }}</td>

                      <td>{{ deal.client }}</td>
                      <td>
                        <div class="btn stage__btn mb-0 w-70">
                            {{ deal.stage }}
                        </div>
                      </td>
                      <td>{{ deal.budget }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <pagination-component :filteredArr="dealsList" @PaginationReload="reloadPagination"></pagination-component>
          </div>
</template>

<script>
export default {
    data(){
        return{
            paginationList: [],
        }
    },
    props:{
        dealsList: Array,
    },
    methods:{
        reloadPagination(arr){
        this.paginationList = arr;
        }
    },

}
</script>

<style scoped>
.topTable__btn{
    height: 40px;
}
.table td{
    text-align: center;
}
.stage__btn{
    font-weight: 400;
    font-size: 14px;  
    color: #FFFFFF;  
    background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
    box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
}
</style>