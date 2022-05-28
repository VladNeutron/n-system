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
.participants__add__btn{
    background: #E2E8F0;
    border-radius: 5px;
    padding: 20px;
}
.participants__add__btn img{
    width: 18px;
    height: 18px;    
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
</style>