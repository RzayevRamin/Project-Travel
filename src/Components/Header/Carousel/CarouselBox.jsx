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
import SearchDestination from "../SearchDestination/SearchDestination";

function CarouselBox() {
  return (
    <div className="carouselBox">
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
          <div className="carouselContent">
            <div className="searchDestinationBox">
              <SearchDestination />
            </div>
            <div className="carouselCaption">
              <p><span>An impressive journey to Russia, filled with imperial luxury,
                rich history, magnificent architecture . . .</span>
                <Button
                sx={{
                  background: "transparent",
                  color: "#0123FF",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  height: "18px",
                  padding: "0 0.3rem !important",
                  "&:hover": {
                    background: "#0123FF !important",
                    color: "#fff !important",
                  },
                  borderTopRightRadius: "0.5rem !important",
                  borderBottomRightRadius: "0.5rem !important",
                  borderTopLeftRadius: "0.2rem !important",
                  borderBottomLeftRadius: "0.2rem !important",
                }}
                className="carouselButton"
              >
                More about Russia
              </Button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={oldTownImg} alt="OldTown" />
          <div className="carouselContent">
            <div className="searchDestinationBox">
              <SearchDestination />
            </div>
            <div className="carouselCaption">
              <p><span>A unique tour of Icheri Sheher, filled with narrow streets
                breathing history between ancient walls . . .</span>
                <Button
                sx={{
                  background: "transparent",
                  color: "#0123FF",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  height: "18px",
                  padding: "0 0.3rem !important",
                  "&:hover": {
                    background: "#0123FF !important",
                    color: "#fff !important",
                  },
                  borderTopRightRadius: "0.5rem !important",
                  borderBottomRightRadius: "0.5rem !important",
                  borderTopLeftRadius: "0.2rem !important",
                  borderBottomLeftRadius: "0.2rem !important",
                }}
                className="carouselButton oldTownButton"
              >
                More about Icheri Sheher
              </Button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={dubaiImg} alt="Dubai" />
          <div className="carouselContent">
            <div className="searchDestinationBox">
              <SearchDestination />
            </div>
            <div className="carouselCaption">
              <p><span>A Dubai tour that combines the beauty of the endless desert, entertainment, and grandeur . . .</span>
                <Button
                sx={{
                  background: "transparent",
                  color: "#0123FF",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  height: "18px",
                  padding: "0 0.3rem !important",
                  "&:hover": {
                    background: "#0123FF !important",
                    color: "#fff !important",
                  },
                  borderTopRightRadius: "0.5rem !important",
                  borderBottomRightRadius: "0.5rem !important",
                  borderTopLeftRadius: "0.2rem !important",
                  borderBottomLeftRadius: "0.2rem !important",
                }}
                className="carouselButton"
              >
                More about Dubai
              </Button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={georgiaImg} alt="Georgia" />
          <div className="carouselContent">
            <div className="searchDestinationBox">
              <SearchDestination />
            </div>
            <div className="carouselCaption">
              <p><span>Georgia tour, distinguished by its mysterious nature . . .</span>
                <Button
                sx={{
                  background: "transparent",
                  color: "#0123FF",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  height: "18px",
                  padding: "0 0.3rem !important",
                  "&:hover": {
                    background: "#0123FF !important",
                    color: "#fff !important",
                  },
                  borderTopRightRadius: "0.5rem !important",
                  borderBottomRightRadius: "0.5rem !important",
                  borderTopLeftRadius: "0.2rem !important",
                  borderBottomLeftRadius: "0.2rem !important",
                }}
                className="carouselButton"
              >
                More about Georgia
              </Button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={turkeyImg} alt="Turkey" />
          <div className="carouselContent">
            <div className="searchDestinationBox">
              <SearchDestination />
            </div>
            <div className="carouselCaption">
              <p><span>A unique Turkey tour with historic rock houses, magnificent
                natural landscapes and hot air balloons . . .</span>
                <Button
                sx={{
                  background: "transparent",
                  color: "#0123FF",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  height: "18px",
                  padding: "0 0.3rem !important",
                  "&:hover": {
                    background: "#0123FF !important",
                    color: "#fff !important",
                  },
                  borderTopRightRadius: "0.5rem !important",
                  borderBottomRightRadius: "0.5rem !important",
                  borderTopLeftRadius: "0.2rem !important",
                  borderBottomLeftRadius: "0.2rem !important",
                }}
                className="carouselButton"
              >
                More about Turkey
              </Button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={italyImg} alt="Italy" />
          <div className="carouselContent">
            <div className="searchDestinationBox">
              <SearchDestination />
            </div>
            <div className="carouselCaption">
              <p><span>Images from a tour of Italy, which combines many architectural styles . . .</span>
                <Button
                sx={{
                  background: "transparent",
                  color: "#0123FF",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  height: "18px",
                  padding: "0 0.3rem !important",
                  "&:hover": {
                    background: "#0123FF !important",
                    color: "#fff !important",
                  },
                  borderTopRightRadius: "0.5rem !important",
                  borderBottomRightRadius: "0.5rem !important",
                  borderTopLeftRadius: "0.2rem !important",
                  borderBottomLeftRadius: "0.2rem !important",
                }}
                className="carouselButton"
              >
                More about Italy
              </Button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={franceImg} alt="France" />
          <div className="carouselContent">
            <div className="searchDestinationBox">
              <SearchDestination />
            </div>
            <div className="carouselCaption">
              <p><span>Love tour on france . . .</span>
                <Button
                sx={{
                  background: "transparent",
                  color: "#0123FF",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  height: "18px",
                  padding: "0 0.3rem !important",
                  "&:hover": {
                    background: "#0123FF !important",
                    color: "#fff !important",
                  },
                  borderTopRightRadius: "0.5rem !important",
                  borderBottomRightRadius: "0.5rem !important",
                  borderTopLeftRadius: "0.2rem !important",
                  borderBottomLeftRadius: "0.2rem !important",
                }}
                className="carouselButton"
              >
                More about France
              </Button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={spainImg} alt="Spain" />
          <div className="carouselContent">
            <div className="searchDestinationBox">
              <SearchDestination />
            </div>
            <div className="carouselCaption">
              <p><span>To Spain — an unforgettable adventure full of colorful culture,
                delicious flavors, and sunny beaches . . .</span>
                <Button
                sx={{
                  background: "transparent",
                  color: "#0123FF",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  height: "18px",
                  padding: "0 0.3rem !important",
                  "&:hover": {
                    background: "#0123FF !important",
                    color: "#fff !important",
                  },
                  borderTopRightRadius: "0.5rem !important",
                  borderBottomRightRadius: "0.5rem !important",
                  borderTopLeftRadius: "0.2rem !important",
                  borderBottomLeftRadius: "0.2rem !important",
                }}
                className="carouselButton"
              >
                More about Spain
              </Button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={gakhImg} alt="Gakh" />
          <div className="carouselContent">
            <div className="searchDestinationBox">
              <SearchDestination />
            </div>
            <div className="carouselCaption">
              <p><span>Feel the beauty of nature in Gakh . . .</span>
                <Button
                sx={{
                  background: "transparent",
                  color: "#0123FF",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  height: "18px",
                  padding: "0 0.3rem !important",
                  "&:hover": {
                    background: "#0123FF !important",
                    color: "#fff !important",
                  },
                  borderTopRightRadius: "0.5rem !important",
                  borderBottomRightRadius: "0.5rem !important",
                  borderTopLeftRadius: "0.2rem !important",
                  borderBottomLeftRadius: "0.2rem !important",
                }}
                className="carouselButton"
              >
                More about Gakh
              </Button>
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselBox;
