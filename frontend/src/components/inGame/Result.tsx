import React from "react";
import {BlockButton} from "../Buttons/BlockButton";
import {useNavigate} from "react-router-dom";

import { Correct } from "./Correct";
import { Incorrect } from "./Incorrect";

type Props = {
  question: string;
  chances: number;
  show: boolean;
  end: boolean;
  onClick: () => void;
  transcript: string;
};

export function Result(props: Props) {
  const navigate = useNavigate();

  return (
    <div className="text-center p-3">
      <h1>Your answer</h1>
      {props.transcript.toLowerCase() === props.question.toLowerCase() ? 
        <Correct transcript={props.transcript} /> : <Incorrect transcript={props.transcript}/>
      }

      {props.transcript.toLowerCase() === props.question.toLowerCase() ? (
        <p>You got 10 points</p>
      ) : (
        <p>{`You have ${props.chances} more tries`}</p>
      )}

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
          onClick={() => navigate("/end")}
        />
      )}
    </div>
  );
}
