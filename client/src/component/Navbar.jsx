import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between h-15 items-center bg-gray-200">
      <div className="w-[10%] flex items-center h-full">
        <h1 className="ml-5 font-bold">Logo</h1>
      </div>
      <div className="w-[50%] h-full">
        <ul className="w-full h-full flex gap-6 list-none items-center">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
