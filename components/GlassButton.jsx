import Link from "next/link";
import React from "react";

const GlassButton = ({ linkPage, mobileDisplay, btnText }) => {
  return (
    <>
      <Link
        href={linkPage}
        className={`group relative ${mobileDisplay} items-center justify-center overflow-hidden whitespace-nowrap rounded-md px-8 py-3 text-center font-bold text-gray-200 shadow-2xl md:inline-flex`}
      >
        <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-orange-400 to-rose-400 opacity-0 transition duration-300 ease-out group-hover:opacity-100"></span>
        {/*<!-- Top glass gradient -->*/}
        <span className="absolute top-0 left-0 h-1/3 w-full bg-gradient-to-b from-white to-transparent opacity-5"></span>
        {/* <!-- Bottom gradient --> */}
        <span class="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-white to-transparent opacity-5"></span>
        {/* <!-- Left gradient --> */}
        <span class="absolute bottom-0 left-0 h-full w-4 bg-gradient-to-r from-white to-transparent opacity-5"></span>
        {/* <!-- Right gradient --> */}
        <span className="absolute bottom-0 right-0 h-full w-4 bg-gradient-to-l from-white to-transparent opacity-5"></span>
        <span className="absolute inset-0 h-full w-full rounded-md border border-white opacity-10"></span>
        <span className="absolute h-0 w-0 rounded-full bg-white opacity-5 transition-all duration-300 ease-out group-hover:h-56 group-hover:w-56"></span>
        <span className="relative">{btnText}</span>
      </Link>
    </>
  );
};

export default GlassButton;
