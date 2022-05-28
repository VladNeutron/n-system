<template>
    <!-- <div class="mt-3 kanban-container"> -->
        <div class="pe-2 " style="width: 100%;">
          <div id="myKanban"></div>
        </div>
      <!-- </div> -->
</template>

<script>
export default {
    data(){
        return{
            kanbanTest: {},
        }
    },
    props: {
        dealStages: Array,
        dealsList: Array,
    },
    mounted(){
        // var KanbanTest
        if(!document.querySelector('.kanban-container')){
            this.kanbanTest  = new jKanban({
          element: "#myKanban",
          gutter: "10px",
          widthBoard: "400px",
          responsivePercentage: false, 
          dragBoards       : false,
          click: el => {
            console.log(el);
          },
          buttonClick: () => {
              $("#AddDealModal").modal("show");
          },
          addItemButton: true,
            boards: this.boards,
        });

        }
        else{
            document.querySelector('.kanban-container').remove();   
            this.kanbanTest  = new jKanban({
          element: "#myKanban",
          gutter: "10px",
          widthBoard: "400px",
          responsivePercentage: false, 
          dragBoards       : false,
          click            : function (el) {
            console.log(el);
          },
          buttonClick: () => {
               $("#AddDealModal").modal("show");
          },
          addItemButton: true,
            boards: this.boards,
        }); 
        }
        
        // console.log(this.boards);
    },
    computed:{
        boards(){
            let boards = [];
            this.dealStages.forEach(
                (el) => {
                    let board = {
                        id: el.id,
                        title: el.name,
                        item: [],
                    };
                    this.dealsList.forEach( elem => {
                        if(elem.stage == el.name){
                            let titleTemp = ''
                            let classlist = ["border-radius-md"];
                            if(elem.color){
                                titleTemp = `<div class="kanban__coloredCont">
                                <div style="background-color:${elem.color};" class='kanban__colorLeft'></div>
                                <div>
                                <p>${elem.dealName}</p>
                                <button class='btn bg-gradient-dark kanban__date'><img src='../images/ClockIcon.svg'></img> ${elem.date ? elem.date : ''}</button>
                                </div>
                                </div>
                                 
                                `
                            }
                            if(elem.date){
                                classlist.push('show__date')
                            }
                            else{
                                titleTemp = `<p>${elem.dealName}</p>`
                            }
                            board.item.push(
                                {
                                    id: elem.id,
                                    title: titleTemp,
                                    class: classlist
                                }
                            )
                        }
                    } )
                    boards.push(board)
                }
            )
            // console.log(boards);
            return boards
        }
    },
    methods:{
        addElKanban(){
            this.kanbanTest.addElement('Stage2', {
                  id: 409,
                  title: 'Новый',
                  class: ["border-radius-md"]
                });
        },
    },
//     watch: {
//     // whenever question changes, this function will run
//     boards(newQuestion) {
//       var KanbanTest = new jKanban({
//           element: "#myKanban",
//           gutter: "10px",
//           widthBoard: "400px",
//           responsivePercentage: false, 
//           dragBoards       : false,
//           click: el => {
            
//           },
//           buttonClick: function(el, boardId) {
//           },
//           addItemButton: true,
//           boads: this.boards,
//           });
//     }
// },
}
</script>

<style>
.kanban-container{
    /* display: flex; */
    overflow: unset;
}
#myKanban{
    overflow-x: auto;
    overflow-y: auto;
}

.kanban-board{
    background: #E9ECEF;      
    box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
    border-radius: 12px;  
}
.kanban-board header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.kanban-title-board{
    font-weight: 600;
    font-size: 20px;
    color: #2D3748;
}
.kanban-title-button{
    font-size: 30px;
    line-height: 16px;
    padding: 9px 29px;    
    color: rgba(49, 56, 96, 1);
    margin-bottom: 0;
}

.kanban-item{
    font-weight: 600;
    font-size: 16px;  
    color: #2D3748;  
    text-align: left;
    margin-bottom: 8px;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    overflow: hidden;
}
.kanban-item:hover{
    background: top 50% right 5% no-repeat url("@/assets/img/Management/EditPencil.svg"), linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #FFFFFF;
    transition: background-img 0s;
}

.kanban__coloredCont{
    display: flex;
}
.kanban__colorLeft{
    width: 11px;
}

.kanban-item p{
    padding: 16px;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 16px;  
    color: #2D3748;  
}
.kanban-item div p{
    padding: 16px;
    padding-left: 5px;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 16px;  
    color: #2D3748;  
}
.kanban__date{
    display: none;
}
.show__date .kanban__date{
    display: block;
    margin-left: 5px;
    padding: 8px 16px;
    margin-bottom: 16px;
}
.show__date div p{
    padding-bottom: 8px;
}

</style>