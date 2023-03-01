import React from "react";
import {KeyboardVoice} from "@mui/icons-material";
import {Container} from "@mui/material";

// components
import {BlockButton} from "../Buttons/BlockButton";

export function Listen() {
  return (
    <div className="vh-100 bg-secondary">
      <Container className="vh-100 d-flex align-items-center justify-content-center flex-column">
        <KeyboardVoice sx={{width: "300px", height: "300px", color: "white"}} />
        <BlockButton
          type="contained"
          text="Start listening"
          className="w-75 mt-5 bg-white text-dark"
        />
      </Container>
    </div>
  );
}
