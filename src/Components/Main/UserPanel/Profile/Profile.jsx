import React, { useState, useEffect } from "react";
import "./Profile.css";
import UserPanelStatistic from "../UserPanelStatistics/UserPanelStatistic";
import UserPanelInfoBox from "../UserPanelInfoBox/UserPanelInfoBox";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useAuth } from "../../../AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { updateEmail } from "firebase/auth";
import { updatePassword } from "firebase/auth";
import Snackbar from "@mui/joy/Snackbar";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import FormLabel from "@mui/joy/FormLabel";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase-config";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState("");
  const [initialName, setInitialName] = useState("");

  const [isEditingLastName, setIsEditingLastName] = useState(false);
  const [lastName, setLastName] = useState("");
  const [initialLastName, setInitialLastName] = useState("");

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [initialEmail, setInitialEmail] = useState("");

  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [location, setLocation] = useState("");
  const [initialLocation, setInitialLocation] = useState("");

  const [password, setPassword] = useState("");

  const [showPasswordEdition, setShowPasswordEdition] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    if (currentUser?.displayName) {
      const parts = currentUser.displayName.trim().split(/\s+/);
      setName(parts[0] || "");
      setInitialName(parts[0] || "");
      setLastName(parts[1] || "");
      setInitialLastName(parts[1] || "");
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser?.email) {
      setEmail(currentUser.email);
      setInitialEmail(currentUser.email);
    }
  }, [currentUser]);

  useEffect(() => {
  setLocation(currentUser?.location || "");
}, [currentUser]);

  const saveName = async () => {
    const trimmedName = name.trim();
    if (trimmedName === initialName) {
      setIsEditingName(false);
      return;
    }
    try {
      await updateProfile(currentUser, {
        displayName: `${trimmedName} ${lastName}`.trim(),
      });
      setInitialName(trimmedName);
      setSnackbarMessage("Name updated successfully!");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Profile not updated:", error);
    } finally {
      setIsEditingName(false);
    }
  };

  const saveLastName = async () => {
    const trimmedLastName = lastName.trim();
    if (trimmedLastName === initialLastName) {
      setIsEditingLastName(false);
      return;
    }
    try {
      await updateProfile(currentUser, {
        displayName: `${name} ${trimmedLastName}`.trim(),
      });
      setInitialLastName(trimmedLastName);
      setSnackbarMessage("Last name updated successfully!");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Profile not updated:", error);
    } finally {
      setIsEditingLastName(false);
    }
  };

  const saveEmail = async () => {
    const trimmedEmail = email.trim();
    if (trimmedEmail === initialEmail) {
      setIsEditingEmail(false);
      return;
    }
    try {
      await updateEmail(currentUser, trimmedEmail);
      setInitialEmail(trimmedEmail);
      setSnackbarMessage("Email updated successfully!");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Email not updated:", error);
    } finally {
      setIsEditingEmail(false);
    }
  };

  const saveLocation = async () => {
    const trimmedLocation = location.trim();
    if (trimmedLocation === initialLocation) {
      setIsEditingLocation(false);
      return;
    }
    try {
      await updateProfile(currentUser, {
        location: trimmedLocation,
      });
      setInitialLocation(trimmedLocation);
      setSnackbarMessage("Location updated successfully!");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Profile not updated:", error);
    } finally {
      setIsEditingLocation(false);
    }
  };

  const savePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      setPasswordError("The passwords do not match.");
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(
        currentUser.email,
        currentPassword
      );
      await reauthenticateWithCredential(currentUser, credential);
      await updatePassword(currentUser, newPassword);
      setSnackbarMessage("Password changed successfully!");
      setSnackbarOpen(true);
      setShowPasswordEdition(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setPasswordError("");
    } catch (error) {
      setPasswordError(
        "The password could not be changed. The current password is incorrect or the session has timed out."
      );
      console.error("Password not changed:", error);
    }
  };

  const isValidPasswordChange = () => {
    return (
      currentPassword.trim().length > 0 &&
      newPassword.trim().length >= 6 &&
      confirmNewPassword.trim().length >= 6 &&
      newPassword === confirmNewPassword
    );
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setSnackbarMessage("You are logged out.");
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage("Logout error: " + error.message);
      setSnackbarOpen(true);
    }
  };

  return (
    <div className="profileContainer">
      <div className="profileInfoContainer">
        <div className="profileInfo">
          <div className="profileBackBUttonAndHeadingBox">
            <IconButton
              className="backButton"
              variant="outlined"
              sx={{ borderRadius: "50%" }}
              onClick={() => navigate(-1)}
            >
              <ArrowBackIosRoundedIcon />
            </IconButton>
            <h1>Profile</h1>
          </div>
          <FormLabel className="profileLabel">Name</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            readOnly={!isEditingName}
            onKeyDown={(e) => {
              if (e.key === "Enter" && isEditingName) {
                saveName();
              }
            }}
            placeholder="Name"
            sx={{ width: 300, mb: 1, "& input": { fontSize: "20px" } }}
            endDecorator={
              <Button
                variant="plain"
                onClick={() => {
                  if (isEditingName) {
                    saveName();
                  } else {
                    setIsEditingName(true);
                  }
                }}
              >
                {isEditingName ? (
                  <CheckRoundedIcon style={{ color: "#2A2929" }} />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                  >
                    <path
                      d="M10.5671 2.8889L14.9771 7.2869M1.58008 19.2499H18.0001M1.93408 14.7349L2.42708 11.3099C2.4536 11.0861 2.5572 10.8786 2.72008 10.7229L12.3851 1.0589C12.5093 0.932215 12.6642 0.839779 12.8347 0.790547C13.0051 0.741315 13.1854 0.736957 13.3581 0.777896C14.2498 1.01462 15.0606 1.48879 15.7041 2.1499C16.3696 2.79196 16.848 3.60288 17.0881 4.4959C17.1251 4.66875 17.1187 4.84809 17.0695 5.01788C17.0203 5.18767 16.9298 5.34263 16.8061 5.4689L7.14208 15.1329C6.97546 15.2868 6.76769 15.3889 6.54408 15.4269L3.10708 15.9189C2.94698 15.9405 2.78405 15.9247 2.6311 15.8727C2.47816 15.8206 2.33938 15.7338 2.22568 15.6191C2.11198 15.5043 2.02646 15.3647 1.97586 15.2113C1.92526 15.0579 1.91096 14.8948 1.93408 14.7349Z"
                      stroke="#2A2929"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Button>
            }
          />
          <FormLabel className="profileLabel">Last name</FormLabel>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            readOnly={!isEditingLastName}
            onKeyDown={(e) => {
              if (e.key === "Enter" && isEditingLastName) {
                saveLastName();
              }
            }}
            placeholder="Last name"
            sx={{ width: 300, mb: 1, "& input": { fontSize: "20px" } }}
            endDecorator={
              <Button
                variant="plain"
                onClick={() => {
                  if (isEditingLastName) {
                    saveLastName();
                  } else {
                    setIsEditingLastName(true);
                  }
                }}
              >
                {isEditingLastName ? (
                  <CheckRoundedIcon style={{ color: "#2A2929" }} />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                  >
                    <path
                      d="M10.5671 2.8889L14.9771 7.2869M1.58008 19.2499H18.0001M1.93408 14.7349L2.42708 11.3099C2.4536 11.0861 2.5572 10.8786 2.72008 10.7229L12.3851 1.0589C12.5093 0.932215 12.6642 0.839779 12.8347 0.790547C13.0051 0.741315 13.1854 0.736957 13.3581 0.777896C14.2498 1.01462 15.0606 1.48879 15.7041 2.1499C16.3696 2.79196 16.848 3.60288 17.0881 4.4959C17.1251 4.66875 17.1187 4.84809 17.0695 5.01788C17.0203 5.18767 16.9298 5.34263 16.8061 5.4689L7.14208 15.1329C6.97546 15.2868 6.76769 15.3889 6.54408 15.4269L3.10708 15.9189C2.94698 15.9405 2.78405 15.9247 2.6311 15.8727C2.47816 15.8206 2.33938 15.7338 2.22568 15.6191C2.11198 15.5043 2.02646 15.3647 1.97586 15.2113C1.92526 15.0579 1.91096 14.8948 1.93408 14.7349Z"
                      stroke="#2A2929"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Button>
            }
          />
          <FormLabel className="profileLabel">Email</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={!isEditingEmail}
            onKeyDown={(e) => {
              if (e.key === "Enter" && isEditingEmail) {
                saveEmail();
              }
            }}
            placeholder="Email"
            sx={{ width: 300, mb: 1, "& input": { fontSize: "20px" } }}
            endDecorator={
              <Button
                variant="plain"
                onClick={() => {
                  if (isEditingEmail) {
                    saveEmail();
                  } else {
                    setIsEditingEmail(true);
                  }
                }}
              >
                {isEditingEmail ? (
                  <CheckRoundedIcon style={{ color: "#2A2929" }} />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                  >
                    <path
                      d="M10.5671 2.8889L14.9771 7.2869M1.58008 19.2499H18.0001M1.93408 14.7349L2.42708 11.3099C2.4536 11.0861 2.5572 10.8786 2.72008 10.7229L12.3851 1.0589C12.5093 0.932215 12.6642 0.839779 12.8347 0.790547C13.0051 0.741315 13.1854 0.736957 13.3581 0.777896C14.2498 1.01462 15.0606 1.48879 15.7041 2.1499C16.3696 2.79196 16.848 3.60288 17.0881 4.4959C17.1251 4.66875 17.1187 4.84809 17.0695 5.01788C17.0203 5.18767 16.9298 5.34263 16.8061 5.4689L7.14208 15.1329C6.97546 15.2868 6.76769 15.3889 6.54408 15.4269L3.10708 15.9189C2.94698 15.9405 2.78405 15.9247 2.6311 15.8727C2.47816 15.8206 2.33938 15.7338 2.22568 15.6191C2.11198 15.5043 2.02646 15.3647 1.97586 15.2113C1.92526 15.0579 1.91096 14.8948 1.93408 14.7349Z"
                      stroke="#2A2929"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Button>
            }
          />
          <FormLabel className="profileLabel">Location</FormLabel>
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            readOnly={!isEditingLocation}
            onKeyDown={(e) => {
              if (e.key === "Enter" && isEditingLocation) {
                saveLocation();
              }
            }}
            placeholder="Location"
            sx={{ width: 300, mb: 1, "& input": { fontSize: "20px" } }}
            endDecorator={
              <Button
                variant="plain"
                onClick={() => {
                  if (isEditingLocation) {
                    saveLocation();
                  } else {
                    setIsEditingLocation(true);
                  }
                }}
              >
                {isEditingLocation ? (
                  <CheckRoundedIcon style={{ color: "#2A2929" }} />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                  >
                    <path
                      d="M10.5671 2.8889L14.9771 7.2869M1.58008 19.2499H18.0001M1.93408 14.7349L2.42708 11.3099C2.4536 11.0861 2.5572 10.8786 2.72008 10.7229L12.3851 1.0589C12.5093 0.932215 12.6642 0.839779 12.8347 0.790547C13.0051 0.741315 13.1854 0.736957 13.3581 0.777896C14.2498 1.01462 15.0606 1.48879 15.7041 2.1499C16.3696 2.79196 16.848 3.60288 17.0881 4.4959C17.1251 4.66875 17.1187 4.84809 17.0695 5.01788C17.0203 5.18767 16.9298 5.34263 16.8061 5.4689L7.14208 15.1329C6.97546 15.2868 6.76769 15.3889 6.54408 15.4269L3.10708 15.9189C2.94698 15.9405 2.78405 15.9247 2.6311 15.8727C2.47816 15.8206 2.33938 15.7338 2.22568 15.6191C2.11198 15.5043 2.02646 15.3647 1.97586 15.2113C1.92526 15.0579 1.91096 14.8948 1.93408 14.7349Z"
                      stroke="#2A2929"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Button>
            }
          />
          {!showPasswordEdition && (
            <>
              <FormLabel className="profileLabel">Password</FormLabel>
              <Input
                type="password"
                value={showPasswordEdition ? password : "********"}
                readOnly={!showPasswordEdition}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                sx={{ width: 300, mb: 1, "& input": { fontSize: "20px" } }}
                endDecorator={
                  <Button
                    variant="plain"
                    onClick={() => setShowPasswordEdition(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                    >
                      <path
                        d="M10.5671 2.8889L14.9771 7.2869M1.58008 19.2499H18.0001M1.93408 14.7349L2.42708 11.3099C2.4536 11.0861 2.5572 10.8786 2.72008 10.7229L12.3851 1.0589C12.5093 0.932215 12.6642 0.839779 12.8347 0.790547C13.0051 0.741315 13.1854 0.736957 13.3581 0.777896C14.2498 1.01462 15.0606 1.48879 15.7041 2.1499C16.3696 2.79196 16.848 3.60288 17.0881 4.4959C17.1251 4.66875 17.1187 4.84809 17.0695 5.01788C17.0203 5.18767 16.9298 5.34263 16.8061 5.4689L7.14208 15.1329C6.97546 15.2868 6.76769 15.3889 6.54408 15.4269L3.10708 15.9189C2.94698 15.9405 2.78405 15.9247 2.6311 15.8727C2.47816 15.8206 2.33938 15.7338 2.22568 15.6191C2.11198 15.5043 2.02646 15.3647 1.97586 15.2113C1.92526 15.0579 1.91096 14.8948 1.93408 14.7349Z"
                        stroke="#2A2929"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                }
              />
            </>
          )}
          {showPasswordEdition && (
            <div className="passwordEditionOverlay">
              <div className="passwordEdition">
                <h2>Change password</h2>
                <Input
                  type="password"
                  placeholder="Current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  sx={{ width: 300, mb: 1, "& input": { fontSize: "20px" } }}
                />
                <Input
                  type="password"
                  placeholder="New password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  sx={{ width: 300, mb: 1, "& input": { fontSize: "20px" } }}
                />
                <Input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  sx={{ width: 300, mb: 1, "& input": { fontSize: "20px" } }}
                />
                {passwordError && (
                  <p style={{ color: "red" }}>{passwordError}</p>
                )}
                <div
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}
                >
                  <Button
                    variant="outlined"
                    onClick={
                      isValidPasswordChange()
                        ? savePassword
                        : () => setShowPasswordEdition(false)
                    }
                    color={isValidPasswordChange() ? "primary" : "neutral"}
                  >
                    {isValidPasswordChange() ? "Confirm" : "Close"}
                  </Button>
                </div>
              </div>
            </div>
          )}
          <ListItemButton className="userPanelButton" onClick={handleLogout}>
            <ListItemDecorator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <path
                  d="M16.5 4C14.852 2.159 12.666 1 10 1C8.8181 1 7.64778 1.23279 6.55585 1.68508C5.46392 2.13738 4.47177 2.80031 3.63604 3.63604C2.80031 4.47177 2.13738 5.46392 1.68508 6.55585C1.23279 7.64778 1 8.8181 1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C12.666 19 14.852 17.841 16.5 16M21 10L12 10M21 10C21 9.3 19.006 7.992 18.5 7.5M21 10C21 10.7 19.006 12.008 18.5 12.5"
                  stroke="#F60909"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ListItemDecorator>
            <span className="profileLogout">Logout</span>
          </ListItemButton>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={() => {
              setSnackbarOpen(false);
              if (snackbarMessage === "You are logged out.") {
                navigate("/");
              }
            }}
            variant="soft"
            color="success"
          >
            {snackbarMessage}
          </Snackbar>
        </div>
        <UserPanelInfoBox />
      </div>
      <UserPanelStatistic />
    </div>
  );
}

export default Profile;
