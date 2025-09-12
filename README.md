# 📋 Projeto DevFlix - Frontend

Bem-vindo ao **DevFlix - Frontend**, a plataforma de EAD para cursos de programação inspirada no Netflix. Este front-end foi desenvolvido com **Next.js**, **React**, **SASS**, **TypeScript** e outras tecnologias para fornecer uma experiência de aprendizado interativa.

## 📝 Descrição

O **DevFlix - Frontend** é responsável por fornecer aos usuários uma plataforma de aprendizado para cursos de programação. O objetivo é oferecer uma experiência semelhante ao Netflix, onde os usuários podem explorar, assistir e gerenciar os cursos de forma fluída.

### Funcionalidades:

- 🆕 Registro de usuário e login.
- 🎬 Navegação por cursos em categorias.
- ❤️ Marcação de cursos como favoritos e gostei.
- 📚 Exibição de cursos com detalhes, incluindo episódios e progresso.
- 🎥 Reprodução de vídeos dos cursos.
- 🧑‍💻 Gestão de dados do usuário, como favoritos e histórico de cursos assistidos.

## ⚙️ Funcionalidades

- **Registro e Login:** Interface de login e cadastro de usuários com validação de dados.
- **Cursos e Categorias:** Navegação e exibição de cursos e categorias, com possibilidade de pesquisa e filtragem.
- **Episódios:** Exibição de detalhes dos cursos e episódios, incluindo funcionalidades de "Continuar Assistindo".
- **Favoritos:** Gerenciamento de cursos favoritos e "Gostei".
- **Modal de Exibição:** Modais interativos para exibir detalhes dos cursos e fazer interações.
- **Design Responsivo:** A interface foi criada com **Bootstrap** para garantir responsividade e boa usabilidade.

## 🛠️ Tecnologias Usadas

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) **Next.js** – Framework para React que possibilita renderização do lado do servidor, criando uma experiência rápida e interativa.
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) **React** – Biblioteca para construção da interface de usuário, utilizando componentes reutilizáveis.
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) **Axios** – Cliente HTTP usado para fazer requisições à API do backend.
- ![React Splide](https://img.shields.io/badge/React_Splide-DAA520?style=for-the-badge&logo=react&logoColor=black) **React-Splide** – Componente de carrossel usado para exibir cursos e categorias de forma interativa.
- ![SWR](https://img.shields.io/badge/SWR-000000?style=for-the-badge&logo=react&logoColor=white) **SWR** – Biblioteca para data fetching no React. Ela facilita o gerenciamento de cache e sincronização de dados entre o frontend e a API.
- ![AOS](https://img.shields.io/badge/AOS-000000?style=for-the-badge&logo=react&logoColor=white) **AOS (Animate On Scroll)** – Biblioteca usada para adicionar animações ao rolar a página, criando uma experiência mais interativa.
- ![Reactstrap](https://img.shields.io/badge/Reactstrap-000000?style=for-the-badge&logo=react&logoColor=white) **Reactstrap** – Biblioteca de componentes Bootstrap para React, que facilita a implementação de elementos visuais responsivos como botões, modais, formulários e muito mais.
- ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) **Sass** – Pré-processador CSS utilizado para facilitar o gerenciamento de estilos.
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white) **Bootstrap** – Framework CSS para layout responsivo e design visual.
- ![React Player](https://img.shields.io/badge/ReactPlayer-000000?style=for-the-badge&logo=react&logoColor=white) **React Player** – Biblioteca usada para renderizar players de vídeo de forma flexível e interativa.
- ![React Modal](https://img.shields.io/badge/ReactModal-000000?style=for-the-badge&logo=react&logoColor=white) **React Modal** – Para exibir modais interativos na interface.
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) **TypeScript** – Superset de JavaScript com tipagem estática que ajuda a evitar erros no código, melhorando a segurança e escalabilidade.

## 🗂️ Estrutura de Pastas e Arquivos

Abaixo está a estrutura de pastas do frontend do projeto **DevFlix**, com uma explicação sobre cada parte:

```bash
devflix-frontend/
├─ node_modules/ # Dependências do projeto
├─ public/ # Arquivos públicos (ex: imagens, favicon)
├─ pages/ # Páginas da aplicação
├─ src/ # Código-fonte do frontend
│ ├─ components/ # Componentes reutilizáveis da interface
│ ├─ services/ # Lógica de comunicação com a API
├─ styles/ # Arquivos de estilo 
├─ .env # Variáveis de ambiente (ex: base URL da API)
├─ .gitignore # Arquivos/pastas a serem ignorados pelo Git
├─ package.json # Metadados do projeto e dependências
├─ package-lock.json # Registro de versões exatas das dependências
├─ README.md # Documentação do projeto
├─ tsconfig.json # Configurações do TypeScript
└─ next.config.js # Configurações do Next.js
````

## 🚀 Como Rodar o Frontend Localmente

### Pré-requisitos

* **Node.js** 16+ (recomendado 18+)
* **npm** ou **yarn** para instalação das dependências
* **Backend** rodando (o backend precisa estar ativo para o frontend funcionar corretamente)

### Passos para execução

1. **Rodar o Backend**

   Antes de rodar o frontend, é necessário que o backend esteja funcionando. Abra um terminal e execute o seguinte comando para rodar o backend na porta **3000**:

   ```bash
   npm run dev
   ```

2. **Clonar o repositório do frontend**

   Abra um segundo terminal e execute:

   ```bash
   git clone https://github.com/RaphaelOkuyama/devflix-frontend.git
   cd devflix-frontend
   ```

3. **Instalar as dependências**

   No terminal do frontend, execute:

   ```bash
   npm install
   # ou: yarn install
   ```

4. **Configurar variáveis de ambiente**

   No arquivo `.env`, configure a URL da API do backend:

   ```bash
   NEXT_PUBLIC_BASEURL=http://localhost:3000
   ```

5. **Rodar o Frontend**

   Agora, no segundo terminal, execute o seguinte comando para rodar o frontend na porta **3001**:

   ```bash
   npm run dev
   ```

   Agora você pode acessar a aplicação em `http://localhost:3001`.

### 📚 Endpoints Utilizados

A comunicação com o backend é realizada por meio da API, incluindo endpoints como:

* `POST /auth/register` – Registra um novo usuário.
* `POST /auth/login` – Faz login e retorna um JWT.
* `GET /courses` – Obtém a lista de cursos.
* `GET /categories` – Obtém a lista de categorias de cursos.
* `GET /courses/:id` – Detalhes de um curso específico.
* `GET /episodes/:id` – Detalhes de um episódio.

## 📦 Scripts Disponíveis

* `npm run dev` – Inicia o servidor de desenvolvimento.
* `npm run build` – Cria a versão otimizada para produção.
* `npm run start` – Inicia o servidor em produção.
* `npm run lint` – Executa o linting no código.

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Abra uma issue ou envie um pull request.

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](./LICENSE) para o texto completo.
