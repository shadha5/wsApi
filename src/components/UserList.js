import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  // create update read delete : post pull get delete
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) //convert to json
      .then((data) => {
      setUsers(data);
      setLoading(false);}
      )
      .catch((err) => console.error(err))

  }, []);
  if (loading) {
   return <Spinner animation="border" variant="danger" />
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

export default UserList;
