# QuickList - Aplicação de Lista de Compras

## Descrição:
**QuickList** é uma aplicação de lista de compras simples e prática. Ela permite que você adicione itens à sua lista, marque-os como comprados, remova itens desnecessários e mantenha tudo salvo no navegador. A lista é salva automaticamente, então mesmo que você feche ou recarregue a página, seus itens permanecerão na lista.

## Funcionalidades:
- **Adicionar itens à lista**: Digite o nome do item e clique em "Adicionar Item".
- **Marcar itens como comprados**: Clicando na caixa de seleção ao lado do item, ele será riscado, indicando que foi comprado.
- **Remover itens**: Clique no ícone de lixeira ao lado de qualquer item para removê-lo da lista.
- **Persistência de dados**: Os itens são armazenados localmente no navegador usando `localStorage`. Isso significa que, ao recarregar a página, sua lista será restaurada automaticamente.

## Como funciona:
1. **Adição de itens**: 
   - O usuário insere o nome de um item no campo de texto e clica no botão "Adicionar Item". Se o campo estiver vazio, um alerta será exibido pedindo que insira um item. 
   - O sistema também verifica se o item já existe na lista, para evitar duplicações.
   
2. **Marcar como comprado**:
   - Cada item tem uma caixa de seleção (checkbox) ao lado. Quando o checkbox é marcado, o texto do item é riscado. Isso indica que o item foi comprado.
   
3. **Remover itens**:
   - Ao clicar no ícone de lixeira ao lado de um item, o item é removido da lista. Uma mensagem de confirmação temporária aparece logo após a remoção.

4. **Salvar e carregar dados**:
   - A lista de compras é salva automaticamente no navegador usando a funcionalidade de `localStorage`. Isso permite que o usuário mantenha a lista mesmo que a página seja recarregada ou fechada.

## Estrutura do Código:
A aplicação é dividida em seções bem organizadas:

1. **Cabeçalho**:
   - Contém o logo da aplicação e o nome "QuickList", que são exibidos no topo da página.
   
2. **Corpo principal**:
   - Inclui o campo de entrada para adicionar novos itens e a área onde a lista de compras é exibida.
   
3. **Funções de gerenciamento da lista**:
   - Funções como adicionar itens, remover itens e marcar itens como comprados. Essas funções também garantem que os dados da lista sejam salvos e carregados corretamente do `localStorage`.
   
4. **Mensagens de feedback**:
   - Quando um item é adicionado ou removido, uma mensagem temporária é exibida para o usuário, informando sobre a ação realizada.

## Como usar:
1. **Clone ou baixe o repositório**:
   - Use o comando `git clone` ou faça o download diretamente do GitHub.

2. **Abra o arquivo `index.html`**:
   - Você pode abrir o arquivo no seu navegador web preferido (como Chrome, Firefox, Edge) para utilizar a aplicação.

3. **Adicione e gerencie seus itens**:
   - Utilize os campos de entrada para adicionar novos itens, marque os itens que já comprou e remova aqueles que não são mais necessários.

### Requisitos:
- **Nenhum requisito específico**: 
   - A aplicação é feita em JavaScript e roda diretamente em qualquer navegador moderno. Não é necessária nenhuma instalação ou configuração adicional.

## Estrutura dos arquivos:
- **index.html**: Arquivo principal da aplicação web.
- **assets/**: Pasta com imagens usadas no projeto, como o logo e os ícones de confirmação e exclusão.
- **style.css**: Arquivo de estilo da página (CSS), responsável pela aparência da aplicação.
- **app.js**: Arquivo JavaScript contendo toda a lógica da aplicação.
