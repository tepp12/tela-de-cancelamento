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

const button = document.querySelector(".botao-voltar")

if (isMobile.any()){
    header.style.justifyContent = "center"
    header.style.position = "sticky"
    header.style.top = "0"
    logo.style.marginLeft = "0px"

    button.style.padding = "15px 15px"
    button.style.fontSize = "1.3rem"
}