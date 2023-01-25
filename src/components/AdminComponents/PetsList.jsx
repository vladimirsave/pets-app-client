import React from "react";
import { useState, useEffect, useContext } from 'react';
import PetForm from '../PetComponents/PetForm';
import PetsListBlock from '../PetComponents/PetsList';
import AppContext from '../context/AppContext';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';


function PetsListAdmin() {
    const {petsViewList, petsList, setPetsList, fetchNotAdoptedPets, fetchNotFostedPets} = useContext(AppContext);  
      // const deletePet = (petId) => {
      //   const newArray = petsList.filter((pet) => pet.id !== petId);
      //   setPetsList(newArray);
      // };
      console.log('Fosted Adopted', petsViewList);

    //   useEffect(() => {
    //     fetchNotAdoptedPets(); 
    //     fetchNotFostedPets();
    // }, []);

  return (
    <Stack direction="horizontal me-auto" gap={5}>
      <div className="bg-light border p-5">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Type</th>
              <th>adoptonStatus</th>
              <th>u_id | user id Adopted</th>
              <th>u_id | user id Fosted</th>
            </tr>
          </thead>
          <tbody>

            {petsViewList.map((pet) => (
              <tr key={pet.id}>
                <td>{pet.id}</td>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>{pet.adoptionStatus}</td>
                <td>{pet.adopted_user_id}</td>
                <td>{pet.foster_user_id}</td>
              </tr>

              //   <Col key={user.id} md={3}>
              //     <Pet pet={pet} deletePet={deletePet} petPage={petPage} />
              //   </Col>
            ))}


          </tbody>
        </Table>
      </div>
    </Stack>
  );
}

export default PetsListAdmin;