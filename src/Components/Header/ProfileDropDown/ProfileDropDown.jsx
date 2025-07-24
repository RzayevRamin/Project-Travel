import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-config";

function ProfileDropdown({ onClose }) {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

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
      await signOut(auth);
      onClose();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error.message);
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
          navigate("/notification");
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
        Notifications
      </button>
      <hr style={{ margin: 0 }} />
      <button
        onClick={() => {
          onClose();
          navigate("/message");
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
        Messages
      </button>
      <hr style={{ margin: 0 }} />
      <button
        onClick={() => {
          onClose();
          navigate("/favorites");
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
          navigate("/shopping");
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
    </div>
  );
}

export default ProfileDropdown;