<template>
  <HeaderPage :title="header.title" :description="header.description" />

  <ul class="selector">
    <li v-for="season of seasons">
      <a @click="filterSeason(season.title)">{{ season.title }}</a>
    </li>
  </ul>

  <section>
    <article v-for="season of seasonsComputed" class="seasonBlock">
      <h2>{{ season.title }}</h2>
      <p>{{ season.info }}</p>
    </article>
  </section>
</template>

<script setup>
import HeaderPage from "../components/headerPage.vue";
import { computed, ref } from "vue";

const selected = ref();

const header = {
  title: "Temporadas",
  description: "Inicio - Temporadas",
};

const seasonsComputed = computed(() => {
  if (!selected.value) return seasons;

  return seasons.filter((s) => s.title === selected.value);
});

function filterSeason(season) {
  if (!selected.value) {
    selected.value = season;
    return;
  }

  if (selected.value === season) {
    selected.value = undefined;
    return;
  }

  selected.value = season;
}

const seasons = [
  {
    title: "Temporada 1",
    info: 'Eleanor despierta en "El Buen Lugar", una especie de paraíso diseñado para las personas más virtuosas. Sin embargo, pronto se da cuenta de que ella no debería estar ahí, pues no llevaba una vida moralmente buena. Con la ayuda de su supuesto alma gemela, Chidi, intenta aprender ética y ser una mejor persona para merecer su lugar en el Buen Lugar. La temporada termina con un gran giro sorprendente',
  },
  {
    title: "Temporada 2",
    info: 'Después del giro de la temporada anterior, Eleanor y sus amigos descubren que en realidad están en un lugar llamado el "Mal Lugar". Michael, el arquitecto del vecindario, les revela que han estado experimentando una versión tortuosa del Buen Lugar. Deciden tratar de mejorar para obtener una oportunidad de llegar al auténtico Buen Lugar.',
  },
  {
    title: "Temporada 3",
    info: "Michael convence a los Jueces del más allá de darles una segunda oportunidad en la Tierra, dándoles una oportunidad para demostrar que pueden mejorar sus vidas y merecer entrar al Buen Lugar. Se enfrentan a diferentes desafíos y decisiones morales mientras luchan por ser mejores personas.",
  },
  {
    title: "Temporada 4",
    info: 'Los personajes regresan al "Buen Lugar" después de haber tenido una segunda oportunidad en la Tierra. Trabajan juntos para mejorar el sistema de evaluación del más allá y enfrentan desafíos para lograr una existencia significativa y virtuosa.',
  },
];
</script>

<style lang="scss" scoped>
@import "../style.scss";

.selector {
  list-style: none;
  padding: 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  li {
    margin-right: 25px;
    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.seasonBlock {
  background-color: $color-grey;
  margin: 10px;
  padding: 2em;
  border-top: 4px solid $color-primary;
  text-align: center;

  h2 {
    color: $color-secondary;
  }

  p {
    color: $color-text;
  }
}
</style>
