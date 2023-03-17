import React from "react";
import {Container} from "@mui/material";
import {useNavigate} from "react-router-dom";

// components
import {BlockButton} from "../../components/Buttons/BlockButton";
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {companyInfo} from "../../types/companyInfo";

export function SuccessfulRegistration() {
  const navigate = useNavigate();
  return (
    <div className="vh-100">
      <MainNavbar />
      <div className="h-50 mt-5 mb-3 d-flex justify-content-center align-items-center">
        <img src="http://localhost:3000/images/succesfulRegistration.png"  />
      </div>

      <div className="d-grid gap-3 p-4 text-center">
        <h1>Registration completed successfully </h1>
        <a href="/profile" className="text-dark">
          You can edit your personal profile here
        </a>
        <Container>
          <BlockButton
            type="contained"
            text="Continue"
            background={companyInfo.company_color}
            className="w-100"
            onClick={() => navigate("/history")}
          />
        </Container>
      </div>
    </div>
  );
}
