<template>
  <HeaderPage :title="header.title" :description="header.description" />

  <section>
    <article class="infoIA">
      Parte del contenido de esta pagina web ha sido generado a partir de una
      inteligencia artificial, en concreto OpenAI, las siguientes frases son las
      introducidas para generar dicho contenido:
    </article>

    <article class="infoLinks">
      <h3>Enlaces</h3>
      <ul>
        <li v-for="link of links">
          <a :href="link.link">{{ link.title }}</a>
        </li>
      </ul>
    </article>
  </section>
</template>

<script lang="js" setup>
import HeaderPage from '../components/headerPage.vue';

const header = {
   title: "Enlaces",
   description: "Inicio - Enlaces"
}

const links = [
{
    title: 'Netflix - The Good Place',
    link: 'https://www.netflix.com/es/title/80113701'
},
{
    title: 'Wikipedia - Kristen Bell',
    link: 'https://es.wikipedia.org/wiki/Kristen_Bell'
},
{
    title: 'Wikipedia - Ted Danson',
    link: 'https://es.wikipedia.org/wiki/Ted_Danson'
},
{
    title: 'Wikipedia - Darcy Carden',
    link: 'https://es.wikipedia.org/wiki/D%27Arcy_Carden'
},
{
    title: 'Wikipedia - William Jackson',
    link: 'https://es.wikipedia.org/wiki/William_Jackson_Harper'
},
{
    title: 'Wikipedia - Jameela Jamil',
    link: 'https://es.wikipedia.org/wiki/Jameela_Jamil'
},
{
    title: 'Wikipedia - Manny Jacinto',
    link: 'https://es.wikipedia.org/wiki/Manny_Jacinto'
}
]
</script>

<style lang="scss" scoped>
@import "../style.scss";

section {
  padding: 2em;
}

.infoIA {
  text-align: center;
}

.infoLinks {
  background-color: $color-grey;
  padding: 1em;
  border-top: 4px solid $color-primary;
  margin-top: 2em;
  width: fit-content;
}

.infoLinks h3 {
    text-align: center;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: $color-text;
}
</style>
