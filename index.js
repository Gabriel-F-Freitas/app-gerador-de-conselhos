const botao = document.querySelector(".advice-update");

const idConselho = document.querySelector(".advice-id");

const descricaoConselho = document.querySelector(".advice-description");



async function gerarConselho() {
    try {
        const resposta = await fetch('https://api.adviceslip.com/advice');
        const dados = await resposta.json();
        idConselho.innerText = 'ADVICE #' + dados.slip.id;
        descricaoConselho.innerText = dados.slip.advice;
    } catch (error) {
        console.error("Erro ao buscar conselho:", error)
    }
}

botao.addEventListener('click', gerarConselho)