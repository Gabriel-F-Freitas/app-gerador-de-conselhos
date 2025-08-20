# Advice Generator App

Um aplicativo simples que gera **conselhos aleatórios em inglês** usando a [API Advice Slip](https://api.adviceslip.com/).  

O objetivo é praticar manipulação de DOM, eventos e consumo de API com `async/await` em JavaScript.

---

## Tecnologias

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- API externa: Advice Slip JSON API

---

## Funcionalidades

- Exibe um conselho aleatório ao carregar a página.  
- Ao clicar no botão, gera um novo conselho em inglês.  
- Tratamento de erros com `try/catch`.  
- Atualiza dinamicamente o ID e o texto do conselho no card.

---

## Como usar

1. Abra o arquivo `index.html` no navegador.  
2. Clique no botão de dado para gerar novos conselhos.

---

## Observações

- A API pode retornar o mesmo conselho se for chamada **em menos de 2 segundos**.  
- O `innerText` é usado para atualizar apenas o texto do card, sem alterar a estrutura HTML.

---

Feito com 💜 por [Seu Nome]

