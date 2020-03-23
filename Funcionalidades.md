# TODO / Funcionalidades

## Desafio 1/4

[Link para o desafio](https://github.com/Rocketseat/bootcamp-gostack-desafio-02/blob/master/README.md)

### Ferramentas

- ✅ Sucrase
- ✅ Nodemon
- ✅ ESLint
- ✅ Prettier
- ✅ EditorConfig
- ✅ Sequelize

### 1. Autenticação

- ✅ Criação do Banco de dados
- ✅ Migrations -> Users
- ✅ Seeds
- ✅ Auth com JWT
- ✅ Avaliação de dados de entrada

### 2. Gestão de destinatários

- ✅ Migrations -> Recipients
- ✅ Cadastro de Destinatários
	- ✅ Só pode ser feito por administradores autenticados
	- ✅ Destinatário não possui senha (sem autenticação)
- ✅ Alteração de Destinatários


## Desafio 2/4

[Link para o desafio](https://github.com/Rocketseat/bootcamp-gostack-desafio-03/blob/master/README.md)

### Funcionalidades do Administrador

### 1. Gestão de entregadores

- ✅ Migrations -> Deliverers
- 🔲 Funcionalidades para administradores
	- ✅ Cadastro de entregadores
	- 🔲 Listagem de entregadores
	- ✅ Atualização de entregadores
	- 🔲 Remoção de entregadores

### 1. Gestão de encomendas

- 🔲 Migrations -> Orders
- 🔲 Funcionalidades para administradores
	- 🔲 Cadastro de encomendas
	- 🔲 Listagem de encomendas
	- 🔲 Atualização de encomendas
	- 🔲 Remoção de encomendas
	- 🔲 Data de início = retirada do produto pelo entregador, entre as 08:00 e 18:00h
	- 🔲 Data de término = entregador finalizar a entrega
	- 🔲 Cadastro ao entregador -> envio de email com detahes da encomenda

### Funcionalidades do Entregador

### 1. Visualizar encomendas

- 🔲 Entregador envia somente o ID de cadastro
	- 🔲 Retorna todas as encomendas atribuidas, exceção das entregues ou canceladas
	- 🔲 Rota para ver as entregues

### 2. Alterar status das encomendas

- 🔲 Entregador pode definir data de retirada e data de entrega
	- 🔲 Somente **5 retiradas por dia**
	- 🔲 Envio de imagem para finalizar entrega (assinatura)

### 3. Cadastrar problemas nas entregas

- 🔲 Cadastrar problema na entrega
- 🔲 Listar entregas com problema
- 🔲 Informação da entrega com problema
- 🔲 Deletar entrega com problema
	- 🔲 Informar por email o entregador
