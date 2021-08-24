import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";
const Profil = (props) => {
  const [profil, setProfil] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users/" +
          props.match.params.id
        );
        setProfil(data);
        setIsloading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, [props.match.params.id]);

  return (
    <div>
      {isloading ? <Spinner animation="border" /> : <UserCard user={profil} />}
    </div>
  );
};

export default Profil;
