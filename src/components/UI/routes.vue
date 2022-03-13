<template>
  <div class="header">
    <div class="site_logo">
      <div class="logo" />
      <h1 class="site_name">Сайт</h1>
    </div>    
    <nav class="top_menu">
      <router-link 
        v-for="rout in routs" 
        :key="rout.name" 
        :to="rout.path">
          {{rout.name}}
      </router-link>
    </nav>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'Routers',
  data(){
    return{
      routs: router.getRoutes()|| []
    }
  }
}
</script>