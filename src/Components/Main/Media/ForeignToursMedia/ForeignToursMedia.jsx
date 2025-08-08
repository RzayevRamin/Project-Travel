import React, { useRef, useState, useEffect } from "react";
import "./ForeignToursMedia.css";
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
    if (hoveredIndex !== null && filteredCards[hoveredIndex]?.img?.length > 1) {
      const interval = setInterval(() => {
        setImageIndex(
          (prev) => (prev + 1) % filteredCards[hoveredIndex].img.length
        );
      }, 600);
      return () => clearInterval(interval);
    }
  }, [hoveredIndex, filteredCards]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        bottomSlider.current?.slickGoTo(0, true);
        setTimeout(() => {
          bottomSlider.current?.slickNext();
        }, 0);
      } else if (width < 1200) {
        bottomSlider.current?.slickGoTo(1, true);
        setTimeout(() => {
          bottomSlider.current?.slickNext();
          bottomSlider.current?.slickNext();
        }, 0);
      } else {
        bottomSlider.current?.slickGoTo(3, true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const bottomSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="foreignToursMediaContainer">
      <div className="foreignToursMediaHeadingBox">
        <h1>Media from foreign tours</h1>
      </div>

      <div className="foreignToursMediaCardsBox">
        <div className="leftSliderButton">
          <IconButton
            sx={{
              backgroundColor: "rgba(217, 217, 217, 0.39);",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              zIndex: "9999",
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
                className="topSliderCard"
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
                    padding: 0,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                    transform:
                      hoveredIndex === null
                        ? "scale(1)"
                        : hoveredIndex === index
                        ? "scale(1.08)"
                        : "scale(0.95)",
                    transition: "transform 0.3s ease",
                    zIndex: hoveredIndex === index ? 5 : 1,
                    clipPath:
                      hoveredIndex === index
                        ? "inset(-10% -10% -10% -10%)"
                        : "none",
                  }}
                >
                  <CardCover className="imgCover">
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
                  <CardContent className="mediaTopCardContentContainer"
                    sx={{
                      position: "relative",
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
                          borderRadius: "50%",
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
                className="bottomSliderCard"
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
                    padding: 0,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                    transform:
                      hoveredIndex === null
                        ? "scale(1)"
                        : hoveredIndex === index
                        ? "scale(1.08)"
                        : "scale(0.92)",
                    transition: "transform 0.3s ease",
                    zIndex: hoveredIndex === index ? 2 : 1,
                  }}
                >
                  <CardCover className="imgCover">
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
                  className="mediaBottomCardContentContainer"
                    sx={{
                      justifyContent: "flex-end",
                      position: "relative",
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
                      </span>
                      <IconButton
                        variant="solid"
                        color="primary"
                        sx={{
                          width: "3rem",
                          height: "3rem",
                          borderRadius: "50%",
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
              zIndex: "9999",
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
  );
}

export default ForeignToursMedia;
