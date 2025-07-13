
# 🧾 Projeto de Registro de Usuários – React + Node + MongoDB

Este é um sistema completo de **cadastro, listagem e exclusão de usuários**, desenvolvido com tecnologias modernas de frontend e backend. A aplicação integra React.js com Vite no frontend, e Node.js com Express, Prisma e MongoDB Atlas no backend.

---

## 🚀 Tecnologias Utilizadas

### 🔷 Frontend (`cadastro-user/`)
- **React.js** + **Vite**
- **React Router DOM**
- **Axios**
- **Bootstrap Icons**
- **CSS Modularizado**
- Organização por páginas e componentes reutilizáveis

### 🔶 Backend (`api/`)
- **Node.js**
- **Express**
- **Prisma ORM**
- **MongoDB Atlas**
- **CORS**
- API RESTful (CRUD completo para usuários)

---

## 📁 Estrutura de Pastas

```
├── api/                        # Backend (Node + Express + Prisma)
│   ├── prisma/
│   │   └── schema.prisma
│   ├── .env                    # NÃO INCLUIR NO GIT
│   └── server.js

├── cadastro-user/             # Frontend (React + Vite)
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── UserCard.jsx
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   │   ├── index.jsx
│   │   │   │   └── home-style.css
│   │   │   └── Cadastros/
│   │   │       ├── index.jsx
│   │   │       └── cadastro-style.css
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── main.js
│   │   └── index.css
```

---

## ⚙️ Instalação e Execução

### 🔧 Pré-requisitos
- Node.js (v16+)
- Git
- Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

### 1. Clone o Repositório

```bash
git clone https://github.com/joaopedro00017/cadastro-usuario.git
```

---

### 2. Backend – API (pasta `api/`)

```bash
cd api
npm install
```

#### 📂 Crie o arquivo `.env` com sua string de conexão MongoDB:

```env
DATABASE_URL="mongodb+srv://usuario:senha@seudominio.mongodb.net/nomedobanco"
```

#### ⚙️ Gere o Prisma Client:

```bash
npx prisma generate
```

#### ▶️ Inicie o servidor backend:

```bash
node server.js
```

A API estará disponível em: `http://localhost:3000`

---

### 3. Frontend – Aplicação React (pasta `cadastro-user/`)

```bash
cd ../cadastro-user
npm install
npm run dev
```

A aplicação será executada em: `http://localhost:5173`

---

## 📌 Funcionalidades

- ✅ Cadastro de usuários
- ✅ Listagem de todos os usuários cadastrados
- ✅ Exclusão de usuários individualmente
- ✅ Integração com backend via API REST
- ✅ Componentes reutilizáveis (ex: `UserCard`)
- ✅ Navegação via React Router
- ✅ Estilização moderna com transparência e responsividade

---

## 🧑‍💻 Autor

Desenvolvido por **João Pedro** – Programador Fullstack
