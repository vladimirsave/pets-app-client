import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from 'axios';
import "./Pet.css";
import { Form, Button, Stack } from "react-bootstrap";
 


export default function PetPage({petsViewList}) {
  const [currentPet, setCurrentPet] = useState([]);

  const fetchCurrentPet = async (e) => {

    try {
      console.log (petsViewList);
      
      const id = window.location.href.split('/').pop();
      console.log(id);
      // console.log(pet.id);
      //   const queryParams = new URLSearchParams(window.location.search);
      //   const id = queryParams.get('id');
      // const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${pet.id}`, { withCredentials: true });

      const res = await axios.get(`http://localhost:8080/pet/${id}`, { withCredentials: true });
      // (`http://localhost:8080/${pet.id}`);
      setCurrentPet(res.data);
      console.log(res.data);
      console.log(petsViewList);
      
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    // if (tweetsFromServer.length) {
    //   console.log(tweetsFromServer);
    //   setDisplayTweets([...tweetsFromServer]);
    // }
    fetchCurrentPet();
  }, []);

  return (
    // <Modal>
    //   <form className="EditPetModal">
    //   <Form.Control placeholder="Pet Name.." className="textInput" name="text" />
    <>
      <div className='pet p-2 my-2' onClick={fetchCurrentPet}>
        <div className='header'>
          <div className='date'></div>
          {/* <div className='delete' onClick={handleDelete}>
            &times; */}
        </div>
        <div className='petBody'>
        <p><img className='petPhoto' src='https://avatars.mds.yandex.net/i?id=2e694b6ef2656c7c82b47de7bc86dbe0_sr-5858123-images-thumbs&n=13' alt='Adoption in the future' /></p>
        <h4>{currentPet.name}</h4>
        <p>{currentPet.type}</p>
        <p>Status: {currentPet.adoptionStatus}</p>
        <p>Picture: {currentPet.picture}</p>
        <p>Height: {currentPet.height}</p>
        <p>Weight: {currentPet.weight}</p>
        <p>Color: {currentPet.color}</p>
        <p>Bio: {currentPet.bio}</p>
        <p>Hypoallergnic: {currentPet.hypoallergnic}</p>
        <p>Dietary: {currentPet.dietary}</p>
        <p>Breed: {currentPet.breed}</p>
      </div>
    <Stack direction="horizontal" className="md-5 mx-auto" gap={3}>
          <Button variant="primary" type="submit" size="sm">Adoption</Button>
          {/* <div className="vr me-auto" /> */}
          <Button variant="secondary" type="submit" size="sm">Try fost</Button>
        </Stack>

      </div>
   
  </>
      // {/* <Form.Control placeholder="type.." className="textInput" as="textInput" rows={3} name="text" />
      //     <Button type="submit">Edit Pet</Button>
      //   </form> 
      // </Modal > */}
    );
}












