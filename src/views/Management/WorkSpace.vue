<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid pt-4">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <lists-header>
            <template v-slot:title> Neutron </template>
            <template v-slot:description> Рабочая область </template>
          </lists-header>
        </div>
        <div class="d-flex">
          <div class="periods" style="margin-right: 24px">
            <div class="periods__content">
              <div
                class="test"
                :class="{ active1: isActive == 1 }"
                @click="isActive = 1"
              >
                Сегодня
              </div>
              <img src="@/assets/img/lineHr.svg" alt="" />
              <div>
                <div
                  class="test2"
                  :class="{ active2: isActive == 2 }"
                  @click="isActive = 2"
                >
                  Вчера
                </div>
              </div>
              <img src="@/assets/img/lineHr.svg" alt="" />
              <div>
                <div
                  class="test3"
                  :class="{ active2: isActive == 3 }"
                  @click="isActive = 3"
                >
                  Неделя
                </div>
              </div>
              <img src="@/assets/img/lineHr.svg" alt="" />
              <div>
                <div
                  class="test4"
                  :class="{ active2: isActive == 4 }"
                  @click="isActive = 4"
                >
                  Месяц
                </div>
              </div>
              <img src="@/assets/img/lineHr.svg" alt="" />
              <div>
                <div
                  class="test5"
                  :class="{ active3: isActive == 5 }"
                  @click="isActive = 5"
                >
                  Период
                </div>
              </div>
            </div>
          </div>
          <div class="select">
            <div class="select__content">
              <div>Все</div>
              <img src="@/assets/img/lineHr.svg" alt="" />
              <div class="form-group m-0" style="width: 120px">
                <select
                  class="form-select select__workspace m-0"
                  id="exampleFormControlSelect1"
                >
                  <option>Выберите</option>
                  <option>Тихонов А.</option>
                  <option>Тихонов А.</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card pt-4 pb-4 px-4">
        <div>
          <div class="card__header">
            <h4 class="mb-0">Воронка продаж</h4>
            <p class="mb-0">Название воронки</p>
          </div>
          <div class="funnel" style="margin-left: 70px">
            <div class="funnel__content" v-if="isActive == 1">
              <div v-for="step in steps" :key="step" style="margin-right: 24px">
                <p class="step__main mb-0">{{ step.stepName }}</p>
                <p class="step__count">
                  {{ step.stepCount }}, {{ step.stepCountSum }}
                </p>
                <div class="step__color__block">
                  <div>
                    <p class="step__count__main mb-0">+{{ step.countDeal }}</p>
                    <p
                      class="step__count mb-0"
                      style="text-transform: uppercase"
                    >
                      Новых сделок
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p class="step__count__main mb-0">{{ step.sumDeal }}</p>
                    <p
                      class="step__count mb-0"
                      style="text-transform: uppercase"
                    >
                      Сумма сделок
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="funnel__content" v-if="isActive == 2">
              <div
                v-for="step in steps2"
                :key="step"
                style="margin-right: 24px"
              >
                <p class="step__main mb-0">{{ step.stepName }}</p>
                <p class="step__count">
                  {{ step.stepCount }}, {{ step.stepCountSum }}
                </p>
                <div class="step__color__block">
                  <div>
                    <p class="step__count__main mb-0">+{{ step.countDeal }}</p>
                    <p
                      class="step__count mb-0"
                      style="text-transform: uppercase"
                    >
                      Новых сделок
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p class="step__count__main mb-0">{{ step.sumDeal }}</p>
                    <p
                      class="step__count mb-0"
                      style="text-transform: uppercase"
                    >
                      Сумма сделок
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="funnel__content" v-if="isActive == 3">
              <div
                v-for="step in steps3"
                :key="step"
                style="margin-right: 24px"
              >
                <p class="step__main mb-0">{{ step.stepName }}</p>
                <p class="step__count">
                  {{ step.stepCount }}, {{ step.stepCountSum }}
                </p>
                <div class="step__color__block">
                  <div>
                    <p class="step__count__main mb-0">+{{ step.countDeal }}</p>
                    <p
                      class="step__count mb-0"
                      style="text-transform: uppercase"
                    >
                      Новых сделок
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p class="step__count__main mb-0">{{ step.sumDeal }}</p>
                    <p
                      class="step__count mb-0"
                      style="text-transform: uppercase"
                    >
                      Сумма сделок
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="funnel__content" v-if="isActive == 4">
              <div
                v-for="step in steps4"
                :key="step"
                style="margin-right: 24px"
              >
                <p class="step__main mb-0">{{ step.stepName }}</p>
                <p class="step__count">
                  {{ step.stepCount }}, {{ step.stepCountSum }}
                </p>
                <div class="step__color__block">
                  <div>
                    <p class="step__count__main mb-0">+{{ step.countDeal }}</p>
                    <p
                      class="step__count mb-0"
                      style="text-transform: uppercase"
                    >
                      Новых сделок
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p class="step__count__main mb-0">{{ step.sumDeal }}</p>
                    <p
                      class="step__count mb-0"
                      style="text-transform: uppercase"
                    >
                      Сумма сделок
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="funnel__content" v-if="isActive == 5">
              <div
                v-for="step in steps5"
                :key="step"
                style="margin-right: 24px"
              >
                <p class="step__main mb-0">{{ step.stepName }}</p>
                <p class="step__count">
                  {{ step.stepCount }}, {{ step.stepCountSum }}
                </p>
                <div class="step__color__block">
                  <div>
                    <p class="step__count__main mb-0">+{{ step.countDeal }}</p>
                    <p
                      class="step__count mb-0"
                      style="text-transform: uppercase"
                    >
                      Новых сделок
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p class="step__count__main mb-0">{{ step.sumDeal }}</p>
                    <p
                      class="step__count mb-0"
                      style="text-transform: uppercase"
                    >
                      Сумма сделок
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <div class="task__block">
            <div class="task__content">
              <div class="block">
                <p class="task__main">Просроченные задачи</p>
                <p class="task__count">3</p>
                <p class="task__today mb-0">за сегодня</p>
              </div>
              <div class="block">
                <p class="task__main">ВЫполненные задачи</p>
                <p class="task__count">3</p>
                <p class="task__today mb-0">за сегодня</p>
              </div>
            </div>
            <div class="task__content mt-2">
              <div class="block">
                <p class="task__main">задачи в работе</p>
                <p class="task__count">18</p>
                <p class="task__today mb-0">за сегодня</p>
              </div>
              <div class="block">
                <p class="task__main">сделок без задач</p>
                <p class="task__count">1</p>
                <p class="task__today mb-0">за сегодня</p>
              </div>
            </div>
          </div>
          <div class="card p-4 mt-4" style="width: 634px">
            <div class="manager__deals">
              <p class="deals__main mb-0">Активность за сегодня</p>
              <p class="deals__count mb-0">18</p>
            </div>
            <div class="deals__table mt-3">
              <table class="table">
                <thead>
                  <th>Наименование</th>
                  <th>КОЛИЧЕСТВО</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  <tr v-for="item in deals" :key="item">
                    <td>{{ item.name }}</td>
                    <td>{{ item.count }} задача</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-7">
          <div class="card p-4">
            <div class="manager__deals">
              <p class="deals__main mb-0">Сделки по менеджерам</p>
              <p class="deals__count mb-0">18</p>
            </div>
            <div class="deals__table mt-5">
              <table class="table">
                <thead>
                  <th>Ф.И.О. Менеджера</th>
                  <th>КОЛИЧЕСТВО</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  <tr v-for="item in deals" :key="item">
                    <td>{{ item.name }}</td>
                    <td>{{ item.count }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card px-4 py-4 pb-5 mt-4">
            <div class="activity__header">
              <p class="activity__main mb-0">
                Использование системы за сегодня
              </p>
            </div>
            <div class="activity__content">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center activity__margin">
                  <img
                    src="@/assets/img/avatar.svg"
                    style="width: 24px; margin-right: 8px"
                    alt=""
                  />
                  <p class="activity__name mb-0">Евгений</p>
                </div>
                <div class="progress-wrapper" style="width: 350px">
                  <div class="progress-info">
                    <div class="progress-percentage text-end">
                      <span class="text-sm font-weight-bold"
                        >10 ч. 32 мин.</span
                      >
                    </div>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-dark"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 40%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center activity__margin">
                  <img
                    src="@/assets/img/avatar.svg"
                    style="width: 24px; margin-right: 8px"
                    alt=""
                  />
                  <p class="activity__name mb-0">Роман Ромашков</p>
                </div>
                <div class="progress-wrapper" style="width: 350px">
                  <div class="progress-info">
                    <div class="progress-percentage text-end">
                      <span class="text-sm font-weight-bold">7 ч. 11 мин.</span>
                    </div>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-dark"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 20%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center activity__margin">
                  <img
                    src="@/assets/img/avatar.svg"
                    style="width: 24px; margin-right: 8px"
                    alt=""
                  />
                  <p class="activity__name mb-0">Елизавета Кирова</p>
                </div>
                <div class="progress-wrapper" style="width: 350px">
                  <div class="progress-info">
                    <div class="progress-percentage text-end">
                      <span class="text-sm font-weight-bold"
                        >22 ч. 08 мин.</span
                      >
                    </div>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-dark"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 70%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center activity__margin">
                  <img
                    src="@/assets/img/avatar.svg"
                    style="width: 24px; margin-right: 8px"
                    alt=""
                  />
                  <p class="activity__name mb-0">Роман Ромашков</p>
                </div>
                <div class="progress-wrapper" style="width: 350px">
                  <div class="progress-info">
                    <div class="progress-percentage text-end">
                      <span class="text-sm font-weight-bold">7 ч. 11 мин.</span>
                    </div>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-dark"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 20%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center activity__margin">
                  <img
                    src="@/assets/img/avatar.svg"
                    style="width: 24px; margin-right: 8px"
                    alt=""
                  />
                  <p class="activity__name mb-0">Роман Ромашков</p>
                </div>
                <div class="progress-wrapper" style="width: 350px">
                  <div class="progress-info">
                    <div class="progress-percentage text-end">
                      <span class="text-sm font-weight-bold">7 ч. 11 мин.</span>
                    </div>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-dark"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 20%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isActive: 1,
      activity: [
        {
          name: "Созвон",
          count: 4,
        },
        {
          name: "Договор подписать",
          count: 12,
        },
        {
          name: "Съездить на встречу",
          count: 11,
        },
        {
          name: "Ревизия",
          count: 5,
        },
        {
          name: "Договор подписать",
          count: 3,
        },
        {
          name: "Съездить на встречу",
          count: 3,
        },
        {
          name: "Ревизия",
          count: 3,
        },
      ],
      deals: [
        {
          name: "Тихонов А. Р.",
          count: 4,
        },
        {
          name: "Тихонов А. Р.",
          count: 12,
        },
        {
          name: "Тихонов А. Р.",
          count: 11,
        },
        {
          name: "Тихонов А. Р.",
          count: 5,
        },
        {
          name: "Тихонов А. Р.",
          count: 3,
        },
        {
          name: "Тихонов А. Р.",
          count: 3,
        },
        {
          name: "Тихонов А. Р.",
          count: 3,
        },
      ],
      steps: [
        {
          stepName: "ЭТАП №1",
          stepCount: "3 сделки",
          stepCountSum: "17 500 000 ₸",
          countDeal: 1,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №1",
          stepCount: "3 сделки",
          stepCountSum: "17 500 000 ₸",
          countDeal: 1,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №1",
          stepCount: "3 сделки",
          stepCountSum: "17 500 000 ₸",
          countDeal: 1,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №1",
          stepCount: "3 сделки",
          stepCountSum: "17 500 000 ₸",
          countDeal: 1,
          sumDeal: "1 500 000 ₸",
        },
      ],
      steps2: [
        {
          stepName: "ЭТАП №2",
          stepCount: "3 сделки",
          stepCountSum: "10 500 000 ₸",
          countDeal: 3,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №2",
          stepCount: "3 сделки",
          stepCountSum: "10 500 000 ₸",
          countDeal: 3,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №2",
          stepCount: "3 сделки",
          stepCountSum: "10 500 000 ₸",
          countDeal: 3,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №2",
          stepCount: "3 сделки",
          stepCountSum: "10 500 000 ₸",
          countDeal: 3,
          sumDeal: "1 500 000 ₸",
        },
      ],
      steps3: [
        {
          stepName: "ЭТАП №3",
          stepCount: "3 сделки",
          stepCountSum: "7 500 000 ₸",
          countDeal: 4,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №3",
          stepCount: "3 сделки",
          stepCountSum: "7 500 000 ₸",
          countDeal: 4,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №3",
          stepCount: "3 сделки",
          stepCountSum: "7 500 000 ₸",
          countDeal: 4,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №3",
          stepCount: "3 сделки",
          stepCountSum: "7 500 000 ₸",
          countDeal: 4,
          sumDeal: "1 500 000 ₸",
        },
      ],
      steps4: [
        {
          stepName: "ЭТАП №5",
          stepCount: "12 сделки",
          stepCountSum: "12 500 000 ₸",
          countDeal: 1,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №5",
          stepCount: "12 сделки",
          stepCountSum: "12 500 000 ₸",
          countDeal: 1,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №5",
          stepCount: "12 сделки",
          stepCountSum: "12 500 000 ₸",
          countDeal: 1,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №5",
          stepCount: "12 сделки",
          stepCountSum: "12 500 000 ₸",
          countDeal: 1,
          sumDeal: "1 500 000 ₸",
        },
      ],
      steps5: [
        {
          stepName: "ЭТАП №5",
          stepCount: "31 сделка",
          stepCountSum: "27 500 000 ₸",
          countDeal: 1,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №5",
          stepCount: "31 сделка",
          stepCountSum: "27 500 000 ₸",
          countDeal: 1,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №5",
          stepCount: "31 сделка",
          stepCountSum: "27 500 000 ₸",
          countDeal: 1,
          sumDeal: "1 500 000 ₸",
        },
        {
          stepName: "ЭТАП №5",
          stepCount: "31 сделка",
          stepCountSum: "27 500 000 ₸",
          countDeal: 1,
          sumDeal: "1 500 000 ₸",
        },
      ],
    };
  },
};
</script>

