import React from "react";
import { Fragment } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Banner from "../fragments/Banner";



const Card = (props) => {
  const { nomor, namaLatin, nama, tempatTurun, jumlahAyat } = props;
  //   const [suratNumbers, setSuratNumbers] = useState(0);

  return (
    <Fragment>
      <Link to={`/DetailSurat/${nomor}`} className="w-[45%] md:mx-3 md:my-3 lg:w-[30%]">
        <div className="w-full h-full bg-[#001524] text-white py-2 px-3 mb-3 md:mx-5 hover:bg-gray-800 transition-all duration-100">
          <h1 className="my-2 arab">
            {nomor}. {namaLatin}
          </h1>
          <div className="flex flex-wrap justify-end">
            <h1 className="my-2 font-bold text-2xl">{nama}</h1>
          </div>
          <div className="flex flex-wrap justify-end">
            <h1 className="my-2">
              {tempatTurun} • {jumlahAyat} ayat
            </h1>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

const MainPages = () => {
  const getData = () => {
    axios.get("https://equran.id/api/v2/surat").then((res) => {
      console.log("res get = ", res.data.data);
      setSurats(res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const [surats, setSurats] = useState([]); // array karena nanti di map

  return (
    <Fragment>
      <Banner />
      <section className="bg-black pl-5 px-5 pt-10 md:flex md:flex-wrap md:justify-center">
        {surats.map((surat) => (
          <Card
            key={surat.nomor}
            nomor={surat.nomor}
            namaLatin={surat.namaLatin}
            nama={surat.nama}
            tempatTurun={surat.tempatTurun}
            jumlahAyat={surat.jumlahAyat}
          />
        ))}
      </section>
    </Fragment>
  );
};

export default MainPages;
