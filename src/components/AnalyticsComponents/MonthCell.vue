<template>
  <div class="table-cell d-flex flex-column">
    <div
      class="month-select mt-3 d-flex justify-content-center gap-4 align-items center"
    >
      <img
        src="@/assets/css/icons/arrow-left-disabled.svg"
        alt="prev"
        @click="startMonth = startMonth - 1"
        v-if="startMonth > 0"
      />
      <p @update="$emit('newMonth', selectedMonth)" class="mb-0">
        {{ selectedMonth }} 2022
      </p>

      <img
        src="@/assets/css/icons/arrow-right-enabled.svg"
        alt="next"
        @click="startMonth++"
        v-if="startMonth < endMonth"
      />
    </div>
    <div
      class="month-description mb-3 mt-4 d-flex justify-content-evenly align-items-center"
    >
      <p class="mb-0">Доходы</p>
      <p class="mb-0">Расходы</p>
      <p class="mb-0">Прибыль</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    monthIdx: Number,
  },
  emits: {
    newMonth: null,
  },
  data() {
    return {
      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      startMonth: this.monthIdx,
    };
  },
  methods: {},
  computed: {
    selectedMonth() {
      return this.months[this.startMonth];
    },
    endMonth() {
      return this.months.length - 1;
    },
  },
  watch: {},
};
</script>
<style scoped>
.table-cell {
  min-width: 370px;
}
.month-select p {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.553191px;

  color: #2d3748;
}
.month-description p {
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  text-transform: uppercase;

  color: #a0aec0;
}
</style>
