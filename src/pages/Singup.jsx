import React from "react";
import Decoration from "../components/Decoration";
import SignupRegistration from "../components/signupRegistration";
function Signup() {
  return (
    <div className="signup-page flex bg-black text-Primary">
      <Decoration />
      <SignupRegistration />
    </div>
  );
}
export default Signup;
