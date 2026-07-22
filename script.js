// ===============================
// TAROT - SCRIPT
// ===============================

let cartaSelecionada = null;
const tempoGiro = 1500;

// -------------------------------
// Escolher carta do computador
// -------------------------------
function carregarCarta(event) {

    const arquivo = event.target.files[0];

    if (!arquivo) return;

    cartaSelecionada = URL.createObjectURL(arquivo);

    document.getElementById("infoCarta").innerHTML =
        "<strong>Carta Selecionada:</strong><br>" +
        arquivo.name;

}

// -------------------------------
// Sortear (mantém a animação)
// -------------------------------
function sortearCarta() {

    if (!cartaSelecionada) {
        alert("Escolha uma carta primeiro.");
        return;
    }

    const som = document.getElementById("somSorteio");
    som.currentTime = 0;
    som.play();

    const card = document.getElementById("card");
    const imagem = document.getElementById("card-image");

    // vira para trás
    card.classList.remove("is-flipped");

    // espera terminar a animação
    setTimeout(function () {

        imagem.src = cartaSelecionada;

        card.classList.add("is-flipped");

    }, tempoGiro);

}

// -------------------------------
// Virar para as costas
// -------------------------------
function virarParaCostas() {

    document
        .getElementById("card")
        .classList
        .remove("is-flipped");

}

// -------------------------------
// Arrastar a carta
// -------------------------------
const cardContainer = document.querySelector(".card-container");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

cardContainer.addEventListener("mousedown", function (e) {

    isDragging = true;

    offsetX = e.clientX - cardContainer.offsetLeft;
    offsetY = e.clientY - cardContainer.offsetTop;

    cardContainer.style.cursor = "grabbing";

});

document.addEventListener("mouseup", function () {

    isDragging = false;
    cardContainer.style.cursor = "grab";

});

document.addEventListener("mousemove", function (e) {

    if (!isDragging) return;

    let left = e.clientX - offsetX;
    let top = e.clientY - offsetY;

    const maxLeft =
        window.innerWidth - cardContainer.offsetWidth;

    const maxTop =
        window.innerHeight - cardContainer.offsetHeight;

    if (left < 0) left = 0;
    if (top < 0) top = 0;

    if (left > maxLeft) left = maxLeft;
    if (top > maxTop) top = maxTop;

    cardContainer.style.left = left + "px";
    cardContainer.style.top = top + "px";

});

// -------------------------------
// ALT + B = Tela cheia
// -------------------------------
document.addEventListener("keydown", function (event) {

    if (event.altKey && event.key.toLowerCase() === "b") {
        abrirCartaEmPopup();
    }

});

// -------------------------------
// Popup em tela cheia
// -------------------------------
function abrirCartaEmPopup() {

    const cartaAtual =
        document.getElementById("card-image").src;

    if (!cartaAtual) {
        alert("Nenhuma carta aberta.");
        return;
    }

    const popup = window.open(
        "",
        "",
        `width=${screen.width},height=${screen.height},top=0,left=0`
    );

    if (!popup) {

        alert("Permita pop-ups para este site.");
        return;

    }

    popup.moveTo(0, 0);
    popup.resizeTo(screen.width, screen.height);

    popup.document.write(`
<!DOCTYPE html>
<html>
<head>

<title>Carta</title>

<style>

html,body{

margin:0;
padding:0;
width:100%;
height:100%;
background:black;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;

}

img{

width:100%;
height:100%;
object-fit:contain;

}

</style>

</head>

<body>

<img src="${cartaAtual}">

</body>

</html>
`);

    popup.document.close();

}