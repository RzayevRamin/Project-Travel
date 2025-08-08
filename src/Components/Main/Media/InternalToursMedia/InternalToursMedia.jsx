import React, { useRef, useState, useEffect } from "react";
import "./InternalToursMedia.css";
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

function InternalToursMedia() {
  const topSlider = useRef(null);
  const bottomSlider = useRef(null);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const filteredCards = cardsData.filter((card) => {
    const id = parseInt(card.id, 10);
    return id >= 121 && id <= 130;
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
    <div className="internalToursMediaContainer">
      <div className="internalToursMediaHeadingBox">
        <h1>Media from internal tours</h1>
      </div>

      <div className="internalToursMediaCardsBox">
        <div className="leftSliderButton">
          <IconButton
            className="doubleSliderLeftButton"
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
                    className="mediaTopCardContentContainer"
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
                        className="doubleSliderCardButton"
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
                      position: "relative",
                    }}
                  >
                    <span className="mediaCardContextContainer">
                      <span className="bottomMediaCardContextTextBox">
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
                        className="doubleSliderCardButton"
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
            className="doubleSliderRightButton"
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
  );
}

export default InternalToursMedia;
