import React from "react";
import "./Login.css";
import LoginCarousel from "./LoginCarousel/LoginCarousel";
import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Link from "@mui/joy/Link";
import Checkbox from "@mui/joy/Checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";
import VerificationInput from "react-verification-input";
import IconButton from "@mui/joy/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link as RouterLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import {
  auth,
  googleProvider,
  facebookProvider,
  appleProvider,
} from "../../../firebase-config";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  let mode = "login";

  if (path === "/login/signup") mode = "signup";
  else if (path === "/login/forgot") mode = "verification";
  else if (path === "/login/verify") mode = "verificationCode";
  else if (path === "/login/new-password") mode = "newPassword";

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      alert("You are signed in with Google: " + user.email);
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      alert("You are logged in with Facebook: " + user.email);
      navigate("/");
    } catch (error) {
      console.error("Facebook login error: ", error.message);
    }
  };

  const handleAppleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, appleProvider);
      const user = result.user;
      alert("You are signed in with Apple: " + user.email);
      navigate("/");
    } catch (error) {
      console.error("Apple login error: ", error.message);
    }
  };

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email or phone number must be entered.")
        .test(
          "emailOrPhoneCheck",
          "Email or phone format is incorrect.",
          (value) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
            /^\+\d{10,15}$/.test(value)
        ),
      password: Yup.string().required("Password cannot be empty."),
    }),

    onSubmit: async (values) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        const user = userCredential.user;
        alert("Login successful: " + user.email);
        navigate("/");
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          alert("Such user does not exist.");
        } else if (error.code === "auth/wrong-password") {
          alert("The password is incorrect.");
        } else if (error.code === "auth/invalid-credential") {
          alert("Email or password is incorrect.");
        } else {
          alert("Login error: " + error.message);
        }
      }
    },
  });

  const signFormik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email or phone number must be entered.")
        .test(
          "emailOrPhoneCheck",
          "Email or phone format is incorrect.",
          (value) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
            /^\+\d{10,15}$/.test(value)
        ),
      username: Yup.string()
        .required("Username cannot be empty.")
        .min(3, "At least 3 characters"),
      password: Yup.string()
        .required("Password cannot be empty.")
        .min(8, "At least 8 characters")
        .matches(/[A-Z]/, "Enter a capital letter.")
        .matches(/[a-z]/, "Enter a lowercase letter.")
        .matches(/\d/, "Enter a number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Enter a character"),
      confirmPassword: Yup.string()
        .required("Confirmation cannot be empty.")
        .oneOf([Yup.ref("password"), null], "Password not compatible"),
    }),
    onSubmit: async (values) => {
      try {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        navigate("/");
      } catch (error) {
        alert("Sign up failed: " + error.message);
      }
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const [verificationCode, setVerificationCode] = React.useState("");

  const handleSendVerificationCode = async () => {
  if (!signFormik.values.email) {
    alert("Please enter your email or phone");
    return;
  }
  try {
    const response = await fetch("https://backtest-2-pm0t.onrender.com/send-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailOrPhone: signFormik.values.email }),
    });
    const data = await response.json();
    if (response.ok) {
      alert("Verification code sent! Please check your email or phone.");
      navigate("/login/verify");
    } else {
      alert(data.message || "Failed to send verification code");
    }
  } catch (error) {
    alert("Network error: " + error.message);
  }
};

  const handleVerifyCode = async () => {
    if (verificationCode.length !== 4) {
      alert("Please enter the 4-digit verification code");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailOrPhone: signFormik.values.email,
          code: verificationCode,
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Code verified successfully!");
        navigate("/login/new-password"); // yeni şifrə yaratmaq üçün
      } else {
        alert("Invalid verification code.");
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  const handleCreateNewPassword = async () => {
    try {
      // Backend endpoint-də müvafiq parol yeniləmə route olmalıdır, məsələn:
      const response = await fetch("http://localhost:3001/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailOrPhone: signFormik.values.email,
          password: signFormik.values.password,
          // əgər lazım olsa, verification code əlavə etmək
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Password changed successfully!");
        navigate("/login");
      } else {
        alert(data.message || "Failed to change password");
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  return (
    <div className="LoginPageContainer">
      <LoginCarousel />
      <div className="LogFormContainer">
        <Sheet
          sx={{
            width: 320,
            minHeight: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "md",
            boxShadow: "md",
            p: 2,
            overflow: "auto",
            zIndex: 10,
            position: "relative",
          }}
        >
          <div className="loginContainer">
            {mode !== "verification" &&
              mode !== "verificationCode" &&
              mode !== "newPassword" && (
                <>
                  <div className="signupLoginButtonsContainer">
                    <Button
                      className="goToLogin"
                      size="sm"
                      variant={mode !== "login" ? "outlined" : "solid"}
                      color="primary"
                      onClick={() => navigate("/login")}
                    >
                      Log in
                    </Button>
                    <Button
                      className="goToSignUp"
                      size="sm"
                      variant={mode === "signup" ? "solid" : "outlined"}
                      color="primary"
                      onClick={() => navigate("/login/signup")}
                    >
                      Sign up
                    </Button>
                  </div>
                </>
              )}
            {mode === "login" && (
              <div className="loginBox">
                <form
                  onSubmit={loginFormik.handleSubmit}
                  className="signUpInputsContainer"
                >
                  <div className="inputsContainer">
                    <FormControl
                      error={
                        loginFormik.touched.email && !!loginFormik.errors.email
                      }
                    >
                      <FormLabel>Email or phone</FormLabel>
                      <Input
                        name="email"
                        placeholder="email@email.com or +994501234567"
                        value={loginFormik.values.email}
                        onChange={loginFormik.handleChange}
                        onBlur={loginFormik.handleBlur}
                      />
                      {loginFormik.touched.email &&
                        loginFormik.errors.email && (
                          <div style={{ color: "red", fontSize: "0.8rem" }}>
                            {loginFormik.errors.email}
                          </div>
                        )}
                    </FormControl>
                    <FormControl
                      error={
                        loginFormik.touched.password &&
                        !!loginFormik.errors.password
                      }
                    >
                      <FormLabel>Password</FormLabel>
                      <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={loginFormik.values.password}
                        onChange={loginFormik.handleChange}
                        onBlur={loginFormik.handleBlur}
                      />
                      {loginFormik.touched.password &&
                        loginFormik.errors.password && (
                          <div style={{ color: "red", fontSize: "0.8rem" }}>
                            {loginFormik.errors.password}
                          </div>
                        )}
                    </FormControl>
                    <Link
                      component={RouterLink}
                      to="/login/forgot"
                      underline="hover"
                      sx={{ alignSelf: "flex-end", mb: 1 }}
                      onClick={() => navigate("/login/forgot")}
                    >
                      Forgot password?
                    </Link>
                    <Checkbox
                      label="Remember me"
                      variant="solid"
                      defaultChecked
                    />

                    <Button
                      className="loginButton"
                      variant="solid"
                      type="submit"
                    >
                      Log in
                    </Button>
                  </div>
                </form>
              </div>
            )}
            {mode === "signup" && (
              <div className="signUpBox">
                <form
                  onSubmit={signFormik.handleSubmit}
                  className="signUpInputsContainer"
                >
                  <FormControl
                    error={
                      signFormik.touched.email && !!signFormik.errors.email
                    }
                  >
                    <FormLabel>Email or Phone</FormLabel>
                    <Input
                      name="email"
                      placeholder="email@email.com or +994501234567"
                      value={signFormik.values.email}
                      onChange={signFormik.handleChange}
                      onBlur={signFormik.handleBlur}
                    />
                    {signFormik.touched.email && signFormik.errors.email && (
                      <div style={{ color: "red", fontSize: "0.8rem" }}>
                        {signFormik.errors.email}
                      </div>
                    )}
                  </FormControl>
                  <FormControl
                    error={
                      signFormik.touched.username &&
                      !!signFormik.errors.username
                    }
                  >
                    <FormLabel>Username</FormLabel>
                    <Input
                      name="username"
                      placeholder="Username"
                      value={signFormik.values.username}
                      onChange={signFormik.handleChange}
                      onBlur={signFormik.handleBlur}
                    />
                    {signFormik.touched.username &&
                      signFormik.errors.username && (
                        <div style={{ color: "red", fontSize: "0.8rem" }}>
                          {signFormik.errors.username}
                        </div>
                      )}
                  </FormControl>
                  <FormControl
                    error={
                      signFormik.touched.password &&
                      !!signFormik.errors.password
                    }
                  >
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={signFormik.values.password}
                      onChange={signFormik.handleChange}
                      onBlur={signFormik.handleBlur}
                    />
                    {signFormik.touched.password &&
                      signFormik.errors.password && (
                        <div style={{ color: "red", fontSize: "0.8rem" }}>
                          {signFormik.errors.password}
                        </div>
                      )}
                  </FormControl>
                  <FormControl
                    error={
                      signFormik.touched.confirmPassword &&
                      !!signFormik.errors.confirmPassword
                    }
                  >
                    <FormLabel>Confirm password</FormLabel>
                    <Input
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      value={signFormik.values.confirmPassword}
                      onChange={signFormik.handleChange}
                      onBlur={signFormik.handleBlur}
                    />
                    {signFormik.touched.confirmPassword &&
                      signFormik.errors.confirmPassword && (
                        <div style={{ color: "red", fontSize: "0.8rem" }}>
                          {signFormik.errors.confirmPassword}
                        </div>
                      )}
                  </FormControl>
                  <Button
                    className="signUpButton"
                    variant="solid"
                    type="submit"
                  >
                    Sign up
                  </Button>
                </form>
                <div className="signUpText">
                  <p>
                    By signing up, you agree to our{" "}
                    <Link href="#">Terms of Service</Link> and{" "}
                    <Link href="#">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
            )}
            {mode !== "verification" &&
              mode !== "verificationCode" &&
              mode !== "newPassword" && (
                <div className="otherSignMethodsContainer">
                  <div className="signUMethodText">
                    <p>Or continue with</p>
                  </div>
                  <div className="signMethodsIcon">
                    <Link onClick={handleAppleLogin}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="29"
                        viewBox="0 0 24 29"
                        fill="none"
                      >
                        <path
                          d="M17.8188 6.57715C19.7269 6.57733 21.7485 7.62281 23.187 9.42676C18.4706 12.0272 19.2338 18.8029 23.9995 20.6152C23.3444 22.0755 23.029 22.728 22.185 24.0215C21.0076 25.8272 19.3469 28.0763 17.2876 28.0928C15.4601 28.1124 14.9885 26.8943 12.5073 26.9092C10.026 26.9224 9.50828 28.1158 7.67723 28.0977C5.61994 28.0792 4.04697 26.0506 2.86962 24.2451C-0.424669 19.1996 -0.77118 13.2765 1.26024 10.126C2.7053 7.88917 4.98415 6.58024 7.12547 6.58008C9.30461 6.58008 10.6762 7.78311 12.4809 7.7832C14.2315 7.7832 15.298 6.57715 17.8188 6.57715ZM17.2661 0C17.5174 1.70662 16.8231 3.37862 15.9067 4.56152C14.9263 5.8303 13.2364 6.81196 11.5991 6.76074C11.3002 5.12693 12.0655 3.44321 12.9966 2.31152C14.0179 1.06266 15.7685 0.104247 17.2661 0Z"
                          fill="#0B0B0A"
                        />
                      </svg>
                    </Link>
                    <Link onClick={handleGoogleLogin}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M11.9993 4.73784C14.2526 4.73784 15.7726 5.71117 16.6393 6.5245L20.026 3.21784C17.946 1.28451 15.2393 0.0978394 11.9993 0.0978394C7.30596 0.0978394 3.25263 2.79117 1.2793 6.71117L5.1593 9.7245C6.13263 6.83117 8.82596 4.73784 11.9993 4.73784Z"
                          fill="#EA4335"
                        />
                        <path
                          d="M23.5195 12.3645C23.5195 11.3779 23.4395 10.6579 23.2662 9.91119H11.9995V14.3645H18.6128C18.4795 15.4712 17.7595 17.1379 16.1595 18.2579L19.9462 21.1912C22.2128 19.0979 23.5195 16.0179 23.5195 12.3645Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M5.17285 14.4712C4.91951 13.7245 4.77285 12.9245 4.77285 12.0978C4.77285 11.2712 4.91951 10.4712 5.15951 9.72451L1.27951 6.71118C0.466178 8.33785 -0.000488281 10.1645 -0.000488281 12.0978C-0.000488281 14.0312 0.466178 15.8578 1.27951 17.4845L5.17285 14.4712Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M11.9991 24.0979C15.2391 24.0979 17.9591 23.0312 19.9458 21.1912L16.1591 18.2579C15.1458 18.9645 13.7858 19.4579 11.9991 19.4579C8.82581 19.4579 6.13248 17.3645 5.17248 14.4712L1.29248 17.4845C3.26581 21.4045 7.30581 24.0979 11.9991 24.0979Z"
                          fill="#34A853"
                        />
                      </svg>
                    </Link>
                    <Link onClick={handleFacebookLogin}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M23.9995 12.0978C23.9995 5.46974 18.6276 0.0978394 11.9995 0.0978394C5.37141 0.0978394 -0.000488281 5.46974 -0.000488281 12.0978C-0.000488281 18.0885 4.38701 23.0525 10.1245 23.9525V15.5666H7.07761V12.0978H10.1245V9.45409C10.1245 6.44704 11.9152 4.78534 14.6573 4.78534C15.9698 4.78534 17.3433 5.01971 17.3433 5.01971V7.97284H15.8292C14.3386 7.97284 13.8745 8.89864 13.8745 9.84784V12.0978H17.2026L16.6706 15.5666H13.8745V23.9525C19.612 23.0525 23.9995 18.0885 23.9995 12.0978Z"
                          fill="#1877F2"
                        />
                        <path
                          d="M16.6706 15.5666L17.2026 12.0978H13.8745V9.84784C13.8745 8.89864 14.3386 7.97284 15.8292 7.97284H17.3433V5.01971C17.3433 5.01971 15.9698 4.78534 14.6573 4.78534C11.9152 4.78534 10.1245 6.44704 10.1245 9.45409V12.0978H7.07764V15.5666H10.1245V23.9525C10.7362 24.0486 11.362 24.0978 11.9995 24.0978C12.637 24.0978 13.2628 24.0486 13.8745 23.9525V15.5666H16.6706Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
          </div>
          {mode === "verification" && (
            <div className="verificationContainer">
              <div className="verificationBox">
                <h3 className="verificationHeading">Verification</h3>
                <FormControl className="verificationInputBox">
                  <FormLabel className="verificationText">
                    Please enter your email adress or phone number to receive a
                    verification code
                  </FormLabel>
                  <Input
                    className="verificationInput"
                    name="email"
                    placeholder="email@email.com or +994501234567"
                    value={signFormik.values.email}
                    onChange={signFormik.handleChange}
                    onBlur={signFormik.handleBlur}
                  />
                  {signFormik.touched.email && signFormik.errors.email && (
                    <div style={{ color: "red", fontSize: "0.8rem" }}>
                      {signFormik.errors.email}
                    </div>
                  )}
                </FormControl>
                <Button
                  className="sendCodeButton"
                  variant="solid"
                  onClick={handleSendVerificationCode}
                >
                  Send
                </Button>
              </div>
            </div>
          )}
          {mode === "verificationCode" && (
            <div className="verifyCodeEntryBox">
              <h3 className="verifyCodeHeading">
                Enter your verification code
              </h3>
              <VerificationInput
                classNames={{
                  container: "container",
                  character: "character",
                  characterInactive: "character--inactive",
                  characterSelected: "character--selected",
                  characterFilled: "character--filled",
                }}
                length={4}
                onChange={setVerificationCode}
              />
              <FormLabel className="verifyCodeText">
                {signFormik.values.email
                  ? `We sent a four-digit verification code to your email ${signFormik.values.email}. You can check your inbox.`
                  : "We sent a four-digit verification code to your email. You can check your inbox."}
              </FormLabel>
              <Link className="verifyCodeAgain">
                I didn't receive the code? Send again
              </Link>
              <Button className="verifyCode" onClick={handleVerifyCode} >Verify</Button>
            </div>
          )}
          {mode === "newPassword" && (
            <div className="newPasswordBox">
              <h3 className="newPassHeading">Create new password</h3>
              <FormControl
                className="newPassInputBox"
                error={
                  signFormik.touched.password && !!signFormik.errors.password
                }
              >
                <FormLabel>Password</FormLabel>
                <Input
                  className="newPassInput"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={signFormik.values.password}
                  onChange={signFormik.handleChange}
                  onBlur={signFormik.handleBlur}
                  endDecorator={
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      variant="plain"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  }
                />
                {signFormik.touched.password && signFormik.errors.password && (
                  <div style={{ color: "red", fontSize: "0.8rem" }}>
                    {signFormik.errors.password}
                  </div>
                )}
              </FormControl>
              <FormControl
                className="newPassInputBox"
                error={
                  signFormik.touched.confirmPassword &&
                  !!signFormik.errors.confirmPassword
                }
              >
                <FormLabel>Confirm password</FormLabel>
                <Input
                  className="newPassInput"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={signFormik.values.confirmPassword}
                  onChange={signFormik.handleChange}
                  onBlur={signFormik.handleBlur}
                  endDecorator={
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      variant="plain"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  }
                />
                {signFormik.touched.confirmPassword &&
                  signFormik.errors.confirmPassword && (
                    <div style={{ color: "red", fontSize: "0.8rem" }}>
                      {signFormik.errors.confirmPassword}
                    </div>
                  )}
              </FormControl>
              <Button
                className="newPassButton"
                variant="solid"
                onClick={handleCreateNewPassword}
              >
                Create new password
              </Button>
            </div>
          )}
        </Sheet>
      </div>
    </div>
  );
}

export default Login;
