<template>
  <HeaderPage :title="header.title" :description="header.description" />
  <h2>Selecciona tu personaje favorito</h2>

  <section>
    <RouterLink :to="{name: 'Detalles', query: { actor: 'Kristen_Bell'}}"><div class="Eleanor" alt="Imagen de Eleanor"></div></RouterLink>
    <RouterLink :to="{name: 'Detalles', query: { actor: 'Ted_Danson'}}"><div class="Michael" alt="Imagen de Michael"></div></RouterLink>
    <RouterLink :to="{name: 'Detalles', query: { actor: 'Darcy_Carden'}}"><div class="Janet" alt="Imagen de Janet"></div></RouterLink>
    <RouterLink :to="{name: 'Detalles', query: { actor: 'William_Jackson'}}"><div class="Chidi" alt="Imagen de Chidi"></div></RouterLink>
    <RouterLink :to="{name: 'Detalles', query: { actor: 'Jameela_Jamil'}}"><div class="Tahani" alt="Imagen de Tahani"></div></RouterLink>
    <RouterLink :to="{name: 'Detalles', query: { actor: 'Manny_Jacinto'}}"><div class="Jason" alt="Imagen de Tahani"></div></RouterLink>
  </section>
</template>

<script setup>
import HeaderPage from "../components/headerPage.vue";

const header = {
  title: "Actores",
  description: "Inicio - Actores",
};
</script>

<style lang="scss" scoped>
@import "../style.scss";

//Titulo página
h2 {
  text-align: center;
  color: $color-secondary;
}

//Plantilla tarjetas personajes con auto-fit
section{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  
  //Tarjetas personajes
 div{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  height: 50vh;
  padding: 15px;
  color: $color-text;
  text-decoration: none;

}

//Eleanor
.Eleanor{
  background-image: url('../img/Eleanor_web.webp');
}
.Eleanor::after{
  content: "Eleanor Shellstrop";
}
.Eleanor:hover{
  background-image: url('../img/Kristen_Bell_web.webp');
}
.Eleanor:hover::after{
  content: "Kristen Bell ";
}

//Michael
.Michael{
  background-image: url('../img/Michael_web.webp');
}
.Michael::after{
  content: "Michael";
}
.Michael:hover{
  background-image: url('../img/Ted Danson_web.webp');
}
.Michael:hover::after{
  content: "Ted Danson";
  color: white;
}

//Janet
.Janet{
  background-image: url('../img/Janet_web.webp');
}
.Janet::after{
  content: "Jadet";
}
.Janet:hover{
  background-image: url('../img/DArcy_Carden_web.webp');
}
.Janet:hover::after{
  content: "D'Arcy Carden";
}

//Chidi
.Chidi{
  background-image: url('../img/Chidi_web.webp');
}
.Chidi::after{
  content: "Chidi Anagonye";
}
.Chidi:hover{
  background-image: url('../img/William_Jackson_web_1.webp');
}
.Chidi:hover::after{
  content: "William Jackson";
}

//Tahani
.Tahani{
  background-image: url('../img/Tahani_web.webp');
}
.Tahani::after{
  content: "Tahani Al-Jamil";
}
.Tahani:hover{
  background-image: url('../img/Jameela_Jamil_web.webp');
}
.Tahani:hover::after{
  content: "Jameela Jamil ";
}

//Jason Mendoza
.Jason{
  background-image: url('../img/Json_web.webp');
}
.Jason::after{
  content: "Jason Mendoza";
}
.Jason:hover{
  background-image: url('../img/manny-jacinto-GQ-nathaniel-wood-01_web.webp');
}
.Jason:hover::after{
  content: "Manny Jacinto ";
}

}

//Estilo para móvil
@media (max-width: 1000px) {
  .section{
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
}
</style>

