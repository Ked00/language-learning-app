import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {Avatar, Container} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";

import {updateUserInfo} from "../../business-logic/api-calls/UserInfo";
// components
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {SelectLanguage} from "../../components/Dialog/SelectLanguage";
import {BlockButton} from "../../components/Buttons/BlockButton";
import {FormGroup} from "../../components/Inputs/FormGroup";
// types
import {companyInfo} from "../../types/companyInfo";
// hooks
import {useUpdateInputValue} from "../../reuseable-hooks/textFieldInput";
import {useSelected} from "../../reuseable-hooks/selected";

export function Profile() {
  const [user, setUser] = useState({email: ""});
  const controlSelected = useSelected();
  const navigate = useNavigate();
  const updateInput = useUpdateInputValue();

  useEffect(() => {
    axios
    .get("/profile/profileInfo")
    .then((res) => setUser({email: res.data}));
  }, []);

  return (
    <div className="vh-100">
      <MainNavbar />
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
            value={updateInput.userInput.first}
            onChange={updateInput.updateInput}
          />

          <FormGroup
            controlId="lastNameControl"
            label="Last Name"
            name="last"
            value={updateInput.userInput.last}
            onChange={updateInput.updateInput}
          />

          <div className="w-100 text-center mt-3">
            <SelectLanguage
              label="Native language"
              className="w-100 text-dark"
              controlSelected={controlSelected}
            />
          </div>
        </Form>

        <BlockButton
          text="Confirm changes"
          type="contained"
          className="w-100 my-3"
          background={companyInfo.company_color}
          // there has to be a better way
          onClick={() =>
            updateUserInfo(user.email, updateInput.userInput, controlSelected.selected)
          }
        />
      </Container>
    </div>
  );
}