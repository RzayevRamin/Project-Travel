import React from "react";
import "./DashBoardCards.css";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { cardsData } from "../../Cards/cardsData";
import Button from "@mui/joy/Button";

function DashBoardCards() {
  const firstCard = cardsData.find((card) => card.id === "32");
  const secondCard = cardsData.find((card) => card.id === "28");
  const thirdCard = cardsData.find((card) => card.id === "19");

  return (
    <div className="dashCardsContainer">
      <div className="dashCardsHeading">
        <h4>Recently completed trips</h4>
      </div>
      <div className="dashCardsbox">
        <div className="dashCardItem">
          <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
              maxWidth: "28rem",
              padding: "0.5rem",
              border: "0",
              display: "flex", alignItems: "center",
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder", 
              },
            }}
          >
            <AspectRatio
              ratio="1"
              sx={{ width: "5.35rem", height: "5.35rem", borderRadius: "50%" }}
            >
              <img
                className="rounded"
                src={firstCard.img}
                loading="lazy"
                alt="first card"
              />
            </AspectRatio>
            <CardContent sx={{ justifyContent: "center" }}>
              <Typography level="title-lg" id="card-description">
                {firstCard.cardLabel}
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
                  sx={{ color: "text.tertiary" }}
                >
                  {firstCard.views}
                </Link>
              </Typography>
            </CardContent>
            <Button
              variant="solid"
              color="primary"
              sx={{
                pointerEvents: "none",
                width: "5.7rem",
                height: "3rem",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "1.4rem",
                backgroundColor: "#0123FF",
              }}
            >
              Explore
            </Button>
          </Card>
        </div>
        <div className="dashCardItem">
          <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
              maxWidth: "28rem",
              padding: "0.5rem",
              border: "0",
              display: "flex", alignItems: "center",
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder", 
              },
            }}
          >
            <AspectRatio ratio="1" sx={{ width: "5.35rem", height: "5.35rem", borderRadius: "50%" }}
            >
              <img
                className="rounded"
                src={secondCard.img}
                loading="lazy"
                alt="second card"
              />
            </AspectRatio>
            <CardContent sx={{ justifyContent: "center" }}>
              <Typography level="title-lg" id="card-description">
                {secondCard.cardLabel}
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
                  sx={{ color: "text.tertiary" }}
                >
                  {secondCard.views}
                </Link>
              </Typography>
            </CardContent>
            <Button
              variant="solid"
              color="primary"
              sx={{
                pointerEvents: "none",
                width: "5.7rem",
                height: "3rem",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "1.4rem",
                backgroundColor: "#0123FF",
              }}
            >
              Explore
            </Button>
          </Card>
        </div>
        <div className="dashCardItem">
          <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
              maxWidth: "28rem",
              padding: "0.5rem",
              border: "0",
              display: "flex", alignItems: "center",
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder", 
              },
            }}
          >
            <AspectRatio ratio="1" sx={{ width: "5.35rem", height: "5.35rem", borderRadius: "50%" }}
            >
              <img
                className="rounded"
                src={thirdCard.img}
                loading="lazy"
                alt="third card"
              />
            </AspectRatio>
            <CardContent sx={{ justifyContent: "center" }}>
              <Typography level="title-lg" id="card-description">
                {thirdCard.cardLabel}
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
                  sx={{ color: "text.tertiary" }}
                >
                  {thirdCard.views}
                </Link>
              </Typography>
            </CardContent>
            <Button
              variant="solid"
              color="primary"
              sx={{
                pointerEvents: "none",
                width: "5.7rem",
                height: "3rem",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "1.4rem",
                backgroundColor: "#0123FF",
              }}
            >
              Explore
            </Button>
          </Card>
        </div>
      </div>
      <div className="dashCardsMore">
        <Button 
          variant="solid"
          color="primary"
          sx={{
            backgroundColor: "#0123FF",
            width: "28rem",
            borderTopRightRadius: "0px",
            borderTopLeftRadius: "0px",
            borderBottomRightRadius: "2rem",
            borderBottomLeftRadius: "2rem",
          }}
        >See all</Button>
      </div>
    </div>
  );
}

export default DashBoardCards;
