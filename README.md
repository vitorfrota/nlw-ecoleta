<h1 align="center">
  <img src="https://i.ibb.co/6ZtRf1P/logo.png" width="200px"/>
</h1>

## 💻 Projeto
 <strong>Ecoleta</strong> é uma aplicação desenvolvida durante a <strong>Next Level Week</strong>(ministrada pela Rocketseat). Esta aplicação
 ajuda as pessoas a encontrarem pontos de coleta para reciclagem. 
 Foram desenvolvidos a API, Web e Mobile, sendo a Web responsável pelo cadastro de pontos de coleta e mobile para visualização
 dos pontos de coleta disponíveis.
 
 <div align="center" style="display: flex">
  <img src="https://i.ibb.co/QffDYv6/Capturar.png" width="500px" />
  <img src="https://i.ibb.co/JK4zP3y/mockup.png" width="245px" />
 </div>
 
 
 ## 🛸 Tecnologias
 
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## 🔌 Executando o projeto

- ### **Pré-requisitos**

  - É necessário ter o **[Node.js](https://nodejs.org/en/)** instalado em seu computador;
  - Possuir um gerenciador de pacotes (Ex: **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**);
  - E para executar o mobile, você deve possuir o **[Expo](https://expo.io/)** instalado(global);

```sh
  # Faça o clone do repositório
  $ git clone https://github.com/vitorfrota/nlw-ecoleta.git
  
  # Instale as dependências
  $ npm install ou yarn

  # Crie o banco de dados
  $ cd server
  $ npm run knex:migrate ou yarn knex:migrate
  $ npm run knex:seed ou yarn knex:seed

  # Inicie a API
  $ npm run dev:server ou yarn dev:server

  # Inicie a aplicação web
  $ cd web
  $ npm start ou yarn start

  # Inicie a aplicação mobile
  $ cd mobile
  $ expo start --android ou --ios
```
<h4 align="center">
    🚀 Feito por <a href="https://www.linkedin.com/in/vitorfrota/" target="_blank">Vitor Frota</a> 🚀
</h4>
