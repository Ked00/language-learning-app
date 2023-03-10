import React, {useState} from "react";
import {FormControl, Container} from "@mui/material";
import {Row, Col} from "react-bootstrap";
import axios from "axios"
import {useGetHistory} from "../../business-logic/api-calls/getCorrect"

// components
import {SelectLanguage} from "../../components/Dialog/SelectLanguage";
import {MainNavbar} from "../../components/Navigation/MainNavbar";
import {BlockButton} from "../../components/Buttons/BlockButton";
import {SelectOption} from "../../components/Inputs/SelectOption";

// types
import {useSelected} from "../../reuseable-hooks/selected";

export function History() {
  const getData = useGetHistory()
  // const selected = 
  return (
    <div className="vh-100">
      <MainNavbar />
      <div className="vh-100 d-flex flex-column align-items-center">
        <h1 className="p-md-5 p-4 mt-md-1 mt-3">History</h1>
        <FormControl className="w-75 d-flex align-items-center">
        <SelectOption
            label="Select language"
            id="game-type"
            item={[{text: "Spanish"}, {text: "English"}]}
          />
          <SelectOption
            label="Select filter"
            id="game-type"
            item={[{text: "All sentences"}, {text: "Correct"}, {text: "Wrong"}]}
          />
          <BlockButton text="View" type="contained" className="w-75 mb-5" />
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