<template>
  <div class="tabs" :class="vertical ? 'tabs__horizontal' : 'tabs__vertical'">
    <slot></slot>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      vertical: computed(() => this.vertical),
    };
  },
};
</script>
<style>
@import url("../assets/css/style.css");
</style>
