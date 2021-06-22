import React, { useEffect, useState } from "react";
import "./SignIn.css";
import Auth from "./components/Auth";
import axios from "axios";
import { TextField, Checkbox } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import SubLine from "./components/SubLine";
import OtpField from "./components/OtpField";
import { useHistory } from "react-router-dom";
function SignIn() {
  const initialValues = {
    email: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(initialValues);
  const [status, setStatus] = useState(0);
  const [errorMessages, setErrorMessages] = useState({});
  const [resetPasswordStatus, setResetPasswordStatus] = useState(0);
  const [resetPasswordMesssage, setResetPasswordMessage] = useState({});
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState("");
  let history = useHistory();

  const handleInputChange = (e) => {
    e.preventDefault();

    setCredentials((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
    setStatus(0);
    setErrorMessages({});
    setResetPasswordMessage({});
    setResetPasswordStatus(0);
  };
  useEffect(() => {
    if (localStorage.id != undefined) history.replace("/");
  }, []);

  const handleCredentialsSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: credentials.email,
      username: credentials.password,
    };
    axios
      .post(
        "https://finalyticsad.fintract.co.uk/auth/login/",
        `email=${credentials.email}&password=${credentials.password}`
      )
      .then((res) => {
        setStatus(res.status);
        setUserId(res.data.id);
      })
      .catch((error) => {
        if (error.response) {
          setStatus(error.response.status);
          setErrorMessages(error.response.data);
        } else window.alert(error);
      });
  };
  const handleEmailVerification = (e) => {
    e.preventDefault();
    setErrorMessages({});
    axios
      .post(
        "https://finalyticsad.fintract.co.uk/auth/refresh-token/",
        `email=${credentials.email}`
      )
      .then((res) => {
        setStatus(1);
      })
      .catch((error) => {
        window.alert("There is some internal error. Please try again later");
      });
  };
  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (credentials.email === "") window.alert("Email field cannot be empty");
    else if (
      window.confirm(
        "Are you sure you want to reset your password?\nNote: New Password will be sent tou your email."
      )
    ) {
      axios
        .post(
          "https://finalyticsad.fintract.co.uk/auth/reset-password/",
          `email=${credentials.email}`
        )
        .then((res) => {
          setResetPasswordStatus(res.status);
          setResetPasswordMessage(res.data);
        })
        .catch((error) => {
          if (error.response) {
            setResetPasswordStatus(error.response.status);
            setResetPasswordMessage(error.response.data);
          } else
            window.alert(
              "There is some internal error. Please try again later"
            );
        });
    }
  };
  const handleOtpChange = (otp) => {
    setOtp(otp);
  };
  const handleOtpSubmit = (e) => {
    axios
      .post(
        `https://finalyticsad.fintract.co.uk/auth/login/${userId}/`,
        `otp=${otp}`
      )
      .then((res) => {
        console.log(res.data);
        console.log(res);
        localStorage.id = userId;
        localStorage.username = res.data.username;
        history.replace(`/`);
      })
      .catch((error) => {
        if (error.response) {
          window.alert("Invalid OTP");
          setStatus(0);
        } else console.log(error);
        setOtp("");
      });
    // history.replace("/",)
  };
  return (
    <Auth>
      {status === 200 ? (
        <div className="signin-container">
          <p className="signin-header">Enter OTP</p>
          <OtpField value={otp} onChange={handleOtpChange}></OtpField>
          <div onClick={handleOtpSubmit}>
            <button className="signin-button">
              <p className="signin-button-text">Submit</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="signin-container">
          <p className="signin-header">Sign In</p>
          <form className="signin-form" onSubmit={handleCredentialsSubmit}>
            <TextField
              InputProps={{
                startAdornment: <FontAwesomeIcon icon={faUser} />,
              }}
              className="text-field"
              id="outlined-basic"
              label="Email"
              variant="filled"
              margin="normal"
              position="start"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
            />
            {errorMessages.email && <SubLine>{errorMessages.email}</SubLine>}

            <TextField
              InputProps={{
                startAdornment: <FontAwesomeIcon icon={faLock} />,
              }}
              className="text-field"
              id="outlined-basic"
              label="Password"
              variant="filled"
              margin="normal"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
            {errorMessages.password && (
              <SubLine>{errorMessages.password}</SubLine>
            )}
            <button className="signin-button" type="submit">
              <p className="signin-button-text">Sign In</p>
            </button>
          </form>
          {status === 401 && errorMessages.detail === "Email is not verified" && (
            <div
              onClick={handleEmailVerification}
              className="email-verify-tag"
              style={{
                color: "white",
                fontSize: "20px",
                textDecoration: "underline",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              Please verify your email first
            </div>
          )}
          {status === 401 && errorMessages.detail !== "Email is not verified" && (
            <SubLine style={{ marginTop: "10px" }} size="20px">
              {errorMessages.detail}
            </SubLine>
          )}

          {status === 1 && (
            <div
              style={{ color: "white", fontSize: "20px", marginTop: "10px" }}
            >
              Verification Link Sent!
            </div>
          )}
          <div>
            <p className="footer-text">
              Don't have an account?
              <a className="footer-text-link" href={"/signup"}>
                {" "}
                Sign Up
              </a>
            </p>
            <div onClick={handlePasswordReset}>
              <p
                className="footer-text"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Forgot Password?{" "}
              </p>
            </div>
            {resetPasswordStatus === 200 && (
              <p className="footer-text">
                {Object.values(resetPasswordMesssage)[0]}
              </p>
            )}
            {resetPasswordStatus === 400 && (
              <p>{Object.values(resetPasswordMesssage)[0]}</p>
            )}
          </div>
        </div>
      )}
    </Auth>
  );
}

export default SignIn;
