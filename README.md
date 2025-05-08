Projeto

Este projeto é uma página institucional responsiva desenvolvida com Next.js, utilizando React, TypeScript e styled-components. O foco está em uma navegação clara, design limpo e conteúdo acessível em diferentes tamanhos de tela.

Funcionalidades

Header Responsivo

Mobile: Exibe 3 botões.

Desktop: Exibe 4 botões.

Apenas o botão "Logo" está funcional e redireciona para a página inicial.


Main (Conteúdo Principal)

Contém três cards com título, descrição e botão "Saiba mais", que redirecionam para páginas específicas:

1. Missão

Mostra um pequeno resumo sobre a missão da organização.



2. Profissionais de Saúde

Exibe três cards com nomes fictícios e suas respectivas áreas de atuação.



3. Perguntas Frequentes

Ao clicar em um card, a resposta à pergunta é exibida.




Footer (Rodapé)

Rodapé simples com informações complementares ou institucionais.


Tecnologias Utilizadas

Next.js

React

TypeScript

styled-components

Jest (para testes)


Testes Automatizados

Os testes foram implementados com Jest.

Verificações incluíram a presença dos elementos no header e no main.

Ainda não foi possível testar a navegação via clique nos botões, pois isso requer configuração extra com next/router e mocks apropriados.


Como executar o projeto localmente

1. Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio


2. Instale as dependências:

npm install


3. Inicie o servidor de desenvolvimento:

npm run dev


4. Rode os testes:

npm test



Melhorias Futuras

Adicionar navegação funcional aos demais botões do header.

Escrever testes para navegação entre páginas.

Melhorar a responsividade e a acessibilidade.

Adicionar integração com dados dinâmicos, se necessário.
