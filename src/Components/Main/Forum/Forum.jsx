import React from "react";
import "./Forum.css";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import IconButton from "@mui/joy/IconButton";
import CloseRounded from "@mui/icons-material/CloseRounded";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Autocomplete from "@mui/joy/Autocomplete";
import Lottie from "lottie-react";
import IconLoading from "../../../assets/Loading/IconLoading.json";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { forumsData } from "./forumsData.jsx";
import Logo from "../../Header/Logo/Logo.jsx";
import Button from '@mui/joy/Button';

function Forum() {
  const [value, setValue] = React.useState("");
  const action = React.useRef(null);

  const filteredForumCards = forumsData.filter((card) => {
    const id = parseInt(card.id, 10);
    return id >= 1 && id <= 4;
  });

  return (
    <div className="forumContainer">
      <div className="forumSearchBox">
        <div className="categorySelect">
          <Select
            action={action}
            value={value}
            placeholder="All categories"
            indicator={value === null ? <KeyboardArrowDown /> : null}
            sx={{
              backgroundColor: "transparent",
              border: "none",
              color: "#ffffff",
              boxShadow: "none",
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
              [`& .${selectClasses.placeholder}`]: {
                opacity: 1,
                color: "#ffffff",
              },
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&:focus-within": {
                backgroundColor: "transparent",
              },
              "&.Mui-selected": {
                backgroundColor: "transparent",
              },
            }}
            onChange={(event, newValue) => setValue(newValue)}
            {...(value && {
              endDecorator: (
                <IconButton
                  size="sm"
                  variant="plain"
                  color="neutral"
                  onMouseDown={(event) => {
                    event.stopPropagation();
                  }}
                  onClick={() => {
                    setValue(null);
                    action.current?.focusVisible();
                  }}
                >
                  <CloseRounded />
                </IconButton>
              ),
            })}
          >
            <Option value="foreing tour">Foreign tours</Option>
            <Option value="local tour">Local tours</Option>
            <Option value="üorld tour">World tours</Option>
            <Option value="transport">Transports</Option>
            <Option value="hotel">Hotels</Option>
          </Select>
        </div>
        <div className="searchInput">
          <Autocomplete
            placeholder="Search anything"
            type="search"
            freeSolo
            disableClearable
            options={[...new Set(forumsData.flatMap((option) => option.tags))]}
            sx={{ width: "48vw" }}
          />
        </div>
        <div className="searchRightSide">
          <Lottie
            animationData={IconLoading}
            loop={true}
            autoplay={true}
            style={{ width: 50, height: 50, backgroundColor: "#0123FF" }}
          />
          <p>Follow-up questions</p>
        </div>
      </div>
      <div className="forumHeadingBox">
        <h1>Featured Topics</h1>
      </div>
      <div className="forumCardsBox">
        {filteredForumCards.map((card) => (
        <Card sx={{width: "42.2vw", minWidth: "300px", backgroundColor: "transparent", border: "none", "&:hover": {backgroundColor: "#a3cbffff", cursor: "pointer"}}} key={card.id}>
          <CardContent>
            <Typography level="title-md" sx={{fontSize: "30px", fontWeight: "bold",}}>{card.label}</Typography>
            <Typography sx={{textAlign: "justify", width: "100%", fontSize: "22px"}}>{card.title.length > 190 ? card.title.slice(0, 190) + "..." : card.title}</Typography>
          </CardContent>
          <CardContent>
            <div className="forumCardFooter">
              <div className="forumCardAuthor">
                <Logo />
                <div className="topicAuthorBox">
                <p className="topicAuthor">{card.author}</p>
                </div>
                <p className="topicDate">{card.date}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        ))}
      </div>
      <div className="forumMoreButton"><Button sx={{width: "12vw", height: "4.3rem", marginBottom: "1rem", borderRadius: "3rem", fontSize: "32px", fontWeight: "100"}}>More<svg style={{marginLeft: "0.5rem"}} xmlns="http://www.w3.org/2000/svg" width="21" height="11" viewBox="0 0 21 11" fill="none">
<path d="M18.8655 0L20.5 1.63598L11.5918 10.5468C11.449 10.6904 11.2793 10.8044 11.0923 10.8822C10.9053 10.96 10.7048 11 10.5023 11C10.2998 11 10.0993 10.96 9.91233 10.8822C9.72536 10.8044 9.55562 10.6904 9.41288 10.5468L0.5 1.63598L2.13454 0.00154209L10.5 8.36493L18.8655 0Z" fill="#FDFBF8"/>
</svg></Button></div>
    </div>
  );
}

export default Forum;
