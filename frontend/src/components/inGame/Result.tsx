import React from "react";
import {Clear} from "@mui/icons-material";
import {BlockButton} from "../Buttons/BlockButton";
import { useNavigate } from "react-router-dom";

type Props = {
  question: string;
  answer: string;
  chances: number;
  show: boolean;
  end:boolean
  onClick?: () => void | void;
};

export function Result(props: Props) {
  const navigate = useNavigate();
  return (
    <div className="text-center p-3">
      <h1>Your answer</h1>
      {props.answer.toLowerCase() === props.question ? (
        <p>
          {props.answer}
          <span>
            <img
              src={require("../../images/check.png")}
              width="40px"
              height="40px"
              // className="float-end"
            />
          </span>
        </p>
      ) : (
        <p className="text-danger">
          {props.answer}
          <span>
            <Clear color="error" fontSize="large" />
          </span>
        </p>
      )}

      {props.answer.toLowerCase() === props.question ? (
        <p>You got 10 points</p>
      ) : (
        <p>{`You have ${props.chances} more tries`}</p>
      )}

      {!props.end ? <BlockButton
        type="contained"
        text="Next sentence"
        className="w-md-75 w-100"
        onClick={props.onClick}
      /> : 
      <BlockButton
        type="contained"
        text="End"
        className="w-md-75 w-100 bg-danger"
        onClick={()=> navigate("/end")}
      />}
    </div>
  );
}
