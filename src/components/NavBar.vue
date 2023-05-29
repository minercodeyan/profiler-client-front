<template>
  <div>
    <v-toolbar
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        style="background: #D1C4E9"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Prometheus</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {

  name: "NavBar",
  computed: mapGetters(['authorizedUsername']),

}
</script>

<style scoped>

</style>