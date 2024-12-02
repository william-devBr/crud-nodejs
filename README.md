
# CRUD com JSON em Node.js

Este é um projeto básico de CRUD (Create, Read, Update, Delete) utilizando Node.js, Express e MySQL, com suporte a operações de banco de dados e integração via JSON para facilitar a comunicação.

---

## **Índice**
- [Descrição do Projeto](#descrição-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Endpoints Disponíveis](#endpoints-disponíveis)
  - [POST (INSERT)](#post-insert)
  - [GET (SELECT)](#get-select)
  - [PUT (UPDATE)](#put-update)
  - [DELETE](#delete)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Contribuições](#contribuições)
- [Licença](#licença)

---

## **Descrição do Projeto**
Este projeto implementa um CRUD básico utilizando um banco de dados MySQL e rotas RESTful para realizar operações de criação, leitura, atualização e exclusão de registros na tabela `movimento`. O sistema utiliza JSON para troca de informações, garantindo uma integração simples com clientes front-end.

---

## **Pré-requisitos**
- Node.js (versão 14 ou superior)
- MySQL (versão 5.7 ou superior)
- Gerenciador de pacotes npm ou yarn
- Postman, Insomnia ou outra ferramenta para testar APIs (opcional)

---

## **Instalação**
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados:
   - Crie o banco e a tabela no MySQL:
     ```sql
     CREATE DATABASE crud_db;

     USE crud_db;

     CREATE TABLE movimento (
         id INT AUTO_INCREMENT PRIMARY KEY,
         descricao VARCHAR(100) NOT NULL,
         valor FLOAT NOT NULL,
         created DATETIME NOT NULL
     );
     ```

4. Configure o arquivo `.env` com suas credenciais do MySQL:
   ```plaintext
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=crud_db
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

---

## **Endpoints Disponíveis**

### **POST (INSERT)**
- **Descrição:** Adiciona um novo registro na tabela `movimento`.
- **Endpoint:** `POST /movimentos`
- **Requisição (JSON):**
  ```json
  {
    "descricao": "Compra de materiais",
    "valor": 150.75,
    "created": "2024-12-02 15:00:00"
  }
  ```
- **Resposta:**
  ```json
  {
    "message": "Movimento inserido com sucesso!",
    "id": 1
  }
  ```

---

### **GET (SELECT)**
- **Descrição:** Retorna todos os registros ou um registro específico por ID.
- **Endpoint:**
  - Para todos os registros: `GET /movimentos`
  - Para um registro específico: `GET /movimentos/:id`
- **Resposta:**
  ```json
  [
    {
      "id": 1,
      "descricao": "Compra de materiais",
      "valor": 150.75,
      "created": "2024-12-02 15:00:00"
    }
  ]
  ```

---

### **PUT (UPDATE)**
- **Descrição:** Atualiza um registro existente.
- **Endpoint:** `PUT /movimentos/:id`
- **Requisição (JSON):**
  ```json
  {
    "descricao": "Compra de equipamentos",
    "valor": 300.00,
    "created": "2024-12-03 10:00:00"
  }
  ```
- **Resposta:**
  ```json
  {
    "message": "Movimento atualizado com sucesso!"
  }
  ```

---

### **DELETE**
- **Descrição:** Exclui um registro da tabela.
- **Endpoint:** `DELETE /movimentos/:id`
- **Resposta:**
  ```json
  {
    "message": "Movimento excluído com sucesso!"
  }
  ```

---

## **Como Rodar o Projeto**
1. Inicie o servidor:
   ```bash
   npm start
   ```
2. Utilize ferramentas como Postman ou Insomnia para testar os endpoints, ou implemente um cliente front-end para consumir os serviços.

---

## **Contribuições**
Contribuições são bem-vindas! Siga os passos abaixo para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch para sua funcionalidade:  
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Faça as alterações e envie um pull request.

---

## **Licença**
Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

---
