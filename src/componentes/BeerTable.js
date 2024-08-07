// src/componentes/BeerTable.js

import React, { useState, useEffect } from 'react';
import { Button, Table } from 'reactstrap';

function BeerTable() {
  // Estado para almacenar los datos de las cervezas obtenidos del API
  const [beerData, setBeerData] = useState([]);

  // Función para obtener datos de cervezas del API
  //Utiliza fetch para hacer una solicitud a la URL especificada y obtiene 15 registros.
  const fetchBeerData = async () => {
    try {
      const response = await fetch('https://random-data-api.com/api/beer/random_beer?size=15');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log (data)
      setBeerData(data); // Actualiza el estado con los datos obtenidos
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  // useEffect para obtener datos cuando el componente se monte
  //Llama a fetchBeerData para obtener los datos iniciales de las cervezas
  useEffect(() => {
    fetchBeerData();
  }, []);

  return (
    <div className="BeerTable">
      {/* Botón para obtener nuevos datos de cervezas*/}
      <Button color="primary" onClick={fetchBeerData}>Fetch New Beer Data</Button>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Style</th>
            <th>Hop</th>
            <th>Yeast</th>
            <th>Malts</th>
            <th>IBU</th>
            <th>Alcohol</th>
            <th>Blg</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapea los datos de las cervezas y crea una fila para cada registro */}
          {beerData.map((beer) => (
            <tr key={beer.id}>
              <td>{beer.id}</td>
              <td>{beer.name}</td>
              <td>{beer.brand}</td>
              <td>{beer.style}</td>
              <td>{beer.hop}</td>
              <td>{beer.yeast}</td>
              <td>{beer.malts}</td>
              <td>{beer.ibu}</td>
              <td>{beer.alcohol}</td>
              <td>{beer.blg}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BeerTable;
