import React, { useState } from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Banner from "../fragments/Banner";

const DetailSurat = (props) => {
  const { nomor, ayat, namaLatin, teksLatin, teksIndonesia, bismillah } = props;

  return (
    <Fragment>
      <div>
        <h1>{namaLatin}</h1>
      </div>

      {/* ayat */}
      <div className="border-2 border-solid border-gray-500 rounded-lg hover:bg-[#272829] transition-all duration-300 mt-4 px-3 py-5">
        <h1 className="text-white mb-6">{nomor}</h1>
        <h1 className="text-white my-3">{bismillah}</h1>
        <h1 className="text-white text-end font-bold text-2xl">{ayat}</h1>
        <h1 className="text-white text-start my-2">{teksLatin}</h1>
        <div id="LINE" className="bg-gray-600 h-0.5 w-full mx-auto"></div>
        <h1 className=" text-start text-gray-600">{teksIndonesia}</h1>
      </div>
    </Fragment>
  );
};

const DetailSuratPage = () => {
  const [detailSurats, setDetailSurats] = useState([]);
  const [bismillahs, setBismillahs] = useState([]);
  const { nomor } = useParams();

  //   gunakan ini untuk mengetahui nomor berdasar link router file sebelumnya
  useEffect(() => {
    getData(nomor);
    console.log("nomornya adalah = ", nomor);
    // getBismillahs();
  }, [nomor]);

  const getData = () => {
    axios.get(`https://equran.id/api/v2/surat/${nomor}`).then((res) => {
      console.log("res get surat = ", res.data.data);
      setDetailSurats([res.data.data]);
    });
  };
  // const getBismillahs = () => {
  //   axios.get(`https://equran.id/api/v2/surat/1`).then((res) => {
  //     console.log("res get bismillah = ", res.data.data.ayat[0].teksArab);
  //     setBismillahs([res.data.data.ayat[0]].teksArab);
  //   });
  // };

  return (
    <Fragment>
      <Banner />

      <section className="bg-black px-5 pb-10 lg:px-20 pt-10">
        {detailSurats.map((detailSurat) => (
          // diberi section untuk memisah syntax jsx dengan html
          <section key={detailSurat.nomor}>
            <div className="h-20 lg:h-32 bg-[#001524]  flex justify-center items-center">
              <h1 className="text-white font-bold text-2xl w-full text-center">
                {detailSurat.namaLatin}
              </h1>
            </div>
            {detailSurat.ayat.map((ayat) => (
              <DetailSurat
                key={ayat.nomorAyat}
                nomor={ayat.nomorAyat}
                ayat={ayat.teksArab}
                teksLatin={ayat.teksLatin}
                teksIndonesia={ayat.teksIndonesia}
                // bismillah={bismillahs}
              />
            ))}
          </section>
        ))}
      </section>
    </Fragment>
  );
};

export default DetailSuratPage;
