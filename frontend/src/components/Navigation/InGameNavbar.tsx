import React from "react";
import {AppBar, Avatar} from "@mui/material/";
import CircularProgress from "@mui/joy/CircularProgress";
import { useNavigate } from "react-router-dom";

// components
import {SideMenu} from "./SideMenu";
import {Logo} from "../Logo/Logo";

// logic
import {companyInfo} from "../../types/companyInfo";

export function InGameNavbar() {
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
            src={require("../../images/userPic.jpeg")}
            onClick={() => navigate("/profile")}
          />
        </div>

        <div></div>

        <Logo width="50px" height="50px" />
      </div>
    </AppBar>
  );
}
