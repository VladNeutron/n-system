<template>
  <div class="content-info">
    <p v-for="item in infoArr" :key="item">{{ item + ` ₸` }}</p>
  </div>
</template>
<script>
export default {
  props: {
    info: Object,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    infoArr() {
      return this.info;
    },
  },
};
</script>
<style scoped>
.content-info {
  display: flex;
  justify-content: space-evenly;
}
.content-info p {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  letter-spacing: -0.387234px;

  /* Black for text */
  color: #2d3748;
}
</style>
