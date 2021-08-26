import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";
const UserListAxios = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //    axios.get("https://jsonplaceholder.typicode.com/users")
    //    .then((res)=>res.data)
    //    .then((el)=>{setUsers(el);
    //    setLoading(false);})
    const fetchUsers =async () => {
      try {
        const {data} =await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);
  if (loading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default UserListAxios;
