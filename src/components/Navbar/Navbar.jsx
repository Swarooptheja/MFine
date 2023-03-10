import React, { useState } from "react";
import "./Navbar.css";
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { RxAvatar } from "react-icons/rx";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import circuitlogo from "./logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const local = JSON.parse(localStorage.getItem("ADDAUTH")) || [];
  const { isAuth } = useSelector((ele) => ele.Authreducer);

  const [classes, setclasses] = useState("donotshownavbar");
  const Navi = useNavigate();

  let handlesignup=()=>{
    Navi("/signup")
  }
  let handlelogin=()=>{
    Navi("/login")
  }
  let handleimg=()=>{
    Navi("/")
  }

  return (
    <>
      <div className="Navbar_container">
        <nav>
          <img onClick={handleimg} src={circuitlogo} alt="circuitlogo" />
          <div id="navlink">
            <div>
              <a href="/healthcheck">
                <h3>Health Check</h3>
              </a>
            </div>
            <div>
              <a href="/healthcheck"><h3>Self Checks</h3></a>
            </div>
          </div>
          <ul className={classes}>
            {/* ************************************************ */}

            {isAuth ? (
              <>
                <h1>Welcome {local.fullname}</h1>
              </>
            ) : (
              <li>
                <a onClick={() => setclasses("donotshownavbar")}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<AiOutlineDown />}
                      height="3.3rem"
                      className={"Loginandsign"}
                      border="none"
                      backgroundColor={"white"}
                    >
                      <p>
                        <RxAvatar className="Avatar" /> Login & SignUp
                      </p>
                    </MenuButton>
                    <MenuList marginTop={"1"}>
                      <MenuItem
                        fontSize={"1.2rem"}
                        width="16rem"
                        border={"none"}
                        onClick={handlelogin}
                      >
                        Login
                      </MenuItem>
                      <MenuItem
                        fontSize={"1.2rem"}
                        width="16rem"
                        border={"none"}
                        onClick={handlesignup}
                      >
                        SignUp
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </a>
              </li>
            )}
            {/* *********************************************************** */}

            <ImCross
              className="crossicon commonIcon"
              onClick={() => {
                setclasses("donotshownavbar");
              }}
            />
          </ul>
          <ImMenu
            className="Menuicon commonIcon"
            onClick={() => {
              setclasses("shownavbar");
            }}
          />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
