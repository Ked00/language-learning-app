import React from "react";
import {Button} from "@mui/material";
import { standardButton } from "../../types/Buttontypes";

export function BlockButton(props: standardButton) {
  return (
    <Button
      className={`p-3 ${props.className}`}
      href={props.href}
      variant={props.type}
      sx={{background: `${props.background}`}}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
