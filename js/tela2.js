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

const body = document.querySelector("body")
const article = document.querySelector("article")
const header = document.querySelector("header")
const logo = document.querySelector(".logo")
const texto_feedback = document.querySelector(".titulo-feedback")
const texto_selecionar = document.querySelector(".texto-selecione")
const botao_enviar = document.querySelector("#botao-enviar")
const fundo_branco = document.querySelector("#fundo-branco")
const select = document.querySelector("select")
const option3 = document.querySelector("#option3")
const footer = document.querySelector("footer")
const footerText = document.querySelector(".footer-text")
const list = document.querySelector("ul")

const input = document.createElement("input")
input.id = "my-input"

if(isMobile.any()){
    console.log("working")
    body.style.overflow = "hidden"
    header.style.justifyContent = "center"
    header.style.position = "sticky"
    header.style.top = "0"
    logo.style.marginLeft = "0px"
    
    fundo_branco.style.width = "20rem"
    fundo_branco.style.height = "25rem"

    select.style.width = "90%"

    article.style.display = "flex"
    article.style.alignContent = "center"
    article.style.marginTop = "2rem"
    article.style.flexDirection = "column"
    article.style.gap = "2rem"
    
    option3.value = "Não tenho mais tempo"

    texto_feedback.style.fontSize = "2.5rem"
    texto_feedback.style.textAlign = "center"
    texto_selecionar.style.fontSize = "2rem"
    texto_selecionar.style.textAlign = "center"

    footer.style.gap = "3rem"
    footer.style.justifyContent = "space-between"
    footer.style.textAlign = "center"
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



botao_enviar.addEventListener('click', function () {
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