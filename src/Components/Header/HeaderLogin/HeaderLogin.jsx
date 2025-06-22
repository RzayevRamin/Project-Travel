import React, { useState } from "react";
import "./HeaderLogin.css";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";
import ProfileDropdown from "../ProfileDropDown/ProfileDropDown";

function HeaderLogin() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!currentUser) {
    return (
      <div className="headerLoginContainer">
        <Button onClick={() => navigate("/login")} className="headerLoginButton">
          Login
        </Button>
      </div>
    );
  }

  return (
    <div
      className="headerLoginContainer"
      style={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      {currentUser.photoURL ? (
        <img
          src={currentUser.photoURL}
          alt="Profile"
          onClick={() => setDropdownOpen((prev) => !prev)}
          style={{
            width: 35,
            height: 35,
            borderRadius: "50%",
            cursor: "pointer",
            objectFit: "cover",
            userSelect: "none",
          }}
          title="Profile & Logout"
        />
      ) : (
        <p
          onClick={() => setDropdownOpen((prev) => !prev)}
          style={{ cursor: "pointer", userSelect: "none", marginRight: 10 }}
          title="Profile & Logout"
        >
          {currentUser.email}
        </p>
      )}

      {dropdownOpen && <ProfileDropdown onClose={() => setDropdownOpen(false)} />}
    </div>
  );
}

export default HeaderLogin;