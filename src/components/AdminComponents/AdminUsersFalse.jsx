import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import AppContext from '../context/AppContext';
import axios from 'axios';

function FalseAdmin({ user }) {
  const { fetchOffUserAdmin, usersList, setUsersList, fetchUsers, setUserAdmin, fetchMakeUserAdmin } = useContext(AppContext);
  const navigate = useNavigate();
  console.log(user.id + user.dateCreated);
  console.log(user.isAdmin);
  let stat;
  (user.isAdmin) === false ? stat = '' : stat = 'true';
  const [userToAdmin, setUserToAdmin] = useState(user.id);
  const [isAdminToAdmin, setIsAdminToAdmin] = useState(true);

  const makeAdmin = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(userToAdmin, isAdminToAdmin );

    try {
      console.log('before axios IM LOVE PROGR', user.id, 'http://localhost:8080/users/addadmin/');
      const res = await axios.put(`http://localhost:8080/users/addadmin/${isAdminToAdmin}/${userToAdmin}`, {userToAdmin}, { withCredentials: true });
      if (res.data.ok) {
        console.log(res.data);
        console.log(user.id);
        setUserAdmin(false);
        navigate('/admin/dashboard')
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    stat && (
      <td key={user.id + user.dateCreated}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Admin" />
          </Form.Group>
          <Button variant="primary" size="sm" type="submit" onClick={makeAdmin}>
            Submit
          </Button>
        </Form>
      </td>
    )
  );
}
export default FalseAdmin;


// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Stack from 'react-bootstrap/Stack';

// function FalseAdmin({user, makeAdmin}) {
//    console.log (user.id+user.dateCreated);

//    return (
//     { (user.isAdmin) && {
//     <td key={user.id+user.dateCreated}>
//     <Form>
//     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Admin" />
//   </Form.Group>
//   <Button variant="primary" type="submit" onClick={makeAdmin}>
//     Submit
//   </Button>
//   </Form>
//   </td>}
//     }
//   );
// }

// export default FalseAdmin;