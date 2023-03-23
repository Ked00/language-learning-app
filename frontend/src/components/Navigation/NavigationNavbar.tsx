import React from "react";
import {AppBar, Avatar} from "@mui/material/";
import {useNavigate} from "react-router-dom";

// TYPES
import {companyInfo} from "../../business-logic/types/companyInfo";

// components
import {SideMenu} from "./SideMenu";
import {Logo} from "../Logo/Logo";

export function NavigationNavbar() {
  const navigate = useNavigate();

  return (
    <AppBar
      className="p-4 position-static"
      sx={{background: companyInfo.company_color}}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <SideMenu />
          <Avatar
            className="ms-3"
            src="http://localhost:3000/images/userPic.jpeg"
            onClick={() => navigate("/profile")}
          />
        </div>
        <Logo width="50px" height="50px"/>
      </div>
    </AppBar>
  );
}