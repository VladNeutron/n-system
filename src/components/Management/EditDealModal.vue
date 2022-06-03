<template>
  <div class="modal fade" id="EditDealModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <div class="d-flex flex-column">
            <h5 class="modal-title" id="exampleModalLabel">ТОО “Рога и копыта”</h5>
            <h3 class="modal-sub-title" id="exampleModalLabel">В колонке “Первичная сделка”</h3>
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
                    <p class="modalTitles">Описание сделки</p>
                    <div class="form-group addDeal__formgroup">
                        <textarea class="form-control" id="dealDesc" rows="6" placeholder="Введите описание сделки">Подготовить коммерческое предложение и презентацию компании. Почта rogaIkopita@mail.kz. Молочная промышленность.</textarea>
                    </div>
              </div>
              <div class="col-6">
                  <div class="participants">
                    <p>
                        Участники    
                    </p>
                    <div class="participants__container pcEdit">
                        <img v-for="part in selectedForImages" :key="part" src="@/assets/img/Management/participants1.png" alt="">
                        <button class="participants__add__btn btn" @click="participantsSelectShow()">
                            <img src="@/assets/img/Management/addModal.svg" alt="">
                        </button>    
                    </div>
                  </div>
              
                  <div class="labels mt-1">
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
              <div class="col-6">
                  <div class="form-group addDeal__formgroup">
                <label for="dealCLient">Клиент</label>
                <select class="form-select" id="dealCLient">
                    <!-- <option disabled="" selected value="">Выберите</option> -->
                    <option selected>ТОО "Ясный ум"</option>
                    <option>ИП "Ромашка"</option>
                </select>
                </div>
              </div>
              <div class="col-6">
                  
                  
                  <div class="form-group addDeal__formgroup">
                    <label for="endDAte">Срок выполнения</label>
                    <div class="d-flex">
                        <input class="form-control" type="date" id="endDate" placeholder="Введите название" v-model="endDate">
                        <input class="form-control inp-time ms-2" type="time" id="endDate" placeholder="Введите название" v-model="endTime">
                    </div>
                </div>   
              </div>
          </div>

        <div class="coments__block">
            <div class="row" v-for="comment in comments" :key="comment">
                <div class="col-1">
                    <img class="footer__img" src="@/assets/img/Management/participants1.png" alt="">
                </div>
                <div class="col-11">
                    <div class="coment__title">
                        <span class="coment__name">{{comment.name}}</span>
                        <span class="coment__time">{{comment.date}}</span>
                    </div>
                    <div class="coment__body">
                        {{comment.coment}}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    <img class="footer__img" src="@/assets/img/Management/participants1.png" alt="">
                </div>
                <div class="col-11">
                    <div class="form-group comment__formgroup">
                        <textarea class="form-control" id="input-comment" rows="4" placeholder="Напишите комментарий..." v-model="inputComent"></textarea>
                        <button class="bg-gradient-dark comment__save__btn btn" @click="addComment">
                            Отправить
                        </button>
                    </div>
                </div>    
            </div>
        </div>
        
      </div>
      <div class="modal-footer">
          <button type="button" class="btn bg-gradient-dark w-50 mb-0 fs-6" data-bs-dismiss="modal">Сохранить изменения</button>
          <button type="button" class="btn delete__btn w-60 mb-0 fs-6" data-bs-dismiss="modal">Архивировать сделку</button>
      </div>
    </div>
  </div>
  <div class="participantsSelectEdit__container">
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
    <div class="labelsSelect__container lbsc">
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
            inputComent: '',
            comments: [
                {
                    coment: 'Привет! Нужно срочно сделать КП',
                    date: '30.05.2022 16:10:15',
                    name: 'Паша',
                    img: '',
                },
                {
                    coment: 'Привет! А разве не твоя очередь делать?)',
                    date: '30.05.2022 16:15:27',
                    name: 'Илья',
                    img: '',
                },
                {
                    coment: 'Много дел. Не успеваю.',
                    date: '30.05.2022 17:10:46',
                    name: 'Паша',
                    img: '',
                },
                {
                    coment: 'Ладно сделаю, но следующие 2 делаешь сам и с тебя чай, даже 2.',
                    date: '30.05.2022 17:15:32',
                    name: 'Илья',
                    img: '',
                },
            ],
            endDate: '2022-06-15',
            endTime: '15:30'
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
            document.querySelector('.participantsSelectEdit__container').classList.add('participantsSelect__container__show');    
        },
        participantsSelectClose(){
            document.querySelector('.participantsSelectEdit__container').classList.remove('participantsSelect__container__show');    
        },
        labelsSelectShow(){
            document.querySelector('.lbsc').classList.add('d-block');    
        },
        labelsSelectClose(){
            document.querySelector('.lbsc').classList.remove('d-block');    
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
        },
        addComment(){
            if(this.inputComent != ''){
                let date = new Date();

                this.comments.push(
                {
                    coment: this.inputComent,
                    date: date.getDate()+ '.' + date.getMonth() + '.' + date.getFullYear() ,
                    name: 'Андрей Андреев',
                    img: '',
                }
            );
            this.inputComent = '';
            }
        }
    },
    mounted(){
        let myModal = document.getElementById('EditDealModal')

        myModal.addEventListener('shown.bs.modal', function () {
            let pos = {
                x: 0,
                y: 0,
            };
            pos.x = document.querySelector(".pcEdit").getBoundingClientRect().x; 
            pos.y = document.querySelector(".pcEdit").getBoundingClientRect().y; 
            document.querySelector('.participantsSelectEdit__container').style.left = pos.x + 'px'
            document.querySelector('.participantsSelectEdit__container').style.top = pos.y + 'px'

            pos.x = document.querySelector('#EditDealModal').querySelector(".labels__container").getBoundingClientRect().x; 
            pos.y = document.querySelector('#EditDealModal').querySelector(".labels__container").getBoundingClientRect().y; 
            document.querySelector('.lbsc').style.left = pos.x + 'px'
            document.querySelector('.lbsc').style.top = pos.y + 'px'
            // $('#asd').trigger('focus')
        })

        myModal.addEventListener('hidden.bs.modal', () => {
            this.participantsSelectClose();
        })
        this.addPart(this.searchedPart[1]);
        this.addPart(this.searchedPart[2]);
        this.selectLabel(this.labels[1]);
    },
}
</script>