<style scoped>
.activity__margin {
  margin-top: 31px;
}
.activity__name {
  font-weight: 400;
  font-size: 16px;
  color: #2d3748;
}
.activity__main {
  font-weight: 600;
  font-size: 20px;
  color: #2d3748;
}
.activity__header {
  text-align: left;
}
.deals__count {
  font-weight: 600;
  font-size: 36px;
  color: #2d3748;
}
.deals__main {
  font-weight: 600;
  font-size: 16px;
  color: #2d3748;
}
.manager__deals {
  text-align: left;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px 0 16px 16px;
}
.task__today {
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  opacity: 0.7;
}
.task__count {
  font-weight: 600;
  font-size: 48px;
  color: #ffffff;
}
.task__main {
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
}
.block:hover {
  box-shadow: 0px 3.5px 5.5px rgba(112, 146, 224, 1);
  transition: 0.2s;
}
.block {
  text-align: left;
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  padding: 24px 0 24px 24px;
  margin-right: 8px;
  width: 313px;
}
.task__content {
  display: flex;
}
.step__count__main {
  font-weight: 600;
  font-size: 20px;
  color: #2d3748;
  white-space: nowrap;
}
.step__count {
  font-weight: 400;
  font-size: 14px;
  color: #a0aec0;
  white-space: nowrap;
}
.step__main {
  font-weight: 600;
  font-size: 16px;
  color: #2d3748;
  white-space: nowrap;
}
hr {
  border: 1px solid #e2e8f0;
  width: 74px;
  transform: rotate(90deg);
}
.step__color__block {
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 28px 25px 28px 25px;
}
.card__header h4 {
  font-weight: 600;
  font-size: 20px;
  color: #2d3748;
}
.card__header p {
  font-weight: 400;
  font-size: 16px;
  color: #a0aec0;
}
.card__header {
  text-align: left;
}
.funnel__content::-webkit-scrollbar {
  background: #e2e8f0;
  border-radius: 0.78vw;
  width: 0.7vw;
}

