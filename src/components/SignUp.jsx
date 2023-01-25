import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';

import AppContext from './context/AppContext';


export default function SignUp({ setShow, show, handleClose, setShowSignIn, showSignIn }) {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ name: '', email: '', password: '', repassword: '' });
  // const [tempName, setTempName] = useState('');
  // const [tempEmail, setTempEmail] = useState('');
  // const [tempPassword, setTempPassword] = useState('');
  // const [tempRePassword, setTempRePassword] = useState('');

  // const handleUserDetails = e => {
  //   setUserDetails({ 
  //     name : tempName,
  //     email :tempEmail,
  //     password :tempPassword,
  //     repassword :tempRePassword
  //         })
  // }
  const handleUserDetails = e => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value })
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      console.log('before axios', userDetails);
      // const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/signup`, userDetails)

      const res = await axios.post('http://localhost:8080/users/signup', userDetails);
      if (res.data.ok) {
        setShow(false);
        console.log(res.data);
        navigate('/home')
        // navigate('/')
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        {/* <h3>Name</h3>
      <Form.Control className='textInput' placeholder='name..'
      onChange={(e) => setTempName(e.target.value)} value={tempName} type='text' name='name' id='name' />
<h3>Email</h3>
       <Form.Control className='textInput' placeholder='email..'
      onChange={(e) => setTempEmail(e.target.value)} value={tempEmail} type='text' name='email' id='email' />
<h3>Password</h3>
      <Form.Control className='textInput' placeholder='password..'
      onChange={(e) => setTempPassword(e.target.value)} value={tempPassword} type='text' name='password' id='password' />
<h3>Repassword</h3>
      <Form.Control className='textInput' placeholder='repassword..'
      onChange={(e) => setTempRePassword(e.target.value)}  value={tempRePassword} type='text' name='repassword' id='repassword' /> */}


        <form>
            <Stack gap={3}>
            <div className="">
              <label htmlFor='name'>Name</label>
              <input onChange={handleUserDetails} type='text' id='name' />
            </div>

            <div className="">
            <label htmlFor='email'>Email</label>
            <input onChange={handleUserDetails} type='text' id='email' />
          </div>

          <div className="">
            <label htmlFor='password'>Password</label>
            <input onChange={handleUserDetails} type='text' id='password' />
          </div>

          <div className="">
            <label htmlFor='repassword'>Re-Password</label>
            <input onChange={handleUserDetails} type='text' id='repassword' />
          </div>
          </Stack>
        </form>

      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary'
          onClick={handleSignUp}      >
          Sign In
        </Button>
      </Modal.Footer>
    </Modal>




  );
}

{/* 
    // <form onSubmit={handleSignUp}>
    //   <h1>Sign Up</h1>
    //   <label htmlFor='name'>Name</label>
    //   <input onChange={handleUserDetails} type='text' id='name' />
    //   <label htmlFor='email'>Email</label>
    //   <input onChange={handleUserDetails} type='text' id='email' />
    //   <label htmlFor='password'>Password</label>
    //   <input onChange={handleUserDetails} type='text' id='password' />
    //   <label htmlFor='repassword'>Re-Password</label>
    //   <input onChange={handleUserDetails} type='text' id='repassword' />
    //   <button className='btn-submit' type='submit'>
    //     Sign Up
    //   </button>
    // </form> */}

