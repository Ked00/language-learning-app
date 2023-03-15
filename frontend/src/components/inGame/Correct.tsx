import React from "react";

type Props = {
  transcript: string;
};

export function Correct(props: Props) {
  return (
    <p>
      {props.transcript}
      <span>
        <img src="http://localhost:3000/images/check.png" width="40px" height="40px" />
      </span>
    </p>
  );
}
