<template>
  <div class="container-fluid">
      <div class="card pt-3 px-2">
        <div id="calendar">
            
        </div>
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
        var calendar = new FullCalendar.Calendar(document.getElementById("calendar"), {
      initialView: "dayGridMonth",
      titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' },
      headerToolbar: {
        center: 'title', // will normally be on the left. if RTL, will be on the right
        end: 'timeGridDay,timeGridWeek,dayGridMonth',
        start: 'prev,next,today' // will normally be on the right. if RTL, will be on the left
        // end: ''
      },
      height: '100%',
      // height: '100%',
      fixedWeekCount: false,
      // expandRows: true,
      selectable: true,
      editable: true,
      aspectRatio: 2,
      allDayContent:'Весь день',
      initialDate: '2022-05-01',
      events: [{
          title: 'Созвон с Пашей',
          start: '2022-04-18',
          end: '2022-04-18',
          className: 'bg-gradient-danger'
        },

        {
          title: 'Встреча в кафе',
          start: '2022-04-21',
          end: '2022-04-22',
          className: 'bg-gradient-warning'
        },

        {
          title: 'Конференция',
          start: '2022-04-29',
          end: '2022-04-29',
          className: 'bg-gradient-success'
        },

        {
          title: 'Встреча с Ильёй',
          start: '2022-04-01',
          end: '2022-04-01',
          className: 'bg-gradient-info'
        },

        {
          title: 'Созвон с клиентом',
          start: '2022-05-17',
          end: '2022-04-22',
          className: 'bg-gradient-warning'
        },

        {
          title: 'Весенний марафон',
          start: '2022-05-07',
          end: '2022-04-29',
          className: 'bg-gradient-success'
        },

        {
          title: 'ДР Павла',
          start: '2022-05-01',
          end: '2022-04-01',
          className: 'bg-gradient-info'
        },

        {
          title: 'ДР Даниила',
          start: '2022-05-12',
          end: '2022-04-01',
          className: 'bg-gradient-info'
        },

        {
          title: 'Бизнес-форум',
          start: '2022-05-20',
          end: '2022-04-01',
          className: 'bg-gradient-danger'
        },

        {
          title: 'Весенний хакатон',
          start: '2020-12-03',
          end: '2020-12-03',
          className: 'bg-gradient-danger'
        },

        {
          title: 'Собрание',
          start: '2020-12-07',
          end: '2020-12-09',
          className: 'bg-gradient-warning'
        },

        {
          title: 'Marketing event',
          start: '2020-12-10',
          end: '2020-12-10',
          className: 'bg-gradient-primary'
        },

        {
          title: 'Dinner with Family',
          start: '2020-12-19',
          end: '2020-12-19',
          className: 'bg-gradient-danger'
        },

        {
          title: 'Black Friday',
          start: '2020-12-23',
          end: '2020-12-23',
          className: 'bg-gradient-info'
        },

        {
          title: 'Cyber Week',
          start: '2020-12-02',
          end: '2020-12-02',
          className: 'bg-gradient-warning'
        },
      ],
      buttonText:{
        today:    'Сегодня', 
        month:    'Месяц',
        week:     'Неделя',
        day:      'День',     
        list:     'Список' 
      },
      views: {
        month: {
          titleFormat: {
            month: "short",
            year: "numeric"
          }
        },
        agendaWeek: {
          titleFormat: {
            month: "long",
            year: "numeric",
            day: "numeric"
          }
        },
        agendaDay: {
          titleFormat: {
            month: "short",
            year: "numeric",
            day: "numeric"
          }
        }
      },

      
    });
    calendar.setOption('locale', 'ru');
    calendar.render();
    }
}
</script>

<style scoped>
.card{
    height: 85vh;
}
</style>
<style>
.fc-timeGridDay-button:focus{
    box-shadow: none !important;
}
.fc-today-button{
    margin-left: 15px !important;
    border-top-left-radius: 0.25em !important;
    border-bottom-left-radius: 0.25em !important;
}
.fc-timeGridWeek-button{
    box-shadow: none !important;
}
.fc-dayGridMonth-button{
    box-shadow: none !important;
}
.fc-icon-chevron-right{
  background-image: linear-gradient(310deg, #141727 0%, #3A416F 100%);  
}
.fc-button-primary{
  border-radius: 0.5rem !important;
  font-size: 16px !important;
  font-weight: 500 !important;
  margin-right: 5px !important;
  background-color: unset !important;
  color: #2c3e50 !important;
}
.fc-prev-button, .fc-next-button, .fc-today-button{
  background-image: linear-gradient(310deg, #141727 0%, #3A416F 100%);  
  border-radius: 0.5rem !important;
  font-size: 16px !important;
  font-weight: 500 !important;
  margin-right: 5px !important;
  color: white !important;
}

.fc-button-active{
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border: 0 !important;  
  color: white !important;
}

</style>