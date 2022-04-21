<template>
  <login v-if="authorized"></login>
  <register v-else></register>
  <cookie></cookie>
</template>

<script>
export default {
  data() {
    return {
      authorized: false,
    };
  },
};
</script>

<style></style>
