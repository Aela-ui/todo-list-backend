## Criar o Banco de Dados MYSQL

Você deve rodar esse script para criar o banco de dados e a tabela task
```
CREATE DATABASE tudolist;

USE tudolist;

CREATE TABLE
  `task` (
    `taskId` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `createdAt` timestamp NOT NULL,
    `deadline` date NOT NULL,
    `description` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`taskId`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 53 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci
  ```

## Instalação

```bash
npm install
# ou
yarn install
```

## Mudar credenciais do banco de dados MYSQL no .env

Você deve alterar as credenciais de acordo com o seu ambiente local
```
USER_DATABASE: usuário do banco de dados
PASSWORD_DATABASE: senha do banco de dados
```

## Execução

```bash
npm start
# ou
yarn start
```
