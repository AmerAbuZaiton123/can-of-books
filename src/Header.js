import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import ButtonLogin from './components/ButtonLogin'
import { withAuth0 } from '@auth0/auth0-react';
import LogOutt from './components/LogOutt'





class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Brand>My Favorit Book</Navbar.Brand>

                <Link to="/">Home</Link>
                <Link to="/ProfileOne ">..Profile.. </Link>


                {this.props.auth0.IsAuthenticat ? <LogOutt /> : <ButtonLogin />}

            </Navbar>
        );
    }
}

export default withAuth0(Header);