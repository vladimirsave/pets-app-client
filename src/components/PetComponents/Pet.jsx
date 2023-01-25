import React, { useContext} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaDog, FaCat } from 'react-icons/fa';
import { TbDogBowl, TbHeartHandshake } from 'react-icons/tb';
import { GiDogHouse, GiLoveHowl } from 'react-icons/gi';
import { RiCloseCircleLine } from 'react-icons/ri';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import AppContext from '../context/AppContext';



function Pet({ pet, deletePet }) {
  const navigate = useNavigate();
  const { forButtons } = useContext(AppContext);
  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const res = await axios.delete(`http://localhost:8080/${pet.id}`, { withCredentials: true });
      console.log(pet.id);
      if (res.data.ok) {
        deletePet(pet.id);

      }
    } catch (err) {
      console.log(err);
    }
  };

  const toPetPage = async (e) => {

    e.preventDefault();
    console.log(pet.id);

    navigate('/pet/' + pet.id);

  };

  return (
    <div className='pet p-2 my-2' onClick={toPetPage}>

      <div className='header'>
        <div className='date'></div>
        <div className='delete' onClick={handleDelete}>
          <RiCloseCircleLine className='' size='1.3em' />
        </div>
      </div>
      <div className='petBody'>
        <p><img className='petPhoto' alt='pet' src='https://avatars.mds.yandex.net/i?id=cdfc9f8e81e7b8be95530e5aabd54577_sr-5466267-images-thumbs&n=13' /></p>
        <Stack direction="horizontal" gap={3}>

          <div className={`mx-auto ${pet.type.toLowerCase() === 'cat' ? 'show' : 'hide'}`}>
            <FaCat size='1.3em' />
          </div>
          <div className={`mx-auto ${pet.type.toLowerCase() === 'dog' ? 'show' : 'hide'}`}>
            <FaDog size='1.3em' />
          </div>
          <div className={`mx-auto ${pet.adoptionStatus.toLowerCase() === 'true' ? 'show' : 'hide'}`}>
            <TbHeartHandshake size='1.3em' />
          </div>
          <div className={`mx-auto ${pet.adoptionStatus.toLowerCase() === 'false' ? 'show' : 'hide'}`}>
            <TbDogBowl size='1.3em' />
          </div>
          <div className={`mx-auto ${pet.hypoallergnic ? 'show' : 'hide'}`}>
            <GiDogHouse size='1.3em' />
          </div>
          <div className={`mx-auto ${pet.breed ? 'show' : 'hide'}`}>
            <GiLoveHowl size='1.3em' />
          </div>
        </Stack>
        <h4>{pet.name}</h4>
        <p>{pet.type}</p>
        <p>Status: {pet.adoptionStatus}</p>
        <p>Picture: {pet.picture}</p>
        <p>Height: {pet.height}</p>
        <p>Weight: {pet.weight}</p>
        <p>Color: {pet.color}</p>
        <p>Bio: {pet.bio}</p>
        <p>Hypoallergnic: {pet.hypoallergnic}</p>
        <p>Dietary: {pet.dietary}</p>
        <p>Breed: {pet.breed}</p>

    <div>
        <Stack direction="horizontal" className="md-5 ms-auto" gap={3}>
          <Button variant="primary" type="submit" size="sm">Adoption</Button>
          <div className="vr me-auto" />
          <Button variant="secondary" type="submit" size="sm">Try fost</Button>
        </Stack>
      </div>
      </div>

    </div>
  );
}

export default Pet;
