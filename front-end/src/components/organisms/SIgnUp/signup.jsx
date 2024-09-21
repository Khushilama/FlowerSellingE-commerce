import React, { useState } from 'react';
import SignInHeader from '../../templates/SignInHeader/signInHeader';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import SignUpImage from '../../../assets/Image/Signup.png'; // Import the image

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Store user credentials
    const userObject = {
      username: username,
      email: email,
      password: password
    };
    localStorage.setItem("myObject", JSON.stringify(userObject));

    navigate('/login');
  };

  return (
    <>
      <SignInHeader />
      <div className="flex h-screen">
        
        {/* Image Section */}
        <div className="hidden md:flex w-1/2 h-full items-center justify-center">
          <img src={SignUpImage} alt="SignUp" className="w-full h-full object-cover" /> {/* Full coverage */}
        </div>

        {/* Signup Section */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gray-100 p-8">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg mt-16">
            <form onSubmit={handleSubmit} className="w-full">
              <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

              {error && <p className="text-red-600 mb-4">{error}</p>}

              <div className="mb-6">
                <label htmlFor="username" className="block font-semibold mb-2">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6 relative">
                <label htmlFor="password" className="block font-semibold mb-2">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <span
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle between icons */}
                </span>
              </div>
              <div className="mb-6 relative">
                <label htmlFor="confirmPassword" className="block font-semibold mb-2">Confirm Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <span
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle between icons */}
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-6">
                Use 8 or more characters with a mix of letters, numbers & symbols
              </p>
              <button
                type="submit"
                className="w-full py-3 text-white font-semibold rounded-lg transition-colors bg-[#8A33FD] hover:bg-[#7a2ce3]"
              >
                Sign Up
              </button>
              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-[#8A33FD] hover:underline">
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
