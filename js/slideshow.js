/* =========================================================
   SLIDESHOW DE CAPAS — PORTAL DRUMMOND
   ========================================================= */

let slideIndex = 0;
let slideTimer;

mostrarSlides();

function mostrarSlides() {
    const slides = document.getElementsByClassName("obra-slide");
    const dots = document.getElementsByClassName("dot");

    // Segurança: evita erro se não existirem slides
    if (slides.length === 0) return;

    // Esconde todos
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove dots ativos
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Próximo slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Mostra slide atual
    slides[slideIndex - 1].style.display = "block";

    // Ativa dot se existir
    if (dots.length > 0) {
        dots[slideIndex - 1].classList.add("active");
    }

    // Limpa timer anterior
    clearTimeout(slideTimer);

    // Cria novo timer
    slideTimer = setTimeout(mostrarSlides, 3500);
}

function selecionarSlide(n) {
    slideIndex = n - 1; // ajuste importante
    clearTimeout(slideTimer);
    mostrarSlides();
}
