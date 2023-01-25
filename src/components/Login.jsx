// import React, { useState, useContext } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Button, Modal, Form } from 'react-bootstrap';
// import axios from 'axios';
// import AppContext from './context/AppContext';

// export default function Login() {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const {setCurrentUser, setToken} = useContext(AppContext);
//   const navigate = useNavigate();

//   const handleLogIn = async (e) => {
//     e.preventDefault();
//     try {
//       const userInfo = {
//         email,
//         password,
//       };
//       const res = await axios.post('http://localhost:8080/users/login', userInfo, {withCredentials: true});
//       console.log(res.data)
//       if(res.data.ok) {
//         setCurrentUser(res.data.email)
//         setToken(res.data.token)
//         localStorage.setItem('token', res.data.token)
//         navigate('/home')
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (    
//     <form onSubmit={handleLogIn}>
//       <h1>Log In</h1>
//       <label htmlFor='email'>Email</label>
//       <input onChange={(e) => setEmail(e.target.value)} type='text' id='email' />
//       <label htmlFor='password'>Password</label>
//       <input onChange={(e) => setPassword(e.target.value)} type='text' id='password' />
//       <button className='btn-submit' type='submit'>
//         Log In
//       </button>
//       <Link className='link' to='/signup'>
//         Not a member? Sign up
//       </Link>
//     </form>


//   );
// }

import React, { useState, useEffect, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import AppContext from './context/AppContext';
import SignUp from './SignUp';
import LoginConteiner from './LoginContainer';

function Login({ show, setShow, handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignIn, setShowSignIn] = useState(false);
  const { setCurrentUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  setShow(true);

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
    setShowSignIn(true)};

  return (

    <Modal show={show} onHide={handleClose}>
      { !showSignIn ? < LoginConteiner show={show} handleClose={handleClose} setShow={setShow} setShowSignIn={setShowSignIn} showSignIn={showSignIn}  /> :
      <SignUp show={show} handleClose={handleClose} setShow={setShow} setShowSignIn={setShowSignIn} showSignIn={showSignIn} /> } 
     

      {/* <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <h3>Email</h3>
        <Form.Control className='textInput' placeholder='email..'
          onChange={(e) => setEmail(e.target.value)} value={email} type='text' name='email' id='email'
        // onChange={(e) => setCountryName(e.target.value)} value={name} name='name' id='name' 
        />
        <h3>Password</h3>
        <Form.Control
          placeholder='password..'
          onChange={(e) => setPassword(e.target.value)} type='text' id='password'
          value={password}
          className='textInput'
          name='password'
          id='password'
        />
        <Link className='link' onClick={openSignInForm}>
          Not a member? Sign up
        </Link>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary'
          onClick={handleLogIn}
        >
          Login
        </Button>
      </Modal.Footer> */}
    
      
    </Modal>
  );
}





export default Login;