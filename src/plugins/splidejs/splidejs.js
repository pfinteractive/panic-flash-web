import "./splidejs.scss";

import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    type: "loop",
    drag: "free",
    perPage: 7,
    autoScroll: {
      speed: 1,
    },
    pagination: false,

    // Configuración responsiva
    breakpoints: {
      1200: {
        perPage: 5, // Para pantallas más grandes pero no completas
      },
      1024: {
        perPage: 4, // Tablets y pantallas medianas
      },
      768: {
        perPage: 3, // Tablets más pequeñas
      },
      480: {
        perPage: 2, // Teléfonos móviles
      },
    },
  });

  splide.mount({ AutoScroll });
});
