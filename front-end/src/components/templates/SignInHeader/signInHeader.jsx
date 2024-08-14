import React from "react";
import { Link } from "react-router-dom";

const SignInHeader = () => {
  return (
    <div className="w-full flex flex-row items-center fixed bg-white h-16 p-8">
      <div className="text-center px-10">
        <p className="text-2xl text-black font-semibold underline decoration-inherit">
          BEAUTY & BLOOMS
        </p>
      </div>
      {/* <div className="flex flex-row justify-center items-center rounded-md gap-3">
        <InputSearch />
      </div> */}
      <div className="flex flex-row gap-x-8 ml-auto">
        {/* <button
          type="submit"
          className="w-36 h-11 py-3 italic text-white font-normal rounded-lg transition-colors bg-[#8A33FD] hover:bg-[#7a2ce3] flex items-center justify-center"
        >
          Login
        </button> */}
        <Link
          to="/login"
          className="w-36 h-11 py-3 italic text-white font-normal rounded-lg transition-colors bg-[#8A33FD] hover:bg-[#7a2ce3] flex items-center justify-center"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="w-36 h-11 py-3 italic text-[#8A33FD] font-normal rounded-lg transition-colors border border-black flex items-center justify-center"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignInHeader;
