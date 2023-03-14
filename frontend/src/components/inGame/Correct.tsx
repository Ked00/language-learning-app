import React from "react";

type Props ={
    transcript: string
}

export function Correct(props:Props) {
  return (
    <p>
      {props.transcript}
      <span>
        <img src={require("../../images/check.png")} width="40px" height="40px" />
      </span>
    </p>
  );
}
