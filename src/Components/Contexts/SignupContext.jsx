import React, { createContext, useState, useContext } from 'react';

const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword1: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <SignupContext.Provider value={{ data, handleOnChange }}>
      {children}
    </SignupContext.Provider>
  );
};

export const useSignup = () => {
  return useContext(SignupContext);
};
