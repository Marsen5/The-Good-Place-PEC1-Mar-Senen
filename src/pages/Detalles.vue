<template>
  <HeaderPage :title="header.title" :description="header.description" />

  <ul class="selector">
    <li
      v-for="actor of actors"
      :class="{ selected: actor.name === actorRecived }"
    >
      <a @click="filterActor(actor.name)">{{ actor.characterName }}</a>
    </li>
  </ul>

  <section>
    <article v-for="actor of actorsComputed" class="actorBlock">
      <div class="actorInfo">
        <div>
          <img v-bind:src="actor.imgPath1" :alt="actor.name" />
          <img v-bind:src="actor.imgPath2" :alt="actor.characterName" />
        </div>
        <ul>
          <h2>{{ actor.name }} - {{ actor.characterName }}</h2>
          <li v-for="i of actor.info">
            <h4>{{ i.title }}</h4>
            <p>{{ i.text }}</p>
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script setup>
import HeaderPage from "../components/headerPage.vue";
import { computed, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const actorRecived = ref();

const header = {
  title: "Detalles",
  description: "Inicio - Detalles",
};

const actorsComputed = computed(() => {
  if (!actorRecived.value) return actors;

  return actors.filter((s) => s.name === actorRecived.value);
});

function filterActor(actorSelected) {
  if (!actorRecived.value) {
    actorRecived.value = actorSelected;
    return;
  }

  if (actorRecived.value === actorSelected) {
    actorRecived.value = undefined;
    return;
  }

  actorRecived.value = actorSelected;
}

const actors = [
  {
    name: "Kristen Bell",
    imgPath1:
      "https://media.revistavanityfair.es/photos/60e8555aa5768ac18af68d51/master/w_1600%2Cc_limit/46843.jpg",
    imgPath2: "https://i.ytimg.com/vi/kzWTwMLAX1M/maxresdefault.jpg",
    characterName: "Eleanor Shellstrop",
    info: [
      {
        title: "Biografia",
        text: `Kristen Anne Bell nació el 18 de julio de 1980, en Huntington Woods, Míchigan. Desde sus inicios, Kristen mostró un interés apasionado por la actuación, lo que la llevó a explorar el mundo del entretenimiento desde una edad temprana.`,
      },
      {
        title: "Carrera Actoral",
        text: `Kristen Bell ha dejado una marca indeleble en la industria del entretenimiento con interpretaciones memorables. Desde su papel icónico como Veronica Mars hasta su destacada actuación como Eleanor Shellstrop en "The Good Place", Bell ha demostrado su versatilidad y talento.`,
      },
      {
        title: "Premios y Reconocimientos",
        text: `A lo largo de su carrera, Kristen ha sido honrada con varios premios y nominaciones, incluyendo [lista de premios relevantes]. Su dedicación al arte de la actuación no ha pasado desapercibida en la industria cinematográfica y televisiva.`,
      },
      {
        title: "Filantropía",
        text: `Más allá de la pantalla, Kristen Bell es conocida por su compromiso con causas filantrópicas. Ha abogado activamente por la salud mental, los derechos de los animales y otras causas sociales. Su trabajo filantrópico refleja su deseo de hacer del mundo un lugar mejor.`,
      },
      {
        title: "Vida Personal",
        text: `Kristen está casada con el actor Dax Shepard, y juntos tienen una hermosa familia. Aunque valora su privacidad, Bell ocasionalmente comparte detalles sobre su vida personal, mostrando su lado auténtico y familiar.`,
      },
    ],
  },
  {
    name: "Ted Danson",
    imgPath1: "https://www.rirca.es/wp-content/uploads/2019/09/Danson.jpg",
    imgPath2:
      "https://m.media-amazon.com/images/M/MV5BYjFiYmFkZmUtYmU3Mi00NGYyLTkzM2ItNmQxYjcxZmQ0ZWU3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    characterName: "Michael",
    info: [
      {
        title: "Biografia",
        text: `Edward Bridge Danson III, conocido como Ted Danson, nació el 29 de diciembre de 1947, en San Diego, California. Desde joven, Ted mostró un interés innato por la interpretación, lo que eventualmente lo llevaría a sumergirse en el emocionante mundo del entretenimiento.`,
      },
      {
        title: "Carrera Actoral",
        text: `Ted Danson ha dejado una huella imborrable en la industria del entretenimiento con su destacada carrera actoral. Desde su papel emblemático como Sam Malone en "Cheers" hasta sus papeles en "Becker" y "The Good Place", Danson ha demostrado su versatilidad y habilidad para cautivar a la audiencia con su carisma único.`,
      },
      {
        title: "Premios y Reconocimientos",
        text: `A lo largo de su ilustre carrera, Ted ha sido honrado con numerosos premios y nominaciones, incluyendo múltiples premios Emmy y Globo de Oro. Su talento excepcional y su contribución significativa al mundo de la actuación han sido reconocidos en la industria cinematográfica y televisiva.`,
      },
      {
        title: "Filantropía",
        text: `Fuera de la pantalla, Ted Danson es conocido por su compromiso con diversas causas filantrópicas. Ha abogado activamente por la preservación del medio ambiente y la conservación de los océanos, trabajando con organizaciones dedicadas a la sostenibilidad y la protección de los ecosistemas marinos.`,
      },
      {
        title: "Vida Personal",
        text: `Ted Danson ha compartido una vida personal marcada por el éxito y la estabilidad. Estuvo casado con la también talentosa actriz Mary Steenburgen, y juntos han construido una vida familiar sólida. Aunque valora su privacidad, en ocasiones comparte aspectos de su vida personal, mostrando su lado genuino y cercano. Su relación con Mary Steenburgen es un ejemplo de duradera complicidad en la industria del entretenimiento.`,
      },
    ],
  },
  {
    name: "Darcy Carden",
    imgPath1:
      "https://www.instyle.com/thmb/Q1MoBw3JLDNyZm3aOos9zzEOO-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/091819-darcy-carden-03_0-2000-75f77837f97a4c59bf31eed210694393.jpg",
    imgPath2: "https://m.media-amazon.com/images/M/MV5BNTczMDQxMDAtZjIwNC00YjY0LWFjZDQtZjYzMjlkMmFlZWExXkEyXkFqcGdeQXVyMjY2MDM4NjY@._V1_.jpg",
    characterName: "Jadet",
    info: [
      {
        title: "Biografia",
        text: `D'Arcy Beth Carden nació el 4 de enero de 1980 en Danville, California. Desde joven, Carden demostró un amor por la actuación y la comedia, lo que la llevó a explorar su talento en el mundo del entretenimiento desde temprana edad.`,
      },
      {
        title: "Carrera Actoral",
        text: `D'Arcy Carden ha dejado una huella distintiva en la industria del entretenimiento con su singularidad y versatilidad. Es conocida por su papel en "The Good Place" como Janet, un personaje que desafía las expectativas y que ha ganado el cariño de la audiencia por su interpretación cómica y única.`,
      },
      {
        title: "Premios y Reconocimientos",
        text: `A lo largo de su carrera, Carden ha recibido elogios por su contribución al mundo de la comedia y la actuación. Su capacidad para dar vida a personajes entrañables y su habilidad para llevar a cabo interpretaciones cómicas han sido reconocidas por la crítica y la industria.`,
      },
      {
        title: "Filantropía",
        text: `Aunque Carden mantiene una vida privada reservada, su participación en diversas iniciativas benéficas y su apoyo a causas sociales han sido notables. Su influencia en el entretenimiento se ha extendido más allá de la pantalla, mostrando un compromiso con la comunidad y la responsabilidad social.`,
      },
      {
        title: "Vida Personal",
        text: `D'Arcy Carden ha mantenido una vida personal relativamente privada, centrándose en su carrera y en contribuir al mundo del entretenimiento con su talento único. Su dedicación a la actuación y su capacidad para llevar a cabo papeles diversos la han convertido en una figura admirada en la industria del entretenimiento.`,
      },
    ],
  },
  {
    name: "William Jackson",
    imgPath1:
      "https://www.syfy.com/sites/syfy/files/2022/10/gettyimages-1242115458.jpg",
    imgPath2: "https://www.espaciomarvelita.com/wp-content/uploads/2022/10/William-Jackson-Harper.webp",
    characterName: "Chidi Anagonye",
    info: [
      {
        title: "Biografia",
        text: `William Fitzgerald Harper nació el 8 de febrero de 1980 en Dallas, Texas. Desde temprana edad, Harper mostró un profundo interés por la actuación, marcando el comienzo de su apasionante viaje en el mundo del entretenimiento.
`,
      },
      {
        title: "Carrera Actoral",
        text: `William Jackson Harper ha dejado una impresión duradera en la industria del entretenimiento con interpretaciones cautivadoras. Es reconocido por su papel destacado como Chidi Anagonye en "The Good Place", donde demostró su habilidad para equilibrar humor y profundidad emocional. Su versatilidad actoral se refleja en proyectos cinematográficos y teatrales que han consolidado su reputación como actor talentoso.
`,
      },
      {
        title: "Premios y Reconocimientos",
        text: `A lo largo de su carrera, Harper ha recibido elogios y reconocimientos, incluyendo nominaciones a premios importantes. Su actuación en "The Good Place" le valió elogios de la crítica y el aprecio del público, consolidando su posición en la industria.
`,
      },
      {
        title: "Filantropía",
        text: `Más allá de la pantalla, William Jackson Harper ha demostrado un compromiso significativo con causas filantrópicas. Se ha involucrado en iniciativas que abordan temas como la equidad racial y la educación, utilizando su plataforma para generar conciencia sobre cuestiones sociales importantes.
`,
      },
      {
        title: "Vida Personal",
        text: `Aunque Harper valora su privacidad, ha compartido aspectos de su vida personal de manera ocasional. Su enfoque centrado y genuino en la actuación se complementa con una vida personal fuera de los reflectores. Su dedicación al arte de la actuación y su autenticidad en la vida cotidiana lo han convertido en una figura respetada en la industria del entretenimiento.`,
      },
    ],
  },
  {
    name: "Jameela Jamil",
    imgPath1:
      "https://m.media-amazon.com/images/M/MV5BMjA0NDI4OTEwMl5BMl5BanBnXkFtZTgwNDM4NDg4OTE@._V1_.jpg",
    imgPath2: "https://images.mubicdn.net/images/cast_member/591467/cache-590010-1652192862/image-w856.jpg?size=800x",
    characterName: "Tahani Al-Jamil",
    info: [
      {
        title: "Biografia",
        text: `Jameela Alia Jamil nació el 25 de febrero de 1986 en Hampstead, Londres. Desde sus primeros años, Jamil mostró un interés innato por la comunicación y el entretenimiento, lo que la llevó a embarcarse en una exitosa carrera en el mundo de la actuación y la presentación.
`,
      },
      {
        title: "Carrera Actoral",
        text: `Jameela Jamil ha dejado una marca distintiva en la industria del entretenimiento con su presencia magnética y su talento versátil. Conocida por su papel como Tahani Al-Jamil en "The Good Place", Jamil ha demostrado habilidades cómicas excepcionales y la capacidad de abordar temas sociales con gracia y profundidad en su trabajo actoral.
`,
      },
      {
        title: "Premios y Reconocimientos",
        text: `A lo largo de su carrera, Jameela ha recibido reconocimientos por su contribución a la televisión y la actuación. Su enfoque en personajes que desafían estereotipos ha sido elogiado por la crítica y ha resonado con audiencias de todo el mundo.
`,
      },
      {
        title: "Filantropía",
        text: `Fuera de la pantalla, Jameela Jamil es una defensora apasionada de la positividad corporal y la salud mental. Ha utilizado su voz para abogar por la aceptación y la inclusión, desafiando los estándares de belleza convencionales. Su trabajo en campañas relacionadas con la salud y el bienestar refleja su compromiso con causas significativas.
`,
      },
      {
        title: "Vida Personal",
        text: `Aunque valora su privacidad, Jameela Jamil ha compartido abiertamente detalles sobre su vida personal, incluyendo su experiencia con la salud mental y su viaje hacia la autoaceptación. Su autenticidad y transparencia la han convertido en una figura inspiradora para aquellos que buscan superar desafíos personales y abrazar su auténtico yo.`,
      },
    ],
  },
  {
    name: "Manny Jacinto",
    imgPath1:
      "https://media.gq.com/photos/5a72470c7d1ed070dd17ab0d/master/w_1600%2Cc_limit/manny-jacinto-GQ-nathaniel-wood-01.jpg",
    imgPath2: "https://hips.hearstapps.com/hmg-prod/images/manny-28-1629140978.jpg?crop=1.00xw:0.667xh;0,0.215xh&resize=640:*",
    characterName: "Jason Mendoza",
    info: [
      {
        title: "Biografia",
        text: `Manny Jacinto, cuyo nombre completo es Manuel Luis Jacinto, nació el 19 de agosto de 1987 en Manila, Filipinas. Desde sus primeros años, Jacinto mostró un interés y habilidad innatos para la actuación, lo que lo llevó a perseguir una carrera en el emocionante mundo del entretenimiento.
`,
      },
      {
        title: "Carrera Actoral",
        text: `Manny Jacinto ha dejado una impresión perdurable en la industria del entretenimiento con su talento distintivo y su presencia magnética en pantalla. Es conocido por su papel como Jason Mendoza en "The Good Place", donde demostró su habilidad para mezclar comedia y emoción con maestría. Su versatilidad actoral se ha destacado en diversos proyectos, consolidándolo como una figura prominente en la escena televisiva.
`,
      },
      {
        title: "Premios y Reconocimientos",
        text: `A lo largo de su carrera, Jacinto ha recibido elogios y reconocimientos por su contribución al mundo de la actuación. Su capacidad para encarnar personajes complejos y su habilidad para conectar con la audiencia le han valido admiración tanto de críticos como de colegas.
`,
      },
      {
        title: "Filantropía",
        text: `Aunque mantiene una vida privada reservada, Manny Jacinto ha participado en iniciativas filantrópicas y ha utilizado su plataforma para concientizar sobre cuestiones importantes. Su compromiso con causas sociales refleja su deseo de utilizar su influencia para hacer del mundo un lugar mejor.`,
      },
      {
        title: "Vida Personal",
        text: `Jacinto, a pesar de su creciente éxito en la industria del entretenimiento, ha mantenido una vida personal relativamente discreta. Su enfoque en la actuación y su capacidad para asumir una variedad de roles han contribuido a su estatus como actor respetado y admirado en la escena televisiva.`,
      },
    ],
  },
];

onBeforeMount(() => {
  actorRecived.value = route.query?.actor;

  if (actorRecived.value) {
    actorRecived.value = actorRecived.value.replace("_", " ");
  }
});
</script>

<style lang="scss" scoped>
@import "../style.scss";

.selected {
  color: $color-primary;
}

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

.actorBlock {
  background-color: $color-grey;
  margin: 10px;
  padding: 2em;
  border-top: 4px solid $color-primary;
  color: $color-text;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: $color-secondary;
    text-align: center;
  }
}

.actorInfo {
  display: flex;

  img {
    width: 30vw;
    max-height: 50vh;
    align-self: center;
    object-fit: fill;
  }
}
</style>
