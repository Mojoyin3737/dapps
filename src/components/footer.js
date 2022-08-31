import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='p-4 flex flex-col items-center justify-center py-20 bg-[#1c44a5] text-white'>
      <h1 className='text-2xl md:text-4xl font-bold'>Dapps Sync</h1>
      <div className='my-5 flex flex-col md:flex-row gap-8 items-center justify-center'>
        <p className='text-sm text-center'>
          DAPP Sync is a Proud provider of DAPP Network services
        </p>
        <div className='flex gap-4 items-center justify-center'>
          <a
            href='https://github.com/ethereum/ethereum-org-website'
            className='p-2 border-2 rounded-full hover:bg-white hover:text-black'
          >
            <i>
              <AiFillGithub />
            </i>
          </a>
          <a
            href='https://twitter.com/ethdotorg'
            className='p-2 border-2 rounded-full hover:bg-white hover:text-[#1c44a5]'
          >
            <i>
              <AiOutlineTwitter />
            </i>
          </a>
          <a
            href='https://youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g'
            className='p-2 border-2 rounded-full hover:bg-white hover:text-[#1c44a5]'
          >
            <i>
              <AiFillYoutube />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
