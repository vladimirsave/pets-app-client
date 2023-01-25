import { useState } from 'react';
import './Pet.css';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import GetBioOfPet from './AiAutotext';
import { useNavigate, Link } from 'react-router-dom';

function PetForm({ addPet }) {
  const { bioPetFromAI, setBioPetFromAI } = useContext(AppContext);
  const [petInfo, setPetInfo] = useState({
    type: '',
    name: '',
    adoptionStatus: '',
    picture: '',
    height: '',
    weight: '',
    color: '',
    bio: '',
    hypoallergnic: '',
    dietary: '',
    breed: ''
  });
  const navigate = useNavigate();

  const handlePetInfo = (e) => {
    setPetInfo({ ...petInfo, [e.target.id]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setPetInfo ({...petInfo, bio: })
      console.log('before axios', petInfo);
      console.log(petInfo.name);
      console.log(petInfo.bio);
      // const correctionPetInfo = await GetBioOfPet (petInfo.name, petInfo.bio, petInfo.type ); 

      // const client = axios.create({
      //   headers: {
      //     'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY
      //   }
      // });
      // const params = {
      //   "prompt": "Let's text the biography of " + petInfo.type + "named" + petInfo.name + "who" + petInfo.bio + ".",
      //   "max_tokens": 10
      // }
      // client.post('https://api.openai.com/v1/engines/text-davinci-003/completions', params)
      //   .then(result => {
      //     console.log(result.data);
      //     setBioPetFromAI(result.data);
      //   }).catch(err => {
      //     console.log(err);
      //   });

   

      //  console.log('from AI!!', bioPetFromAI);
      //  console.log('from AI!!', correctionPetInfo);

      const res = await axios.post('http://localhost:8080/', petInfo, { withCredentials: true });
      // const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}`, petInfo,  {withCredentials: true});
      console.log(res.data);
      addPet(res.data);
      navigate('/admin/pets');

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <Form.Control
          placeholder='Type (dog/cat)..'
          onChange={handlePetInfo}
          value={petInfo.type}
          className='textInput'
          name='type'
          id='type'
        />

        <Form.Control
          placeholder='Name..'
          onChange={handlePetInfo}
          value={petInfo.name}
          className='textInput'
          name='name'
          id='name'
        />

        <Form.Control
          placeholder='adoptionStatus..'
          onChange={handlePetInfo}
          value={petInfo.adoptionStatus}
          className='textInput'
          name='adoptionStatus'
          id='adoptionStatus'
        />

        <Form.Control
          placeholder='picture..'
          onChange={handlePetInfo}
          value={petInfo.picture}
          className='textInput'
          name='picture'
          id='picture'
        />
        <Form.Control
          placeholder='height..'
          onChange={handlePetInfo}
          value={petInfo.height}
          className='textInput'
          name='height'
          id='height'
        />

        <Form.Control
          placeholder='weight..'
          onChange={handlePetInfo}
          value={petInfo.weight}
          className='textInput'
          name='weight'
          id='weight'
        />

        <Form.Control
          placeholder='color..'
          onChange={handlePetInfo}
          value={petInfo.color}
          className='textInput'
          name='color'
          id='color'
        />

        <Form.Control
          placeholder='bio..'
          onChange={handlePetInfo}
          value={petInfo.bio}
          className='textInput'
          name='bio'
          id='bio'
        />

        <Form.Control
          placeholder='hypoallergnic (y/n)..'
          onChange={handlePetInfo}
          value={petInfo.hypoallergnic}
          className='textInput'
          name='hypoallergnic'
          id='hypoallergnic'
        />

        <Form.Control
          placeholder='dietary..'
          onChange={handlePetInfo}
          value={petInfo.dietary}
          className='textInput'
          name='dietary'
          id='dietary'
        />

        <Form.Control
          placeholder='breed..'
          onChange={handlePetInfo}
          value={petInfo.breed}
          className='textInput'
          name='breed'
          id='breed'
        />

        <Button type='submit'>Add Pet</Button>
      </form>
    </div>
  );
}

export default PetForm;
