<template>
  <div id="app">
    <theme-navigation> </theme-navigation>
    <router-view />
    <theme-footer v-if="homePage"> </theme-footer>
  </div>
</template>
<script>
import ThemeNavigation from "@/components/ThemeNavigation.vue";
import ThemeFooter from "@/components/ThemeFooter.vue";

export default {
  name: "App",
  components: {
    ThemeNavigation,
    ThemeFooter,
  },
  data() {
    return {
      // homePage: true
    }
  },
  computed: {
    homePage() {
      if (this.$route.path == "/" || this.$route.path == "/home") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>