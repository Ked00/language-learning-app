import React, {useState} from "react";
import {FormControl, Container} from "@mui/material";
import {Row, Col} from "react-bootstrap";

// components
import {SelectLanguage} from "../../components/Dialog/SelectLanguage";
import {SelectSubject} from "../../components/Dialog/SelectSubject";
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {BlockButton} from "../../components/Buttons/BlockButton";
import {SelectOption} from "../../components/Inputs/SelectOption";

// types
import {companyInfo} from "../../types/companyInfo";
import {CollectionsBookmarkSharp} from "@mui/icons-material";
import {useSelected} from "../../hooks/selected";

export function DashBoard() {
  const [lastItem, setLastItem] = useState(false);
  const controlSelected = useSelected();

  const selected = () => {
    setLastItem(true);
  };

  return (
    <div className="vh-100">
      <MainNavbar />

      <div className="vh-100 d-flex flex-column align-items-center">
        <h1 className="p-md-5 p-4 mt-md-1 mt-3">Your results are here</h1>

        <FormControl className="w-75 d-flex align-items-center">
          <SelectLanguage
            label="Learning langugae"
            className="mb-3 w-75 h-25 border border-dark text-dark rounded "
            controlSelected={controlSelected}
          />

          <SelectOption
            label="Sentences filter"
            id="game-type"
            item={[{text: "All sentences"}, {text: "Correct"}, {text: "Wrong"}]}
          />

          <SelectOption
            label="Sentences"
            id="sentences"
            item={[{text: "Today"}, {text: "This Week"}, {text: "This Month"}, {text: "This Year"}]}
            onClick={selected}
          />
        </FormControl>

        {lastItem && (
          <div className="w-100 h-100">
            <Container>
              <div className="d-flex justify-content-between w-100">
                <h3>Sentences</h3>
                <h3 className="me-5">Your answer</h3>
              </div>

              <Row className="h-25 w-100 mt-4 border rounded p-1">
                <Col>
                  <div className="d-flex">
                    <img src={require("../../images/logo.png")} width="40px" height="40px" />
                    <p className="p-2">My Shoes are blue</p>
                  </div>

                  <div className="d-flex">
                    <img src={require("../../images/logo.png")} width="40px" height="40px" />
                    <p className="">Mi zapatos eres azul</p>
                  </div>
                </Col>

                <Col className="text-end">We rode into a blue car today</Col>
              </Row>
              <Row className="text-center mt-3">
                <BlockButton type="contained" text="Try again" />
              </Row>

              <Row className="h-25 w-100 mt-5 border rounded p-1">
                <Col>
                  <div className="d-flex">
                    <img src={require("../../images/logo.png")} width="40px" height="40px" />
                    <p className="p-2">My Shoes are blue</p>
                  </div>

                  <div className="d-flex">
                    <img src={require("../../images/logo.png")} width="40px" height="40px" />
                    <p className="">Mi zapatos eres azul</p>
                  </div>
                </Col>

                <Col className="text-end">We rode into a blue car today</Col>
              </Row>
              <Row className="text-center mt-3">
                <BlockButton type="contained" text="Try again" />
              </Row>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
}
