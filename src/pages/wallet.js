import React, { useEffect } from "react";
import logo from "../images/logo.png";
import { wallet } from "../utils/wallet";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const navigate = useNavigate();
  return (
    <div className='py-12'>
      <nav className='p-4 shadow-md flex justify-between fixed w-full left-0 bg-white top-0 z-10'>
        <div
          className='ml-auto flex items-center px-12 gap-3 cursor-pointer'
          onClick={() => navigate("/")}
        >
          <img src={logo} alt='logo' className='w-10' />
          <h1 className='font-bold'>DappsTools</h1>
        </div>
      </nav>

      <div className='my-10 max-w-6xl rounded-md shadow-xl p-4 md:p-8 mx-auto flex flex-col items-center justify-center'>
        <h2 className='font-bold text-xl text-center'>
          Wallets Connect Server Nodes Browser
        </h2>
        <p className='text-sm text-center my-5'>
          Multiple iOS and Android wallets support the protocol. Simply import
          your wallet or dapps to synchronize. Interaction between mobile apps
          and mobile browsers are supported via mobile deep linking.
        </p>

        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 my-5 gap-4 shadow-sm rounded-md'>
          {wallet.map(({ title, image }, i) => {
            return (
              <div
                key={i}
                className='flex flex-col justify-between items-center p-8 rounded-md hover:scale-95 transition hover:shadow-md cursor-pointer'
                onClick={() => navigate("/form")}
              >
                <img className='w-40' src={image} alt={title} />
                <h5 className='text-center my-5'>{title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
