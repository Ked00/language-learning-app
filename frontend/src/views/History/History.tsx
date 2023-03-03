import React, {useState} from "react";
import {FormControl, Container} from "@mui/material";
import {Row, Col} from "react-bootstrap";

// components
import {SelectLanguage} from "../../components/Dialog/SelectLanguage";
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {BlockButton} from "../../components/Buttons/BlockButton";
import {SelectOption} from "../../components/Inputs/SelectOption";

// types
import {useSelected} from "../../hooks/selected";

export function History() {
  const controlSelected = useSelected();
  return (
    <div className="vh-100">
      <MainNavbar />
      <div className="vh-100 d-flex flex-column align-items-center">
        <h1 className="p-md-5 p-4 mt-md-1 mt-3">History</h1>
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
          />
        </FormControl>
        {/* make its own component */}
          <div className="w-100 h-100">
            <Container>
              <div className="d-flex justify-content-between w-100">
                <h3>Sentences</h3>
                <h3 className="me-5">Your answer</h3>
              </div>
            </Container>
          </div>
      </div>
    </div>
  );
}