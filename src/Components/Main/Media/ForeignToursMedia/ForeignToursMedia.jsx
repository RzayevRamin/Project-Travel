import React, { useRef, useState, useEffect } from 'react'
import "./ForeignToursMedia.css"
import Slider from "react-slick";
import { cardsData } from "../../Cards/cardsData";
import IconButton from "@mui/joy/IconButton";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";

function ForeignToursMedia() {

    const topSlider = useRef(null);
      const bottomSlider = useRef(null);
    
      const [hoveredIndex, setHoveredIndex] = useState(null);
      const [imageIndex, setImageIndex] = useState(0);
    
      const filteredCards = cardsData.filter((card) => {
        const id = parseInt(card.id, 10);
        return id >= 131 && id <= 140;
      });
    
      useEffect(() => {
        if (
          hoveredIndex !== null &&
          filteredCards[hoveredIndex]?.img?.length > 1
        ) {
          const interval = setInterval(() => {
            setImageIndex(
              (prev) => (prev + 1) % filteredCards[hoveredIndex].img.length
            );
          }, 600);
          return () => clearInterval(interval);
        }
      }, [hoveredIndex, filteredCards]);
    
      const handleNext = () => {
        topSlider.current.slickNext();
        bottomSlider.current.slickNext();
      };
    
      const handlePrev = () => {
        topSlider.current.slickPrev();
        bottomSlider.current.slickPrev();
      };
    
      const topSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        speed: 500,
      };
    
      const bottomSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        speed: 500,
        initialSlide: 3,
      };

  return (
    <div className="foreignToursMediaContainer">
      <div className="foreignToursMediaHeadingBox">
        <h1>Media from internal tours</h1>
      </div>

      <div className="foreignToursMediaCardsBox">
        <div className="leftSliderButton">
          <IconButton
            sx={{
              backgroundColor: "rgba(217, 217, 217, 0.39);",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
            }}
            onClick={handlePrev}
          >
            <ArrowBackIosRoundedIcon style={{ fontSize: 32, color: "#333" }} />
          </IconButton>
        </div>
        <div className="doubleSlider">
          <div className="sliderRow topSlider">
            <Slider ref={topSlider} {...topSettings}>
              {filteredCards.map((slide, index) => (
                <Card
                  key={slide.id}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setImageIndex(0);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setImageIndex(0);
                  }}
                  sx={{
                    height: "37rem",
                    margin: "0 0.5rem",
                    padding: 0,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CardCover>
                    <img
                      src={
                        hoveredIndex === index
                          ? slide.img?.[imageIndex] || slide.img?.[0]
                          : slide.img?.[0]
                      }
                      loading="lazy"
                      alt={slide.title}
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
                      justifyContent: "flex-end",
                      alignItems: "center",
                      position: "relative",
                      height: "36rem",
                      width: "34rem",
                      left: "0.5rem",
                    }}
                  >
                    <span className="mediaCardContextContainer">
                      <span className="mediaCardContextTextBox">
                        <Typography level="title-lg" textColor="#fff">
                          <Link
                            href={slide.location}
                            target="_blank"
                            rel="noopener"
                          >
                            {slide.label}
                          </Link>
                        </Typography>
                        <Typography textColor="neutral.300">
                          {slide.title}
                        </Typography>
                      </span>
                      <IconButton
                        variant="solid"
                        color="primary"
                        sx={{
                          width: "3rem",
                          height: "3rem",
                          borderRadius: "4rem",
                        }}
                      >
                        <ArrowForwardRoundedIcon sx={{ fontSize: "2.2rem" }} />
                      </IconButton>
                    </span>
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </div>

          <div className="sliderRow bottomSlider">
            <Slider ref={bottomSlider} {...bottomSettings}>
              {filteredCards.map((slide, index) => (
                <Card
                  key={slide.id}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setImageIndex(0);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setImageIndex(0);
                  }}
                  sx={{
                    height: "25rem",
                    width: "25rem",
                    margin: "0 0.5rem",
                    padding: 0,
                    position: "relative",
                  }}
                >
                  <CardCover>
                    <img
                      src={
                        hoveredIndex === index
                          ? slide.img?.[imageIndex] || slide.img?.[0]
                          : slide.img?.[0]
                      }
                      loading="lazy"
                      alt={slide.title}
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
                      justifyContent: "flex-end",
                      position: "relative",
                      height: "24rem",
                      width: "25rem",
                      left: "0.5rem",
                    }}
                  >
                    <span className="mediaCardContextContainer">
                      <span className="mediaCardContextTextBox">
                        <Typography level="title-lg" textColor="#fff">
                          <Link
                            href={slide.location}
                            target="_blank"
                            rel="noopener"
                          >
                            {slide.label}
                          </Link>
                        </Typography>
                        <Typography textColor="neutral.300">
                          {slide.title}
                        </Typography>
                      </span>
                      <IconButton
                        variant="solid"
                        color="primary"
                        sx={{
                          width: "3rem",
                          height: "3rem",
                          borderRadius: "4rem",
                        }}
                      >
                        <ArrowForwardRoundedIcon sx={{ fontSize: "2.2rem" }} />
                      </IconButton>
                    </span>
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </div>
        </div>
        <div className="rightSliderButton">
          <IconButton
            sx={{
              backgroundColor: "rgba(217, 217, 217, 0.39);",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
            }}
            onClick={handleNext}
          >
            <ArrowForwardIosRoundedIcon
              style={{ fontSize: 32, color: "#333" }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default ForeignToursMedia