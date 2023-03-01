import React from "react";
import {CheckCircleOutline} from "@mui/icons-material/";
import {Grow} from "@mui/material";

// components
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {BlockButton} from "../../components/Buttons/BlockButton";
import {companyInfo} from "../../types/companyInfo";

export function SuccessfulPurchase() {
  return (
    <div className="vh-100 text-center">
      <MainNavbar />
      <div className="p-5">
        <h1>Payment was successful</h1>
        <Grow appear={true} in={true}>
          <CheckCircleOutline
            color="success"
            sx={{width: "20%", height: "20%"}}
          />
        </Grow>
        <p className="fs-2 mt-2">
          Welcome to <span className="text-danger"> WROFF </span> Premium
        </p>
        <BlockButton
          type="contained"
          text="Continue"
          className="w-50 mt-5"
          background={companyInfo.company_color}
        />
      </div>
    </div>
  );
}
