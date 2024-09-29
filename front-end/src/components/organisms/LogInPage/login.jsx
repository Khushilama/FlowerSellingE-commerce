import React, { useState } from "react";
import SignInHeader from "../../templates/SignInHeader/signInHeader";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../../assets/Image/Login.png"; // Import the login image
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import the eye icons

function Login() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = await fetch("http://127.0.0.1:8000/instagram/login/", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({ password, username }),
    });
    const res = await postData.json();
    console.log(res);

    if (res) {
      localStorage.setItem("token",JSON.stringify(res));
      alert("login seccess");
      navigate("/home");
    }else{
      alert("Not Login");

    }

    // setError('');

    // try {
    //   let storedValue = localStorage.getItem("myObject");
    //   storedValue = JSON.parse(storedValue);

    //   if (!storedValue) {
    //     setError("User not found. Please sign up first.");
    //     return;
    //   }

    //   if (email && password) {
    //     if (email === storedValue.email && password === storedValue.password) {
    //       navigate("/home");
    //     } else {
    //       setError("Incorrect email or password.");
    //     }
    //   } else {
    //     setError("Please enter both email and password.");
    //   }
    // } catch (err) {
    //   setError("An error occurred. Please try again.");
    // }
  };

  return (
    <>
      <SignInHeader />

      <div className="flex h-screen">
        {/* Left Section: Image */}
        <div className="hidden md:flex w-1/2 h-full items-center justify-center">
          <img
            src={LoginImage}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Login Form */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gray-100 p-8">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="w-full">
              <h2 className="text-3xl bold font-normal mb-4 text-center">
                Log In
              </h2>

              {error && <p className="text-red-600 mb-4">{error}</p>}

              <div className="mb-6">
                <label htmlFor="username" className="block font-semibold mb-2">
                  username{" "}
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="mb-6 relative">
                <label htmlFor="password" className="block font-semibold mb-2">
                  password
                </label>
                <input
                  type="test"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
                <span
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!password)}
                >
                  {/* {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />} */}
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white font-semibold rounded-lg transition-colors bg-[#8A33FD] hover:bg-[#7a2ce3]"
              >
                Log In
              </button>
              <p className="text-center text-sm mt-4">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#8A33FD] hover:underline">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
