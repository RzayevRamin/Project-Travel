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
import { useNavigate } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


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

function LocalTours({ source }) {
  
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

  const selectedCards = getCardsByIdRange(20, 29);

  const sliderSettings = {
    infinite: true,
    variableWidth: false,
    slidesToShow: source === "home" ? 3 : 5,
    slidesToScroll: source === "home" ? 2 : 4,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: source === "home" ? 2 : 4,
          slidesToScroll: source === "home" ? 1 : 3,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: source === "home" ? 2 : 3,
          slidesToScroll: source === "home" ? 1 : 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
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
        source === "home" ? "localHomeStyle" : "localToursStyle"
      } localToursContainer`}
    >
      <h1>Domestic Tours</h1>
      <Slider className="localToursSlider" {...sliderSettings}>
        {selectedCards.map((card) => (
          <div key={card.id} className="localCardContainer">
            <Card
              key={card.id}
              className="localTourCard"
              variant="outlined"
              sx={{ bgcolor: "#F1FAFA" }}
            >
              <CardOverflow sx={{ bgcolor: "#F1FAFA" }}>
                <AspectRatio ratio="1.25">
                  <img src={card.img} loading="lazy" alt={card.title} />
                </AspectRatio>
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
                    top: "0.5rem",
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
                        <span className="locationHoverWrapper">
                          <Link
                            className="localToursNameLabel"
                            href={card.location}
                            target="_blank"
                            rel="noopener"
                          >
                            {card.cardLabel}
                          </Link>
                        </span>
                      </Typography>
                    </div>
                    <div className="rateIconBox">
                          <Box>4.5</Box>
                          <StarIcon style={{ color: "#E7E300" }} />
                        </div>
                  </div>
                  <div className="cardButtonBox">
                    <Button variant="contained" className="cardButton" onClick={() => handleCardExplore(card)}>
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
