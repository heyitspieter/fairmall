import { useRouter } from 'next/router';
import React from 'react';

function PrivateRoute ({children}) {
    const router = useRouter()
    const token = localStorage.getItem("token");

    return token !== null ? (
      <>
        {children}
      </>
    ) : (
        router.push('/signin')
    );
  }

export default PrivateRoute;
