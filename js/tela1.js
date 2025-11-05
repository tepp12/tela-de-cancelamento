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
const logo = document.querySelector(".logo")
const panel = document.querySelector(".panel")
const button1 = document.querySelector(".button-suporte")
const button2 = document.querySelector(".button-perder")
const footer = document.querySelector("footer")
const footerText = document.querySelector(".footer-text")
const list = document.querySelector("ul")


if(isMobile.any()){
    header.style.justifyContent = "center"
    logo.style.marginLeft = "0px"
    panel.style.margin = "5rem auto 5rem auto"

    button1.style.minWidth = "8rem"
    button1.style.fontSize = "1.5rem"
    button1.style.marginLeft = "3rem"

    button2.style.minWidth = "5rem"
    button2.style.fontSize = "1.5rem"

    footer.style.gap = "3rem"
    footer.style.justifyContent = "space-between"
    footerText.style.marginLeft = "1rem"
    list.style.gap = "3rem"

    console.log("he's on phone!!!")
}