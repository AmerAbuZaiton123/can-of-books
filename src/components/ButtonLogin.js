import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

function ButtonLogin() {

  const {
    IsAuthenticat,

    LoginRedirect,

  } = useAuth0();

  return !IsAuthenticat && (

    <button onClick={LoginRedirect}>Login...</button>

  );
}

export default ButtonLogin;