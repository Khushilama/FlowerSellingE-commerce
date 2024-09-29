import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let storedValue = localStorage.getItem("token");
    // storedValue = JSON.parse(storedValue);
    // console.log(storedValue)
    if (!storedValue) {
      navigate("/login");
    }
  }, [navigate]);

  return <Component />;
};

export default Protected;
