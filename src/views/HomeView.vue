<template>
  <the-navbar></the-navbar>
  <main class="main-content position-relative border-radius-lg">
  <the-header></the-header>
  <div class="container-fluid">
    <div class="top__row">
      <div class="">
        <div class="main__topCards">
          <div class="card main__topCard">
            <div>
              <div class="main__topCard__title">
                Онлайн-продажи
              </div>
              <div class="main__topCard__text">
                <div class="main__topCard__text__sum">
                  $53,000
                </div>
                <div class="main__topCard__text__persent">
                  + 55%
                </div>
              </div>
            </div>
            <img src="@/assets/img/home/onlineSales.png" class="main__topCard__img" alt="">
          </div>
          <div class="card main__topCard">
            <div>
              <div class="main__topCard__title">
                Новые клиенты
              </div>
              <div class="main__topCard__text">
                <div class="main__topCard__text__sum">
                  2,300
                </div>
                <div class="main__topCard__text__persent">
                  + 20%
                </div>
              </div>
            </div>
            <img src="@/assets/img/home/newClients.png" class="main__topCard__img" alt="">
          </div>
          <div class="card main__topCard">
            <div>
              <div class="main__topCard__title">
                Новые пользователи
              </div>
              <div class="main__topCard__text">
                <div class="main__topCard__text__sum">
                  +3,462
                </div>
                <div class="main__topCard__text__persent">
                  - 2%
                </div>
              </div>
            </div>
            <img src="@/assets/img/home/newUsers.png" class="main__topCard__img" alt="">
          </div>
          <div class="card main__topCard">
            <div>
              <div class="main__topCard__title">
                Торговые точки
              </div>
              <div class="main__topCard__text">
                <div class="main__topCard__text__sum">
                  $103,430
                </div>
                <div class="main__topCard__text__persent">
                  + 5%
                </div>
              </div>
            </div>
            <img src="@/assets/img/home/shops.png" class="main__topCard__img" alt="">
          </div>
        </div>
        <div class="main__best__stats">
          <div class="card main__best__container">
            <div class="main__best__title__line">
              <div class="main__bestTitle">
                Топ позиции
              </div>
              <div class="main__best__period">
                <img src="@/assets/img/home/Shape.svg" alt="">
                <div>
                  23 - 30 March 2021
                </div>
              </div>
            </div>
            <table class="main__best__table">
              <thead class="main__best__table__header">
                <tr>
                  <th class="left__column">
                    Позиция
                  </th>
                  <th class="left__column">
                    Кол-во
                  </th>
                  <th class="right__column">
                    Доход
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="position in bestPositions" :key="position.id">
                  <td class="left__column main__best__table__position">
                    {{position.name}}
                  </td>
                  <td class="left__column main__best__table__amount">
                    {{position.amount}} ед.<span class="main__best__table__month"> за месяц</span> 
                  </td>
                  <td class="right__column main__best__table__income">
                    {{position.income}} ₸
                    <div class="progress-wrapper">
                      <div class="progress">
                        <div class="progress-bar bg-dark" role="progressbar" :aria-valuenow="position.percent" aria-valuemin="0" aria-valuemax="100" :style="{'width': position.percent + '%'}"></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card main__best__container">
            <div class="main__best__title__line">
              <div class="main__bestTitle">
                Лучшие филиалы
              </div>
              <div class="main__best__period">
                <img src="@/assets/img/home/Shape.svg" alt="">
                <div>
                  23 - 30 March 2021
                </div>
              </div>
            </div>
            <table class="main__best__table">
              <thead>
                <tr>
                  <th class="left__column">
                    Филиал
                  </th>
                  <th class="left__column">
                    Разница
                  </th>
                  <th class="right__column">
                    Доход
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="point in bestPoints" :key="point.id">
                  <td class="left__column main__best__table__position">
                    {{point.name}}
                  </td>
                  <td class="left__column main__best__table__amount__point" v-if:="point.percent>0">
                    <img src="@/assets/img/home/percerntPositive.svg" alt="">{{point.percent}} %<span class="main__best__table__month__point"> за месяц</span> 
                  </td>
                  <td class="left__column main__best__table__amount__point" v-if:="point.percent<0">
                    <img src="@/assets/img/home/percentNegative.svg" alt=""> {{point.percent}} %<span class="main__best__table__month__point"> за месяц</span> 
                  </td>
                  <td class="right__column main__best__table__income">
                    {{point.income}} ₸
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="">
        <div class="card events__card">
          <div class="events__header">
            Ближайшие события
          </div>
          <div class="events__body">
            <div class="event" v-for="event in 20" :key="event">
              <img src="@/assets/img/home/bell.svg" class="event__img" alt="">
              <div class="event__text">
                <div class="event__name">
                  Встреча с инвестором
                </div>
                <div class="event__date">
                  4 марта 2022, 12:30
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom__row">
      <div class="card chart__card">
        <div class="chart__title">
          Продажи
        </div>
        <div class="chart__stats" v-if="chartPercent>0">
          <img src="@/assets/img/home/percerntPositive.svg" alt=""> на {{chartPercent}} % больше <span class="chart__stats__year"> в 2021</span>
        </div>
        <div class="chart__stats" v-else>
          <img src="@/assets/img/home/percentNegative.svg" alt=""> на {{chartPercent}} % больше <span class="chart__stats__year">в 2021</span>
        </div>
        <canvas id="myChart" class="ChartContainer"></canvas>
      </div>
      <div class="card card-calendara">
        <div class="card-body p-3">
          <div class="" data-bs-toggle="calendar" id="calendar"></div>
        </div>
      </div>
    </div>
  </div>
  
  </main>
