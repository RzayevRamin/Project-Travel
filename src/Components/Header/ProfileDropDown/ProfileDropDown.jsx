import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-config";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ReactDOM from "react-dom";
import Slide from "@mui/material/Slide";

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

function ProfileDropdown({ onClose }) {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success");

  const showSnackbar = (message, type = "success") => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setOpenSnackbar(true);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleLogout = async () => {
    try {
      await
      showSnackbar("You are logged out.", "success");
      setTimeout(() => {
        setOpenSnackbar(false);
        signOut(auth);
        navigate("/");
      }, 2000);
    } catch (error) {
      showSnackbar(`Logout error: ${error.message}`, "error");
    }
  };

  return (
    <div
      ref={dropdownRef}
      style={{
        position: "absolute",
        top: "45px",
        right: 0,
        background: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: 4,
        zIndex: 1000,
        width: 150,
      }}
    >
      <button
        onClick={() => {
          onClose();
          navigate("/userpanel");
        }}
        style={{
          width: "100%",
          padding: "10px",
          border: "none",
          background: "none",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        User Panel
      </button>

      <hr style={{ margin: 0 }} />
      <button
        onClick={() => {
          onClose();
          navigate("/userpanel/favorites");
        }}
        style={{
          width: "100%",
          padding: "10px",
          border: "none",
          background: "none",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        Favorites
      </button>
      <hr style={{ margin: 0 }} />
      <button
        onClick={() => {
          onClose();
          navigate("/userpanel/shopping");
        }}
        style={{
          width: "100%",
          padding: "10px",
          border: "none",
          background: "none",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        Shopping
      </button>
      <hr style={{ margin: 0 }} />
      <button
        onClick={handleLogout}
        style={{
          width: "100%",
          padding: "10px",
          border: "none",
          background: "none",
          textAlign: "left",
          cursor: "pointer",
          color: "red",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>

      {ReactDOM.createPortal(
        <Snackbar
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          TransitionComponent={SlideTransition}
          sx={{
            position: "fixed",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1300,
            minWidth: "unset",
          }}
        >
          <Alert
            variant="solid"
            color={snackbarType}
            sx={{
              backgroundColor:
                snackbarType === "error" ? "#f44336" : "#4caf50",
              color: "white",
              fontWeight: "bold",
              borderRadius: "0.5rem",
            }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>,
        document.body
      )}
    </div>
  );
}

export default ProfileDropdown;
