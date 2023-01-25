import React, { useState,  useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useNavigate, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import axios from 'axios';

import AppContext from './context/AppContext';

function LoginPage({ show, setShow, handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  // setShow(true);

  const handleLogIn = async ( ) => {
    // e.preventDefault();
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
        // setShow(false);
        console.log(show);
        navigate('/home')
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    // <Modal show={show} onHide={handleClose}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Log In</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
<>
<Container className="pt-5" >
<Row className="justify-content-md-center">
<Col xs lg="5">
         
     
<Accordion defaultActiveKey="0"   >
      <Card   >
        <Card.Header>
        <h1>Log In</h1>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            
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

<Stack direction="horizontal" gap={5}>
      <div className="">   <Link className='link' to='/signup'>
         Not a member? Sign up
       </Link></div>
      <div className="bg-light border">  <Button variant='primary'  
        onClick={handleLogIn}
        >
          Login
        </Button>
</div>
  
    </Stack>

{/* 
         <Link className='link' to='/signup'>
         Not a member? Sign up
       </Link> */}

        {/* <Button variant='secondary' onClick={handleClose}>
          Close
        </Button> */}
        {/* <Button variant='primary'  
        onClick={handleLogIn}
        >
          Login
        </Button> */}


          </Card.Body>
        </Accordion.Collapse>
      </Card>
      </Accordion>
      </Col>
      </Row>
      </Container>




 
    

    </>
  );
}

export default LoginPage;