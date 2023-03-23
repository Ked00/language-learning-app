import React from "react";
import {AppBar} from "@mui/material/";

// TYPES
import {companyInfo} from "../../types/companyInfo";

export function NoNavigationNav() {
  return (
    <AppBar className="p-4 position-static" sx={{background: companyInfo.company_color}}>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Easy-Start</h1>
        <img src="http://localhost:3000/images/logo.png" width="50px" height="50px" />
      </div>
    </AppBar>
  );
}
