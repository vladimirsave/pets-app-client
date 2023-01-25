import React, { useState, useEffect, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AppContext from './context/AppContext';
import SignUp from './SignUp';

export default function LoginConteiner({ show, setShow, handleClose, setShowSignIn, showSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const { forButtons } = useContext(AppContext);
console.log (forButtons);

  // const makeLogOut = async (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   try {
 
  //     setCurrentUser(null);
  //     setToken(null);
 
  //     localStorage.removeItem('token');
 
  //     navigate('/login');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };



  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const userInfo = {
        email,
        password,
      };
      const res = await axios.post('http://localhost:8080/users/login', userInfo, { withCredentials: true });
      console.log(res.data)
      if (res.data.ok) {
        setCurrentUser(res.data.email);
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        setShow(false);
        console.log(show);
        navigate('/home')
      }
    } catch (err) {
      console.log(err);
    }
  };

  const openSignInForm = (e) => {
    e.preventDefault();
    setShowSignIn(true)
  };


  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
    
        <Modal.Body>
          <h3>Email</h3>
          <Form.Control className='textInput' placeholder='email..'
            onChange={(e) => setEmail(e.target.value)} value={email} type='text' name='email' id='email'

          />
          <h3>Password</h3>
          <Form.Control
            placeholder='password..'
            onChange={(e) => setPassword(e.target.value)} type='text' id='password'
            value={password}
            className='textInput'
            name='password'
          />
          <Link className='link' onClick={openSignInForm}>
            Not a member? Sign up
          </Link>
        </Modal.Body>

              {/* {!forButtons &&
  <Button variant="primary" size="sm" type="submit" onClick={makeLogOut}>
  LogOut
</Button>
} */}

      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
 
        <Button variant='primary'
          onClick={handleLogIn}
        >
          Login
        </Button>
 
      </Modal.Footer>
    </>
  );
}
