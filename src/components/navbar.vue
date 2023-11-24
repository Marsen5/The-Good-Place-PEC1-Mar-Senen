<template>
  <nav>
    <h1>
      <RouterLink :to="'/'" class="logo">The Good Place</RouterLink>
    </h1>
    <div class="menu-toggle" @click="toggleMenu">
      <div class="hamburger"></div>
    </div>
    <ul :class="{ active: isMobileMenuOpen }" class="menu-items">
      <li><RouterLink :to="'/Actores'">Actores</RouterLink></li>
      <li><RouterLink :to="'/Detalles'">Detalles</RouterLink></li>
      <li><RouterLink :to="'/Temporadas'">Temporadas</RouterLink></li>
      <li><RouterLink :to="'/Presentacion'">Presentación</RouterLink></li>
      <li><RouterLink :to="'/Enlaces'">Enlaces</RouterLink></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "../style.scss";

nav {
  background-color: $color-grey;
  padding: 1em;
  padding-right: 3em;
  padding-left: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.menu-items {
  list-style: none;
  display: flex;
  color: $color-text;
}

a {
  margin-right: 25px;
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
}

.menu-toggle {
  display: none;
  cursor: pointer;

  .hamburger {
    width: 30px;
    height: 3px;
    background-color: #000; 
    margin: 6px 0;
    transition: 0.4s;
  }
}

@media screen and (max-width: 768px) {
  .menu-items {
    display: none;
    flex-direction: column;
    background-color: #ddd; 
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 1em;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
    text-align: center;

    &.active {
      display: flex;
    }

    li {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .menu-toggle {
    display: block;
  }
}
</style>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
