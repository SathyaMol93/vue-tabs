<template>
  <div class="tabs__content" :class="isActive ? 'tabs__content__active' : ''">
    <slot></slot>
  </div>
</template>
<script>
import tabMixin from "@/mixin/tab-mixin";
export default {
  mixins: [tabMixin],
};
</script>
<style></style>