.funnel__content::-webkit-scrollbar-thumb {
  border-radius: 0.78vw;
  background-color: #313860;
}

.funnel__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.78vw;
  background-color: #e2e8f0;
}
.funnel__content {
  display: flex;
  overflow-x: auto;
}
.deals__table::-webkit-scrollbar {
  background: #e2e8f0;
  border-radius: 0.78vw;
  width: 0.32vw;
}

.deals__table::-webkit-scrollbar-thumb {
  border-radius: 0.78vw;
  background-color: #313860;
}

.deals__table::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 0.78vw;
  background-color: #e2e8f0;
}
.deals__table {
  height: 19vw;
  overflow-y: auto;
}
.select__workspace {
  border: 0 !important;
}
.active1 {
  color: #ffffff;
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border-radius: 6px 0px 0px 6px;
}
.active2 {
  color: #ffffff;
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border-radius: 0px 0px 0px 0px;
}
.active3 {
  color: #ffffff;
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border-radius: 0px 6px 6px 0px;
}
.test,
.test2,
.test3,
.test4,
.test5 {
  width: 104px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.select {
  background: #ffffff;
  border: 1px solid #a0aec0;
  border-radius: 8px;
  width: 246px;
}
.periods {
  background: #ffffff;
  border: 1px solid #a0aec0;
  border-radius: 8px;
  width: 519px;
}
.select__content {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.periods__content {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.test5:hover {
  color: #ffffff;
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border-radius: 0px 6px 6px 0px;
}
.test2:hover,
.test3:hover,
.test4:hover {
  color: #ffffff;
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border-radius: 0px 0px 0px 0px;
}
.test:hover {
  color: #ffffff;
  background: linear-gradient(83.56deg, #7092e0 10.01%, #8baef3 75.36%);
  border-radius: 6px 0px 0px 6px;
}
.periods__content span {
  font-weight: 400;
  font-size: 14px;
  color: #2d3748;
}
</style>
