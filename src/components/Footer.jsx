// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { HiOutlineHeart } from 'react-icons/hi';

// function Footer() {
//     return (
//         <>
//             <Navbar bg="dark" variant="dark" fixed="bottom" className="footer">
//                 <Container>
//                     <Navbar.Brand to="/home">
//                         2023 {' '}
//                         <HiOutlineHeart className='' size='1.3em' /> {' '}
//                         Israel
//                     </Navbar.Brand>
//                 </Container>
//             </Navbar>
//         </>
//     );
// }

// export default Footer;

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { HiOutlineHeart } from 'react-icons/hi';

function Footer() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="footer">
                <Container>
                    <Navbar.Brand to="/home">
                        2023 {' '}
                        <HiOutlineHeart className='' size='1.3em' /> {' '}
                        Israel
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}
export default Footer;