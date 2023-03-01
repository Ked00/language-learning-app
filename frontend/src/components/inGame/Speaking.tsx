import React, {useState} from "react";
import {VolumeUp} from "@mui/icons-material";
import {Container} from "@mui/material";
import {useSpeechRecognition} from "react-speech-recognition";
// components
import {BlockButton} from "../Buttons/BlockButton";
// logic
import {
  startListening,
  stopListening,
} from "../../business-logic/speech-api/speech-to-text";

export function Speaking() {
  const {browserSupportsSpeechRecognition} = useSpeechRecognition();
  const [toggle, setToggle] = useState("Start speaking")

  return (
    <div className="vh-100 bg-secondary">
      {!browserSupportsSpeechRecognition ? (
        <h1 className="text-center p-5">Browser not Supported</h1>
      ) : (
        <Container className="vh-100 d-flex align-items-center justify-content-center flex-column">
          <VolumeUp sx={{width: "300px", height: "300px", color: "white"}} />
          <BlockButton
            type="contained"
            text={toggle}
            className="w-75 mt-5 bg-white text-dark"
            onMouseDown={startListening}
            onMouseUp={stopListening}
            onTouchStart={startListening}
            onTouchEnd={stopListening}
          />
        </Container>
      )}
    </div>
  );
}
