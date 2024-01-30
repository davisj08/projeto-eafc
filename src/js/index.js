document.addEventListener("DOMContentLoaded", function() {
    const botoes = document.querySelectorAll(".btn-plataforma");
    console.log(botoes); // Verifique se os botões estão sendo selecionados corretamente

    botoes.forEach(function(botao) {
        botao.addEventListener("click", () => {
            console.log("Botão clicado"); // Verifique se o botão está sendo clicado
            const plataformas = botao.querySelector(".plataformas");
            if (plataformas) {
                plataformas.classList.add("ativo");
            }
        });

        const handleImageClick = (link) => {
            console.log("Link clicado:", link); // Verifique se o link está sendo capturado corretamente
            window.open(link, "_blank"); // Verifique se o redirecionamento do link está funcionando
        };

        botao.querySelectorAll('img').forEach(function(img) {
            img.addEventListener('click', function() {
                console.log("Imagem clicada"); // Verifique se a imagem está sendo clicada
                var link = this.getAttribute('data-link');
                handleImageClick(link);
            });
        });
    });
});
