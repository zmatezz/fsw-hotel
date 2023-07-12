"use client";

import React from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import {AiOutlineMenu} from 'react-icons/ai'

const header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const { status, data } = useSession();

  const handleLoginClick = () => signIn();
  return (
    <div className="container mx-auto p-5 flex justify-between items-center">
      <div className="relative h-[32px] w-[182px]">
      <Image src="/logo.png" alt="Full Stack Week" fill/>
      </div>

      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

{status === "authenticated" && data.user &&(
  <div className="flex items-center gap-3 border-grayPrimary border border-solid rounded-full p-2 relative">
    <AiOutlineMenu size={16} onClick={() => setMenuIsOpen(true)}/>

    <Image width={30} height={30} src={data.user.image!} alt={data.user.name!} className="rounded-full"/>
    {menuIsOpen && (
      <div className="absolute top-0 left-0 w-full h-full bg-white rounded-full shadow-md flex flex-col justify-center items-center">
        <button className="text-primary text-sm font-semibold" onClick={() => setMenuIsOpen(false)}>
          Logout
        </button>
      </div>

    )}
   
  </div>
)}
    </div>
  );
};

export default header;
