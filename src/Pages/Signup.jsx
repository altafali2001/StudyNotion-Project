import React from 'react';
import SignupImg from '../assets/Signup.png'; // ✅ Corrected file path
import Tamplate from '../Components/Tamplate'; // ✅ Corrected import path

const SignUp = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Tamplate
        title="Welcome Back"
        desc1="Build Skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={SignupImg}
        formtype="signup" // ✅ Ensure it's lowercase if used in conditions
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default SignUp;