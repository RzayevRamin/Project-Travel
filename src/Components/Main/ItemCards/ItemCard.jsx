import React, { useState } from "react";
import "./ItemCard.css";
import { cardsData } from "../Cards/cardsData";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Link, IconButton } from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCurrency } from "../../../CurrencyContext";
import { currencyIcons } from "../../../currencyIcon";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";

function ItemCard() {
  const { label } = useParams();

  const card = cardsData.find(
    (item) => item.cardLabel.replace(/\s+/g, "-").toLowerCase() === label
  );

  const [counts, setCounts] = useState({
    [card.id]: {
      adult: 1,
      child: 0,
      price: 1,
    },
  });

  const { currency, convert } = useCurrency();
  const count = counts[card.id];

  const addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("selectedIds")) || [];

    if (!cart.includes(id)) {
      cart.push(id);
      localStorage.setItem("selectedIds", JSON.stringify(cart));
    }
  };

  if (!card) {
    return <Typography level="h4">Tour not found.</Typography>;
  }

  const handleAdd = (id, type = "price") => {
    setCounts((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: prev[id][type] + 1,
      },
    }));
  };

  const handleRemove = (id, type = "price") => {
    setCounts((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: prev[id][type] > 0 ? prev[id][type] - 1 : 0,
      },
    }));
  };

  const renderCountSection = () => {
    if (card.id < 102) {
      return (
        <div className="personaCardsDatas">
          <h2>Number of people</h2>
          <div className="itemCardsInfoBox adult">
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

          <div className="itemCardsInfoBox child">
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
        </div>
      );
    } else if (card.id >= 102 && card.id <= 109) {
      return (
        <div className="itemCardsInfoBox child">
          <p>Number of departures</p>
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
      );
    } else {
      return (
        <div className="itemCardsInfoBox days">
          <p>Number of days</p>
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
      );
    }
  };

  const priceInfo = card.price;
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
    <div className="itemCardContainer">
      <Card variant="outlined" className="itemCardBox">
        <CardOverflow className="itemCardImgBox">
          <AspectRatio ratio="16/9">
            <img src={card.img} alt={card.cardLabel} />
          </AspectRatio>
        </CardOverflow>

        <CardContent className="itemCardDataBox">
          <Typography className="itemCardLabel" level="h3">
            {card.cardLabel}
          </Typography>
          <Typography className="itemCardTitle" level="body-md">
            {card.title}
          </Typography>
          <Typography className="itemCardTime" level="body-md">
            {card.time}
          </Typography>

          <CardContent className="itemCardRatingBox">
            <Box>
              <Box>4.5</Box>
              <Rating
                name="read-only-rating"
                value={4.5}
                precision={0.5}
                readOnly
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>
            <span>·</span>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12C5.96286 11.2779 7.1539 10.9273 8.35445 11.0126C9.55499 11.0979 10.6845 11.6134 11.5355 12.4645C12.3866 13.3155 12.9021 14.445 12.9874 15.6456C13.0727 16.8461 12.7221 18.0371 12 19M5 12C4.37902 12.4657 3.875 13.0697 3.52786 13.7639C3.18073 14.4582 3 15.2238 3 16C2.99968 16.5028 3.0752 17.0027 3.224 17.483C3.496 18.363 3.3 19.343 3.125 20.267C3.10948 20.346 3.1146 20.4276 3.13985 20.5041C3.1651 20.5805 3.20963 20.6491 3.26915 20.7033C3.32866 20.7575 3.40115 20.7954 3.4796 20.8134C3.55805 20.8314 3.63982 20.8288 3.717 20.806C4.565 20.574 5.408 20.376 6.274 20.694C6.82683 20.8968 7.41114 21.0004 8 21C8.77636 21.0008 9.5422 20.8204 10.2366 20.4732C10.931 20.126 11.5348 19.6216 12 19M5 12C5 7.315 7.875 3 13 3C14.283 2.99978 15.5471 3.30811 16.6859 3.899C17.8247 4.48988 18.8047 5.34599 19.5432 6.39508C20.2817 7.44418 20.757 8.6555 20.9291 9.92686C21.1012 11.1982 20.965 12.4923 20.532 13.7C20.056 15.026 20.569 16.802 20.869 18.268C20.8865 18.3461 20.8829 18.4274 20.8586 18.5036C20.8343 18.5798 20.7902 18.6482 20.7307 18.7017C20.6713 18.7552 20.5987 18.792 20.5204 18.8082C20.442 18.8244 20.3608 18.8195 20.285 18.794C18.973 18.384 17.433 17.808 16.2 18.328C14.866 18.89 13.464 19 12 19"
                  stroke="#2A2929"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link>Evaluation</Link>
            </Box>
            <span>·</span>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 8.75C11.31 8.75 10.75 9.31 10.75 10V10.107C10.75 10.3059 10.671 10.4967 10.5303 10.6373C10.3897 10.778 10.1989 10.857 10 10.857C9.80109 10.857 9.61032 10.778 9.46967 10.6373C9.32902 10.4967 9.25 10.3059 9.25 10.107V10C9.25 9.27065 9.53973 8.57118 10.0555 8.05546C10.5712 7.53973 11.2707 7.25 12 7.25H12.116C12.654 7.25025 13.179 7.41522 13.6204 7.72272C14.0618 8.03023 14.3985 8.46553 14.5852 8.97008C14.7718 9.47463 14.7995 10.0242 14.6645 10.545C14.5295 11.0657 14.2383 11.5327 13.83 11.883L13.06 12.543C12.9634 12.6269 12.8858 12.7304 12.8323 12.8466C12.7789 12.9628 12.7508 13.0891 12.75 13.217V13.75C12.75 13.9489 12.671 14.1397 12.5303 14.2803C12.3897 14.421 12.1989 14.5 12 14.5C11.8011 14.5 11.6103 14.421 11.4697 14.2803C11.329 14.1397 11.25 13.9489 11.25 13.75V13.217C11.25 12.52 11.554 11.858 12.083 11.405L12.854 10.745C13.0299 10.5942 13.1554 10.3931 13.2136 10.1689C13.2718 9.9446 13.26 9.70787 13.1796 9.49056C13.0992 9.27325 12.9541 9.08578 12.764 8.95338C12.5738 8.82098 12.3477 8.75 12.116 8.75H12ZM12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17Z"
                  fill="#2A2929"
                />
                <path
                  d="M3.25 12C3.25 9.67936 4.17187 7.45376 5.81282 5.81282C7.45376 4.17187 9.67936 3.25 12 3.25C14.3206 3.25 16.5462 4.17187 18.1872 5.81282C19.8281 7.45376 20.75 9.67936 20.75 12C20.75 14.3206 19.8281 16.5462 18.1872 18.1872C16.5462 19.8281 14.3206 20.75 12 20.75C9.67936 20.75 7.45376 19.8281 5.81282 18.1872C4.17187 16.5462 3.25 14.3206 3.25 12ZM12 4.75C11.0479 4.75 10.1052 4.93753 9.22554 5.30187C8.34593 5.66622 7.5467 6.20025 6.87348 6.87348C6.20025 7.5467 5.66622 8.34593 5.30187 9.22554C4.93753 10.1052 4.75 11.0479 4.75 12C4.75 12.9521 4.93753 13.8948 5.30187 14.7745C5.66622 15.6541 6.20025 16.4533 6.87348 17.1265C7.5467 17.7997 8.34593 18.3338 9.22554 18.6981C10.1052 19.0625 11.0479 19.25 12 19.25C13.9228 19.25 15.7669 18.4862 17.1265 17.1265C18.4862 15.7669 19.25 13.9228 19.25 12C19.25 10.0772 18.4862 8.23311 17.1265 6.87348C15.7669 5.51384 13.9228 4.75 12 4.75Z"
                  fill="#2A2929"
                />
              </svg>
              <Link>Q&A</Link>
            </Box>
          </CardContent>

          <CardContent>{renderCountSection()}</CardContent>

          <Box className="itemPriceBox">
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {currencyIcons[currency.toLowerCase()] || currency.toUpperCase()}
              <span>
                {new Intl.NumberFormat("az", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(total)}
              </span>
            </h3>
          </Box>
          <Button
          className="itemAddToCartButton"
            onClick={() => addToCart(card.id)}
            startDecorator={<Add />}
            sx={{ width: "100%" }}
          >
            Add to cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default ItemCard;
