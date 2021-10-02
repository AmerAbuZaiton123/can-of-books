import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogOutt() {
  const {
    IsAuthenticat,
    LogOutt,
  } = useAuth0();

  return IsAuthenticat && (
    <button onClick={() => {
      LogOutt({ returnTo: window.location.origin });
    }}>Log out</button>
  );
}

export default LogOutt;