import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const StaticModal = () => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>_</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>What you have in mind..</p>
      </Modal.Body>

      <Modal.Footer>
        {/* <Button variant="secondary">Close</Button> */}
        <Button variant="primary">Tweet</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default StaticModal;

