import cryptos from "cryptocurrencies";

const cryptodata = [];

for (const [key, value] of Object.entries(cryptos)) {
  cryptodata.push({
    Symbol: key,
    Name: value,
  });
}

export { cryptodata };
