import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import axios from 'axios';

function TrueAdmin({ user }) {


  const makeAdmin = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    // const newArrayWithUser = usersList.filter((user) => user.id == userId);
    // console.log (newArrayWithUser);
    // setUserAdmin(       newArrayWithUser      );
    // fetchMakeUserAdmin(user.id); 
  
    try {
      console.log('before axios', user.id, 'http://localhost:8080/users/addadmin/' + user.id);
      const res = await axios.post(`http://localhost:8080/users/addadmin/`, { withCredentials: true });
      if (res.data.ok) {
        console.log(res.data);
        // navigate('/home')
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <td key={user.id + user.dateCreated}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" defaultChecked label="Admin" />
        </Form.Group>
        <Button variant="warning" type="submit" onClick={makeAdmin}>
          Submit
        </Button>
      </Form>
    </td >
  );
}

export default TrueAdmin;