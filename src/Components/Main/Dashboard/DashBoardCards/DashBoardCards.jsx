import React from "react";
import "./DashBoardCards.css";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { cardsData } from "../../Cards/cardsData";

function DashBoardCards() {
  const selectedCardIds = ["32", "28", "19"];
  const selectedCards = cardsData.filter(card => selectedCardIds.includes(card.id));

  return (
    <div className="dashCardsContainer">
      <div className="dashCardsHeading">
        <h4>Recently completed trips</h4>
      </div>

      <div className="dashCardsbox">
        {selectedCards.map((card) => (
          <div className="dashCardItem" key={card.id}>
            <Card
              variant="outlined"
              orientation="horizontal"
              sx={{
                maxWidth: "28rem",
                padding: "0.5rem",
                border: 0,
                display: "flex",
                alignItems: "center",
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
                  src={card.img}
                  loading="lazy"
                  alt={card.cardLabel}
                />
              </AspectRatio>
              <CardContent sx={{ justifyContent: "center" }}>
                <Typography level="title-lg" id="card-description">
                  {card.cardLabel}
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
                    {card.views}
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
        ))}
      </div>

      <div className="dashCardsMore">
        <Button 
          variant="solid"
          color="primary"
          sx={{
            backgroundColor: "#0123FF",
            width: "calc(100% + 2rem)",
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            marginLeft: "-1rem",
            borderBottomRightRadius: "2rem",
            borderBottomLeftRadius: "2rem",
          }}
        >
          See all
        </Button>
      </div>
    </div>
  );
}

export default DashBoardCards;
