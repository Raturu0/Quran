import React from "react";
import { Fragment } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Banner = () => {
  return (
    <Fragment>
      <section id="BANNER">
        <div className="w-full h-32 bg-[#072541] flex justify-center items-center">
          <h1 className="text-white text-2xl font-bold">AL QURAN</h1>
        </div>
      </section>
    </Fragment>
  );
};

const Card = (props) => {
  const { nomor, namaLatin, nama, tempatTurun } = props;
  //   const [suratNumbers, setSuratNumbers] = useState(0);

  return (
    <Fragment>
      <Link to={`/DetailSurat/${nomor}`}>
        <div className="w-full h-full bg-black text-white py-2 px-3 my-3 hover:bg-gray-800">
          <div>
            <h1 className="my-2">
              {nomor}. {namaLatin}
            </h1>
          </div>
          <div className="flex flex-wrap justify-end">
            <h1 className="my-2">{nama}</h1>
          </div>
          <div className="flex flex-wrap justify-end">
            <h1 className="my-2">{tempatTurun}</h1>
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
      {surats.map((surat) => (
        <Card
          key={surat.nomor}
          nomor={surat.nomor}
          namaLatin={surat.namaLatin}
          nama={surat.nama}
          tempatTurun={surat.tempatTurun}
        />
      ))}
    </Fragment>
  );
};

export default MainPages;
