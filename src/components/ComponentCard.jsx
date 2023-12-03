import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const ComponentCard = (props) => {
    const { nomor, namaLatin, nama, tempatTurun, jumlahAyat } = props;
    //   const [suratNumbers, setSuratNumbers] = useState(0);
  
    return (
      <Fragment>
        <Link
          to={`/DetailSurat/${nomor}`}
          className="w-[45%] md:mx-3 md:my-3 lg:w-[30%]"
        >
          <div className="w-full h-full bg-[#252B48] rounded-lg text-white py-2 px-3 mb-3 md:mx-5 hover:opacity-50 transition-all duration-100">
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
  

  export default ComponentCard