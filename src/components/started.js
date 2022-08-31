import React from "react";
import { useNavigate } from "react-router-dom";

const Started = () => {
  const navigate = useNavigate();
  return (
    <div className='p-4 flex flex-col items-center justify-center py-8 my-8 bg-[#1c44a5] text-white'>
      <p className='text-center text-lg'>Get Started with Dapps Sync today</p>
      <button
        className={`my-5 p-3 px-8 border-2 border-white text-sm  md:text-lg capitalize`}
        onClick={() => navigate("/wallet")}
      >
        Connect wallet
      </button>
    </div>
  );
};

export default Started;
