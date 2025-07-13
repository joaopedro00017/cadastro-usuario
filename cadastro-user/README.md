# 🧾 Projeto de Registro de Usuários – React + Node + MongoDB

Este projeto consiste em uma aplicação **fullstack** desenvolvida com foco em registro e gerenciamento de usuários, integrando tecnologias modernas como **React.js**, **Vite**, **Node.js**, **Express**, **Prisma** e **MongoDB Atlas**.

---

## 🚀 Tecnologias Utilizadas

### 🔷 Frontend

- **React.js**
- **Vite**
- **React Router DOM**
- **Bootstrap Icons**
- **CSS modularizado**
- **Axios** para requisições HTTP

### 🔶 Backend

- **Node.js**
- **Express**
- **Prisma ORM**
- **MongoDB Atlas**
- **CORS**
- **API RESTful com rotas para criação, listagem, atualização e exclusão de usuários**

---

## 📁 Estrutura de Pastas (Simplificada)

---

## 📁 Estrutura de Pastas (Simplificada)

├── api/ # Backend (Node + Express + Prisma)
│ ├── prisma/
│ │ └── schema.prisma
│ ├── .env # NÃO INCLUIR NO GIT
│ └── server.js

├── cadastro-user/ # Frontend (React + Vite)
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ └── UserCard.jsx
│ │ ├── pages/
│ │ │ ├── Home/
│ │ │ │ ├── index.jsx
│ │ │ │ └── home-style.css
│ │ │ └── Cadastros/
│ │ │ ├── index.jsx
│ │ │ └── cadastro-style.css
│ │ ├── services/
│ │ │ └── api.js
│ │ ├── main.js
│ │ └── index.css
yaml
Copiar
Editar

---

---

## ⚙️ Instalação e Execução

### 🔧 Pré-requisitos

- Node.js instalado
- Git instalado
- Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
2. Backend – API (pasta api/)
bash
Copiar
Editar
cd api
npm install
📂 Configure o arquivo .env
⚠️ O arquivo .env não está incluso no repositório por questões de segurança.
Crie manualmente o arquivo backend/.env com sua conexão ao MongoDB:

env
Copiar
Editar
DATABASE_URL="mongodb+srv://usuario:senha@seudominio.mongodb.net/nomedobanco"
Gere o Prisma Client:
bash
Copiar
Editar
npx prisma generate
Inicie o servidor:
bash
Copiar
Editar
node server.js
O backend estará disponível em: http://localhost:3000

3. Frontend – Aplicação React (pasta cadastro-user/)
bash
Copiar
Editar
cd ../cadastro-user
npm install
npm run dev
A aplicação será executada em: http://localhost:5173

📌 Funcionalidades
✅ Cadastro de usuários

✅ Listagem de usuários cadastrados

✅ Exclusão de usuários

✅ Integração entre frontend e backend via API RESTful

✅ Navegação com React Router

✅ Componentização com reaproveitamento de código

✅ Interface moderna e responsiva

---

🧑‍💻 Autor
Desenvolvido por João Pedro – Programador Fullstack

```
