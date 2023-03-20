import React, {useEffect} from "react";
import {FormControl, Container} from "@mui/material";
import {Row, Col} from "react-bootstrap";
import {useGetHistory} from "../../business-logic/api-calls/getCorrect";

// components
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {BlockButton} from "../../components/Buttons/BlockButton";
import {SelectOption} from "../../components/Inputs/SelectOption";

export function History() {
  const getData = useGetHistory();

  useEffect(() => {
  }, [getData.response]);

  const mapQuizResults = getData.response.map((item, index) => {
    return (
      <Container className="mb-4" key={index}>
        <Row className="h-25 w-100 mt-4 border rounded p-1 d-flex align-items-center">
          <Col>
            <div className="d-flex">
              {/* <img src="http://localhost:3000/images/logo.png" width="40px" height="40px" /> */}
              <h3 className="p-2">{`${item.correct} / ${item.incorrect}`}</h3>
            </div>
          </Col>

          <Col className="text-end">
            <h3>{item.points}</h3>
          </Col>
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
          />
          <BlockButton
            text="View"
            type="contained"
            className="w-75 mb-5"
            onClick={() => getData.api_call("english")}
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
