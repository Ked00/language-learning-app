import React, {useEffect, useState, ChangeEvent} from "react";
import {Avatar, Container} from "@mui/material";
import {Form} from "react-bootstrap";
import {Edit} from "@mui/icons-material";
import axios from "axios";
import {updateUserInfo} from "../../business-logic/api-calls/UserInfo";
import {useNavigate} from "react-router-dom";

// components
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {SelectLanguage} from "../../components/Dialog/SelectLanguage";
import {BlockButton} from "../../components/Buttons/BlockButton";
import {companyInfo} from "../../types/companyInfo";

// hooks
import {useUpdateInputValue} from "../../hooks/textFieldInput";
import {useSelected} from "../../hooks/selected";
import {useRedirect} from "../../hooks/redirect";

// types
import {userInfo} from "../../types/userInfo";

export function Profile() {
  const [user, setUser] = useState({email: ""});
  const controlSelected = useSelected();
  const navigate = useNavigate();
  const updateInput = useUpdateInputValue();

  useEffect(() => {
    axios.get("/profile/profileInfo").then((res) =>
      setUser({email: res.data})
    );
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
          <Form.Group className="w-100 mb-3" controlId="firstNameControl">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder={updateInput.userInput.first}
              value={updateInput.userInput.first}
              onChange={updateInput.updateInput}
              name="first"
              className="p-4"
            />
          </Form.Group>

          <Form.Group className="w-100 mb-3" controlId="lastNameControl">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder={updateInput.userInput.last}
              value={updateInput.userInput.last}
              onChange={updateInput.updateInput}
              name="last"
              className="p-4"
            />
          </Form.Group>

          <div className="w-100 text-center mt-3">
            <SelectLanguage
              label="Native language"
              className="w-100 text-dark"
              controlSelected={controlSelected}
            />
          </div>
        </Form>

        <div className="mt-3" onClick={() => navigate("/subscription")}>
          <h5 className="text-danger">Premium Account</h5>
          <p className="text-secondary">Enjoy your learning without ads anymore</p>
        </div>

        <BlockButton
          text="Confirm changes"
          type="contained"
          className="w-100 my-3"
          background={companyInfo.company_color}
          // there has to be a better way
          onClick={() => updateUserInfo(user.email, updateInput.userInput, controlSelected.selected)}
        />
      </Container>
    </div>
  );
}
