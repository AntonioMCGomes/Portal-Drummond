/* =========================================================
   FILTRO DE TEMAS — PORTAL DRUMMOND
   Filtro simples em JavaScript puro
   ========================================================= */

function filtrar(categoria) {
    const itens = document.querySelectorAll('.tema');

    itens.forEach(item => {
        const mostrar =
            categoria === 'todos' ||
            item.classList.contains(categoria);

        item.classList.toggle('oculto', !mostrar);
    });
}