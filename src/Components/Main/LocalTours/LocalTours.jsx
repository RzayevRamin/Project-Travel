import React from "react";
import "../Cards/Cards.css";
import "./LocalTours.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { cardsData } from "../Cards/cardsData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function HoverRating({ value, onChange }) {
  const [hover2, setHover2] = useState(-1);

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
          setHover2(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover2 !== -1 ? hover2 : value]}</Box>
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

function LocalTours({ filter }) {
  const [hoveredRate, setHoveredRating] = useState(null);
  const [liked, setLiked] = useState({});

  const filteredCards = filter
    ? cardsData.filter((card) => card.className === filter)
    : cardsData;

  const [rates, setRates] = useState({});

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

  const selectedCards = getCardsByIdRange(20, 29);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="localToursContainer">
      <h1>Domestic Tours</h1>
      <Slider {...sliderSettings}>
        {selectedCards.map((card) => (
          <div key={card.id} className="cardContainer">
            <Card
              key={card.id}
              className={card.className}
              variant="outlined"
              sx={{ width: 320, bgcolor: "#F1FAFA" }}
            >
              <CardOverflow sx={{ bgcolor: "#F1FAFA" }}>
                <AspectRatio ratio="2">
                  <img src={card.img} loading="lazy" alt={card.title} />
                </AspectRatio>
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
                    transform: "translateY(-375%)",
                    backgroundColor: "rgba(255, 255, 255, 0.71)",
                    color: "#F60909",
                  }}
                >
                  {liked[card.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </CardOverflow>
              <CardContent className="cardContent" sx={{ bgcolor: "#F1FAFA" }}>
                <div className="cardContentContainer">
                  <div className="cardContentBox">
                    <div className="textBox">
                      <Typography level="body-sm">
                        <Link href="#multiple-actions" overlay underline="none">
                          {card.title}
                        </Link>
                      </Typography>
                      <Typography level="title-md">
                        <span
                          className="locationPreview"
                          style={{ position: "relative", zIndex: 1000 }}
                        >
                          <Link
                            href={card.location}
                            target="_blank"
                            rel="noopener"
                          >
                            {card.locationLabel}
                          </Link>
                          <div
                            className="locationMapPreview"
                            style={{
                              position: "absolute",
                              top: "100%",
                              left: 0,
                              zIndex: "9999",
                              width: "250px",
                              background: "white",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                              borderRadius: "8px",
                              overflow: "hidden",
                            }}
                          >
                            <iframe
                              width="250"
                              height="150"
                              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                                card.locationLabel
                              )}&output=embed`}
                              title="Google Map Preview"
                            ></iframe>
                          </div>
                        </span>
                      </Typography>
                    </div>
                    <div
                      className="rateIconBox"
                      onMouseEnter={() => setHoveredRating(card.id)}
                      onMouseLeave={() => setHoveredRating(null)}
                    >
                      <IconButton>
                        {hoveredRate === card.id ? (
                          <div
                            className="hoverRatingWrapper"
                            style={{
                              position: "absolute",
                              transform: "translateX(-50%)",
                              zIndex: 10,
                              marginBottom: "8px",
                            }}
                          >
                            <HoverRating
                              value={rates[card.id]}
                              onChange={(value) => {
                                setRates((prev) => ({
                                  ...prev,
                                  [card.id]: value,
                                }));
                              }}
                            />
                          </div>
                        ) : (
                          <>
                            <span className="ratingValue">
                              {rates[card.id] ?? 4.5}
                            </span>
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
                          </>
                        )}
                      </IconButton>
                    </div>
                  </div>
                  <div className="cardButtonBox">
                    <Button variant="contained" className="cardButton">
                      Explore more
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardOverflow variant="soft" sx={{ bgcolor: "#F1FAFA" }}>
                <Divider inset="context" />
                <CardContent
                  orientation="horizontal"
                  className="cardContentFooter"
                >
                  <Typography level="body-xs">{card.views}</Typography>
                  <Typography level="body-xs">{card.time}</Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LocalTours;
