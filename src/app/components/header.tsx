/* eslint-disable react/jsx-no-undef */
import React from "react";
import Image from 'next/image'

const header = () => {
  return (
    <div className="container mx-auto">
      <Image width={183} height={32} src="/logo.png" alt="Full Stack Week"/>
    </div>
  );
};

export default header;
