import React from "react";
import "./HotelSearchByType.css";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import typeHotelImg from "../../../../assets/PlaceTypes/hotel.jpg";
import typeHotelOutImg from "../../../../assets/PlaceTypes/hotelOut.jpg";
import typeHostelImg from "../../../../assets/PlaceTypes/hostel.jpeg";
import typeHostelOutImg from "../../../../assets/PlaceTypes/hostelOut.jpg";
import typeMotelImg from "../../../../assets/PlaceTypes/motel.jpg";
import typeMotelOutImg from "../../../../assets/PlaceTypes/motelOut.jpg";
import typeVillaImg from "../../../../assets/PlaceTypes/villa.jpg";
import typeVillaOutImg from "../../../../assets/PlaceTypes/villaOut.jpg";
import typeAppartmentImg from "../../../../assets/PlaceTypes/appartment.jpg";
import typeAppartmentOutImg from "../../../../assets/PlaceTypes/appartmentOut.jpg";
import typeResidanseImg from "../../../../assets/PlaceTypes/residanse.jpg";
import typeResidanseOutImg from "../../../../assets/PlaceTypes/residenseOut.jpg";

function HotelSearchByType() {
  return (
    <div className="hotelsTypeSearchContainer">
      <h1>Search by type</h1>
      <div className="hotelTypesContainer">
        <div className="hotelTypesCardItem">
          <Card sx={{ height: "26rem", width: '36.4vw', padding: 0 }}>
            <CardCover>
                <img src={typeHotelOutImg} className="defaultImg" loading="lazy" alt="" />
                <img src={typeHotelImg} className="hoverImg" loading="lazy" alt="" />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: 'flex-end', margin: 0 }}>
              <Typography sx={{backgroundColor: 'rgba(253, 251, 248, 0.6)', margin: 0, width: '100%', height: "52px", display: "flex", alignItems: "center", justifyContent: "center",}} level="title-lg" textColor="#fff">
                Hotel
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="hotelTypesCardItem">
                      <Card sx={{ height: "26rem", width: "28.5vw", padding: 0 }}>
            <CardCover>
                <img src={typeHostelOutImg} className="defaultImg" loading="lazy" alt="" />
                <img src={typeHostelImg} className="hoverImg" loading="lazy" alt="" />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: 'flex-end', margin: 0 }}>
              <Typography sx={{backgroundColor: 'rgba(253, 251, 248, 0.6)', margin: 0, width: '100%', height: "52px", display: "flex", alignItems: "center", justifyContent: "center",}} level="title-lg" textColor="#fff">
                Hostel
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="hotelTypesCardItem">
                      <Card sx={{ height: "26rem", width: "20.8vw", padding: 0 }}>
            <CardCover>
                <img src={typeMotelOutImg} className="defaultImg" loading="lazy" alt="" />
                <img src={typeMotelImg} className="hoverImg" loading="lazy" alt="" />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: 'flex-end', margin: 0 }}>
              <Typography sx={{backgroundColor: 'rgba(253, 251, 248, 0.6)', margin: 0, width: '100%', height: "52px", display: "flex", alignItems: "center", justifyContent: "center",}} level="title-lg" textColor="#fff">
                Motel
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="hotelTypesCardItem">
                      <Card sx={{ height: "26rem", width: "20.8vw", padding: 0 }}>
            <CardCover>
                <img src={typeVillaOutImg} className="defaultImg" loading="lazy" alt="" />
                <img src={typeVillaImg} className="hoverImg" loading="lazy" alt="" />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: 'flex-end', margin: 0 }}>
              <Typography sx={{backgroundColor: 'rgba(253, 251, 248, 0.6)', margin: 0, width: '100%', height: "52px", display: "flex", alignItems: "center", justifyContent: "center",}} level="title-lg" textColor="#fff">
                Villa
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="hotelTypesCardItem">
                      <Card sx={{ height: "26rem", width: "28.5vw", padding: 0 }}>
            <CardCover>
                <img src={typeAppartmentOutImg} className="defaultImg" loading="lazy" alt="" />
                <img src={typeAppartmentImg} className="hoverImg" loading="lazy" alt="" />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: 'flex-end', margin: 0 }}>
              <Typography sx={{backgroundColor: 'rgba(253, 251, 248, 0.6)', margin: 0, width: '100%', height: "52px", display: "flex", alignItems: "center", justifyContent: "center",}} level="title-lg" textColor="#fff">
                Appartment
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="hotelTypesCardItem">
                      <Card sx={{ height: "26rem", width: '36.4vw', padding: 0 }}>
            <CardCover>
                <img src={typeResidanseOutImg} className="defaultImg" loading="lazy" alt="" />
                <img src={typeResidanseImg} className="hoverImg" loading="lazy" alt="" />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: 'flex-end', margin: 0 }}>
              <Typography sx={{backgroundColor: 'rgba(253, 251, 248, 0.6)', margin: 0, width: '100%', height: "52px", display: "flex", alignItems: "center", justifyContent: "center",}} level="title-lg" textColor="#fff">
                Residanse
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HotelSearchByType;
