import React, { useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import profile from "../Navbar/logo.png";
import { useDispatch } from "react-redux";
import "../Login/Login.css";
import axios from "axios";

const Signup = () => {
  const toast = useToast();
  const disptach = useDispatch();
  const Navigate = useNavigate();
  const [AdminData, setAdminData] = useState({
    email: "",
    password: "",
    fullname: "",
    mobile: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...AdminData, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (AdminData.password.length < 7) {
      toast({
        title: `Please Enter Minimum 7 character`,
        position: "top",
        duration: 3000,
      });
    } else if (AdminData.mobile.length !== 10) {
      toast({
        title: `Please Enter Correct Number`,
        position: "top",
        duration: 3000,
      });
    } else {
      console.log(AdminData);
      localStorage.setItem("ADDAUTH", JSON.stringify(AdminData));
      toast({
        title: `Signup SuccessFull`,
        position: "top",
        duration: 1000,
      });
      Navigate("/login");
    }

    setAdminData({
      email: "",
      password: "",
      fullname: "",
      mobile: "",
    });
  };

  return (
    <>
      <div className="mainLoginPage MainSignupPage">
        <div className="rightside signuprightside">
          <div className="Profileimg">
            <img src={profile} alt="profile" />
          </div>
          <p>The minute you need..</p>
          <div>
            <form onSubmit={HandleSubmit}>
              <h3>Email</h3>
              <input
                type="email"
                name="email"
                value={AdminData.email}
                onChange={HandleChange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={AdminData.password}
                onChange={HandleChange}
                required
              />
              <h3>Full Name</h3>
              <input
                type="text"
                name="fullname"
                value={AdminData.fullname}
                onChange={HandleChange}
                required
              />
              <h3>Mobile No</h3>
              <input
                type="number"
                name="mobile"
                value={AdminData.mobile}
                onChange={HandleChange}
                required
              />

              <button type="submit">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
