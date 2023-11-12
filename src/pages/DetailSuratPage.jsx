import React, { useState } from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailSurat = (props) => {
  const { nomor, ayat } = props;

  return (
    <Fragment>
      <h1>nomor = {nomor}</h1>
      <h1>Ayat = {ayat}</h1>
    </Fragment>
  );
};

const DetailSuratPage = () => {
  const [detailSurats, setDetailSurats] = useState([]);
  const { nomor } = useParams();

  //   gunakan ini untuk mengetahui nomor berdasar link router file sebelumnya
  useEffect(() => {
    getData(nomor);
  }, [nomor]);

  const getData = () => {
    axios.get(`https://equran.id/api/v2/surat/${nomor}`).then((res) => {
      console.log("res get 3 = ", res.data.data);
      setDetailSurats([res.data.data]);
    });
  };

  return (
    <Fragment>
      {detailSurats.map((detailSurat) =>
        detailSurat.ayat.map((ayat) => <DetailSurat key={ayat.nomor} nomor={ayat.nomorAyat} ayat={ayat.teksArab}/>)
      )}
    </Fragment>
  );
};

export default DetailSuratPage;
