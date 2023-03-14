import React from "react";
import {Clear} from "@mui/icons-material";

type Props = {
  transcript: string;
};

export function Incorrect(props: Props) {
  return (
    <p className="text-danger">
      {props.transcript}
      <span>
        <Clear color="error" fontSize="large" />
      </span>
    </p>
  );
}
