import React, { useState } from 'react';
import Login from "../../../assets/Image/Login.png";
import Google from "../../../assets/Image/google.png";
import Twitter from "../../../assets/Image/twitter.png";
import SignInHeader from '../../templates/SignInHeader/signInHeader';
import { Link, useLocation } from "react-router-dom";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement sign-up logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <SignInHeader />
      <div className="flex flex-row items-center border-2 border-red-600 justify-center min-h-screen bg-gray-100">
        <div className="flex h-[46rem] w-[50%]   border-2 border-red-600 p-8 rounded-lg " >
          <img
            src={Login}
            alt="Roses in a vase"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* //login?? */}
        <div className="flex  h-full max-w-md p-8 bg-white rounded-lg mb-8 mt-18 w-[50%]   border-2 border-red-600 ">
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-3xl italic font-normal mb-4">Sign In</h2>
            <button
              type="button"
              className="flex items-center justify-center w-full py-3 mb-4 text-gray-700 bg-white border border-gray-300 rounded-lg transition-colors hover:bg-gray-100"
            >
              <img
                src={Google}
                alt="Google logo"
                className="w-6 h-6 mr-2"
              />
              Continue With Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full py-3 mb-4 text-gray-700 bg-white border border-gray-300 rounded-lg transition-colors hover:bg-gray-100"
            >
              <img
                src={Twitter}
                alt="Twitter logo"
                className="w-6 h-6 mr-2"
              />
              Continue With Twitter
            </button>
            <div className="mb-6">
              <label htmlFor="email" className="block font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6 relative">
              <label htmlFor="password" className="block font-semibold mb-2">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-sm text-gray-600"
                onClick={handleShowPassword}
              >
               
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-6">Use 8 or more characters with a mix of letters, numbers & symbols</p>
            <div className="flex items-center mb-6">
              <input type="checkbox" id="terms-of-use" className="mr-2" />
              <label htmlFor="terms-of-use" className="text-sm">Agree to our Terms of use and Privacy Policy</label>
            </div>
            <div className="flex items-center mb-6">
              <input type="checkbox" id="subscribe-newsletter" className="mr-2" />
              <label htmlFor="subscribe-newsletter" className="text-sm">Subscribe to our monthly newsletter</label>
            </div>
            <button
              type="submit"
              className="w-full py-3  text-white font-semibold rounded-lg transition-colors bg-[#8A33FD] hover:bg-[#7a2ce3] "
            >
              Sign In
            </button>
            <p className="text-center text-sm mt-4">
              Don't have an account?
              <Link to="/signup" className="text-[#8A33FD] hover:underline">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
