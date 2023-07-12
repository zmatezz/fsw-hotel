"use client";

import React from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import {AiOutlineMenu} from 'react-icons/ai'

const header = () => {
  const { status, data } = useSession();

  const handleLoginClick = () => signIn();
  return (
    <div className="container mx-auto p-5 flex justify-between">
      <Image width={183} height={32} src="/logo.png" alt="Full Stack Week" />

      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

{status === "authenticated" && data.user &&(
  <div className="flex items-center">
    <AiOutlineMenu size={16}/>

    <Image width={24} height={24} src={data.user.image!} alt={data.user.name!}/>
  </div>
)}
    </div>
  );
};

export default header;
