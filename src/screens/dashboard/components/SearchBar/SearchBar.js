import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Data } from "../../../../data";
import cc from "cryptocurrencies";

import "./SearchBar.css";

function SearchBar(props) {
  // console.log(cryptocurrencies.symbols());
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [value, setValue] = useState();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    console.log(props.stocks);
    if (props.stocks) {
      setStocks(
        Data.filter((stock) =>
          stock.Name.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    } else {
      setCryptocurrencies(
        cc
          .symbols()
          .filter((crypto) =>
            crypto.toLowerCase().startsWith(inputValue.toLowerCase())
          )
      );
    }
  }, [inputValue, props.stocks]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    newValue ? props.update(newValue) : console.log(" ");
  };

  const handleInputChange = (e, newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleClick = () => {
    !showSearchBar ? setShowSearchBar(true) : console.log("Working...");
  };

  return (
    <div className="search-container">
      <div>
        {showSearchBar ? (
          <div style={{ width: 300 }}>
            <Autocomplete
              id="stock-search"
              freeSolo
              selectOnFocus={true}
              clearOnBlur={true}
              size="small"
              options={
                props.stocks
                  ? stocks.map((option) => option)
                  : cryptocurrencies.map((option) => option)
              } // stocks.map((option) => option)
              getOptionLabel={
                props.stocks ? (option) => option.Name : (option) => option
              } //
              onChange={(event, newValue) => handleChange(event, newValue)}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) =>
                handleInputChange(event, newInputValue)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search companies"
                  variant="outlined"
                />
              )}
            />
          </div>
        ) : (
          <div className="search-Icon" onClick={handleClick}>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="14.5"
                cy="14.5"
                r="9.5"
                stroke="#5B5A99"
                stroke-width="2"
              />
              <path
                d="M21 22L25.7929 26.7929"
                stroke="#5B5A99"
                stroke-width="2"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
