<template>
  <header>
    <Navbar />    
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<script lang="js" setup>
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
import { RouterView } from 'vue-router';
</script>

<style style="scss" scoped>
body{
  padding: 0;
}

.animation{
  position: absolute;
  animation: scrolling 10sg linear infinite;
}

@keyframes scrolling{
  from { background-position: 0px 0; }
  to { background-position: -562px 0; }
}
</style>
