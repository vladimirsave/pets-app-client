import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pet from './Pet';
// import PetModal from './EditPetModal';

function PetsListBlock ({ petsViewList, petsList, deletePet, petPage }) {
  return (
    <Container>
      <Row>
        {petsList.map((pet) => (
          <Col key={pet.id} md={3}>
            <Pet pet={pet} deletePet={deletePet} petPage={petPage} />
          </Col>
        ))}
      </Row>
      {/* <PetModal /> */}
    </Container>
  );
}

export default PetsListBlock;
