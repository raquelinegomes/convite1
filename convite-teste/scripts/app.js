document.getElementById("yesBtn").addEventListener("click", function() {
    const message = document.getElementById("responseMessage");
    message.innerHTML = "Hmmm, certo, te espero a partir das 19h!";
    const card = document.getElementById("responseCard");
    card.className = "response-card valid"; // Classe para o card válido
    card.classList.remove("hidden"); // Torna o card visível
});

document.getElementById("noBtn").addEventListener("click", function() {
    const message = document.getElementById("responseMessage");
    message.innerHTML = "Opção inválida! Ta apertando não por quê????";
    const card = document.getElementById("responseCard");
    card.className = "response-card invalid"; // Classe para o card inválido
    card.classList.remove("hidden"); // Torna o card visível
});
