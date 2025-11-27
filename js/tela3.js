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

document.addEventListener('DOMContentLoaded', () => {
    var btncancel = document.getElementById('btn-cancelar');
    var btnaceitar = document.getElementById('btn-aceitar');
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
        window.location.href = 'tela5.html';
    });
    btnaceitar.addEventListener('click', function() {
        window.location.href = 'tela4.html';})
});


if(isMobile.any()){
    header.style.justifyContent = "center"
    logo.style.marginLeft = "0px"
    

    console.log("he's on phone!!!")
}
