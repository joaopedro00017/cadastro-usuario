
# 💻 Frontend – Cadastro de Usuários (React + Vite)

Esta é a aplicação frontend do projeto de registro de usuários, desenvolvida com **React.js** e **Vite**, utilizando rotas, componentes reutilizáveis e integração com a API backend para operações de cadastro, listagem e exclusão de usuários.

---

## 🚀 Tecnologias Utilizadas

- **React.js**
- **Vite**
- **React Router DOM**
- **Axios**
- **Bootstrap Icons**
- **CSS Modularizado**

---

## 📁 Estrutura de Diretórios

```
cadastro-user/
├── src/
│   ├── assets/                  # Ícones e imagens
│   ├── components/              # Componentes reutilizáveis
│   │   └── UserCard.jsx
│   ├── pages/
│   │   ├── Home/                # Tela de cadastro de usuários
│   │   │   ├── index.jsx
│   │   │   └── home-style.css
│   │   └── Cadastros/           # Tela de listagem de usuários
│   │       ├── index.jsx
│   │       └── cadastro-style.css
│   ├── services/
│   │   └── api.js               # Configuração do Axios
│   ├── main.js                  # Ponto de entrada do React
│   └── index.css                # Estilo base
```

---

## ⚙️ Como Executar

### 1. Acesse a pasta do frontend

```bash
cd cadastro-user
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

---

## 🔗 Integração com o Backend

O frontend consome a API disponível em `http://localhost:3000` por padrão. Essa URL está configurada no arquivo `src/services/api.js`. Certifique-se de que o backend esteja em execução para que as funcionalidades funcionem corretamente.

```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;
```

---

## 📌 Funcionalidades da Interface

- Tela de **cadastro de novos usuários**
- Tela de **listagem e exclusão de usuários**
- Navegação entre páginas com React Router
- Design responsivo com CSS moderno
- Ícones de ações com Bootstrap Icons

---

## 🧑‍💻 Autor

Desenvolvido por **João Pedro** – Programador Fullstack
