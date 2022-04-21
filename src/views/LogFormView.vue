<template>
  <login v-if="authorized"></login>
  <register v-if="authorized"></register>
</template>

<script>
export default {
  data() {
    return {
      authorized: true,
    };
  },
};
</script>

<style></style>
