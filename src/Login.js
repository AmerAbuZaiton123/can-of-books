import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './Login.css';

import ButtonLogin from './components/ButtonLogin'

import Card from 'react-bootstrap/Card';


class Login extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>

                <Card.Body>

                    <Card.Title>Login</Card.Title>

                    <Card.Text>
                        Login
                    </Card.Text>

                    <ButtonLogin />
                </Card.Body>
            </Card>
        )
    }
}

export default Login;