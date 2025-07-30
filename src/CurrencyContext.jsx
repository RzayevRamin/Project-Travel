import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CurrencyContext = createContext();
const apiKey = "dcb46762c7684a1c80beacea6e6d0233";

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("azn");
  const [rates, setRates] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`)
      .then((res) => {
        setRates(res.data.rates);
      });
  }, []);

  const convert = (amount) => {
    if (!rates || !rates[currency.toUpperCase()]) return amount;
    return amount * rates[currency.toUpperCase()];
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);