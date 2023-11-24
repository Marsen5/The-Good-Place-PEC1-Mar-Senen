<template>
  <HeaderPage :title="header.title" :description="header.description" />
  <div class="content">
    <section class="sinopsis">
      <h2>¿De que trata la serie?</h2>
      <article>
        <img src="../img/the-good-place_web.webp" alt="Portada serie The Good Place"/>
        <div class="texto">
          <p>
            "The Good Place" es una serie que sigue a un grupo de personajes después de su muerte y su experiencia en el más allá.
            La trama gira en torno a Eleanor Shellstrop, una mujer egoísta que se encuentra en el "Buen Lugar" por error después de su fallecimiento.
              Descubre que no merece estar allí y busca redimirse con la ayuda de sus amigos: Chidi, un profesor de ética; Tahani, una socialité; Jason, un DJ aficionado;
              Michael, el arquitecto del vecindario celestial; y Janet, un ser artificial con conocimiento infinito.
          </p>
          <p>
            A lo largo de cuatro temporadas, la serie explora temas profundos sobre la moralidad, la ética, la redención y el significado de una vida buena.
            Los personajes se enfrentan a desafíos éticos, aprenden lecciones importantes y se embarcan en viajes personales para mejorar como individuos.
          </p>
          <p>
          En el transcurso de la serie, se revelan giros inesperados que desafían las expectativas de los personajes y los espectadores sobre el funcionamiento del más allá.
          Desde descubrir que están realmente en el "Mal Lugar" hasta recibir una segunda oportunidad en la Tierra para demostrar su valía, cada temporada presenta nuevos obstáculos y desafíos para los protagonistas.
          </p>
        </div>
      </article>
    </section>

    <section class="secciones" >
      <p v-for="detail of details">
        <h4>{{ detail.title }}</h4>
        <label>{{ detail.description }}</label>
        <br />
        <RouterLink :to="detail.link">Ver mas...</RouterLink>
      </p>
    </section>
  </div>
</template>

<script lang="js" setup>
import HeaderPage from '../components/headerPage.vue';

const header = {
   title: "The Good Place",
   description: "¡Bienvenido a nuestro sitio dedicado a 'The Good Place'! Sumérgete en el intrigante mundo de esta serie que desafía las nociones tradicionales del más allá."
}

const details = [
   {
      title: "Actores Principales",
      description: 'Descubre las actuaciones memorables que dieron vida a los personajes más queridos y entrañables de la serie. Explora sus perfiles y momentos destacados.',
      link: 'Actores'
    },
{
      title: 'Explorando las Temporadas',
      description: 'Viaja a través de las cuatro emocionantes temporadas, descubre los giros inesperados y reflexiona sobre los temas éticos y filosóficos que cada una aborda.',
      link: 'Temporadas'
    },
{
      title: 'Presentación Detallada',
      description: 'Una página que explica en profundidad el contenido del sitio web, brindando una visión más detallada de cada sección y su importancia en el universo de "The Good Place".',
      link: 'Presentacion'
    }
,
{
      title: 'Enlaces y Fuentes',
      description: 'Documentación y enlaces a las fuentes utilizadas para crear el contenido del sitio, incluyendo atribuciones a las fuentes y los derechos correspondientes, además de la mención de herramientas utilizadas para desarrollar el sitio.',
      link: 'Enlaces'
    },
   ]
</script>

<style lang="scss" scope>
@import "../style.scss";

//Disposición general de la página
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
}

// Estilo de la sección de sinopsis
.sinopsis {
  max-width: 80%;
  align-content: center;

  h2 {
    color: $color-secondary;
    text-align: center;
  }

  article {
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap; 
    align-items: center;
    justify-content: center; 

    img {
      width: 40vh; 
      height: auto;
      margin-right: 2em;
    }

    .texto {
      width: 80vh; 
      text-align: justify;
    }
  }
}

// Estilo de la estructira de las secciones
.secciones {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5em;
  text-align: center;

  h4 {
    color: $color-secondary;
    margin-bottom: 5px;
  }

  label {
    color: #555;
  }

  p {
    width: calc(45% - 10px);
    margin-bottom: 20px;
  }
}

// Estilo para movil
@media screen and (max-width: 600px) {
  .secciones {
    flex-direction: column;

    p {
      width: 100%;
    }
  }
}
</style>