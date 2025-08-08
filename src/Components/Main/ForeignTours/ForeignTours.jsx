import React, { useState, useEffect } from "react";
import "../Cards/Cards.css";
import "./ForeignTours.css";
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
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CardCover from "@mui/joy/CardCover";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
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

function ForeignTours({ source }) {
 
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

  const selectedCards = getCardsByIdRange(1, 19);

  const sliderSettings = {
    infinite: true,
    slidesToShow: source === "home" ? 2 : 3,
    slidesToScroll: source === "home" ? 1 : 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1859,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1300,
        settings: {
          slidesToShow: source === "home" ? 2 : 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: source === "home" ? 1 : 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 958,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
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
    <div
      className={`${
        source === "home" ? "foreignHomeStyle" : "foreignToursStyle"
      } foreignToursContainer`}
    >
      <h1>Foreign Tours</h1>
      <Slider {...sliderSettings} className="foreignToursSlider">
        {selectedCards.map((card) => (
          <div key={card.id} className="cardContainer">
            <Card
              key={card.id}
              sx={{ minHeight: "410px" }}
              className="foreignCard"
            >
              <CardCover>
                <img src={card.img} loading="lazy" alt={card.title} />
              </CardCover>
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
                  transform: "translateY(-1110%)",
                  backgroundColor: "rgba(255, 255, 255, 0.71)",
                  color: "#F60909",
                }}
              >
                {liked[card.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <div className="rateIconBox">
                          <Box>4.5</Box>
                          <StarIcon style={{ color: "#E7E300" }} />
                        </div>
              <CardCover
                sx={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                }}
              />
              <CardContent sx={{ justifyContent: "flex-end" }}>
                <div className="secondCardContentContainer">
                  <div className="secondCardContentBox">
                    <Typography
                      as="div"
                      startDecorator={<LocationOnRoundedIcon />}
                      textColor="neutral.300"
                    >
                      <span className="locationPreview">
                        <Link className="tourNameLabel"
                          href={card.location}
                          target="_blank"
                          rel="noopener"
                        >
                          {card.cardLabel}
                        </Link>
                      </span>
                    </Typography>
                    <Typography as="div" level="title-lg" textColor="#fff">
                      {card.title}
                    </Typography>
                  </div>
                  <div className="cardButtonBox">
                    <Button variant="contained" className="cardButton" onClick={() => handleCardExplore(card)}>
                      Explore more
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ForeignTours;
