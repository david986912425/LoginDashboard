<template>
  <v-app>
    <NavigatorComponents />
  </v-app>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavigatorComponents from '../components/Navigator.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NavigatorComponents,
  },
});
</script>
<style>
</style>
