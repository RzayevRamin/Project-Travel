import React from "react";
import "./CarRenting.css";
import { cardsData } from "../../Cards/cardsData";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";


function CarRenting() {
  const getCardsByIdRange = (startId, endId) => {
    return cardsData.filter((card) => {
      const id = parseInt(card.id, 10);
      return id >= startId && id <= endId;
    });
  };

  const selectedMainCard = getCardsByIdRange(110, 110)[0];
  const selectedScrolledCard = getCardsByIdRange(111, 120);

  return (
    <div className="carRentingcontainer">
      <div className="carRentHeaderBox">
        <h1>Cars for rent</h1>
      </div>
      <div className="carRentCartBox">
        <div className="mainRentCarBox">
          <Card sx={{ height: "52.75rem", width: "44vw" }}>
            <CardCover>
              <img
                src={selectedMainCard.img}
                loading="lazy"
                alt={selectedMainCard.title}
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent
              sx={{
                justifyContent: "flex-start",
              }}
            >
              <div className="mainCarCardTextBox">
                <Typography
                  level="title-lg"
                  textColor="#fff"
                  sx={{ fontSize: "24px", lineHeight: "29px" }}
                >
                  {selectedMainCard.title}
                </Typography>
                <Typography
                  textColor="#fff"
                  sx={{ fontSize: "24px", lineHeight: "29px" }}
                >
                  {selectedMainCard.locationLabel}
                </Typography>
                <Typography
                  textColor="#fff"
                  sx={{ fontSize: "20px", lineHeight: "24px" }}
                >
                  {selectedMainCard.fuel}
                </Typography>
                <Typography
                  textColor="#fff"
                  sx={{ fontSize: "20px", lineHeight: "24px" }}
                >
                  {selectedMainCard.transmission}
                </Typography>
                <Typography
                  textColor="#fff"
                  sx={{ fontSize: "20px", lineHeight: "24px" }}
                >
                  {selectedMainCard.seats}
                </Typography>
              </div>
            </CardContent>
            <div className="mainCarCardButtonBox">
              <Button
                variant="solid"
                sx={{
                  width: "13.7vw",
                  height: "2.8rem",
                  borderRadius: "4rem",
                  backgroundColor: "#0123FF",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#00adfd", color: "#000" },
                }}
              >
                Rent Now
              </Button>
            </div>
          </Card>
        </div>
        <div className="skrollRentCarBox">
          {selectedScrolledCard.map((card) => {
            return (
          <Card
            key={card.id}
            variant="outlined"
            orientation="horizontal"
            sx={{
              width: "41vw",
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
                sx={{ fontSize: "20px", lineHeight: "24px", marginTop: "24px" }}
              >
                {card.locationLabel}
              </Typography>
              <Typography
                level="body-sm"
                aria-describedby="card-description"
                sx={{ mb: 1 }}
              >
                <Link
                  overlay
                  underline="none"
                  href="#interactive-card"
                  sx={{ color: "text.tertiary", fontSize: "20px", marginTop: "24px" }}
                >
                  {card.fuel}
                </Link>
              </Typography>
              <Typography
                level="body-sm"
                aria-describedby="card-description"
                sx={{ mb: 1 }}
              >
                <Link
                  overlay
                  underline="none"
                  href="#interactive-card"
                  sx={{ color: "text.tertiary", fontSize: "20px" }}
                >
                  {card.transmission}
                </Link>
              </Typography>
              <Typography
                level="body-sm"
                aria-describedby="card-description"
                sx={{ mb: 1 }}
              >
                <Link
                  overlay
                  underline="none"
                  href="#interactive-card"
                  sx={{ color: "text.tertiary", fontSize: "20px" }}
                >
                  {card.seats}
                </Link>
              </Typography>
            </CardContent>
            <AspectRatio sx={{ width: "23vw" }}>
              <img src={card.img} loading="lazy" alt={card.title} />
            </AspectRatio>
          </Card>
            )
          })},
        </div>
      </div>
    </div>
  );
}

export default CarRenting;
