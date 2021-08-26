import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profil = ({match}) => {
  const [profil, setProfil] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchprofil = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${match.params.id}`
          
        );
        setProfil(data);
        setIsloading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchprofil();
  }, [match]);
  if (isloading) {
    return <Spinner animation="border" variant="danger" />;
  }

  return <div>

 <Card style={{ width: '18rem' }}>
  <span> {profil.name[0]} </span>
  <Card.Body>
    <Card.Title> {profil.name} </Card.Title>
    <p> {profil.username} </p>
    <p> {profil.email} </p>
    <Link to="/">
    <Button variant="danger">Go Back</Button>
    </Link>
    
  </Card.Body>
</Card>
  </div>;
};

export default Profil;
