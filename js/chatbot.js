/* =========================================================
   CHATBOT — PORTAL DRUMMOND
   Chat simples com palavras‑chave em JavaScript puro
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const botao = document.getElementById("chatbot-btn");
    const janela = document.getElementById("chatbot-box");
    const enviar = document.getElementById("chatbot-send");
    const input = document.getElementById("chatbot-input");
    const chat = document.getElementById("chatbot-messages");

    /* ------------------------------
       ABRIR / FECHAR CHATBOT
       ------------------------------ */
    botao.addEventListener("click", () => {
        janela.classList.toggle("aberto");
    });

    /* ------------------------------
       ENVIAR MENSAGEM
       ------------------------------ */
    enviar.addEventListener("click", enviarMensagem);
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") enviarMensagem();
    });

    function enviarMensagem() {
        const texto = input.value.trim();
        if (texto === "") return;

        adicionarMensagem("user", texto);
        input.value = "";

        setTimeout(() => {
            responder(texto.toLowerCase());
        }, 400);
    }

    /* ------------------------------
       ADICIONAR MENSAGEM AO CHAT
       ------------------------------ */
    function adicionarMensagem(tipo, texto) {
        const div = document.createElement("div");
        div.classList.add("msg", tipo);
        div.textContent = texto;
        chat.appendChild(div);
        chat.scrollTop = chat.scrollHeight;
    }

    /* ------------------------------
       RESPOSTAS POR PALAVRAS‑CHAVE
       ------------------------------ */
    function responder(texto) {

        let resposta = "Não tenho certeza sobre isso, mas posso ajudar com temas literários!";

        if (texto.includes("olá") || texto.includes("oi")) {
            resposta = "Olá! Como posso ajudar na sua jornada por Drummond?";
        }
        else if (texto.includes("poema") || texto.includes("poemas")) {
            resposta = "Drummond escreveu sobre amor, memória, ironia e crítica social. Quer explorar algum tema específico?";
        }
        else if (texto.includes("amor")) {
            resposta = "Para temas de amor, recomendo visitar a página 'Amor e Existência'.";
        }
        else if (texto.includes("social") || texto.includes("sociedade")) {
            resposta = "A poesia social de Drummond está em obras como *Sentimento do Mundo* e *A Rosa do Povo*.";
        }
        else if (texto.includes("infância") || texto.includes("memória")) {
            resposta = "A memória e a infância aparecem muito em poemas sobre Itabira.";
        }
        else if (texto.includes("contacto") || texto.includes("contato")) {
            resposta = "Pode enviar uma mensagem através da página Contactos.";
        }
        else if (texto.includes("horário") || texto.includes("funciona")) {
            resposta = "O portal está sempre disponível para consulta!";
        }
        else if (texto.includes("test drive") || texto.includes("test-drive")) {
            resposta = "Aqui não temos carros, mas podemos agendar uma sessão de leitura!";
        }

        adicionarMensagem("bot", resposta);
    }

});
