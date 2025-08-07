import React, { useState, useEffect } from "react";
import "./MostPopularHotels.css";
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
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";


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

function MostPopularHotels() {
  const [liked, setLiked] = useState({});

  useEffect(() => {
        const favorite = JSON.parse(localStorage.getItem("selectedCardsByIds")) || [];
        const likedMap = {};
        favorite.forEach((id) => {
          likedMap[id] = true;
        });
        setLiked(likedMap);
      }, []);
  
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

  

  const getCardsByIdRange = (startId, endId) => {
    return cardsData.filter((card) => {
      const id = parseInt(card.id, 10);
      return id >= startId && id <= endId;
    });
  };

  const selectedCards = getCardsByIdRange(51, 65);

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
    <div className="mostPopularHotelsContainer">
      <h1>Most Popular Hotels</h1>
      <Slider {...sliderSettings}>
        {selectedCards.map((card, index) => {
          const isCenter = index === currentSlide;
          return (
            <div
              className={`mostPopularHotelsCardsContainer ${
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
                  sx={{
                    justifyContent: "flex-end",
                    position: "relative",
                    margin: "0.3rem",
                  }}
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

                  <span className="mostPopularHotelsCardContextContainer">
                    <span className="mostPopularHotelsCardContextTextBox">
                      <Typography
                        className="mostPopularHotelsCardsLocation"
                        level="title-lg"
                        textColor="#fff"
                        sx={{
                          fontSize: {
                            xs: "0.9rem",
                            sm: "1rem",
                            md: "1.2rem",
                          },
                        }}
                      >
                        <Link
                          href={card.location}
                          target="_blank"
                          rel="noopener"
                        >
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
                      {isCenter && (
              <Rating
                name="read-only-rating"
                value={4.5}
                precision={0.5}
                readOnly
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
                      )}
                      {isCenter && (
                        <Typography
                          textColor="neutral.300"
                          sx={{
                            fontSize: {
                              xs: "0.9rem",
                              sm: "1rem",
                              md: "1.2rem",
                            },
                          }}
                        >
                          {card.title}
                        </Typography>
                      )}
                    </span>
                    {isCenter && (
                      <Button
                        variant="solid"
                        color="primary"
                        sx={{
                          width: {
                            xs: "7rem",
                            sm: "8rem",
                            md: "9rem",
                          },
                          height: {
                            xs: "1.8rem",
                            sm: "2rem",
                          },
                          fontSize: {
                            xs: "0.75rem",
                            sm: "0.85rem",
                            md: "0.95rem",
                          },
                          borderRadius: "4rem",
                        }}
                      onClick={() => handleCardExplore(card)}>
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

export default MostPopularHotels;
