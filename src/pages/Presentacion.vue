<template>
    <div class="container">
        <div class="portada1"></div>

        <section>
            <h2>Explora las Temporadas</h2>
            <p>
                En cada temporada, los espectadores se embarcan en un viaje emocional y reflexivo. Desde la desconcertante revelación al inicio hasta el desgarrador y satisfactorio desenlace, cada entrega ofrece una travesía llena de sorpresas, dilemas éticos y momentos hilarantes. Descubre cómo los personajes principales, como Eleanor, Chidi, Tahani, Jason y Michael, evolucionan a lo largo de las cuatro temporadas, enfrentando desafíos que los transforman y conectan de maneras profundas e inesperadas.
            </p>
            <RouterLink class="button" to="/Temporadas">Explorar</RouterLink>
        </section>

        <div class="portada2"></div>

        <section>
            <h2>Conoce a los Actores</h2>
            <p>
                Detrás de cada personaje hay un actor talentoso que aporta vida y profundidad a la historia. Desde Kristen Bell, quien da vida a la astuta pero imperfecta Eleanor, hasta Ted Danson, cuyo personaje, Michael, evoluciona de arquitecto del "Buen Lugar" a un aliado crucial. Explora el talento y la versatilidad de William Jackson Harper, Jameela Jamil, D'Arcy Carden y Manny Jacinto, quienes interpretan a personajes tan únicos como entrañables. Descubre Detalles sobre su proceso creativo, anécdotas de rodaje y su impacto en la serie que los llevó a ganarse un lugar en los corazones de los espectadores.            </p>
            <RouterLink class="button" to="/Actores">Ver Actores</RouterLink>
        </section>

        <div class="portada3"></div>

        <p class="FraseFinal">Este sitio web es una invitación a explorar los aspectos más fascinantes de "The Good Place": desde las brillantes interpretaciones de los actores hasta las complejas tramas de cada temporada que dejaron una huella en los corazones de los espectadores.</p>
    </div>
</template>

<style lang="scss" scoped>
@import "../style.scss";

.container {
    text-align: center;

    section{
        margin: auto;
        padding: 3em;
    }

    div{
        background-size: cover;
        background-repeat: no-repeat;
        margin-bottom: 3em;
        height: 65vh;
        width: 100%;
    }
    .portada1{
    background-image: url('../img/the-good-place-banner_web.webp');
    }

    .portada2{
     margin-top: 3em;
    background-image: url('../img/original_web.webp');
    background-position: center;
    }
    
    .portada3{
        margin-top: 3em;
       background-image: url('../img/1791_web.webp');
       background-position: center;
       }

    .button {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: $color-grey;
        text-decoration: none;
        color: $color-text;
    }

    .button:hover {
        background-color: $color-primary;
        color: white;
    }

    p{
        max-width: 80%;
        text-align: center;
        margin: auto;
        margin-bottom: 2em;
    }

    .FraseFinal{
        font-weight: $text-bold-h2;
        font-size: large;
        padding: 2em;
    }

    
}

</style>

