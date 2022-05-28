<template>
  <div class="modal fade" id="AddDealModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <div class="d-flex flex-column">
            <h5 class="modal-title" id="exampleModalLabel">Добавление сделки</h5>
            <h3 class="modal-sub-title" id="exampleModalLabel">Введите данные и нажмите “Добавить”</h3>
        </div>
        <img
            src="@/assets/img/closemodal.svg"
            style="width: 1.25vw; cursor: pointer"
            alt=""
            data-bs-dismiss="modal"
          />
      </div>
      <div class="modal-body">
          <div class="row">
              <div class="col-6">
                <div class="form-group addDeal__formgroup">
                    <label for="dealName">Название сделки</label>
                    <input class="form-control" id="dealName" placeholder="Введите название">
                </div>    
                <div class="form-group addDeal__formgroup">
                    <label for="dealDesc">Описание сделки</label>
                    <textarea class="form-control" id="dealDesc" rows="3" placeholder="Введите описание сделки"></textarea>
                </div>
                <div class="form-group addDeal__formgroup">
                <label for="dealCLient">Клиент</label>
                <select class="form-select" id="dealCLient">
                    <option disabled="" selected value="">Выберите</option>
                    <option>ТОО "Ясный ум"</option>
                    <option>ИП "Ромашка"</option>
                </select>
                </div>
              </div>
              <div class="col-6">
                  <div class="participants">
                    <p>
                        Участники    
                    </p>
                    <div class="participants__container">
                        <img v-for="part in selectedForImages" :key="part" src="@/assets/img/Management/participants1.png" alt="">
                        <button class="participants__add__btn btn" @click="participantsSelectShow()">
                            <img src="@/assets/img/Management/addModal.svg" alt="">
                        </button>    
                    </div>
                  </div>
                  <div class="labels">
                    <p>
                        Метки        
                    </p>
                    <div class="labels__container">
                        <div v-if="selectedLabel.color" class="labels__selected" :style="{backgroundColor: selectedLabel.color}">

                        </div>
                        <button class="labels__add__btn btn" @click="labelsSelectShow()">
                            <img src="@/assets/img/Management/addModal.svg" alt="">
                        </button> 
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
  <div class="participantsSelect__container">
        <div class="participantsSelect__container__header">
            <span class="">
                Участники
            </span>
            <img src="@/assets/img/closemodal.svg" style="width: 15px; cursor: pointer" @click="participantsSelectClose">
        </div>
        <div class="participantsSelect__container__body">
            <div class="form-group addDeal__formgroup">
                <input type="text" class="form-control" id="asd" v-model="selectPartInput" placeholder="Введите название">
            </div> 
            <div>
                <div class="part__cont" v-for="party in searchedPart" :key="party.id">
                    <span @click="addPart(party)">{{party.name}}</span>
                    <img style="width: 20px;" v-if="party.selected" src="@/assets/img/Management/Done.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="labelsSelect__container">
        <div class="labelsSelect__container__header">
            <span class="">
                Метки
            </span>
            <img src="@/assets/img/closemodal.svg" style="width: 15px; cursor: pointer" @click="labelsSelectClose">
        </div>
        <div class="labelsSelect__container__body">
            <!-- <div class="form-group addDeal__formgroup">
                <input type="text" class="form-control" id="asd" v-model="selectPartInput" placeholder="Введите название">
            </div>  -->
            <div>
                <div class="labelsSelectColor" 
                v-for="label in labels" 
                :key="label.id" 
                :style="{backgroundColor: label.color}"
                @click="selectLabel(label)"
                >
                    <img class="labelsSelectColor__img" v-if="selectedLabel.id == label.id" src="@/assets/img/Management/labelDone.png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data(){
        return{
            selectedParticipants: [],
            participants: [
                {
                    id: 0,
                    name: 'Валера',
                    src: '../img/Management/participants1.png'
                },
                {   
                    id: 1,
                    name: 'Влад',
                    src: '../assets/img/Management/participants1.png'
                },
                {
                    id: 2,
                    name: 'Илья',
                    src: '../../assets/img/Management/participants1.png'
                },
                {
                    id: 3,
                    name: 'Паша',
                    src: '../../assets/img/Management/participants1.png'
                },
                {
                    id: 4,
                    name: 'Гаухар',
                    src: '../../assets/img/Management/participants1.png'
                },
                {
                    id: 5,
                    name: 'Антон',
                    src: '../../assets/img/Management/participants1.png'
                }
            ],
            participantsPosition: {
                x: 0,
                y: 0,
            },
            selectPartInput: '',
            selectedPart: [],
            labels:[
                {
                    id: 0,
                    color: '#61bd4f'
                },
                {
                    id: 1,
                    color: '#f2d600'
                },
                {
                    id: 2,
                    color: '#eb5a46'
                },
                {
                    id: 3,
                    color: '#c377e0'
                },
                {
                    id: 4,
                    color: '#0079bf'
                },
            ],
            selectedLabel: {},
        }
    },
    computed:{
        participantsPositionDin(){
            console.log(this.participantsPosition);
            return this.participantsPosition
        },
        searchedPart(){
            if(this.selectPartInput == ''){
                let arr =  this.participants
                arr.forEach(el => {
                        if(this.selectedPart.includes(el.id)){
                            el.selected = true;
                        }
                        else{
                           el.selected = false; 
                        }
                    })
                    
                return arr
            }
            else{   
                    let arr = this.participants.filter((el)=>{
                    return el.name.toLowerCase().includes(this.selectPartInput.toLowerCase())
                    })
                    arr.forEach(el => {
                        if(this.selectedPart.includes(el.id)){
                            el.selected = true;
                        }
                        else{
                            el.selected = false; 
                        }
                    })
                    console.log(arr)
                    return arr;
            }
        },
        selectedForImages(){
            if(this.selectedPart.length == 0){
                return []
            }
            else{
                let arr = [];
                this.selectedPart.forEach((el) => {
                    for(let i = 0; i < this.participants.length; i++){
                        if(this.participants[i].id == el){
                            arr.push(this.participants[i])
                            break
                        }
                    }
                })
                return arr
            }
        },
    },
    methods:{
        participantsSelectShow(){
            document.querySelector('.participantsSelect__container').classList.add('participantsSelect__container__show');    
        },
        participantsSelectClose(){
            document.querySelector('.participantsSelect__container').classList.remove('participantsSelect__container__show');    
        },
        labelsSelectShow(){
            document.querySelector('.labelsSelect__container').classList.add('d-block');    
        },
        labelsSelectClose(){
            document.querySelector('.labelsSelect__container').classList.remove('d-block');    
        },
        addPart(el){
            if(this.selectedPart.includes(el.id)){
                this.selectedPart.splice(this.selectedPart.indexOf(el.id),1);
            }
            else{
                this.selectedPart.push(el.id);
            }
            console.log(this.selectedPart)
        },
        isSelected(el){
            this.selectedPart.includes(el);
        },
        selectLabel(val){
            if(this.selectedLabel == val){
                this.selectedLabel = {}
            }
            else{
                this.selectedLabel = val;
            }
        }
    },
    mounted(){
        let myModal = document.getElementById('AddDealModal')

        myModal.addEventListener('shown.bs.modal', function () {
            let pos = {
                x: 0,
                y: 0,
            };
            pos.x = document.querySelector(".participants__container").getBoundingClientRect().x; 
            pos.y = document.querySelector(".participants__container").getBoundingClientRect().y; 
            document.querySelector('.participantsSelect__container').style.left = pos.x + 'px'
            document.querySelector('.participantsSelect__container').style.top = pos.y + 'px'

            pos.x = document.querySelector(".labels__container").getBoundingClientRect().x; 
            pos.y = document.querySelector(".labels__container").getBoundingClientRect().y; 
            document.querySelector('.labelsSelect__container').style.left = pos.x + 'px'
            document.querySelector('.labelsSelect__container').style.top = pos.y + 'px'
            // $('#asd').trigger('focus')
        })

        myModal.addEventListener('hidden.bs.modal', () => {
            this.participantsSelectClose();
        })
    },
}
</script>

