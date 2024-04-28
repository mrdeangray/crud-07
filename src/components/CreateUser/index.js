import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const CreateUser = () => {
  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {};
    user.name = inputValue;
    user.id = uuid();
    user.score = 0;
    const newUsers = [...users, user];
    setUsers(newUsers);
    localStorage.setItem("crud-07-users", JSON.stringify(newUsers));
    navigate(`/`);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>CreateUser</h6>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
      </form>
      {users.map((u) => {
        return <span key={u.id}>{u.name}, </span>;
      })}
    </div>
  );
};

export default CreateUser;
