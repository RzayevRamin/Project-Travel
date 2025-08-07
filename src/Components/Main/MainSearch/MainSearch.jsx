import React, { useState , useEffect } from "react";
import "./MainSearch.css";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Autocomplete from '@mui/joy/Autocomplete';
import CircularProgress from '@mui/joy/CircularProgress';
import { cardsData } from "../../Cards/cardsData";
import Input from '@mui/joy/Input';



function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="customArrow nextArrow" onClick={onClick}>
      <KeyboardArrowRightIcon style={{ fontSize: 32, color: "#333" }} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="customArrow prevArrow" onClick={onClick}>
      <KeyboardArrowLeftIcon style={{ fontSize: 32, color: "#333" }} />
    </div>
  );
}

function MainSearch() {

    const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        setOptions([...new Set(cardsData.flatMap((option) => option.title))]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const [liked, setLiked] = useState({});
  
    const [selectedCardsByIds, setSelectedCardsByIds] = useState([]);
  
    useEffect(() => {
      const favoriteIds =
        JSON.parse(localStorage.getItem("selectedCardsByIds")) || [];
      const filteredFavorites = cardsData.filter((card) =>
        favoriteIds.includes(card.id)
      );
      setSelectedCardsByIds(filteredFavorites);
    }, []);
  
    useEffect(() => {
      const favorite =
        JSON.parse(localStorage.getItem("selectedCardsByIds")) || [];
      const likedMap = {};
      favorite.forEach((id) => {
        likedMap[id] = true;
      });
      setLiked(likedMap);
    }, []);
  
    const toggleLike = (id) => {
      const updatedLiked = { ...liked, [id]: !liked[id] };
      setLiked(updatedLiked);
  
      let favorite = JSON.parse(localStorage.getItem("selectedCardsByIds")) || [];
  
      if (updatedLiked[id]) {
        if (!favorite.includes(id)) {
          favorite.push(id);
        }
      } else {
        favorite = favorite.filter((favId) => favId !== id);
      }
  
      localStorage.setItem("selectedCardsByIds", JSON.stringify(favorite));
  
      const filteredFavorites = cardsData.filter((card) =>
        favorite.includes(card.id)
      );
      setSelectedCardsByIds(filteredFavorites);
    };
  
    const sliderSettings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 4,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };


  return (
    <div className="mainSearchContainer">
      <div className="searchBarContainer">
        <div className="searchCategoryBox">
          <h2>Category</h2>
          <Select placeholder="Choose one…" variant="outlined">
            <Option value="foreign">Foreign Tours</Option>
            <Option value="domestic">Domestic Tours</Option>
            <Option value="world">World Tours</Option>
            <Option value="totels">Hotels</Option>
            <Option value="transports">Transports</Option>
            <Option value="media">Media</Option>
          </Select>
        </div>
        <div className="mainSearchInputBox">
            <h2>Search</h2>
            <Autocomplete
        sx={{ width: 300 }}
        placeholder="Asynchronous"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={options}
        loading={loading}
        endDecorator={
          loading ? (
            <CircularProgress size="sm" sx={{ bgcolor: 'background.surface' }} />
          ) : null
        }
      />
        </div>
        <div className="searchPriceBox">
            <h2>Price</h2>
            <div className="priceInputsBox">
                <Input
        type="number"
        placeholder="Min."
        slotProps={{
          input: {
            step: 0.1,
          },
        }}
      />
      <Input
        type="number"
        placeholder="Max."
        slotProps={{
          input: {
            step: 0.1,
          },
        }}
      />
            </div>
        </div>
        <div className="mainSearchButtonBox"></div>
      </div>
      <div className="mainSearchCardsContainer">
        {selectedCardsByIds.length < 5 ? (
          <div className="cardsWrapper">
            {selectedCardsByIds.map((card) => (
              <div key={card.id} className="favCardContainer minorCardsFavBox">
                <Card
                  key={card.id}
                  className="favCard"
                  variant="outlined"
                  sx={{ width: 320, bgcolor: "#F1FAFA" }}
                >
                  <CardOverflow sx={{ bgcolor: "#F1FAFA" }}>
                    <AspectRatio ratio="1.5">
                      <img src={card.img} loading="lazy" alt={card.title} />
                    </AspectRatio>
                    <IconButton
                      className="likeButton"
                      aria-label="Like minimal photography"
                      size="md"
                      variant="solid"
                      onClick={() => toggleLike(card.id)}
                      sx={{
                        position: "absolute",
                        zIndex: 2,
                        borderRadius: "50%",
                        right: "0.5rem",
                        top: "0.5rem",
                        backgroundColor: "rgba(255, 255, 255, 0.71)",
                        color: "#F60909",
                      }}
                    >
                      {liked[card.id] ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                  </CardOverflow>
                  <CardContent
                    className="cardContent"
                    sx={{ bgcolor: "#F1FAFA" }}
                  >
                    <div className="cardContentContainer">
                      <div className="cardContentBox">
                        <div className="textBox">
                          <Typography level="body-sm">
                            <Link
                              href="#multiple-actions"
                              overlay
                              underline="none"
                            >
                              {card.title}
                            </Link>
                          </Typography>
                          <Typography level="title-md">
                            <div className="locationHoverWrapper">
                              <Link
                                className="favCardNameLabel"
                                href={card.location}
                                target="_blank"
                                rel="noopener"
                              >
                                {card.cardLabel}
                              </Link>
                            </div>
                          </Typography>
                        </div>
                        <div className="rateIconBox">
                          <Box>4.5</Box>
                          <StarIcon style={{ color: "#E7E300" }} />
                        </div>
                      </div>
                      <div className="cardButtonBox">
                        <Button variant="contained" className="cardButton">
                          Explore more
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardOverflow variant="soft" sx={{ bgcolor: "#F1FAFA" }}>
                    <Divider inset="context" />
                    <CardContent
                      orientation="horizontal"
                      className="cardContentFooter"
                    >
                      <Typography level="body-xs">{card.views}</Typography>
                      <Typography level="body-xs">{card.time}</Typography>
                    </CardContent>
                  </CardOverflow>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <Slider className="favSlider" {...sliderSettings}>
            {selectedCardsByIds.map((card) => (
              <div key={card.id} className="favCardContainer majorCardsFavBox">
                <Card
                  key={card.id}
                  className="favCard"
                  variant="outlined"
                  sx={{ width: 320, bgcolor: "#F1FAFA" }}
                >
                  <CardOverflow sx={{ bgcolor: "#F1FAFA" }}>
                    <AspectRatio ratio="1.5">
                      <img src={card.img} loading="lazy" alt={card.title} />
                    </AspectRatio>
                    <IconButton
                      className="likeButton"
                      aria-label="Like minimal photography"
                      size="md"
                      variant="solid"
                      onClick={() => toggleLike(card.id)}
                      sx={{
                        position: "absolute",
                        zIndex: 2,
                        borderRadius: "50%",
                        right: "0.5rem",
                        top: "0.5rem",
                        backgroundColor: "rgba(255, 255, 255, 0.71)",
                        color: "#F60909",
                      }}
                    >
                      {liked[card.id] ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                  </CardOverflow>
                  <CardContent
                    className="cardContent"
                    sx={{ bgcolor: "#F1FAFA" }}
                  >
                    <div className="cardContentContainer">
                      <div className="cardContentBox">
                        <div className="textBox">
                          <Typography level="body-sm">
                            <Link
                              href="#multiple-actions"
                              overlay
                              underline="none"
                            >
                              {card.title}
                            </Link>
                          </Typography>
                          <Typography level="title-md">
                            <div className="locationHoverWrapper">
                              <Link
                                className="favCardNameLabel"
                                href={card.location}
                                target="_blank"
                                rel="noopener"
                              >
                                {card.cardLabel}
                              </Link>
                            </div>
                          </Typography>
                        </div>
                        <div className="rateIconBox">
                          <Box>4.5</Box>
                          <StarIcon style={{ color: "#E7E300" }} />
                        </div>
                      </div>
                      <div className="cardButtonBox">
                        <Button variant="contained" className="cardButton">
                          Explore more
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardOverflow variant="soft" sx={{ bgcolor: "#F1FAFA" }}>
                    <Divider inset="context" />
                    <CardContent
                      orientation="horizontal"
                      className="cardContentFooter"
                    >
                      <Typography level="body-xs">{card.views}</Typography>
                      <Typography level="body-xs">{card.time}</Typography>
                    </CardContent>
                  </CardOverflow>
                </Card>
              </div>
            ))}
          </Slider>
        )}
      </div>
      <div className="searchMoreButtonBox">
        <Button
          className="forumMoreButton"
          sx={{ marginBottom: "1rem", fontWeight: "100" }}
        >
          More
          <svg
            style={{ marginLeft: "0.5vw" }}
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="11"
            viewBox="0 0 21 11"
            fill="none"
          >
            <path
              d="M18.8655 0L20.5 1.63598L11.5918 10.5468C11.449 10.6904 11.2793 10.8044 11.0923 10.8822C10.9053 10.96 10.7048 11 10.5023 11C10.2998 11 10.0993 10.96 9.91233 10.8822C9.72536 10.8044 9.55562 10.6904 9.41288 10.5468L0.5 1.63598L2.13454 0.00154209L10.5 8.36493L18.8655 0Z"
              fill="#FDFBF8"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default MainSearch;
