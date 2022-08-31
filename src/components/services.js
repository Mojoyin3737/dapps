import React from "react";
import { services } from "../utils/services";
import { FiRefreshCw } from "react-icons/fi";
import {
  AiFillCamera,
  AiFillCheckSquare,
  AiOutlineArrowLeft,
  AiFillPicture,
  AiOutlineOrderedList,
} from "react-icons/ai";
import { BsSnow, BsFillGiftFill, BsFillReplyFill } from "react-icons/bs";
import { FaCodeBranch, FaHourglassEnd, FaBtc } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import { ImTicket } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className='p-4 my-5'>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-2xl md:text-3xl font-bold text-center text-[#1c44a5]'>
          Services
        </h1>
        <div className='flex items-center justify-center gap-2 my-5'>
          <div className='w-2 h-2 rounded-full bg-[#1c44a5]' />
          <div className='w-2 h-2 rounded-full bg-[#1c44a5]' />
          <div className='w-2 h-2 rounded-full bg-[#1c44a5]' />
        </div>
      </div>
      <div className='max-w-6xl rounded-md shadow-md p-4 md:p-8 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {services.map(({ title, info }, i) => {
          return (
            <div
              key={i}
              className='bg-[#1c44a5] text-white p-6 py-20 flex flex-col justify-between items-center cursor-pointer hover:scale-105 transition rounded-md'
              onClick={() => navigate("/wallet")}
            >
              <h1 className='text-center text-2xl font-bold'>{title}</h1>
              <p className='text-center my-4 text-sm'>{info}</p>
              <i className='font-bold text-6xl text-center'>
                {i === 0 ? (
                  <FiRefreshCw />
                ) : i === 1 ? (
                  <AiFillCamera />
                ) : i === 3 ? (
                  <AiFillCheckSquare />
                ) : i === 4 ? (
                  <AiOutlineArrowLeft />
                ) : i === 5 ? (
                  <BsSnow />
                ) : i === 7 ? (
                  <FaCodeBranch />
                ) : i === 8 ? (
                  <FaCodeBranch />
                ) : i === 9 ? (
                  <FaCodeBranch />
                ) : i === 10 ? (
                  <BsFillGiftFill />
                ) : i === 11 ? (
                  <AiFillPicture />
                ) : i === 12 ? (
                  <IoLogoUsd />
                ) : i === 13 ? (
                  <FaHourglassEnd />
                ) : i === 14 ? (
                  <AiOutlineOrderedList />
                ) : i === 15 ? (
                  <BsFillReplyFill />
                ) : i === 16 ? (
                  <FiRefreshCw />
                ) : i === 17 ? (
                  <ImTicket />
                ) : i === 18 ? (
                  <FaBtc />
                ) : (
                  ""
                )}
              </i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
