<template>
  <div
    class="tabs__contents"
    :class="vertical.value ? 'tabs__vertical' : 'tabs__horizontal'"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject: ["vertical"],
  mounted() {
    this.setIds();
    this.setInitialActive();
  },
  updated() {
    this.setIds();
  },
  methods: {
    setIds() {
      this.$slots.default().forEach((child, index) => {
        child.ref = `tab-${index + 1}`;
        child.key = `tab-${index + 1}`;
      });
    },
    setInitialActive() {
      this.$slots.default().forEach((child, index) => {
        child.dynamicProps = ["isActive"];
        if (index === 0) {
          child.props = {
            isActive: true,
          };
        } else {
          child.props = {
            isActive: false,
          };
        }
      });
    },
  },
};
</script>
<style></style>
