import React from "react";
import {Container} from "@mui/material";
// components
import {NoNavigationNav} from "../../components/Navigation/NoNavigationNav";
import {BlockButton} from "../../components/Buttons/BlockButton";
// types
import {companyInfo} from "../../types/companyInfo";
// logic
import {GoogleAuth} from "../../business-logic/authentication/GoogleAuth";
import {FaceBookAuth} from "../../business-logic/authentication/FaceBookAuth";

export function Login() {
  const google = GoogleAuth();
  const faceBook = FaceBookAuth();
  return (
    <div className="vh-100">
      <NoNavigationNav />
      <div className="h-50 my-5 text-center">
        <img
          src="http://localhost:3000/images/onBoarding.jpg" 
          width="85%"
          height="100%"
        />
      </div>

      <div className="ps-md-5 ms-md-3 pe-xl-5 me-xl-5 p-3">
        <Container>
          <h1>Let’s get started!</h1>
          <h3>Sign in to your Language teacher account</h3>
        </Container>
      </div>

      <div className="d-grid gap-3 p-4">
        <BlockButton
          type="contained"
          text="Sign in using Google"
          background={companyInfo.company_color}
          onClick={google.getAuthenticated}
        />
        
        <BlockButton
          type="outlined"
          text="Sign in using FaceBook"
          onClick={faceBook.getAuthenticated}
        />
      </div>
    </div>
  );
}
