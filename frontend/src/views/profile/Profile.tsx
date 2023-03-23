import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {Avatar, Container} from "@mui/material";

import {updateUserInfo} from "../../business-logic/api-calls/UserInfo";
// components
import {NavigationNavbar} from "../../components/Navigation/NavigationNavbar";
import {SelectLanguage} from "../../components/Dialog/SelectLanguage";
import {BlockButton} from "../../components/Buttons/BlockButton";
import {FormGroup} from "../../components/Inputs/FormGroup";
// types
import {companyInfo} from "../../types/companyInfo";
// hooks
import {useSelected} from "../../reuseable-hooks/selected";
import { useUserInfo } from "../../business-logic/api-calls/profile/userInfo";

export function Profile() {
  const controlSelected = useSelected();
  const user = useUserInfo();

  useEffect(() => {
    user.getInfo();
  }, []);

  return (
    <div className="vh-100">
      <NavigationNavbar />
      <div className="d-flex flex-column align-items-center mt-5">
        <h1>Edit Profile</h1>
        <Avatar
          className="my-3"
          sx={{width: "200px", height: "200px"}}
          // src="https://lh3.googleusercontent.com/a/AEdFTp6lkeA83eNqexHSq1Svr-Y_mHngymXPNQIyIJ3r=s96-c"
        />
      </div>

      <Container>
        <Form className="d-flex flex-column justify-content-center align-items-center">
          <FormGroup
            controlId="firstNameControl"
            label="First Name"
            name="first"
            value={user.info.first}
            onChange={user.updateInfoObject}
          />
          <FormGroup
            controlId="lastNameControl"
            label="Last Name"
            name="last"
            value={user.info.last}
            onChange={user.updateInfoObject}
          />
        </Form>

        <BlockButton
          text="Confirm changes"
          type="contained"
          className="w-100 my-3"
          background={companyInfo.company_color}
          onClick={() => user.postNewInfo()}
        />
      </Container>
    </div>
  );
}