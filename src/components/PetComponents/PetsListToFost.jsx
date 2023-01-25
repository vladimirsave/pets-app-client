import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pet from './Pet';
// import PetModal from './EditPetModal';

function PetsListToFostAvaliable ({ petsViewList, petsList, deletePet, petPage }) {
  console.log (petsViewList,);
  return (
    <Container>
      <Row>
        {petsViewList.map((pet) => (
          <Col key={pet.id} md={3}>
            <Pet pet={pet} deletePet={deletePet} petPage={petPage} />
          </Col>
        ))}
      </Row>
      {/* <PetModal /> */}
    </Container>
  );
}

export default PetsListToFostAvaliable;
