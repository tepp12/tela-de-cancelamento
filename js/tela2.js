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
        
const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

const header = document.querySelector("header")


if(isMobile.any()){
    header.style.justifyContent = "center"
    logo.style.marginLeft = "0px"
    panel.style.margin = "5rem auto 5rem auto"

    console.log("he's on phone!!!")
}