import { createRouter, createWebHistory } from "vue-router";
import Portada from "../pages/Portada.vue";
import Actores from "../pages/Actores.vue";
import Temporadas from "../pages/Temporadas.vue";
import Detalles from "../pages/Detalles.vue";
import Presentacion from "../pages/Presentacion.vue";
import Enlaces from "../pages/Enlaces.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Portada",
      component: Portada,
    },
    {
      path: "/Actores",
      name: "Actores",
      component: Actores,
    },
    {
      path: "/Temporadas",
      name: "Temporadas",
      component: Temporadas,
    },
    {
      path: "/Detalles",
      name: "Detalles",
      props: true,      
      component: Detalles,
    },
    {
      path: "/Presentacion",
      name: "Presentacion",
      component: Presentacion,
    },
    {
      path: "/Enlaces",
      name: "Enlaces",
      component: Enlaces,
    },
  ],
});

export default router;
