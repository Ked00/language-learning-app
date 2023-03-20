import React, {useState, useEffect} from "react";
import {FormControl, Container} from "@mui/material";
import {Row, Col} from "react-bootstrap";
import axios from "axios";
import {useGetHistory} from "../../business-logic/api-calls/getCorrect";

// components
import {SelectLanguage} from "../../components/Dialog/SelectLanguage";
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {BlockButton} from "../../components/Buttons/BlockButton";
import {SelectOption} from "../../components/Inputs/SelectOption";

// types
import {useSelected} from "../../reuseable-hooks/selected";
import {handleMouseDown} from "../../business-logic/speech-api/speech-to-text";

export function History() {
  const [language, setLanguage] = useState("");
  const [filter, setFilter] = useState("");
  const getData = useGetHistory();

  const handleLanguage = (value: string) => {
    setLanguage(value);
  };

  const handleFilter = (value: string) => {
    setFilter(value);
  };

  useEffect(() => {}, [getData.response]);

  const mapQuizResults = getData.response.map((item) => {
    return (
      <Container className="mb-4">
        <Row className="h-25 w-100 mt-4 border rounded p-1 d-flex align-items-center">
          <Col>
            <div className="d-flex">
              {/* <img src="http://localhost:3000/images/logo.png" width="40px" height="40px" /> */}
              <h3 className="p-2">5/10</h3>
            </div>
          </Col>

          <Col className="text-end">
            <h3>100</h3>
          </Col>
        </Row>
        <Row className="text-center my-3 w-100">
          <BlockButton type="contained" text="Try again" />
        </Row>
      </Container>
    );
  });

  return (
    <div className="vh-100">
      <MainNavbar />
      <div className="vh-100 d-flex flex-column align-items-center">
        <h1 className="p-md-5 p-4 mt-md-1 mt-3">History</h1>
        <FormControl className="w-75 d-flex align-items-center">
          <SelectOption
            label="Select language"
            id="language"
            item={[{text: "Spanish"}, {text: "English"}]}
            getValue={handleLanguage}
          />
          <BlockButton
            text="View"
            type="contained"
            className="w-75 mb-5"
            onClick={() => getData.api_call(language)}
          />
        </FormControl>

        <div className="w-100 h-100">
          <Container>
            <div className="d-flex justify-content-between w-100">
              <h3>Ratio</h3>
              <h3 className="me-5">Points</h3>
            </div>
          </Container>
          {getData.response.length >= 2 ? mapQuizResults : ""}
        </div>
      </div>
    </div>
  );
}
