import React from "react";
import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <section
        id="FOOTER"
        className="w-full bg-black border-solid border-t-gray-500 p-14 border-t-2"
      >
          <h1 className="text-center text-white font-bold">
            By <span className="text-red-600">Ahmad</span>
          </h1>
          <h1 className=" text-center font-bold text-white">
            Using <span className="text-blue-500">React JS</span>
          </h1>
          <h1 className=" text-center font-bold text-white">
            In Kota <span className="text-blue-500">🥛</span>
          </h1>
          <h1 className=" text-center font-bold text-white">
            For All <span className="text-green-500">Muslim</span>
          </h1>
      </section>
    </Fragment>
  );
};

export default Footer;
