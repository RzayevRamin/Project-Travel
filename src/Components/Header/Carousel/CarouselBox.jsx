import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./CarouselBox.css";
import russiaImg from "../../../assets/Carousel/Russia.png";
import oldTownImg from "../../../assets/Carousel/OldTown.png";
import dubaiImg from "../../../assets/Carousel/Dubai.png";
import georgiaImg from "../../../assets/Carousel/Georgia.png";
import turkeyImg from "../../../assets/Carousel/Turkey.png";
import italyImg from "../../../assets/Carousel/Italy.png";
import franceImg from "../../../assets/Carousel/France.png";
import spainImg from "../../../assets/Carousel/Spain.png";
import gakhImg from "../../../assets/Carousel/Gakh.png";
import Button from "@mui/joy/Button";

function CarouselBox() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={6000}
        showIndicators={true}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        animation="slide"
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        navButtonsProps={{
          style: {
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "50%",
            margin: "0 10px",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            color: "#000",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#f50057",
          },
        }}
      >
        <div>
          <img src={russiaImg} alt="Russia" />
          <div className="carouselCaption">
            <p>
              An impressive journey to Russia, filled with imperial luxury, rich
              history, magnificent architecture, and deep layers of culture
            </p>
            <Button
              sx={{
                background: "#057DD4 !important",
                color: "#fff !important",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": {
                  background: "#045fa3 !important",
                },
                borderRadius: "16px",
              }}
              className="carouselButton"
            >
              More
            </Button>
          </div>
        </div>
        <div>
          <img src={oldTownImg} alt="OldTown" />
          <div className="carouselCaption">
            <p>
              A unique tour of Icheri Sheher, filled with narrow streets
              breathing history between ancient fortress walls, architecture
              reminiscent of oriental fairy tales, and cultural heritage
            </p>
            <Button
              sx={{
                background: "#057DD4 !important",
                color: "#fff !important",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": {
                  background: "#045fa3 !important",
                },
                borderRadius: "16px",
              }}
              className="carouselButton"
            >
              More
            </Button>
          </div>
        </div>
        <div>
          <img src={dubaiImg} alt="Dubai" />
          <div className="carouselCaption">
            <p>
              A Dubai tour that combines the beauty of the endless desert, the
              magnificent modern city, entertainment, and grandeur
            </p>
            <Button
              sx={{
                background: "#057DD4 !important",
                color: "#fff !important",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": {
                  background: "#045fa3 !important",
                },
                borderRadius: "16px",
              }}
              className="carouselButton"
            >
              More
            </Button>
          </div>
        </div>
        <div>
          <img src={georgiaImg} alt="Georgia" />
          <div className="carouselCaption">
            <p>Georgia tour, distinguished by its mysterious nature</p>
            <Button
              sx={{
                background: "#057DD4 !important",
                color: "#fff !important",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": {
                  background: "#045fa3 !important",
                },
                borderRadius: "16px",
              }}
              className="carouselButton"
            >
              More
            </Button>
          </div>
        </div>
        <div>
          <img src={turkeyImg} alt="Turkey" />
          <div className="carouselCaption">
            <p>
              A unique Turkey tour with historic rock houses, magnificent
              natural landscapes and hot air balloons
            </p>
            <Button
              sx={{
                background: "#057DD4 !important",
                color: "#fff !important",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": {
                  background: "#045fa3 !important",
                },
                borderRadius: "16px",
              }}
              className="carouselButton"
            >
              More
            </Button>
          </div>
        </div>
        <div>
          <img src={italyImg} alt="Italy" />
          <div className="carouselCaption">
            <p>
              Images from a tour of Italy, which combines ancient Roman, Gothic,
              Renaissance, Baroque and other architectural styles
            </p>
            <Button
              sx={{
                background: "#057DD4 !important",
                color: "#fff !important",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": {
                  background: "#045fa3 !important",
                },
                borderRadius: "16px",
              }}
              className="carouselButton"
            >
              More
            </Button>
          </div>
        </div>
        <div>
          <img src={franceImg} alt="France" />
          <div className="carouselCaption">
            <p>Love tour on france</p>
            <Button
              sx={{
                background: "#057DD4 !important",
                color: "#fff !important",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": {
                  background: "#045fa3 !important",
                },
                borderRadius: "16px",
              }}
              className="carouselButton"
            >
              More
            </Button>
          </div>
        </div>
        <div>
          <img src={spainImg} alt="Spain" />
          <div className="carouselCaption">
            <p>
              To Spain — an unforgettable adventure full of colorful culture,
              historic cities, delicious flavors, and sunny beaches
            </p>
            <Button
              sx={{
                background: "#057DD4 !important",
                color: "#fff !important",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": {
                  background: "#045fa3 !important",
                },
                borderRadius: "16px",
              }}
              className="carouselButton"
            >
              More
            </Button>
          </div>
        </div>
        <div>
          <img src={gakhImg} alt="Gakh" />
          <div className="carouselCaption">
            <p>Feel the beauty of nature in Gakh</p>
            <Button
              sx={{
                background: "#057DD4 !important",
                color: "#fff !important",
                fontWeight: "bold",
                cursor: "pointer",
                "&:hover": {
                  background: "#045fa3 !important",
                },
                borderRadius: "16px",
              }}
              className="carouselButton"
            >
              More
            </Button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselBox;
