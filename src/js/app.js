import "../scss/app.scss";

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".barra-nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Hambuegesa
document.addEventListener("DOMContentLoaded", function () {
  const hamburguesa = document.querySelector(".hamburguesa");
  const navegacion = document.querySelector(".navegacion");

  hamburguesa.addEventListener("click", function () {
    hamburguesa.classList.toggle("activo");
    navegacion.classList.toggle("activo");
  });

  // Cierra el menú si se hace clic fuera de él en dispositivos móviles
  document.addEventListener("click", function (event) {
    if (
      !navegacion.contains(event.target) &&
      !hamburguesa.contains(event.target)
    ) {
      hamburguesa.classList.remove("activo");
      navegacion.classList.remove("activo");
    }
  });
});

// Video youtube
// Obtener referencias a elementos del DOM
const openModalBtn = document.getElementById("openModalBtn");
const videoModal = document.getElementById("videoModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const videoFrame = document.getElementById("videoFrame");

// Abrir el modal y reproducir el video al hacer clic en el botón
openModalBtn.addEventListener("click", function () {
  const videoUrl = this.getAttribute("data-video-url");
  if (videoUrl) {
    videoFrame.src = videoUrl;
    videoModal.style.display = "flex";
  }
});

// Cerrar el modal y detener el video al hacer clic en el botón de cerrar (×) o fuera del modal
closeModalBtn.addEventListener("click", function () {
  videoModal.style.display = "none";
  videoFrame.src = ""; // Detener el video
});

window.addEventListener("click", function (event) {
  if (event.target === videoModal) {
    videoModal.style.display = "none";
    videoFrame.src = ""; // Detener el video
  }
});
