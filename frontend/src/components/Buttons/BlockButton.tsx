import React from "react";
import {Button} from "@mui/material";

type Props = {
  type: "text" | "outlined" | "contained";
  text: string;
  background?: string;
  className?: string;
  onClick?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
};
export function BlockButton(props: Props) {
  return (
    <Button
      className={`p-3 ${props.className}`}
      variant={props.type}
      sx={{background: `${props.background}`}}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
    >
      {props.text}
    </Button>
  );
}
