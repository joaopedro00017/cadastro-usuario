import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./home-style.css";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios");

    setUsers(usersFromApi.data);
  }
  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    getUsers();
  }

  // async function deleteUsers(id) {
  //   await api.delete(`/usuarios/${id}`);
  //   getUsers();
  // }

  function handleViewUsers() {
    navigate("/users");
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="home-container">
      <div className="form-wrapper">
        <form autoComplete="off">
          <h1>Cadastro de Usuário</h1>
          <div className="input-box">
            <input name="nome" type="text" placeholder="nome" ref={inputName} />
          </div>
          <div className="input-box">
            <input
              name="idade"
              type="number"
              placeholder="idade"
              ref={inputAge}
            />
          </div>
          <div className="input-box">
            <input
              name="email"
              type="email"
              placeholder="email"
              ref={inputEmail}
            />
          </div>
          <button type="button" className="cadastro" onClick={createUsers}>
            Cadastrar
          </button>
        </form>
      </div>

      {/* {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={deleteUsers} />
      ))} */}
      <div className="button">
        <button type="button" className="ver-mais" onClick={handleViewUsers}>
          Ver Usuários
        </button>
      </div>
    </div>
  );
}

export default Home;
