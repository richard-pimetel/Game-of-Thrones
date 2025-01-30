"use strict"

const botaoTrocaImagem = document.getElementById('trocarImagem');
const inputImagem = document.getElementById('cor');
const body = document.querySelector('body');

// Objeto com os valores CSS das imagens
const imagens = {
    img1: "var(--imagem1)",
    img2: "var(--imagem2)",
    img3: "var(--imagem3)",
    img4: "var(--imagem4)",
    img5: "var(--imagem5)"
};

// Troca a imagem quando o usuário pressiona "Enter"
inputImagem.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const valorDigitado = inputImagem.value.trim().toLowerCase();
        
        if (imagens[valorDigitado]) {
            body.style.backgroundImage = imagens[valorDigitado];
        } else {
            alert("Imagem não encontrada! Digite algo entre img1 e img5.");
        }
    }
});

// Troca para uma imagem aleatória ao clicar no botão
botaoTrocaImagem.addEventListener("click", () => {
    const chaves = Object.keys(imagens); // Pega as chaves do objeto (img1, img2, ...)
    const aleatorio = chaves[Math.floor(Math.random() * chaves.length)]; // Escolhe aleatoriamente uma chave
    body.style.backgroundImage = imagens[aleatorio]; // Define a imagem aleatória
});
