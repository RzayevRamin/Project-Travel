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

function TopRatedPlaces() {
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

  const selectedCards = getCardsByIdRange(36, 50);

  const sliderSettings = {
    infinite: true,
    centerMode: false,
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

  const navigate = useNavigate();
  
    const handleCardExplore = (card) => {
    const path = card.cardLabel.replace(/\s+/g, "-").toLowerCase();
    navigate(`/tours/${path}`);
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
                margin: 0,
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
                  onClick={() => toggleLike(card.id)}
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
                <div className="rateIconBox">
                          <Box>4.5</Box>
                          <StarIcon style={{ color: "#E7E300" }} />
                        </div>
                <span className="ratedPlacesCardContextContainer">
                  <span className="ratedPlacesCardContextTextBox">
                    <Typography level="title-lg" textColor="#fff">
                      <Link href={card.location} target="_blank" rel="noopener">
                        {card.cardLabel}
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
                  onClick={() => handleCardExplore(card)}>
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
