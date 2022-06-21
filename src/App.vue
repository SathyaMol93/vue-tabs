<template>
  <div>
    <vue-tabs :vertical="trtue">
      <vue-tab-heads :v-modal="tab">
        <vue-tab-head>Tab 1</vue-tab-head>
        <vue-tab-head>Tab 2</vue-tab-head>
        <vue-tab-head>Tab 3</vue-tab-head>
        <vue-tab-head>Tab 4</vue-tab-head>
        <vue-tab-head>Tab 5</vue-tab-head>
      </vue-tab-heads>
      <vue-tab-contents :v-model="tab">
        <vue-tab-content>Content 1</vue-tab-content>
        <vue-tab-content>Content 2</vue-tab-content>
        <vue-tab-content>Content 3</vue-tab-content>
        <vue-tab-content>Content 4</vue-tab-content>
        <vue-tab-content>Content 5</vue-tab-content>
      </vue-tab-contents>
    </vue-tabs>
  </div>
</template>

<script>
import VueTabContent from "./components/VueTabContent.vue";
import VueTabContents from "./components/VueTabContents.vue";
import VueTabHead from "./components/VueTabHead.vue";
import VueTabHeads from "./components/VueTabHeads.vue";
import VueTabs from "./components/VueTabs.vue";
export default {
  name: "App",
  components: {
    VueTabs,
    VueTabHeads,
    VueTabHead,
    VueTabContents,
    VueTabContent,
  },
  data() {
    return {
      tab: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
