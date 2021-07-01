import React, { useEffect, useState } from "react";
import "./Crypto.css";
import CryptoChartContainer from "./components/Chart/CryptoChartContainer";
import CryptoStats from "./components/Table/CryptoStats";
import CryptoList from "./components/Table/CryptoList";
import axios from "axios";
// import { cryptodata } from "./../../cryptoData";

const Crypto = ({ currentCrypto }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [duration, setDuration] = useState([]);
  const [values, setValues] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [volume, setVolume] = useState("");
  const [dayLow, setDayLow] = useState("");
  const [dayHigh, setDayHigh] = useState("");
  const [marCap, setMarCap] = useState("");

  useEffect(() => {
    let mount = true;
    let source = axios.CancelToken.source();
    setIsLoading(true);
    console.log(currentCrypto.Symbol.toLowerCase());
    axios
      .post(
        "https://finalyticsapi.fintractglobal.com/crypto-graph/",
        `crypto=${currentCrypto.Symbol.toLowerCase()}`,
        {
          auth: {
            username: "testotp@fintract.co.uk",
            password: "IDhyYt96rse45ys0hg456jy0ti",
          },
          cancelToken: source.token,
        }
      )
      .then((res) => {
        if (mount) {
          const data = res.data.Crypto_data;
          setCurrentValue(data.Close[0]);
          setPrevValue(data.Close[1]);
          setVolume(data.Volume[0]);
          setDayLow(data.Low[0]);
          setDayHigh(data.High[0]);
          setMarCap(data["Market Cap"][0]);
          setDuration(data.Date.reverse());
          setValues(data.Close.reverse());
          setIsLoading(false);
          setError(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setIsLoading(false);
        return err;
      });
    return () => {
      mount = false;
      source.cancel("Component unmount");
    };
  }, [currentCrypto]);

  return (
    <React.Fragment>
      <div>
        <CryptoChartContainer
          name={currentCrypto.Name}
          isLoading={isLoading}
          error={error}
          duration={duration}
          values={values}
          currentValue={currentValue}
          prevValue={prevValue}
        />
      </div>
      <div className="cryptoTrends">
        <div>
          <CryptoList />
        </div>
        <div>
          <CryptoStats
            name={currentCrypto.Name}
            currentValue={currentValue}
            prevValue={prevValue}
            volume={volume}
            dayLow={dayLow}
            dayHigh={dayHigh}
            marCap={marCap}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Crypto;
