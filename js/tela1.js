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
        // Combine common mobile indicators into a single regex
        return /(Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Mobile|webOS)/i.test(navigator.userAgent);
    }
};

const header = document.querySelector("header")
const logo = document.querySelector(".logo")
const panel = document.querySelector(".panel")
const button1 = document.querySelector("#btn-suporte")
const button2 = document.querySelector("#btn-cancelar")
const footer = document.querySelector("footer")
const footerText = document.querySelector(".footer-text")
const list = document.querySelector("ul")
const containerButton = document.querySelector(".container-button")

document.addEventListener('DOMContentLoaded', () => {
    var btncancel = document.getElementById('btn-cancelar');
    var btnsuporte = document.getElementById('btn-suporte');
    var loadingBarFill = document.getElementById('loadingBarFill');
    const delayTime = 5000; // 5 segundos
    btncancel.disabled = true;


  // Começa a animação de barra enchendo
    loadingBarFill.style.width = '100%';

  // Coloca um tempo para ativar o botão, após a animação
    setTimeout(function() {
        btncancel.disabled = false; // Ativa o botão
        btncancel.querySelector('.loading-bar-container').style.display = 'none'; // Esconde a barra de carregamento 
        }, delayTime);                                                      // caso a barra de carregamento tenha cor diferente do botão
        btncancel.addEventListener('click', function() {
        window.location.href = 'tela2.html';
    });
    btnsuporte.addEventListener('click', function() {
        window.location.href = 'https://api.whatsapp.com/send?phone=557996874222&text=Estou%20precisando%20de%20uma%20ajuda%20sobre%20a%20Engplay';})
});

if(isMobile.any()){
    header.style.justifyContent = "center"
    header.style.top = "0"
    logo.style.marginLeft = "0px"
    panel.style.margin = "5rem auto 5rem auto"

    button1.style.minWidth = "8rem"
    button1.style.fontSize = "1.5rem"

    button2.style.minWidth = "8rem"
    button2.style.fontSize = "1.5rem"

    footer.style.gap = "3rem"
    containerButton.style.flexDirection = "column"
    containerButton.style.justifyContent = "center"
    containerButton.style.alignItems = "center" 
    
    containerButton.style.gap = "1rem"
    footer.style.justifyContent = "space-between"
    footerText.style.marginLeft = "1rem"
    if (window.screen.width <= 360) {
        list.style.gap = "1rem"
        footer.style.gap = "2rem"
    } else if (window.screen.width <= 428) {
        list.style.gap = "2rem"
    } else {
        footer.style.gap = "4rem"
        list.style.gap = "3rem"
    }

    console.log("he's on phone!!!")
}