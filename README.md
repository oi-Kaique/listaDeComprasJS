🛒 **QuickList - Aplicação de Lista de Compras**

📜 Descrição do Projeto
O QuickList é uma aplicação simples de lista de compras desenvolvida em JavaScript, HTML e CSS. Ela permite adicionar, marcar como comprados e remover itens, com persistência de dados no localStorage do navegador. Ideal para quem quer aprender a manipular o DOM e gerenciar eventos no JavaScript.

🔧**Funcionalidades**

➕ Adicionar Itens: Insira o nome do item e clique para adicionar à lista.

✔️ Marcar como Comprado: Use o checkbox para riscar itens comprados.

❌ Remover Itens: Remova um item clicando no ícone de lixeira.

💾 Persistência de Dados: A lista é salva no localStorage do navegador.



🛠️**Tecnologias Utilizadas**

HTML: Estrutura da página.

CSS: Estilos visuais.

JavaScript: Lógica da aplicação, manipulação de eventos e armazenamento local.

 🗂️**Estrutura do Código**
 
Aqui está a explicação detalhada de cada parte do código para ajudar iniciantes a entender como ele funciona.

1. 👨‍💻 **Estrutura do Cabeçalho**
 
```JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const divLogo = document.createElement('div');
    divLogo.classList.add('div-logo');
    
    const imgLogo = document.createElement('img');
    const h1Logo = document.createElement('h1');

    h1Logo.textContent = 'QuickList';
    imgLogo.src = "./assets/logo03.svg";
    imgLogo.alt = "Logo do site";

    document.body.appendChild(divLogo);
    divLogo.appendChild(imgLogo);
    divLogo.appendChild(h1Logo);
});
```



📖 **Explicação:**

Usamos document.createElement() para criar os elementos do cabeçalho dinamicamente (logo e título).

O evento DOMContentLoaded garante que o código só seja executado após o carregamento completo da página.

2. 📦 **Criação do Corpo da Página e Área da Lista**
```JavaScript
 const body = document.querySelector('body');
body.classList.add('body');

const divContainer = document.createElement('div');
const divSearch = document.createElement('div');
divContainer.classList.add('container');
divSearch.classList.add('search');

const h1 = document.createElement('h1');
h1.textContent = "Compras da semana";
divContainer.appendChild(h1);
document.body.appendChild(divContainer);

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Adicione um novo item';
divSearch.appendChild(input);

const button = document.createElement('button');
button.classList.add('btn-add');
button.textContent = 'Adicionar Item';
divSearch.appendChild(button);
divContainer.appendChild(divSearch);
```
3. 
