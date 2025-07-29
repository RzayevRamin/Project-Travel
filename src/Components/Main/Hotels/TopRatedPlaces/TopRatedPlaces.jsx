import React, { useState, useEffect } from "react";
import "./TopRatedPlaces.css";
import { cardsData } from "../../Cards/cardsData";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "@mui/joy/Link";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

function HoverRating({ value, onChange }) {
  const [hover, setHover] = useState(-1);

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  return (
    <Box
      sx={{
        width: 220,
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "rgba(255, 255, 255, 0.71)",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="customArrow nextArrow" onClick={onClick}>
      <KeyboardArrowRightIcon style={{ fontSize: 32, color: "#333" }} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="customArrow prevArrow" onClick={onClick}>
      <KeyboardArrowLeftIcon style={{ fontSize: 32, color: "#333" }} />
    </div>
  );
}

function TopRatedPlaces({ filter }) {
  const [liked, setLiked] = useState({});
  const [hoveredRate, setHoveredRating] = useState(null);

  const filteredCards = filter
    ? cardsData.filter((card) => card.className === filter)
    : cardsData;

  const [rates, setRates] = useState(Array(filteredCards.length).fill(4.5));

  useEffect(() => {
    setRates((prevRates) => {
      const newRates = {};
      filteredCards.forEach((card) => {
        newRates[card.id] =
          prevRates[card.id] !== undefined ? prevRates[card.id] : 4.5;
      });
      return newRates;
    });
  }, [filteredCards]);

  const getCardsByIdRange = (startId, endId) => {
    return cardsData.filter((card) => {
      const id = parseInt(card.id, 10);
      return id >= startId && id <= endId;
    });
  };

  const selectedCards = getCardsByIdRange(36, 50);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="topRatedPlaceContainer">
      <h1>Top Rated Places</h1>
      <Slider {...sliderSettings}>
        {selectedCards.map((card) => (
          <div className="topRatedPlacesCardsContainer" key={card.id}>
            <Card
              key={card.id}
              sx={{
                height: "28.5rem",
                width: "28.5rem",
                margin: "0 0.5rem",
                padding: 0,
                position: "relative",
              }}
            >
              <CardCover>
                <img src={card.img} loading="lazy" alt={card.title} />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                }}
              />
              <CardContent
                sx={{ justifyContent: "flex-end", position: "relative" }}
              >
                <IconButton
                  className="likeButton"
                  aria-label="Like minimal photography"
                  size="md"
                  variant="solid"
                  onClick={() =>
                    setLiked((prev) => ({
                      ...prev,
                      [card.id]: !prev[card.id],
                    }))
                  }
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "0.5rem",
                    bottom: 0,
                    transform: "translateY(-1145%)",
                    backgroundColor: "rgba(255, 255, 255, 0.71)",
                    color: "#FDFBF8",
                  }}
                >
                  {liked[card.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <div
                  className="rateIconBox"
                  onMouseEnter={() => setHoveredRating(card.id)}
                  onMouseLeave={() => setHoveredRating(null)}
                >
                  <IconButton
                    className="rateIconButton"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.71)",
                      borderRadius: "20rem",
                    }}
                  >
                    {hoveredRate === card.id ? (
                      <HoverRating
                        value={rates[card.id]}
                        onChange={(value) => {
                          setRates((prevRates) => ({
                            ...prevRates,
                            [card.id]: value,
                          }));
                        }}
                      />
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                        >
                          <path
                            d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                            fill="#E7E300"
                          />
                        </svg>
                        <span className="ratingValue">
                          {rates[card.id] ?? 4.5}
                        </span>
                      </>
                    )}
                  </IconButton>
                </div>
                <span className="ratedPlacesCardContextContainer">
                  <span className="ratedPlacesCardContextTextBox">
                    <Typography level="title-lg" textColor="#fff">
                      <Link href={card.location} target="_blank" rel="noopener">
                        {card.cardLabel}
                        <span className="locationMapPreview">
                          <iframe
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(
                              card.cardLabel
                            )}&output=embed`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen=""
                            title="Google Map Preview"
                          ></iframe>
                        </span>
                      </Link>
                    </Typography>
                    <Typography textColor="neutral.300">
                      {card.title}
                    </Typography>
                  </span>
                  <Button
                    variant="solid"
                    color="primary"
                    sx={{ width: "9rem", height: "2rem", borderRadius: "4rem" }}
                  >
                    Book now
                  </Button>
                </span>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TopRatedPlaces;
