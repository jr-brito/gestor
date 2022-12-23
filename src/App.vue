<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">    
      <v-list>
        <v-list-item v-for="item in rotas" :key="item.name" :to="item.path" @click="router.push(item.path)">
        {{ item.name }}          
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Gestor</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />      
    </v-main>
  </v-app>
</template>

<script setup lang="ts"> 
import router from './router'
import { ref, onMounted } from 'vue'
const drawer = ref(false);
const rotas = router.getRoutes()
    
</script>