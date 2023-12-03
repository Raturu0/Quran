import React from "react";
import { Fragment } from "react";
import { useState } from "react";

const FragmentSearch = ({searchTerm, setSearchTerm}) => {
    
  return (
    <Fragment>
      <div className=" md:w-[50%] md:mx-auto lg:w-[40%]">
        <input
          id="search"
          type="text"
          placeholder="Cari berdasarkan Surat"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full  p-2 text-center bg-black border-2 border-solid border-white rounded-lg text-white lg:p-4"
        />
      </div>
    </Fragment>
  );
};

export default FragmentSearch;
