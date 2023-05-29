<template>
    <nav-bar></nav-bar>
    <v-layout>
      <v-navigation-drawer color="deep-purple-lighten-1" permanent>
        <div class="link"><router-link to="/">Главная</router-link></div>
        <div class="link"><router-link to="/listeners">Слушатели</router-link></div>
        <div class="link"><router-link to="/settings">Настройки</router-link></div>
        <div class="link"><router-link to="/charts">Графики</router-link></div>
      </v-navigation-drawer>
      <v-main>
        <router-view/>
      </v-main>
    </v-layout>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "MainLayout",
  components: {NavBar}
}
</script>

<style scoped>
.link{
  font-size:25px;
  margin: 30px 20px;
  cursor: pointer;
}
.link a{
  color: white;
  text-decoration: none;
}

.link a:hover{
  text-decoration: underline;
}
</style>