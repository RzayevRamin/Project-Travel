import React, {useState , useEffect} from "react";
import "./UserPanelInfoBox.css";
import EmptyBackground from "../../../../assets/ProfileBackground/EmptyBackground.jpg";
import DefaultAvatar from "../../../../assets/ProfilePic/DefaultProfilePic.jpg";
import Button from "@mui/joy/IconButton";
import { useAuth } from "../../../AuthContext/AuthContext";

function UserPanelInfoBox() {

 const { currentUser } = useAuth();

  const [name, setName] = useState("");

  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  useEffect(() => {
      if (currentUser?.displayName) {
        const parts = currentUser.displayName.trim().split(/\s+/);
        setName(parts[0] || "");
        setLastName(parts[1] || "");
      }
    }, [currentUser]);

  useEffect(() => {
    if (currentUser?.email) {
      setEmail(currentUser.email || "" );
  }
},
  );

  return (
    <div className="userPanelInfoBox">
      <div className="userPanelInfoBackground">
        <img src={EmptyBackground} alt="Empty background" />
      </div>
      <div className="userPanelInfo">
        <div className="userPanelAvatarAndInfo">
          <div className="userPanelAvatar">
            <img src={DefaultAvatar} alt="Avatar" />
          </div>
          <div className="userPanelUserInfo">
            <h2 className="userPaneUserName">{name + " " + lastName}</h2>
            <h3 className="userPanelEmail">{email}</h3>
          </div>
        </div>
        <Button
          className="userPanelProfileEditButton"
          sx={{
            backgroundColor: "rgba(103, 102, 102, 0.45);",
            borderRadius: "50%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
          >
            <path
              d="M9.77704 2.88888L14.187 7.28688M0.790039 19.2499H17.21M1.14404 14.7349L1.63704 11.3099C1.66356 11.0861 1.76716 10.8786 1.93004 10.7229L11.595 1.05888C11.7193 0.9322 11.8741 0.839764 12.0446 0.790532C12.2151 0.7413 12.3954 0.736942 12.568 0.77788C13.4597 1.0146 14.2705 1.48877 14.914 2.14988C15.5795 2.79195 16.0579 3.60287 16.298 4.49588C16.3351 4.66874 16.3287 4.84808 16.2795 5.01787C16.2303 5.18766 16.1398 5.34261 16.016 5.46888L6.35204 15.1329C6.18542 15.2868 5.97766 15.3889 5.75404 15.4269L2.31704 15.9189C2.15694 15.9405 1.99401 15.9247 1.84106 15.8727C1.68812 15.8206 1.54934 15.7338 1.43564 15.619C1.32194 15.5043 1.23642 15.3647 1.18582 15.2113C1.13523 15.0578 1.12092 14.8948 1.14404 14.7349Z"
              stroke="#FDFBF8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default UserPanelInfoBox;
