import React from "react";
import { useState, useContext } from 'react';
import PetForm from '../PetComponents/PetForm';
import PetsList from './PetsList';
import UsersList from './UsersList';
import AppContext from '../context/AppContext';
import Stack from 'react-bootstrap/Stack';


function Dashboard() {
 
  const { fetchAdminPets, fetchPets, fetchUsers } = useContext(AppContext);

  
  

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <div className="bg-light border"><PetsList /></div>
        <div className="bg-light border"> <UsersList />        </div>
      </Stack>
    </>
  );
}

export default Dashboard;