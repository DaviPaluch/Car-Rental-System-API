# API de Aluguel de Carros

# 🚗 Sistema de Aluguel de Carros

Este é um sistema de API para aluguel de carros, implementado em TypeScript, que permite o gerenciamento de veículos, especificações e imagens, bem como o registro de aluguéis. Este sistema foi desenvolvido como parte de um treinamento focado em práticas de TypeScript.

## 🎯 Objetivo

Criar uma API robusta para gerenciar um sistema de aluguel de carros, possibilitando o cadastro de veículos, especificações, imagens, e controle de locações, respeitando regras de negócio específicas e integrando as principais tecnologias e práticas para uma API eficiente.

## 🚀 Funcionalidades

- **Cadastro de Carros**
  - Permite o cadastro de novos veículos, incluindo especificações e imagens.
  - Impede o cadastro de veículos com placas duplicadas.
  - Configura o veículo como disponível no momento do cadastro.
  - O cadastro é restrito a administradores.

- **Listagem de Carros**
  - Lista todos os carros disponíveis, com filtros opcionais por nome, categoria, marca ou modelo.
  - Não exige autenticação do usuário para visualização.

- **Cadastro de Especificações**
  - Permite o cadastro de especificações detalhadas para cada carro.
  - Evita a duplicação de especificações para o mesmo veículo.
  - Disponível apenas para administradores.

- **Cadastro de Imagens**
  - Adiciona uma ou mais imagens para cada carro usando `multer` para o upload.
  - Restrito a usuários com permissão de administrador.

- **Registro de Aluguéis**
  - Registra aluguéis de veículos com duração mínima de 24 horas.
  - Evita conflitos, impedindo que o mesmo usuário registre múltiplos aluguéis simultâneos.

## 🛠️ Tecnologias Utilizadas

- **Back-end**
  - **Express**: Framework para o servidor e rotas.
  - **Prisma**: ORM para integração com banco de dados.
  - **Multer**: Middleware para upload de arquivos.
  - **Swagger UI**: Documentação interativa da API.
  - **bcrypt**: Hashing de senhas para autenticação segura.

- **Testes**
  - **Jest** e **Supertest**: Ferramentas para testes unitários e de integração.

## 📦 Estrutura do Projeto

Este projeto foi desenvolvido seguindo princípios de Clean Code e SOLID, garantindo um código modular, fácil de entender e manter. A arquitetura está organizada em camadas bem definidas, promovendo separação de responsabilidades e facilitando a escalabilidade.

    - Camada de Controladores
        Responsável por receber as requisições HTTP, processá-las e direcionar para a camada de serviço adequada. Cada controlador é focado em uma funcionalidade específica, seguindo o princípio da responsabilidade única.

    - Camada de Serviços
        Contém a lógica de negócios da aplicação. Cada serviço é isolado e focado em uma operação específica, facilitando testes e manutenção. Além disso, a camada de serviços promove a reutilização de código.

    - Camada de Repositórios
        Encapsula a interação com o banco de dados, utilizando o ORM Prisma para realizar operações de CRUD. A separação em repositórios permite que a lógica de persistência seja gerenciada de forma independente das outras camadas.

    - Camada de Middlewares
        Implementa funcionalidades transversais, como autenticação, validação de dados e tratamento de erros, aplicadas de forma modular para evitar duplicação de código e melhorar a segurança.

    - Camada de DTOs (Data Transfer Objects)
        Define as estruturas de dados que são enviadas e recebidas nas requisições, facilitando a validação e garantindo que os dados estejam em conformidade com os requisitos da API.

    - Inversão de Dependência
        Utiliza tsyringe para injeção de dependências, promovendo baixo acoplamento e permitindo que cada componente dependa de interfaces, facilitando testes unitários e melhorias na arquitetura.

## 🔧 Configuração do Ambiente

1. Clone o repositório:

    ```bash
    git clone https://github.com/SeuUsuario/API-Aluguel-Carros
    cd API-Aluguel-Carros
    ```

2. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz do projeto com as configurações necessárias (consulte o `.env.example` para detalhes).

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Execute as migrações do banco de dados:
    - Certifique-se de que o Prisma está configurado corretamente e execute:

    ```bash
    npx prisma migrate dev
    ```

5. Inicie a aplicação:

    ```bash
    npm run dev
    ```

## 🔍 Documentação da API

A documentação da API está disponível através do Swagger, podendo ser acessada em:

    http://localhost:3000/api-docs

## ✅ Testes

Execute os testes com:

    npm test

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:

    ```bash
    git checkout -b minha-feature
    ```

3. Envie suas alterações:

    ```bash
    git commit -m "Minha nova feature"
    git push origin minha-feature
    ```

Desenvolvido com 💙 por Davi Paluch