<style scoped>
.modalTitles{
    font-weight: 600;
    font-size: 14px;
    color: #2D3748;
    margin-bottom: 0.5rem;
    text-align: left;
}
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
    box-shadow: none; 
}
.participants__add__btn img{
    width: 18px;
    height: 18px; 
    margin-right: 0px;
    margin-bottom: 0px;
}
.participantsSelectEdit__container{
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
    box-shadow: none;
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

/* DATE */
.inp-time{
    width: 30%;
}

/* FOOTER */
.modal-footer{
    display: block;
    border-top: unset;
}
.input-comment{

}
.comment__formgroup{
    position: relative;
}
.comment__save__btn{
    position: absolute;
    right: 16px;
    bottom: 12px;  
    margin-bottom: 0;  
}
.footer__img{
   width: 3vw;
   height: 3vw; 
}
/* COMENTS */
.coment__title{
    text-align: left;
    line-height: 14px;
}
.coment__name{
    font-weight: 700;
    font-size: 16px;
    color: #2D3748;
}
.coment__time{
    font-weight: 400;
    font-size: 14px;
    color: #A0AEC0;
    margin-left: 8px;
}
.coment__body{
    margin-top: 8px;
    text-align: left;
    max-width: 29.17vw;
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #2D3748;
}
.coments__block{
    border-top: 1px solid #dee2e6;    
    padding-top: 32px;
}
.modal-body::-webkit-scrollbar {
    background: #e2e8f0;
    border-radius: 0.78vw;
    width: 0.37vw;
  }
  
.modal-body::-webkit-scrollbar-thumb {
    border-radius: 0.78vw;
    background-color: #313860;
  }
  
.modal-body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 0.78vw;
    background-color: #e2e8f0;
}
/* .bg-gradient-dark{
    font-size: 16px;
} */
</style>