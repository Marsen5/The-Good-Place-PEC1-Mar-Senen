<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script lang="js" setup>
import Navbar from './components/navbar.vue';
import { RouterView } from 'vue-router';

</script>

<style style="scss" scoped>
body{
  padding: 0;
}
</style>
