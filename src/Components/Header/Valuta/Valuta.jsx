import React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import "./Valuta.css";
import { useCurrency } from "../../../CurrencyContext";
import { currencyIcons } from "../../../currencyIcon";

function Valuta() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div>
      <Select
        value={currency}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setCurrency(newValue);
          }
        }}
        startDecorator={currencyIcons[currency]}
        indicator={null}
        className="valutaSelect"
      >
        {Object.entries(currencyIcons).map(([key, icon]) => (
          <Option key={key} value={key}>
            <ListItemDecorator>{icon}</ListItemDecorator>
            {key.toUpperCase()}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default Valuta;
