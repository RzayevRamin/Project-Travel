import React, { useState, useEffect } from "react";
import "./Shopping.css";
import { cardsData } from "../../Cards/cardsData";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import { useCurrency } from "../../../../CurrencyContext";
import { currencyIcons } from "../../../../currencyIcon";

function Shopping() {
  const [selectedIds, setSelectedIds] = useState([]);
  const [counts, setCounts] = useState({});

  const { currency, convert } = useCurrency();


  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("selectedIds")) || [];
    setSelectedIds(cart);
  }, []);


  useEffect(() => {
    setCounts((prevCounts) => {

      const newCounts = { ...prevCounts };

      selectedIds.forEach((id) => {
        if (!newCounts[id]) {
          newCounts[id] = {
            adult: 1,
            child: 0,
            price: 1,
          };
        }
      });

      Object.keys(newCounts).forEach((id) => {
        if (!selectedIds.includes(Number(id))) {
          delete newCounts[id];
        }
      });

      return newCounts;
    });
  }, [selectedIds]);

  const selectedCards = cardsData.filter((card) =>
    selectedIds.includes(card.id)
  );

  const handleDelete = (id) => {
  setSelectedIds((prev) => {
    const newSelected = prev.filter((itemId) => itemId !== id);
    localStorage.setItem("selectedIds", JSON.stringify(newSelected));
    return newSelected;
  });
};

  const handleAdd = (id, type = "price") => {
  setCounts((prev) => ({
    ...prev,
    [id]: {
      adult: prev[id]?.adult ?? 1,
      child: prev[id]?.child ?? 0,
      price: prev[id]?.price ?? 1,
      [type]: (prev[id]?.[type] ?? 0) + 1,
    },
  }));
};

