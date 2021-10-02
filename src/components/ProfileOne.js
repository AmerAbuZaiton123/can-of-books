import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function ProfileOne() {
    const { user } = useAuth0();

    return <div>

        <img src={user.picture} alt="img" />

        {user.name}

        <br></br>

        <h1>Hello ... {user.name}</h1>


    </div>;
}

export default ProfileOne;