import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = ({ user }) => {
  const [userScore, setUserScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    getUser(user.name);
  }, [user.name]);

  const getUser = async (user) => {
    try {
      setIsLoading(true);
      const { data } = await axios(`https://api.github.com/users/${user}`);
      const score = data.public_repos + data.public_gists + data.followers;
      setUserScore(score);
      setIsLoading(false);
      setErrMsg("");
    } catch (err) {
      setIsLoading(false);
      setErrMsg("There was an error.");
    }
  };

  return (
    <div>
      <span> {user.name} </span>
      <span> {userScore} </span>
      <Link to={`/update/${user.id}`}>update</Link>
      <Link to={`/delete/${user.id}`}>delete</Link>
    </div>
  );
};

export default User;
