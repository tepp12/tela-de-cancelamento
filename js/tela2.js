document.querySelector('.botao-enviar').addEventListener('click', function () {
            const motivo = document.getElementById('motivo').value;
            if (motivo === "orcamento") {
                window.location.href = 'tela3.html';
            }
            if (motivo === "insatisfacao") {
                window.location.href = 'tela4.html';
            }
            if (motivo === "tempo") {
                window.location.href = 'tela5.html';
            }
        }); 