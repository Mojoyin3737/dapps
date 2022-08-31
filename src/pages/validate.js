import React from "react";
import bar from "../images/barcode.png";
import spinner from "../images/spinner.gif";
import { Link } from "react-router-dom";

const Validate = () => {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <img src={bar} alt='bar' />
      <img src={spinner} className='bg-white w-40' alt='bar' />
      <h1 className='font-bold text-lg'>SYNCHRONIZING ...</h1>
      <p className='text-center text-sm my-5'>
        This process may take a few minutes <br /> Do not close this page
      </p>
      <Link to='/wallet'>
        <button className='bg-[#1c44a5] p-2 rounded-md px-8 text-white'>
          Retry
        </button>
      </Link>
    </div>
  );
};

export default Validate;
