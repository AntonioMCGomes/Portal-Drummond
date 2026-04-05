/* =========================================================
   FILTRO DE TEMAS — PORTAL DRUMMOND
   Filtro simples em JavaScript puro
   ========================================================= */

function filtrar(categoria) {
    // Seleciona todos os elementos com a classe "tema"
    const itens = document.querySelectorAll('.tema');

    itens.forEach(item => {
        // Remove classe de ocultação antes de aplicar o filtro
        item.classList.remove('oculto');

        // Se a categoria não for "todos" e o item não tiver essa classe
        if (categoria !== 'todos' && !item.classList.contains(categoria)) {
            item.classList.add('oculto'); // Aplica animação de ocultar
        }
    });
}