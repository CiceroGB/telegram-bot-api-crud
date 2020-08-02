

# Telegram Chatbot com Ofertas Exclusivas

Telegram Chatbot, onde o usuário ao compartilhar sua localização:


Se dentro de uma loja Carrefour trás uma mensagem daquela Loja e promoções exclusivas para o usuário.

![](https://media.giphy.com/media/J5pz2cuqRiPQe1etRr/giphy.gif)


Se não estiver dentro de uma loja Carrefour trará a localização da loja Carrefour mais perto.

![](https://media.giphy.com/media/S7DiqHQGNI44h7zkwI/giphy.gif)



Desenvolvido Telegram Bot e a API REST com login e autenticação para o funcionário Carrefour gerenciar as mensgens e promoções

Ferramenta para o Tech Challenge da Digital Innovation One e do Grupo Carrefour. 

### Tech

Principais tecnologias utilizadas:

* [node.js] - backend.
* [Express] - fast node.js network app framework.
* [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api) -  api Telegram Bot.
* [Postgres](https://www.postgresql.org) - banco de dados
* [Docker](www.docker.com) - containers

### Instalação

Necessário [Node.js](https://nodejs.org/). Foi utilizado o yarn.
```sh
$ yarn
Para instalar as dependências.
```

```sh
$ docker run --name product -e POSTGRES_PASSWORD='' -p '':'' -d postgres
Para rodar o postgres
```

```sh
Configurar um arquivo .env seguindo o .env.example.
O 'BOT_TOKEN = ' conforme BotFather do Telegram.
O 'API_ID = ' foi obtido nas Api Carrefour CCI - Cadastro de Lojas - Complemento.
```

```sh
$ yarn sequelize db:migrate 
Migrar os bancos para o postgres
```

```sh
$ yarn sequelize db:seed:all  
Gerar os seeders pra bancos para o postgres
```

```sh
$ yarn dev
Para subir o serviço da api com mensgens da loja e promoções.
```

```sh
$ yarn telegram
Para subir o bot.
```

License
----

MIT


