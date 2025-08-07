import React, { useState, useEffect } from 'react'
import "./BusCompanies.css"
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
import { useNavigate } from "react-router-dom";


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
        backgroundColor: "transparent",
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

function BusCompanies({filter}) {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    const updatedLiked = { ...liked, [id]: !liked[id] };
    setLiked(updatedLiked);

    let favorite = JSON.parse(localStorage.getItem("selectedCardsByIds")) || [];

    if (updatedLiked[id]) {
      if (!favorite.includes(id)) {
        favorite.push(id);
      }
    } else {
      favorite = favorite.filter((favId) => favId !== id);
    }

    localStorage.setItem("selectedCardsByIds", JSON.stringify(favorite));
  };

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

  const selectedCards = getCardsByIdRange(102, 109);

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "6vw",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "5vw",
        },
      },
    ],
  };

  const navigate = useNavigate();
  
    const handleCardExplore = (card) => {
    const path = card.cardLabel.replace(/\s+/g, "-").toLowerCase();
    navigate(`/tours/${path}`);
  };

  return (
    <div className="mostPopularBusContainer">
      <h1>Most Popular Bus</h1>
      <Slider {...sliderSettings}>
        {selectedCards.map((card, index) => {
          const isCenter = index === currentSlide;
          return (
            <div
              className={`mostPopularBusCardsContainer ${
                isCenter ? "centerSlide" : "sideSlide"
              }`}
              key={card.id}
            >
              <Card
                sx={{
                  height: "26rem",
                  width: "100%",
                  maxWidth: {
                    xs: "90vw",
                    sm: "85vw",
                    md: isCenter ? "32rem" : "22rem",
                  },
                  margin: "0 auto",
                  padding: 0,
                  position: "relative",
                  transform: {
                    xs: "scale(1)",
                    md: isCenter ? "scale(1.1)" : "scale(0.92)",
                  },
                  transition: "all 0.3s ease-in-out",
                  zIndex: isCenter ? 9 : 1,
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
                  sx={{ justifyContent: "flex-end", position: "relative", margin: "0.3rem" }}
                >
                  <IconButton
                    className="likeButton"
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    onClick={() => toggleLike(card.id)}
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "0.5rem",
                      bottom: 0,
                      transform: "translateY(-1000%)",
                      backgroundColor: "rgba(255, 255, 255, 0.71)",
                      color: "#FDFBF8",
                    }}
                  >
                    {liked[card.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>

                  <span className="mostPopularBusCardContextContainer">
                    <span className="mostPopularBusCardContextTextBox">
                      <Typography className="mostPopularBusCardsLocation" level="title-lg" textColor="#fff">
                        <Link>
                          {card.cardLabel}
                        </Link>
                      </Typography>
                      {isCenter && (
                          <Box sx={{ mt: 1, mb: 1, backgroundColor: "transparent" }}>
                            <HoverRating sx={{backgroundColor: "transparent"}}
                              value={rates[card.id]}
                              onChange={(value) => {
                                setRates((prevRates) => ({
                                  ...prevRates,
                                  [card.id]: value,
                                }));
                              }}
                            />
                          </Box>
                      )}
                      {isCenter && (
                        <Typography textColor="neutral.300">
                          {card.title}
                        </Typography>
                      )}
                    </span>
                    {isCenter && (
                      <Button
                        variant="solid"
                        color="primary"
                        sx={{
                          width: "9rem",
                          height: "2rem",
                          borderRadius: "4rem",
                        }}
                        onClick={() => handleCardExplore(card)}
                      >
                        Book now
                      </Button>
                    )}
                  </span>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default BusCompanies