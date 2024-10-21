🛒 **QuickList - Aplicação de Lista de Compras**

📜 **Descrição do Projeto**

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
📖 **Explicação:**

Aqui criamos o container principal, incluindo um campo de texto para entrada de itens e um botão "Adicionar Item".

O método classList.add() é utilizado para aplicar classes de estilo aos elementos.

3. ➕ **Adicionando Itens à Lista**
 ```JavaScript
button.addEventListener('click', () => {
    const newItemValue = input.value.trim();

    if (newItemValue === '') {
        alert('Por favor, insira um item.');
        return;
    }

    const newItem = addItem({ text: newItemValue, checked: false });
    divContainer.appendChild(newItem);
    updateLocalStorage();
    input.value = ''; // Limpa o campo de entrada após a adição
});
```
📖 **Explicação:**

Ao clicar no botão "Adicionar Item", o valor do campo de texto é capturado e adicionado à lista.
Se o campo estiver vazio, uma mensagem de alerta é exibida.
O item é salvo no localStorage após ser adicionado à lista.

4. 📝 **Função para Criar um Novo Item**
 
  ```JavaScript
function addItem(item) {
    const divSelect = document.createElement('div');
    divSelect.classList.add('item');

    const divInputSelect = document.createElement('div');
    divInputSelect.classList.add('input-select');

    const inputSelect = document.createElement('input');
    inputSelect.type = 'checkbox';
    inputSelect.checked = item.checked;

    const label = document.createElement('label');
    label.textContent = item.text;
    label.classList.add('item-text');

    if (item.checked) {
        label.style.textDecoration = "line-through";
    }

    inputSelect.addEventListener('change', () => {
        label.style.textDecoration = inputSelect.checked ? "line-through" : "none";
        updateLocalStorage();
    });

    const imgDelete = btnDelet(divSelect);
    divSelect.appendChild(divInputSelect);
    divInputSelect.appendChild(inputSelect);
    divInputSelect.appendChild(label);
    divSelect.appendChild(imgDelete);

    return divSelect;
}
```
📖 **Explicação:**

A função addItem() cria um novo item na lista, com um checkbox e um rótulo de texto.
Quando o checkbox é marcado, o item é riscado, e o estado é salvo no localStorage.

5. ❌ **Função para Excluir Itens**
```JavaScript
function btnDelet(parentDiv) {
    const imgDelete = document.createElement('img');
    imgDelete.classList.add('img-delete');
    imgDelete.src = './assets/delete01.svg';
    imgDelete.alt = 'Deletar';

    imgDelete.addEventListener('click', () => {
        parentDiv.remove();
        updateLocalStorage();
    });

    return imgDelete;
}
```
📖 **Explicação:**

A função btnDelet() cria um botão que remove um item da lista. Ao clicar no ícone de lixeira, o item é excluído e o localStorage é atualizado.

6. 💾 **Salvando Dados com localStorage**
```JavaScript
function updateLocalStorage() {
    const items = Array.from(divContainer.querySelectorAll('.item')).map(item => {
        const label = item.querySelector('.item-text');
        const checkbox = item.querySelector('input[type="checkbox"]');
        return {
            text: label.textContent,
            checked: checkbox.checked
        };
    });
    saveToLocalStorage(items);
}

function saveToLocalStorage(items) {
    localStorage.setItem('@github-favorites', JSON.stringify(items));
}
```
📖 **Explicação:**

updateLocalStorage() coleta todos os itens da lista e armazena-os no localStorage.
Os itens são salvos no formato JSON e recuperados automaticamente ao carregar a página.

7. 🧩 Carregando Itens do localStorage
 ```JavaScript
 const savedItems = JSON.parse(localStorage.getItem('@github-favorites')) || [];
 savedItems.forEach(item => {
    divContainer.appendChild(addItem(item));
});
```
📖 **Explicação:**

Quando a página é carregada, os itens salvos no localStorage são recuperados e adicionados novamente à lista, garantindo a persistência dos dados.

🚀 **Como Usar**

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/quicklist.git
```

2. Abra o arquivo index.html no seu navegador.

3. Adicione, edite e remova itens da lista: A aplicação funciona diretamente no navegador sem necessidade de instalação ou servidor.

