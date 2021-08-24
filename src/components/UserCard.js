
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title> {user.name} </Card.Title>
    <Card.Text>
         {user.email}
    </Card.Text>
    <Card.Text>
         {user.phone}
    </Card.Text>
    <Link to = {`/profil/${user.id}`}>   <Button variant="primary">see profil</Button>
 </Link>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default UserCard
