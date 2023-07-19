import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-walterWhite p-5 justify-center flex flex-col items-center">
        <Image
          src="/logo.png"
          width={133}
          height={23}
          alt="Full Stack Week"
        />
        <p className="text-sm font-semibold mt-1">Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
