// CurrencyContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("AZN"); // seçilmiş valyuta
  const [rates, setRates] = useState({}); // USD əsaslı məzənnələr
  const apiKey = "dcb46762c7684a1c80beacea6e6d0233";

  useEffect(() => {
    axios
      .get(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`)
      .then((res) => {
        setRates(res.data.rates);
      })
      .catch((err) => {
        console.error("Valyuta kursları alınmadı:", err);
      });
  }, []);

  const convertFromAZN = (aznAmount) => {
    const aznToUsd = 1 / parseFloat(rates["AZN"] || 1);
    const usdToTarget = parseFloat(rates[currency] || 1);
    return (aznAmount * aznToUsd * usdToTarget).toFixed(2);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency, // string
        setCurrency, // function
        convertFromAZN, // function
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
