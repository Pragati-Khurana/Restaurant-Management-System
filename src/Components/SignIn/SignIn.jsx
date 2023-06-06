import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();

  return <span onClick={() => loginWithRedirect()}>Sign In</span>;
};

export default SignIn;
