// VAMOS CRIAR UMA APLICAÇÃO WEB QUE PERMITA A CRIAÇÃO DE LISTAS DE ITENS.
// Este é o código principal que gerencia toda a aplicação de lista de compras

/* 
 * Escuta o evento 'DOMContentLoaded' que é disparado quando o documento HTML é 
 * completamente carregado e analisado, sem esperar pelo CSS, imagens e subframes
 */
document.addEventListener('DOMContentLoaded', () => {
    
    /* 
     * SEÇÃO 1: CRIAÇÃO DOS ELEMENTOS DO CABEÇALHO
     * Aqui criamos e configuramos o logo e título principal da aplicação
     */
    const divLogo = document.createElement('div');          // Cria o container para o logo
    divLogo.classList.add('div-logo');                     // Adiciona classe para estilização
    const imgLogo = document.createElement('img');          // Cria elemento de imagem do logo
    const h1Logo = document.createElement('h1');           // Cria o título principal
    
    // Configura o conteúdo dos elementos do cabeçalho
    h1Logo.textContent = 'QuickList';                      // Define o nome da aplicação
    imgLogo.src = "./assets/logo03.svg";                   // Define a imagem do logo
    imgLogo.alt = "Logo do site";                          // Texto alternativo para acessibilidade
    
    // Monta a estrutura do cabeçalho adicionando os elementos ao DOM
    document.body.appendChild(divLogo);                     // Adiciona a div do logo ao corpo
    divLogo.appendChild(imgLogo);                          // Adiciona a imagem à div
    divLogo.appendChild(h1Logo);                           // Adiciona o título à div
    
    /* 
     * SEÇÃO 2: CONFIGURAÇÃO DO CORPO DA PÁGINA
     * Configura o elemento body e cria os containers principais
     */
    const body = document.querySelector('body');            // Seleciona o elemento body
    body.classList.add('body');                            // Adiciona classe para estilização

    // Cria e configura os containers principais
    const divContainer = document.createElement('div');     // Container principal
    const divSearch = document.createElement('div');        // Container para área de busca
    divContainer.classList.add('container');                // Classe para o container principal
    divSearch.classList.add('search');                     // Classe para área de busca

    /* 
     * SEÇÃO 3: CRIAÇÃO DA ÁREA DE LISTA DE COMPRAS
     * Cria e configura o título da lista e campos de entrada
     */
    // Cria e configura o título da lista
    const h1 = document.createElement('h1');
    h1.textContent = "Compras da semana";
    divContainer.appendChild(h1);
    document.body.appendChild(divContainer);

    // Cria e configura o campo de entrada de texto
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Adicione um novo item';
    divContainer.appendChild(divSearch);
    divSearch.appendChild(input);

    // Cria e configura o botão de adicionar
    const button = document.createElement('button');
    button.classList.add('btn-add');
    button.textContent = 'Adicionar Item';
    divSearch.appendChild(button);

    /* 
     * SEÇÃO 4: FUNÇÕES DE GERENCIAMENTO DE DADOS
     * Funções para salvar e manipular os dados da lista
     */
    // Função para salvar itens no localStorage
    function saveToLocalStorage(items) {
        localStorage.setItem('@github-favorites', JSON.stringify(items));
    }

    // Controle de processamento para evitar duplicação de ações
    let isProcessing = false;

    /* 
     * SEÇÃO 5: GERENCIAMENTO DE EVENTOS
     * Configura o comportamento do botão de adicionar itens
     */
    button.addEventListener('click', () => {
        // Evita processamento duplicado
        if (isProcessing) return;

        isProcessing = true;
        button.disabled = true;

        // Processa o texto inserido
        const newItemValue = input.value.trim();

        // Validação de campo vazio
        if (newItemValue === '') {
            alert('Por favor, insira um item.');
            isProcessing = false;
            button.disabled = false;
            return;
        }

        // Verifica itens duplicados
        const existingItems = divContainer.querySelectorAll('.item-text');
        const isDuplicate = Array.from(existingItems).some(item => 
            item.textContent.toLowerCase() === newItemValue.toLowerCase()
        );

        // Tratamento de item duplicado
        if (isDuplicate) {
            alert('Este item já existe na lista.');
            isProcessing = false;
            button.disabled = false;
            return;
        }

        // Adiciona novo item e atualiza armazenamento
        const newItem = addItem({
            text: newItemValue,
            checked: false // Novo item sempre começa desmarcado
        });
        divContainer.appendChild(newItem);

        // Atualiza localStorage
        updateLocalStorage();

        // Mostra mensagem de confirmação
        const confirmationMessage = msgAddItem();
        divContainer.appendChild(confirmationMessage);

        // Limpa o campo de entrada
        input.value = '';

        // Remove mensagem de confirmação após 2 segundos
        setTimeout(() => {
            divContainer.removeChild(confirmationMessage);
            isProcessing = false;
            button.disabled = false;
        }, 2000);
    });

    /* 
     * SEÇÃO 6: FUNÇÕES DE CRIAÇÃO DE ELEMENTOS
     * Funções que criam os elementos da interface
     */
    // Função para criar novo item na lista
    function addItem(item) {
        const divSelect = document.createElement('div');
        divSelect.classList.add('item');

        const divInputSelect = document.createElement('div');
        divInputSelect.classList.add('input-select');

        const inputSelect = document.createElement('input');
        inputSelect.type = 'checkbox';
        inputSelect.checked = item.checked; // Define o estado inicial do checkbox

        const label = document.createElement('label');
        label.textContent = item.text;
        label.classList.add('item-text');

        // Define o estado inicial do texto baseado no checkbox
        if (item.checked) {
            label.style.textDecoration = "line-through";
        }

        // Adiciona o evento de mudança do checkbox
        inputSelect.addEventListener('change', () => {
            if (inputSelect.checked) {
                label.style.textDecoration = "line-through";
            } else {
                label.style.textDecoration = "none";
            }
            
            // Atualiza o localStorage quando o estado do checkbox muda
            updateLocalStorage();
        });

        const imgDelete = btnDelet(divSelect);

        // Monta a estrutura do item
        divSelect.appendChild(divInputSelect);
        divInputSelect.appendChild(inputSelect);
        divInputSelect.appendChild(label);
        divSelect.appendChild(imgDelete);

        return divSelect;
    }

    // Função para criar botão de deletar
    function btnDelet(parentDiv) {
        const imgDelete = document.createElement('img');
        imgDelete.classList.add('img-delete');
        imgDelete.src = './assets/delete01.svg';
        imgDelete.alt = 'Deletar';

        // Configura evento de clique para deletar
        imgDelete.addEventListener('click', () => {
            parentDiv.remove();
            divContainer.appendChild(msgDelete());

            setTimeout(() => {
                divContainer.removeChild(divContainer.lastChild);
            }, 2000);

            // Atualiza localStorage após remoção
            updateLocalStorage();
        });

        return imgDelete;
    }

    /* 
     * SEÇÃO 7: FUNÇÕES DE MENSAGENS
     * Funções para criar mensagens de feedback ao usuário
     */
    // Função para criar mensagem de item removido
    function msgDelete() {
        const divMsgDelete = document.createElement('div');
        divMsgDelete.classList.add('msg-delete');
        const ImgError = document.createElement('img');
        ImgError.classList.add('img-error');
        ImgError.src = './assets/Icon.svg';
        const msgDelete = document.createElement('p');
        msgDelete.textContent = "O Item foi removido da lista";
        divMsgDelete.appendChild(msgDelete);
        divMsgDelete.appendChild(ImgError);
        return divMsgDelete;
    }

    // Função para criar mensagem de item adicionado
    function msgAddItem() {
        const divMsgAddItem = document.createElement('div');
        divMsgAddItem.classList.add('msg-add-item');
        const ImgCheck = document.createElement('img');
        ImgCheck.classList.add('img-check');
        ImgCheck.src = './assets/check-circle-bold (1).svg';
        const msgAddItem = document.createElement('p');
        msgAddItem.textContent = "O Item foi adicionado à lista";
        divMsgAddItem.appendChild(msgAddItem);
        divMsgAddItem.appendChild(ImgCheck);
        return divMsgAddItem;
    }

    // Função para atualizar localStorage
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

    /* 
     * SEÇÃO 8: INICIALIZAÇÃO E PERSISTÊNCIA DE DADOS
     * Carrega dados salvos e configura atualização automática
     */
    // Carrega itens salvos do localStorage
    const savedItems = JSON.parse(localStorage.getItem('@github-favorites')) || [];
    savedItems.forEach(item => {
        divContainer.appendChild(addItem(item));
    });
});