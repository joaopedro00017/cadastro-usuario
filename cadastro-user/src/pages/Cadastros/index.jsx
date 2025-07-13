import "./cadastro-style.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../../assets/chevron-left.svg";
import UserCard from "../../components/UserCard";
import api from "../../services/api";

function Cadastros() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  async function getUsers() {
    try {
      const response = await api.get("/usuarios");
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  async function deleteUsers(id) {
    try {
      await api.delete(`/usuarios/${id}`);
      getUsers();
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="cadastros-container">
      <div className="back">
        <button onClick={() => navigate(-1)}>
          <img src={Back} />
        </button>
      </div>{" "}
      {}
      <h1>Lista de Usuários Cadastrados</h1>
      {users.length > 0 ? (
        users.map((user) => (
          <UserCard key={user.id} user={user} onDelete={deleteUsers} />
        ))
      ) : (
        <p>Nenhum usuário cadastrado.</p>
      )}
    </div>
  );
}

export default Cadastros;
