<template>
  <div
    class="tabs__button"
    :class="
      isActive
        ? vertical.value
          ? 'tabs__vertical__active'
          : 'tabs__horizontal__active'
        : ''
    "
  >
    <slot></slot>
  </div>
</template>
<script>
import tabMixin from "@/mixin/tab-mixin";
export default {
  inject: ["vertical"],
  mixins: [tabMixin],
};
</script>
