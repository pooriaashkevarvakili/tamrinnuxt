<template>
  <div>
    <TheHeader @sidenavToggle="updateSidenavToggle(!displaySidenav)" />
    <TheSidenav
      :show="displaySidenav"
      @close="updateSidenavToggle(false)"
    />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheSidenav from '@/components/Navigation/TheSidenav';

export default {
  middleware:'log',
  components: {
    TheHeader,
    TheSidenav,
  },
  data() {
    return {
      displaySidenav: false,
    };
  },
  methods: {
    updateSidenavToggle(shouldDisplaySidenav) {
      this.displaySidenav = shouldDisplaySidenav;
    },
  },
};
</script>


<style>
html {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  margin: 0;
}
</style>
