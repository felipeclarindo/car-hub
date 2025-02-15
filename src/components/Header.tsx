"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import CustomButton from "./CustomButton";
import LoginModal from "./auth/LoginModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true); 
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/images/logo.svg"
            alt="CarHub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div className="hidden sm:flex items-center">
          <CustomButton
            handleClick={handleClick}
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          />
        </div>
      </nav>

      {isModalOpen && <LoginModal />}
    </header>
  );
};

export default Header;
