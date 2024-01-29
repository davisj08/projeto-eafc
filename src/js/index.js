document.addEventListener("DOMContentLoaded", function() {
    const botoes = document.querySelectorAll(".btn-plataforma");

    botoes.forEach(function(botao) {
        botao.addEventListener("click", () => {
            botao.querySelector(".plataformas").classList.toggle("ativo");
        });

        const handleImageClick = (link) => {
            window.open(link, "_blank");
        };

        botao.querySelectorAll('img').forEach(function(img) {
            img.addEventListener('click', function() {
                var link = this.getAttribute('data-link');
                handleImageClick(link);
            });
        });
    });
});