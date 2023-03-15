import React from "react";
import {AppBar, Avatar} from "@mui/material/";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// TYPES
import {companyInfo} from "../../types/companyInfo";
import {SideMenu} from "./SideMenu";

// components
import {Logo} from "../Logo/Logo";
import {useNavigate} from "react-router-dom";

export function MainNavbar() {
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
            src="localhost://images/userPic.jpeg"
            onClick={() => navigate("/profile")}
          />
        </div>

        <Logo width="50px" height="50px" />
      </div>
    </AppBar>
  );
}
