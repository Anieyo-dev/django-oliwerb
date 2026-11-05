<template>
  <div>
    <Navbar/>
  </div>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
</script> 

<style >

#app {
  padding: 1.2rem;
  padding-top: 1rem;
}


</style>
