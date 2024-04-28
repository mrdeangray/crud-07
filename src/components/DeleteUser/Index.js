import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const DeleteUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users, setUsers } = useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const user = users.find((u) => u.id === id);

  const handleDelete = () => {
    const newList = users.filter((u) => u.id !== id);
    setIsDeleting(true);
    setTimeout(() => {
      setUsers(newList);
      setIsDeleting(false);
      navigate(`/`);
    }, 2000);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h5>DeleteUser</h5>
      <button onClick={handleDelete}>Delete {user.name}</button>
      <div>
        {users.map((u) => {
          return <span key={u.id}>{u.name}, </span>;
        })}
      </div>
      {isDeleting && <p>Deleting...</p>}
    </div>
  );
};

export default DeleteUser;
