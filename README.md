Documentação do Projeto – Sistema de Exibição de Cartas
Visão Geral

Este projeto é uma aplicação web desenvolvida em HTML, CSS e JavaScript para exibição de cartas com animação semelhante à de um baralho ou tarot.

O sistema foi modificado para permitir que o usuário selecione manualmente qualquer imagem armazenada no computador, eliminando a necessidade de manter cartas organizadas em pastas pré-definidas.

A aplicação é totalmente executada no navegador, sem necessidade de servidor ou banco de dados.

Objetivo

Permitir que qualquer imagem seja utilizada como carta através do Explorador de Arquivos do Windows, mantendo toda a animação de revelação da carta existente no projeto original.

Tecnologias Utilizadas
HTML5
CSS3
JavaScript (ES6)
File API
DOM API
Audio API
Estrutura do Projeto
Projeto/

│── index.html
│── style.css
│── script.js
│── principal.gif
│── fd2.jpg
│── ms.mp3
Arquivos
index.html

Responsável por toda a estrutura visual da aplicação.

Contém:

Botão Escolher Carta
Botão Sortear
Botão Virar para Costas
Área da carta
Áudio
Campo oculto para seleção de arquivos
style.css

Responsável pela aparência.

Define:

Fundo animado
Carta
Efeito 3D
Botões
Painel de informações
Posicionamento da carta
Responsividade
script.js

Responsável por toda a lógica.

Controla:

Seleção da imagem
Reprodução do áudio
Animação da carta
Arrastar carta
Popup em tela cheia
Atalhos do teclado
Fluxo de Funcionamento
1. Abrir o programa

Ao abrir o arquivo index.html, a aplicação carrega:

Fundo principal
Carta virada para trás
Botões
Áudio
2. Escolher Carta

Ao clicar em:

Escolher Carta

é aberto o Explorador de Arquivos do Windows.

O usuário pode selecionar:

JPG
JPEG
PNG
WEBP
GIF

A imagem permanece armazenada em memória utilizando:

URL.createObjectURL()

Nenhum arquivo é copiado.

Nenhuma imagem é salva.

3. Sortear

Ao clicar em:

Sortear

ocorre a sequência:

Reprodução do áudio
Carta vira para as costas
Aguarda 1,5 segundos
Imagem escolhida é aplicada
Carta vira mostrando a imagem

Todo o efeito é realizado através da classe:

is-flipped
4. Virar para Costas

Botão:

🔄

Remove a classe:

is-flipped

fazendo a carta retornar ao verso.

5. Arrastar Carta

A carta pode ser movida livremente.

Eventos utilizados:

mousedown
mousemove
mouseup

O movimento é limitado ao tamanho da janela do navegador.

6. Popup em Tela Cheia

Atalho:

ALT + B

Abre uma nova janela contendo apenas a carta em tela cheia.

A imagem é exibida utilizando:

object-fit: contain;

mantendo sua proporção.

Recursos

✔ Selecionar qualquer imagem

✔ Revelação animada

✔ Carta em tela cheia

✔ Arrastar carta

✔ Áudio na revelação

✔ Fundo personalizado

✔ Carta com efeito 3D

✔ Funcionamento offline

Recursos Removidos

O projeto original utilizava:

Decks
Pastas
Seleção de jogos
Teclas para cartas específicas
Leitura automática de arquivos

Esses recursos foram removidos.

Agora toda carta é escolhida manualmente.

Dependências

Não utiliza:

JQuery
Bootstrap
React
Vue
Angular
Node.js
PHP

Todo o sistema utiliza apenas JavaScript puro (Vanilla JS).

Navegadores Compatíveis
Google Chrome
Microsoft Edge
Opera
Brave
Firefox
Arquivos Necessários
index.html
style.css
script.js
principal.gif
fd2.jpg
ms.mp3
Funcionamento Offline

O sistema funciona completamente offline.

Basta manter todos os arquivos na mesma pasta.

Possíveis Melhorias Futuras
Histórico de cartas reveladas.
Lista de cartas favoritas.
Suporte a múltiplas cartas simultâneas.
Leitura automática de metadados da imagem.
Atalhos configuráveis.
Animações adicionais.
Exportação da carta revelada.
Modo tela cheia integrado.
Sistema de temas.
Efeitos sonoros configuráveis.
Suporte para vídeos como cartas.
Sistema de coleções de cartas.
Autor

Projeto desenvolvido em HTML, CSS e JavaScript utilizando tecnologias nativas do navegador, com foco em simplicidade, desempenho e funcionamento offline.
