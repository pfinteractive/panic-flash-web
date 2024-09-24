import "./animatecss.scss";

const animatedElements = document.querySelectorAll(".animate__animated");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__fadeIn"); // Aquí pones la animación que desees
      observer.unobserve(entry.target); // Para que la animación ocurra solo una vez
    }
  });
});

animatedElements.forEach((element) => {
  observer.observe(element);
});
