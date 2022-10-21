import React from 'react'
import {FaHome, FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { connectWallet } from '../Blockchain.services';
import { truncate, useGlobalState } from '../store';

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");

  return (
    <header className="flex justify-between items-center p-4 px-8 sm:px-10 md:px-14 border-b-2 border-b-slate-200 w-full">
      <Link to={"/"}>
        <p className="text-[#ff385c] flex items-center text-3xl">
          <FaHome />
          DappBnb
        </p>
      </Link>
      <ButtonGroup />
      {connectedAccount ? (
        <button
          className="p-3 bg-[#ff385c] text-white rounded-full text-lg"
        >
          {truncate(connectedAccount, 4,4,11)}
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="p-3 bg-[#ff385c] text-white rounded-full text-lg"
        >
          Connect wallet
        </button>
      )}
    </header>
  );
}

const ButtonGroup = () => {
  return (
    <div className="md:flex hidden items-center justify-center shadow-slate-400 shadow-sm overflow-hidden rounded-full cursor-pointer">
      <div className="inline-flex" role="group">
        <button
          type="button"
          className="
            rounded-l-full
            px-10
            md:py-4 py-2 
            border-2 border-slate-200
            text-[#ff385c]
            font-medium
            text-lg
            leading-tight
            hover:bg-black hover:bg-opacity-5
            focus:outline-none focus:ring-0
            transition
            duration-150
            ease-in-out
          "
        >
         Anywhere
        </button>
        <Link to={"/addRoom"}>
          <button
            type="button"
            className="
              px-10
              md:py-4 py-2 
              border-t-2 border-b-2 slate-200
              text-[#ff385c]
              font-medium
              text-lg
              leading-tight
              hover:bg-black hover:bg-opacity-5
              focus:outline-none focus:ring-0
              transition
              duration-150
              ease-in-out
            "
          >
            Add Rooms
          </button>
        </Link>
        
        <button
          type="button"
          className="
            rounded-r-full
            px-10
            md:py-4 py-2 
            border-2 slate-200
            text-[#ff385c]
            font-medium
            text-lg
            leading-tight
            hover:bg-black hover:bg-opacity-5
            focus:outline-none focus:ring-0
            transition
            duration-150
            ease-in-out
          "
        >
          <p className='flex items-center'>
            Search
            <FaSearch className='mx-1' />
          </p>
        </button>
      </div>
    </div>
  )
}

export default Header