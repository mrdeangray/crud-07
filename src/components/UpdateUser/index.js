import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";


const UpdateUser = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { users, setUsers } = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter((u) => u.id === id);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(user[0].name);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newList = users.map((u) => {
      if (u.id === id) {
        u.name = inputValue;
      }
      return u;
    });
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      setUsers(newList);
      localStorage.setItem("crud-07-users", JSON.stringify(newList));
      navigate(`/`);
    }, 2000);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>Update User</h6>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
      </form>
      {users.map((u) => {
        return <span key={u.id}>{u.name}, </span>;
      })}
      {isUpdating && <p>Updating...</p>}
    </div>
  );
};

export default UpdateUser;
