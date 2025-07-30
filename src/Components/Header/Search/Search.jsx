import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import "./Search.css";

function Search() {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");
  const handleClear = () => setQuery("");
  

  return (
    <div
      className="searchContainer"
      onMouseEnter={() => setShowInput(true)}
      onMouseLeave={() => setShowInput(false)}
      style={{ display: "flex", alignItems: "center", position: "relative" }}
    >
      <Button className="searchButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="22"
          viewBox="0 0 20 22"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.49928 0.0930023C7.14387 0.0931178 5.80814 0.417367 4.60353 1.0387C3.39893 1.66003 2.36037 2.56042 1.57451 3.66476C0.788656 4.76909 0.278287 6.04535 0.0859852 7.38705C-0.106316 8.72874 0.0250263 10.097 0.469055 11.3776C0.913084 12.6582 1.65692 13.8141 2.63851 14.7487C3.6201 15.6834 4.81098 16.3698 6.11179 16.7506C7.4126 17.1314 8.78562 17.1957 10.1163 16.9379C11.447 16.6802 12.6967 16.108 13.7613 15.269L17.4133 18.921C17.6019 19.1032 17.8545 19.204 18.1167 19.2017C18.3789 19.1994 18.6297 19.0942 18.8151 18.9088C19.0005 18.7234 19.1057 18.4726 19.108 18.2104C19.1102 17.9482 19.0094 17.6956 18.8273 17.507L15.1753 13.855C16.1633 12.6016 16.7784 11.0954 16.9504 9.50873C17.1223 7.92205 16.8441 6.31902 16.1475 4.8831C15.4509 3.44717 14.3642 2.23636 13.0116 1.38923C11.659 0.542109 10.0952 0.0928952 8.49928 0.0930023ZM1.99928 8.593C1.99928 6.86909 2.6841 5.21579 3.90308 3.99681C5.12207 2.77782 6.77537 2.093 8.49928 2.093C10.2232 2.093 11.8765 2.77782 13.0955 3.99681C14.3145 5.21579 14.9993 6.86909 14.9993 8.593C14.9993 10.3169 14.3145 11.9702 13.0955 13.1892C11.8765 14.4082 10.2232 15.093 8.49928 15.093C6.77537 15.093 5.12207 14.4082 3.90308 13.1892C2.6841 11.9702 1.99928 10.3169 1.99928 8.593Z"
          />
        </svg>
      </Button>
      {showInput && (
        <form
          className="searchInputForm"
          style={{ display: "flex", alignItems: "center", }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            className="searchInput"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            autoFocus
            startDecorator={<SearchIcon />}
            endDecorator={
              <>
                {query && (
                  <IconButton onClick={handleClear} size="small">
                    <ClearIcon />
                  </IconButton>
                )}
              </>
            }
          />
        </form>
      )}
    </div>
  );
}

export default Search;