const handleRemove = (id, type = "price") => {
  setCounts((prev) => ({
    ...prev,
    [id]: {
      adult: prev[id]?.adult ?? 1,
      child: prev[id]?.child ?? 0,
      price: prev[id]?.price ?? 1,
      [type]: prev[id]?.[type] > 0 ? prev[id][type] - 1 : 0,
    },
  }));
};

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="shoppingContainer">
      <h1>My Cart</h1>
      <div className="CartBox">
        <div className="itemBox">
          {selectedCards.length === 0 && <p>Cart is empty.</p>}

          {selectedCards.map((card) => {
            const priceInfo = card.price;
            const count = counts[card.id] || { adult: 1, child: 0, price: 1 };
            let total = 0;

            if (
              priceInfo &&
              typeof priceInfo === "object" &&
              priceInfo.adult !== undefined &&
              priceInfo.child !== undefined
            ) {
              total =
                count.adult * convert(priceInfo.adult) +
                count.child * convert(priceInfo.child);
            } else if (typeof priceInfo === "number") {
              total = count.price * convert(priceInfo);
            }

            return (
              <div key={card.id} className="cardItem">
                <img src={card.img} alt={card.title || "Card image"} />
                <div className="itemInfo">
                  <h2>{card.cardLabel}</h2>
                  <p>{card.title}</p>
                  <p>{card.time}</p>
                  {priceInfo?.adult !== undefined && priceInfo?.child !== undefined ? (
                    <>
                      <div className="cardsInfoBox adult">
                        <p>Adult:</p>
                        <div className="countingBox">
                          <IconButton onClick={() => handleRemove(card.id, "adult")}>
                            <RemoveIcon />
                          </IconButton>
                          <div className="countBox">{count.adult}</div>
                          <IconButton onClick={() => handleAdd(card.id, "adult")}>
                            <AddIcon />
                          </IconButton>
                        </div>
                      </div>

                      <div className="cardsInfoBox child">
                        <p>Child:</p>
                        <div className="countingBox">
                          <IconButton onClick={() => handleRemove(card.id, "child")}>
                            <RemoveIcon />
                          </IconButton>
                          <div className="countBox">{count.child}</div>
                          <IconButton onClick={() => handleAdd(card.id, "child")}>
                            <AddIcon />
                          </IconButton>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="cardsInfoBox singlePrice">
                      <p>Price:</p>
                      <div className="countingBox">
                        <IconButton onClick={() => handleRemove(card.id, "price")}>
                          <RemoveIcon />
                        </IconButton>
                        <div className="countBox">{count.price}</div>
                        <IconButton onClick={() => handleAdd(card.id, "price")}>
                          <AddIcon />
                        </IconButton>
                      </div>
                    </div>
                  )}
                </div>

                <div className="itemDeleteAndCost">
                  <div
                    className="itemDeleteButton"
                    onMouseEnter={() => setHoveredId(card.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => handleDelete(card.id)}
                  >
                    {hoveredId === card.id ? (
                      <IconButton
                        disableRipple
                        disableFocusRipple
                        sx={{
                          backgroundColor: "#F60909",
                          color: "#FDFBF8",
                          border: "2px solid #F60909",
                          "&:hover": {
                            backgroundColor: "#F60909",
                            transform: "none",
                          },
                        }}
                      >
                        {/* Burada sənin silmək svg və ya icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M18.5 4H1.5M16.833 6.5L16.373 13.4C16.196 16.054 16.108 17.381 15.243 18.19C14.378 18.999 13.047 19 10.387 19H9.613C6.953 19 5.622 19 4.757 18.19C3.892 17.381 3.803 16.054 3.627 13.4L3.167 6.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M4.5 4H4.61C5.01245 3.98972 5.40242 3.85822 5.72892 3.62271C6.05543 3.3872 6.30325 3.05864 6.44 2.68L6.474 2.577L6.571 2.286C6.654 2.037 6.696 1.913 6.751 1.807C6.85921 1.59939 7.01451 1.41999 7.20448 1.28316C7.39444 1.14633 7.6138 1.05586 7.845 1.019C7.962 1 8.093 1 8.355 1H11.645C11.907 1 12.038 1 12.155 1.019C12.3862 1.05586 12.6056 1.14633 12.7955 1.28316C12.9855 1.41999 13.1408 1.59939 13.249 1.807C13.304 1.913 13.346 2.037 13.429 2.286L13.526 2.577C13.6527 2.99827 13.9148 3.36601 14.2717 3.62326C14.6285 3.88051 15.0603 4.01293 15.5 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </IconButton>
                    ) : (
                      <IconButton
                        sx={{
                          backgroundColor: "#FDFBF8",
                          color: "#F60909",
                          border: "2px solid #F60909",
                        }}
                      >
                        {/* Silmək icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M2.75002 6.167C2.75002 5.707 3.09502 5.333 3.52102 5.333H6.18602C6.71502 5.318 7.18202 4.955 7.36202 4.417L7.39202 4.322L7.50702 3.95C7.57702 3.722 7.63802 3.523 7.72402 3.345C8.06202 2.643 8.68802 2.156 9.41102 2.031C9.59502 2 9.78802 2 10.011 2H13.489C13.712 2 13.906 2 14.089 2.031C14.812 2.156 15.439 2.643 15.776 3.345C15.862 3.523 15.923 3.722 15.993 3.95L16.108 4.322L16.138 4.417C16.318 4.955 16.878 5.319 17.408 5.333H19.978C20.405 5.333 20.75 5.706 20.75 6.167C20.75 6.628 20.405 7 19.979 7H3.52002C3.09402 7 2.75002 6.627 2.75002 6.167ZM11.607 22H12.394C15.101 22 16.454 22 17.335 21.137C18.215 20.273 18.305 18.857 18.485 16.026L18.745 11.945C18.843 10.408 18.892 9.64 18.45 9.153C18.008 8.666 17.263 8.666 15.771 8.666H8.23002C6.73902 8.666 5.99302 8.666 5.55102 9.153C5.10902 9.64 5.15902 10.408 5.25602 11.945L5.51602 16.025C5.69602 18.858 5.78602 20.273 6.66602 21.137C7.54602 22.001 8.90002 22 11.607 22Z"
                            fill="currentColor"
                          />
                        </svg>
                      </IconButton>
                    )}
                  </div>

                  <div className="itemCost">
                    <h3
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {currencyIcons[currency.toLowerCase()] || currency.toUpperCase()}
                      <span>
                        {new Intl.NumberFormat("az-Latn-AZ", {
                          style: "decimal",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }).format(total)}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shopping;
