// src/components/UserCard.jsx
import Trash from "../assets/trash3-fill.svg";
import "./UserCard.css"; // caso queira customizações separadas

function UserCard({ user, onDelete }) {
  return (
    <div className="card" key={user.id}>
      <div>
        <p>
          Nome: <span>{user.name}</span>
        </p>
        <p>
          Idade: <span>{user.age}</span>
        </p>
        <p>
          Email: <span>{user.email}</span>
        </p>
      </div>
      <button onClick={() => onDelete(user.id)}>
        <img src={Trash} alt="Excluir" />
      </button>
    </div>
  );
}

export default UserCard;
