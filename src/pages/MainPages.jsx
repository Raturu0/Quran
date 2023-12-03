import React from "react";
import { Fragment } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../fragments/Banner";
import FragmentSearch from "../fragments/FragmentSearch";
import ComponentCard from "../components/ComponentCard";
import Footer from "../fragments/FragmentFooter";


const MainPages = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
      <section id="SEARCH" className="bg-black pl-5 px-5 pt-10  md:flex md:flex-wrap md:justify-center">
        <FragmentSearch setSearchTerm={setSearchTerm} />
      </section>
      <section className="bg-black pl-5 px-5 pt-10 pb-40 md:flex md:flex-wrap md:justify-center">
        {surats.map(
          (surat) =>
            surat.namaLatin
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) && (
              <ComponentCard
                key={surat.nomor}
                nomor={surat.nomor}
                namaLatin={surat.namaLatin}
                nama={surat.nama}
                tempatTurun={surat.tempatTurun}
                jumlahAyat={surat.jumlahAyat}
              />
            )
        )}
      </section>
      <Footer />
    </Fragment>
  );
};

export default MainPages;
