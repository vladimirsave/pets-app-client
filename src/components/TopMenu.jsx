import { Container } from 'react-bootstrap';
import { Form, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import React, { useContext, useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SiFoodpanda } from 'react-icons/si';
import { BsSearch } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AppContext from './context/AppContext';
import jwt_decode from 'jwt-decode';
import SignUp from './SignUp';
import Login from './Login';
import Footer from './Footer';
import LoginPage from './LoginPage';
import EditPetModal from './PetComponents/EditPetModal';
import AdminDashboard from './AdminComponents/AdminDashboard';
import AdminAddPet from './AdminComponents/AdminAddPet';
import PetsListAdmin from './AdminComponents/PetsList';
import PetsListToAdoptAvaliable from './PetComponents/PetsListToAdopt';
import PetsListToFostAvaliable from './PetComponents/PetsListToFost';
import Home from './Home';
import UsersList from './AdminComponents/UsersList';


function NavigationTopMenu() {
  const { fetchAdminPets, wordForSearch, setWordForSearch, setNeedSearch, searchTypeOfPet, setSearchTypeOfPet, setNeedFetchNotFosted, fetchPets, currentUser, setNeedFetchNotAdopted, needFetchNotAdopted } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const token = localStorage.getItem('token') || false;
  const fromTokenName = token ? jwt_decode(token) : false;
  const [showForAdmin, setShowForAdmin] = useState(false);

  if (show) { console.log(show); };
  console.log ('USER', currentUser);
  // setShowForAdmin (fromTokenName.admin);
  console.log (fromTokenName.name);
  console.log (fromTokenName);

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    setNeedSearch(true);
    event.stopPropagation()
  }

  // useEffect(() => {
  //   setShowForAdmin(fromTokenName);
  //   console.log(showForAdmin);
  // }, [fromTokenName]);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/home" onClick={(e) => fetchPets()}>
            <Navbar.Brand>
              <SiFoodpanda className='' size='1.3em' />HOMELESS PANDA

            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/notadopted" onClick={(e) => setNeedFetchNotAdopted(true)}>Adopt</Nav.Link>
              <Nav.Link to="/notfosted" onClick={(e) => setNeedFetchNotFosted(true)}>Try fost</Nav.Link>

             

              <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                <LinkContainer to="/admin/addpet">
                  <NavDropdown.Item >Add a pet</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/pets" onClick={(e) => fetchAdminPets()}>
                  <NavDropdown.Item>Pets</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/admin/users">
                  <NavDropdown.Item >Users</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Divider />
                <LinkContainer to="/admin/dashboard">
                  <NavDropdown.Item>
                    Full dashboard
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>




            <ButtonGroup >
              <Button className="btn btn-warning" onClick={setNeedSearch(true)}><BsSearch size='1.3em' /></Button>
              <Form className='d-flex btn btn-warning'>
                <Form.Control className='me-0 rounded-0' placeholder='Search'
                  onChange={(e) => setWordForSearch(e.target.value)} value={wordForSearch}
                  type="text" name='search' size="sm"
                  aria-label="Search"
                  id="search"
                />
              </Form>
              <DropdownButton as={ButtonGroup} title="All" id="bg-nested-dropdown bg-warning" striped bsStyle="bg-warning">
                <Dropdown.Item onClick={(e) => setSearchTypeOfPet('dog')} >Dog</Dropdown.Item>
                <Dropdown.Item onClick={(e) => setSearchTypeOfPet('cat')}>Cat</Dropdown.Item>
                <NavDropdown.Divider />
                <Dropdown.Item onClick={(e) => setSearchTypeOfPet('false')}>All</Dropdown.Item>
              </DropdownButton>

       
            </ButtonGroup>

            <Nav>
         
              <Nav.Link eventKey={2} href="/home">
                <h6><dl>
                  <small><dd>My pets </dd></small>
                </dl></h6>
              </Nav.Link>
              {!fromTokenName && <Nav.Link href="#" onClick={(e) => setShow(true)}>
                <h6><dl><small><dd>Hello, Login</dd></small></dl></h6>
              </Nav.Link>}
              {fromTokenName && <Nav.Link href="#" onClick={(e) => setShow(true)}>
                <h6><dl> <dd><FaRegUserCircle className='' size='1.3em' />{' '} {fromTokenName.name}</dd> </dl></h6>
              </Nav.Link>}

            </Nav>
          </Navbar.Collapse>

          {show && <Login show={show} handleClose={handleClose} setShow={setShow} />} {' '}
        </Container >
      </Navbar >




      <Routes>
        <Route path="/home" element={<PrivateRoute currentUser={currentUser}><Home /></PrivateRoute>} />
        <Route path="/pet/:id" element={<PrivateRoute currentUser={currentUser}><EditPetModal /></PrivateRoute>} />
        <Route path="/" element={<Home />} />
        <Route path="/admin/addpet" element={<AdminAddPet />}> </Route>
        <Route path="/admin/pets" element={<PetsListAdmin />}> </Route>
        <Route path='/admin/users' element={<UsersList />}></Route>
        <Route path='/admin/dashboard' element={<AdminDashboard />}></Route>
        <Route path="/login" element={<LoginPage show={show} handleClose={handleClose} />} />
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/notadopted' element={<PetsListToAdoptAvaliable />}></Route>
        <Route path='/notfosted' element={<PetsListToFostAvaliable />}></Route>
      </Routes>
      <Footer />

    </>
  );
}

export default NavigationTopMenu;