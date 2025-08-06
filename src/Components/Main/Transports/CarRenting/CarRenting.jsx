import React, { useEffect, useState } from "react";
import "./CarRenting.css";
import { cardsData } from "../../Cards/cardsData";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import { useNavigate } from "react-router-dom";

function CarRenting() {
  const [mainCards, setMainCards] = useState([]);
  const [scrolledCards, setScrolledCards] = useState([]);

  const navigate = useNavigate();
  
    const handleCardExplore = (card) => {
    const path = card.cardLabel.replace(/\s+/g, "-").toLowerCase();
    navigate(`/tours/${path}`);
  };

  useEffect(() => {
    const updateCardsLayout = () => {
      const width = window.innerWidth;
      const allCards = cardsData.filter((card) => {
        const id = parseInt(card.id, 10);
        return id >= 110 && id <= 120;
      });

      if (width >= 1200) {
        setMainCards([allCards.find((card) => parseInt(card.id) === 110)]);
        setScrolledCards(
          allCards.filter(
            (card) => parseInt(card.id) >= 111 && parseInt(card.id) <= 120
          )
        );
      } else if (width >= 1024) {
        setMainCards([allCards.find((card) => parseInt(card.id) === 110)]);
        setScrolledCards(
          allCards.filter(
            (card) => parseInt(card.id) >= 111 && parseInt(card.id) <= 120
          )
        );
      } else if (width >= 768) {
        const main = allCards.slice(0, allCards.length - 1);
        const last = allCards[allCards.length - 1];
        setMainCards(main);
        setScrolledCards([last]);
      } else {
        setMainCards(allCards);
        setScrolledCards([]);
      }
    };

    updateCardsLayout();
    window.addEventListener("resize", updateCardsLayout);
    return () => window.removeEventListener("resize", updateCardsLayout);
  }, []);

  return (
    <div className="carRentingContainer">
      <div className="carRentHeaderBox">
        <h1>Cars for rent</h1>
      </div>
      <div className="rentCarContainer">
        <div className="carRentCartBox">
          <div className="mainRentCarBox">
            {mainCards.map((card) => (
              <Card
                key={card.id}
                sx={{ height: "98%", width: "93%", position: "relative" }}
              >
                <CardCover>
                  <img src={card.img} loading="lazy" alt={card.title} />
                </CardCover>
                <CardCover
                  className="mainCarCardCover"
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-start" }}>
                  <div className="mainCarCardTextBox">
                    <Typography
                      level="title-lg"
                      textColor="#fff"
                      sx={{
                        fontSize: "clamp(18px, 2vw, 24px)",
                        lineHeight: "29px",
                      }}
                      className="mainCarCardTitle"
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      textColor="#fff"
                      sx={{ fontSize: "clamp(18px, 2vw, 24px)" }}
                    >
                      {card.cardLabel}
                    </Typography>
                    <Typography
                      textColor="#fff"
                      sx={{ fontSize: "clamp(16px, 1.8vw, 20px)" }}
                    >
                      {card.fuel}
                    </Typography>
                    <Typography
                      textColor="#fff"
                      sx={{ fontSize: "clamp(16px, 1.8vw, 20px)" }}
                    >
                      {card.transmission}
                    </Typography>
                    <Typography
                      textColor="#fff"
                      sx={{ fontSize: "clamp(16px, 1.8vw, 20px)" }}
                    >
                      {card.seats}
                    </Typography>
                  </div>
                </CardContent>
                <div className="mainCarCardButtonBox">
                  <Button
                    variant="solid"
                    sx={{
                      width: "clamp(120px, 15vw, 180px)",
                      height: "2.8rem",
                      borderRadius: "4rem",
                      backgroundColor: "#0123FF",
                      "&:hover": { backgroundColor: "#00adfd", color: "#000" },
                    }}
                    onClick={() => handleCardExplore(card)}
                  >
                    Rent Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {scrolledCards.length > 0 && (
            <div className="skrollRentCarBox">
              {scrolledCards.map((card) => (
                <Card
                  key={card.id}
                  variant="outlined"
                  orientation="horizontal"
                  sx={{
                    width: "93%",
                    "&:hover": {
                      boxShadow: "md",
                      borderColor: "neutral.outlinedHoverBorder",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      level="title-lg"
                      id="card-description"
                      sx={{
                        fontSize: "clamp(16px, 2vw, 20px)",
                        marginTop: "1rem",
                      }}
                    >
                      {card.cardLabel}
                    </Typography>
                    {[card.fuel, card.transmission, card.seats].map(
                      (info, idx) => (
                        <Typography
                          key={idx}
                          level="body-sm"
                          aria-describedby="card-description"
                          sx={{ mb: 1 }}
                        >
                          <Link
                            overlay
                            underline="none"
                            href="#"
                            sx={{
                              color: "text.tertiary",
                              fontSize: "clamp(14px, 1.8vw, 18px)",
                            }}
                          >
                            {info}
                          </Link>
                        </Typography>
                      )
                    )}
                  </CardContent>
                  <AspectRatio sx={{ width: "23vw" }}>
                    <img src={card.img} loading="lazy" alt={card.title} />
                  </AspectRatio>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarRenting;
