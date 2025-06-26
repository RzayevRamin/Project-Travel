import React from "react";
import "./Cards.css";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import Button from "@mui/material/Button";
import { cardsData } from "./cardsData";


function HoverRating({ value, onChange }) {
  const [hover, setHover] = React.useState(-1);

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
    <Box sx={{ width: 220, display: "flex", alignItems: "center", borderRadius: "8px", backgroundColor: "rgba(255, 255, 255, 0.71)" }}>
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

function Cards({ type, filter }) {
  const [hoveredRate, setHoveredRating] = useState(null);
  const [hoveredRate2, setHoveredRating2] = useState(null);

  const filteredCards = filter
    ? cardsData.filter((card) => card.className === filter)
    : cardsData;

  const [rates, setRates] = useState(Array(filteredCards.length).fill(4.5));
  const [rates2, setRates2] = useState(Array(filteredCards.length).fill(4.5));


  return (
    <div className="cardsContainer">
      {type === "firstTypeCard" && (
        <div className="firstTypeCard">
          {filteredCards.map((card, idx) => (
          <Card
            key={idx}
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
                <FavoriteBorderIcon />
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
                      <span className="locationPreview">
                        <Link
                          href={card.location}
                          target="_blank"
                          rel="noopener"
                        >
                          {card.locationLabel}
                        </Link>
                        <span className="locationMapPreview">
                          <iframe
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(
                              card.locationLabel
                            )}&output=embed`}
                            title="Google Map Preview"
                          ></iframe>
                        </span>
                      </span>
                    </Typography>
                  </div>
                  <div
                    className="rateIconBox"
                    onMouseEnter={() => setHoveredRating(idx)}
                    onMouseLeave={() => setHoveredRating(null)}
                  >
                    <IconButton>
                      {hoveredRate === idx ? (
                        <HoverRating
                          value={rates[idx]}
                          onChange={(value) => {
                            const newRates = [...rates];
                            newRates[idx] = value;
                            setRates(newRates);
                          }}
                        />
                      ) : (
                        <>
                          {typeof rates[idx] === "number" && (
                            <span className="ratingValue">{rates[idx]}</span>
                          )}
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
        ))}
        </div>
      )}
      {type === "secondTypeCard" && (
        <div className="secondTypeCard">
          {filteredCards.map((card, idx) => (
          <Card sx={{ minHeight: "410px", width: "42rem" }}>
            <CardCover>
              <img src={card.img} loading="lazy" alt={card.title} />
            </CardCover>
            <IconButton
              className="likeButton"
              aria-label="Like minimal photography"
              size="md"
              variant="solid"
              sx={{
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                right: "0.5rem",
                bottom: 0,
                transform: "translateY(-1000%)",
                backgroundColor: "rgba(255, 255, 255, 0.71)",
                color: "#F60909",
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
            <div
              className="rateIconBox"
              onMouseEnter={() => setHoveredRating2(idx)}
              onMouseLeave={() => setHoveredRating2(null)}
            >
              <IconButton className="secondRateIconButton">
                {hoveredRate2 === idx ? (
                  <HoverRating
                    value={rates2[idx]}
                    onChange={(value) => {
                      const newRates = [...rates2];
                      newRates[idx] = value;
                      setRates2(newRates);
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
                    {typeof rates2[idx] === "number" && (
                      <span className="ratingValue">{rates2[idx]}</span>
                    )}
                  </>
                )}
              </IconButton>
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
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    <span className="locationPreview">
                      <Link href={card.location} target="_blank" rel="noopener">
                        {card.locationLabel}
                      </Link>
                      <span className="locationMapPreview">
                        <iframe
                          src={`https://maps.google.com/maps?q=${encodeURIComponent(
                            card.locationLabel
                          )}&output=embed`}
                          title="Google Map Preview"
                        ></iframe>
                      </span>
                    </span>
                  </Typography>
                  <Typography level="title-lg" textColor="#fff">
                    {card.title}
                  </Typography>
                </div>
                <div className="cardButtonBox">
                  <Button variant="contained" className="cardButton">
                    Explore more
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        </div>
      )}
    </div>
  );
}

export default Cards;
