// Captura o formulário de contato
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    
    if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("form-contato").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Captura o seletor de cor e aplica a cor de fundo à página
document.getElementById("cor-fundo").addEventListener("input", function() {
    const corEscolhida = this.value;
    document.body.style.backgroundColor = corEscolhida;
});