</template>

<script>
import Chart  from '../assets/js/plugins/chartjs.min.js'
export default {
  name: 'HomeView',
  components: {
    
  },
  data(){
    return {
      bestPositions: [
        {
          id: 1,
          name: 'Кожаные куртки',
          amount: 54,
          income: 546000,
          percent: 80
        },
        {
          id: 2,
          name: 'Футболка Basic Black',
          amount: 34,
          income: 346000,
          percent: 60
        },
        {
          id: 3,
          name: 'Рюкзак черный',
          amount: 18,
          income: 259700,
          percent: 40
        },
      ],
      bestPoints: [
        {
          id: 1,
          name: 'ТРЦ Москва',
          amount: 24000,
          income: 25546000,
          percent: 18
        },
        {
          id: 2,
          name: 'ТРЦ Aport',
          amount: 5400,
          income: 346000,
          percent: -2
        },
        {
          id: 3,
          name: 'ТРЦ Mega Park',
          amount: 423000,
          income: 1219780,
          percent: 29
        },
      ],
      chartPercent: 4,
    }
  },
  mounted(){
    const ctx = document.getElementById('myChart').getContext('2d');

    var gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
    gradientStroke1.addColorStop(1, 'rgba(112, 146, 224, 0.1)');
    // gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(0, 'rgba(37, 47, 64, 0.1)');
    gradientStroke2.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
    // gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

    const data = {
    labels: ["Апр","Май","Июн","Июл","Авг"],
      datasets: [
      {
        label: 'Dataset 1',
        data: [23,45,67,82,90],
        fill: true,
        borderColor: '#8BAEF3',
        backgroundColor: gradientStroke1
      },
      {
        label: 'Dataset 2',
        data: [26,48,34,12,54],
        fill: true,
        borderColor: 'rgba(37, 47, 64, 1)',
        backgroundColor: gradientStroke2
      },
      ]
    };
    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        // maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            display: false,
            title: {
              display: false,
              text: 'Legend Title',
            }
          }
        }
      }
    };
    
    const myChart = new Chart(ctx, config)
    
    var calendar = new FullCalendar.Calendar(document.getElementById("calendar"), {
      initialView: "dayGridMonth",
      headerToolbar: {
        start: 'title', // will normally be on the left. if RTL, will be on the right
        center: '',
        end: 'today prev,next' // will normally be on the right. if RTL, will be on the left
      },
      height: '20.177vw',
      selectable: true,
      editable: true,
      initialDate: '2020-12-01',
      events: [{
          title: 'Call with Dave',
          start: '2020-11-18',
          end: '2020-11-18',
          className: 'bg-gradient-danger'
        },

        {
          title: 'Lunch meeting',
          start: '2020-11-21',
          end: '2020-11-22',
          className: 'bg-gradient-warning'
        },

        {
          title: 'All day conference',
          start: '2020-11-29',
          end: '2020-11-29',
          className: 'bg-gradient-success'
        },

        {
          title: 'Meeting with Mary',
          start: '2020-12-01',
          end: '2020-12-01',
          className: 'bg-gradient-info'
        },

        {
          title: 'Winter Hackaton',
          start: '2020-12-03',
          end: '2020-12-03',
          className: 'bg-gradient-danger'
        },

        {
          title: 'Digital event',
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
      views: {
        month: {
          titleFormat: {
            month: "long",
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

    calendar.render();


  }
}
</script>

<style scoped>
.main__topCards{
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.250vw;
}
.main__topCard{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0.833vw;
  align-items: center;
}
.main__topCard__title{
  font-weight: 600;
  font-size: 14px;
  color: #A0AEC0;
}
.main__topCard__text{
  display: flex;
  align-items: center;
}
.main__topCard__text__sum{
  font-weight: 700;
  font-size: 20px;
  color: #2D3748;
}
.main__topCard__text__persent{
  font-weight: 700;
  font-size: 16px;
  color: #66D432;
  margin-left: 8px;
}
.main__topCard__img{
  width: 2.5vw;
  height: 2.5vw;
}


/* BESTSATS */
.top__row{
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 1.250vw;
}
.main__best__stats{
  margin-top: 1.302vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.354vw;
}
.main__best__container{
  padding: 16px 24px 32px 24px;
}
.main__best__title__line{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main__bestTitle{
  font-weight: 700;
  font-size: 20px;
  color: #2D3748;
}
.main__best__period{
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: #A0AEC0;
}
.main__best__period img{
  width: 16px;
  height: 16px;
  margin-right: 16px;
}

.main__best__table{
  border-spacing: 0 1vw;
  border-collapse: separate;
}
.main__best__table{
  
}
.main__best__table th{
  font-weight: 600;
  font-size: 14px;  
  color: #A0AEC0;
}
.left__column{
  text-align: left;
}
.right__column{
  text-align: right;
}
.main__best__table__position{
  font-weight: 700;
  font-size: 16px;  
  color: #2D3748;
}
.main__best__table__amount{
  font-weight: 600;
  font-size: 14px;
  color: #2D3748;
}
.main__best__table__month{
  font-weight: 400;
  font-size: 14px;
  color: #A0AEC0;
}
.main__best__table__income{
  font-weight: 700;
  font-size: 16px;
  color: #2D3748;
}
.progress-wrapper{
  margin-top: 2px;
}
.main__best__table__header{
  border-bottom: 1px solid #F5F5F5;
}
.main__best__table__amount__point{
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
}
.main__best__table__amount__point img{
  width: 12px;
  margin-right: 4px;
}
.main__best__table__month__point{
  margin-left: 8px;
  font-weight: 400;
  font-size: 14px;
  color: #A0AEC0;
}

/* EVENTS */
.events__card{
  height: 100%;
  padding: 16px 24px 14px 24px;
}
.events__header{
  font-weight: 700;
  font-size: 20px;
  color: #2D3748;
  text-align: left;
  padding-bottom: 16px;
  border-bottom: 1px solid #F5F5F5;
}
.events__body{
  margin-top: 16px;
  /* height: 100%; */
  overflow-y: auto;
  height: 16.021vw;
}
.event{
  padding-bottom: 16px;
  display: flex;
  align-items: flex-start;
}
.event__img{
  width: 16px;
}
.event__text{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
}
.event__name{
  font-weight: 600;
  font-size: 14px;
  color: #2D3748;
  line-height: 19px;
}
.event__date{
  font-weight: 600;
  font-size: 14px;
  color: #A0AEC0;
}
.events__body::-webkit-scrollbar {
    width: 5px;
}
.events__body::-webkit-scrollbar-track {
    background-color: #E9ECEF;
    border-radius: 5px;
}
.events__body::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px #151928;
    border-radius: 8px;
}

/* BOTTOMROW */
.bottom__row{
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  margin-top: 36px;
  grid-column-gap: 1.354vw;
}
/* CHART */
.chart__card{
 padding: 16px 24px 28px 24px;
}
.chart__title{
  font-weight: 700;
  font-size: 20px;
  color: #2D3748;
  text-align: left;
}
.chart__stats{
  text-align: left;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  color: #A0AEC0;
}
.chart__stats img{
  margin-right: 4px;
}
.chart__stats__year{
  color: #2D3748;
  margin-left: 4px;
}
.ChartContainer{
  width: 100%;
  height: 16vw;
}

/* CALENDAR */
.card-calendara{
  height: 23.177vw;
}
</style>
