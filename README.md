# Trybesmith  🚀
Projeto Trybesmith realizado durante a formação acadêmica na Trybe com o objetivo de desenvolver uma API e um banco de dados para o gerenciamento de transações de uma guilda de ferreiro.
Foi desenvolvida um aplicação em `Node.js` e `Ttpescript` usando `mysql2` para fazer um `CRUD` dos pedidos .

<sub>Quando utilizado o sinal `<>` neste documento, significa que é necessária a utilização do token de autorização nas requisições.</sub>

## endpoint `/login`
Ao utilizá-lo com o método <strong>POST</strong>, o usuário fará login no guilda e receberá um token de autorização para fazer requisições nas tabelas, com expiração em 10 minutos.

## endpoint `/users`
1. Ao utilizá-lo com o método <strong>POST</strong>, o usuário pode criar um novo user, com username e senha. Ao fazer essa requisição, automaticamente é feito o login e retornado um token para acesso a outos tipos de requisições.

## endpoint `/products`
1.  Ao utilizá-lo com o método <strong>POST</strong>, pode-se criar um novo pedido de produto para ser adicionado na guilda.

2. Ao utilizá-lo com o método <strong>GET</strong>, pode-se ter acesso a todos os pedidos existentes em andamento no banco de dados.

## endpoint `/orders` <>
1. Ao utilizá-lo com o método <strong>POST</strong>, pode-se criar um novo pedido, passando productsIds (em formato de array).

2. Ao utilizá-lo com o método <strong>GET</strong>, pode-se ter acesso a todas os pedidos e produtos referentes a eles existentes no banco de dados.

<details>
  <summary><strong>Diagrama Entidade Relacionamento do projeto</strong></summary><br />

  <img src="images/diagram-der.png" height="200px" />

</details>

## 🛠️ tecnologias e frameworks utilizados
* [Node.js (Express)](http://expressjs.com/);
* [Typescript](https://www.typescriptlang.org/pt/docs/);
* [JWT](https://jwt.io/introduction/);
* [dotenv](https://www.dotenv.org/docs);
* [mysql](https://dev.mysql.com/doc/);

## ✒️ Autores
Este projeto foi realizado por mim, [Patrick Gomes](https://www.linkedin.com/in/patrickgomesc/), porém foi proposto pela [Trybe](https://www.betrybe.com/), tendo sido fornecido pela instituição os testes implementados.

## 🎁 Honras

* Agradeço primeiramente a Deus;
* É o primeiro projeto que fiz com Typescript, para a tipagem de dados;
* Agradeço à Instituição [Trybe](https://www.betrybe.com/) pelo estímulao diário a melhorar 🫂;
* Dediquei-me como sempre faço a este trabalho e espero que tenham gostado. A evolução é constante!
* Colossenses 3:23;

---
feito por [Patrick Gomes da Conceição](https://github.com/Patrickfromjesus);
