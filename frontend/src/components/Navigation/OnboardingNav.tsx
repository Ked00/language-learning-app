import React from "react";
import {AppBar} from "@mui/material/";

// TYPES
import {companyInfo} from "../../types/companyInfo";

export function OnboardingNav() {
  return (
    <AppBar className="p-4 position-static" sx={{background: "#597EB1"}}>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Easy-Start</h1>
        <img src={require("../../images/logo.png")} width="50px" height="50px" />
      </div>
    </AppBar>
  );
}