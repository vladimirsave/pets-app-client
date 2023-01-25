import React, { useEffect } from "react";
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TrueAdmin from './AdminUsers';
import FalseAdmin from './AdminUsersFalse';

function UsersList() {
  const { usersList, userAdmin, setUserAdmin, fetchUsers } = useContext(AppContext);
  console.log (usersList);

  useEffect(() => {
    fetchUsers();
  }, []);
 
  return (
  
      <Stack direction="horizontal me-auto" gap={5}>
        <div className="bg-light border p-5">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin}</td>
                  <td>{user.dateCreated}</td>
              
                  {user.isAdmin && <FalseAdmin 
                  user={user} 
                  />}              
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Stack>
    );

}


export default UsersList;



// import React from "react";
// import { useState, useEffect, useContext } from 'react';
// import AppContext from '../context/AppContext';
// import Table from 'react-bootstrap/Table';
// import Stack from 'react-bootstrap/Stack';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import TrueAdmin from './AdminUsers';
// import FalseAdmin from './AdminUsersFalse';

// function UsersList() {
//   const { usersList, userAdmin, setUserAdmin, fetchUsers } = useContext(AppContext);
//   console.log (usersList);
 
//   return (
  
//       <Stack direction="horizontal me-auto" gap={5}>
//         <div className="bg-light border p-5">
//           <Table striped bordered hover variant="dark">
//             <thead>
//               <tr>
//                 <th>id</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Admin</th>
//                 <th>Date</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {usersList.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.isAdmin}</td>
//                   <td>{user.dateCreated}</td>
              
//                   {user.isAdmin && <FalseAdmin 
//                   user={user} 
//                   />}              
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </Stack>
//     );

// }


// export default UsersList;