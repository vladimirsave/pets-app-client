import React from "react";
import { useState, useContext } from 'react';
import PetForm from '../PetComponents/PetForm';
import PetsListBlock from '../PetComponents/PetsList';
import AppContext from '../context/AppContext';


function Home() {

      const {petsList, setPetsList} = useContext(AppContext);

    const addPet = (newPet) => {
        const newPetsArray = [...petsList, newPet];
        setPetsList(newPetsArray);
      };
    
      const deletePet = (petId) => {
        const newArray = petsList.filter((pet) => pet.id !== petId);
        setPetsList(newArray);
      };


  return (
    <>
          <div className='mainContainer'>
            <PetForm addPet={addPet} />
            
          </div>

    </>
  );
}

export default Home;