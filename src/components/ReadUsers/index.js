import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import User from "../User";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  margin: 0 auto;
  border: 1px solid blue;
  width: 80%;
  margin-bottom: 10px;
`;

const Users = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h6>Users:</h6>
      {users?.map((u) => {
        return (
          <Div>
            <User key={u.id} user={u} />
          </Div>
        );
      })}
      <Link to={`/create`}>
        <button>Create User</button>
      </Link>
    </div>
  );
};

export default Users;
