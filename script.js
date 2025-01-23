// Mostrar/ocultar el menú lateral
const toggleMenuButton = document.getElementById("toggle-menu");
const sidebar = document.getElementById("sidebar");

toggleMenuButton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
});

// Mostrar/ocultar secciones
const menuButtons = document.querySelectorAll(".menu button");
const sections = document.querySelectorAll(".section");
const inicioSection = document.getElementById("inicio");

menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        // Si ya está visible, regresar al inicio
        if (targetSection.classList.contains("active")) {
            sections.forEach((section) => section.classList.remove("active"));
            inicioSection.classList.add("active");
        } else {
            // Mostrar solo la sección seleccionada
            sections.forEach((section) => section.classList.remove("active"));
            targetSection.classList.add("active");
        }
    });
});

// Mostrar/ocultar descripción de carreras
const carreraButtons = document.querySelectorAll(".carrera-btn");

carreraButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const description = button.nextElementSibling;
        description.style.display =
            description.style.display === "block" ? "none" : "block";
    });
});
