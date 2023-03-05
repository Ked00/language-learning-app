import React from "react";
import {Clear} from "@mui/icons-material";
import {BlockButton} from "../Buttons/BlockButton";
import {useNavigate} from "react-router-dom";
import {useSpeechRecognition} from "react-speech-recognition";


type Props = {
  question: string;
  chances: number;
  show: boolean;
  end: boolean;
  onClick: () => void;
};

export function Result(props: Props) {
  const navigate = useNavigate();
  const {finalTranscript} = useSpeechRecognition();
  
  return (
    <div className="text-center p-3">
      <h1>Your answer</h1>
      {finalTranscript.toLowerCase() === props.question ? (
        <p>
          {finalTranscript}
          <span>
            <img
              src={require("../../images/check.png")}
              width="40px"
              height="40px"
            />
          </span>
        </p>
      ) : (
        <p className="text-danger">
          {finalTranscript}
          <span>
            <Clear color="error" fontSize="large" />
          </span>
        </p>
      )}

      {finalTranscript.toLowerCase() === props.question ? (
        <p>You got 10 points</p>
      ) : (
        <p>{`You have ${props.chances} more tries`}</p>
      )}

      {/* doesnt hide */}

      {!props.end ? (
        <BlockButton
          type="contained"
          text="Next sentence"
          className="w-md-75 w-100"
          onClick={props.onClick}
        />
      ) : (
        <BlockButton
          type="contained"
          text="End"
          className="w-md-75 w-100 bg-danger"
          onClick={props.onClick}
        />
      )}
    </div>
  );
}
