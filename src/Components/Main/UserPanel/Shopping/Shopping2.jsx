import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);

  const [fromCurrency, setFromCurrency] = useState({
    label: "USD",
    value: "USD",
  });

  const [toCurrency, setToCurrency] = useState({
    label: "AZN",
    value: "AZN",
  });

  const [exchangeRates, setExchangeRates] = useState({});
  const [currencyOptions, setCurrencyOptions] = useState([]);

  const apiKey = "dcb46762c7684a1c80beacea6e6d0233"; // Öz API açarını yaz

  useEffect(() => {
    axios
      .get(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`)
      .then((response) => {
        const rates = response.data.rates;

        // Valyuta seçimləri üçün
        const options = Object.keys(rates).map((currency) => ({
          label: currency,
          value: currency,
        }));

        setCurrencyOptions(options);
        setExchangeRates(rates);
      })
      .catch((error) => console.error("Valyuta məlumatı alınarkən xəta:", error));
  }, [apiKey]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (selectedOption) => {
    setFromCurrency(selectedOption);
  };

  const handleToCurrencyChange = (selectedOption) => {
    setToCurrency(selectedOption);
  };

  const convertCurrency = () => {
    const fromRate = parseFloat(exchangeRates[fromCurrency.value]);
    const toRate = parseFloat(exchangeRates[toCurrency.value]);

    if (fromRate && toRate) {
      const result = (amount * toRate) / fromRate;
      return result.toFixed(2);
    }

    return "Hesablanır...";
  };

  return (
    <div className="currency-converter" style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Valyuta Çevirici</h1>

      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20 }}>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          style={{ padding: 8, fontSize: 16, width: 100 }}
        />

        <Select
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
          options={currencyOptions}
          styles={{ container: (base) => ({ ...base, width: 120 }) }}
        />

        <span style={{ fontSize: 18 }}>→</span>

        <Select
          value={toCurrency}
          onChange={handleToCurrencyChange}
          options={currencyOptions}
          styles={{ container: (base) => ({ ...base, width: 120 }) }}
        />
      </div>

      <h2>
        {amount} {fromCurrency.value} = {convertCurrency()} {toCurrency.value}
      </h2>
    </div>
  );
};

export default CurrencyConverter;
