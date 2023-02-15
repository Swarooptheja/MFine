import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Login.css";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import profile from "../Navbar/logo.png";

import axios from "axios";
// import * as types from "../../Redux/Login_Redux/Action_Type";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const Navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    console.log(data);
    let localStorageVal = JSON.parse(localStorage.getItem("ADDAUTH")) || [];
    if (localStorageVal.length === 0) {
      toast({
        title: `Incorrect credential`,
        position: "top",
        duration: 1500,
      });
    } else {
      if (localStorageVal.email === email && localStorageVal.password) {
        dispatch({ type: "GET_LOGIN_SUCCESS" });
        toast({
          title: `Login Successfull`,
          position: "top",
          duration: 1500,
        });
        Navigate("/");
      } else {
        toast({
          title: `Incorrect credential`,
          position: "top",
          duration: 1500,
        });
      }
    }
  };

  return (
    <>
      <div className="mainLoginPage">
        <div className="rightside">
          <div className="Profileimg">
            <img src={profile} alt="profile" />
          </div>
          <p>Welcome Back, Hope you are fine..</p>
          <div>
            <form onSubmit={HandleSubmit}>
              <h3>Email ID</h3>
              <input
                type="text"
                name="id"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                required
              />
              <p
                onClick={() => {
                  toast({
                    title: `This feature is not available now.`,
                    position: "top",
                    duration: 3000,
                  });
                }}
              >
                Forgot your password?
              </p>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
