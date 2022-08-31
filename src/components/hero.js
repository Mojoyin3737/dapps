import React, { useEffect, useState } from "react";
import hero from "../images/hero.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [fixed, setFixed] = useState(false);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }, []);
  return (
    <div className='bg-[#1c44a5] text-white py-28 p-6'>
      <nav
        className={`${
          fixed ? "bg-[#1c44a5] " : "bg-transparent"
        } flex flex-col md:flex-row justify-between md:items-center p-4 md:px-12 fixed w-full top-0 left-0 shadow-md z-10`}
      >
        <i
          className='md:hidden text-2xl rounded-md border-2 border-white p-2 w-fit ml-auto'
          onClick={() => {
            setFixed(true);
            setClicked(!clicked);
          }}
        >
          <GiHamburgerMenu />
        </i>
        {clicked && <hr className='my-4 -mx-12 border-gray-400' />}
        <button
          className={`${
            clicked ? "flex" : "hidden"
          } md:flex md:ml-auto p-3 px-8 border-2 border-white text-sm  md:text-lg w-fit my-5 md:my-0`}
          onClick={() => navigate("/wallet")}
        >
          Connect
        </button>
      </nav>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl md:text-7xl font-bold'>Dapps Sync</h1>
        <p className='my-8 text-sm md:text-xl text-center'>
          Secure wallets and decentralized applications. Join 2 million+ people
          using Dapps Sync
        </p>
        <button
          className={`my-5 p-3 px-8 border-2 border-white text-sm  md:text-lg capitalize mb-8`}
          onClick={() => navigate("/wallet")}
        >
          Connect wallet
        </button>
        <img className='w-80' src={hero} alt='hero' />
      </div>
    </div>
  );
};

export default Hero;
