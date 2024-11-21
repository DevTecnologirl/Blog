Este projeto é composto por duas partes principais:

Frontend: Um aplicativo Nuxt.js com Vue 3 e Pinia para gerenciamento de estado.
Backend: Um servidor NestJS que utiliza o Prisma para interagir com um banco de dados PostgreSQL.
A comunicação entre o frontend e o backend é feita via API HTTP. O backend recebe as requisições do frontend, realiza operações no banco de dados e retorna os dados ao frontend.

Arquitetura
1. Frontend (Nuxt.js)
O frontend é construído usando o Nuxt.js, que é um framework baseado no Vue 3 para desenvolvimento de aplicações universais (cliente e servidor).
O Pinia é utilizado para gerenciamento de estado, ou seja, para gerenciar os dados de usuários e quaisquer outras informações que o aplicativo precise.
O Vue 3 é utilizado para criar a interface de usuário interativa.
As interações do usuário, como adicionar e listar usuários, fazem requisições HTTP para a API do backend.
2. Backend (NestJS)
O backend é construído usando o NestJS, que é um framework para Node.js baseado em TypeScript e inspirado no Angular.
O Prisma é utilizado como ORM para interagir com o banco de dados PostgreSQL. Ele ajuda a abstrair as consultas SQL e facilita a manipulação dos dados no banco.
O PostgreSQL é o banco de dados utilizado para armazenar os dados, como informações de usuários.
O NestJS serve como a camada de controle da API, processando as requisições HTTP e interagindo com o banco de dados.
Fluxo de Dados: Como o Front se Liga ao Back
O fluxo de dados acontece da seguinte maneira:

Frontend (Nuxt.js) envia uma requisição HTTP (GET, POST, etc.) para o backend (NestJS).
O backend (NestJS) recebe a requisição no controlador correspondente, processa a lógica de negócio (como inserir ou buscar dados) e usa o Prisma para interagir com o banco de dados.
O backend (NestJS) retorna a resposta para o frontend (Nuxt.js) com os dados processados.
O frontend (Nuxt.js) recebe a resposta e atualiza a interface de usuário (exibindo a lista de usuários, por exemplo).
Detalhamento do Funcionamento
Frontend (Nuxt.js)
No frontend, você tem duas partes principais para interagir com o backend:

Composables: Funções reutilizáveis para fazer chamadas à API e gerenciar dados de forma centralizada.

Pinia Store: Gerencia o estado do aplicativo, como a lista de usuários.
