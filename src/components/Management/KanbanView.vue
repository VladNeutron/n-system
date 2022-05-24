<template>
    <!-- <div class="mt-3 kanban-container"> -->
        <div class="pe-2 " style="width: 100%;">
          <div id="myKanban"></div>
        </div>
      <!-- </div> -->
</template>

<script>
export default {
    mounted(){
        var KanbanTest = new jKanban({
          element: "#myKanban",
          gutter: "10px",
          widthBoard: "400px",
          responsivePercentage: false, 
          dragBoards       : false,
          click: el => {
            
          },
          buttonClick: function(el, boardId) {
          },
          addItemButton: true,
          boards: [{
              id: "_backlog1",
              title: "Backlog",
              item: [{
                  id: "_task_1_title_id",
                  title: 'Click me to change title',
                  class: ["border-radius-md"]
                },
                {
                  id: "_task_2_title_id",
                  title: 'Drag me to "In progress" section',
                  class: ["border-radius-md"]
                },
                {
                  id: "_task_do_something_id",
                  title: 'Website Design: New cards for blog section and profile details',
                  assignee: "Done Joe",
                  description: "This task's description is for something, but not for anything",
                  class: ["border-radius-md"]
                },
              ]
            },
            {
              id: "_backlog2",
              title: "Backlog",
              item: [{
                  id: "_task_1_title_id",
                  title: '<p class="text mb-0">Click me to change title</p>',
                  class: ["border-radius-md"]
                },
                {
                  id: "_task_2_title_id",
                  title: '<p class="text mb-0">Drag me to "In progress" section</p>',
                  class: ["border-radius-md"]
                },
                {
                  id: "_task_do_something_id",
                  title: '<span class="mt-3 badge badge-sm bg-gradient-primary">Pending</span><p class="text mt-2">Website Design: New cards for blog section and profile details</p><div class="d-flex"><div> <i class="fa fa-paperclip me-1 text-sm"></i><span class="text-sm">3</span></div><div class="avatar-group ms-auto"><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Jessica Rowland"></a><a href="javascript:;" class="avatar avatar-xs rounded-circle me-2" data-toggle="tooltip" data-original-title="Audrey Love"></a><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Michael Lewis"></a></div></div>',
                  assignee: "Done Joe",
                  description: "This task's description is for something, but not for anything",
                  class: ["border-radius-md"]
                },
              ]
            },
            {
              id: "_progress",
              title: "In progress",
              item: [{
                  id: "_task_3_title_id",
                  title: '<span class="mt-2 badge badge-sm bg-gradient-warning">Errors</span><p class="text mt-2">Fix Firefox errors</p><div class="d-flex"><div> <i class="fa fa-paperclip me-1 text-sm"></i><span class="text-sm">11</span></div><div class="avatar-group ms-auto"><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Jana Lucie"></a><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Jessica Rowland"></a></div></div>',
                  class: ["border-radius-md"]
                },
                {
                  id: "_task_4_title_id",
                  title: '<span class="mt-2 badge badge-sm bg-gradient-info">Updates</span><p class="text mt-2">Argon Dashboard PRO - Angular 11</p><div class="d-flex"><div> <i class="fa fa-paperclip me-1 text-sm"></i><span class="text-sm">3</span></div><div class="avatar-group ms-auto"><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Jana Lucie"></a><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Jessica Rowland"></a></div></div>',
                  class: ["border-radius-md"]
                },
                {
                  id: "_task_do_something_4_id",
                  title: '<span class="mt-3 badge badge-sm bg-gradient-info">Updates</span><p class="text mt-2">Vue 3 Updates</p><div class="d-flex"><div> <i class="fa fa-paperclip me-1 text-sm"></i><span class="text-sm">9</span></div><div class="avatar-group ms-auto"><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Jessica Rowland"></a><a href="javascript:;" class="avatar avatar-xs rounded-circle me-2" data-toggle="tooltip" data-original-title="Audrey Love"></a><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Michael Lewis"></a></div></div>',
                  assignee: "Done Joe",
                  description: "This task's description is for something, but not for anything",
                  class: ["border-radius-md"]
                }
              ]

            },
            {
              id: "_working",
              title: "In review",
              item: [{
                  id: "_task_do_something_2_id",
                  title: '<span class="mt-2 badge badge-sm bg-gradient-warning">In Testing</span><p class="text mt-2">Responsive Changes</p><div class="d-flex"><div> <i class="fa fa-paperclip me-1 text-sm"></i><span class="text-sm">11</span></div><div class="avatar-group ms-auto"><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Jana Lucie"></a><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Jessica Rowland"></a></div></div>',
                  assignee: "Done Joe",
                  description: "This task's description is for something, but not for anything",
                  class: ["border-radius-md"]
                },
                {
                  id: "_task_run_id",
                  title: '<span class="mt-2 badge badge-sm bg-gradient-success">In review</span><p class="text mt-2 mb-1">Change images dimension</p><div class="col"><div class="progress progressm mb-3 w5"><div class="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"></div></div></div><div class="d-flex"><div class="avatar-group ms-auto"><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Jessica Rowland"></a></div></div>',
                  assignee: "Done Joe",
                  description: "This task's description is for something, but not for anything",
                  class: ["border-radius-md"]
                },
                {
                  id: "_task_do_something_3_id",
                  title: '<span class="mt-2 badge badge-sm bg-gradient-info">In Review</span><p class="text mt-2 mb-1">Update Links</p><div class="col"><div class="progress progressm mb-3 w5"><div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div></div></div><div class="d-flex"><div> <i class="fa fa-paperclip me-1 text-sm"></i><span class="text-sm">6</span></div><div class="avatar-group ms-auto"><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Jana Lucie"></a><a href="javascript:;" class="avatar avatar-xs me-2 rounded-circle" data-toggle="tooltip" data-original-title="Mike Alis"></a></div></div>',
                  assignee: "Done Joe",
                  description: "This task's description is for something, but not for anything",
                  class: ["border-radius-md"]
                }
              ]
            }
          ]
        });
    },
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
}
.kanban-item:hover{
    background: top 50% right 5% no-repeat url("@/assets/img/Management/EditPencil.svg"), linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #FFFFFF;
    transition: background-img 0s;
}
</style>