<style scoped>
.modal-title{
    font-weight: 700;
    font-size: 30px;    
    color: #252F40;
}
.modal-sub-title{
   font-size: 16px;
   font-weight: 400;
   color: #A0AEC0;
   text-align: left;
}
.addDeal__formgroup{
    text-align: left;
}
.addDeal__formgroup label{
    font-weight: 600;
    font-size: 14px;
    color: #2D3748;
}
.participants{
    text-align: left;
}
.participants p{
    font-weight: 600;
    font-size: 14px;
    color: #2D3748;
    margin-bottom: 0.5rem;
}

.participants__container{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.participants__container img{
    width: 58px;
    height: 58px;
    margin-right: 5px;
    margin-bottom: 5px;
}
.participants__add__btn{
    background: #E2E8F0;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 5px;
}
.participants__add__btn img{
    width: 18px;
    height: 18px; 
    margin-right: 0px;
    margin-bottom: 0px;  
}
.participantsSelect__container{
    position: absolute;
    display: none;
    z-index: 1100;
    background-color: white;
    padding: 8px;
    box-shadow: 0 8px 16px -4px #091e4240, 0 0 0 1px #091e4214;
}
.participantsSelect__container__show{
    display: block;
}
.participantsSelect__container__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}
.participantsSelect__container__header span{

}
.participantsSelect__container__body{

}
.part__cont{
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer; 
    
}
.part__cont:hover{
    background-color: #091e420a;
}
.part__cont span{
    flex-grow: 1;
    text-align: left;
}

/* LABELS */
.labels{
    text-align: left;
}
.labels p{
    font-weight: 600;
    font-size: 14px;
    color: #2D3748;
    margin-bottom: 0.5rem;
}

.labels__container{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
/* .participants__container img{
    width: 58px;
    height: 58px;
    margin-right: 5px;
    margin-bottom: 5px;
} */
.labels__add__btn{
    background: #E2E8F0;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 0px;
}
.labels__add__btn img{
    width: 18px;
    height: 18px; 
    margin-right: 0px;
    margin-bottom: 0px;  
}
.labelsSelect__container{
    position: absolute;
    display: none;
    z-index: 1100;
    background-color: white;
    padding: 8px;
    box-shadow: 0 8px 16px -4px #091e4240, 0 0 0 1px #091e4214;
}
.labelsSelect__container__show{
    display: block;
}
.labelsSelect__container__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}
.labelsSelectColor{
    width: 200px;
    height: 30px;
    margin-bottom: 5px;
    text-align: right;
    cursor: pointer;
}
.labelsSelectColor__img{
    width: 15px;
    height: 15px;
    margin-right: 10px;
}
.labelsSelect__container__header span{

}
.labelsSelect__container__body{

}
.labels__selected{
    width: 38px;
    height: 38px;
    border-radius: 5px;
    margin-right: 5px;
}
</style>