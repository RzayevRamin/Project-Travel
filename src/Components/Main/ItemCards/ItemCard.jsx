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
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

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
        </div>
      );
    } else if (card.id >= 102 && card.id <= 109) {
      return (
        <div className="cardsInfoBox child">
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
        <div className="cardsInfoBox child">
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

        <CardContent>
          <Typography level="h3">{card.cardLabel}</Typography>
          <Typography level="body-md">{card.title}</Typography>
          <Typography level="body-md">{card.time}</Typography>

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
              {/* SVG Evaluation icon əlavə et */}
              <Link>Evaluation</Link>
            </Box>
            <span>·</span>
            <Box>
              {/* SVG Q&A icon əlavə et */}
              <Link>Q&A</Link>
            </Box>
          </CardContent>

          <CardContent>{renderCountSection()}</CardContent>

          <Box>
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
          <Button onClick={() => addToCart(card.id)} startDecorator={<Add />} sx={{ width: "100%"}}>Add to cart</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default ItemCard;
