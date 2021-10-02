import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {

    render() {

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Brand> Best_Books</Navbar.Brand>

            </Navbar>
        );
    }
}

export default Footer;