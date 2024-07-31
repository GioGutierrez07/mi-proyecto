import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, CardFooter, CardText } from 'reactstrap';

//se obtienen datos del api 
function UserCard() {
  const [userData, setUserData] = useState(null);

  //funcion para obtener datos de un usuario aleatorio del api 
  const fetchUserData = async () => {
    try {
      const response = await fetch('https://random-data-api.com/api/users/random_user');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUserData(data); //actualiza el esado con los datos obtenidos
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="UserCard">
        {/* Botón  */}
      <Button color="primary" onClick={fetchUserData}>Fetch User Data</Button>
      {/* Si userData no es null, renderiza el Card con los datos del usuario */}
      {userData && (
        <Card>
          <CardHeader>{`${userData.first_name} ${userData.last_name}`}</CardHeader>
          <CardBody>
            <CardText>Email: {userData.email}</CardText>
            <CardText>Username: {userData.username}</CardText>
            <CardText>Phone Number: {userData.phone_number}</CardText>
          </CardBody>
          <CardFooter>Subscription: {userData.subscription.plan}</CardFooter>
        </Card>
      )}
    </div>
  );
}

export default UserCard;
